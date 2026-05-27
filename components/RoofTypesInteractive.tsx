"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  Home,
  Square,
  Shield,
  Wrench,
  Phone,
} from "lucide-react";

type RoofType = {
  id: string;
  icon: React.ElementType;
  label: string;
  tagline: string;
  description: string;
  services: { name: string; detail: string }[];
  materials: string[];
  stats: { value: string; label: string }[];
};

const roofTypes: RoofType[] = [
  {
    id: "pitched",
    icon: Home,
    label: "Pitched Roofs",
    tagline: "Traditional & Built to Last",
    description:
      "Pitched roofs are the most common roof type across the South West — and the one we know best. We work with every tile and slate type, from natural Welsh slate and heritage clay pantiles to modern interlocking concrete systems. Whether you need a single tile replaced or a complete re-roof, we deliver quality that lasts for decades.",
    services: [
      {
        name: "New Roof Installation",
        detail:
          "Full replacement using premium materials. Scaffolding, waste removal and full tidy-up always included.",
      },
      {
        name: "Roof Repairs",
        detail:
          "Missing tiles, broken slates, ridge and hip repairs, re-bedding, re-pointing and flashing repairs.",
      },
      {
        name: "Re-Roofing",
        detail:
          "Strip and relay the full roof covering, renewing underlay and battens where required.",
      },
      {
        name: "Flat-to-Pitch Conversion",
        detail:
          "Convert a problematic flat roof to a pitched tiled roof — a permanent, low-maintenance solution.",
      },
      {
        name: "Emergency Call-Out",
        detail:
          "Active leak or storm damage? We respond fast, day or night, seven days a week.",
      },
    ],
    materials: [
      "Natural Slate",
      "Welsh Slate",
      "Concrete Tiles",
      "Clay Pantiles",
      "Synthetic Slate",
      "Interlocking Tiles",
      "Plain Clay Tiles",
    ],
    stats: [
      { value: "500+", label: "Pitched Roofs Done" },
      { value: "10yr", label: "Workmanship Guarantee" },
      { value: "24/7", label: "Emergency Cover" },
    ],
  },
  {
    id: "flat",
    icon: Square,
    label: "Flat Roofs",
    tagline: "Modern Systems, Long-Term Waterproofing",
    description:
      "Modern flat roofing systems are a world away from the leaky felt of 20 years ago. We install GRP fibreglass, EPDM rubber and torch-on felt systems — each chosen for performance, longevity and value. Perfect for extensions, garages, porches and commercial buildings across Somerset and the South West.",
    services: [
      {
        name: "GRP Fibreglass Roofing",
        detail:
          "Seamless, rigid fibreglass — the gold standard for flat roofs. 25-year material warranty as standard.",
      },
      {
        name: "EPDM Rubber Membrane",
        detail:
          "Single-ply rubber: fully flexible, no seams, highly UV-resistant and incredibly long-lasting.",
      },
      {
        name: "Torch-On Felt Systems",
        detail:
          "SBS modified bitumen felt — a reliable, cost-effective option for garages and outbuildings.",
      },
      {
        name: "Leak Detection & Repair",
        detail:
          "We pinpoint the source of flat roof leaks fast and carry out lasting, fully guaranteed repairs.",
      },
      {
        name: "Flat-to-Pitch Conversion",
        detail:
          "Permanently resolve recurring flat roof problems with a brand new pitched tiled roof.",
      },
    ],
    materials: [
      "GRP Fibreglass",
      "EPDM Rubber",
      "Torch-On Felt",
      "SBS Modified Bitumen",
      "Cold-Applied Liquid",
    ],
    stats: [
      { value: "200+", label: "Flat Roofs Done" },
      { value: "25yr", label: "Material Warranty" },
      { value: "24/7", label: "Emergency Cover" },
    ],
  },
  {
    id: "chimney",
    icon: Shield,
    label: "Chimney & Leadwork",
    tagline: "Precision Craft, Heritage Standards",
    description:
      "Chimney stacks and lead flashings are the most common source of roof leaks — and among the most important to get right. Our team handles everything from basic repointing and new pots to full stack rebuilds and hand-dressed lead flashings, all completed to BS EN 12588 standards.",
    services: [
      {
        name: "Chimney Repointing",
        detail:
          "Re-mortar brickwork joints, re-haunch the flaunching and reset or replace chimney pots.",
      },
      {
        name: "Lead Flashing Replacement",
        detail:
          "Remove failed flashings and fit new hand-dressed lead to BS EN 12588 — done properly, for good.",
      },
      {
        name: "Full Stack Rebuilds",
        detail:
          "Take down and rebuild chimney stacks that are leaning, cracked or seriously deteriorating.",
      },
      {
        name: "New Chimney Pots & Cowls",
        detail:
          "Supply and fit pots, cowls and flue terminals to improve draw, appearance and weatherproofing.",
      },
      {
        name: "Stack Removal & Capping",
        detail:
          "Safe removal of redundant stacks with a neat lead cap to keep out the weather permanently.",
      },
    ],
    materials: [
      "Code 4 Sheet Lead",
      "Code 5 Sheet Lead",
      "Aluminium Flashing",
      "Sand & Cement Mortar",
      "Hydraulic Lime Mortar",
    ],
    stats: [
      { value: "150+", label: "Chimneys Repaired" },
      { value: "BS EN", label: "12588 Compliant" },
      { value: "24/7", label: "Emergency Cover" },
    ],
  },
  {
    id: "fascias",
    icon: Wrench,
    label: "Fascias & Guttering",
    tagline: "Refresh Your Roofline, Stop the Rot",
    description:
      "Damaged or rotten fascias and soffits allow water into the roof structure, leading to damp and decay. We replace tired timber and worn UPVC with modern maintenance-free systems in a range of profiles and colours, complete with new guttering and downpipes to finish the job properly.",
    services: [
      {
        name: "Fascia & Soffit Replacement",
        detail:
          "Strip old boards and fit new UPVC fascias and soffits — no maintenance, no rot, no repainting.",
      },
      {
        name: "Full Gutter Replacement",
        detail:
          "New guttering in round, ogee or square profile with matching downpipes and all brackets.",
      },
      {
        name: "Gutter Clearing & Repair",
        detail:
          "Unblock, re-seal joints and reset falls to restore proper flow and prevent overflow damage.",
      },
      {
        name: "Bargeboards",
        detail:
          "Replace deteriorating bargeboards on gable ends to complete the roofline transformation.",
      },
      {
        name: "Dry Verge & Ridge Systems",
        detail:
          "Fit dry-fix verge and ridge systems to eliminate mortar maintenance permanently.",
      },
    ],
    materials: [
      "White UPVC",
      "Anthracite Grey UPVC",
      "Rosewood UPVC",
      "Cast Iron Effect",
      "Ogee Profile",
      "Half-Round Profile",
      "Square Profile",
    ],
    stats: [
      { value: "300+", label: "Rooflines Completed" },
      { value: "10yr", label: "Workmanship Guarantee" },
      { value: "Zero", label: "Maintenance UPVC" },
    ],
  },
];

