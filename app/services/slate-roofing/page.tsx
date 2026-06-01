import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Phone, Star, Award, Shield } from "lucide-react";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Slate Roofing Somerset | ProLine Roofing & Solar",
  description:
    "Natural and artificial slate roofing across Somerset and the South West. Welsh slate, Spanish slate, synthetic slate. Expert fitting, guaranteed. Free quotes. Call 07587 478826.",
  keywords: ["slate roofing somerset", "natural slate roof taunton", "welsh slate somerset", "slate roof repair somerset", "artificial slate somerset"],
  alternates: { canonical: "https://www.prolineroofingandsolar.co.uk/services/slate-roofing" },
};

const slateTypes = [
  { name: "Natural Welsh Slate", desc: "The premium choice for period homes and conservation areas. Typically blue-grey in colour with a lifespan exceeding 100 years. Sourced from Penrhyn and Ffestiniog quarries.", lifespan: "100+ years", cost: "£9,000–£18,000", pros: ["Authentic look", "100+ year lifespan", "Planning-compliant", "Self-cleansing surface"] },
  { name: "Spanish Slate", desc: "A popular and cost-effective natural slate option. Dark grey or black in colour, lighter weight than Welsh slate, and widely used on modern and Victorian properties.", lifespan: "60–80 years", cost: "£7,000–£14,000", pros: ["Cost-effective", "Lighter weight", "Dark aesthetic", "Long lifespan"] },
  { name: "Brazilian & Portuguese Slate", desc: "Sourced from South America and Portugal, offering good quality at a mid-range price. Available in a variety of sizes and thicknesses.", lifespan: "50–70 years", cost: "£6,000–£12,000", pros: ["Good value", "Wide size range", "Consistent colour", "Durable"] },
  { name: "Synthetic / Artificial Slate", desc: "Modern composite slates made from recycled rubber, plastic or fibre cement. Lightweight, consistent in appearance, and highly resistant to frost and UV. Good for modern builds.", lifespan: "30–50 years", cost: "£5,000–£10,000", pros: ["Lightweight", "Consistent colour", "No nail sickness", "Budget-friendly"] },
];

const faqs = [
  { q: "How much does a slate roof cost in Somerset?", a: "A full re-roof in natural Welsh slate on a typical 3-bed semi-detached house in Somerset costs £9,000–£18,000. Spanish or Brazilian slate costs £7,000–£14,000. Artificial slate is typically £5,000–£10,000. Costs vary by roof size, pitch and access requirements. We provide free, no-obligation written quotes." },
  { q: "How long does a natural slate roof last?", a: "Natural Welsh slate is one of the most durable roofing materials available — high-quality slates can last 100–150 years. The roof structure (battens, underfelt, flashings) will need attention before the slates themselves fail. Spanish and Brazilian slates typically last 60–80 years." },
  { q: "Why do slate tiles fail?", a: "The most common cause of slate failure is 'nail sickness' — where the iron nails holding the slates rust through over decades. Individual slates can also crack due to frost action, impact damage or delamination. When nails begin to fail widely, a full re-slate may be more cost-effective than ongoing repairs." },
  { q: "Can individual slates be replaced?", a: "Yes — single or small numbers of slates can usually be replaced without a full re-roof using a technique called 'torching' or using lead tacks. The key challenge is sourcing matching slates for colour, size and texture. We stock a wide range and have good contacts with reclaim suppliers across Somerset." },
  { q: "Do I need planning permission for a slate roof?", a: "In most cases, replacing a slate roof like-for-like is permitted development. If you're in a conservation area or have a listed building, you should check with your local planning authority — Somerset has many conservation areas where sympathetic materials are required. We can advise during your survey." },
  { q: "Is natural slate better than artificial slate?", a: "Natural slate is the premium choice for aesthetics, longevity and planning compliance. For modern properties or where budget is a key consideration, high-quality artificial slates offer a good alternative with consistent appearance, lighter weight and resistance to nail sickness." },
  { q: "Can you match existing slates for a repair?", a: "Yes. We carry a range of natural and artificial slates and have access to reclamation sources for unusual or rare sizes. We'll always visit the site to assess the existing slates before a repair so we can source the best possible match." },
  { q: "What is the difference between slate roofing and tile roofing?", a: "Slate is a natural stone product, thinner and lighter than concrete tiles, with a distinctive fine-grained texture. Slate is generally longer-lasting and more appropriate for period and listed properties. Tiles are more cost-effective and better suited to modern homes. Both are fully supported by ProLine." },
];

