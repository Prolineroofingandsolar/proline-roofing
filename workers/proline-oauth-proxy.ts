const SUPABASE_AUTH_ORIGIN = "https://qzvdzzvkocmulcfujyea.supabase.co/auth/v1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "accept, authorization, content-type",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};

function consentPage() {
  const nonce = crypto.randomUUID();
  return new Response(`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="robots" content="noindex,nofollow">
  <title>Connect ProLine CRM</title>
  <style>
    *{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:#f4f7f6;color:#13251f;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;padding:24px}.card{width:min(100%,460px);background:#fff;border:1px solid #dce6e1;border-radius:18px;padding:32px;box-shadow:0 24px 60px rgba(19,37,31,.14)}.brand{display:flex;align-items:center;gap:12px;margin-bottom:24px}.mark{display:grid;place-items:center;width:44px;height:44px;border-radius:12px;background:#167d5a;color:#fff;font-weight:800}h1{font-size:26px;margin:0 0 12px}p{line-height:1.55;color:#53665f}.panel{margin:20px 0;padding:16px;border-radius:12px;background:#f4f7f6;font-size:14px}.panel p{margin:0 0 10px;color:#29473d}.panel p:last-child{margin:0}.actions{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:20px}button,input{width:100%;border-radius:12px;padding:13px 14px;font:inherit}button{border:0;font-weight:750;cursor:pointer}.primary{background:#167d5a;color:#fff}.secondary{background:#e8f0ed;color:#26473b}button:disabled{opacity:.55;cursor:wait}label{display:block;margin:14px 0 7px;font-weight:700}input{border:1px solid #b8c8c1}.error{background:#fff0f0;color:#9a2424;padding:14px;border-radius:12px}.small{font-size:12px;word-break:break-all}
  </style>
</head>
<body>
  <main class="card">
    <div class="brand"><div class="mark">P</div><strong>ProLine CRM</strong></div>
    <section id="content"><h1>Checking connection…</h1><p>Please wait.</p></section>
  </main>
  <script type="module" nonce="${nonce}">
    import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
    const supabase = createClient("https://qzvdzzvkocmulcfujyea.supabase.co", "sb_publishable_Qwyi2uOXUrH39yGC84RUjg_2c9aAfsG");
    const authorizationId = new URLSearchParams(location.search).get("authorization_id");
    const content = document.getElementById("content");
    const escapeHtml = (value) => String(value || "").replace(/[&<>\"']/g, (c) => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
    const showError = (message) => { content.innerHTML = '<h1>Connection problem</h1><p class="error">' + escapeHtml(message) + '</p><button class="secondary" id="retry">Try again</button>'; document.getElementById("retry").onclick = load; };
    const showLogin = () => { content.innerHTML = '<h1>Sign in to ProLine</h1><p>Use your existing CRM administrator account. Your password goes directly to Supabase Auth.</p><form id="login"><label for="email">Email</label><input id="email" type="email" autocomplete="username" required><label for="password">Password</label><input id="password" type="password" autocomplete="current-password" required><button class="primary" type="submit" style="margin-top:20px">Sign in</button></form>'; document.getElementById("login").onsubmit = signIn; };
    const decide = async (decision) => { document.querySelectorAll("button").forEach((button) => button.disabled = true); const result = decision === "approve" ? await supabase.auth.oauth.approveAuthorization(authorizationId) : await supabase.auth.oauth.denyAuthorization(authorizationId); if (result.error || !result.data?.redirect_url) return showError(result.error?.message || "The authorization decision could not be completed."); location.assign(result.data.redirect_url); };
    const showConsent = (details) => { const scopes = (details.scope || "Basic account access").split(" ").filter(Boolean).join(", "); content.innerHTML = '<h1>Allow CRM access?</h1><p><strong>' + escapeHtml(details.client?.name || "Grok Bot") + '</strong> is asking for read-only access to your ProLine CRM.</p><div class="panel"><p><strong>It can:</strong> view jobs and tasks, find jobs, summarise the pipeline and prepare an operational plan.</p><p><strong>It cannot:</strong> change CRM records, send messages, make purchases or access MyBuilder.</p><p><strong>Requested permissions:</strong> ' + escapeHtml(scopes) + '</p><p class="small"><strong>Return address:</strong> ' + escapeHtml(details.redirect_uri || "Not supplied") + '</p></div><div class="actions"><button class="secondary" id="deny">Deny</button><button class="primary" id="allow">Allow access</button></div>'; document.getElementById("deny").onclick = () => decide("deny"); document.getElementById("allow").onclick = () => decide("approve"); };
    async function signIn(event) { event.preventDefault(); const button = event.currentTarget.querySelector("button"); button.disabled = true; const email = document.getElementById("email").value; const password = document.getElementById("password").value; const { error } = await supabase.auth.signInWithPassword({ email, password }); document.getElementById("password").value = ""; if (error) return showError(error.message); await load(); }
    async function load() { if (!authorizationId) return showError("The authorization request is missing or expired. Start the connection again from Grok Bot."); content.innerHTML = '<h1>Checking connection…</h1><p>Please wait.</p>'; const { data: userData } = await supabase.auth.getUser(); if (!userData.user) return showLogin(); const { data: profile, error: profileError } = await supabase.from("profiles").select("role,active").eq("id", userData.user.id).eq("active", true).single(); if (profileError || !profile || profile.role !== "admin") return showError("An active ProLine administrator account is required."); const { data, error } = await supabase.auth.oauth.getAuthorizationDetails(authorizationId); if (error || !data) return showError(error?.message || "This authorization request is invalid or expired."); if (!data.authorization_id && data.redirect_url) return location.assign(data.redirect_url); showConsent(data); }
    load().catch((error) => showError(error?.message || "The secure connection could not be loaded."));
  </script>
</body>
</html>`, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
      "Content-Security-Policy": `default-src 'none'; script-src 'nonce-${nonce}' https://esm.sh; connect-src https://qzvdzzvkocmulcfujyea.supabase.co; style-src 'unsafe-inline'; img-src data:; base-uri 'none'; form-action 'self'; frame-ancestors 'none'`,
      "Referrer-Policy": "no-referrer",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
    },
  });
}

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

    if (request.method === "GET" && url.hostname === "prolineroofingandsolar.co.uk" && url.pathname === "/oauth/consent") {
      return consentPage();
    }

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
