import { NextResponse } from "next/server";

const SITE_ORIGIN = "https://prolineroofingandsolar.co.uk";
const SUPABASE_AUTH_ORIGIN = "https://qzvdzzvkocmulcfujyea.supabase.co/auth/v1";

export async function GET() {
  return NextResponse.json(
    {
      issuer: `${SITE_ORIGIN}/auth/v1`,
      authorization_endpoint: `${SUPABASE_AUTH_ORIGIN}/oauth/authorize`,
      token_endpoint: `${SITE_ORIGIN}/api/oauth/token`,
      jwks_uri: `${SUPABASE_AUTH_ORIGIN}/.well-known/jwks.json`,
      userinfo_endpoint: `${SITE_ORIGIN}/api/oauth/userinfo`,
      registration_endpoint: `${SITE_ORIGIN}/api/oauth/register`,
      scopes_supported: ["openid", "profile", "email", "phone", "offline_access"],
      response_types_supported: ["code"],
      response_modes_supported: ["query"],
      grant_types_supported: ["authorization_code", "refresh_token"],
      subject_types_supported: ["public"],
      id_token_signing_alg_values_supported: ["RS256", "HS256", "ES256"],
      token_endpoint_auth_methods_supported: ["client_secret_basic", "client_secret_post", "none"],
      claims_supported: [
        "sub",
        "aud",
        "iss",
        "exp",
        "iat",
        "auth_time",
        "nonce",
        "email",
        "email_verified",
        "phone_number",
        "phone_number_verified",
        "name",
        "picture",
        "preferred_username",
        "updated_at",
      ],
      code_challenge_methods_supported: ["S256", "plain"],
    },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "public, max-age=300",
      },
    },
  );
}
