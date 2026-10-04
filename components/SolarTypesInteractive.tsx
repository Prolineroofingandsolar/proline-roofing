"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  Sun,
  Battery,
  Zap,
  Leaf,
  Phone,
} from "lucide-react";

type SolarType = {
  id: string;
  icon: React.ElementType;
  label: string;
  tagline: string;
  description: string;
  services: { name: string; detail: string }[];
  equipment: string[];
  stats: { value: string; label: string }[];
};

const solarTypes: SolarType[] = [
  {
    id: "solar-pv",
    icon: Sun,
    label: "Solar PV Systems",
    tagline: "Generate Your Own Clean Energy",
    description:
      "A well-designed solar PV system can reduce the electricity you buy from the grid. We size each proposed system around the property's usage, roof layout, orientation and shading, then provide an output estimate and written specification.",
    services: [
      {
        name: "Bespoke System Design",
        detail:
          "The proposed layout accounts for roof orientation, pitch, shading and available space, with a modelled annual output.",
      },
      {
        name: "Panel & Inverter Installation",
        detail:
          "The proposal identifies the installation team and covers cabling, mounting, inverter wiring and DC/AC connections included in the scope.",
      },
      {
        name: "Scaffolding & Electrical Work",
        detail:
          "The written scope confirms scaffolding, electrical work, the competent installer and the certification to be supplied.",
      },
      {
        name: "DNO Application Handling",
        detail:
          "The proposal states whether G98 notification or G99 approval applies and who will manage the grid connection process.",
      },
      {
        name: "App & Monitoring Setup",
        detail:
          "Where supported by the selected equipment, handover includes monitoring setup and an explanation of the displayed data.",
      },
    ],
    equipment: [
      "Monocrystalline PV panels",
      "String or hybrid inverters",
      "Microinverter options",
      "Power optimisers",
      "Roof-specific mounting",
      "Generation monitoring",
    ],
    stats: [
      { value: "Exact", label: "Product Terms" },
      { value: "Written", label: "System Design" },
      { value: "Modelled", label: "Output Estimate" },
    ],
  },
  {
    id: "battery",
    icon: Battery,
    label: "Battery Storage",
    tagline: "Store It, Use It, Save More",
    description:
      "Battery storage can move surplus generation into the evening and may also support time-of-use tariffs. Whether it is worthwhile depends on consumption, tariff, usable capacity, efficiency and expected battery life, so we model it separately from the solar array.",
    services: [
      {
        name: "Battery Installation",
        detail:
          "The proposal defines the battery, usable capacity, coupling method, electrical work and commissioning scope.",
      },
      {
        name: "Retrofit to Existing Solar",
        detail:
          "Some existing systems can accept AC- or DC-coupled storage after compatibility and warranty checks.",
      },
      {
        name: "Smart Energy Management",
        detail:
          "Compatible systems can be configured around solar generation and time-of-use tariffs, subject to supplier terms.",
      },
      {
        name: "Power Cut Backup",
        detail:
          "Backup is not standard. Where requested, the proposal identifies compatible equipment and which circuits can be supported.",
      },
      {
        name: "App Monitoring & Control",
        detail:
          "Where supported, the handover covers charge settings, monitoring and the limits of any estimated savings data.",
      },
    ],
    equipment: [
      "AC-coupled storage",
      "DC-coupled storage",
      "Hybrid inverter options",
      "Backup-capable options",
      "Time-of-use scheduling",
      "Battery monitoring",
    ],
    stats: [
      { value: "Written", label: "Warranty Terms" },
      { value: "Modelled", label: "Usage Case" },
      { value: "Sized", label: "For Your Demand" },
    ],
  },
  {
    id: "ev-charging",
    icon: Zap,
    label: "EV Charging",
    tagline: "Charge Smart, Charge Solar",
    description:
      "A compatible smart charger can prioritise available solar generation and use scheduled off-peak charging when needed. Actual solar contribution and charging cost depend on the vehicle, charger, weather, household demand and tariff.",
    services: [
      {
        name: "Home EV Charger Installation",
        detail:
          "The survey checks supply capacity, cable route, earthing, parking position and the appropriate charger rating.",
      },
      {
        name: "Solar & Battery Integration",
        detail:
          "Compatible chargers can prioritise surplus solar while drawing from the grid when generation is insufficient.",
      },
      {
        name: "Current Grant Eligibility",
        detail:
          "Where relevant, check the current OZEV scheme, property, customer and installer requirements before relying on a grant.",
      },
      {
        name: "Smart Scheduling",
        detail:
          "Set schedules to charge automatically on overnight cheap tariff rates when solar isn't available.",
      },
      {
        name: "Load Management",
        detail:
          "Smart load balancing to protect your home's circuits and avoid tripping the supply fuse.",
      },
    ],
    equipment: [
      "Solar-aware charging",
      "Dynamic load balancing",
      "Scheduled charging",
      "Tethered or untethered options",
      "App monitoring",
      "Supply-capacity assessment",
    ],
    stats: [
      { value: "Checked", label: "Grant Eligibility" },
      { value: "Surveyed", label: "Supply & Route" },
      { value: "Smart", label: "Charging Options" },
    ],
  },
  {
    id: "maintenance",
    icon: Leaf,
    label: "Solar Maintenance",
    tagline: "Keep Generating at Full Power",
    description:
      "Unexpected drops in generation can have several causes, including shading, soiling, monitoring faults, electrical issues or equipment failure. We first compare available performance data with the system specification before recommending inspection, cleaning or repair.",
    services: [
      {
        name: "System Health Check",
        detail:
          "Full inspection of panels, mounting, inverter, isolators, cabling and monitoring system.",
      },
      {
        name: "Professional Panel Cleaning",
        detail:
          "Cleaning is recommended only when access, manufacturer guidance and the likely benefit make it appropriate.",
      },
      {
        name: "Inverter & Isolator Testing",
        detail:
          "The agreed inspection scope can include inverter logs, isolators, visible cabling and electrical measurements.",
      },
      {
        name: "Performance Report",
        detail:
          "Where included in the quote, findings and recommended actions are recorded in a written report.",
      },
      {
        name: "Fault Investigation",
        detail:
          "We review the reported symptoms and system records before confirming attendance, scope and likely next steps.",
      },
    ],
    equipment: [
      "Generation-data review",
      "Visual inspection",
      "Inverter-log review",
      "Electrical testing by scope",
      "Cleaning assessment",
      "Written findings",
    ],
    stats: [
      { value: "Evidence", label: "Led Checks" },
      { value: "Scoped", label: "Inspection" },
      { value: "Written", label: "Findings" },
    ],
  },
];

