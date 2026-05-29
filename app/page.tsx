"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle, Star, Phone, ArrowRight, MapPin, ChevronDown,
} from "lucide-react";
import CTASection from "@/components/CTASection";
import GoogleReviewButton from "@/components/GoogleReviewButton";
import AnimatedSection from "@/components/AnimatedSection";
import CountUp from "@/components/CountUp";
import CoverageMap from "@/components/CoverageMap";

/* ── Service icons ── */
function IconRoofRepairs() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
      <path d="M8 32L32 10L56 32"/><path d="M14 32V54H50V54"/><path d="M26 54V40H38V54"/>
      <path d="M40 22L48 18M44 27L52 23"/>
    </svg>
  );
}
function IconNewRoofs() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
      <path d="M8 28L32 8L56 28"/><path d="M14 28V56H50V28"/>
      <path d="M14 36H50M14 44H50M20 28V44M32 28V44M44 28V44"/>
    </svg>
  );
}
function IconFlatRoofing() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
      <rect x="6" y="22" width="52" height="8" rx="1"/><path d="M12 30V54M52 30V54M12 54H52"/>
      <path d="M6 22L12 14H52L58 22"/>
    </svg>
  );
}
function IconSolarPV() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
      <circle cx="18" cy="16" r="7"/>
      <path d="M18 4V6M18 26V28M6 16H4M32 16H30M10 8L11.5 9.5M25.5 22.5L27 24M10 24L11.5 22.5M25.5 9.5L27 8"/>
      <rect x="20" y="30" width="36" height="26" rx="2"/>
      <path d="M20 38H56M20 46H56M32 30V56M44 30V56"/>
      <path d="M38 56V60M30 60H46"/>
    </svg>
  );
}
function IconChimney() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
      <path d="M8 38L32 14L56 38"/><path d="M14 38V56H50V38"/>
      <rect x="24" y="10" width="10" height="18" rx="1"/>
      <path d="M27 10C27 6 29 4 29 4C29 4 31 6 31 10"/>
    </svg>
  );
}
function IconLeadwork() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
      <path d="M8 42L22 28L32 38L44 18L56 28"/>
      <path d="M8 50H56M12 42V50M20 34V50M32 38V50M44 28V50M52 34V50"/>
    </svg>
  );
}
function IconFascias() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
      <path d="M8 32L32 14L56 32"/><path d="M12 32H52"/>
      <rect x="10" y="32" width="44" height="8" rx="1"/>
      <path d="M14 40V52M22 40V52M30 40V52M38 40V52M46 40V52M50 40V52"/>
    </svg>
  );
}
function IconEmergency() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
      <path d="M32 8L36 24H56L42 34L48 50L32 40L16 50L22 34L8 24H28Z"/>
    </svg>
  );
}

const services = [
  { Icon: IconRoofRepairs, title: "Roof Repairs", href: "/roofing", desc: "Fast, reliable repairs for leaks, slipped tiles and storm damage." },
  { Icon: IconNewRoofs, title: "New Roofs", href: "/roofing", desc: "Full new roof installations built to last using premium materials." },
  { Icon: IconFlatRoofing, title: "Flat Roofing", href: "/roofing", desc: "GRP fibreglass and EPDM flat roof systems with 25-year guarantees." },
  { Icon: IconSolarPV, title: "Solar PV", href: "/solar", desc: "Reduce your energy bills with high-efficiency solar panel systems." },
  { Icon: IconChimney, title: "Chimney Work", href: "/roofing", desc: "Chimney repairs, repointing, flashing and full rebuilds." },
  { Icon: IconLeadwork, title: "Leadwork", href: "/roofing", desc: "Expert lead valleys, flashings, abutments and soakers." },
  { Icon: IconFascias, title: "Fascias & Guttering", href: "/roofing", desc: "UPVC fascias, soffits and guttering supply and installation." },
  { Icon: IconEmergency, title: "Emergency Call-Out", href: "/contact", desc: "24/7 emergency roofing — we're there when you need us most." },
];

