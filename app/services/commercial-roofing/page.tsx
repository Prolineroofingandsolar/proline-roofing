import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  Phone,
  Clock,
  Star,
  Award,
  Shield,
  Wrench,
  ThumbsUp,
  Layers,
  Building,
  Sun,
  FileText,
  Zap,
  Calendar,
} from "lucide-react";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Commercial Roofing Somerset | ProLine Roofing & Solar",
  description:
    "Commercial roofing services across Somerset — industrial flat roofing, metal cladding, rooflight installation, PV solar. Serving businesses of all sizes. Free survey.",
  keywords: [
    "commercial roofing Somerset",
    "commercial roofer Taunton",
    "industrial roofing Somerset",
    "flat roof commercial Somerset",
    "commercial roof replacement Somerset",
    "commercial solar PV Somerset",
    "TPO roofing Somerset",
  ],
  alternates: {
    canonical: "https://www.prolineroofingandsolar.co.uk/services/commercial-roofing",
  },
  openGraph: {
    title: "Commercial Roofing Somerset | ProLine Roofing & Solar",
    description:
      "Commercial roofing services across Somerset — industrial flat roofing, metal cladding, rooflight installation, PV solar. Serving businesses of all sizes. Free survey.",
    url: "https://www.prolineroofingandsolar.co.uk/services/commercial-roofing",
    siteName: "ProLine Roofing & Solar",
    locale: "en_GB",
    type: "website",
  },
};

const services = [
  {
    icon: Building,
    title: "Commercial Flat Roof Installation",
    desc: "Full commercial flat roof installations for warehouses, offices, schools, retail units and industrial buildings. We survey, specify and project-manage from initial design to handover.",
  },
  {
    icon: Layers,
    title: "TPO / PVC Single-Ply Systems",
    desc: "Single-ply thermoplastic membranes (TPO and PVC) are the market-leading specification for large commercial flat roofs — lightweight, weld-seamed, highly durable with 20+ year guarantees.",
  },
  {
    icon: Wrench,
    title: "Metal & Fibre Cement Sheet Roofing",
    desc: "Profiled metal sheeting (box profile, standing seam) and fibre cement sheets for industrial and agricultural buildings. Supply, fix and insulation packages available.",
  },
  {
    icon: Sun,
    title: "Commercial Rooflight Installation",
    desc: "Barrel vault, multiwall polycarbonate and GRP rooflight systems for commercial buildings. Improves natural daylighting, reduces energy costs and complies with Building Regulations Part L.",
  },
  {
    icon: Zap,
    title: "Commercial Solar PV",
    desc: "Commercial-scale solar PV systems installed on flat and low-pitched commercial roofs. We assess your roof structure, design the array and complete the full installation.",
  },
  {
    icon: Calendar,
    title: "Planned Preventive Maintenance (PPM)",
    desc: "Scheduled maintenance programmes for commercial roofs, including bi-annual inspections, gutter cleaning, minor repairs and written condition reports. Budgetable, proactive roof management.",
  },
  {
    icon: FileText,
    title: "Commercial Roof Surveys & Reports",
    desc: "Detailed condition surveys with photographic records, condition ratings and prioritised remedial recommendations. Suitable for acquisitions, insurance and budget planning.",
  },
  {
    icon: Building,
    title: "Commercial Guttering & Drainage",
    desc: "Commercial-scale guttering systems including box gutters, valley gutters, siphonic drainage and large-diameter downpipes. Essential for managing high catchment area rainfall.",
  },
];

const whyReasons = [
  {
    icon: Award,
    title: "Commercial Sector Experience",
    desc: "We have completed projects for schools, offices, warehouses, retail units, agricultural buildings and hospitality venues across Somerset. We understand commercial demands.",
  },
  {
    icon: Clock,
    title: "Flexible Working Hours",
    desc: "We schedule commercial roofing work to minimise disruption to your business — including early morning starts, weekend working and phased programmes for occupied buildings.",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    desc: "We carry full public liability insurance at levels suitable for commercial projects. Risk assessments and method statements are provided as standard for all commercial work.",
  },
  {
    icon: CheckCircle,
    title: "Written Guarantees",
    desc: "All commercial roofing installations come with written workmanship guarantees, backed by manufacturer product warranties that can be assigned to building purchasers.",
  },
  {
    icon: ThumbsUp,
    title: "Project Management",
    desc: "From survey to completion, we manage the whole project — specifying materials, coordinating scaffold and access, liaising with building managers and providing programme updates.",
  },
  {
    icon: FileText,
    title: "Full Documentation",
    desc: "Commercial clients receive full project documentation including specifications, installation records, warranties, test certificates and as-built drawings where required.",
  },
];

