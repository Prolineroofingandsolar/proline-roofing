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
  AlertTriangle,
  Hammer,
} from "lucide-react";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Leadwork & Flashing Repairs Somerset | ProLine Roofing & Solar",
  description:
    "Expert leadwork and roof flashing repairs across Somerset and the South West. Valleys, flashings, chimney lead, flat roof lead. Fully qualified. Free quotes.",
  keywords: [
    "leadwork Somerset",
    "lead flashing repair Taunton",
    "chimney flashing Somerset",
    "lead valley replacement Somerset",
    "roof flashing repairs Somerset",
    "step flashing Somerset",
    "leadwork listed buildings Somerset",
  ],
  alternates: {
    canonical: "https://www.prolineroofingandsolar.co.uk/services/leadwork",
  },
  openGraph: {
    title: "Leadwork & Flashing Repairs Somerset | ProLine Roofing & Solar",
    description:
      "Expert leadwork and roof flashing repairs across Somerset and the South West. Valleys, flashings, chimney lead, flat roof lead. Fully qualified. Free quotes.",
    url: "https://www.prolineroofingandsolar.co.uk/services/leadwork",
    siteName: "ProLine Roofing & Solar",
    locale: "en_GB",
    type: "website",
  },
};

const services = [
  {
    icon: Layers,
    title: "Lead Valley Replacement",
    desc: "Open and swept lead valleys replaced using code 4 or 5 lead sheet. Valleys are a critical waterproofing line and require careful lapping, dressing and fixing to last.",
  },
  {
    icon: Hammer,
    title: "Chimney Lead Flashing",
    desc: "Front apron, step and back gutter flashings to chimney stacks installed or replaced. The most common source of chimney leaks, and among the most important repairs we carry out.",
  },
  {
    icon: Home,
    title: "Step & Soaker Flashings",
    desc: "Step flashings and individual soakers installed where a roof meets a parapet wall or abutment. Each soaker is individually cut and dressed for a weathertight seal.",
  },
  {
    icon: Wrench,
    title: "Flat Roof Leadwork",
    desc: "Lead sheet used for upstands, drips and decorative features on flat roofs. Code 4 and 5 lead used for functional applications; heavier codes for large flat areas.",
  },
  {
    icon: Shield,
    title: "Lead Dormer Flashings",
    desc: "Cheek and top flashings to dormers repaired or replaced. Dormer windows on older Somerset properties frequently have failing lead that causes persistent leaks.",
  },
  {
    icon: ArrowRight,
    title: "Lead Alternatives",
    desc: "Where lead is cost-prohibitive or not suitable, we install high-quality alternatives including Code 8 aluminium, zinc and self-adhesive EPDM flashing tape products.",
  },
  {
    icon: Star,
    title: "Leadwork Restoration",
    desc: "Conservation and restoration leadwork for period and listed buildings across Somerset. We source appropriate materials and follow Traditional Building Skills standards.",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Flashing Repairs",
    desc: "Failed flashings causing active leaks repaired as emergency call-outs. Temporary weatherproofing applied same-day where full replacement needs to be scheduled.",
  },
];

const whyReasons = [
  {
    icon: Award,
    title: "Skilled Leadwork Craftsmen",
    desc: "Lead sheet work is a skilled craft — not all roofers have the training or experience to produce quality, lasting leadwork. Our team takes pride in neat, properly detailed work.",
  },
  {
    icon: CheckCircle,
    title: "Correct Code Lead Specified",
    desc: "We use the correct BS EN 12588 code lead for each application. Code 4 for most flashings, code 5 for valleys and larger areas — never the wrong thickness to cut corners.",
  },
  {
    icon: Shield,
    title: "Conforms to Lead Sheet Manual",
    desc: "All our leadwork follows the Lead Sheet Association (LSA) Manual of Leadwork — the industry standard for correct jointing, fixing and drip formation.",
  },
  {
    icon: ThumbsUp,
    title: "Long-Lasting Results",
    desc: "Quality leadwork installed correctly lasts 50–100+ years. We do the job right so you do not have to revisit the same repair in 5 years.",
  },
  {
    icon: Clock,
    title: "Prompt Repairs",
    desc: "Failing flashings can rapidly lead to serious water damage. We prioritise flashing repairs and are usually able to respond within days for non-emergency work.",
  },
  {
    icon: Phone,
    title: "Experience with Period Properties",
    desc: "Somerset has many listed and historic buildings with original leadwork. We have experience working sensitively on these properties and advising on appropriate repairs.",
  },
];