const testimonials = [
  { name: "Rebecca", location: "Axminster", rating: 5, text: "Roof and chimney repointing. Brilliant. All very friendly and polite. Did a brilliant job and cleaned up nicely after themselves :) very pleased.", service: "Chimney Work" },
  { name: "Verified Customer", location: "Yeovil", rating: 5, text: "Will came out on Bank Holiday Monday to complete the job, quickly, efficiently and to a high standard.", service: "Solar PV" },
  { name: "Verified Customer", location: "Bridgwater", rating: 5, text: "William and his team done a very good job. Always clean up after every day and kept me updated as they went on. I will definitely be using them again.", service: "Roof Repairs" },
];

const whyUs = [
  { title: "30 Years Combined Experience", desc: "Decades of roofing expertise you can rely on." },
  { title: "Fully Qualified & Insured", desc: "All work carried out to the highest industry standards." },
  { title: "Premium Materials Only", desc: "Quality guaranteed — we never cut corners on materials." },
  { title: "Free No-Obligation Quotes", desc: "Honest, transparent pricing with no hidden costs." },
  { title: "Emergency Call-Outs", desc: "Available 24/7 when you need urgent roofing help." },
  { title: "Local, Family Business", desc: "Proudly serving Taunton and the South West." },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[620px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/UK_MKT_PHO_REF_Solar_Grasmere_002.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/20" />

        <div className="relative w-full max-w-7xl mx-auto px-4 py-14 sm:py-20 flex flex-col lg:flex-row items-start lg:items-center gap-10">
          <div className="flex-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#f97316] font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2"
            >
              <span className="w-8 h-px bg-[#f97316] inline-block" />
              Taunton&apos;s Trusted Roofing &amp; Solar Specialists
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-black text-white uppercase leading-tight tracking-tight mb-5"
            >
              Protecting Homes.<br />
              <span className="text-[#f97316]">Powering Futures.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/85 text-lg max-w-lg mb-8 leading-relaxed"
            >
              Expert roofing and solar installation across the South West. Quality workmanship, honest pricing, and 30 years of combined experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#e8650f] text-white font-black text-sm uppercase tracking-widest px-7 py-4 transition-all hover:scale-105"
              >
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:07587478826"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 border-2 border-red-600 hover:border-red-700 text-white font-black text-sm uppercase tracking-widest px-7 py-4 transition-all hover:scale-105 animate-pulse"
              >
                <Phone className="w-4 h-4" /> 24/7 Emergency
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-2 text-white/60 text-xs"
            >
              <MapPin className="w-3.5 h-3.5 text-[#f97316]" />
              Based in Taunton &bull; Covering the South West
            </motion.div>
          </div>

          {/* Feature card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:block w-full lg:w-72 xl:w-80 shrink-0 bg-black/70 border border-white/10 p-6"
          >
            <p className="text-[#f97316] font-black text-xs uppercase tracking-widest mb-4 pb-3 border-b border-white/10">
              Why Choose ProLine?
            </p>
            <ul className="space-y-4">
              {[
                { icon: CheckCircle, title: "30 Years Combined Experience", desc: "Proven expertise across roofing & solar." },
                { icon: Star, title: "5-Star Google Rated", desc: "Dozens of verified 5-star reviews." },
                { icon: Phone, title: "Free Quotes & Emergency Call-Out", desc: "Available when you need us most." },
                { icon: MapPin, title: "South West Specialists", desc: "Based in Taunton, covering the region." },
              ].map(({ icon: Icon, title, desc }) => (
                <li key={title} className="flex items-start gap-3">
                  <Icon className="w-5 h-5 text-[#f97316] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-bold text-sm">{title}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-[#1a1a1a] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {[
            { value: 30, suffix: "+", label: "Years Experience" },
            { value: 300, suffix: "+", label: "Projects Completed" },
            { value: 5, suffix: "★", label: "Google Rating" },
            { value: 100, suffix: "%", label: "Free Quotes" },
          ].map(({ value, suffix, label }, i) => (
            <AnimatedSection key={label} delay={i * 0.1} className="py-7 px-4 text-center group">
              <div className="text-4xl md:text-5xl font-black text-[#f97316] leading-none tracking-tight">
                <CountUp end={value} suffix={suffix} />
              </div>
              <div className="text-gray-400 text-xs uppercase tracking-widest mt-2">{label}</div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── OUR SERVICES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[100px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">What We Do</span>
              <div className="flex-1 max-w-[100px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] uppercase tracking-tight">Our Services</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">From emergency repairs to full solar installations — we cover everything your roof and home needs.</p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map(({ Icon, title, href, desc }, i) => (
              <AnimatedSection key={title} delay={i * 0.07}>
                <div className="group border border-gray-200 p-6 flex flex-col items-center text-center hover:border-[#f97316] hover:shadow-lg transition-all duration-300 h-full">
                  <div className="mb-4 text-[#f97316] group-hover:scale-110 transition-transform duration-300">
                    <Icon />
                  </div>
                  <h3 className="font-black text-[12px] uppercase tracking-wider text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-500 text-[11px] leading-relaxed">{desc}</p>
                  <Link
                    href={href}
                    className="mt-3 text-[#f97316] text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Learn more <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT SPLIT ── */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">
        <AnimatedSection direction="left" className="bg-[#1a1a1a] px-8 md:px-14 py-16 flex flex-col justify-center">
          <p className="flex items-center gap-2 text-[#f97316] text-xs font-bold uppercase tracking-widest mb-4">
            <ArrowRight className="w-3.5 h-3.5" /> About ProLine
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-5">
            Taunton&apos;s Local Roofing<br />&amp; Solar Experts
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-3">
            With 30 years of combined experience, ProLine Roofing &amp; Solar is Taunton&apos;s trusted name for quality roofing and solar installations across the South West.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            We&apos;re a local business that takes pride in every job — big or small. From a single tile repair to a full solar system installation, we treat every customer&apos;s home like our own.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#e8650f] text-white font-black text-xs uppercase tracking-widest px-6 py-3.5 self-start transition-all hover:scale-105"
          >
            Learn More <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </AnimatedSection>

        <AnimatedSection direction="right" className="relative min-h-[380px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/image0.jpeg')" }}
          />
          <div className="absolute inset-0 bg-black/25" />
        </AnimatedSection>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[100px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">Our Promise</span>
              <div className="flex-1 max-w-[100px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] uppercase tracking-tight">Why Choose ProLine?</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map(({ title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 0.1}>
                <div className="bg-white border border-gray-100 p-6 shadow-sm hover:shadow-md hover:border-[#f97316] transition-all duration-300 group">
                  <CheckCircle className="w-6 h-6 text-[#f97316] mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-black text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── COVERAGE MAP ── */}
      <CoverageMap />

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[100px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">Customer Reviews</span>
              <div className="flex-1 max-w-[100px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] uppercase tracking-tight">What Our Customers Say</h2>
            <div className="flex items-center justify-center gap-1 mt-3">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-[#f97316] text-[#f97316]" />)}
              <span className="ml-2 text-gray-600 text-sm font-semibold">Rated 5.0 by our customers</span>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, location, text, service }, i) => (
              <AnimatedSection key={name} delay={i * 0.15}>
                <div className="border border-gray-100 p-6 shadow-sm hover:shadow-md hover:border-[#f97316] transition-all duration-300 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-[#f97316] text-[#f97316]" />)}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed italic flex-1 mb-4">&ldquo;{text}&rdquo;</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-black text-gray-900 text-sm">— {name}</p>
                      <p className="text-gray-400 text-xs">{location}</p>
                    </div>
                    <span className="text-xs bg-orange-50 text-[#f97316] font-bold px-2.5 py-1 rounded-full">{service}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/reviews" className="inline-flex items-center gap-2 border-2 border-[#f97316] text-[#f97316] font-black text-sm uppercase tracking-widest px-6 py-3 hover:bg-[#f97316] hover:text-white transition-all">
                Read All Reviews <ArrowRight className="w-4 h-4" />
              </Link>
              <GoogleReviewButton variant="solid" label="Leave us a Google Review" className="px-6 py-3" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection />
    </>
  );
}
