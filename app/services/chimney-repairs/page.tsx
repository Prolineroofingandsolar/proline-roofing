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
  AlertTriangle,
  Home,
  Droplets,
  Hammer,
} from "lucide-react";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Chimney Repairs Somerset | ProLine Roofing & Solar",
  description:
    "Professional chimney repair and repointing services across Somerset. Flashing repairs, repointing, chimney stack rebuilds. Fully insured. Free quotes.",
  keywords: [
    "chimney repairs Somerset",
    "chimney repointing Taunton",
    "chimney flashing repair Somerset",
    "chimney stack rebuild Somerset",
    "flaunching repair Somerset",
    "chimney damp Taunton",
    "lead flashing chimney Somerset",
  ],
  alternates: {
    canonical: "https://www.prolineroofingandsolar.co.uk/services/chimney-repairs",
  },
  openGraph: {
    title: "Chimney Repairs Somerset | ProLine Roofing & Solar",
    description:
      "Professional chimney repair and repointing services across Somerset. Flashing repairs, repointing, chimney stack rebuilds. Fully insured. Free quotes.",
    url: "https://www.prolineroofingandsolar.co.uk/services/chimney-repairs",
    siteName: "ProLine Roofing & Solar",
    locale: "en_GB",
    type: "website",
  },
};

const services = [
  {
    icon: Hammer,
    title: "Chimney Repointing & Tuckpointing",
    desc: "Failing mortar joints are the primary cause of chimney deterioration. We rake out failed mortar and replace it with correctly mixed mortar suited to the age and type of brickwork.",
  },
  {
    icon: Home,
    title: "Chimney Stack Rebuilding",
    desc: "Where a chimney stack has deteriorated beyond repair or has structural damage, we carry out full or partial stack rebuilds, matching bricks and mortar to the existing property.",
  },
  {
    icon: Shield,
    title: "Chimney Flashing Repair",
    desc: "Lead and code 4/5 flashing where the chimney meets the roof is a common source of leaks. We repair, re-dress or fully replace chimney flashings using quality lead sheet.",
  },
  {
    icon: Wrench,
    title: "Chimney Pot Replacement",
    desc: "Cracked or missing chimney pots allow water ingress and can cause serious damage over time. We source matching pots or upgrade to suitable alternatives with correct bedding.",
  },
  {
    icon: AlertTriangle,
    title: "Flaunching Repair",
    desc: "The cement flaunching that beds the chimney pot is frequently the first point of failure on older chimneys. We remove failed flaunching and re-apply correctly with weather-appropriate mix.",
  },
  {
    icon: Droplets,
    title: "Damp-Proofing & Waterproofing",
    desc: "Chimneys are a major source of damp penetration in older Somerset properties. We diagnose the source — whether flashing, pointing, flaunching or stack — and apply lasting solutions.",
  },
  {
    icon: CheckCircle,
    title: "Chimney Removal & Capping",
    desc: "Where a chimney is no longer needed and is causing problems, we can carry out safe removal to below roof level or cap the stack neatly to prevent ongoing water ingress.",
  },
  {
    icon: Star,
    title: "Chimney Surveys & Reports",
    desc: "We carry out detailed chimney surveys — on request or as part of a full roof survey — and provide written condition reports. Useful for home buyers and insurers.",
  },
];

const whyReasons = [
  {
    icon: Award,
    title: "Specialist Chimney Knowledge",
    desc: "Chimneys are complex structures that require understanding of masonry, leadwork, and roof construction. Our team has decades of specialist chimney repair experience.",
  },
  {
    icon: Shield,
    title: "Correct Materials Used",
    desc: "We use mortar mixes appropriate to the age of your property — softer lime-based mixes for older buildings, not modern cement which can damage historic brickwork.",
  },
  {
    icon: CheckCircle,
    title: "Fully Insured & Guaranteed",
    desc: "All chimney work is covered by full public liability insurance and comes with a written workmanship guarantee.",
  },
  {
    icon: ThumbsUp,
    title: "Transparent Diagnosis",
    desc: "We explain exactly what we find, show you photos from the roof, and give you honest options. No unnecessary work is recommended.",
  },
  {
    icon: Clock,
    title: "Efficient Scaffolding",
    desc: "We plan scaffold erection efficiently to minimise cost and disruption, and can often combine chimney work with other roofing repairs in a single visit.",
  },
  {
    icon: Phone,
    title: "Somerset Based",
    desc: "Based in Taunton, we respond quickly to enquiries across Somerset. We understand local stone and brick types, and the damp conditions Somerset chimneys face.",
  },
];

