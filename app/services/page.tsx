import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "All Roofing & Solar Services | ProLine Roofing & Solar",
  description:
    "Complete roofing and solar services across Somerset and the South West. New roofs, repairs, flat roofing, solar panels, chimney repairs, guttering and more. Free quotes.",
  keywords: [
    "roofing services somerset",
    "roof repairs somerset",
    "flat roofing somerset",
    "solar panel installation somerset",
    "chimney repairs somerset",
    "guttering somerset",
    "fascias soffits somerset",
    "leadwork somerset",
  ],
  alternates: { canonical: "https://www.prolineroofingandsolar.co.uk/services" },
};

const roofingServices = [
  {
    title: "Roof Repairs",
    href: "/services/roof-repairs",
    desc: "Fast, professional repairs for leaking roofs, broken tiles, storm damage and all common roof problems. From single tiles to major structural repairs.",
    price: "From £150",
    highlights: ["Tile & slate repairs", "Leak detection", "Storm damage", "Same-day survey available"],
  },
  {
    title: "New Roofs",
    href: "/roofing",
    desc: "Full new roof installations for domestic and commercial properties. We work with all materials including concrete tiles, clay tiles, natural slate and EPDM.",
    price: "From £5,000",
    highlights: ["All tile types", "Scaffold included", "10-15 yr guarantee", "Full structural inspection"],
  },
  {
    title: "Flat Roofing",
    href: "/services/flat-roofing",
    desc: "Modern flat roofing systems including EPDM rubber, GRP fibreglass and torch-on felt. New installations, repairs and full replacements.",
    price: "From £2,500",
    highlights: ["EPDM rubber", "GRP fibreglass", "25-year lifespan", "Extensions & garages"],
  },
  {
    title: "Slate Roofing",
    href: "/services/slate-roofing",
    desc: "Natural and artificial slate roofing. Welsh slate, Spanish slate and synthetic alternatives. Sympathetic repairs for period properties and conservation areas.",
    price: "From £6,000",
    highlights: ["Natural Welsh slate", "Spanish & Brazilian slate", "Synthetic slate", "Conservation areas"],
  },
  {
    title: "Tile Roofing",
    href: "/services/tile-roofing",
    desc: "Concrete and clay tile roofing for modern and period homes. All profiles available. Matching tiles for repairs to older roofs.",
    price: "From £4,500",
    highlights: ["Concrete tiles", "Clay plain tiles", "Interlocking tiles", "Ridge tile replacement"],
  },
  {
    title: "Chimney Repairs",
    href: "/services/chimney-repairs",
    desc: "Comprehensive chimney services including repointing, flaunching, leadwork, pot replacement and full stack rebuilds. Damp-proofing and waterproofing.",
    price: "From £300",
    highlights: ["Repointing", "Lead flashing", "Flaunching", "Stack rebuilds"],
  },
  {
    title: "Leadwork",
    href: "/services/leadwork",
    desc: "Expert lead flashing installation and repair. Lead valleys, step flashings, chimney abutments, soakers and flat roof leadwork. Listed building experience.",
    price: "From £300",
    highlights: ["Chimney flashings", "Lead valleys", "Code 4 & 5 lead", "Listed buildings"],
  },
  {
    title: "Fascias & Soffits",
    href: "/services/fascias-soffits",
    desc: "UPVC fascia, soffit and bargeboard replacement. Low maintenance, rot-free alternatives to timber. Full roofline packages including guttering.",
    price: "From £600",
    highlights: ["UPVC & aluminium", "Vented soffits", "Colour choice", "Dry verge systems"],
  },
  {
    title: "Guttering",
    href: "/services/guttering",
    desc: "Gutter replacement, repair and cleaning. UPVC, aluminium and cast iron. Full drainage solutions including downpipes, soakaways and gutter guards.",
    price: "From £300",
    highlights: ["UPVC guttering", "Cast iron", "Gutter cleaning", "Gutter guards"],
  },
  {
    title: "Emergency Roofing",
    href: "/services/emergency-roofing",
    desc: "24/7 emergency roofing call-outs across Somerset. Storm damage, active leaks, fallen tiles, chimney collapses. Fast response, any time of day or night.",
    price: "Available 24/7",
    highlights: ["24/7 response", "Storm damage", "Active leaks", "Insurance reports"],
  },
  {
    title: "Commercial Roofing",
    href: "/services/commercial-roofing",
    desc: "Commercial and industrial roofing across Somerset. Flat roof systems, metal cladding, rooflights, commercial solar and planned maintenance contracts.",
    price: "Quote on request",
    highlights: ["TPO/PVC systems", "Metal cladding", "Planned maintenance", "Commercial solar"],
  },
];

