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
  Wind,
  Home,
  Layers,
  Package,
} from "lucide-react";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Fascias, Soffits & Bargeboards Somerset | ProLine Roofing & Solar",
  description:
    "UPVC and aluminium fascia, soffit and bargeboard replacement across Somerset. Rot-free, low maintenance. Free survey. Call 07587 478826.",
  keywords: [
    "fascias soffits Somerset",
    "fascia board replacement Taunton",
    "soffit replacement Somerset",
    "bargeboard replacement Somerset",
    "UPVC roofline Somerset",
    "fascia soffit guttering Somerset",
    "roofline replacement Taunton",
  ],
  alternates: {
    canonical: "https://www.prolineroofingandsolar.co.uk/services/fascias-soffits",
  },
  openGraph: {
    title: "Fascias, Soffits & Bargeboards Somerset | ProLine Roofing & Solar",
    description:
      "UPVC and aluminium fascia, soffit and bargeboard replacement across Somerset. Rot-free, low maintenance. Free survey. Call 07587 478826.",
    url: "https://www.prolineroofingandsolar.co.uk/services/fascias-soffits",
    siteName: "ProLine Roofing & Solar",
    locale: "en_GB",
    type: "website",
  },
};

const services = [
  {
    icon: Home,
    title: "Fascia Board Replacement",
    desc: "Full removal of existing timber fascia and replacement with cellular UPVC or aluminium. Correctly sized for your roof structure and matched to your chosen colour.",
  },
  {
    icon: Layers,
    title: "Soffit Board Replacement",
    desc: "Soffit boards replaced with vented or plain UPVC panels. Proper soffit ventilation is essential to prevent condensation and rot in the roof void.",
  },
  {
    icon: Wrench,
    title: "Bargeboard Installation",
    desc: "Gable-end bargeboards replaced in UPVC or aluminium. Available in ogee, square and decorative profiles to suit traditional and modern properties.",
  },
  {
    icon: Package,
    title: "Overfascia Capping",
    desc: "Where existing timber fascia is sound but weathered, UPVC capping over the existing board is a cost-effective option — eliminating repainting for good.",
  },
  {
    icon: Wind,
    title: "Vented Soffit Installation",
    desc: "Correctly spaced soffit ventilation maintains airflow in the roof void, preventing the condensation that causes structural timber decay and mould growth.",
  },
  {
    icon: Shield,
    title: "Dry Verge Systems",
    desc: "Dry verge units fitted at the gable ends eliminate the need for mortar bedding of verge tiles, preventing the cracking and displacement that causes leaks.",
  },
  {
    icon: Star,
    title: "UPVC Cladding",
    desc: "Decorative UPVC or composite cladding applied to gable ends, exposed walls and timber-framed sections. Rot-free and low maintenance alternative to render or timber.",
  },
  {
    icon: Package,
    title: "Full Roofline Packages",
    desc: "Combined fascia, soffit, bargeboard and guttering packages completed in a single visit. Most cost-effective approach when all roofline components need attention.",
  },
];

const whyReasons = [
  {
    icon: Award,
    title: "Expert Roofline Installers",
    desc: "Fascias and soffits require proper understanding of roof structure and ventilation requirements. Our team has years of specialist roofline experience.",
  },
  {
    icon: CheckCircle,
    title: "Correct Ventilation Specified",
    desc: "We always calculate the correct ventilation requirement for your roof void and specify the right vented soffit area — not just whatever is easiest.",
  },
  {
    icon: Star,
    title: "Wide Range of Colours",
    desc: "UPVC roofline products are available in white, cream, grey, black, brown and anthracite grey. We help you choose the right colour for your property.",
  },
  {
    icon: ThumbsUp,
    title: "Full Written Guarantee",
    desc: "All roofline installations come with a written workmanship guarantee. UPVC manufacturer product guarantees typically cover 10–25 years.",
  },
  {
    icon: Clock,
    title: "Completed in One Day",
    desc: "Most full roofline replacements on a semi-detached or detached house are completed in a single working day with minimal disruption.",
  },
  {
    icon: Phone,
    title: "Free Survey & Quote",
    desc: "We survey your existing roofline, advise on the best approach (cap-over or full replacement), and provide a detailed written quote at no charge.",
  },
];

