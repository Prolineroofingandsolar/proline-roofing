import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Phone, Star, Award, Shield } from "lucide-react";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Tile Roofing Somerset | ProLine Roofing & Solar",
  description:
    "Expert tile roofing installation and repair across Somerset. Concrete and clay roof tiles, ridge tiles, hip tiles. Fully insured, guaranteed. Free quotes. Call 07587 478826.",
  keywords: [
    "tile roofing somerset",
    "roof tiles taunton",
    "concrete roof tiles somerset",
    "clay roof tiles somerset",
    "tile replacement somerset",
    "roof tiling taunton",
  ],
  alternates: { canonical: "https://www.prolineroofingandsolar.co.uk/services/tile-roofing" },
};

const tileTypes = [
  {
    name: "Concrete Plain Tiles",
    description: "The most popular choice for Somerset homes. Durable, cost-effective and available in a wide range of profiles and colours. Lifespan of 30–50 years.",
    pros: ["Cost-effective", "Wide colour range", "Low maintenance", "Good fire resistance"],
    lifespan: "30–50 years",
    cost: "£4,000–£10,000",
  },
  {
    name: "Clay Plain Tiles",
    description: "Traditional clay tiles offer a warm, natural appearance that suits Somerset's older properties and conservation areas. Age beautifully over time.",
    pros: ["Traditional aesthetic", "Very long lifespan", "Planning-friendly", "Natural material"],
    lifespan: "60–100+ years",
    cost: "£6,000–£15,000",
  },
  {
    name: "Concrete Interlocking Tiles",
    description: "Interlocking profiles such as Redland 49 or Sandtoft provide rapid coverage and excellent weather resistance for modern and refurbishment projects.",
    pros: ["Fast installation", "Excellent weatherproofing", "Large format", "Economical"],
    lifespan: "30–40 years",
    cost: "£4,500–£9,000",
  },
  {
    name: "Clay Pantiles",
    description: "S-shaped pantiles give a distinctive Mediterranean look popular in rural Somerset. Excellent drainage and attractive appearance.",
    pros: ["Distinctive appearance", "Good drainage", "Traditional character", "Durable"],
    lifespan: "60–100 years",
    cost: "£7,000–£16,000",
  },
];

const faqs = [
  {
    q: "How much does a new tile roof cost in Somerset?",
    a: "A full tile re-roof on a standard 3-bedroom semi-detached house in Somerset typically costs £4,500–£10,000 for concrete tiles and £7,000–£15,000 for clay tiles. Costs vary based on roof size, pitch, access requirements and the tile chosen. We always provide a free, no-obligation written quote.",
  },
  {
    q: "How long does a tiled roof last?",
    a: "Concrete tiles typically last 30–50 years. Clay tiles are much longer-lasting at 60–100+ years. The ridge mortar and underfelt tend to fail before the tiles themselves, which is why re-roofing is often needed even when individual tiles look intact.",
  },
  {
    q: "Can individual tiles be replaced without re-roofing?",
    a: "Yes — we can replace single or small numbers of damaged, broken or missing tiles in most cases. We stock a wide range of tiles for matching purposes. However, if the underfelt has failed or the battens are rotten, a full or partial re-roof may be more cost-effective.",
  },
  {
    q: "Do I need planning permission for a new tile roof?",
    a: "In most cases, replacing like-for-like roof covering is permitted development and doesn't require planning permission. However, if you're in a conservation area or your property is listed, you'll need to use matching or sympathetic materials and may need consent. We can advise on this during your survey.",
  },
  {
    q: "What is the best roof tile for a Somerset home?",
    a: "For most modern or post-war homes, concrete plain tiles or interlocking tiles offer excellent value and performance. For older, period or listed properties, clay plain tiles or pantiles are more appropriate. We'll advise on the best option for your property during a free survey.",
  },
  {
    q: "What are ridge tiles and why do they fail?",
    a: "Ridge tiles sit at the apex of the roof and are traditionally bedded in mortar. Over time, the mortar cracks and fails due to thermal movement, freeze-thaw cycles and age. Loose or fallen ridge tiles are a serious safety hazard and common source of water ingress. We re-bed and repoint ridge tiles or install dry ridge systems.",
  },
  {
    q: "How long does re-tiling a roof take?",
    a: "A full re-roof typically takes 3–7 working days for a standard house, depending on size, complexity and weather. We use scaffolding for all pitched roof work and clear all materials from site on completion.",
  },
  {
    q: "Do you source matching tiles for repairs?",
    a: "Yes. We maintain relationships with tile manufacturers and reclamation yards across the South West and can usually source matching tiles for older roofs. We carry common profiles in our vehicles for immediate repairs.",
  },
];

