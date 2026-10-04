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
  AlertTriangle,
  Zap,
  Cloud,
  Home,
  FileText,
  Wrench,
} from "lucide-react";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Urgent Roof Repairs Somerset | ProLine Roofing & Solar",
  description:
    "Urgent roof repair enquiries for storm damage, active leaks and fallen tiles across our Somerset service areas. Call 07587 478826 to check attendance availability.",
  keywords: [
    "emergency roofing Somerset",
    "emergency roofer Taunton",
    "urgent roofer Somerset",
    "storm damage roof Somerset",
    "emergency roof repair Taunton",
    "urgent roofer Somerset",
    "roof leak emergency Somerset",
  ],
  alternates: {
    canonical: "https://www.prolineroofingandsolar.co.uk/services/emergency-roofing",
  },
  openGraph: {
    title: "Urgent Roof Repairs Somerset | ProLine Roofing & Solar",
    description:
      "Urgent roof repair enquiries for storm damage, active leaks and fallen tiles. Call to check attendance availability.",
    url: "https://www.prolineroofingandsolar.co.uk/services/emergency-roofing",
    siteName: "ProLine Roofing & Solar",
    locale: "en_GB",
    type: "website",
  },
};

const services = [
  {
    icon: Cloud,
    title: "Emergency Storm Damage Repair",
    desc: "High winds, driving rain and falling branches can strip tiles, damage felt and cause sudden structural failures. Call so we can assess the risk and available next steps.",
  },
  {
    icon: AlertTriangle,
    title: "Active Leak Containment",
    desc: "Water entering your home demands immediate action. We identify the leak source, stop active ingress and protect your interior while permanent repairs are arranged.",
  },
  {
    icon: Home,
    title: "Fallen Tile Emergency",
    desc: "Fallen ridge tiles, slates or plain tiles leave your roof exposed and can be dangerous to people below. We respond quickly to secure the roof and clear the hazard.",
  },
  {
    icon: Shield,
    title: "Structural Make-Safe",
    desc: "Storm damage can compromise the structural integrity of a roof. We assess the situation and carry out immediate make-safe work to prevent further collapse or damage.",
  },
  {
    icon: Wrench,
    title: "Emergency Chimney Repairs",
    desc: "Chimneys are particularly vulnerable in storms. Falling chimney pots or stacks are dangerous and require urgent attention. We carry out emergency chimney stabilisation.",
  },
  {
    icon: Star,
    title: "Temporary Roof Covering",
    desc: "Where permanent repairs cannot be completed the same day, we apply heavy-duty temporary sheeting to protect your property until a full repair can be scheduled.",
  },
  {
    icon: FileText,
    title: "Insurance Claim Support",
    desc: "We provide detailed written reports, photographs and cost assessments to support your home insurance claim for storm or weather damage. We work with all major insurers.",
  },
  {
    icon: Clock,
    title: "Urgent Call-Out Enquiries",
    desc: "If you have a roofing emergency in one of our listed service areas, call 07587 478826 and we will confirm current attendance availability.",
  },
];

const whyReasons = [
  {
    icon: Zap,
    title: "Response from Taunton",
    desc: "Attendance depends on the location, workload, weather and safe access. We confirm timing after assessing the problem by phone.",
  },
  {
    icon: Clock,
    title: "Call to Check Availability",
    desc: "If the line is not answered, leave a clear message with your postcode and the nature of the damage so the team can assess it.",
  },
  {
    icon: Award,
    title: "Safety-Led Assessment",
    desc: "We assess the immediate risk, safe access and suitable temporary or permanent repair options before work starts.",
  },
  {
    icon: Shield,
    title: "Current Documentation",
    desc: "Ask for current insurance information and confirm the proposed scope before emergency or follow-on repair work begins.",
  },
  {
    icon: FileText,
    title: "Insurance Report Provided",
    desc: "We document emergency damage thoroughly with photos and written reports. This makes insurance claims straightforward and helps ensure you are properly compensated.",
  },
  {
    icon: CheckCircle,
    title: "Honest & Transparent",
    desc: "We never exploit emergency situations. You receive an honest assessment of what is needed, a clear price for emergency work, and a follow-up plan for permanent repairs.",
  },
];

