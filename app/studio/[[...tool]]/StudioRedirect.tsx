"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function StudioRedirect() {
  useEffect(() => {
    window.location.href = "https://sanity.io/manage/project/oyv41yrx/studio";
  }, []);

  return (
    <div className="min-h-screen bg-[#111] flex flex-col items-center justify-center text-white gap-4">
      <p className="text-gray-400 text-sm">Redirecting to Sanity Studio…</p>
      <a
        href="https://sanity.io/manage/project/oyv41yrx/studio"
        className="text-[#f97316] underline text-sm"
      >
        Click here if not redirected
      </a>
    </div>
  );
}
