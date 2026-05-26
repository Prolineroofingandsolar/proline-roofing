import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Star, MapPin, Phone } from "lucide-react";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";
import CountUp from "@/components/CountUp";

export const metadata: Metadata = {
  title: "About Us | ProLine Roofing & Solar",
  description:
    "Learn about ProLine Roofing & Solar — Taunton's trusted roofing and solar specialists with 30 years of combined experience serving the South West.",
};

const values = [
  { title: "Quality Workmanship", desc: "We take pride in every job, using only premium materials and tried and tested techniques." },
  { title: "Honest & Transparent", desc: "No hidden costs, no surprises. We agree a fair price upfront and stick to it." },
  { title: "Local & Reliable", desc: "We're your neighbours. We care about our reputation in the community and it shows." },
  { title: "Fully Insured", desc: "All work is carried out by qualified, fully insured professionals for your complete peace of mind." },
  { title: "Clean & Tidy", desc: "We treat your home with respect — always leaving the site clean at the end of each day." },
  { title: "Here When You Need Us", desc: "From planned projects to emergency call-outs, we're available when it matters most." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#111111] text-white py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/image2.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-[#f97316] text-xs font-black uppercase tracking-[0.25em] mb-3">Who We Are</p>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">About ProLine<br />Roofing &amp; Solar</h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Taunton&apos;s trusted roofing and solar specialists. 30 years of combined experience. Hundreds of happy customers across the South West.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#f97316] py-6">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { value: 30, suffix: "+", label: "Years Combined Experience" },
            { value: 1000, suffix: "+", label: "Projects Completed" },
            { value: 5, suffix: "★", label: "Google Rating" },
            { value: 100, suffix: "%", label: "Free Quotes" },
          ].map(({ value, suffix, label }) => (
            <AnimatedSection key={label}>
              <div className="text-3xl font-black text-white leading-none">
                <CountUp end={value} suffix={suffix} />
              </div>
              <div className="text-orange-100 text-xs uppercase tracking-wider mt-1">{label}</div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <p className="text-[#f97316] text-xs font-black uppercase tracking-widest mb-3 flex items-center gap-2">
              <ArrowRight className="w-3.5 h-3.5" /> Our Story
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] leading-tight mb-6 uppercase">
              Built on Reputation.<br />Grown on Trust.
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              ProLine Roofing &amp; Solar is a Taunton-based roofing and solar company with over 30 years of combined experience in the trade. We&apos;ve built our business the old-fashioned way — by doing excellent work and letting our customers do the talking.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              From a single emergency repair to a full solar installation, we approach every job with the same commitment to quality. We&apos;re proud to be local, proud to be trusted, and proud of the work we leave behind.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Based in Taunton, we cover the entire South West — from Bristol and Bath down to Exeter and Plymouth, and everywhere in between.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <MapPin className="w-4 h-4 text-[#f97316]" />
              Taunton, Somerset &bull; Covering the South West
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div
              className="w-full h-96 bg-cover bg-center relative"
              style={{ backgroundImage: "url('/image3.jpeg')" }}
            >
              <div className="absolute inset-0 bg-[#1a1a1a]/20" />
              <div className="absolute bottom-0 left-0 right-0 bg-[#f97316] p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-black">ProLine Roofing &amp; Solar</p>
                    <p className="text-orange-100 text-xs mt-0.5">Taunton &bull; Somerset &bull; South West</p>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-white text-white" />)}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">What We Stand For</span>
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">Our Values</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 0.1}>
                <div className="bg-white border border-gray-100 p-6 shadow-sm hover:shadow-md hover:border-[#f97316] transition-all duration-300 group h-full">
                  <CheckCircle className="w-6 h-6 text-[#f97316] mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-black text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-[#f97316] text-xs font-black uppercase tracking-widest mb-3">Where We Work</p>
            <h2 className="text-3xl font-black text-white uppercase mb-4">Covering the South West</h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto mb-8">
              Based in Taunton, we travel across the South West to deliver the same quality service wherever you are.
            </p>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {["Taunton", "Bridgwater", "Wellington", "Yeovil", "Exeter", "Plymouth", "Bristol", "Bath", "Glastonbury", "Weston-super-Mare", "Dorchester", "Barnstaple", "Truro"].map((town) => (
                <span key={town} className="bg-white/10 border border-white/20 text-white px-3 py-1.5 text-xs font-semibold">
                  {town}
                </span>
              ))}
            </div>
            <p className="text-gray-500 text-xs mt-6 italic">Not on the list? Call us — we may still be able to help.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact strip */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <AnimatedSection direction="left">
            <h3 className="text-2xl font-black text-[#1a1a1a]">Ready to work with us?</h3>
            <p className="text-gray-500 text-sm mt-1">Get a free quote today — no obligation, just honest advice.</p>
          </AnimatedSection>
          <AnimatedSection direction="right" className="flex flex-col sm:flex-row gap-3">
            <a href="tel:07587478826" className="inline-flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white font-black px-6 py-3.5 transition-all text-sm uppercase tracking-widest">
              <Phone className="w-4 h-4" /> 07587 478826
            </a>
            <Link href="/quote" className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#e8650f] text-white font-black px-6 py-3.5 transition-all text-sm uppercase tracking-widest">
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <CTASection />
    </>
  );
}
