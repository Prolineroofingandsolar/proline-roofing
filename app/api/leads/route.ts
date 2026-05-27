import { NextRequest, NextResponse } from "next/server";

const SUPABASE_URL = "https://qzvdzzvokmulcfujyea.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6dmR6enZrb2NtdWxjZnVqeWVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg4NzIxNjUsImV4cCI6MjA5NDQ0ODE2NX0.g42AvuElukfbpgbg9Y6XImnuHQ2Po5GEaVVGMz3Siu0";

export async function POST(req: NextRequest) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const now = new Date().toISOString();
  const lead = {
    id: crypto.randomUUID(),
    name: body.name,
    phone: body.phone,
    email: body.email,
    address: "",
    job_type: body.service,
    stage: "New Lead",
    source: "Website",
    notes: body.message,
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
    console.error("Supabase error:", res.status, text);
    return NextResponse.json(
      { error: text, status: res.status },
      { status: res.status }
    );
  }

  return NextResponse.json({ success: true });
}
