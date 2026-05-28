import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  TrendingDown,
  Zap,
  Sun,
  Leaf,
  CheckCircle,
  Award,
  Clock,
  Star,
} from "lucide-react";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";
import SolarTypesInteractive from "@/components/SolarTypesInteractive";

export const metadata: Metadata = {
  title: "Solar Panels Taunton & Somerset | MCS Certified Solar PV | ProLine",
  description:
    "MCS certified solar panel installation in Taunton, Somerset. Solar PV, battery storage and EV charging. Cut your energy bills by £1,000+ per year. Free survey — call 07587 478826.",
  keywords: [
    "solar panels taunton",
    "solar panel installation taunton",
    "solar PV taunton",
    "solar installer taunton",
    "MCS certified solar taunton",
    "battery storage taunton",
    "solar panels somerset",
    "solar energy taunton",
    "EV charging taunton",
    "solar installation somerset",
    "SEG tariff taunton",
    "solar panels bridgwater",
    "solar panels wellington somerset",
    "cheap solar taunton",
    "best solar installer taunton",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.prolineroofingandsolar.co.uk",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Solar Panel Installation",
      item: "https://www.prolineroofingandsolar.co.uk/solar",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much do solar panels cost in Taunton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A typical 4kW solar panel system in Taunton costs between £5,500 and £8,000 fully installed, including scaffolding, panels, inverter and all electrical work. Larger systems with battery storage cost more. ProLine provides free no-obligation solar surveys — call 07587 478826.",
      },
    },
    {
      "@type": "Question",
      name: "How much can I save with solar panels in Somerset?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most Somerset homeowners with a 4kW system save between £800 and £1,200 per year on electricity bills. With a battery storage system, savings can exceed £1,500 per year. You can also earn income through the Smart Export Guarantee (SEG) tariff for surplus energy exported to the grid.",
      },
    },
    {
      "@type": "Question",
      name: "Are ProLine solar installers MCS certified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — all ProLine solar PV installations are carried out by MCS-certified installers. MCS certification is required to access the Smart Export Guarantee (SEG) tariff and most solar panel warranties.",
      },
    },
    {
      "@type": "Question",
      name: "Do solar panels work in Somerset's climate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Somerset and Taunton enjoy above-average solar radiation for the UK. Solar panels generate electricity from daylight, not just direct sunshine, so they work year-round. A properly designed system can generate 3,500–4,500 kWh per year from a 4kW installation in Taunton.",
      },
    },
    {
      "@type": "Question",
      name: "How long does solar panel installation take in Taunton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most domestic solar panel installations in Taunton are completed in 1–2 days. ProLine handles everything including scaffolding, electrical work, DNO application and grid connection — so you don't need to arrange anything separately.",
      },
    },
    {
      "@type": "Question",
      name: "Can I add battery storage to existing solar panels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — ProLine can retrofit battery storage to most existing solar PV systems. Battery storage allows you to use the energy you generate at night or on cloudy days, significantly increasing your self-consumption and savings.",
      },
    },
  ],
};

const solarFaqs = [
  {
    q: "How much do solar panels cost in Taunton?",
    a: "A typical 4kW solar system in Taunton costs between £5,500 and £8,000 fully installed, including scaffolding, panels, inverter and all electrical work. ProLine provides free no-obligation solar surveys — call 07587 478826.",
  },
  {
    q: "How much can I save with solar panels in Somerset?",
    a: "Most Somerset homeowners with a 4kW system save between £800 and £1,200 per year. With battery storage, savings can exceed £1,500 per year — plus income from the Smart Export Guarantee (SEG) tariff.",
  },
  {
    q: "Are ProLine solar installers MCS certified?",
    a: "Yes — all our solar PV installations are MCS-certified. MCS certification is required to access the SEG tariff and most manufacturer warranties.",
  },
  {
    q: "Do solar panels work in Somerset's climate?",
    a: "Absolutely. Somerset enjoys above-average solar radiation for the UK. Solar panels generate electricity from daylight, not just direct sunshine, and work year-round.",
  },
  {
    q: "How long does solar panel installation take in Taunton?",
    a: "Most domestic installations are completed in 1–2 days. ProLine handles everything — scaffolding, electrical work, DNO application and grid connection.",
  },
  {
    q: "Can I add battery storage to existing solar panels?",
    a: "Yes — we can retrofit battery storage to most existing solar PV systems, allowing you to use generated energy at night or on cloudy days and increasing your savings significantly.",
  },
];

const reasons = [
  {
    icon: Award,
    title: "MCS Certified Installers",
    desc: "All our solar installations are MCS certified — required for SEG export payments and most warranties.",
  },
  {
    icon: CheckCircle,
    title: "Fully Insured & Guaranteed",
    desc: "Public liability insurance, 25-year panel warranties and a written workmanship guarantee on every job.",
  },
  {
    icon: Star,
    title: "5-Star Rated on Google",
    desc: "Dozens of happy solar customers across Somerset and the South West. Read their verified reviews.",
  },
  {
    icon: Zap,
    title: "Free, No-Obligation Survey",
    desc: "We visit, assess your roof and usage, and give you a clear fixed-price proposal — no pressure to proceed.",
  },
  {
    icon: Clock,
    title: "End-to-End Service",
    desc: "We handle everything: design, scaffolding, electrical, DNO application, commissioning and handover.",
  },
  {
    icon: Phone,
    title: "Local Team, Long-Term Support",
    desc: "Based in Taunton. We're here for maintenance, faults and upgrades long after installation day.",
  },
];

