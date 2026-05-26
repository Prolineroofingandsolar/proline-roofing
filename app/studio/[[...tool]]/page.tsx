"use client";
import { useEffect } from "react";

// The Sanity Studio requires a live server and cannot be statically exported.
// When running locally (npm run dev) this redirects to the real studio.
// On the deployed site it redirects to the Sanity hosted dashboard.
export default function StudioPage() {
  useEffect(() => {
    const isLocal =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1";

    if (isLocal) {
      // On local dev the studio is served by Next.js dev server — reload without
      // the static-export page to let the dev server handle it properly.
      window.location.href = window.location.href;
    } else {
      window.location.href =
        "https://sanity.io/manage/project/oyv41yrx/studio";
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#111] flex items-center justify-center text-white">
      <p className="text-gray-400 text-sm">Redirecting to Sanity Studio…</p>
    </div>
  );
}

export function generateStaticParams() {
  return [{ tool: [] }];
}
