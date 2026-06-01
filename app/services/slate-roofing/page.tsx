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
  Home,
  Hammer,
  Leaf,
} from "lucide-react";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Slate Roofing Somerset | ProLine Roofing & Solar",
  description:
    "Natural and artificial slate roofing installation and repair across Somerset. Welsh slate, Spanish slate, synthetic slate. Expert fitting. Free quotes.",
  keywords: [
    "slate roofing Somerset",
    "Welsh slate Somerset",
    "slate roof repair Taunton",
    "natural slate roofing Somerset",
    "artificial slate Somerset",
    "slate roof replacement Somerset",
    "slate roof Taunton",
  ],
  alternates: {
    canonical: "https://www.prolineroofingandsolar.co.uk/services/slate-roofing",
  },
  openGraph: {
    title: "Slate Roofing Somerset | ProLine Roofing & Solar",
    description:
      "Natural and artificial slate roofing installation and repair across Somerset. Welsh slate, Spanish slate, synthetic slate. Expert fitting. Free quotes.",
    url: "https://www.prolineroofingandsolar.co.uk/services/slate-roofing",
    siteName: "ProLine Roofing & Solar",
    locale: "en_GB",
    type: "website",
  },
};

const services = [
  {
    icon: Home,
    title: "New Slate Roof Installation",
    desc: "Full new slate roofs installed using natural Welsh, Spanish or synthetic slate. We strip, re-batten to current BS standards, and lay to manufacturer specifications.",
  },
  {
    icon: Wrench,
    title: "Slate Roof Repairs",
    desc: "From a single broken slate to widespread repairs across a large roof area. We source matching slates where possible and carry out repairs that blend seamlessly with the existing roof.",
  },
  {
    icon: Hammer,
    title: "Slate Tile Replacement",
    desc: "Individual slipping or broken slates replaced using bib, tingles or new copper nails. We identify the cause of slipping — often nail sickness — and treat the underlying problem.",
  },
  {
    icon: Layers,
    title: "Ridge Tile Replacement on Slate Roofs",
    desc: "Bed-and-point or dry-fix ridge tiles replaced on slate roofs. We specify the correct ridge profile for your slate type and ensure correct overhang and mortar mix.",
  },
  {
    icon: CheckCircle,
    title: "Slate Repointing & Re-Bedding",
    desc: "Where ridge tiles and hip tiles have failed mortar, we carry out full re-bedding and pointing using suitably flexible mortar or dry-fix systems.",
  },
  {
    icon: Star,
    title: "Artificial / Synthetic Slate",
    desc: "High-quality synthetic slates (Marley Eternit, Cembrit, EcoGrid) offer a consistent, cost-effective alternative to natural slate with 30-year guarantees.",
  },
  {
    icon: Shield,
    title: "Conservation Slate Work",
    desc: "Listed buildings and conservation areas often require specific slate types and fixing methods. We advise on requirements and source appropriate materials.",
  },
  {
    icon: Leaf,
    title: "Moss & Lichen Treatment",
    desc: "Biocide treatment and moss clearance to extend the life of a slate roof and prevent moisture retention damage. Followed by a protective long-life treatment.",
  },
];

const whyReasons = [
  {
    icon: Award,
    title: "Genuine Slate Expertise",
    desc: "Slate roofing is a skilled trade. Our roofers understand nail patterns, lap dimensions, back falls and the nuances of working with natural stone. Not all roofers do.",
  },
  {
    icon: CheckCircle,
    title: "We Source Matching Slates",
    desc: "For repairs to existing roofs, we work hard to source matching slates — right size, colour, texture and origin. We hold stocks of common sizes and have access to reclaim yards.",
  },
  {
    icon: ThumbsUp,
    title: "Honest Assessment",
    desc: "We tell you whether your slate roof is worth repairing or needs replacing. We never recommend a new roof when repairs will suffice, or patch what genuinely needs full attention.",
  },
  {
    icon: Star,
    title: "5-Star Google Rating",
    desc: "Our slate roofing work consistently receives five-star feedback from customers across Somerset. Read our reviews.",
  },
  {
    icon: Clock,
    title: "Efficient & Tidy",
    desc: "Slate roofing is a dusty, physical trade. We work carefully, protect your property, and clear up thoroughly at the end of each working day.",
  },
  {
    icon: Phone,
    title: "Local Knowledge",
    desc: "Based in Taunton, we understand the slates used on Somerset properties — Welsh slate in many towns, stone slates in villages, Spanish slate on more recent builds.",
  },
];