export default function TileRoofingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#111111] text-white py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/image1.jpeg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/85" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-[#f97316] text-xs font-black uppercase tracking-[0.25em] mb-4">
              Tile Roofing — Somerset &amp; the South West
            </p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-5 uppercase leading-none">
              Tile Roofing<br />
              <span className="text-[#f97316]">Experts in Somerset</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              New tile roofs, re-tiling, repairs and ridge tile replacement. ProLine installs and repairs concrete and clay tile roofs across Somerset with a full workmanship guarantee.
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
            {[
              { value: "30+", label: "Years Experience" },
              { value: "All Types", label: "Tile Profiles" },
              { value: "5 ★", label: "Google Rating" },
              { value: "10 Yr+", label: "Guarantee" },
            ].map(({ value, label }) => (
              <div key={label} className="bg-white/5 backdrop-blur-sm text-center py-4 px-2">
                <div className="text-2xl font-black text-[#f97316]">{value}</div>
                <div className="text-gray-300 text-xs uppercase tracking-wider mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tile Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">Tile Options</span>
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">Tile Types We Install</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">We work with all major tile profiles and manufacturers. Our team will help you choose the right tile for your property, budget and local planning requirements.</p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-6">
            {tileTypes.map(({ name, description, pros, lifespan, cost }, i) => (
              <AnimatedSection key={name} delay={i * 0.1}>
                <div className="border border-gray-100 hover:border-[#f97316] p-8 transition-all hover:shadow-md h-full">
                  <h3 className="font-black text-[#1a1a1a] text-lg uppercase tracking-tight mb-3">{name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{description}</p>
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
                        <CheckCircle className="w-4 h-4 text-[#f97316] shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ProLine */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">Why ProLine</span>
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">Why Choose ProLine for Tile Roofing</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "30+ Years Experience", desc: "Our team has laid thousands of square metres of tile roofing across Somerset and the South West. We've seen every challenge a Somerset roof can throw at us." },
              { icon: Shield, title: "Full Workmanship Guarantee", desc: "All our tile roofing work comes with a written guarantee — typically 10–15 years on new roofs. We stand behind every job we do." },
              { icon: Star, title: "5-Star Rated", desc: "Hundreds of happy customers across Somerset have left us glowing reviews on Google, Facebook and Checkatrade." },
              { icon: CheckCircle, title: "Quality Materials Only", desc: "We use tiles from leading UK manufacturers including Marley, Redland, Dreadnought and Sandtoft — with matching guarantees." },
              { icon: Phone, title: "Free Survey & Quote", desc: "We visit your property, assess the full scope of work and provide a detailed written quote at no charge. No pressure, no surprises." },
              { icon: ArrowRight, title: "Clean, Professional Team", desc: "We treat your home with respect. All materials removed from site, gutters cleared, and property left clean and tidy after every job." },
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

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">FAQ</span>
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">Tile Roofing Questions Answered</h2>
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

      {/* Related Services */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-black text-[#1a1a1a] uppercase tracking-tight mb-6 text-center">Related Services</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: "Slate Roofing", href: "/services/slate-roofing" },
              { label: "Roof Repairs", href: "/services/roof-repairs" },
              { label: "Chimney Repairs", href: "/services/chimney-repairs" },
              { label: "Leadwork", href: "/services/leadwork" },
              { label: "Fascias & Soffits", href: "/services/fascias-soffits" },
              { label: "Guttering", href: "/services/guttering" },
              { label: "All Roofing Services", href: "/roofing" },
            ].map(({ label, href }) => (
              <Link key={label} href={href} className="border border-gray-300 hover:border-[#f97316] hover:text-[#f97316] text-gray-700 text-sm font-semibold px-4 py-2 transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Free Tile Roofing Quote?"
        subtext="Get in touch today for a free, no-obligation survey and written quote for your tile roofing project."
      />
    </>
  );
}
