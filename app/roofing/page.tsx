import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  Phone,
  Clock,
  Star,
  Award,
  Zap,
} from "lucide-react";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";
import RoofTypesInteractive from "@/components/RoofTypesInteractive";

export const metadata: Metadata = {
  title: "Roofing Services | Taunton & South West",
  description:
    "Expert roofing services in Taunton and Somerset — pitched roofs, flat roofing, chimney repairs, leadwork, fascias and guttering. Fully insured. Free quotes.",
};

const reasons = [
  {
    icon: Award,
    title: "30+ Years Combined Experience",
    desc: "Our team brings decades of hands-on roofing knowledge to every job, big or small.",
  },
  {
    icon: CheckCircle,
    title: "Fully Insured & Guaranteed",
    desc: "All work is backed by full public liability insurance and a written workmanship guarantee.",
  },
  {
    icon: Star,
    title: "5-Star Rated on Google",
    desc: "Hundreds of happy customers across Somerset and the South West. Read their reviews.",
  },
  {
    icon: Zap,
    title: "Free, No-Obligation Quotes",
    desc: "We survey the job, give you a clear fixed price, and leave you to decide — no pressure.",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Call-Out",
    desc: "Storm damage or active leak? We're available around the clock to make your roof safe.",
  },
  {
    icon: Phone,
    title: "Local Team, Local Knowledge",
    desc: "Based in Taunton, we understand Somerset's weather, buildings and local planning requirements.",
  },
];

export default function RoofingPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative bg-[#111111] text-white py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/image1.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/85" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-[#f97316] text-xs font-black uppercase tracking-[0.25em] mb-4">
              Roofing Services — Taunton &amp; the South West
            </p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-5 uppercase leading-none">
              Expert Roofing<br />
              <span className="text-[#f97316]">Across the South West</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              Pitched roofs, flat roofing, chimney repairs, leadwork and
              fascias — ProLine delivers quality roofing you can rely on.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#e8650f] text-white font-black px-8 py-4 uppercase tracking-widest text-sm transition-all hover:scale-105"
              >
                Get a Free Quote <ArrowRight className="w-4 h-4" />
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

        {/* Trust bar inside hero */}
        <div className="relative max-w-7xl mx-auto px-4 mt-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
            {[
              { value: "30+", label: "Years Experience" },
              { value: "1,000+", label: "Roofs Completed" },
              { value: "5 ★", label: "Google Rating" },
              { value: "24/7", label: "Emergency Cover" },
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

      {/* ── Interactive Roof Types Explorer ───────────────────── */}
      <RoofTypesInteractive />

      {/* ── Why Choose ProLine ────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
                Why ProLine
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

      {/* ── How It Works ──────────────────────────────────────── */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
                How It Works
              </span>
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">
              Our Simple Process
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {[
              {
                step: "01",
                title: "Free Quote",
                desc: "Contact us and we arrange a free, no-obligation site survey and written quote.",
              },
              {
                step: "02",
                title: "Agree Scope",
                desc: "We discuss the work, agree materials, timeline and a clear fixed price.",
              },
              {
                step: "03",
                title: "We Get to Work",
                desc: "Our fully qualified team completes the job to the highest standard.",
              },
              {
                step: "04",
                title: "Handover & Aftercare",
                desc: "We walk you through the completed work and provide full aftercare support.",
              },
            ].map(({ step, title, desc }, i) => (
              <AnimatedSection key={step} delay={i * 0.12}>
                <div className="relative text-center p-8 border-l border-white/10 first:border-l-0">
                  <div className="w-14 h-14 bg-[#f97316] text-white font-black text-xl flex items-center justify-center mx-auto mb-5">
                    {step}
                  </div>
                  <div className="hidden lg:block absolute top-[3.25rem] left-full w-full h-px bg-white/10 -translate-x-1/2 last:hidden" />
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

      {/* ── Emergency Banner ──────────────────────────────────── */}
      <section className="bg-[#f97316] py-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <p className="text-white font-black text-xl uppercase tracking-tight">
              Storm Damage or Active Leak?
            </p>
            <p className="text-orange-100 text-sm mt-1">
              We provide 24/7 emergency roofing call-outs across Somerset and
              the South West.
            </p>
          </div>
          <a
            href="tel:07587478826"
            className="shrink-0 inline-flex items-center gap-2 bg-white text-[#f97316] font-black px-7 py-4 uppercase tracking-widest text-sm hover:bg-orange-50 transition-colors"
          >
            <Phone className="w-4 h-4" /> Call Now: 07587 478826
          </a>
        </div>
      </section>

      <CTASection />
    </>
  );
}
