import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, ArrowRight, Phone, Clock, Shield, CheckCircle, Zap } from "lucide-react";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Emergency Roofing Somerset | 24/7 ProLine Roofing & Solar",
  description:
    "24/7 emergency roofing across Somerset. Storm damage, active leaks, fallen tiles — fast response. Call NOW: 07587 478826. ProLine Roofing & Solar.",
  keywords: ["emergency roofer somerset", "emergency roof repair taunton", "24/7 roofer somerset", "storm damage roof repair", "emergency roofing bridgwater"],
  alternates: { canonical: "https://www.prolineroofingandsolar.co.uk/services/emergency-roofing" },
};

const emergencyTypes = [
  { icon: AlertTriangle, title: "Active Water Leaks", desc: "Water coming through your ceiling or walls is an emergency. We deploy fast to contain the water and make your roof safe." },
  { icon: Zap, title: "Storm Damage", desc: "High winds, falling trees or heavy rainfall can cause sudden and severe roof damage. We respond to storm damage across Somerset 24/7." },
  { icon: AlertTriangle, title: "Fallen or Flying Tiles", desc: "Missing or displaced tiles leave your roof exposed and tiles themselves become dangerous projectiles. Urgent make-safe is essential." },
  { icon: Shield, title: "Structural Damage", desc: "Collapsed rafters, sagging roof sections or structural failure require immediate attention before further deterioration occurs." },
  { icon: Clock, title: "Chimney Collapses", desc: "A leaning, cracked or collapsed chimney stack is a serious safety hazard. Emergency shoring and make-safe works carried out fast." },
  { icon: CheckCircle, title: "Flat Roof Failures", desc: "Sudden flat roof failures, split membranes or complete waterproofing failure — temporary coverings installed within hours." },
];

const steps = [
  { step: "01", title: "Call Us Now", desc: "Call 07587 478826 at any time — day or night, weekends and bank holidays. Our team answers emergency calls around the clock." },
  { step: "02", title: "Rapid Response", desc: "We dispatch the nearest available roofer to your location. We aim to be with you within 24 hours — often same-day." },
  { step: "03", title: "Immediate Make-Safe", desc: "We make your property watertight and safe as the first priority. This may include temporary coverings, boarding up, or emergency repairs." },
  { step: "04", title: "Full Assessment & Quote", desc: "Once the emergency is contained, we carry out a full roof survey and provide a written quote for the permanent repair." },
  { step: "05", title: "Permanent Repair", desc: "The full repair is carried out to the highest standard, with a written workmanship guarantee. We handle insurance documentation if needed." },
];

const faqs = [
  { q: "What counts as a roofing emergency?", a: "Any situation where your property is immediately at risk of water ingress or structural damage qualifies as an emergency: active leaks, storm-damaged or missing tiles, fallen chimney stacks, collapsed rafters, or any situation where you can see daylight through your roof from inside." },
  { q: "How quickly can you respond to a roofing emergency in Somerset?", a: "We aim to respond to genuine emergencies within 24 hours — often same-day depending on location and our team's availability. We cover all of Somerset and surrounding areas. Call 07587 478826 and explain your situation; we'll give you an honest timeframe immediately." },
  { q: "Do you charge extra for emergency call-outs?", a: "Out-of-hours and weekend emergency call-outs may carry a call-out fee, which we'll always confirm over the phone before attending. We believe in complete transparency about costs. In many cases, if the job is significant, any call-out fee is absorbed into the overall repair cost." },
  { q: "What should I do while waiting for the emergency roofer?", a: "Place buckets under active leaks. Move valuables, furniture and electrics away from water. Take photographs of the damage for insurance purposes. If it's safe and accessible, a tarpaulin over the affected area can help reduce further damage — but do NOT go onto the roof yourself." },
  { q: "Will insurance cover my emergency roof repair?", a: "Storm damage and sudden events are typically covered by buildings insurance. We can provide a full written damage report and photographs to support your insurance claim. We work with insurance assessors and loss adjusters regularly and can advise on the claims process." },
  { q: "Do you provide temporary fixes overnight?", a: "Yes. In many emergency situations, a temporary waterproof covering (heavy-duty tarpaulin or temporary felt) can be installed as an immediate measure to prevent further water ingress overnight or while materials for a permanent repair are sourced." },
  { q: "Do you cover all of Somerset for emergencies?", a: "We cover all of Somerset and the surrounding counties — Taunton, Bridgwater, Yeovil, Bath, Bristol, Exeter, Weston-super-Mare, Wellington, Burnham-on-Sea and all surrounding villages and rural areas. Distance and availability may affect response times but we'll always be honest about this when you call." },
  { q: "Can you provide photos and reports for my insurer?", a: "Yes. We provide full written damage reports with photographs suitable for insurance claims. We are experienced in working alongside insurers and loss adjusters and can help you navigate the claims process." },
];

