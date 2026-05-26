import type { Metadata } from "next";
import Link from "next/link";
import { Wrench, Home, Square, Shield, CheckCircle, ArrowRight, Phone } from "lucide-react";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Roofing Services | Taunton & South West",
  description:
    "Expert roofing services in Taunton and Somerset — roof repairs, new roofs, flat roofing, chimney work, leadwork, fascias and guttering. Fully insured. Free quotes.",
};

const services = [
  {
    icon: Wrench,
    title: "Roof Repairs",
    description: "Storm damage, leaks, missing tiles, ridge repairs, flashing and pointing — we repair all types of roofing problems fast.",
    features: ["Emergency call-out available", "All tile and slate types", "Ridge and hip repairs", "Flashing re-sealing", "Gutter and fascia repairs"],
  },
  {
    icon: Home,
    title: "New Roof Installations",
    description: "Full roof replacements and new builds. We install high-quality roofing systems built to last decades.",
    features: ["Natural and synthetic slate", "Concrete and clay tiles", "Flat-to-pitch conversions", "Full insulation upgrades", "10-year workmanship guarantee"],
  },
  {
    icon: Square,
    title: "Flat Roofing",
    description: "Specialist flat roofing for extensions, garages and commercial properties. GRP fibreglass, EPDM rubber and felt systems.",
    features: ["GRP fibreglass roofing", "EPDM rubber membrane", "Felt roofing systems", "Leak detection and repair", "25-year material warranties"],
  },
  {
    icon: Shield,
    title: "Chimney Repairs",
    description: "Chimney stacks, repointing, new pots, lead flashings and full rebuilds. We keep your chimney safe and weathertight.",
    features: ["Repointing and rendering", "New chimney pots", "Lead flashing replacement", "Full stack rebuilds", "Stack removal and capping"],
  },
  {
    icon: Wrench,
    title: "Leadwork & Flashings",
    description: "Expert lead valleys, flashings, abutments and soakers. All leadwork is hand-dressed to BS EN 12588 standards.",
    features: ["Lead valleys and abutments", "Soakers and step flashings", "Parapet lead work", "Custom lead fabrication", "Matching heritage details"],
  },
  {
    icon: Home,
    title: "Fascias, Soffits & Guttering",
    description: "Full replacement of timber or worn UPVC fascias, soffits and guttering. Improves appearance and prevents water damage.",
    features: ["UPVC fascias and soffits", "Cast iron effect guttering", "Ogee, half-round & square profiles", "Downpipe replacement", "Fascia board replacement"],
  },
];

export default function RoofingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#111111] text-white py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/image1.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-[#f97316] text-xs font-black uppercase tracking-[0.25em] mb-3">Roofing Services</p>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 uppercase">Expert Roofing<br />Across the South West</h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              From emergency repairs to full roof replacements — ProLine delivers quality roofing across Taunton, Somerset and the South West.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/quote" className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#e8650f] text-white font-black px-7 py-4 uppercase tracking-widest text-sm transition-all hover:scale-105">
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:07587478826" className="inline-flex items-center gap-2 border-2 border-white text-white font-black px-7 py-4 hover:bg-white hover:text-[#1a1a1a] transition-all text-sm uppercase tracking-widest">
                <Phone className="w-4 h-4" /> 07587 478826
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">What We Do</span>
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">Our Roofing Services</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map(({ icon: Icon, title, description, features }, i) => (
              <AnimatedSection key={title} delay={i * 0.1}>
                <div className="bg-white border border-gray-100 shadow-sm p-8 hover:shadow-md hover:border-[#f97316] transition-all duration-300 h-full group">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-[#f97316]/10 flex items-center justify-center shrink-0 group-hover:bg-[#f97316] transition-colors duration-300">
                      <Icon className="w-6 h-6 text-[#f97316] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-lg font-black text-gray-900 mb-2">{title}</h2>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">{description}</p>
                      <ul className="space-y-1.5">
                        {features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-[#f97316] shrink-0" /> {f}
                          </li>
                        ))}
                      </ul>
                      <Link href="/quote" className="inline-flex items-center gap-1.5 mt-5 text-sm font-black text-[#f97316] hover:gap-3 transition-all uppercase tracking-wide">
                        Get a quote <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">How It Works</span>
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">Our Simple Process</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Free Quote", desc: "Contact us and we arrange a free, no-obligation site survey and quote." },
              { step: "02", title: "Agree Scope", desc: "We discuss the work, agree materials, timeline and a fixed price." },
              { step: "03", title: "We Get to Work", desc: "Our qualified team completes the job to the highest standard." },
              { step: "04", title: "Handover & Aftercare", desc: "We walk you through the completed work with full aftercare support." },
            ].map(({ step, title, desc }, i) => (
              <AnimatedSection key={step} delay={i * 0.12}>
                <div className="text-center">
                  <div className="w-14 h-14 bg-[#f97316] text-white font-black text-xl flex items-center justify-center mx-auto mb-4">
                    {step}
                  </div>
                  <h3 className="font-black text-white mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "30+", label: "Years Combined Experience" },
              { value: "1000+", label: "Roofs Completed" },
              { value: "5★", label: "Google Rating" },
              { value: "24/7", label: "Emergency Call-Out" },
            ].map(({ value, label }) => (
              <AnimatedSection key={label}>
                <div className="text-2xl font-black text-[#f97316]">{value}</div>
                <div className="text-gray-500 text-xs uppercase tracking-wide mt-1">{label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