const faqs = [
  {
    q: "What commercial roofing systems do you install?",
    a: "We install the full range of commercial roofing systems: single-ply thermoplastic membranes (TPO and PVC) for large flat roofs; GRP fibreglass for smaller areas and complex detailing; EPDM rubber for medium-sized roofs; built-up felt (BUR) systems where specified; profiled metal and composite cladding systems for industrial and agricultural buildings; and commercial pitched roofing in tile, slate and fibre cement. We advise on the most appropriate system for your building type, use and budget.",
  },
  {
    q: "Can you work around our business opening hours?",
    a: "Yes. We regularly programme commercial roofing work to minimise disruption to business operations. This can include: phased programmes completing one area at a time while others remain in use, early morning starts, weekend working, overnight work for time-critical situations, and access planning to ensure deliveries and visitors are not disrupted. We discuss programming requirements during our initial survey and build this into our quotation.",
  },
  {
    q: "Do you carry out commercial roof surveys?",
    a: "Yes. We provide standalone commercial roof condition surveys that include: drone or physical access inspection, systematic photographic record, condition rating for each area of the roof, identification of all defects and their severity, prioritised list of recommended repairs and their approximate costs, and estimated remaining life of each roof section. These surveys are invaluable for budget planning, due diligence on property purchases, and ongoing maintenance planning. A written report is provided within 5 working days.",
  },
  {
    q: "What is the best flat roofing system for a commercial building?",
    a: "For most commercial flat roofs in Somerset, single-ply TPO membrane is the current market-leading specification. It is lightweight (important for older structures), has welded seams that eliminate joint failure, is highly resistant to UV and thermal cycling, and carries 20–25 year manufacturer warranties. It is also fully recyclable at end of life. For smaller commercial roofs, EPDM or GRP are excellent options. For roofs that will carry solar PV or be used as walkable terraces, we specify heavier-duty systems with appropriate traffic layers.",
  },
  {
    q: "Can you install solar panels on a commercial roof?",
    a: "Yes — commercial solar PV is a core part of our offering. Commercial roofs are often ideal for solar because of their large, unshaded area and flat orientation. We carry out a full structural assessment, design the optimal array layout, and manage the full MCS-compliant installation including inverters, monitoring and DNO notification. Commercial solar typically has payback periods of 5–10 years and generates significant income through electricity cost savings and export payments. See our solar page for more information.",
  },
  {
    q: "Do you offer maintenance contracts for commercial roofs?",
    a: "Yes. Our Planned Preventive Maintenance (PPM) contracts provide scheduled, budgetable roof maintenance for commercial clients. A typical PPM contract includes two site visits per year (spring and autumn), gutter and outlet clearing, minor repairs and re-sealing of joints and flashings, moss treatment where required, and a written condition report after each visit. PPM contracts eliminate reactive emergency costs and provide clear documentation for insurers, property managers and future purchasers.",
  },
  {
    q: "Are you insured for commercial roofing work?",
    a: "Yes. We carry public liability insurance at appropriate levels for commercial projects, and employer's liability insurance for all operatives. For larger projects, we can provide enhanced cover on request. Risk assessments and method statements are produced for all commercial work as standard, and we operate CHAS or equivalent contractor accreditation. We can provide insurance certificates and accreditation documentation at any time.",
  },
  {
    q: "How long does commercial re-roofing take?",
    a: "The programme depends entirely on the size and complexity of the project. A small office or retail unit flat roof (under 500m²) might be completed in 1–2 weeks. A large warehouse or school flat roof (2,000–5,000m²) might take 4–8 weeks. We always produce a detailed programme before work starts so clients can plan accordingly. Phased programmes allow work to be carried out in sections while the building remains in use. We include programme information in all quotations.",
  },
];

