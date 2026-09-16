const SUPABASE_AUTH_ORIGIN = "https://qzvdzzvkocmulcfujyea.supabase.co/auth/v1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "accept, authorization, content-type",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};

function json(value: unknown, status = 200, extra: Record<string, string> = {}) {
  return new Response(JSON.stringify(value), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json", ...extra },
  });
}

async function proxy(request: Request, upstreamPath: string) {
  const headers = new Headers();
  for (const name of ["accept", "authorization", "content-type"]) {
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

  const body = await upstream.arrayBuffer();
  const contentType = upstream.headers.get("content-type") || "application/json";
  if (contentType.includes("text/html")) {
    return json(
      { error: "temporarily_unavailable", error_description: "The upstream OAuth service returned a non-JSON response." },
      502,
      { "Cache-Control": "no-store" },
    );
  }

  const outgoing = new Headers(corsHeaders);
  outgoing.set("Content-Type", contentType);
  outgoing.set("Cache-Control", upstream.headers.get("cache-control") || "no-store");
  const location = upstream.headers.get("location");
  if (location) outgoing.set("Location", location);

  return new Response(body, { status: upstream.status, headers: outgoing });
}

export default {
  async fetch(request: Request) {
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: corsHeaders });

    const url = new URL(request.url);
    const origin = url.origin;

    if (request.method === "GET" && url.pathname === "/.well-known/oauth-authorization-server") {
      return json(
        {
          issuer: origin,
          authorization_endpoint: `${origin}/authorize`,
          token_endpoint: `${origin}/connect/complete`,
          jwks_uri: `${SUPABASE_AUTH_ORIGIN}/.well-known/jwks.json`,
          userinfo_endpoint: `${origin}/userinfo`,
          registration_endpoint: `${origin}/register`,
          scopes_supported: ["openid", "profile", "email", "phone", "offline_access"],
          response_types_supported: ["code"],
          response_modes_supported: ["query"],
          grant_types_supported: ["authorization_code", "refresh_token"],
          subject_types_supported: ["public"],
          id_token_signing_alg_values_supported: ["RS256", "HS256", "ES256"],
          token_endpoint_auth_methods_supported: ["client_secret_basic", "client_secret_post", "none"],
          claims_supported: [
            "sub", "aud", "iss", "exp", "iat", "auth_time", "nonce", "email", "email_verified",
            "phone_number", "phone_number_verified", "name", "picture", "preferred_username", "updated_at",
          ],
          code_challenge_methods_supported: ["S256", "plain"],
        },
        200,
        { "Cache-Control": "public, max-age=300" },
      );
    }

    if (request.method === "GET" && url.pathname === "/authorize") {
      return Response.redirect(`${SUPABASE_AUTH_ORIGIN}/oauth/authorize${url.search}`, 302);
    }
    if (request.method === "POST" && url.pathname === "/token") return proxy(request, "/oauth/token");
    if (request.method === "POST" && url.pathname === "/connect/complete") return proxy(request, "/oauth/token");
    if (request.method === "POST" && url.pathname === "/register") return proxy(request, "/oauth/clients/register");
    if (["GET", "POST"].includes(request.method) && url.pathname === "/userinfo") return proxy(request, "/oauth/userinfo");
    if (request.method === "GET" && url.pathname === "/health") return json({ ok: true, service: "proline-oauth-proxy" });

    return json({ error: "not_found" }, 404);
  },
};
