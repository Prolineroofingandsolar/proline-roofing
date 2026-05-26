import type { Metadata } from "next";
import Link from "next/link";
import { Sun, Battery, Zap, Leaf, CheckCircle, ArrowRight, Phone, TrendingDown } from "lucide-react";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Solar Panel Installation | Taunton & South West",
  description:
    "Solar PV panel installation and battery storage in Taunton, Somerset. Reduce your energy bills with a professionally installed solar system. Free survey and quote.",
};

const services = [
  {
    icon: Sun,
    title: "Solar PV Systems",
    description: "We design and install bespoke solar photovoltaic systems perfectly sized for your home's energy usage and roof layout.",
    features: ["High-efficiency panels", "Tailored system design", "Full scaffold and electrical work", "DNO application handling", "25-year panel warranty"],
  },
  {
    icon: Battery,
    title: "Battery Storage",
    description: "Store surplus solar energy for use in the evenings and overnight — maximising what you generate and minimising what you buy.",
    features: ["Compatible with all major brands", "Smart energy management", "Retrofit to existing systems", "App monitoring included", "10-year battery warranty"],
  },
  {
    icon: Zap,
    title: "EV Charging",
    description: "Charge your electric vehicle using your own clean solar energy. We install and integrate home EV chargers with your system.",
    features: ["Smart EV chargers", "Solar and battery integration", "OZEV grant assistance", "All EV brands supported", "Load management included"],
  },
  {
    icon: Leaf,
    title: "Solar Maintenance",
    description: "Keep your solar system performing at its best with annual maintenance plans including panel cleaning and inverter checks.",
    features: ["Annual system health checks", "Panel cleaning service", "Inverter and isolator testing", "Performance monitoring", "Priority fault response"],
  },
];

const benefits = [
  { icon: TrendingDown, title: "Cut Your Bills", desc: "Typical savings of £1,000+ per year on energy costs." },
  { icon: Zap, title: "SEG Export Income", desc: "Earn money selling surplus power back to the grid." },
  { icon: Sun, title: "Add Property Value", desc: "Solar adds an average of 4% to your home's value." },
  { icon: Leaf, title: "Go Green", desc: "Cut household CO₂ emissions by up to 1.5 tonnes per year." },
];

export default function SolarPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#111111] text-white py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/UK_MKT_PHO_REF_Solar_Grasmere_002.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-[#f97316] text-xs font-black uppercase tracking-[0.25em] mb-3">Clean Energy</p>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 uppercase">Solar Panel<br />Installation</h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              Lower your energy bills and reduce your carbon footprint with a professionally installed solar system. Covering Taunton and the entire South West.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/quote" className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#e8650f] text-white font-black px-7 py-4 uppercase tracking-widest text-sm transition-all hover:scale-105">
                Get a Free Survey <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:07587478826" className="inline-flex items-center gap-2 border-2 border-white text-white font-black px-7 py-4 hover:bg-white hover:text-[#1a1a1a] transition-all text-sm uppercase tracking-widest">
                <Phone className="w-4 h-4" /> 07587 478826
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits bar */}
      <section className="bg-[#f97316] py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map(({ icon: Icon, title, desc }, i) => (
            <AnimatedSection key={title} delay={i * 0.1}>
              <div className="text-center">
                <Icon className="w-6 h-6 text-white mx-auto mb-2" />
                <p className="text-white font-black text-sm">{title}</p>
                <p className="text-orange-100 text-xs mt-1">{desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">What We Offer</span>
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">Our Solar Services</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map(({ icon: Icon, title, description, features }, i) => (
              <AnimatedSection key={title} delay={i * 0.1}>
                <div className="bg-white border border-gray-100 shadow-sm p-8 hover:shadow-md hover:border-[#f97316] transition-all duration-300 h-full group">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-[#f97316]/10 flex items-center justify-center shrink-0 group-hover:bg-[#f97316] transition-colors duration-300">
                      <Icon className="w-6 h-6 text-[#f97316] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-lg font-black text-gray-900 mb-2">{title}</h2>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">{description}</p>
                      <ul className="space-y-1.5">
                        {features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-[#f97316] shrink-0" /> {f}
                          </li>
                        ))}
                      </ul>
                      <Link href="/quote" className="inline-flex items-center gap-1.5 mt-5 text-sm font-black text-[#f97316] hover:gap-3 transition-all uppercase tracking-wide">
                        Get a quote <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Installation process */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">The Process</span>
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">How Solar Installation Works</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { step: "01", title: "Free Survey", desc: "We assess your roof, usage and orientation to design the ideal system." },
              { step: "02", title: "System Design", desc: "A bespoke layout created to maximise your generation." },
              { step: "03", title: "DNO & Planning", desc: "We handle all grid connection paperwork and applications." },
              { step: "04", title: "Installation", desc: "Our team installs your system safely and efficiently." },
              { step: "05", title: "Handover", desc: "Full walkthrough, app setup and ongoing monitoring." },
            ].map(({ step, title, desc }, i) => (
              <AnimatedSection key={step} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#f97316] text-white font-black flex items-center justify-center mx-auto mb-4 text-sm">
                    {step}
                  </div>
                  <h3 className="font-black text-white mb-1.5 text-sm">{title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Ready to Go Solar?" subtext="Get a free, no-obligation solar survey and find out exactly how much you could save." />
    </>
  );
}