export default function SlateRoofingPage() {
  return (
    <>
      <section className="relative bg-[#111111] text-white py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/image1.jpeg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/85" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-[#f97316] text-xs font-black uppercase tracking-[0.25em] mb-4">Slate Roofing — Somerset &amp; the South West</p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-5 uppercase leading-none">
              Slate Roofing<br /><span className="text-[#f97316]">Specialists Somerset</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              Natural and artificial slate roofing for Somerset&apos;s homes and period properties. Expert installation, sympathetic repairs, and fully guaranteed workmanship.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/quote" className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#e8650f] text-white font-black px-8 py-4 uppercase tracking-widest text-sm transition-all hover:scale-105">
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:07587478826" className="inline-flex items-center gap-2 border-2 border-white text-white font-black px-8 py-4 hover:bg-white hover:text-[#1a1a1a] transition-all text-sm uppercase tracking-widest">
                <Phone className="w-4 h-4" /> 07587 478826
              </a>
            </div>
          </AnimatedSection>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 mt-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
            {[{ value: "100+", label: "Year Lifespan" }, { value: "All Types", label: "Natural & Synthetic" }, { value: "5 ★", label: "Google Rating" }, { value: "Free", label: "Survey & Quote" }].map(({ value, label }) => (
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
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">Slate Options</span>
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">Types of Slate We Install</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-6">
            {slateTypes.map(({ name, desc, lifespan, cost, pros }, i) => (
              <AnimatedSection key={name} delay={i * 0.1}>
                <div className="border border-gray-100 hover:border-[#f97316] p-8 transition-all hover:shadow-md h-full">
                  <h3 className="font-black text-[#1a1a1a] text-lg uppercase tracking-tight mb-3">{name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{desc}</p>
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div className="bg-gray-50 p-3">
                      <p className="text-xs text-[#f97316] font-black uppercase tracking-wider mb-1">Lifespan</p>
                      <p className="text-sm font-bold text-[#1a1a1a]">{lifespan}</p>
                    </div>
                    <div className="bg-gray-50 p-3">
                      <p className="text-xs text-[#f97316] font-black uppercase tracking-wider mb-1">Typical Cost</p>
                      <p className="text-sm font-bold text-[#1a1a1a]">{cost}</p>
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {pros.map((pro) => (
                      <li key={pro} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-[#f97316] shrink-0" />{pro}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">Why ProLine</span>
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">Why Choose ProLine for Slate Roofing</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "Conservation Area Experience", desc: "We regularly work in Somerset's many conservation areas and with listed buildings, sourcing sympathetic materials and following local authority requirements." },
              { icon: Shield, title: "10–15 Year Guarantee", desc: "All new slate roofs come with a written workmanship guarantee. Natural slate materials carry additional manufacturers' warranties." },
              { icon: Star, title: "Matching Slates for Repairs", desc: "We stock a wide range of natural and artificial slates and have access to reclamation yards for unusual sizes and profiles." },
              { icon: CheckCircle, title: "Full Scaffold & Waste Removal", desc: "We arrange scaffolding, remove all old slates, dispose of waste responsibly, and leave your property clean and tidy on completion." },
              { icon: Phone, title: "Free Survey & Quote", desc: "We visit, assess your roof thoroughly and provide a detailed written quote at no charge. No obligation, no pressure." },
              { icon: ArrowRight, title: "Structural Inspection Included", desc: "Every re-slate includes a full inspection of battens, underfelt and timbers. Any issues are discussed before work begins." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 0.08}>
                <div className="group p-7 border border-white/10 hover:border-[#f97316] transition-all h-full">
                  <div className="w-10 h-10 bg-[#f97316]/10 group-hover:bg-[#f97316] flex items-center justify-center mb-4 transition-colors">
                    <Icon className="w-5 h-5 text-[#f97316] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-black text-white text-sm uppercase tracking-wide mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
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
            <h2 className="text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">Slate Roofing Questions Answered</h2>
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

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-black text-[#1a1a1a] uppercase tracking-tight mb-6 text-center">Slate Roofing Across Somerset</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {[{ n: "Taunton", h: "/roofer/taunton" }, { n: "Bath", h: "/roofer/bath" }, { n: "Bridgwater", h: "/roofer/bridgwater" }, { n: "Yeovil", h: "/roofer/yeovil" }, { n: "Bristol", h: "/roofer/bristol" }, { n: "Exeter", h: "/roofer/exeter" }, { n: "Glastonbury", h: "/roofer/glastonbury" }].map(({ n, h }) => (
              <Link key={n} href={h} className="border border-gray-300 hover:border-[#f97316] hover:text-[#f97316] text-gray-700 text-sm font-semibold px-4 py-2 transition-colors">Slate Roofing {n}</Link>
            ))}
            <Link href="/roofing" className="border border-[#f97316] text-[#f97316] text-sm font-semibold px-4 py-2">All Roofing Services</Link>
          </div>
        </div>
      </section>
      <CTASection heading="Free Slate Roofing Quote?" subtext="Contact us for a free, no-obligation survey and written quote for your slate roofing project." />
    </>
  );
}