const faqs = [
  {
    q: "What counts as a roofing emergency?",
    a: "A roofing emergency is any situation where your roof has been compromised in a way that allows water to enter your property, or where there is an immediate danger to people or the structure. This includes: active water ingress through the roof covering, fallen or displaced ridge tiles, chimney pots or sections of flashings, large areas of tiles or slates blown off in a storm, visible holes or gaps in the roof following wind or impact damage, and a chimney stack that has partially collapsed or is at risk of falling. If you are unsure whether your situation is an emergency, call us — we will advise you.",
  },
  {
    q: "How quickly can ProLine respond to a roofing emergency in Somerset?",
    a: "Response time depends on the postcode, workload, traffic, weather and safe access. Call with the details and we will confirm whether and when attendance can be arranged. For life-threatening situations such as fire or structural collapse, call 999 before contacting a roofer.",
  },
  {
    q: "Do you charge extra for emergency and out-of-hours call-outs?",
    a: "We are transparent about our pricing. Emergency call-outs and out-of-hours work do carry a higher rate than standard daytime work — this is standard across the industry. We will tell you the call-out rate before we attend so there are no surprises. For insurance claims, out-of-hours premium rates are generally recoverable from your insurer. We never exploit emergency situations with unreasonable pricing.",
  },
  {
    q: "Should I call my insurance company first or the roofer?",
    a: "Call the roofer first. The priority is stopping active water ingress and making the property safe — insurance administration can follow. Most insurers understand that emergency make-safe work must be carried out immediately and will accept costs for reasonable emergency action taken to limit damage. Keep receipts and ask your roofer for a written report and photos documenting the damage before and after. Then notify your insurer as soon as possible after the emergency is under control.",
  },
  {
    q: "What should I do while waiting for an emergency roofer?",
    a: "Stay safe — do not go on the roof yourself. Place buckets or containers to catch water. Move valuables and electronics away from the affected area. Lay towels or plastic sheeting to protect flooring. If water is near electrical fittings, turn off the electricity at the consumer unit and call an electrician. Take photos of the damage from the ground and inside the property — this will support your insurance claim. If a chimney stack is at risk of falling and there is any chance of it hitting a person, evacuate that area of the house immediately.",
  },
  {
    q: "Can you provide a temporary fix overnight?",
    a: "Yes. Where a full permanent repair cannot be safely completed in one visit (for example, if a large area of roof needs stripping and re-laying, or if materials need to be ordered), we will apply a heavy-duty temporary covering — typically reinforced polythene sheeting or temporary repair membranes — to keep your property weathertight overnight or until we return to complete the job. We never leave a property in a condition where water ingress is likely to continue.",
  },
  {
    q: "What causes emergency roof damage in Somerset?",
    a: "The most common causes of emergency roof damage in Somerset are: windstorm — Somerset can experience significant gusts, particularly on the Quantock Hills and Exmoor, which can strip tiles and displace ridge and hip tiles; heavy rainfall causing sudden overloading of old and blocked drainage leading to water ingress; freeze-thaw — frozen water expanding in cracks can rapidly dislodge pointing and flashings; falling trees and branches; and impact from loose chimney components. The winter months of November to March account for the majority of our emergency call-outs.",
  },
  {
    q: "Do you cover all areas of Somerset for emergencies?",
    a: "Our regular locations are shown on the Service Areas page. For any other postcode, call 07587 478826 and we will confirm whether attendance is possible before making arrangements.",
  },
];

