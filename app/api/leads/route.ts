import { NextRequest, NextResponse } from "next/server";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const SERVICES = new Set([
  "Roof Repairs", "New Roof Installation", "Flat Roofing", "Slate or Tile Roofing",
  "Chimney Repairs", "Leadwork", "Fascias, Soffits or Guttering", "Emergency Roofing",
  "Commercial Roofing", "Solar PV System", "Battery Storage", "EV Charging",
  "Roof Maintenance", "Other",
]);

type LeadRequest = {
  name?: string;
  phone?: string;
  email?: string;
  postcode?: string;
  service?: string;
  message?: string;
  company?: string;
};

const requestLog = new Map<string, number[]>();

function isRateLimited(req: NextRequest) {
  const key = req.headers.get("cf-connecting-ip") ?? req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const now = Date.now();
  const recent = (requestLog.get(key) ?? []).filter((time) => now - time < 10 * 60 * 1000);
  if (recent.length >= 5) return true;
  recent.push(now);
  requestLog.set(key, recent);
  return false;
}

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(req: NextRequest) {
  if (isRateLimited(req)) {
    return NextResponse.json(
      { error: "Too many enquiries. Please wait and try again." },
      { status: 429, headers: { "Retry-After": "600" } }
    );
  }

  let body: LeadRequest;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (body.company) return NextResponse.json({ success: true });

  const name = clean(body.name, 100);
  const phone = clean(body.phone, 40);
  const email = clean(body.email, 160);
  const postcode = clean(body.postcode, 12).toUpperCase();
  const service = clean(body.service, 80);
  const message = clean(body.message, 3000);

  const validPhone = !phone || /^[\d\s+\-()]{7,}$/.test(phone);
  const validEmail = !email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validPostcode = /^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/.test(postcode);

  if (!name || (!phone && !email) || !validPhone || !validEmail || !validPostcode || !SERVICES.has(service) || message.length < 10) {
    return NextResponse.json({ error: "Please check the enquiry details." }, { status: 400 });
  }

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.error("Lead submission is missing Supabase configuration.");
    return NextResponse.json({ error: "Enquiries are temporarily unavailable." }, { status: 503 });
  }

  const now = new Date().toISOString();
  const lead = {
    id: crypto.randomUUID(),
    name,
    phone,
    email,
    address: postcode,
    job_type: service,
    stage: "New Lead",
    source: "Website",
    notes: message,
    created_at: now,
    updated_at: now,
  };

  const res = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      Prefer: "return=minimal",
    },
    body: JSON.stringify(lead),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("Supabase lead submission failed:", res.status, text);
    return NextResponse.json(
      { error: "The enquiry could not be saved." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