const faqs = [
  {
    q: "What is the difference between fascias and soffits?",
    a: "The fascia board is the vertical board running along the roofline at the eaves, behind which the guttering is fixed. It closes off the top of the external wall and provides the mounting surface for guttering. The soffit is the horizontal board beneath the fascia that spans from the wall face to the outer edge of the eaves, enclosing the underside of the roof overhang. Bargeboards are the equivalent boards at the gable ends of a roof. All three work together to protect the roof structure from moisture and are the most visible part of your roofline.",
  },
  {
    q: "How much does fascia and soffit replacement cost in Somerset?",
    a: "For a typical semi-detached house in Somerset, full fascia, soffit and bargeboard replacement in UPVC typically costs between £800–£1,800. A larger detached property costs £1,200–£2,500+. These prices include removal of existing timber boards, UPVC supply and fitting, and disposal. When combined with guttering replacement as a full roofline package, the overall cost is more economical as scaffold costs are shared.",
  },
  {
    q: "Are UPVC fascias better than timber?",
    a: "For most properties, UPVC is the better long-term choice. Timber fascias require regular painting (every 3–5 years) and are susceptible to rot when paint fails — particularly in wet Somerset. UPVC needs no painting, will not rot, and comes with long manufacturer guarantees. The exception is where timber is required for authenticity on listed buildings or in conservation areas, or where the property style is better served by timber. We advise honestly on the best option for your specific property.",
  },
  {
    q: "How do I know if my fascias need replacing?",
    a: "Key signs include: visible rot, soft patches or crumbling when pressed, paint that is peeling or flaking repeatedly, gutters pulling away from the fascia (fascia no longer solid enough to hold fixings), dark staining beneath the gutters indicating overflow caused by sagging fascia, and general weathered or cracked appearance. Where timber fascia is sound but weathered, a UPVC cap-over is often suitable. Where rot is present, full replacement is required.",
  },
  {
    q: "Do you need scaffolding to replace fascias and soffits?",
    a: "For most two-storey properties, scaffolding or a working platform is required for safe fascia and soffit replacement. This is a health and safety requirement that reputable contractors comply with. Some single-storey rooflines can be accessed safely from a ladder or low-level work platform. We factor access requirements into our quotes and always work safely — never ask a roofer to work off a ladder at height without a suitable working platform.",
  },
  {
    q: "How long do UPVC fascias last?",
    a: "Quality cellular UPVC fascias typically last 30–40 years when correctly installed. Unlike timber, they require no maintenance painting and will not rot. The main form of degradation is gradual UV yellowing on white products over many decades. Better quality UPVC products with UV inhibitors maintain their colour much longer. We source from reputable UK manufacturers with established track records.",
  },
  {
    q: "What colour fascias should I choose?",
    a: "White is the most popular choice for its clean, bright appearance and is suitable for most property styles. Black and anthracite grey have become increasingly fashionable and suit modern properties particularly well. Cream suits older or rendered properties. We recommend choosing a colour that complements your windows — ideally the same colour as your window frames for a cohesive look. We carry sample boards to help you decide.",
  },
  {
    q: "Do you offer a guarantee on fascia and soffit work?",
    a: "Yes. All ProLine roofline installations come with a written workmanship guarantee covering the installation quality. In addition, the UPVC products we install carry manufacturer product guarantees typically ranging from 10 to 25 years depending on the product range. Guarantees are provided in writing at job completion.",
  },
];

