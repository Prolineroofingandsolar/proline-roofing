import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Phone, Shield, Award } from "lucide-react";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Leadwork & Roof Flashing Somerset | ProLine Roofing & Solar",
  description:
    "Expert leadwork and roof flashing repairs across Somerset. Lead valleys, chimney flashings, step flashings, soakers. Fully qualified. Free quotes. Call 07587 478826.",
  keywords: ["leadwork somerset", "lead flashing repair taunton", "roof flashing somerset", "chimney lead flashing", "lead valleys somerset"],
  alternates: { canonical: "https://www.prolineroofingandsolar.co.uk/services/leadwork" },
};

const leadServices = [
  { title: "Chimney Lead Flashing", desc: "Step flashings, back gutter and apron flashings around chimney stacks — the most common source of roof leaks. We re-lead using Code 4 or Code 5 sheet lead for lasting results." },
  { title: "Lead Valley Replacement", desc: "Open and closed lead valleys replaced with correctly dressed and sealed lead sheet. We dress to the correct girth and lap to prevent water penetration." },
  { title: "Step & Soaker Flashings", desc: "Correct step and soaker flashings at roof-to-wall junctions. Essential where a pitched roof meets a parapet or gable wall." },
  { title: "Abutment Flashings", desc: "Where an extension roof meets the main house wall — a common source of water ingress. Re-leading using correct Code 4/5 lead with wedged and pointed fixings." },
  { title: "Dormer & Skylight Flashings", desc: "Lead flashings around dormer windows, Velux and skylights. Correctly dressed soakers and stepped cover flashings to prevent water ingress around vulnerable openings." },
  { title: "Flat Roof Leadwork", desc: "Traditional lead used on flat and low-pitch roof sections, parapet gutters, and box gutters. Code 6 or heavier where required. Correctly jointed and bossed." },
  { title: "Period Property Leadwork", desc: "Restoration-quality leadwork for listed buildings and conservation areas. We work to traditional methods and can match historic profiles." },
  { title: "Lead Replacement Alternatives", desc: "Where lead isn't appropriate (planning, cost or theft risk), we install high-quality Code 3 aluminium or proprietary mortar-free flashing systems." },
];

const faqs = [
  { q: "What is lead flashing on a roof?", a: "Lead flashing is thin sheets of lead used to waterproof the junction between a roof covering and an adjoining surface — typically a wall, chimney, dormer or valley. Lead is used because it's highly malleable, durable and self-sealing. Flashing failure is one of the most common causes of roof leaks." },
  { q: "Why does lead flashing fail?", a: "Lead expands and contracts significantly with temperature changes. Over time, the mortar pointing that secures lead into wall joints cracks and falls out, allowing water behind the lead. Oxidation, foot traffic, nail fatigue and corrosion from certain mortar types can also cause failure after 30–50 years." },
  { q: "How long does lead flashing last?", a: "Well-installed Code 4 or Code 5 lead flashing typically lasts 40–60 years. The lead itself often lasts longer than the mortar joints securing it. If the lead is sound but the pointing has failed, repointing is often sufficient rather than full re-leading." },
  { q: "How much does leadwork cost?", a: "Repointing and re-securing existing lead around a chimney typically costs £250–£600. Full re-leading of a chimney stack costs £400–£1,200 depending on the number of flashings required. Lead valley replacement is typically £600–£2,000. We provide free, written quotes." },
  { q: "Can lead be repaired or does it need replacing?", a: "Cracked or split lead can be repaired using lead welding (burning) or lead mortar compounds. Small repairs can extend the life by many years. If the lead is thin, fatigued throughout or incorrectly dressed, full replacement is more cost-effective." },
  { q: "What are the alternatives to lead on a roof?", a: "Lead alternatives include: Code 3 aluminium (very similar performance, lower cost, no theft risk), code zinc (used on heritage projects), proprietary flexible flashing systems (Flashband, Leadax) for quick repairs, and EPDM flashing tape for modern systems. We'll advise the best option for your roof and budget." },
  { q: "Is leadwork regulated?", a: "Leadwork is covered by building regulations where it forms part of a weatherproofing system. There are no specific licensing requirements for lead installation in England, but competence and correct technique are critical. All our lead work is carried out by experienced operatives following Lead Sheet Association guidance." },
  { q: "Do you work on listed buildings and conservation areas?", a: "Yes — we have extensive experience with leadwork on listed buildings and in conservation areas across Somerset. We use traditional Code 4/5 rolled sheet lead and work to LSA guidance. We can advise on planning requirements and liaise with conservation officers if needed." },
];

export default function LeadworkPage() {
  return (
    <>
      <section className="relative bg-[#111111] text-white py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/image1.jpeg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/85" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-[#f97316] text-xs font-black uppercase tracking-[0.25em] mb-4">Leadwork &amp; Flashings — Somerset</p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-5 uppercase leading-none">
              Expert Leadwork<br /><span className="text-[#f97316]">Across Somerset</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              Roof flashing repairs, lead valley replacement and chimney leadwork by experienced roofers across Somerset and the South West. The most common source of roof leaks — fixed properly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/quote" className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#e8650f] text-white font-black px-8 py-4 uppercase tracking-widest text-sm transition-all hover:scale-105">Get a Free Quote <ArrowRight className="w-4 h-4" /></Link>
              <a href="tel:07587478826" className="inline-flex items-center gap-2 border-2 border-white text-white font-black px-8 py-4 hover:bg-white hover:text-[#1a1a1a] transition-all text-sm uppercase tracking-widest"><Phone className="w-4 h-4" /> 07587 478826</a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">Services</span>
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">Leadwork Services</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {leadServices.map(({ title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 0.07}>
                <div className="group border border-gray-100 hover:border-[#f97316] p-6 transition-all hover:shadow-md h-full">
                  <div className="w-8 h-8 bg-[#f97316] flex items-center justify-center mb-4">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-black text-[#1a1a1a] text-sm uppercase tracking-wide mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
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
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">Why Choose ProLine for Leadwork</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "LSA Guidance Followed", desc: "All our leadwork follows Lead Sheet Association guidance for correct code weights, drips, rolls and fixings." },
              { icon: Shield, title: "Correct Materials Used", desc: "We use genuine rolled sheet lead (Code 4, 5 and 6) — not thin lead substitutes. Quality materials mean lasting repairs." },
              { icon: CheckCircle, title: "Listed Buildings Welcome", desc: "We work regularly on listed buildings and in Somerset's conservation areas. Traditional techniques, sympathetic materials." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 0.1}>
                <div className="group p-8 border border-white/10 hover:border-[#f97316] transition-all">
                  <div className="w-11 h-11 bg-[#f97316]/10 group-hover:bg-[#f97316] flex items-center justify-center mb-4 transition-colors">
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
            <h2 className="text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">Leadwork Questions Answered</h2>
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
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-lg font-black text-[#1a1a1a] uppercase tracking-tight mb-4">Related Services</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {[{ l: "Chimney Repairs", h: "/services/chimney-repairs" }, { l: "Slate Roofing", h: "/services/slate-roofing" }, { l: "Roof Repairs", h: "/services/roof-repairs" }, { l: "All Roofing", h: "/roofing" }].map(({ l, h }) => (
              <Link key={l} href={h} className="border border-gray-300 hover:border-[#f97316] hover:text-[#f97316] text-gray-700 text-sm font-semibold px-4 py-2 transition-colors">{l}</Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection heading="Free Leadwork Quote?" subtext="Contact us for a free, no-obligation survey and written quote for your leadwork or flashing repairs." />
    </>
  );
}
