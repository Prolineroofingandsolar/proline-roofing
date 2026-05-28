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
      "A well-designed solar PV system is the single biggest thing you can do to cut your energy bills. We design and install bespoke systems sized exactly for your home's usage and roof layout — from a modest 4-panel setup to a full 16-panel array. Every installation is MCS certified and handled start to finish by our own team.",
    services: [
      {
        name: "Bespoke System Design",
        detail:
          "We model your roof orientation, pitch and shading to design a system that maximises generation all year round.",
      },
      {
        name: "Panel & Inverter Installation",
        detail:
          "Full installation by our MCS-certified team. All cabling, mounting, inverter wiring and DC/AC connections included.",
      },
      {
        name: "Scaffolding & Electrical Work",
        detail:
          "We handle all scaffolding, the G98/G99 DNO application and the Part P electrical certification.",
      },
      {
        name: "DNO Application Handling",
        detail:
          "We manage the grid connection paperwork with your Distribution Network Operator — you don't have to lift a finger.",
      },
      {
        name: "App & Monitoring Setup",
        detail:
          "Full handover with live monitoring app so you can watch your system generate and track savings in real time.",
      },
    ],
    equipment: [
      "SolarEdge Inverters",
      "SMA Inverters",
      "Fronius Inverters",
      "GivEnergy Inverters",
      "JA Solar Panels",
      "Trina Solar Panels",
      "REC Group Panels",
      "Enphase Microinverters",
    ],
    stats: [
      { value: "25yr", label: "Panel Warranty" },
      { value: "MCS", label: "Certified Install" },
      { value: "£1k+", label: "Typical Annual Saving" },
    ],
  },
  {
    id: "battery",
    icon: Battery,
    label: "Battery Storage",
    tagline: "Store It, Use It, Save More",
    description:
      "Without battery storage, surplus solar energy you can't use immediately gets exported to the grid for a fraction of what you pay to import. A home battery captures that surplus and makes it available in the evenings and overnight — meaning you use far more of what you generate and buy far less from your supplier.",
    services: [
      {
        name: "Battery Installation",
        detail:
          "We install, commission and fully configure your battery system including all DC and AC wiring.",
      },
      {
        name: "Retrofit to Existing Solar",
        detail:
          "Already have solar? We can add battery storage to most existing systems — no need for a full replacement.",
      },
      {
        name: "Smart Energy Management",
        detail:
          "Intelligent charge/discharge scheduling to make the most of solar generation, cheap tariff rates and SEG export.",
      },
      {
        name: "Power Cut Backup",
        detail:
          "Select battery systems provide islanding capability, keeping essential circuits powered during a grid outage.",
      },
      {
        name: "App Monitoring & Control",
        detail:
          "Full remote monitoring and control via smartphone app. Track charge levels, savings and export earnings live.",
      },
    ],
    equipment: [
      "GivEnergy",
      "Tesla Powerwall",
      "SolarEdge Home Battery",
      "Fox ESS",
      "Solax X-Hybrid",
      "SMA Sunny Boy Storage",
      "Huawei LUNA",
    ],
    stats: [
      { value: "10yr", label: "Battery Warranty" },
      { value: "90%+", label: "Round-Trip Efficiency" },
      { value: "6–16", label: "kWh Capacity Options" },
    ],
  },
  {
    id: "ev-charging",
    icon: Zap,
    label: "EV Charging",
    tagline: "Charge Smart, Charge Solar",
    description:
      "Charging your electric vehicle from your own rooftop solar is the best way to drive for free. We install and configure smart home EV chargers that work intelligently with your solar system and battery — automatically drawing solar power first before falling back to the grid, and scheduling overnight charges on cheap tariff rates.",
    services: [
      {
        name: "Home EV Charger Installation",
        detail:
          "Supply and fit a 7kW smart EV charger with full electrical work, consumer unit connection and cable routing.",
      },
      {
        name: "Solar & Battery Integration",
        detail:
          "Configure your charger to draw from solar and battery first, minimising grid import to near zero.",
      },
      {
        name: "OZEV Grant Assistance",
        detail:
          "We help eligible customers access the OZEV EV chargepoint grant to reduce the upfront cost.",
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
      "Zappi (myenergi)",
      "Ohme Home Pro",
      "Wallbox Pulsar Plus",
      "Pod Point Solo 3",
      "EO Mini Pro 3",
      "Indra Smart PRO",
    ],
    stats: [
      { value: "OZEV", label: "Registered Installer" },
      { value: "7kW", label: "Fast Charge Speed" },
      { value: "Zero", label: "Cost Solar Charging" },
    ],
  },
  {
    id: "maintenance",
    icon: Leaf,
    label: "Solar Maintenance",
    tagline: "Keep Generating at Full Power",
    description:
      "A solar system can lose 15–25% of its output through dirty panels, degraded connections or a failing inverter — and you might never notice until you check the numbers. Our annual maintenance plans keep your system generating at full efficiency, catch faults early and ensure your warranties stay valid.",
    services: [
      {
        name: "Annual System Health Check",
        detail:
          "Full inspection of panels, mounting, inverter, isolators, cabling and monitoring system.",
      },
      {
        name: "Professional Panel Cleaning",
        detail:
          "Pure water fed pole cleaning removes dirt, moss and bird fouling to restore maximum light absorption.",
      },
      {
        name: "Inverter & Isolator Testing",
        detail:
          "We test DC and AC isolators, check inverter logs for faults and verify string voltages and currents.",
      },
      {
        name: "Performance Report",
        detail:
          "Written report after every visit showing generation data, findings and any recommended actions.",
      },
      {
        name: "Priority Fault Response",
        detail:
          "Plan holders go to the front of the queue. We'll diagnose and fix faults fast to minimise lost generation.",
      },
    ],
    equipment: [
      "Pure Water Fed Cleaning",
      "Thermal Imaging",
      "IV Curve Tracing",
      "Drone Inspection",
      "Datalogger Analysis",
      "Shading Modelling",
    ],
    stats: [
      { value: "15%+", label: "Generation Recovered" },
      { value: "Annual", label: "Maintenance Plans" },
      { value: "Priority", label: "Fault Response" },
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
    <section id="solar-services" className="py-20 bg-gray-50">
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
            Select a service below to see exactly what&apos;s included, the brands and
            equipment we install, and how ProLine can help you go solar.
          </p>
        </div>

        {/* Service selector tiles */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
          {solarTypes.map(({ id, icon: Icon, label, tagline }) => {
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
                  Brands &amp; Equipment
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