export default function FasciasSoffitsPage() {
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
              Fascias, Soffits &amp; Bargeboards &mdash; Somerset
            </p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-5 uppercase leading-none">
              Fascias, Soffits &amp;<br />
              <span className="text-[#f97316]">Bargeboards Somerset</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              UPVC and aluminium roofline replacement across Somerset.
              Rot-free, low maintenance fascias, soffits and bargeboards
              professionally installed with a full written guarantee.
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
              { value: "30–40yr", label: "UPVC Lifespan" },
              { value: "Free", label: "Survey & Quote" },
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

      {/* ── What Are Fascias and Soffits ──────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <AnimatedSection direction="left">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-1 max-w-[60px] h-px bg-[#f97316]" />
                <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
                  About Roofline
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] uppercase tracking-tight mb-6">
                Why Your Roofline Matters
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  The roofline &mdash; comprising fascias, soffits and bargeboards &mdash;
                  is the finishing trim at the edge of your roof. It protects the
                  ends of the roof timbers (rafters) from weathering, provides a neat
                  finish, supports the guttering system, and critically, provides
                  ventilation to the roof void.
                </p>
                <p>
                  Most homes built before the late 1990s have timber fascias and
                  soffits. These require painting every few years to prevent rot.
                  When paint fails and water penetrates, rot spreads quickly along the
                  fascia board and can reach the rafter feet, causing significant
                  structural damage. In Somerset&rsquo;s wet climate, timber roofline
                  boards deteriorate faster than in drier parts of the country.
                </p>
                <p>
                  Replacing timber with UPVC or aluminium eliminates the maintenance
                  cycle permanently. Modern UPVC roofline products look smart, are
                  available in a wide range of colours, carry substantial manufacturer
                  guarantees, and require virtually no maintenance beyond an occasional
                  wash.
                </p>
                <p>
                  Critically, a roofline replacement also gives us the opportunity to
                  inspect the rafter feet and wallplate for existing rot, and to ensure
                  correct soffit ventilation is in place &mdash; something often absent
                  in older properties and a key contributor to roof void condensation
                  and structural decay.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.15}>
              <div className="space-y-4">
                <div className="bg-[#f97316]/5 border border-[#f97316]/20 p-7">
                  <h3 className="font-black text-[#1a1a1a] uppercase tracking-wide text-base mb-4">
                    Cap-Over vs. Full Replacement
                  </h3>
                  <div className="space-y-5">
                    <div>
                      <h4 className="font-black text-[#1a1a1a] text-sm uppercase tracking-wide mb-2 flex items-center gap-2">
                        <span className="w-5 h-5 bg-[#f97316] text-white flex items-center justify-center text-xs shrink-0">✓</span>
                        UPVC Capping (Over Existing Timber)
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed pl-7">
                        A UPVC profile is fitted directly over sound existing timber fascia.
                        Faster and lower cost than full replacement. Suitable where timber is
                        structurally sound but tired or in need of repainting. Does not allow
                        inspection of the rafter feet.
                      </p>
                    </div>
                    <div className="border-t border-[#f97316]/10 pt-5">
                      <h4 className="font-black text-[#1a1a1a] text-sm uppercase tracking-wide mb-2 flex items-center gap-2">
                        <span className="w-5 h-5 bg-[#f97316] text-white flex items-center justify-center text-xs shrink-0">★</span>
                        Full Replacement (Strip and Renew)
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed pl-7">
                        All existing timber is removed, rafter feet and wallplate are inspected
                        and treated, and full UPVC roofline is fitted. Required where rot is
                        present. More expensive but provides a full 30+ year solution and peace
                        of mind on the condition of the underlying structure.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 border border-gray-100 p-6">
                  <p className="text-gray-500 text-sm leading-relaxed">
                    <strong className="text-[#1a1a1a]">Our recommendation:</strong> We
                    always inspect the condition of existing timber before recommending
                    cap-over or full replacement. We will never recommend the more expensive
                    option unless it is genuinely required.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Our Services ─────────────────────────────────────── */}
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
              Our Roofline Services
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm">
              ProLine provides a complete roofline service across Somerset,
              from individual board replacement to full roofline and guttering packages.
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
              Why Choose ProLine for Roofline Work?
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
              Roofline Costs &mdash; Somerset 2024
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm">
              Indicative prices for fascia, soffit and bargeboard work in Somerset.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                service: "UPVC Cap-Over (Semi-Detached)",
                range: "£600 – £1,000",
                detail:
                  "UPVC capping over existing sound timber fascia and soffit. Includes guttering re-fix.",
              },
              {
                service: "Full Replacement (Semi-Detached)",
                range: "£900 – £1,600",
                detail:
                  "Complete strip and replacement of fascia, soffit and bargeboards in UPVC.",
              },
              {
                service: "Full Replacement (Detached House)",
                range: "£1,200 – £2,500",
                detail:
                  "Full roofline replacement for a larger detached property in UPVC including bargeboards.",
              },
              {
                service: "Full Roofline + Guttering Package",
                range: "£1,400 – £3,200",
                detail:
                  "Combined fascia, soffit, bargeboard and guttering replacement. Best overall value.",
              },
              {
                service: "Dry Verge System",
                range: "£200 – £600",
                detail:
                  "Dry verge unit installation at gable ends to replace mortar bedding. Per gable quoted separately.",
              },
              {
                service: "UPVC Cladding (per elevation)",
                range: "£400 – £1,500",
                detail:
                  "UPVC or composite cladding to exposed gable or feature walls. Depends on area and profile.",
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
              Prices are indicative guides for Somerset in 2024. Scaffold costs are
              typically included for two-storey properties.{" "}
              <Link href="/quote" className="text-[#f97316] hover:underline font-bold">
                Get a free survey and detailed quote.
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
              Fascia &amp; Soffit Questions Answered
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
                Roofline Work Across Somerset
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                ProLine installs fascias, soffits and bargeboards throughout Somerset
                and into neighbouring counties. We work on all types of residential
                properties &mdash; from modern new-build estates to Victorian and Edwardian
                period homes across Taunton, Bridgwater, Yeovil, Wells and beyond.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                With Somerset&rsquo;s high rainfall and damp conditions, timber roofline
                boards deteriorate faster here than in many other parts of England.
                Early replacement before rot spreads to roof timbers is always
                more cost-effective than leaving problems to develop.
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
                    Bundle With Guttering &amp; Save
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Fascia and guttering replacement are often carried out together since
                    the scaffold is already in place. Our full roofline packages combining
                    fascias, soffits, bargeboards and guttering offer the best value for
                    money and leave your roofline completely renewed in a single visit.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6">
                  <h3 className="text-white font-black uppercase tracking-wide text-sm mb-3">
                    Related Services
                  </h3>
                  <ul className="space-y-2">
                    {[
                      { label: "All Roofing Services", href: "/roofing" },
                      { label: "Guttering & Drainage", href: "/services/guttering" },
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
        heading="Need Fascias or Soffits in Somerset?"
        subtext="Call 07587 478826 or request a free survey. We assess, quote and complete most roofline projects in a single day."
      />
    </>
  );
}