export default function EmergencyRoofingPage() {
  return (
    <>
      {/* Urgent top bar */}
      <div className="bg-red-600 text-white text-center py-3 px-4">
        <p className="font-black text-sm uppercase tracking-wider">
          ROOFING EMERGENCY? CALL NOW 24/7:{" "}
          <a href="tel:07587478826" className="underline hover:no-underline text-lg">07587 478826</a>
        </p>
      </div>

      <section className="relative bg-[#111111] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: "url('/image1.jpeg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-red-600 text-white text-xs font-black uppercase tracking-widest px-4 py-2 mb-6">
              <AlertTriangle className="w-4 h-4" /> 24/7 Emergency Roofing
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-5 uppercase leading-none">
              Emergency Roofer<br /><span className="text-[#f97316]">Somerset — 24/7</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              Storm damage, active leaks, fallen tiles — we respond fast across Somerset and the South West. Available nights, weekends and bank holidays.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:07587478826" className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-black px-10 py-5 uppercase tracking-widest text-lg transition-all hover:scale-105">
                <Phone className="w-6 h-6" /> CALL NOW: 07587 478826
              </a>
              <Link href="/quote" className="inline-flex items-center gap-2 border-2 border-white text-white font-black px-8 py-4 hover:bg-white hover:text-[#1a1a1a] transition-all text-sm uppercase tracking-widest">
                Request Callback <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 mt-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
            {[{ value: "24/7", label: "Emergency Cover" }, { value: "Same Day", label: "Response Available" }, { value: "All Somerset", label: "Coverage Area" }, { value: "Guaranteed", label: "All Work" }].map(({ value, label }) => (
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
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">Emergencies We Cover</span>
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">What Counts as a Roofing Emergency?</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {emergencyTypes.map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 0.07}>
                <div className="group border border-gray-100 hover:border-red-500 p-6 transition-all hover:shadow-md h-full">
                  <div className="w-10 h-10 bg-red-50 group-hover:bg-red-600 flex items-center justify-center mb-4 transition-colors">
                    <Icon className="w-5 h-5 text-red-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-black text-[#1a1a1a] text-sm uppercase tracking-wide mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Big phone CTA */}
      <section className="bg-red-600 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-white font-black text-2xl uppercase tracking-tight mb-2">Roof Emergency Right Now?</p>
          <p className="text-red-100 mb-6">Don&apos;t wait. Call our emergency line immediately — available 24 hours, 7 days a week.</p>
          <a href="tel:07587478826" className="inline-flex items-center gap-3 bg-white text-red-600 font-black px-10 py-5 uppercase tracking-widest text-xl hover:bg-red-50 transition-colors">
            <Phone className="w-7 h-7" /> 07587 478826
          </a>
        </div>
      </section>

      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">Our Process</span>
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">What Happens When You Call</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {steps.map(({ step, title, desc }, i) => (
              <AnimatedSection key={step} delay={i * 0.1}>
                <div className="text-center p-6 border border-white/10 hover:border-[#f97316] transition-all">
                  <div className="w-12 h-12 bg-[#f97316] text-white font-black text-lg flex items-center justify-center mx-auto mb-4">{step}</div>
                  <h3 className="font-black text-white text-xs uppercase tracking-wide mb-2">{title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
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
            <h2 className="text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">Emergency Roofing Questions</h2>
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
          <h2 className="text-lg font-black text-[#1a1a1a] uppercase tracking-tight mb-6 text-center">Emergency Roofing by Location</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {[{ n: "Taunton", h: "/emergency-roofer/taunton" }, { n: "Bridgwater", h: "/emergency-roofer/bridgwater" }, { n: "Bath", h: "/emergency-roofer/bath" }, { n: "Bristol", h: "/emergency-roofer/bristol" }, { n: "Exeter", h: "/emergency-roofer/exeter" }, { n: "Yeovil", h: "/emergency-roofer/yeovil" }, { n: "Weston-super-Mare", h: "/emergency-roofer/weston-super-mare" }, { n: "Wellington", h: "/emergency-roofer/wellington" }, { n: "Burnham-on-Sea", h: "/emergency-roofer/burnham-on-sea" }, { n: "Glastonbury", h: "/emergency-roofer/glastonbury" }].map(({ n, h }) => (
              <Link key={n} href={h} className="border border-gray-200 hover:border-red-500 text-gray-700 hover:text-red-600 text-xs font-semibold text-center py-3 px-3 transition-colors">{n}</Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Roofing Emergency in Somerset?" subtext="Call us immediately on 07587 478826 — available 24/7 for genuine roofing emergencies." />
    </>
  );
}
