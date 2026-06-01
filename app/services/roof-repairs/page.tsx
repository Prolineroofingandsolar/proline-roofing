import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Phone, Clock, Star, Award, Zap, Shield, Wrench, AlertTriangle } from "lucide-react";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Roof Repairs Somerset | ProLine Roofing & Solar",
  description:
    "Expert roof repair services across Somerset and the South West. Tile repairs, leak fixes, chimney repairs, storm damage. Fast response, fully insured. Call 07587 478826.",
  keywords: [
    "roof repairs somerset",
    "roof repair taunton",
    "tile replacement somerset",
    "leaking roof repair",
    "roof leak repair taunton",
    "emergency roof repair somerset",
  ],
  alternates: { canonical: "https://www.prolineroofingandsolar.co.uk/services/roof-repairs" },
};

const repairTypes = [
  {
    icon: Wrench,
    title: "Tile & Slate Repairs",
    desc: "Slipped, cracked or missing tiles and slates replaced with perfectly matched materials. Prevent leaks before they cause costly internal damage.",
    price: "From £150",
  },
  {
    icon: AlertTriangle,
    title: "Leak Detection & Repair",
    desc: "Persistent or sudden roof leaks traced and repaired at source — not just symptoms. We identify the cause and fix it properly.",
    price: "From £200",
  },
  {
    icon: Zap,
    title: "Storm Damage Repairs",
    desc: "After high winds, storms or falling debris — fast emergency response to make your roof safe. We work with insurance companies.",
    price: "From £250",
  },
  {
    icon: Shield,
    title: "Flat Roof Repairs",
    desc: "Blisters, splits and failed laps in felt, EPDM or GRP flat roofing repaired or fully relined depending on condition.",
    price: "From £200",
  },
  {
    icon: CheckCircle,
    title: "Chimney & Flashing Repairs",
    desc: "Lead flashing, step flashings, soakers and chimney repointing repaired to prevent water ingress at vulnerable roof junctions.",
    price: "From £250",
  },
  {
    icon: Star,
    title: "Ridge & Hip Tile Re-bedding",
    desc: "Ridge tiles that have lifted, cracked or become loose re-bedded and repointed in mortar or dry-fixed using modern systems.",
    price: "From £300",
  },
  {
    icon: Award,
    title: "Gutter & Fascia Repairs",
    desc: "Leaking joints, broken brackets, sagging sections and cracked guttering repaired or replaced as part of a full roofline service.",
    price: "From £100",
  },
  {
    icon: Clock,
    title: "Emergency Call-Outs",
    desc: "24/7 emergency response for active leaks, fallen tiles and structural issues. We'll make your property safe and provide a same-day repair quote.",
    price: "Available 24/7",
  },
];

const commonProblems = [
  {
    problem: "Missing or slipped tiles",
    cause: "Wind, frost damage or old nail fixings failing",
    risk: "Water ingress, internal damage, further tiles loosening",
    solution: "Matching tile sourced and fixed; surrounding tiles checked",
  },
  {
    problem: "Cracked or broken slates",
    cause: "Impact damage, delamination due to age, poor workmanship",
    risk: "Immediate water entry; risk of further breakage in heavy rain",
    solution: "Individual slate replacement with matching material",
  },
  {
    problem: "Leaking flat roof",
    cause: "Blistering, split seams, failed membrane or lack of maintenance",
    risk: "Water damage to ceilings, mould, structural issues",
    solution: "Repair or full reline depending on the extent of damage",
  },
  {
    problem: "Failed lead flashing",
    cause: "Movement in the structure, thermal expansion over decades",
    risk: "Water channels directly into wall or ceiling void",
    solution: "Re-lead or use modern flashing tape systems",
  },
  {
    problem: "Loose ridge tiles",
    cause: "Mortar failure, settlement, thermal movement",
    risk: "Tiles becoming projectiles in wind; water ingress at ridge",
    solution: "Re-bed and repoint or fit dry ridge system",
  },
];