const solarServices = [
  {
    title: "Solar Panel Installation",
    href: "/solar",
    desc: "MCS-accredited solar PV installation for homes and businesses. System design, supply and installation. Fully qualified, fully insured.",
    price: "From £5,000",
    highlights: ["MCS accredited", "All roof types", "System design", "DNO applications"],
  },
  {
    title: "Battery Storage",
    href: "/solar",
    desc: "Solar battery storage systems to maximise your self-consumption and reduce your reliance on the grid. AC and DC-coupled systems available.",
    price: "From £2,000",
    highlights: ["AC & DC coupled", "Tesla Powerwall", "GivEnergy", "VPP compatible"],
  },
  {
    title: "Solar Panel Repairs",
    href: "/solar",
    desc: "Diagnosis and repair of underperforming solar systems. Panel replacement, inverter issues, wiring faults and string re-configuration.",
    price: "From £150",
    highlights: ["Panel replacement", "Inverter repair", "Monitoring setup", "Performance check"],
  },
  {
    title: "Solar Maintenance",
    href: "/solar",
    desc: "Annual servicing and maintenance for solar PV systems. Panel cleaning, electrical checks, inverter inspection and performance reporting.",
    price: "From £150/yr",
    highlights: ["Panel cleaning", "Electrical testing", "Performance report", "Annual contracts"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#111111] text-white py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/image1.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/85" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-[#f97316] text-xs font-black uppercase tracking-[0.25em] mb-4">
              Somerset &amp; the South West
            </p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-5 uppercase leading-none">
              All Our<br />
              <span className="text-[#f97316]">Services</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              From a single tile replacement to a full new roof and solar installation — ProLine delivers quality workmanship across every roofing and solar service.
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
      </section>

      {/* Roofing Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">Roofing</span>
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">Roofing Services</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {roofingServices.map(({ title, href, desc, price, highlights }, i) => (
              <AnimatedSection key={title} delay={i * 0.06}>
                <div className="group border border-gray-100 hover:border-[#f97316] hover:shadow-md transition-all p-7 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-black text-[#1a1a1a] text-base uppercase tracking-tight group-hover:text-[#f97316] transition-colors">
                      {title}
                    </h3>
                    <span className="text-xs text-[#f97316] font-black shrink-0 ml-2">{price}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{desc}</p>
                  <ul className="space-y-1.5 mb-5">
                    {highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs text-gray-600">
                        <CheckCircle className="w-3.5 h-3.5 text-[#f97316] shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-1 text-[#f97316] text-xs font-black uppercase tracking-widest hover:gap-2 transition-all mt-auto"
                  >
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Solar Services */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">Solar</span>
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">Solar Services</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-6">
            {solarServices.map(({ title, href, desc, price, highlights }, i) => (
              <AnimatedSection key={title} delay={i * 0.1}>
                <div className="group border border-white/10 hover:border-[#f97316] transition-all p-7 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-black text-white text-base uppercase tracking-tight group-hover:text-[#f97316] transition-colors">
                      {title}
                    </h3>
                    <span className="text-xs text-[#f97316] font-black shrink-0 ml-2">{price}</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{desc}</p>
                  <ul className="space-y-1.5 mb-5">
                    {highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle className="w-3.5 h-3.5 text-[#f97316] shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-1 text-[#f97316] text-xs font-black uppercase tracking-widest hover:gap-2 transition-all mt-auto"
                  >
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* By Location */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-2xl font-black text-[#1a1a1a] uppercase tracking-tight">Our Services by Location</h2>
            <p className="text-gray-500 mt-2 text-sm">Find our services in your area:</p>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {[
              { name: "Taunton", href: "/roofer/taunton" },
              { name: "Bridgwater", href: "/roofer/bridgwater" },
              { name: "Bath", href: "/roofer/bath" },
              { name: "Bristol", href: "/roofer/bristol" },
              { name: "Exeter", href: "/roofer/exeter" },
              { name: "Yeovil", href: "/roofer/yeovil" },
              { name: "Weston-super-Mare", href: "/roofer/weston-super-mare" },
              { name: "Wellington", href: "/roofer/wellington" },
              { name: "Burnham-on-Sea", href: "/roofer/burnham-on-sea" },
              { name: "Glastonbury", href: "/roofer/glastonbury" },
            ].map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className="border border-gray-200 bg-white hover:border-[#f97316] text-gray-700 hover:text-[#f97316] text-sm font-semibold text-center py-3 px-3 transition-colors"
              >
                Roofer {name}
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/locations" className="inline-flex items-center gap-2 text-[#f97316] font-black text-sm uppercase tracking-widest hover:underline">
              All Areas We Cover <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
