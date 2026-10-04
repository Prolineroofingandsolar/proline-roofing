"use client";

import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

const towns = [
  "Taunton", "Bridgwater", "Wellington", "Glastonbury",
  "Yeovil", "Weston-super-Mare", "Bath", "Bristol",
  "Exeter", "Barnstaple", "Plymouth", "Dorchester",
  "Tiverton", "Wells", "Weymouth",
];

export default function CoverageMap() {
  return (
    <section className="bg-[#111] py-20">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection className="text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">Where We Work</span>
            <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">Coverage Area</h2>
          <p className="text-gray-400 text-sm mt-2">Based in Taunton — serving the whole South West</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Map image */}
          <AnimatedSection direction="left" className="lg:col-span-2">
            <div className="relative w-full overflow-hidden">
              <Image
                src="/ChatGPT Image May 14, 2026, 10_22_04 PM.png"
                alt="ProLine Roofing & Solar coverage area — South West England"
                width={1344}
                height={1008}
                className="w-full h-auto"
                priority
              />
            </div>
          </AnimatedSection>

          {/* Towns sidebar */}
          <AnimatedSection direction="right" className="bg-[#1a1a1a] border border-white/10 p-6">
            <p className="text-[#f97316] font-black text-xs uppercase tracking-widest mb-4 pb-3 border-b border-white/10">
              Areas We Cover
            </p>
            <ul className="space-y-2 mb-6">
              {towns.map((town) => (
                <li key={town} className="flex items-center gap-2 text-gray-300 text-sm">
                  <MapPin className="w-3.5 h-3.5 text-[#f97316] shrink-0" />
                  {town}
                </li>
              ))}
            </ul>
            <p className="text-gray-500 text-xs italic mb-5">
              Not on the list? Call us — we may still be able to help.
            </p>
            <Link
              href="/quote"
              className="flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#e8650f] text-white font-black text-xs uppercase tracking-widest px-4 py-3 transition-all"
            >
              Get a Free Quote <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