export default function CommercialRoofingPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative bg-[#111111] text-white py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/image1.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/85" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-[#f97316] text-xs font-black uppercase tracking-[0.25em] mb-4">
              Commercial Roofing &mdash; Somerset &amp; the South West
            </p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-5 uppercase leading-none">
              Commercial Roofing<br />
              <span className="text-[#f97316]">Somerset Businesses</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              Commercial flat roofing, metal cladding, rooflights and solar PV
              for businesses across Somerset. Minimal disruption, full documentation,
              and long-term warranties you can rely on.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#e8650f] text-white font-black px-8 py-4 uppercase tracking-widest text-sm transition-all hover:scale-105"
              >
                Request a Survey <ArrowRight className="w-4 h-4" />
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

        {/* Trust bar */}
        <div className="relative max-w-7xl mx-auto px-4 mt-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
            {[
              { value: "20+ yr", label: "TPO Guarantee" },
              { value: "Free", label: "Commercial Survey" },
              { value: "5 ★", label: "Google Rating" },
              { value: "PPM", label: "Contracts Available" },
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

      {/* ── About Commercial Roofing ──────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <AnimatedSection direction="left">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-1 max-w-[60px] h-px bg-[#f97316]" />
                <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
                  Commercial Roofing
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] uppercase tracking-tight mb-6">
                Roofing Built for Commercial Demands
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Commercial roofing presents different demands from domestic work.
                  Roofs are larger, access is more complex, business continuity must
                  be maintained, warranties and documentation must meet insurance and
                  property transaction requirements, and the financial consequences
                  of failure are much greater.
                </p>
                <p>
                  ProLine has extensive experience delivering commercial roofing
                  projects across Somerset &mdash; from small retail units in Taunton
                  town centre to large-scale industrial warehouse roofs, school and
                  public building re-roofing programmes, and new-build commercial
                  developments across the county.
                </p>
                <p>
                  We understand the importance of specification quality in commercial
                  roofing. Specifying the right system for the building type, loading
                  requirements, drainage design and future use (including solar PV)
                  is critical to long-term performance. We provide full specifications
                  with our quotations, use accredited contractors and products, and
                  offer independently backed manufacturer warranties.
                </p>
                <p>
                  Planned preventive maintenance (PPM) is fundamental to commercial
                  roof longevity. A well-maintained commercial flat roof will
                  outlast a neglected one by 10–20 years. Our PPM contracts provide
                  peace of mind and predictable maintenance budgets for commercial
                  property owners and managers.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.15}>
              <div className="space-y-4">
                <div className="bg-[#f97316]/5 border border-[#f97316]/20 p-7">
                  <h3 className="font-black text-[#1a1a1a] uppercase tracking-wide text-base mb-4">
                    Commercial Roofing Systems
                  </h3>
                  <div className="space-y-5">
                    {[
                      {
                        name: "TPO Single-Ply Membrane",
                        suitability: "Large flat roofs, industrial, office",
                        guarantee: "20–25 years",
                        notes: "Weld-seamed joints, highly durable, can carry PV",
                      },
                      {
                        name: "PVC Single-Ply Membrane",
                        suitability: "Large flat roofs, food industry",
                        guarantee: "20–25 years",
                        notes: "Excellent chemical resistance, wide colour range",
                      },
                      {
                        name: "Built-Up Felt (BUR)",
                        suitability: "Most flat roof types",
                        guarantee: "15–20 years",
                        notes: "Multi-layer system, well-established, good value",
                      },
                      {
                        name: "Profiled Metal Sheet",
                        suitability: "Industrial, agricultural, sports",
                        guarantee: "20–40 years",
                        notes: "Standing seam, box profile. Integrated gutters available",
                      },
                    ].map(({ name, suitability, guarantee, notes }) => (
                      <div key={name} className="border-b border-[#f97316]/15 pb-4 last:border-b-0 last:pb-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <span className="font-black text-[#1a1a1a] text-sm leading-snug flex-1">{name}</span>
                          <span className="text-[#f97316] text-xs font-bold shrink-0">{guarantee}</span>
                        </div>
                        <p className="text-gray-500 text-xs mb-1"><strong>Best for:</strong> {suitability}</p>
                        <p className="text-gray-400 text-xs">{notes}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Our Commercial Services ───────────────────────────── */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
                What We Do
              </span>
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-3">
              Our Commercial Roofing Services
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm">
              ProLine provides a comprehensive commercial roofing service across
              Somerset, from surveys and PPM to full re-roofing programmes.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {services.map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 0.07}>
                <div className="group bg-[#1a1a1a] hover:bg-[#222] p-7 h-full transition-colors duration-300 border border-white/5 hover:border-[#f97316]/40">
                  <div className="w-10 h-10 bg-[#f97316]/15 group-hover:bg-[#f97316] flex items-center justify-center mb-4 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#f97316] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-black text-white text-sm uppercase tracking-wide mb-3">
                    {title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose ProLine ───────────────────────────────── */}
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
              Why Choose ProLine for Commercial Roofing?
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyReasons.map(({ icon: Icon, title, desc }, i) => (
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

      {/* ── Pricing Guide ────────────────────────────────────── */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
                Pricing
              </span>
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-3">
              Commercial Roofing Costs &mdash; Somerset 2024
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm">
              Commercial roofing costs vary widely with building size, system
              specification and project complexity. All projects receive a free survey
              and detailed written quotation.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                service: "Commercial Roof Condition Survey",
                range: "£300 – £900",
                detail:
                  "Full site survey with written report, photographs and condition ratings. Invaluable for budget planning and property transactions.",
              },
              {
                service: "TPO Single-Ply (per m²)",
                range: "£45 – £85/m²",
                detail:
                  "Fully adhered or mechanically fixed TPO membrane including insulation, upstands and outlets.",
              },
              {
                service: "GRP Fibreglass Commercial (per m²)",
                range: "£55 – £100/m²",
                detail:
                  "GRP system for smaller commercial flat roofs and complex detailing. Includes insulation.",
              },
              {
                service: "Profiled Metal Sheet (per m²)",
                range: "£30 – £60/m²",
                detail:
                  "Box profile or standing seam metal roofing for industrial buildings. Includes liner, insulation and fixings.",
              },
              {
                service: "Commercial Solar PV (per kWp)",
                range: "£800 – £1,400/kWp",
                detail:
                  "Full commercial PV installation including mounting, inverters and grid connection. Varies with system size.",
              },
              {
                service: "PPM Contract (per visit)",
                range: "£250 – £800",
                detail:
                  "Planned maintenance visit including inspection, gutter clear, minor repairs and written report.",
              },
            ].map(({ service, range, detail }) => (
              <AnimatedSection key={service}>
                <div className="bg-white/5 border border-white/10 p-6 h-full hover:border-[#f97316]/40 transition-colors">
                  <div className="text-[#f97316] font-black text-xl mb-1">{range}</div>
                  <div className="text-white font-bold text-sm uppercase tracking-wide mb-3">
                    {service}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{detail}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-10 text-center">
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              Commercial projects are always individually priced after a site survey.
              Prices above are indicative benchmarks only.{" "}
              <Link href="/quote" className="text-[#f97316] hover:underline font-bold">
                Request a free commercial survey and quotation.
              </Link>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
                Our Process
              </span>
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">
              How We Manage Commercial Projects
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0">
            {[
              {
                step: "01",
                title: "Survey",
                desc: "Free site survey, condition assessment and identification of requirements.",
              },
              {
                step: "02",
                title: "Specification",
                desc: "Detailed specification and programme produced. Manufacturer warranties confirmed.",
              },
              {
                step: "03",
                title: "Quotation",
                desc: "Fixed price written quotation with clear inclusions and provisional sums for discovered works.",
              },
              {
                step: "04",
                title: "Installation",
                desc: "Phased installation to your programme. Regular progress updates and site management.",
              },
              {
                step: "05",
                title: "Handover",
                desc: "Full handover pack: warranties, installation certificates, inspection photos and maintenance schedule.",
              },
            ].map(({ step, title, desc }, i) => (
              <AnimatedSection key={step} delay={i * 0.1}>
                <div className="relative text-center p-7 border-l border-gray-100 first:border-l-0">
                  <div className="w-12 h-12 bg-[#f97316] text-white font-black text-lg flex items-center justify-center mx-auto mb-4">
                    {step}
                  </div>
                  <h3 className="font-black text-[#1a1a1a] mb-2 uppercase tracking-wide text-sm">
                    {title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
                FAQ
              </span>
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">
              Commercial Roofing Questions Answered
            </h2>
          </AnimatedSection>

          <div className="space-y-6">
            {faqs.map(({ q, a }, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="border border-white/10 p-7 hover:border-[#f97316]/40 transition-colors">
                  <h3 className="font-black text-white text-base mb-3 flex items-start gap-3">
                    <span className="text-[#f97316] font-black shrink-0 text-sm mt-0.5">
                      {String(i + 1).padStart(2, "0")}.
                    </span>
                    {q}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed pl-8">{a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Area ─────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection direction="left">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-1 max-w-[60px] h-px bg-[#f97316]" />
                <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
                  Service Area
                </span>
              </div>
              <h2 className="text-3xl font-black text-[#1a1a1a] uppercase tracking-tight mb-6">
                Commercial Roofing Across Somerset
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                ProLine carries out commercial roofing projects throughout Somerset
                and into neighbouring counties. We have completed work at commercial
                and industrial premises in Taunton, Bridgwater, Yeovil, Frome,
                Chard, and across the county&rsquo;s rural areas.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                We work with property managers, facilities teams, business owners,
                local authorities, schools, and commercial landlords. Whether you
                need a single roof survey, an emergency repair, or a multi-phase
                re-roofing programme, we have the capacity and expertise to deliver.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "Taunton",
                  "Bridgwater",
                  "Yeovil",
                  "Frome",
                  "Chard",
                  "Wells",
                  "Glastonbury",
                  "Minehead",
                  "Street",
                ].map((town) => (
                  <div
                    key={town}
                    className="border border-gray-100 text-gray-500 text-xs font-bold uppercase tracking-wider px-3 py-2 text-center"
                  >
                    {town}
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.15}>
              <div className="space-y-4">
                <div className="bg-[#f97316]/5 border border-[#f97316]/20 p-6">
                  <h3 className="text-[#1a1a1a] font-black uppercase tracking-wide text-sm mb-2">
                    Solar PV on Commercial Roofs
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Commercial flat roofs are often ideal solar PV sites. ProLine
                    combines roofing and solar expertise to deliver integrated
                    solutions &mdash; either fitting solar on a newly replaced roof or
                    assessing whether your existing roof structure can support a PV
                    array. Commercial solar typically delivers an ROI within 5–10 years.
                    See our{" "}
                    <Link href="/solar" className="text-[#f97316] hover:underline font-bold">
                      solar page
                    </Link>{" "}
                    for more details.
                  </p>
                </div>
                <div className="bg-gray-50 border border-gray-100 p-6">
                  <h3 className="text-[#1a1a1a] font-black uppercase tracking-wide text-sm mb-3">
                    Related Services
                  </h3>
                  <ul className="space-y-2">
                    {[
                      { label: "All Roofing Services", href: "/roofing" },
                      { label: "Solar PV Installation", href: "/solar" },
                      { label: "Roofer in Taunton", href: "/roofer/taunton" },
                      { label: "Request a Survey", href: "/quote" },
                    ].map(({ label, href }) => (
                      <li key={href}>
                        <Link
                          href={href}
                          className="text-[#f97316] hover:text-orange-600 text-sm font-bold flex items-center gap-2 transition-colors"
                        >
                          <ArrowRight className="w-3 h-3" /> {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTASection
        heading="Commercial Roofing Enquiry?"
        subtext="Call 07587 478826 or request a free commercial survey. We respond to all commercial enquiries within one working day."
      />
    </>
  );
}