export default function EmergencyRoofingPage() {
  return (
    <>
      {/* ── Emergency Banner at very top ─────────────────────── */}
      <div className="bg-red-600 text-white text-center py-3 px-4">
        <p className="font-black text-sm uppercase tracking-wider flex items-center justify-center gap-3 flex-wrap">
          <AlertTriangle className="w-4 h-4 shrink-0" />
          Roofing Emergency? Call to Check Availability
          <a
            href="tel:07587478826"
            className="underline decoration-2 hover:text-red-200 transition-colors"
          >
            07587 478826
          </a>
          <AlertTriangle className="w-4 h-4 shrink-0" />
        </p>
      </div>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative bg-[#0d0d0d] text-white py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('/image1.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/90" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-red-600/90 text-white text-xs font-black uppercase tracking-[0.2em] px-4 py-2 mb-6">
              <AlertTriangle className="w-3.5 h-3.5" />
              Urgent Repair Enquiries &mdash; Somerset
              <AlertTriangle className="w-3.5 h-3.5" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-5 uppercase leading-none">
              Urgent Roof Repairs<br />
              <span className="text-[#f97316]">Across Our Service Areas</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-4">
              Storm damage, active leaks, fallen tiles &mdash; call ProLine now.
              Tell us your postcode and what has happened; we will confirm the safest next step and current attendance availability.
            </p>

            {/* Large phone CTA */}
            <div className="my-8">
              <a
                href="tel:07587478826"
                className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-black px-10 py-5 text-xl uppercase tracking-widest transition-all hover:scale-105 shadow-2xl shadow-red-900/50"
              >
                <Phone className="w-6 h-6" />
                CALL NOW: 07587 478826
              </a>
            </div>

            <p className="text-gray-400 text-sm mb-8">
              Or{" "}
              <Link href="/quote" className="text-[#f97316] hover:underline font-bold">
                request an urgent callback online
              </Link>{" "}
              and we will respond during staffed hours.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              {[
                "Timing Confirmed by Phone",
                "Listed Service Areas",
                "Temporary Sheeting Available",
                "Insurance Reports",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 border border-white/20"
                >
                  <CheckCircle className="w-4 h-4 text-[#f97316]" />
                  <span className="font-bold uppercase tracking-wider text-xs">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Trust bar */}
        <div className="relative max-w-7xl mx-auto px-4 mt-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
            {[
              { value: "Call", label: "Check Availability" },
              { value: "Safe", label: "Make-Safe Options" },
              { value: "Written", label: "Repair Quote" },
              { value: "Current", label: "Documents on Request" },
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

      {/* ── Urgent Phone CTA band ─────────────────────────────── */}
      <section className="bg-[#f97316] py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-white font-black text-xl uppercase tracking-tight">
              Active Roof Leak or Storm Damage?
            </p>
            <p className="text-orange-100 text-sm mt-1">
              Don&rsquo;t wait &mdash; every minute of active leaking causes more damage to your
              home. Call us now for immediate response.
            </p>
          </div>
          <a
            href="tel:07587478826"
            className="shrink-0 inline-flex items-center gap-2 bg-white text-[#f97316] font-black px-8 py-4 uppercase tracking-widest text-sm hover:bg-orange-50 transition-colors"
          >
            <Phone className="w-4 h-4" /> 07587 478826
          </a>
        </div>
      </section>

      {/* ── What Is an Emergency ──────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <AnimatedSection direction="left">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-1 max-w-[60px] h-px bg-[#f97316]" />
                <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
                  Emergency Roofing
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] uppercase tracking-tight mb-6">
                What Is a Roofing Emergency?
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  A roofing emergency is any situation where your roof covering has
                  been compromised, water is entering your property, or there is an
                  immediate danger to people or the structure. The key distinction
                  from a normal repair is urgency &mdash; waiting even a few hours for
                  a standard booking could result in thousands of pounds of additional
                  damage to ceilings, timbers, plaster and contents.
                </p>
                <p>
                  In Somerset, the most common roofing emergencies are storm related.
                  The South West regularly experiences named storms tracking in from
                  the Atlantic, and Somerset is exposed to wind and rain that can
                  strip tiles, displace ridge tiles and damage chimney stacks in a
                  matter of minutes. The morning after a storm is typically our busiest
                  period for emergency calls.
                </p>
                <p>
                  Not everything that feels urgent actually needs emergency attendance.
                  A loose tile that has not yet created an opening, minor cracked
                  pointing, or a slow drip at a known leak point during rain may be
                  serious and should be fixed promptly, but may not need a middle-of-the-night
                  response. If you are unsure, call us &mdash; we will give you honest advice
                  about whether to wait for daylight or require immediate action.
                </p>
                <p>
                  If there is any possibility of structural collapse, or water is
                  near electrical installations, treat the situation as an immediate
                  emergency and evacuate the affected area of the property.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 p-6">
                  <h3 className="font-black text-red-700 uppercase tracking-wide text-sm mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    Call Immediately For:
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Active water entering the building",
                      "Fallen chimney stack or large masonry",
                      "Large area of roof covering displaced",
                      "Visible hole or gap in the roof covering",
                      "Water near electrical fittings",
                      "Storm damage on commercial property",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-red-800">
                        <span className="text-red-500 shrink-0 mt-1 font-black">!</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="tel:07587478826"
                    className="mt-4 flex items-center justify-center gap-2 bg-red-600 text-white font-black px-6 py-3 uppercase tracking-widest text-sm hover:bg-red-700 transition-colors"
                  >
                    <Phone className="w-4 h-4" /> Call 07587 478826
                  </a>
                </div>
                <div className="bg-amber-50 border border-amber-200 p-6">
                  <h3 className="font-black text-amber-700 uppercase tracking-wide text-sm mb-3">
                    Schedule Urgently (Next Day):
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Single displaced or missing tile (no active leak)",
                      "Cracked ridge tile mortar",
                      "Sagging or blocked gutters",
                      "Failed flashing (no current rain forecast)",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-amber-800">
                        <span className="text-amber-500 shrink-0 mt-1 font-black">&#9679;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Our Emergency Services ────────────────────────────── */}
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
              Our Emergency Roofing Services
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm">
              ProLine provides the full range of emergency roofing services
              across Somerset, available 24 hours a day, 365 days a year.
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
              Why Call ProLine in an Emergency?
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

      {/* ── Second urgent phone CTA ───────────────────────────── */}
      <section className="bg-[#1a1a1a] border-y border-[#f97316]/30 py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-[#f97316] text-xs font-black uppercase tracking-[0.3em] mb-3">
              Do Not Wait — Call Now
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-4">
              Urgent Roof Repairs in Somerset
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Active water ingress can cause further damage. Call, describe the
              problem and we will confirm current attendance availability.
            </p>
            <a
              href="tel:07587478826"
              className="inline-flex items-center gap-3 bg-[#f97316] hover:bg-[#e8650f] text-white font-black px-10 py-5 text-xl uppercase tracking-widest transition-all hover:scale-105"
            >
              <Phone className="w-6 h-6" />
              07587 478826
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Pricing Guide ────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
                Pricing
              </span>
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-[#1a1a1a] uppercase tracking-tight mb-3">
              Emergency Roofing Costs
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              Indicative prices for emergency roofing work. We are always transparent
              about pricing before we attend.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                service: "Emergency Call-Out (daytime)",
                range: "£200 – £400",
                detail:
                  "Call-out and attendance charge for daytime emergency response. Repair costs are additional.",
              },
              {
                service: "Emergency Call-Out (out of hours)",
                range: "£350 – £600",
                detail:
                  "Out-of-hours, weekend and bank holiday call-out rate. Repair costs additional.",
              },
              {
                service: "Temporary Roof Sheeting",
                range: "£150 – £500",
                detail:
                  "Heavy-duty temporary covering to protect roof until permanent repairs are carried out.",
              },
              {
                service: "Emergency Tile / Slate Repairs",
                range: "£200 – £800",
                detail:
                  "Securing displaced tiles, replacing fallen slates, emergency re-pointing of ridge tiles.",
              },
              {
                service: "Emergency Chimney Stabilisation",
                range: "£300 – £1,200",
                detail:
                  "Making safe a displaced chimney pot or partially collapsed stack. Temporary supports if needed.",
              },
              {
                service: "Insurance Report & Documentation",
                range: "Included",
                detail:
                  "Photographic record and written condition report for insurance claim purposes — provided at no extra charge.",
              },
            ].map(({ service, range, detail }) => (
              <AnimatedSection key={service}>
                <div className="border border-gray-100 p-6 h-full hover:border-[#f97316]/40 transition-colors">
                  <div className="text-[#f97316] font-black text-xl mb-1">{range}</div>
                  <div className="text-[#1a1a1a] font-bold text-sm uppercase tracking-wide mb-3">
                    {service}
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{detail}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-10 text-center">
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              We always confirm pricing before attending. Out-of-hours emergency rates
              are typically recoverable from home insurance for storm and weather damage.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-t border-gray-100">
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
              Emergency Roofing Questions Answered
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
                Urgent Roofing Across Our Service Areas
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                We respond from our Taunton base. Attendance time varies by postcode,
                workload, traffic, weather and whether the roof can be accessed safely.
                We confirm availability and timing after assessing the problem by phone.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                We also respond to emergencies in parts of Devon, Dorset and Wiltshire
                close to the Somerset border. Call 07587 478826 to check availability
                for your location.
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
                <div className="bg-red-900/30 border border-red-500/40 p-6">
                  <h3 className="text-white font-black uppercase tracking-wide text-sm mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                    Storm Warning Active?
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    During named storm events and red weather warnings for Somerset,
                    demand for emergency roofing is very high. Save our number now
                    &mdash; 07587 478826 &mdash; so you can reach us immediately if your roof
                    is affected.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6">
                  <h3 className="text-white font-black uppercase tracking-wide text-sm mb-3">
                    Related Services
                  </h3>
                  <ul className="space-y-2">
                    {[
                      { label: "All Roofing Services", href: "/roofing" },
                      { label: "Emergency Roofer Taunton", href: "/emergency-roofer/taunton" },
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
        heading="Roofing Emergency? Call Now: 07587 478826"
        subtext="Call with your postcode and a description of the damage. We will confirm current availability and the safest next step."
      />
    </>
  );
}
