import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.error("Missing Supabase env vars");
    return NextResponse.json(
      { error: "Server configuration error — env vars missing" },
      { status: 500 }
    );
  }

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

  const res = await fetch(`${supabaseUrl}/rest/v1/leads`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
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
