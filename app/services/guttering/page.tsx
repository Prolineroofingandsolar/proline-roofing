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
  Droplets,
  Home,
  Layers,
  AlertTriangle,
} from "lucide-react";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Guttering & Drainage Somerset | ProLine Roofing & Solar",
  description:
    "Gutter replacement, repair and cleaning services across Somerset. UPVC, cast iron and aluminium guttering. Free survey and quote. Call 07587 478826.",
  keywords: [
    "guttering Somerset",
    "gutter replacement Taunton",
    "gutter repair Somerset",
    "cast iron guttering Somerset",
    "gutter cleaning Taunton",
    "downpipe replacement Somerset",
    "blocked gutters Somerset",
  ],
  alternates: {
    canonical: "https://www.prolineroofingandsolar.co.uk/services/guttering",
  },
  openGraph: {
    title: "Guttering & Drainage Somerset | ProLine Roofing & Solar",
    description:
      "Gutter replacement, repair and cleaning services across Somerset. UPVC, cast iron and aluminium guttering. Free survey and quote. Call 07587 478826.",
    url: "https://www.prolineroofingandsolar.co.uk/services/guttering",
    siteName: "ProLine Roofing & Solar",
    locale: "en_GB",
    type: "website",
  },
};

const services = [
  {
    icon: Home,
    title: "Gutter Replacement (Full or Partial)",
    desc: "Full guttering systems replaced in UPVC, aluminium or cast iron. We survey the existing system, specify the correct size and profile, and fit to manufacturer standards.",
  },
  {
    icon: Wrench,
    title: "Gutter Repair & Resealing",
    desc: "Leaking joints, cracked sections and incorrectly graded runs repaired and resealed. Often a cost-effective alternative to full replacement where the gutter profile is sound.",
  },
  {
    icon: Droplets,
    title: "Gutter Cleaning & Unblocking",
    desc: "Annual or one-off cleaning to remove leaf debris, moss and silt. We use vacuuming and flushing to clear blockages and check the full system is flowing freely.",
  },
  {
    icon: ArrowRight,
    title: "Downpipe Repair & Replacement",
    desc: "Leaking or damaged downpipes replaced, including offset bends, swan necks and ground shoes. Correct downpipe sizing is essential for adequate roof drainage.",
  },
  {
    icon: Layers,
    title: "Cast Iron Guttering (Period Properties)",
    desc: "Sympathetic cast iron gutter replacement and repair for Victorian and Edwardian properties where original profiles must be maintained. Original-profile replacements available.",
  },
  {
    icon: Shield,
    title: "Gutter Guard Installation",
    desc: "Mesh or brush gutter guards fitted to prevent leaf and debris accumulation. Particularly valuable in areas with significant tree canopy or where access for cleaning is difficult.",
  },
  {
    icon: AlertTriangle,
    title: "Box Gutter Lining",
    desc: "Concealed and built-in box gutters lined with GRP fibreglass or EPDM to stop recurring leaks. Box gutters are a very common source of serious water damage in older buildings.",
  },
  {
    icon: Star,
    title: "Rainwater Harvesting Systems",
    desc: "Diverter kits and butt connectors fitted to downpipes for rainwater harvesting. Larger collection systems designed and installed on request.",
  },
];

const whyReasons = [
  {
    icon: Award,
    title: "Full Roofline Expertise",
    desc: "We install guttering as part of our complete roofline service, ensuring everything from fascia boards to downpipe shoes works together correctly.",
  },
  {
    icon: CheckCircle,
    title: "Correct Sizing Specified",
    desc: "The right gutter size matters. We calculate the correct gutter and downpipe sizes for your roof area — most DIY replacements use undersized gutters.",
  },
  {
    icon: Star,
    title: "5-Star Customer Reviews",
    desc: "Our guttering and roofline work is consistently praised for quality of finish, neat installation and long-term performance. Read our reviews online.",
  },
  {
    icon: ThumbsUp,
    title: "Colour Matched",
    desc: "UPVC guttering is available in a wide range of colours including white, black, grey, brown and anthracite. We match to your fascias and property style.",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    desc: "Most domestic guttering replacements are completed in a single day. We minimise disruption and leave your property clean and tidy.",
  },
  {
    icon: Phone,
    title: "Local Somerset Team",
    desc: "Based in Taunton, we cover all of Somerset for guttering work. Fast response times and a team that understands Somerset properties.",
  },
];