const faqs = [
  {
    q: "What is the difference between natural and artificial slate?",
    a: "Natural slate is quarried stone — principally from Wales (Penrhyn, Cwt-y-Bugail), Spain, Brazil and Portugal. Each slate is unique, with natural variations in colour and texture. Natural Welsh slate in particular has an exceptional lifespan of 100+ years. Artificial or synthetic slate is manufactured from fibre cement, recycled rubber or other composite materials. Modern synthetic slates (Marley Eternit Cembrit, for example) are far superior to early products, carry 30-year guarantees, and offer a consistent appearance. They cost significantly less than premium natural slate.",
  },
  {
    q: "How long does a slate roof last?",
    a: "A natural Welsh slate roof, correctly installed with copper or stainless steel nails, will last 100 years or more. Spanish and Brazilian slate roofs typically last 60–100 years. The limiting factor is often not the slate itself but the fixings (nail sickness — see below) or the battens and felt beneath. Artificial slates have manufacturer guarantees of 30–40 years and typically last 40–60 years. In all cases, regular maintenance to replace individual broken slates and keep the ridge and hips pointed extends the life significantly.",
  },
  {
    q: "How much does a slate roof cost in Somerset?",
    a: "A full slate roof replacement in Somerset typically costs: synthetic/artificial slate: £6,000–£12,000 for a typical semi-detached; Spanish natural slate: £8,000–£16,000; Welsh natural slate (Penrhyn or equivalent): £12,000–£20,000+. These prices include stripping the existing roof covering, replacing underfelt and battens, new slates and ridges. Prices vary significantly with roof size, complexity, number of hips and valleys, chimney flashings required, and access. Call 07587 478826 for a free survey and accurate quote.",
  },
  {
    q: "Why do slate tiles slip or crack?",
    a: "The most common causes of slipping slates are: nail sickness — the original fixing nails (often iron) corroding away over many decades, leaving slates held only by gravity; broken nibs (the pegs that hook over the battens on single-nail slates); physical impact from falling objects or foot traffic; and delamination of the slate surface in lower-quality material. Cracking is usually caused by impact, thermal stress, or walking on the roof without proper boards. A cluster of slipping slates on an older roof often indicates widespread nail sickness requiring a full re-roof.",
  },
  {
    q: "Can individual slates be replaced?",
    a: "Yes — individual broken or slipped slates can be replaced using a tool called a slate ripper to cut the old fixing nails, then fitting the new slate using a lead or copper tingle (a small clip) or re-nailing if battens are accessible. This is a standard repair that we carry out regularly across Somerset. The skill is in matching the slate and achieving a neat, weathertight result. Where access is required to multiple areas, scaffolding may be needed.",
  },
  {
    q: "Is Welsh slate better than Spanish slate?",
    a: "Welsh slate — particularly Penrhyn and Ffestiniog grades — is widely considered the finest natural roofing slate in the world. It is extremely hard, absorbs very little water, does not delaminate, and lasts 100+ years. It is also the most expensive. Spanish slate is a good quality natural slate at significantly lower cost, typically lasting 60–100 years, but is softer, can be more prone to delamination, and varies more in quality between grades. For conservation-sensitive repairs or new roofs on premium properties, Welsh slate is often specified. For most Somerset homes, good quality Spanish slate is an excellent and more economical choice.",
  },
  {
    q: "Do I need planning permission to replace my slate roof?",
    a: "Replacing a slate roof like-for-like generally falls under permitted development and does not require planning permission. However, if you are changing the roof material (e.g., from natural to artificial slate), in a conservation area, or the property is listed, you may need consent. In conservation areas, Somerset Council may require that you replace with a matching material. On listed buildings, any roof replacement requires Listed Building Consent. We advise on all planning matters during our free survey.",
  },
  {
    q: "Can you source matching slates for repairs to an older roof?",
    a: "In most cases, yes — though it may take a little time for unusual sizes or origins. We hold stocks of common Welsh and Spanish slate sizes, and have access to reclaimed slate merchants who hold large quantities of Penrhyn and other Welsh grades. For unusual stone slates (Cotswold stone, for example, found in parts of Somerset near the Wiltshire border), we can source from specialist suppliers. Send us photos of your existing slates and we will advise on matching options.",
  },
];

