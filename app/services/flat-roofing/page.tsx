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
  Droplets,
  Layers,
  ThumbsUp,
  Wrench,
  Sun,
  Home,
  AlertTriangle,
} from "lucide-react";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Flat Roofing Somerset | ProLine Roofing & Solar",
  description:
    "Expert flat roofing installation and repair in Somerset and the South West. EPDM, GRP fibreglass and felt systems. Fully insured, guaranteed. Free quotes.",
  keywords: [
    "flat roofing Somerset",
    "flat roof repair Taunton",
    "EPDM roofing Somerset",
    "GRP fibreglass flat roof",
    "flat roof installation Somerset",
    "flat roof replacement Taunton",
    "rubber flat roof Somerset",
  ],
  alternates: {
    canonical: "https://www.prolineroofingandsolar.co.uk/services/flat-roofing",
  },
  openGraph: {
    title: "Flat Roofing Somerset | ProLine Roofing & Solar",
    description:
      "Expert flat roofing installation and repair in Somerset and the South West. EPDM, GRP fibreglass and felt systems. Fully insured, guaranteed. Free quotes.",
    url: "https://www.prolineroofingandsolar.co.uk/services/flat-roofing",
    siteName: "ProLine Roofing & Solar",
    locale: "en_GB",
    type: "website",
  },
};

const services = [
  {
    icon: Home,
    title: "New Flat Roof Installation",
    desc: "Full installation of new flat roofing systems for extensions, garages, outbuildings and commercial properties. We advise on the best system for your building and budget.",
  },
  {
    icon: Wrench,
    title: "Flat Roof Repair & Patching",
    desc: "From small blistering patches to large-scale remedial repairs, we diagnose the cause of failure and carry out lasting repairs using compatible materials.",
  },
  {
    icon: Droplets,
    title: "EPDM Rubber Flat Roofing",
    desc: "Single-ply EPDM rubber membranes offer outstanding longevity (25–50 years), excellent UV resistance and are virtually maintenance-free once installed correctly.",
  },
  {
    icon: Layers,
    title: "GRP Fibreglass Flat Roofing",
    desc: "Glassfibre reinforced plastic (GRP) creates a seamless, rigid waterproof surface. Ideal for walkable roofs, it carries a 25-year guarantee and looks exceptionally neat.",
  },
  {
    icon: ArrowRight,
    title: "Flat-to-Pitched Conversion",
    desc: "Converting a problematic flat roof to a pitched roof eliminates ongoing maintenance costs and can improve the look and value of your property significantly.",
  },
  {
    icon: Sun,
    title: "Flat Roof Skylights & Rooflights",
    desc: "We supply and fit fixed or opening rooflights to bring natural light into rooms below. Brands include Velux, Korniche and budget alternatives — all fully weatherproofed.",
  },
  {
    icon: Shield,
    title: "Flat Roof Insulation & Drainage",
    desc: "Proper insulation (warm or cold deck) and correctly designed drainage are critical to flat roof performance. We survey existing roofs and recommend improvements.",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Flat Roof Repairs",
    desc: "Active leak on your flat roof? We provide rapid-response emergency call-outs across Somerset, with temporary waterproofing available the same day.",
  },
];

const whyReasons = [
  {
    icon: Award,
    title: "30+ Years Combined Experience",
    desc: "Our roofers have installed and repaired hundreds of flat roofs across Somerset using every major system.",
  },
  {
    icon: CheckCircle,
    title: "Written Workmanship Guarantee",
    desc: "All flat roof installations come with a written guarantee — EPDM and GRP systems typically carry 20–25 year manufacturer warranties too.",
  },
  {
    icon: Star,
    title: "5-Star Google Rating",
    desc: "Our reputation in Somerset is built on quality workmanship and honest advice. Read our reviews online.",
  },
  {
    icon: ThumbsUp,
    title: "Honest Material Recommendations",
    desc: "We tell you which system genuinely suits your roof — not just the most expensive option. Independent advice you can trust.",
  },
  {
    icon: Clock,
    title: "Minimal Disruption",
    desc: "Most flat roofs are completed in 1–3 days. We work cleanly and efficiently to minimise disruption to your home or business.",
  },
  {
    icon: Phone,
    title: "Local to Somerset",
    desc: "Based in Taunton, we serve the whole of Somerset. We understand local building types, planning requirements and weather conditions.",
  },
];