const faqs = [
  {
    q: "What are the signs my chimney needs repointing?",
    a: "Key signs include: mortar crumbling away from joints when touched or viewed from the ground, visible cracks or gaps between the mortar and bricks, damp patches on interior chimney breast walls, white efflorescence (salt staining) on the brickwork, loose or wobbling chimney pots, and general weathered or recessed-looking mortar joints. If your chimney is over 20–30 years old, a professional inspection is worthwhile even without visible problems.",
  },
  {
    q: "How much does chimney repointing cost in Somerset?",
    a: "Chimney repointing in Somerset typically costs between £300–£1,500 depending on the size of the chimney, the amount of repointing required, and scaffold access. A straightforward single-stack repoint with minimal scaffold is at the lower end; a large Victorian double stack with substantial mortar failure will be higher. We provide free surveys and written quotes for all chimney work.",
  },
  {
    q: "How long does chimney repointing last?",
    a: "Well-executed chimney repointing using the correct mortar mix should last 20–30 years or more. The longevity depends heavily on using the right mortar — softer lime mortars for older buildings, stronger mixes for modern brickwork. Using an overly strong Portland cement mortar on an older chimney can actually cause more damage by trapping moisture and stressing the bricks.",
  },
  {
    q: "What is chimney flaunching?",
    a: "Flaunching is the cement fillet or collar at the base of chimney pots that bonds them to the top of the chimney stack. It is often the first part of a chimney to fail, as it is exposed to freeze-thaw cycles and constantly wet conditions. Cracked or missing flaunching allows water into the chimney stack, leading to progressive damage. Repairing flaunching is a relatively straightforward and cost-effective repair.",
  },
  {
    q: "Why is my chimney causing damp in the house?",
    a: "Chimneys are a very common source of damp in Somerset properties, particularly older ones. Causes include: failed or missing lead flashing where the chimney meets the roof, failed mortar joints or flaunching allowing rainwater into the stack, a cracked chimney pot, condensation in an unused chimney flue, or rising damp from the chimney base. Accurate diagnosis is important — the location of the damp staining indoors gives clues, and a roof inspection by an experienced roofer will identify the source.",
  },
  {
    q: "Can you repair a chimney without scaffolding?",
    a: "For minor repairs at low ridge level, or on accessible single-storey roofs, it is sometimes possible to work safely from a ladder or roof access without a full scaffold. However, for most chimney repointing, stack rebuilds, or flashing replacement, a proper scaffold is required both for safety and to allow quality workmanship. We factor scaffold costs into our quotes and will always advise the safest and most practical access method.",
  },
  {
    q: "Do I need planning permission to remove a chimney?",
    a: "In most cases, removing a chimney stack (or reducing it below roof level) is permitted development and does not require planning permission. However, if your property is listed, in a conservation area, or the work affects a party wall, additional consents may be needed. We will advise you during our survey. If you are in any doubt, we recommend checking with Somerset Council's planning department before proceeding.",
  },
  {
    q: "What is lead flashing and why does it fail?",
    a: "Lead flashing is the weatherproofing seal between the chimney stack and the surrounding roof covering. It is typically formed using code 4 or code 5 lead sheet, dressed into mortar joints and lapped over the roof tiles or slates. Lead flashing fails due to: thermal movement over many years cracking the metal or loosening mortar fixings, corrosion from moss and lichen acids, physical displacement from wind or foot traffic, or simply age. Most lead flashings have a useful life of 25–50 years when correctly installed. See our dedicated leadwork page for more information.",
  },
];

