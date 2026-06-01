import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Phone, Building2, Shield, Award, Zap } from "lucide-react";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Commercial Roofing Somerset | ProLine Roofing & Solar",
  description:
    "Commercial roofing services across Somerset — industrial flat roofing, TPO/PVC systems, metal cladding, commercial solar, planned maintenance. Free survey. Call 07587 478826.",
  keywords: ["commercial roofing somerset", "industrial flat roofing somerset", "commercial roofer taunton", "commercial solar somerset", "flat roof maintenance somerset"],
  alternates: { canonical: "https://www.prolineroofingandsolar.co.uk/services/commercial-roofing" },
};

const commercialServices = [
  { icon: Building2, title: "Commercial Flat Roofing", desc: "TPO, PVC single-ply and bituminous felt systems for warehouses, industrial units, offices and retail premises. Full design, supply and installation." },
  { icon: Shield, title: "TPO / PVC Single-Ply", desc: "Modern thermoplastic single-ply membranes (Sarnafil, Firestone, Bauder) with weld-tested seams and fully adhered or mechanically fixed installation." },
  { icon: Zap, title: "Metal Roof Cladding", desc: "Profiled steel and aluminium cladding for industrial and agricultural buildings. Re-cladding, over-cladding, and repair of existing metal roofs." },
  { icon: CheckCircle, title: "Commercial Rooflights", desc: "Polycarbonate, GRP and triple-skin rooflight installation and replacement for industrial and commercial properties. Improved natural light and thermal performance." },
  { icon: Award, title: "Commercial Solar PV", desc: "Large-format commercial solar installations on flat and pitched commercial roofs. System design, structural surveys, DNO applications and installation." },
  { icon: Phone, title: "Planned Maintenance (PPM)", desc: "Annual and biannual roof maintenance contracts for commercial landlords and facilities managers. Inspection reports, gutter cleaning, minor repairs included." },
  { icon: Building2, title: "Emergency Commercial Repairs", desc: "Fast response to commercial roof failures — minimising business disruption. Out-of-hours emergency service available." },
  { icon: Shield, title: "Condition Surveys", desc: "Independent condition surveys and written reports for commercial roofs — useful for purchase surveys, insurance renewals and planned works budgeting." },
];

const faqs = [
  { q: "What commercial roofing systems do you install?", a: "We install TPO and PVC single-ply membrane systems (Sarnafil, Firestone, Bauder), bituminous built-up felt, GRP fibreglass, EPDM rubber, and metal cladding for industrial applications. We'll specify the most appropriate system for your building during a free survey." },
  { q: "Can you work around our business opening hours?", a: "Yes. We understand that minimising business disruption is critical for our commercial clients. We can work evenings, weekends and in phases to keep your operations running during the project. This will be discussed and agreed in the programme before work starts." },
  { q: "Do you provide condition surveys for commercial roofs?", a: "Yes. We carry out written roof condition surveys with photographic records, priority-ranked defect schedules and budget costings for remedial works. These are useful for asset management, insurance renewals, purchase due diligence and planned maintenance budgeting." },
  { q: "Can you install solar panels on a commercial roof?", a: "Yes. ProLine is MCS-accredited and installs commercial solar PV systems on flat and pitched commercial roofs. We handle structural surveys, system design, DNO grid applications and full installation. Commercial solar is currently 0% VAT-rated and qualifies for capital allowances." },
  { q: "What is a planned preventive maintenance contract?", a: "A PPM contract is an annual or biannual maintenance agreement where we carry out regular inspections, gutter cleaning, and minor repairs on a scheduled basis. This extends roof life significantly, prevents emergency call-outs, and provides a maintenance record for building owners and insurers." },
  { q: "How long does commercial re-roofing take?", a: "Timescales depend heavily on the size and complexity of the project. A 500m² warehouse re-roof might take 2–3 weeks. Larger projects are programmed accordingly. We always provide a detailed programme with our quote so you know exactly what to expect." },
  { q: "Are you insured for commercial roofing work?", a: "Yes. We hold £5 million public liability insurance and employers' liability cover on all contracts. We can provide copies of certificates on request and can be added to a client's contractor approval system." },
  { q: "Do you offer warranties on commercial roofing?", a: "Yes. Most commercial flat roof systems come with manufacturer-backed warranties of 10–25 years when installed by approved contractors. We are approved installers for leading membrane manufacturers. Workmanship guarantees are provided separately." },
];

