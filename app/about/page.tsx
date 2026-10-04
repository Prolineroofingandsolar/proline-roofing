export const dynamic = "force-static";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, MapPin, Phone, Shield, Award, FileText } from "lucide-react";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "About Us | ProLine Roofing & Solar",
  description:
    "Learn about ProLine Roofing & Solar, a Taunton-based roofing and solar team serving Somerset and surrounding areas.",
  alternates: { canonical: "https://www.prolineroofingandsolar.co.uk/about" },
};

const values = [
  { title: "Quality Workmanship", desc: "We take pride in every job, using only premium materials and tried and tested techniques." },
  { title: "Honest & Transparent", desc: "No hidden costs, no surprises. We agree a fair price upfront and stick to it." },
  { title: "Local & Reliable", desc: "We're your neighbours. We care about our reputation in the community and it shows." },
  { title: "Current Documentation", desc: "Ask for the insurance and certification documents relevant to your proposed work." },
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
              A Taunton-based team providing roofing and solar services across Somerset and surrounding areas.
            </p>
          </AnimatedSection>
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
              ProLine Roofing &amp; Solar is a Taunton-based roofing and solar company. We focus on clear advice, careful workmanship and straightforward communication from the first survey to completion.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              From a single emergency repair to a full solar installation, we approach every job with the same commitment to quality. We&apos;re proud to be local, proud to be trusted, and proud of the work we leave behind.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Our regular service areas are listed on the Locations page. For work farther from Taunton, we confirm availability after checking the postcode and project requirements.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <MapPin className="w-4 h-4 text-[#f97316]" />
              Taunton, Somerset &bull; See our current service areas
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
            <h2 className="text-3xl font-black text-white uppercase mb-4">Current Service Areas</h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto mb-8">
              We regularly work in the areas below. Contact us with your postcode so we can confirm availability.
            </p>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {[
                { name: "Taunton", href: "/roofer/taunton" },
                { name: "Bridgwater", href: "/roofer/bridgwater" },
                { name: "Wellington", href: "/roofer/wellington" },
                { name: "Yeovil", href: "/roofer/yeovil" },
                { name: "Exeter", href: "/roofer/exeter" },
                { name: "Bristol", href: "/roofer/bristol" },
                { name: "Bath", href: "/roofer/bath" },
                { name: "Glastonbury", href: "/roofer/glastonbury" },
                { name: "Weston-super-Mare", href: "/roofer/weston-super-mare" },
                { name: "Burnham-on-Sea", href: "/roofer/burnham-on-sea" },
              ].map(({ name, href }) => (
                <Link key={name} href={href} className="bg-white/10 border border-white/20 hover:border-[#f97316] hover:bg-[#f97316]/20 text-white px-3 py-1.5 text-xs font-semibold transition-colors">
                  {name}
                </Link>
              ))}
            </div>
            <p className="text-gray-500 text-xs mt-6 italic">Not on the list? Call us and we will confirm whether we can travel to you.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Accreditations & Trust */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">Credentials</span>
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">Ask for Current Documentation</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
              Insurance, certification, warranty and project-specific documentation should be checked before work begins. We can provide the documents relevant to your quote.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Insurance Documentation",
                desc: "Ask us for a current certificate and confirm that its cover and limits suit your project.",
              },
              {
                icon: Shield,
                title: "Project-Specific Cover",
                desc: "We will identify the insurance information relevant to the proposed work in your quotation process.",
              },
              {
                icon: Award,
                title: "Solar Certification",
                desc: "For solar work, ask us to confirm the installer, certification route and documents you will receive for your proposed system.",
              },
              {
                icon: CheckCircle,
                title: "Relevant Experience",
                desc: "Ask to see recent examples that match your roof type, property and proposed scope of work.",
              },
              {
                icon: FileText,
                title: "Written Terms",
                desc: "The quotation will state the scope, materials, payment schedule and any workmanship or manufacturer warranty terms.",
              },
              {
                icon: CheckCircle,
                title: "Source-Labelled Reviews",
                desc: "Our Reviews page identifies the platform associated with each displayed customer review.",
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 0.08}>
                <div className="group p-7 border border-gray-100 hover:border-[#f97316] hover:shadow-md transition-all h-full">
                  <div className="w-11 h-11 bg-[#f97316]/10 group-hover:bg-[#f97316] flex items-center justify-center mb-4 transition-colors">
                    <Icon className="w-5 h-5 text-[#f97316] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-black text-[#1a1a1a] text-sm uppercase tracking-wide mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-10">
            <p className="text-gray-500 text-sm mb-4">Want to verify our credentials? Call us or request copies of our certificates directly.</p>
            <a href="tel:07587478826" className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white font-black px-6 py-3 uppercase tracking-widest text-sm hover:bg-[#2a2a2a] transition-colors">
              <Phone className="w-4 h-4" /> 07587 478826
            </a>
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