const faqs = [
  {
    q: "How much does a roof repair cost in Somerset?",
    a: "Minor repairs such as replacing a few tiles or resealing flashing typically cost £150–£400. Medium repairs like re-bedding ridge tiles or patching a flat roof cost £300–£800. Major structural repairs or partial re-roofing can be £1,000–£5,000+. We always provide a free, no-obligation written quote before any work begins.",
  },
  {
    q: "How quickly can you respond to a roof repair?",
    a: "For emergency situations — active leaks or storm damage — we aim to respond within 24 hours, often same-day. For non-emergency repairs, we typically book within 3–7 days. We'll always give you a realistic timeframe when you call.",
  },
  {
    q: "Can you repair just a few tiles, or does the whole roof need replacing?",
    a: "In most cases, yes — individual tiles or small sections can be repaired without a full re-roof. We'll assess the condition of the surrounding roof to ensure the repair is sound and won't cause further problems. If the roof is near end-of-life, we'll tell you honestly and explain your options.",
  },
  {
    q: "Will my insurance cover roof repairs?",
    a: "Storm damage, falling trees and similar sudden events are typically covered by building insurance. Gradual wear and tear usually isn't. We can provide a written report and photographs to support your insurance claim, and we work with loss adjusters regularly.",
  },
  {
    q: "Do you guarantee your repair work?",
    a: "Yes — all our repair work comes with a written workmanship guarantee. The length depends on the type of repair: typically 1–2 years for repairs and 10–15 years for larger works like re-roofing sections or lead replacement.",
  },
  {
    q: "What areas of Somerset do you cover for roof repairs?",
    a: "We cover all of Somerset and the surrounding counties — Taunton, Bridgwater, Yeovil, Bath, Bristol, Exeter, Weston-super-Mare, Wellington, Burnham-on-Sea, Glastonbury and all the surrounding villages and rural areas.",
  },
  {
    q: "Can you repair roofs in bad weather?",
    a: "We carry out repairs in most weather conditions, but we won't put our team at risk in high winds or lightning. For active leak situations in bad weather, we can often apply a temporary waterproof covering to protect your property until conditions improve.",
  },
  {
    q: "How do I know if I need a repair or a full new roof?",
    a: "Generally, if your roof is under 20 years old and the damage is localised, a repair makes sense. If the roof is approaching 25–30 years and showing widespread problems, a full replacement may be more cost-effective in the long run. We'll give you an honest assessment during our free survey.",
  },
];