export default function SlateRoofingPage() {
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
              Slate Roofing &mdash; Somerset &amp; the South West
            </p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-5 uppercase leading-none">
              Slate Roofing<br />
              <span className="text-[#f97316]">Somerset Specialists</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              Natural Welsh slate, Spanish slate and high-quality synthetic slate
              roofing installed and repaired across Somerset. Expert craftsmanship
              with lasting results.
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
              { value: "100+ yr", label: "Welsh Slate Life" },
              { value: "Free", label: "Roof Survey" },
              { value: "5 ★", label: "Google Rating" },
              { value: "Stock", label: "Matching Slates" },
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

      {/* ── About Slate Roofing ───────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <AnimatedSection direction="left">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-1 max-w-[60px] h-px bg-[#f97316]" />
                <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
                  About Slate
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] uppercase tracking-tight mb-6">
                Slate &mdash; The Premium Roofing Material
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Slate has been the roofing material of choice for quality British
                  buildings for centuries. It is a natural metamorphic rock that splits
                  easily into thin, flat sheets &mdash; perfect for roofing. Its low water
                  absorption, exceptional durability, and attractive appearance have
                  made it the defining roofing material of Victorian and Edwardian
                  Britain.
                </p>
                <p>
                  Somerset has a rich tradition of slate roofing. Many of the county&rsquo;s
                  older properties &mdash; from the terraced streets of Taunton and
                  Bridgwater to the farmhouses of the Quantock Hills &mdash; were originally
                  roofed with Welsh Penrhyn slate, and many of these original roofs are
                  still performing well today with minimal repair.
                </p>
                <p>
                  Understanding the different grades and origins of slate is important
                  for matching repairs. Welsh blue-grey slate (Penrhyn, Cwt-y-Bugail)
                  is the benchmark quality. Spanish slate offers similar appearance at
                  lower cost. Brazilian slate is distinctive in colour (greens and
                  purples). Synthetic slates offer a budget-friendly option with a
                  consistent appearance.
                </p>
                <p>
                  ProLine&rsquo;s team has extensive experience with all slate types and
                  the specific fixing and installation methods each requires. We hold
                  stocks of common sizes and have established relationships with
                  specialist slate suppliers and reclaim merchants to source matching
                  materials for repairs.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.15}>
              <div className="space-y-4">
                <div className="bg-[#f97316]/5 border border-[#f97316]/20 p-7">
                  <h3 className="font-black text-[#1a1a1a] uppercase tracking-wide text-base mb-4">
                    Slate Types Compared
                  </h3>
                  <div className="space-y-5">
                    {[
                      {
                        name: "Welsh Natural Slate (Penrhyn / Ffestiniog)",
                        life: "100+ years",
                        cost: "£££",
                        notes: "World-class quality. Low absorption, non-delaminating. The finest roofing slate available.",
                      },
                      {
                        name: "Spanish Natural Slate",
                        life: "60–100 years",
                        cost: "££",
                        notes: "Good quality, widely available, broad colour range. Some grades vary — specify carefully.",
                      },
                      {
                        name: "Brazilian Natural Slate",
                        life: "50–80 years",
                        cost: "££",
                        notes: "Distinctive green, grey and purple tones. Good quality from reputable suppliers.",
                      },
                      {
                        name: "Synthetic / Artificial Slate",
                        life: "40–60 years",
                        cost: "£",
                        notes: "Fibre cement or composite. Consistent appearance, 30-year guarantees. Lower cost.",
                      },
                    ].map(({ name, life, cost, notes }) => (
                      <div key={name} className="border-b border-[#f97316]/15 pb-4 last:border-b-0 last:pb-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <span className="font-black text-[#1a1a1a] text-sm leading-snug flex-1">{name}</span>
                          <div className="flex items-center gap-1.5 shrink-0">
                            <span className="text-[#f97316] text-xs font-bold">{life}</span>
                            <span className="text-gray-400 text-xs border border-gray-200 px-1.5 py-0.5 rounded">{cost}</span>
                          </div>
                        </div>
                        <p className="text-gray-400 text-xs leading-relaxed">{notes}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Our Slate Roofing Services ────────────────────────── */}
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
              Our Slate Roofing Services
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm">
              From single slate replacement to full roof renewals, ProLine delivers
              quality slate roofing work across Somerset.
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
              Why Choose ProLine for Slate Roofing?
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
              Slate Roof Cost Guide &mdash; Somerset 2024
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm">
              Indicative prices for slate roofing work in Somerset.
              All jobs quoted after a free site survey.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                service: "Individual Slate Replacement (per slate)",
                range: "£40 – £80",
                detail:
                  "Single slate replacement including tingle or re-nailing. Minimum call-out applies.",
              },
              {
                service: "Slate Repairs (multiple slates / area)",
                range: "£200 – £1,500",
                detail:
                  "Dependent on extent of repair. Sourcing matching slates included in price.",
              },
              {
                service: "Ridge Re-Bed & Point (per metre)",
                range: "£25 – £45/m",
                detail:
                  "Lift, re-bed and re-point ridge tiles on a slate roof. Or dry-fix ridge at slightly higher cost.",
              },
              {
                service: "Full Re-Roof — Synthetic Slate (semi-det.)",
                range: "£6,000 – £10,000",
                detail:
                  "Full strip, new felt and battens, synthetic slate, ridges and hips. Scaffold included.",
              },
              {
                service: "Full Re-Roof — Spanish Slate (semi-det.)",
                range: "£8,000 – £14,000",
                detail:
                  "As above with natural Spanish slate. Higher material cost, similar labour.",
              },
              {
                service: "Full Re-Roof — Welsh Slate (semi-det.)",
                range: "£12,000 – £18,000",
                detail:
                  "Premium Welsh natural slate. Penrhyn or Cwt-y-Bugail grade specified. 100+ year material.",
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
              All prices are indicative guides for Somerset in 2024. Prices vary
              significantly with roof size, complexity and material specification.{" "}
              <Link href="/quote" className="text-[#f97316] hover:underline font-bold">
                Get a free, no-obligation survey and quote.
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
              Slate Roofing Questions Answered
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
                Slate Roofing Across Somerset &amp; the South West
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                ProLine installs and repairs slate roofs throughout Somerset and
                into neighbouring counties including Bath and North East Somerset.
                We work on everything from modest terrace repairs to large farmhouse
                re-roofs, conservation-area slate work and new-build premium slate
                installations.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Somerset&rsquo;s housing stock is predominantly Victorian and Edwardian,
                and original Welsh slate is still widespread on older buildings in
                Taunton, Bridgwater, Glastonbury and across the county. We understand
                the importance of matching materials correctly on these properties.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "Taunton",
                  "Bridgwater",
                  "Yeovil",
                  "Wells",
                  "Bath area",
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
                    Nail Sickness: The Hidden Problem
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Most pre-1960 Welsh slate roofs in Somerset were fixed with iron
                    nails. Over 80–100 years, these corrode through (nail sickness)
                    and slates begin to slip. Once this process starts, it typically
                    affects the whole roof. We carry out honest assessments &mdash; telling
                    you if your roof is genuinely at the point where a re-roof is more
                    economical than ongoing repairs, or if targeted repairs will serve
                    you for another decade.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6">
                  <h3 className="text-white font-black uppercase tracking-wide text-sm mb-3">
                    Related Services
                  </h3>
                  <ul className="space-y-2">
                    {[
                      { label: "All Roofing Services", href: "/roofing" },
                      { label: "Roofer in Taunton", href: "/roofer/taunton" },
                      { label: "Roofer in Bath", href: "/roofer/bath" },
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
        heading="Need Slate Roofing Work in Somerset?"
        subtext="Call 07587 478826 or request a free survey. We assess, match materials and quote for all slate roofing work across Somerset."
      />
    </>
  );
}