export default function SolarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative bg-[#111111] text-white py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url('/UK_MKT_PHO_REF_Solar_Grasmere_002.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/85" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-[#f97316] text-xs font-black uppercase tracking-[0.25em] mb-4">
              Clean Energy — Taunton &amp; the South West
            </p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-5 uppercase leading-none">
              Solar Panel<br />
              <span className="text-[#f97316]">Installation</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              MCS-certified solar PV, battery storage and EV charging —
              professionally installed to cut your bills, earn export income and
              reduce your carbon footprint.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#e8650f] text-white font-black px-8 py-4 uppercase tracking-widest text-sm transition-all hover:scale-105"
              >
                Get a Free Survey <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:07587478826"
                className="inline-flex items-center gap-2 border-2 border-white text-white font-black px-8 py-4 hover:bg-white hover:text-[#1a1a1a] transition-all text-sm uppercase tracking-widest"
              >
                <Phone className="w-4 h-4" /> 07587 478826
              </a>
            </div>
          </AnimatedSection>
        </div>

        {/* In-hero trust bar */}
        <div className="relative max-w-7xl mx-auto px-4 mt-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
            {[
              { value: "£1,000+", label: "Typical Annual Saving" },
              { value: "25yr", label: "Panel Warranty" },
              { value: "MCS", label: "Certified" },
              { value: "5 ★", label: "Google Rating" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="bg-white/5 backdrop-blur-sm text-center py-4 px-2"
              >
                <div className="text-2xl font-black text-[#f97316]">{value}</div>
                <div className="text-gray-300 text-xs uppercase tracking-wider mt-1">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits banner ───────────────────────────────────── */}
      <section className="bg-[#f97316] py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: TrendingDown, title: "Cut Your Bills", desc: "Typical savings of £1,000+ per year on energy costs." },
            { icon: Zap, title: "SEG Export Income", desc: "Earn money selling surplus power back to the grid." },
            { icon: Sun, title: "Add Property Value", desc: "Solar adds an average of 4% to your home's value." },
            { icon: Leaf, title: "Go Green", desc: "Cut household CO₂ emissions by up to 1.5 tonnes/year." },
          ].map(({ icon: Icon, title, desc }, i) => (
            <AnimatedSection key={title} delay={i * 0.1}>
              <div className="text-center">
                <Icon className="w-6 h-6 text-white mx-auto mb-2" />
                <p className="text-white font-black text-sm">{title}</p>
                <p className="text-orange-100 text-xs mt-1">{desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── Interactive Solar Services Explorer ───────────────── */}
      <SolarTypesInteractive />

      {/* ── Why Choose ProLine Solar ──────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
                Why ProLine Solar
              </span>
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">
              Why Choose Us
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 0.08}>
                <div className="group p-7 border border-gray-100 hover:border-[#f97316] hover:shadow-md transition-all duration-300 h-full">
                  <div className="w-11 h-11 bg-[#f97316]/10 group-hover:bg-[#f97316] flex items-center justify-center mb-4 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#f97316] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-black text-[#1a1a1a] mb-2 text-sm uppercase tracking-wide">
                    {title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Installation Process ──────────────────────────────── */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
                The Process
              </span>
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">
              How Solar Installation Works
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-0">
            {[
              {
                step: "01",
                title: "Free Survey",
                desc: "We assess your roof, usage and orientation to design the ideal system for your home.",
              },
              {
                step: "02",
                title: "System Design",
                desc: "A bespoke layout created to maximise your generation across all seasons.",
              },
              {
                step: "03",
                title: "DNO & Planning",
                desc: "We handle all grid connection paperwork and applications on your behalf.",
              },
              {
                step: "04",
                title: "Installation",
                desc: "Our MCS-certified team installs your system safely and efficiently.",
              },
              {
                step: "05",
                title: "Handover",
                desc: "Full walkthrough, live monitoring app setup and ongoing aftercare support.",
              },
            ].map(({ step, title, desc }, i) => (
              <AnimatedSection key={step} delay={i * 0.1}>
                <div className="relative text-center p-8 border-l border-white/10 first:border-l-0">
                  <div className="w-14 h-14 bg-[#f97316] text-white font-black text-xl flex items-center justify-center mx-auto mb-5">
                    {step}
                  </div>
                  <h3 className="font-black text-white mb-2 uppercase tracking-wide text-sm">
                    {title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
                FAQs
              </span>
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">
              Solar Questions Answered
            </h2>
            <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">
              Common questions from homeowners in Taunton and Somerset about solar panel installation.
            </p>
          </AnimatedSection>

          <div className="space-y-4">
            {solarFaqs.map(({ q, a }, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div className="bg-white border border-gray-100 p-6 shadow-sm hover:border-[#f97316] transition-colors">
                  <h3 className="font-black text-gray-900 mb-2 text-sm">{q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <p className="text-gray-500 text-sm mb-4">Have another question about solar panels in Taunton?</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#e8650f] text-white font-black text-sm uppercase tracking-widest px-6 py-3 transition-all hover:scale-105"
              >
                Free Solar Survey <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:07587478826"
                className="inline-flex items-center gap-2 border-2 border-[#1a1a1a] text-[#1a1a1a] font-black text-sm uppercase tracking-widest px-6 py-3 hover:bg-[#1a1a1a] hover:text-white transition-all"
              >
                <Phone className="w-4 h-4" /> 07587 478826
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        heading="Ready to Go Solar in Taunton?"
        subtext="Get a free, no-obligation solar survey and find out exactly how much you could save in Somerset."
      />
    </>
  );
}