export default function RoofTypesInteractive() {
  const [activeId, setActiveId] = useState("pitched");
  const [fading, setFading] = useState(false);

  const active = roofTypes.find((r) => r.id === activeId)!;
  const ActiveIcon = active.icon;

  const handleSelect = (id: string) => {
    if (id === activeId) return;
    setFading(true);
    setTimeout(() => {
      setActiveId(id);
      setFading(false);
    }, 180);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
              What We Do
            </span>
            <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] uppercase tracking-tight mb-3">
            Our Roofing Services
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
            Select a roof type below to see the full range of services we offer,
            the materials we use, and why ProLine is the right team for the job.
          </p>
        </div>

        {/* Roof type selector tiles */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
          {roofTypes.map(({ id, icon: Icon, label, tagline }) => {
            const isActive = activeId === id;
            return (
              <button
                key={id}
                onClick={() => handleSelect(id)}
                className={`relative p-5 lg:p-6 text-left transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#f97316] ${
                  isActive
                    ? "bg-[#f97316] text-white shadow-xl ring-2 ring-[#f97316]"
                    : "bg-white border border-gray-200 hover:border-[#f97316] hover:shadow-md"
                }`}
              >
                <Icon
                  className={`w-7 h-7 mb-3 transition-colors duration-200 ${
                    isActive ? "text-white" : "text-[#f97316]"
                  }`}
                />
                <div
                  className={`font-black text-sm uppercase tracking-wide leading-tight ${
                    isActive ? "text-white" : "text-[#1a1a1a]"
                  }`}
                >
                  {label}
                </div>
                <div
                  className={`text-xs mt-1 leading-snug ${
                    isActive ? "text-orange-100" : "text-gray-500"
                  }`}
                >
                  {tagline}
                </div>
                {isActive && (
                  <span className="absolute bottom-2 right-3 text-white/40 text-[10px] font-black uppercase tracking-widest">
                    Selected ▲
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Detail panel */}
        <div
          className="bg-[#1a1a1a] text-white"
          style={{
            opacity: fading ? 0 : 1,
            transition: "opacity 0.18s ease",
          }}
        >
          {/* Panel header bar */}
          <div className="border-b border-white/10 px-8 lg:px-12 py-6 flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 bg-[#f97316] flex items-center justify-center shrink-0">
                <ActiveIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-black text-lg lg:text-xl uppercase tracking-tight">
                  {active.label}
                </h3>
                <p className="text-[#f97316] text-xs font-bold uppercase tracking-wider">
                  {active.tagline}
                </p>
              </div>
            </div>
            <a
              href="tel:07587478826"
              className="hidden sm:flex items-center gap-2 text-gray-300 hover:text-[#f97316] transition-colors text-sm"
            >
              <Phone className="w-4 h-4 text-[#f97316]" />
              <span className="font-bold">07587 478826</span>
            </a>
          </div>

          <div className="p-8 lg:p-12">
            <p className="text-gray-300 text-sm leading-relaxed mb-10 max-w-3xl">
              {active.description}
            </p>

            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Services */}
              <div className="lg:col-span-2">
                <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-[#f97316] mb-5">
                  Services Included
                </h4>
                <div className="grid sm:grid-cols-2 gap-5">
                  {active.services.map((s) => (
                    <div key={s.name} className="flex gap-3">
                      <CheckCircle className="w-4 h-4 text-[#f97316] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-black text-white">
                          {s.name}
                        </div>
                        <div className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                          {s.detail}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right column: materials + stats + CTA */}
              <div className="border-t border-white/10 pt-8 lg:border-t-0 lg:pt-0 lg:border-l lg:border-white/10 lg:pl-12">
                <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-[#f97316] mb-4">
                  Materials We Use
                </h4>
                <div className="flex flex-wrap gap-2 mb-8">
                  {active.materials.map((m) => (
                    <span
                      key={m}
                      className="px-3 py-1.5 bg-white/10 border border-white/20 text-white text-xs font-semibold hover:bg-white/20 transition-colors"
                    >
                      {m}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-3 py-6 border-t border-b border-white/10 mb-8">
                  {active.stats.map(({ value, label }) => (
                    <div key={label} className="text-center">
                      <div className="text-xl font-black text-[#f97316]">
                        {value}
                      </div>
                      <div className="text-[10px] text-gray-400 mt-1 leading-tight uppercase tracking-wide">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/quote"
                  className="flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea6c0a] text-white font-black px-6 py-4 uppercase tracking-widest text-sm transition-all hover:scale-[1.02] w-full"
                >
                  Get a Free Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