const faqs = [
  {
    q: "How often should gutters be cleaned in Somerset?",
    a: "In Somerset, we recommend gutters are cleaned at least once a year, ideally in late autumn after leaf fall. Properties near trees, particularly conifers or deciduous trees with small leaves, may need cleaning twice a year. The combination of high rainfall and abundant vegetation in Somerset means gutters can block faster than in drier parts of the UK. Blocked gutters can quickly lead to overflowing water, damp in walls and fascia board rot.",
  },
  {
    q: "How much does gutter replacement cost?",
    a: "A full gutter run replacement (typically 20–40 metres including downpipes) in standard UPVC costs between £400–£1,200 depending on run length, number of corners and downpipes, and access. Cast iron gutter replacement is more expensive at £800–£2,500 for a typical run due to material costs and extra care required. We provide free surveys and fixed price written quotes for all guttering work.",
  },
  {
    q: "What are the signs my gutters need replacing?",
    a: "Clear signs include: gutters sagging away from the fascia board, visible cracks or splits in gutter sections, persistent leaking at joints even after resealing, gutters pulling away from the wall, overflow regularly despite being clean, peeling paint or staining on external walls beneath the gutters, and damp appearing on internal walls at the junction of wall and ceiling. If gutters are over 20 years old and causing problems, replacement is often more economical than repeated repairs.",
  },
  {
    q: "Should I choose UPVC or cast iron guttering?",
    a: "For most modern properties and post-war homes, UPVC is the practical choice — it is cost-effective, low maintenance, available in many colours, and lasts 25–40 years. For Victorian, Edwardian and other period properties, particularly in conservation areas or on listed buildings, cast iron guttering preserves the character of the building and is sometimes required by planning consent. Cast iron also lasts longer (50–100 years if maintained) but requires occasional painting and is heavier, requiring sound fascia boards.",
  },
  {
    q: "Can blocked gutters cause damp?",
    a: "Yes — blocked gutters are one of the most common causes of dampness in UK properties. When gutters overflow, water runs down the face of the wall rather than being carried away by downpipes. Over time this saturates the masonry and can penetrate to internal walls, causing damp patches and mould. It can also saturate fascia boards, leading to rot and gutter failure. Regular cleaning and correctly functioning gutters are one of the most cost-effective ways to protect your home from damp.",
  },
  {
    q: "How long do UPVC gutters last?",
    a: "Good quality UPVC guttering typically lasts 25–40 years when correctly installed and maintained. Cheap or thin-walled guttering, particularly if exposed to extreme UV, may fail sooner. UV degradation makes the UPVC brittle over time, leading to cracking. We only specify guttering from reputable manufacturers. Regular cleaning extends the life of any guttering system by preventing the weight and acid damage caused by decaying debris.",
  },
  {
    q: "What size guttering do I need?",
    a: "The correct gutter size depends on the catchment area of your roof and the local rainfall intensity. Standard UK residential properties typically use 112mm half-round or 114mm square-line UPVC guttering with 68mm downpipes. Larger or steeply pitched roofs may require 150mm deep-flow guttering. We always calculate the correct sizing during our survey — fitting undersized guttering is a very common mistake that leads to regular overflowing.",
  },
  {
    q: "Do you offer gutter cleaning alongside repairs?",
    a: "Yes. When we visit to quote for repairs or replacement, we always inspect the full gutter run. If cleaning is needed alongside repair work, we can carry this out at the same visit. We also offer a standalone gutter cleaning and inspection service for Somerset homeowners — call 07587 478826 to arrange.",
  },
];