export default function CommercialRoofingPage() {
  return (
    <>
      <section className="relative bg-[#111111] text-white py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/image1.jpeg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/85" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-[#f97316] text-xs font-black uppercase tracking-[0.25em] mb-4">Commercial Roofing — Somerset &amp; the South West</p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-5 uppercase leading-none">
              Commercial Roofing<br /><span className="text-[#f97316]">Somerset</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              Commercial flat roofing, industrial re-cladding, commercial solar and planned maintenance across Somerset and the South West. Free site surveys and competitive commercial pricing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/quote" className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#e8650f] text-white font-black px-8 py-4 uppercase tracking-widest text-sm transition-all hover:scale-105">Request a Survey <ArrowRight className="w-4 h-4" /></Link>
              <a href="tel:07587478826" className="inline-flex items-center gap-2 border-2 border-white text-white font-black px-8 py-4 hover:bg-white hover:text-[#1a1a1a] transition-all text-sm uppercase tracking-widest"><Phone className="w-4 h-4" /> 07587 478826</a>
            </div>
          </AnimatedSection>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 mt-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
            {[{ value: "£5m", label: "Public Liability" }, { value: "All Sizes", label: "Commercial Projects" }, { value: "PPM", label: "Maintenance Contracts" }, { value: "MCS", label: "Solar Accredited" }].map(({ value, label }) => (
              <div key={label} className="bg-white/5 text-center py-4 px-2">
                <div className="text-2xl font-black text-[#f97316]">{value}</div>
                <div className="text-gray-300 text-xs uppercase tracking-wider mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">What We Do</span>
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">Commercial Roofing Services</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {commercialServices.map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 0.07}>
                <div className="group border border-gray-100 hover:border-[#f97316] p-6 transition-all hover:shadow-md h-full">
                  <div className="w-10 h-10 bg-[#f97316]/10 group-hover:bg-[#f97316] flex items-center justify-center mb-4 transition-colors">
                    <Icon className="w-5 h-5 text-[#f97316] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-black text-[#1a1a1a] text-sm uppercase tracking-wide mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {[
            { title: "Sector Experience", items: ["Industrial warehouses & units", "Retail & commercial premises", "Schools & educational buildings", "Agricultural buildings", "Office & business parks", "Residential blocks of flats"] },
            { title: "Systems We Install", items: ["TPO single-ply (Sarnafil, Firestone)", "PVC membrane systems", "Bituminous built-up felt", "GRP fibreglass flat roofing", "Profiled metal cladding", "EPDM rubber systems"] },
            { title: "Why Choose ProLine", items: ["£5m public liability insurance", "Full employers' liability cover", "Manufacturer-approved installer", "Detailed written programmes", "Dedicated commercial account management", "Emergency call-out service"] },
          ].map(({ title, items }) => (
            <AnimatedSection key={title}>
              <h3 className="font-black text-[#f97316] text-xs uppercase tracking-[0.25em] mb-4 pb-2 border-b border-[#f97316]/30">{title}</h3>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-[#f97316] shrink-0 mt-0.5" />{item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">FAQ</span>
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">Commercial Roofing Questions</h2>
          </AnimatedSection>
          <div className="space-y-4">
            {faqs.map(({ q, a }, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="border border-gray-100 hover:border-[#f97316] p-6 transition-all">
                  <h3 className="font-black text-[#1a1a1a] text-sm uppercase tracking-wide mb-3">{q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Free Commercial Roof Survey?" subtext="Contact us today to arrange a free site survey and written quote for your commercial roofing project." />
    </>
  );
}