export default function ChimneyRepairsPage() {
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
              Chimney Repairs &mdash; Somerset &amp; the South West
            </p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-5 uppercase leading-none">
              Chimney Repairs<br />
              <span className="text-[#f97316]">Across Somerset</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              Repointing, flashing repair, stack rebuilding, flaunching and
              chimney removal &mdash; ProLine delivers expert chimney repairs
              across Somerset with honest advice and lasting results.
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
              { value: "Free", label: "Chimney Survey" },
              { value: "20–30yr", label: "Repointing Life" },
              { value: "5 ★", label: "Google Rating" },
              { value: "Insured", label: "Public Liability" },
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

      {/* ── What Is Chimney Repair ────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <AnimatedSection direction="left">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-1 max-w-[60px] h-px bg-[#f97316]" />
                <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
                  About Chimney Repairs
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] uppercase tracking-tight mb-6">
                Why Chimneys Need Regular Attention
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Chimneys are among the most exposed and maintenance-intensive parts
                  of any roof. Projecting above the roofline, they face full exposure
                  to rain, frost, wind and UV throughout the year. The mortar joints,
                  flaunching, flashings and pots all deteriorate at different rates and
                  require periodic inspection and maintenance.
                </p>
                <p>
                  In Somerset, the combination of significant annual rainfall, frost in
                  winter, and the prevalence of older stone and brick chimneys on
                  Victorian and pre-war properties means chimney problems are very
                  common. Left unaddressed, a failing chimney quickly becomes a source
                  of damp penetration affecting internal walls and chimney breasts.
                </p>
                <p>
                  The key components of a chimney that require attention are:
                  the mortar joints between bricks or stone (repointing), the cement
                  flaunching at the top that beds the chimney pots, the lead or
                  alternative flashing where the chimney meets the roof, the chimney
                  pots themselves, and the structural integrity of the stack.
                </p>
                <p>
                  ProLine&rsquo;s roofers inspect chimneys as standard during all full
                  roof surveys, and we are often able to identify and remediate
                  chimney issues before they become costly problems. We work on all
                  chimney types &mdash; brick, stone, and rendered &mdash; and on all property
                  ages from Victorian terraces to modern homes.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div className="space-y-4">
                <div className="bg-[#f97316]/5 border border-[#f97316]/20 p-7">
                  <h3 className="font-black text-[#1a1a1a] uppercase tracking-wide text-base mb-4">
                    Common Chimney Problems in Somerset
                  </h3>
                  <ul className="space-y-3">
                    {[
                      {
                        problem: "Failed mortar joints",
                        cause: "Freeze-thaw cycling, age, wrong mortar mix",
                        urgency: "High",
                      },
                      {
                        problem: "Cracked or missing flaunching",
                        cause: "Thermal movement, frost, age",
                        urgency: "High",
                      },
                      {
                        problem: "Failed lead flashing",
                        cause: "Thermal movement, corrosion, poor original fit",
                        urgency: "High",
                      },
                      {
                        problem: "Cracked or leaning chimney pot",
                        cause: "Wind loading, frost, physical damage",
                        urgency: "Medium",
                      },
                      {
                        problem: "Spalling or blown brickwork",
                        cause: "Moisture ingress, frost damage",
                        urgency: "Medium",
                      },
                      {
                        problem: "Missing or deteriorated DPC",
                        cause: "Original installation, age",
                        urgency: "Medium",
                      },
                    ].map(({ problem, cause, urgency }) => (
                      <li key={problem} className="flex items-start gap-3">
                        <span
                          className={`shrink-0 mt-1 w-2 h-2 rounded-full ${
                            urgency === "High" ? "bg-red-500" : "bg-amber-500"
                          }`}
                        />
                        <div>
                          <span className="font-bold text-[#1a1a1a] text-sm">{problem}</span>
                          <p className="text-gray-500 text-xs mt-0.5">{cause}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 border border-gray-100 p-6">
                  <p className="text-gray-500 text-sm leading-relaxed">
                    <strong className="text-[#1a1a1a]">Important:</strong> Chimney problems
                    are often invisible from the ground until significant damage has
                    occurred. We recommend a professional chimney inspection every 5–10
                    years, or when purchasing an older property.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Our Chimney Services ──────────────────────────────── */}
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
              Our Chimney Repair Services
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm">
              From minor repointing to full stack rebuilds, ProLine provides
              comprehensive chimney repair services across Somerset.
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
              Why Choose ProLine for Chimney Repairs?
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
              Chimney Repair Costs &mdash; Somerset 2024
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm">
              Indicative prices for common chimney repair work in Somerset.
              All jobs are quoted individually after a free survey.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                service: "Chimney Repointing (single stack)",
                range: "£300 – £800",
                detail:
                  "Full rake-out and repoint of a standard single chimney stack. Scaffold costs typically additional.",
              },
              {
                service: "Flaunching Repair / Replacement",
                range: "£150 – £400",
                detail:
                  "Remove failed cement flaunching and re-bed chimney pot(s) with new correctly mixed cement.",
              },
              {
                service: "Lead Flashing Repair",
                range: "£300 – £800",
                detail:
                  "Re-dress or patch repair of existing lead flashing around chimney base. Full replacement is more.",
              },
              {
                service: "Full Lead Flashing Replacement",
                range: "£600 – £1,500",
                detail:
                  "Complete removal and replacement of step, back and apron flashings using code 4/5 lead sheet.",
              },
              {
                service: "Chimney Pot Replacement",
                range: "£150 – £400 per pot",
                detail:
                  "Supply and fit of new or matching chimney pot with new flaunching. Scaffold additional.",
              },
              {
                service: "Partial Chimney Stack Rebuild",
                range: "£800 – £2,500",
                detail:
                  "Partial rebuild of deteriorated upper courses of brickwork, including re-bedding pots and flaunching.",
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
              Prices are indicative guides for Somerset in 2024. Scaffold erection is
              typically an additional cost. Final prices depend on chimney size, condition
              and access.{" "}
              <Link href="/quote" className="text-[#f97316] hover:underline font-bold">
                Get a free survey and written quote.
              </Link>
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
              Chimney Repair Questions Answered
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
                Chimney Repairs Across Somerset
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                We carry out chimney repairs throughout Somerset and into parts of
                Devon, Dorset and Wiltshire. From the Victorian terraces of Taunton
                and Bridgwater to the older stone properties of the Somerset Levels
                and Mendip Hills, we have experience with the full range of chimney
                types found in the region.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Somerset&rsquo;s high rainfall and winter frost make chimney maintenance
                particularly important. Moisture penetration through failed mortar or
                flashings quickly causes expensive internal damage &mdash; early intervention
                is always more cost-effective than allowing problems to develop.
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
                  "Shepton Mallet",
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
                    Period Properties &amp; Conservation Areas
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Many chimneys in Somerset&rsquo;s towns and villages are on listed
                    buildings or in conservation areas. We understand the additional
                    care required for these properties &mdash; using appropriate lime
                    mortars, sourcing matching materials, and advising on any consent
                    requirements before work begins.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6">
                  <h3 className="text-white font-black uppercase tracking-wide text-sm mb-3">
                    Related Services
                  </h3>
                  <ul className="space-y-2">
                    {[
                      { label: "All Roofing Services", href: "/roofing" },
                      { label: "Leadwork & Flashing Repairs", href: "/services/leadwork" },
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
        heading="Need Chimney Repairs in Somerset?"
        subtext="Call 07587 478826 or request a free survey online. We inspect, diagnose and quote for all chimney work with no obligation."
      />
    </>
  );
}