export default function GutteringPage() {
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
              Guttering &amp; Drainage &mdash; Somerset &amp; the South West
            </p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-5 uppercase leading-none">
              Guttering &amp; Drainage<br />
              <span className="text-[#f97316]">Services Somerset</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              Gutter replacement, repair and cleaning in UPVC, cast iron and
              aluminium across Somerset. Protect your home from damp with a
              properly functioning rainwater drainage system.
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

        {/* Trust bar */}
        <div className="relative max-w-7xl mx-auto px-4 mt-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
            {[
              { value: "25–40yr", label: "UPVC Lifespan" },
              { value: "Free", label: "Gutter Survey" },
              { value: "5 ★", label: "Google Rating" },
              { value: "1 day", label: "Typical Install" },
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

      {/* ── Why Gutters Matter ────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <AnimatedSection direction="left">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-1 max-w-[60px] h-px bg-[#f97316]" />
                <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
                  About Guttering
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] uppercase tracking-tight mb-6">
                Why Good Guttering Matters
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Your guttering system is the first line of defence against water
                  damage to your property. Working gutters collect rainwater from the
                  roof and channel it safely away to ground drainage. When they fail
                  — through blockage, damage or incorrect installation — the consequences
                  range from cosmetic staining to serious structural damp problems.
                </p>
                <p>
                  In Somerset, where annual rainfall is well above the UK average (and
                  especially high on the Quantock Hills and Exmoor), a properly
                  functioning guttering system is particularly important. A single
                  blocked downpipe on a semi-detached house can result in hundreds of
                  litres of water per hour running straight down the outside of your
                  wall during a heavy downpour.
                </p>
                <p>
                  Guttering also plays an important role in protecting your fascia
                  boards, soffits and the ends of roof timbers from continual wetting.
                  Overflowing or leaking gutters are one of the most common causes of
                  fascia board rot, which can lead to much more expensive repairs to
                  the roof structure itself.
                </p>
                <p>
                  ProLine provides complete guttering services &mdash; from a one-off
                  cleaning visit to full system replacement across your property.
                  We carry UPVC systems in multiple profiles and colours, and source
                  cast iron and aluminium guttering for period properties. All
                  installations are graded correctly for efficient drainage.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div className="space-y-4">
                <div className="bg-[#f97316]/5 border border-[#f97316]/20 p-7">
                  <h3 className="font-black text-[#1a1a1a] uppercase tracking-wide text-base mb-4">
                    Guttering Materials Compared
                  </h3>
                  <div className="space-y-5">
                    {[
                      {
                        name: "UPVC",
                        life: "25–40 years",
                        cost: "£",
                        pros: "Low cost, light, maintenance-free, many colours",
                        cons: "Can look utilitarian on period properties",
                      },
                      {
                        name: "Aluminium",
                        life: "30–50 years",
                        cost: "££",
                        pros: "Lightweight, corrosion-resistant, period profiles available",
                        cons: "More expensive than UPVC",
                      },
                      {
                        name: "Cast Iron",
                        life: "50–100+ years",
                        cost: "£££",
                        pros: "Authentic period look, very durable, can be repainted",
                        cons: "Heavy, needs painting, higher install cost",
                      },
                    ].map(({ name, life, cost, pros, cons }) => (
                      <div key={name} className="border-b border-[#f97316]/15 pb-5 last:border-b-0 last:pb-0">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <span className="font-black text-[#1a1a1a] text-sm uppercase tracking-wide">{name}</span>
                          <div className="flex items-center gap-2 shrink-0">
                            <span className="text-[#f97316] font-bold text-xs">{life}</span>
                            <span className="text-gray-400 text-xs border border-gray-200 px-1.5 py-0.5 rounded">{cost}</span>
                          </div>
                        </div>
                        <p className="text-gray-500 text-xs mb-1"><strong>Pros:</strong> {pros}</p>
                        <p className="text-gray-400 text-xs"><strong>Cons:</strong> {cons}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Our Guttering Services ────────────────────────────── */}
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
              Our Guttering Services
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm">
              From cleaning to full replacement, ProLine covers all guttering
              and rainwater drainage work across Somerset.
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
              Why Choose ProLine for Guttering?
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
              Guttering Cost Guide &mdash; Somerset 2024
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm">
              Indicative prices for guttering work in Somerset.
              Final costs depend on property size, access and materials chosen.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                service: "Gutter Cleaning (semi-detached)",
                range: "£70 – £150",
                detail:
                  "Includes clearing debris, checking and flushing the full system, and reporting any issues found.",
              },
              {
                service: "Gutter Repair & Resealing",
                range: "£100 – £400",
                detail:
                  "Resealing leaking joints, replacing cracked sections, adjusting falls. Per-section pricing.",
              },
              {
                service: "Full UPVC Gutter Replacement (semi-detached)",
                range: "£400 – £800",
                detail:
                  "Full run replacement in standard UPVC including downpipes and all fixings. Larger properties more.",
              },
              {
                service: "Full UPVC Gutter Replacement (detached house)",
                range: "£700 – £1,200",
                detail:
                  "Complete system for a larger detached property including all downpipes, offsets and connections.",
              },
              {
                service: "Cast Iron Gutter Replacement",
                range: "£800 – £2,500",
                detail:
                  "Period-profile cast iron guttering. Price depends on run length and profile availability.",
              },
              {
                service: "Box Gutter Lining (GRP or EPDM)",
                range: "£500 – £1,800",
                detail:
                  "Lining of an internal or concealed box gutter with GRP fibreglass or EPDM rubber to stop leaks.",
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
              All prices are indicative guides for Somerset in 2024. Scaffold or access
              equipment costs may apply for higher properties.{" "}
              <Link href="/quote" className="text-[#f97316] hover:underline font-bold">
                Get a free, no-obligation quote
              </Link>{" "}
              for your property.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
                FAQ
              </span>
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">
              Guttering Questions Answered
            </h2>
          </AnimatedSection>

          <div className="space-y-6">
            {faqs.map(({ q, a }, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="border border-gray-100 p-7 hover:border-[#f97316]/40 transition-colors">
                  <h3 className="font-black text-[#1a1a1a] text-base mb-3 flex items-start gap-3">
                    <span className="text-[#f97316] font-black shrink-0 text-sm mt-0.5">
                      {String(i + 1).padStart(2, "0")}.
                    </span>
                    {q}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed pl-8">{a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Area ─────────────────────────────────────── */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection direction="left">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-1 max-w-[60px] h-px bg-[#f97316]" />
                <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
                  Service Area
                </span>
              </div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-6">
                Guttering Across Somerset &amp; the South West
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                ProLine installs and repairs guttering throughout Somerset, from
                Taunton and Bridgwater in the north to Chard and Yeovil in the south.
                We work on all property types &mdash; from modern new-build estates to
                period town houses and rural farmhouses.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Somerset&rsquo;s high rainfall makes guttering maintenance more important
                here than in many other parts of England. We always recommend a full
                gutter inspection at least every two years, and annual cleaning for
                properties with significant tree cover.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "Taunton",
                  "Bridgwater",
                  "Yeovil",
                  "Wells",
                  "Glastonbury",
                  "Minehead",
                  "Chard",
                  "Frome",
                  "Street",
                ].map((town) => (
                  <div
                    key={town}
                    className="bg-white/5 border border-white/10 text-gray-300 text-xs font-bold uppercase tracking-wider px-3 py-2 text-center"
                  >
                    {town}
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.15}>
              <div className="space-y-4">
                <div className="bg-[#f97316]/10 border border-[#f97316]/30 p-6">
                  <h3 className="text-white font-black uppercase tracking-wide text-sm mb-2">
                    Combine Guttering With Other Roofline Work
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Gutters and fascia boards are closely linked &mdash; in many cases, fascia
                    board replacement is required before new guttering can be fitted.
                    We offer combined guttering and fascia/soffit packages, often saving
                    money on scaffold costs by completing all roofline work in a single
                    visit.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6">
                  <h3 className="text-white font-black uppercase tracking-wide text-sm mb-3">
                    Related Services
                  </h3>
                  <ul className="space-y-2">
                    {[
                      { label: "All Roofing Services", href: "/roofing" },
                      { label: "Fascias, Soffits & Bargeboards", href: "/services/fascias-soffits" },
                      { label: "Roofer in Taunton", href: "/roofer/taunton" },
                      { label: "Get a Free Quote", href: "/quote" },
                    ].map(({ label, href }) => (
                      <li key={href}>
                        <Link
                          href={href}
                          className="text-[#f97316] hover:text-orange-300 text-sm font-bold flex items-center gap-2 transition-colors"
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
        heading="Need Guttering Work in Somerset?"
        subtext="Call 07587 478826 or request a free survey online. We cover cleaning, repairs and full replacement across Somerset."
      />
    </>
  );
}