const faqs = [
  {
    q: "What is lead flashing on a roof?",
    a: "Lead flashing is the weatherproof seal formed using sheet lead where the roof covering meets a vertical surface — a chimney stack, parapet wall, dormer cheek, or abutment. Without flashing, rainwater would run down the vertical surface and directly into the gap between the wall and the roof covering, causing leaks. Lead is used because it is malleable (it can be beaten into complex shapes and into mortar joints), extremely durable, and has a proven track record of centuries of use on UK buildings.",
  },
  {
    q: "Why do lead flashings fail?",
    a: "The most common failure modes are: thermal movement — lead expands significantly in summer heat and contracts in winter, and over many years this can crack or displace poorly installed sections; mortar joint failure — lead is typically fixed by being turned into a mortar raking joint, which may fail with age; oxidisation and corrosion from moss and lichen acids; physical displacement from wind, foot traffic or tree contact; and original poor installation. Lead flashings that were installed too short, without adequate laps, or with insufficient fixings will fail sooner.",
  },
  {
    q: "How long does lead flashing last?",
    a: "Quality lead flashing installed correctly to Lead Sheet Association standards should last 50–100+ years. The British Museum roof has lead work over 100 years old still performing well. However, lead installed incorrectly or using underweight sheet (too thin) will fail much sooner. When we replace lead, we specify the correct BS EN 12588 code for the application and follow LSA detailing guidance.",
  },
  {
    q: "How much does leadwork cost?",
    a: "Lead flashing repairs and replacement typically cost between £300–£1,500 depending on the extent of work required. A small chimney apron repair might cost £300–£500 while a full set of step, soaker and back gutter flashings to a large chimney could be £800–£1,500. Lead valley replacement varies widely with roof size. All leadwork is quoted after a site survey — call 07587 478826 to arrange a free inspection.",
  },
  {
    q: "Can lead be repaired or does it need replacing?",
    a: "In some cases, partial repairs are possible — for example, repointing the mortar joints that secure flashing without replacing the lead itself, or patching a small area of damage. However, where the lead is aged, has been incorrectly installed, is of insufficient thickness, or where there is widespread joint failure, full replacement is usually more cost-effective and produces a better long-term result. We will advise honestly on the right approach after inspection.",
  },
  {
    q: "What are the alternatives to lead on a roof?",
    a: "Where lead is unsuitable or cost-prohibitive, good alternatives include: code 8 aluminium sheet (lighter than lead, corrosion-resistant, can be used for most flashing applications); zinc sheet (traditional alternative used extensively in Europe, very long-lasting); and self-adhesive EPDM or butyl rubber flashing tape for minor repairs and difficult-access areas. Cheap foil-backed adhesive tapes are not suitable for permanent repairs. We will advise on the most appropriate material for your situation.",
  },
  {
    q: "Is leadwork on roofs regulated?",
    a: "Lead used in roof flashings must comply with BS EN 12588. The work itself must be carried out in accordance with Building Regulations Part C (moisture resistance) and Part L (energy performance) where applicable. The Lead Sheet Association (LSA) Manual of Leadwork provides the industry standard for installation quality. We are familiar with all relevant standards and carry out leadwork that meets them. For new-build work or extensions, Building Control may inspect the leadwork.",
  },
  {
    q: "Do you carry out leadwork on listed buildings?",
    a: "Yes. We have experience working on listed buildings and properties in conservation areas across Somerset. Work on listed buildings that involves replacing external elements typically requires Listed Building Consent — we advise on what is needed and can provide the evidence required by your local authority. We use appropriate materials and methods for historic buildings, including matching original lead codes and patina finishes where required.",
  },
];