export default function RoofRepairsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#111111] text-white py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/image1.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/85" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-[#f97316] text-xs font-black uppercase tracking-[0.25em] mb-4">
              Roof Repairs — Somerset &amp; the South West
            </p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-5 uppercase leading-none">
              Roof Repairs<br />
              <span className="text-[#f97316]">Done Properly</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              From a single broken tile to emergency storm damage — ProLine Roofing repairs roofs across Somerset and the South West. Fast, reliable and fully guaranteed.
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
        <div className="relative max-w-7xl mx-auto px-4 mt-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
            {[
              { value: "24/7", label: "Emergency Cover" },
              { value: "Same Day", label: "Survey Available" },
              { value: "5 ★", label: "Google Rating" },
              { value: "Guaranteed", label: "All Repairs" },
            ].map(({ value, label }) => (
              <div key={label} className="bg-white/5 backdrop-blur-sm text-center py-4 px-2">
                <div className="text-2xl font-black text-[#f97316]">{value}</div>
                <div className="text-gray-300 text-xs uppercase tracking-wider mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Types Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">What We Repair</span>
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">
              All Types of Roof Repairs
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Whether it&apos;s a single slipped slate or widespread storm damage, our qualified roofers carry out all types of residential and commercial roof repairs across Somerset.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {repairTypes.map(({ icon: Icon, title, desc, price }, i) => (
              <AnimatedSection key={title} delay={i * 0.07}>
                <div className="group border border-gray-100 hover:border-[#f97316] p-6 transition-all hover:shadow-md h-full flex flex-col">
                  <div className="w-10 h-10 bg-[#f97316]/10 group-hover:bg-[#f97316] flex items-center justify-center mb-4 transition-colors">
                    <Icon className="w-5 h-5 text-[#f97316] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-black text-[#1a1a1a] text-sm uppercase tracking-wide mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{desc}</p>
                  <p className="text-[#f97316] font-black text-sm mt-3">{price}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">Common Issues</span>
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">
              Common Roof Problems We Fix
            </h2>
          </AnimatedSection>
          <div className="space-y-4">
            {commonProblems.map(({ problem, cause, risk, solution }, i) => (
              <AnimatedSection key={problem} delay={i * 0.08}>
                <div className="bg-white/5 border border-white/10 p-6 grid md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-xs text-[#f97316] uppercase tracking-wider font-black mb-1">Problem</p>
                    <p className="text-white font-bold text-sm">{problem}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#f97316] uppercase tracking-wider font-black mb-1">Typical Cause</p>
                    <p className="text-gray-300 text-sm">{cause}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#f97316] uppercase tracking-wider font-black mb-1">Risk if Untreated</p>
                    <p className="text-gray-300 text-sm">{risk}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#f97316] uppercase tracking-wider font-black mb-1">Our Solution</p>
                    <p className="text-gray-300 text-sm">{solution}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">How It Works</span>
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">
              Our Repair Process
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {[
              { step: "01", title: "Call or Request a Quote", desc: "Contact us by phone or online. Describe the problem and we'll arrange a visit — often the same or next day." },
              { step: "02", title: "Free Survey", desc: "We inspect the roof thoroughly, identify all issues (not just the obvious ones) and provide a clear written quote." },
              { step: "03", title: "Repair Carried Out", desc: "Work completed by our qualified team, using quality materials and proper techniques. Surrounding area left clean and tidy." },
              { step: "04", title: "Written Guarantee", desc: "All repairs come with a written workmanship guarantee. We want you to have complete peace of mind." },
            ].map(({ step, title, desc }, i) => (
              <AnimatedSection key={step} delay={i * 0.1}>
                <div className="relative text-center p-8 border-l border-gray-200 first:border-l-0">
                  <div className="w-14 h-14 bg-[#f97316] text-white font-black text-xl flex items-center justify-center mx-auto mb-5">
                    {step}
                  </div>
                  <h3 className="font-black text-[#1a1a1a] mb-2 uppercase tracking-wide text-sm">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">FAQ</span>
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">
              Frequently Asked Questions
            </h2>
          </AnimatedSection>
          <div className="space-y-4">
            {faqs.map(({ q, a }, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="bg-white/5 border border-white/10 p-6">
                  <h3 className="font-black text-white text-sm uppercase tracking-wide mb-3">{q}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Location Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-2xl font-black text-[#1a1a1a] uppercase tracking-tight">
              Roof Repair Services Across Somerset
            </h2>
            <p className="text-gray-500 mt-2">We carry out roof repairs throughout Somerset and the South West.</p>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              { name: "Taunton", href: "/roof-repair/taunton" },
              { name: "Bridgwater", href: "/roof-repair/bridgwater" },
              { name: "Bath", href: "/roof-repair/bath" },
              { name: "Bristol", href: "/roof-repair/bristol" },
              { name: "Exeter", href: "/roof-repair/exeter" },
              { name: "Yeovil", href: "/roof-repair/yeovil" },
              { name: "Weston-super-Mare", href: "/roof-repair/weston-super-mare" },
              { name: "Wellington", href: "/roof-repair/wellington" },
              { name: "Burnham-on-Sea", href: "/roof-repair/burnham-on-sea" },
              { name: "Glastonbury", href: "/roof-repair/glastonbury" },
            ].map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className="border border-gray-200 hover:border-[#f97316] hover:text-[#f97316] text-gray-700 text-sm font-semibold text-center py-3 px-4 transition-colors"
              >
                Roof Repair {name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-[#f97316] py-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <p className="text-white font-black text-xl uppercase tracking-tight">Active Leak or Storm Damage?</p>
            <p className="text-orange-100 text-sm mt-1">24/7 emergency roof repair across Somerset. We respond fast.</p>
          </div>
          <a
            href="tel:07587478826"
            className="shrink-0 inline-flex items-center gap-2 bg-white text-[#f97316] font-black px-7 py-4 uppercase tracking-widest text-sm hover:bg-orange-50 transition-colors"
          >
            <Phone className="w-4 h-4" /> Call Now: 07587 478826
          </a>
        </div>
      </section>

      <CTASection
        heading="Need a Roof Repair Quote?"
        subtext="Contact our team today for a free, no-obligation survey and written quote. We respond within 24 hours."
      />
    </>
  );
}
