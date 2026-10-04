"use client";

import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useSearchParams } from "next/navigation";

const SUPABASE_URL = "https://qzvdzzvkocmulcfujyea.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_Qwyi2uOXUrH39yGC84RUjg_2c9aAfsG";

type View = "loading" | "login" | "consent" | "error";

type AuthorizationDetails = {
  authorization_id?: string;
  redirect_url?: string;
  redirect_uri?: string;
  scope?: string;
  client?: { name?: string };
};

export default function ConsentClient() {
  const searchParams = useSearchParams();
  const authorizationId = searchParams.get("authorization_id");
  const supabase = useMemo(() => createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY), []);
  const [view, setView] = useState<View>("loading");
  const [details, setDetails] = useState<AuthorizationDetails | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const fail = useCallback((message: string) => {
    setError(message);
    setView("error");
    setBusy(false);
  }, []);

  const loadConsent = useCallback(async () => {
    if (!authorizationId) {
      fail("The authorization request is missing or expired. Start the connection again from Grok Bot.");
      return;
    }

    setView("loading");
    const { data: userData } = await supabase.auth.getUser();
    if (!userData.user) {
      setView("login");
      return;
    }

    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role,active")
      .eq("id", userData.user.id)
      .eq("active", true)
      .single();

    if (profileError || !profile || profile.role !== "admin") {
      fail("An active ProLine administrator account is required.");
      return;
    }

    const { data, error: detailsError } = await supabase.auth.oauth.getAuthorizationDetails(authorizationId);
    if (detailsError || !data) {
      fail(detailsError?.message || "This authorization request is invalid or expired.");
      return;
    }

    const authorization = data as AuthorizationDetails;
    if (!authorization.authorization_id && authorization.redirect_url) {
      window.location.assign(authorization.redirect_url);
      return;
    }

    setDetails(authorization);
    setView("consent");
  }, [authorizationId, fail, supabase]);

  useEffect(() => {
    void loadConsent();
  }, [loadConsent]);

  async function signIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setView("loading");
    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
    setPassword("");
    if (signInError) {
      fail(signInError.message);
      return;
    }
    setBusy(false);
    await loadConsent();
  }

  async function decide(decision: "approve" | "deny") {
    if (!authorizationId) return;
    setBusy(true);
    const result = decision === "approve"
      ? await supabase.auth.oauth.approveAuthorization(authorizationId)
      : await supabase.auth.oauth.denyAuthorization(authorizationId);

    if (result.error || !result.data?.redirect_url) {
      fail(result.error?.message || "The authorization decision could not be completed.");
      return;
    }
    window.location.assign(result.data.redirect_url);
  }

  const scopes = details?.scope?.split(" ").filter(Boolean).join(", ") || "Basic account access";

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-[#f4f7f6] px-6 py-10 text-[#13251f]">
      <div className="w-full max-w-md rounded-2xl border border-[#dce6e1] bg-white p-8 shadow-2xl">
        <div className="mb-6 flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#167d5a] font-extrabold text-white">P</div>
          <strong>ProLine CRM</strong>
        </div>

        {view === "loading" && (
          <>
            <h1 className="text-2xl font-bold">Checking connection…</h1>
            <p className="mt-3 text-[#53665f]">Please wait.</p>
          </>
        )}

        {view === "error" && (
          <>
            <h1 className="text-2xl font-bold">Connection problem</h1>
            <p className="mt-4 rounded-xl bg-red-50 p-4 text-red-800">{error}</p>
            <button className="mt-5 w-full rounded-xl bg-[#e8f0ed] px-4 py-3 font-bold text-[#26473b]" onClick={() => void loadConsent()}>
              Try again
            </button>
          </>
        )}

        {view === "login" && (
          <>
            <h1 className="text-2xl font-bold">Sign in to ProLine</h1>
            <p className="mt-3 leading-6 text-[#53665f]">Use your existing CRM administrator account. Your password goes directly to Supabase Auth.</p>
            <form className="mt-5" onSubmit={signIn}>
              <label className="mb-2 block font-semibold" htmlFor="email">Email</label>
              <input className="mb-4 w-full rounded-xl border border-[#b8c8c1] px-4 py-3" id="email" type="email" autoComplete="username" value={email} onChange={(event) => setEmail(event.target.value)} required />
              <label className="mb-2 block font-semibold" htmlFor="password">Password</label>
              <input className="w-full rounded-xl border border-[#b8c8c1] px-4 py-3" id="password" type="password" autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} required />
              <button className="mt-5 w-full rounded-xl bg-[#167d5a] px-4 py-3 font-bold text-white disabled:opacity-60" type="submit" disabled={busy}>Sign in</button>
            </form>
          </>
        )}

        {view === "consent" && (
          <>
            <h1 className="text-2xl font-bold">Allow CRM access?</h1>
            <p className="mt-3 leading-6 text-[#53665f]"><strong className="text-[#13251f]">{details?.client?.name || "Grok Bot"}</strong> is asking for read-only access to your ProLine CRM.</p>
            <div className="mt-5 space-y-3 rounded-xl bg-[#f4f7f6] p-4 text-sm leading-6">
              <p><strong>It can:</strong> view jobs and tasks, find jobs, summarise the pipeline and prepare an operational plan.</p>
              <p><strong>It cannot:</strong> change CRM records, send messages, make purchases or access MyBuilder.</p>
              <p><strong>Requested permissions:</strong> {scopes}</p>
              <p className="break-all text-xs text-[#53665f]"><strong>Return address:</strong> {details?.redirect_uri || "Not supplied"}</p>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <button className="rounded-xl bg-[#e8f0ed] px-4 py-3 font-bold text-[#26473b] disabled:opacity-60" onClick={() => void decide("deny")} disabled={busy}>Deny</button>
              <button className="rounded-xl bg-[#167d5a] px-4 py-3 font-bold text-white disabled:opacity-60" onClick={() => void decide("approve")} disabled={busy}>Allow access</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
