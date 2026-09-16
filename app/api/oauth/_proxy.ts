import { NextRequest } from "next/server";

const SUPABASE_AUTH_ORIGIN = "https://qzvdzzvkocmulcfujyea.supabase.co/auth/v1";

const responseHeaders = [
  "cache-control",
  "content-type",
  "expires",
  "pragma",
  "retry-after",
] as const;

export async function proxyOAuthRequest(
  request: NextRequest,
  upstreamPath: string,
): Promise<Response> {
  const headers = new Headers();
  for (const name of ["accept", "authorization", "content-type"] as const) {
    const value = request.headers.get(name);
    if (value) headers.set(name, value);
  }

  const method = request.method.toUpperCase();
  const upstream = await fetch(`${SUPABASE_AUTH_ORIGIN}${upstreamPath}`, {
    method,
    headers,
    body: method === "GET" || method === "HEAD" ? undefined : await request.arrayBuffer(),
    redirect: "manual",
  });

  const outgoingHeaders = new Headers({
    "Access-Control-Allow-Origin": "*",
  });
  for (const name of responseHeaders) {
    const value = upstream.headers.get(name);
    if (value) outgoingHeaders.set(name, value);
  }

  const location = upstream.headers.get("location");
  if (location) outgoingHeaders.set("location", location);

  return new Response(await upstream.arrayBuffer(), {
    status: upstream.status,
    headers: outgoingHeaders,
  });
}