export default function LeadworkPage() {
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
              Leadwork &amp; Flashings &mdash; Somerset &amp; the South West
            </p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-5 uppercase leading-none">
              Leadwork &amp; Flashing<br />
              <span className="text-[#f97316]">Repairs Somerset</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              Expert lead valleys, chimney flashings, step and soaker flashings
              and flat roof leadwork across Somerset. Quality craftsmanship
              that lasts 50+ years.
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
              { value: "50+ yrs", label: "Lead Lifespan" },
              { value: "Free", label: "Site Survey" },
              { value: "5 ★", label: "Google Rating" },
              { value: "LSA", label: "Standard Work" },
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

      {/* ── About Leadwork ────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <AnimatedSection direction="left">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-1 max-w-[60px] h-px bg-[#f97316]" />
                <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
                  About Leadwork
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] uppercase tracking-tight mb-6">
                The Role of Lead in Roofing
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Lead has been used in building construction for over two thousand
                  years. Its continued use in roofing is a testament to its unique
                  combination of properties: it is soft and malleable enough to be
                  beaten into complex shapes around roof junctions, it is extremely
                  durable, and when properly installed it provides a weathertight seal
                  that can last a century or more.
                </p>
                <p>
                  On a typical Somerset home, you will find lead at several key
                  junctions: where the chimney stack emerges through the roof (apron,
                  step and back gutter flashings), in valleys where two roof planes
                  meet, where a lean-to or dormer meets a main wall (step and soaker
                  flashings), and on flat roof upstands and drips.
                </p>
                <p>
                  Lead is specified in &ldquo;codes&rdquo; — Code 3 to Code 8, indicating thickness
                  and weight per square metre. For flashings, Code 4 (1.8mm, 20 kg/m²)
                  is the standard minimum. Code 5 is used for valleys, Code 6 for
                  stepped flashings in exposed locations. Heavier codes are used for
                  flat roof applications. Using the correct code is important — underweight
                  lead is prone to cracking under thermal movement.
                </p>
                <p>
                  ProLine&rsquo;s leadwork follows the Lead Sheet Association Manual of
                  Leadwork, ensuring correct jointing, drip and upstand dimensions,
                  and fixing methods. Our work is designed to perform for decades,
                  not just to pass a visual inspection.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div className="space-y-4">
                <div className="bg-[#f97316]/5 border border-[#f97316]/20 p-7">
                  <h3 className="font-black text-[#1a1a1a] uppercase tracking-wide text-base mb-4">
                    Lead Codes Explained
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        code: "Code 3",
                        thickness: "1.32mm",
                        use: "Internal use only — damp proof courses",
                        colour: "bg-gray-300",
                      },
                      {
                        code: "Code 4",
                        thickness: "1.80mm",
                        use: "Standard flashings, soakers, gutters",
                        colour: "bg-blue-400",
                      },
                      {
                        code: "Code 5",
                        thickness: "2.24mm",
                        use: "Valleys, exposed chimney flashings, large flashings",
                        colour: "bg-green-500",
                      },
                      {
                        code: "Code 6",
                        thickness: "2.65mm",
                        use: "Exposed valley gutters, parapet flashings",
                        colour: "bg-orange-500",
                      },
                      {
                        code: "Code 7 / 8",
                        thickness: "3.00–3.55mm",
                        use: "Flat roofs, large-area leadwork",
                        colour: "bg-red-500",
                      },
                    ].map(({ code, thickness, use, colour }) => (
                      <div key={code} className="flex items-start gap-3">
                        <div className={`w-3 h-3 rounded-full shrink-0 mt-1 ${colour}`} />
                        <div>
                          <div className="flex items-baseline gap-2">
                            <span className="font-black text-[#1a1a1a] text-sm">{code}</span>
                            <span className="text-[#f97316] text-xs font-bold">{thickness}</span>
                          </div>
                          <p className="text-gray-500 text-xs mt-0.5">{use}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-50 border border-gray-100 p-6">
                  <p className="text-gray-500 text-sm leading-relaxed">
                    <strong className="text-[#1a1a1a]">Note:</strong> We always specify
                    the correct lead code for the application. Using undersized lead to
                    reduce material cost is a common shortcut that leads to premature
                    failure &mdash; something ProLine never does.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Our Leadwork Services ─────────────────────────────── */}
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
              Our Leadwork Services
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm">
              From minor flashing repairs to complete lead valley replacement,
              ProLine delivers quality leadwork across Somerset.
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
              Why Choose ProLine for Leadwork?
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
              Leadwork Costs &mdash; Somerset 2024
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm">
              Indicative prices for leadwork and flashing repairs in Somerset.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                service: "Chimney Flashing Repair (minor)",
                range: "£300 – £600",
                detail:
                  "Re-fixing, re-pointing or patching small sections of failed chimney flashing.",
              },
              {
                service: "Full Chimney Flashings (code 4/5)",
                range: "£600 – £1,500",
                detail:
                  "Complete replacement of apron, step and back gutter flashings to a standard chimney stack.",
              },
              {
                service: "Lead Valley Replacement (per metre)",
                range: "£80 – £150/m",
                detail:
                  "Code 5 lead valley lining replacement including fixings, clips and dressing.",
              },
              {
                service: "Step & Soaker Flashings",
                range: "£400 – £1,200",
                detail:
                  "Individual soakers and cover flashings to a roof/wall abutment. Depends on length of run.",
              },
              {
                service: "Dormer Lead Flashing",
                range: "£300 – £800",
                detail:
                  "Lead cheek or top flashing to dormer window. Includes dressing and pointing.",
              },
              {
                service: "Flat Roof Lead Upstands",
                range: "£200 – £600",
                detail:
                  "Lead upstand and drip detail at flat roof perimeter or parapet wall junction.",
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
              All prices are indicative guides for Somerset in 2024. Scaffold access
              costs are additional.{" "}
              <Link href="/quote" className="text-[#f97316] hover:underline font-bold">
                Request a free site inspection and quote.
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
              Leadwork Questions Answered
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
                Leadwork Across Somerset &amp; the South West
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                We carry out leadwork throughout Somerset and into Devon, Dorset and
                Wiltshire. From modern estate housing with simple chimney flashings to
                historic manor houses with complex lead valley systems and parapet
                gutters, our team has the skills and experience to handle all types
                of leadwork.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Somerset has a particularly rich stock of historic buildings — many
                with original leadwork that needs sensitive repair or replacement.
                We work closely with heritage and conservation organisations where
                required, and are familiar with the materials and methods appropriate
                for listed buildings.
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
                  "Bath area",
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
                    Lead Theft Prevention
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Lead theft from churches and other historic buildings is an ongoing
                    problem in Somerset and across the UK. We work with churches, estate
                    managers and heritage organisations on lead theft repair and prevention,
                    including the specification of EPDM or other tamper-evident alternatives
                    for vulnerable rooflines.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6">
                  <h3 className="text-white font-black uppercase tracking-wide text-sm mb-3">
                    Related Services
                  </h3>
                  <ul className="space-y-2">
                    {[
                      { label: "All Roofing Services", href: "/roofing" },
                      { label: "Chimney Repairs", href: "/services/chimney-repairs" },
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
        heading="Need Leadwork Repaired in Somerset?"
        subtext="Call 07587 478826 or request a free survey. We carry out all types of leadwork and flashing repairs across Somerset."
      />
    </>
  );
}
