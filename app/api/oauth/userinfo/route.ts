import { NextRequest } from "next/server";
import { proxyOAuthRequest } from "../_proxy";

export async function GET(request: NextRequest) {
  return proxyOAuthRequest(request, "/oauth/userinfo");
}

export async function POST(request: NextRequest) {
  return proxyOAuthRequest(request, "/oauth/userinfo");
}