const faqs = [
  {
    q: "What is the best material for a flat roof in Somerset?",
    a: "For most residential flat roofs in Somerset, we recommend EPDM rubber or GRP fibreglass. Both last 25+ years with minimal maintenance. EPDM is slightly more flexible (useful in cold winters), while GRP provides a harder, more walkable surface. Torch-on felt is a lower-cost option with a shorter lifespan of around 15 years. We will advise on the best solution after a free survey.",
  },
  {
    q: "How long does a flat roof last?",
    a: "It depends on the system. Traditional felt: 10–15 years. Torch-on modified bitumen felt: 15–20 years. EPDM rubber: 25–50 years. GRP fibreglass: 25–40 years. TPO/PVC single-ply: 20–30 years. Proper installation and good drainage are the biggest factors in longevity — a poorly installed premium system will fail faster than a well-installed basic one.",
  },
  {
    q: "How much does a new flat roof cost in Somerset?",
    a: "Flat roof repair costs typically range from £500–£1,500 depending on size and severity. Full flat roof replacement on a typical single-storey extension (around 20–30m²) costs between £3,000–£6,000 for EPDM or GRP. Larger roofs or more complex designs cost more. We always provide a detailed written quote before any work begins — call 07587 478826 for a free survey.",
  },
  {
    q: "Can a flat roof be repaired or does it need replacing?",
    a: "Many flat roofs can be repaired if the underlying structure is sound and the membrane failure is localised. We assess the roof's overall condition first — sometimes a patch repair is genuinely the right solution. However, if the roof is over 20 years old, has widespread cracking or blistering, or has multiple leak points, full replacement is often more cost-effective in the long run.",
  },
  {
    q: "What causes flat roofs to leak?",
    a: "The most common causes are: aged or cracked membrane (UV degradation over time), poor lap joints or flashings where the roof meets walls, blocked outlets causing standing water, thermal movement cracking the surface, impact damage, and original poor installation. Somerset's weather — frequent rain, some frost, and occasional summer heat — puts particular stress on flat roof surfaces.",
  },
  {
    q: "Do flat roofs need planning permission?",
    a: "In most cases, replacing a flat roof like-for-like does not require planning permission under permitted development rights. However, if you are converting a flat roof to pitched, significantly changing the roof height, or the property is in a conservation area or is listed, you will need to check with Somerset Council first. We can advise you during our free survey.",
  },
  {
    q: "Can I walk on a flat roof?",
    a: "It depends on the system. GRP fibreglass flat roofs are routinely specified as walkable and are used for roof terraces. EPDM and felt roofs can be walked on occasionally for maintenance but should not be used as regular walking surfaces without protection boards. If you want a usable roof terrace, we will specify the right system, fall protection and drainage from the outset.",
  },
  {
    q: "What is the difference between warm and cold deck flat roofing?",
    a: "In a cold deck system, insulation sits between the joists below the roof deck — the deck itself gets cold, which can cause condensation. In a warm deck system, insulation is laid on top of the structural deck below the waterproof membrane, keeping the deck warm and dry. Warm deck construction is now the industry standard and is required to meet current Building Regulations Part L (energy efficiency). We always build to warm deck specification unless there are specific reasons otherwise.",
  },
];

export default function FlatRoofingPage() {
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
              Flat Roofing &mdash; Somerset &amp; the South West
            </p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-5 uppercase leading-none">
              Flat Roofing<br />
              <span className="text-[#f97316]">Somerset Specialists</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              EPDM rubber, GRP fibreglass and felt flat roofing systems installed
              and repaired across Somerset. Long-lasting solutions backed by
              written guarantees and 30+ years of experience.
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
              { value: "25+ yrs", label: "EPDM Lifespan" },
              { value: "Free", label: "Roof Survey" },
              { value: "5 ★", label: "Google Rating" },
              { value: "24/7", label: "Emergency Cover" },
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

      {/* ── What Is Flat Roofing ──────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-1 max-w-[60px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
                About Flat Roofing
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] uppercase tracking-tight mb-6">
              What Is a Flat Roof?
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Flat roofs are defined by their shallow pitch — typically less than
                10° — and are found on extensions, garages, commercial buildings,
                and many mid-century homes across Somerset. Unlike pitched roofs,
                they rely entirely on a waterproof membrane and proper drainage
                design to prevent water ingress.
              </p>
              <p>
                Modern flat roofing systems have come a long way from the
                single-layer felt of the 1970s and 1980s. Today&rsquo;s EPDM rubber
                and GRP fibreglass systems offer lifespans of 25–50 years,
                seamless installation, and dramatically reduced maintenance compared
                to traditional felt. When installed correctly to a warm deck
                specification, they also meet current Building Regulations for
                energy efficiency.
              </p>
              <p>
                Flat roofs are commonly used on: single-storey rear extensions,
                kitchen and utility room additions, garages and car ports,
                outbuildings and garden rooms, bay windows and dormers, and
                commercial premises such as shops, offices, schools and warehouses.
              </p>
              <p>
                The most important factor in flat roof performance is correct
                installation &mdash; the right fall (drainage gradient), properly
                detailed upstands and flashings where the roof meets walls, and
                high-quality materials. ProLine&rsquo;s team has specialist flat
                roofing expertise built up over decades of work across Somerset
                and the South West.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Our Flat Roofing Services ─────────────────────────── */}
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
              Our Flat Roofing Services
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm">
              From emergency repairs to full new installations, ProLine covers
              the full range of flat roofing work across Somerset.
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
              Why Choose ProLine for Flat Roofing?
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
              Flat Roofing Questions Answered
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
                Flat Roofing Across Somerset &amp; the South West
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                ProLine Roofing &amp; Solar carries out flat roofing work across the whole
                of Somerset and into neighbouring counties. Our base in Taunton means
                we can reach most of Somerset within an hour &mdash; essential for emergency
                call-outs.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                We have particular experience working on the types of properties common
                in Somerset &mdash; Victorian and Edwardian terraces with flat-roofed
                additions, 1960s bungalows with large flat roof areas, modern extensions
                and self-builds, and agricultural buildings across rural Somerset.
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
                    Somerset&rsquo;s Climate &amp; Flat Roofs
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Somerset has one of the highest annual rainfall totals in England,
                    particularly on the Quantock and Brendon Hills. This makes
                    high-quality waterproofing critical. We specify systems proven to
                    perform in wet, temperate climates &mdash; EPDM in particular excels in
                    wet and cold conditions compared to some rigid systems.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6">
                  <h3 className="text-white font-black uppercase tracking-wide text-sm mb-3">
                    Related Services
                  </h3>
                  <ul className="space-y-2">
                    {[
                      { label: "All Roofing Services", href: "/roofing" },
                      { label: "Emergency Roofing", href: "/services/emergency-roofing" },
                      { label: "Roofer in Taunton", href: "/roofer/taunton" },
                      { label: "Roofer in Bridgwater", href: "/roofer/bridgwater" },
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
        heading="Need a Flat Roof Quote in Somerset?"
        subtext="Call 07587 478826 or request a free survey online. We respond within 24 hours and all quotes are free with no obligation."
      />
    </>
  );
}
