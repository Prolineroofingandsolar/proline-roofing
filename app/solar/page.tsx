export const dynamic = "force-static";
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
  FileText,
} from "lucide-react";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";
import SolarTypesInteractive from "@/components/SolarTypesInteractive";

export const metadata: Metadata = {
  title: "Solar Panel Installation | Taunton & South West",
  description:
    "Solar PV panel installation, battery storage and EV charging in Taunton, Somerset. Request a roof and energy-use survey with a written proposal.",
  alternates: { canonical: "https://www.prolineroofingandsolar.co.uk/solar" },
};

const reasons = [
  {
    icon: Award,
    title: "Certification in Writing",
    desc: "Your proposal should confirm the certification route, installer details and documents supplied at handover.",
  },
  {
    icon: CheckCircle,
    title: "Clear Warranty Terms",
    desc: "We set out applicable product, installer and workmanship warranty terms in the written proposal.",
  },
  {
    icon: Zap,
    title: "Free, No-Obligation Survey",
    desc: "We assess the roof, electricity use and project requirements before preparing a written proposal.",
  },
  {
    icon: FileText,
    title: "A Defined Scope",
    desc: "The proposal identifies the installation team, included work, grid application responsibilities and handover documents.",
  },
];

export default function SolarPage() {
  return (
    <>
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
              Solar Panel{" "}<br />
              <span className="text-[#f97316]">Installation</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              Solar PV, battery storage and EV charging designed around your
              roof, electricity use and project requirements.
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
              { value: "Free", label: "Initial Survey" },
              { value: "Written", label: "System Proposal" },
              { value: "Clear", label: "Warranty Terms" },
              { value: "Local", label: "Taunton Team" },
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
            { icon: TrendingDown, title: "Use Less Grid Power", desc: "Savings depend on system design, usage and your electricity tariff." },
            { icon: Zap, title: "Export Options", desc: "Ask your energy supplier about current export tariffs and eligibility." },
            { icon: Sun, title: "Designed for Your Roof", desc: "Output estimates are based on orientation, shading and panel layout." },
            { icon: Leaf, title: "Lower-Carbon Energy", desc: "Generate renewable electricity at your property when conditions allow." },
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

          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Survey & Usage Review",
                desc: "We assess the roof, orientation, shading and electricity use to understand the project requirements.",
              },
              {
                step: "02",
                title: "Written Proposal",
                desc: "You receive the proposed layout, equipment, modelled output, responsibilities, price and warranty terms.",
              },
              {
                step: "03",
                title: "Installation & Handover",
                desc: "Once agreed, the named team completes the stated permissions, installation, commissioning and handover scope.",
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

      <CTASection
        heading="Ready to Go Solar?"
        subtext="Request a free, no-obligation survey and receive a written proposal with a modelled output and savings estimate."
      />
    </>
  );
}
