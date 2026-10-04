"use client";

import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

const towns = [
  ["Taunton", "taunton"],
  ["Bridgwater", "bridgwater"],
  ["Wellington", "wellington"],
  ["Glastonbury", "glastonbury"],
  ["Yeovil", "yeovil"],
  ["Weston-super-Mare", "weston-super-mare"],
  ["Bath", "bath"],
  ["Bristol", "bristol"],
  ["Exeter", "exeter"],
  ["Burnham-on-Sea", "burnham-on-sea"],
] as const;

export default function CoverageMap() {
  return (
    <section className="bg-[#111] py-20">
      <div className="mx-auto max-w-6xl px-4">
        <AnimatedSection className="mb-10 text-center">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
            Where We Work
          </p>
          <h2 className="text-3xl font-black uppercase tracking-tight text-white md:text-4xl">
            Current Service Areas
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-400">
            Based in Taunton and regularly working in the areas below. Contact
            us with your postcode to confirm availability for your project.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 gap-px overflow-hidden bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {towns.map(([town, slug]) => (
              <Link
                key={slug}
                href={`/roofer/${slug}`}
                className="group flex items-center gap-3 bg-[#1a1a1a] p-5 text-sm font-bold text-gray-200 transition hover:bg-[#262626] hover:text-white"
              >
                <MapPin className="h-4 w-4 shrink-0 text-[#f97316]" />
                <span className="flex-1">{town}</span>
                <ArrowRight className="h-4 w-4 text-gray-600 transition group-hover:translate-x-1 group-hover:text-[#f97316]" />
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 bg-[#f97316] px-6 py-3 text-xs font-black uppercase tracking-widest text-white"
            >
              View Service Areas <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
