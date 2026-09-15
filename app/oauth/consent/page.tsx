import type { Metadata } from "next";
import { Suspense } from "react";
import ConsentClient from "./ConsentClient";

export const metadata: Metadata = {
  title: "Connect ProLine CRM",
  description: "Authorize secure, read-only access to ProLine CRM.",
  robots: { index: false, follow: false },
};

export default function OAuthConsentPage() {
  return (
    <Suspense fallback={<ConsentShell message="Loading secure connection…" />}>
      <ConsentClient />
    </Suspense>
  );
}

function ConsentShell({ message }: { message: string }) {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-[#f4f7f6] px-6 py-10">
      <div className="w-full max-w-md rounded-2xl border border-[#dce6e1] bg-white p-8 shadow-2xl">
        <div className="mb-6 flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#167d5a] font-extrabold text-white">P</div>
          <strong className="text-[#13251f]">ProLine CRM</strong>
        </div>
        <h1 className="text-2xl font-bold text-[#13251f]">Checking connection…</h1>
        <p className="mt-3 text-[#53665f]">{message}</p>
      </div>
    </div>
  );
}