export default function SolarTypesInteractive() {
  const [activeId, setActiveId] = useState("solar-pv");
  const [fading, setFading] = useState(false);

  const active = solarTypes.find((s) => s.id === activeId)!;
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
    <section id="solar-services" className="scroll-mt-32 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
              What We Offer
            </span>
            <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] uppercase tracking-tight mb-3">
            Our Solar Services
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
            Select a service to see the typical scope and equipment categories.
            Your written proposal will confirm the exact products, installer and terms.
          </p>
        </div>

        {/* Service selector tiles */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4" role="group" aria-label="Solar services">
          {solarTypes.map(({ id, icon: Icon, label, tagline }) => {
            const isActive = activeId === id;
            return (
              <button
                key={id}
                onClick={() => handleSelect(id)}
                type="button"
                id={`solar-tab-${id}`}
                aria-pressed={isActive}
                aria-controls="solar-service-panel"
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
          id="solar-service-panel"
          role="region"
          aria-labelledby={`solar-tab-${active.id}`}
          aria-live="polite"
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
                  What&apos;s Included
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

              {/* Right column: equipment + stats + CTA */}
              <div className="border-t border-white/10 pt-8 lg:border-t-0 lg:pt-0 lg:border-l lg:border-white/10 lg:pl-12">
                <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-[#f97316] mb-4">
                  Equipment Considerations
                </h4>
                <div className="flex flex-wrap gap-2 mb-8">
                  {active.equipment.map((e) => (
                    <span
                      key={e}
                      className="px-3 py-1.5 bg-white/10 border border-white/20 text-white text-xs font-semibold hover:bg-white/20 transition-colors"
                    >
                      {e}
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
                  Get a Free Survey <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
