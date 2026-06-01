import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Phone,
  ArrowRight,
  Clock,
  Shield,
  AlertTriangle,
  CheckCircle,
  Zap,
  Star,
} from "lucide-react";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";
import {
  locations,
  getLocationBySlug,
  getAdjacentLocations,
} from "@/lib/locations";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return locations.map((loc) => ({ city: loc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const loc = getLocationBySlug(city);
  if (!loc) return {};
  return {
    title: `Emergency Roofer ${loc.name} 24/7 | ProLine Roofing & Solar`,
    description: `Emergency roofer in ${loc.name} available 24/7. Storm damage, active leaks, fallen tiles — we respond fast. Call NOW: 07587 478826`,
    alternates: {
      canonical: `https://www.prolineroofingandsolar.co.uk/emergency-roofer/${loc.slug}`,
    },
  };
}

const emergencyFaqs = (name: string, distance: string, driveTime: string) => [
  {
    q: `How quickly can you respond to a roofing emergency in ${name}?`,
    a: `We aim to reach ${name} within ${driveTime === "based here" ? "30 minutes" : driveTime} of your call for a genuine roofing emergency. Our Taunton base is ${distance} from ${name}, and we maintain 24/7 emergency availability every day of the year including bank holidays and Christmas.`,
  },
  {
    q: `Do you charge extra for emergency call-outs in ${name}?`,
    a: `Out-of-hours and weekend emergency call-outs may incur a premium over our standard daytime rates — we'll be transparent about this before attending. Our priority is always to make your property safe and weathertight as quickly as possible. We provide a full written quote for any subsequent repairs before starting work.`,
  },
  {
    q: `What should I do if my roof is leaking right now?`,
    a: `Call us immediately on 07587 478826 — we're available 24/7. While waiting for us to arrive: place buckets or towels to collect dripping water, move valuables away from the affected area, switch off any electrical circuits that may be at risk from water ingress, and if safe to do so, take photographs for insurance purposes. Do not attempt to get onto the roof yourself.`,
  },
  {
    q: `Will insurance cover emergency roof repairs?`,
    a: `Many home insurance policies cover emergency roof repairs caused by sudden events such as storm damage or falling debris. We provide a detailed written report and photographic evidence of damage to support your insurance claim. Always contact your insurer promptly and ask whether emergency make-safe costs are covered before work begins.`,
  },
  {
    q: `Do you provide emergency repairs on weekends and bank holidays?`,
    a: `Yes — our emergency service operates 24 hours a day, 7 days a week, 365 days a year. Roofing emergencies don't stick to business hours and neither do we. Call 07587 478826 at any time and you'll speak directly to a member of our team.`,
  },
];

export default async function EmergencyRooferCityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const locMaybe = getLocationBySlug(city);
  if (!locMaybe) notFound();
  const loc = locMaybe as NonNullable<typeof locMaybe>;

  const adjacent = getAdjacentLocations(city, 5);
  const faqs = emergencyFaqs(loc.name, loc.distanceFromTaunton, loc.driveTime);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: "ProLine Roofing & Solar",
    telephone: "07587478826",
    email: "admin@prolineroofingandsolar.co.uk",
    url: "https://www.prolineroofingandsolar.co.uk",
    openingHours: "Mo-Su 00:00-24:00",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Taunton",
      addressRegion: "Somerset",
      addressCountry: "GB",
    },
    areaServed: {
      "@type": "City",
      name: loc.name,
    },
    priceRange: "££",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      {/* ── URGENT CALL BAR ─────────────────────────────────── */}
      <div className="bg-[#f97316] py-3">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-white">
            <AlertTriangle className="w-5 h-5 animate-pulse shrink-0" />
            <span className="font-black text-sm uppercase tracking-wide">
              24/7 Emergency Roofing — Call Now
            </span>
          </div>
          <a
            href="tel:07587478826"
            className="inline-flex items-center gap-2 bg-white text-[#f97316] font-black px-6 py-2.5 uppercase tracking-widest text-sm hover:bg-orange-50 transition-colors"
          >
            <Phone className="w-4 h-4" /> 07587 478826
          </a>
        </div>
      </div>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative bg-[#111111] text-white py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('/image1.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/40 text-red-400 text-xs font-black uppercase tracking-widest px-4 py-2 mb-6">
              <AlertTriangle className="w-3.5 h-3.5" />
              Emergency Service — Available Right Now
            </div>
            <p className="text-[#f97316] text-xs font-black uppercase tracking-[0.25em] mb-4">
              24/7 Emergency Roofing — {loc.name.toUpperCase()}
            </p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-5 uppercase leading-none">
              24/7 Emergency Roofer in{" "}
              <span className="text-[#f97316]">{loc.name}</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6">
              {loc.emergencyNote}
            </p>
            <p className="text-gray-400 text-base max-w-xl mx-auto mb-8">
              Storm damage, active leaks, fallen tiles, chimney collapses — we
              respond fast, make your roof safe, and carry out proper repairs.
            </p>

            {/* BIG phone number */}
            <div className="mb-8">
              <a
                href="tel:07587478826"
                className="inline-flex flex-col items-center gap-1 bg-[#f97316] hover:bg-[#e8650f] text-white font-black px-10 py-6 uppercase tracking-widest transition-all hover:scale-105 group"
              >
                <span className="text-xs tracking-widest opacity-80">
                  Call Our Emergency Line Now
                </span>
                <span className="text-3xl md:text-4xl flex items-center gap-3">
                  <Phone className="w-8 h-8" />
                  07587 478826
                </span>
              </a>
            </div>

            <p className="text-gray-400 text-xs">
              Available 24 hours a day • 7 days a week • 365 days a year
            </p>
          </AnimatedSection>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
            {[
              { value: "24/7", label: "Always Available" },
              {
                value:
                  loc.driveTime === "based here" ? "< 30 min" : loc.driveTime,
                label: "Response Time",
              },
              { value: "30+", label: "Years Experience" },
              { value: "5 ★", label: "Google Rating" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="bg-white/5 backdrop-blur-sm text-center py-4 px-2"
              >
                <div className="text-2xl font-black text-[#f97316]">
                  {value}
                </div>
                <div className="text-gray-300 text-xs uppercase tracking-wider mt-1">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section B: What Constitutes a Roofing Emergency? ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
                When to Call
              </span>
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">
              What Constitutes a Roofing Emergency?
            </h2>
            <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">
              If in doubt, call us — we&apos;d rather you ring and find it&apos;s minor than
              leave significant damage to worsen overnight.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: AlertTriangle,
                title: "Active Water Ingress",
                desc: "Water actively entering through the roof or ceiling. This requires immediate attention to prevent structural damage and mould.",
                urgent: true,
              },
              {
                icon: Zap,
                title: "Storm Damage",
                desc: "Tiles or slates blown off, ridge tiles displaced, or sections of roofing uplifted by high winds. Leaves the structure exposed.",
                urgent: true,
              },
              {
                icon: AlertTriangle,
                title: "Fallen or Sliding Tiles",
                desc: "Tiles that have fallen or are visibly about to fall present a serious safety hazard to people below as well as a weather risk.",
                urgent: true,
              },
              {
                icon: AlertTriangle,
                title: "Chimney Collapse or Lean",
                desc: "A leaning, cracked or partially collapsed chimney stack is a structural emergency — do not enter rooms below until made safe.",
                urgent: true,
              },
              {
                icon: Shield,
                title: "Structural Roof Damage",
                desc: "Visible sagging, cracked rafters or significant deflection of the roof plane indicates structural compromise requiring urgent assessment.",
                urgent: true,
              },
              {
                icon: CheckCircle,
                title: "Gutters Overflowing Into Property",
                desc: "Overflowing gutters causing water to ingress through fascias or soffits can quickly damage ceilings, walls and electrics.",
                urgent: false,
              },
            ].map(({ icon: Icon, title, desc, urgent }, i) => (
              <AnimatedSection key={title} delay={i * 0.07}>
                <div
                  className={`p-6 h-full border-l-4 ${urgent ? "border-l-red-500 bg-red-50" : "border-l-[#f97316] bg-orange-50"}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Icon
                      className={`w-5 h-5 ${urgent ? "text-red-500" : "text-[#f97316]"} shrink-0`}
                    />
                    <h3 className="font-black text-[#1a1a1a] text-sm uppercase tracking-wide">
                      {title}
                    </h3>
                    {urgent && (
                      <span className="text-xs bg-red-500 text-white font-black px-2 py-0.5 ml-auto">
                        URGENT
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Mid-section phone CTA */}
          <AnimatedSection className="mt-12 text-center">
            <div className="bg-[#1a1a1a] p-8 max-w-2xl mx-auto">
              <p className="text-white font-black text-lg uppercase mb-2">
                Experiencing Any of the Above?
              </p>
              <p className="text-gray-400 text-sm mb-6">
                Don&apos;t wait — call us now on our 24/7 emergency line
              </p>
              <a
                href="tel:07587478826"
                className="inline-flex items-center gap-3 bg-[#f97316] hover:bg-[#e8650f] text-white font-black px-8 py-5 uppercase tracking-widest text-lg transition-all hover:scale-105"
              >
                <Phone className="w-6 h-6" />
                07587 478826
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Section C: Emergency Response Process ────────────── */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
                Our Response
              </span>
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">
              Our Emergency Response Process
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-0">
            {[
              {
                step: "01",
                title: "Call Us",
                desc: "Call 07587 478826 — available 24/7. Tell us your location and describe the damage. We'll assess urgency immediately.",
              },
              {
                step: "02",
                title: "We Dispatch",
                desc: "We dispatch the nearest available team member to your property as quickly as possible.",
              },
              {
                step: "03",
                title: "Immediate Make-Safe",
                desc: "On arrival we carry out emergency make-safe works — temporary covering, securing loose tiles, and preventing further ingress.",
              },
              {
                step: "04",
                title: "Repair Quote",
                desc: "We provide a full written assessment and fixed-price quote for the permanent repairs needed.",
              },
              {
                step: "05",
                title: "Full Repair",
                desc: "Permanent repairs carried out to the highest standard, with a written workmanship guarantee.",
              },
            ].map(({ step, title, desc }, i) => (
              <AnimatedSection key={step} delay={i * 0.1}>
                <div className="relative text-center p-8 border-l border-white/10 first:border-l-0">
                  <div className="w-14 h-14 bg-[#f97316] text-white font-black text-xl flex items-center justify-center mx-auto mb-5">
                    {step}
                  </div>
                  <h3 className="font-black text-white mb-2 uppercase tracking-wide text-sm">
                    {title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Second large phone CTA */}
          <AnimatedSection className="mt-14 text-center">
            <a
              href="tel:07587478826"
              className="inline-flex items-center gap-4 bg-[#f97316] hover:bg-[#e8650f] text-white font-black px-10 py-6 uppercase tracking-widest transition-all hover:scale-105 group"
            >
              <Phone className="w-7 h-7" />
              <span>
                <span className="block text-xs opacity-80 mb-0.5">
                  Call Our Emergency Line — Available Right Now
                </span>
                <span className="text-2xl md:text-3xl">07587 478826</span>
              </span>
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FAQs ────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
                FAQs
              </span>
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">
              Emergency Roofing Questions for {loc.name}
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="border border-gray-100 hover:border-[#f97316] transition-colors p-6">
                  <h3 className="font-black text-[#1a1a1a] text-sm mb-3 flex items-start gap-3">
                    <span className="text-[#f97316] shrink-0">Q.</span>
                    {faq.q}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Nearby Emergency Coverage ────────────────────────── */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-xl font-black text-[#1a1a1a] uppercase tracking-tight">
              Emergency Roofing Near {loc.name}
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              We respond to emergencies in all surrounding areas too
            </p>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {loc.nearbyAreas.map((area) => {
              const nearbyLoc = locations.find(
                (l) => l.name.toLowerCase() === area.toLowerCase()
              );
              return nearbyLoc ? (
                <Link
                  key={area}
                  href={`/emergency-roofer/${nearbyLoc.slug}`}
                  className="bg-white border border-gray-200 hover:border-[#f97316] hover:text-[#f97316] text-gray-700 font-semibold px-4 py-2 text-sm transition-all"
                >
                  Emergency Roofer {area}
                </Link>
              ) : (
                <span
                  key={area}
                  className="bg-white border border-gray-200 text-gray-700 px-4 py-2 text-sm font-semibold"
                >
                  {area}
                </span>
              );
            })}
          </div>

          {adjacent.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mt-6">
              {adjacent.map((adjLoc) => (
                <Link
                  key={adjLoc.slug}
                  href={`/emergency-roofer/${adjLoc.slug}`}
                  className="group border border-gray-200 hover:border-[#f97316] p-3 text-center transition-all bg-white"
                >
                  <p className="font-black text-[#1a1a1a] text-xs uppercase tracking-wide group-hover:text-[#f97316] transition-colors">
                    {adjLoc.name}
                  </p>
                  <p className="text-gray-400 text-xs mt-0.5">{adjLoc.county}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Final Emergency Banner ───────────────────────────── */}
      <section className="bg-[#f97316] py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AlertTriangle className="w-10 h-10 text-white mx-auto mb-4 animate-pulse" />
          <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-3">
            Emergency Roofer in {loc.name} — Call Now
          </h2>
          <p className="text-orange-100 text-sm mb-8 max-w-xl mx-auto">
            {loc.emergencyNote} Don&apos;t wait — every minute counts when water is
            entering your property.
          </p>
          <a
            href="tel:07587478826"
            className="inline-flex items-center gap-3 bg-white text-[#f97316] font-black px-10 py-6 uppercase tracking-widest text-xl hover:bg-orange-50 transition-colors hover:scale-105 group"
          >
            <Phone className="w-7 h-7" /> 07587 478826
          </a>
          <p className="text-orange-100 text-xs mt-4">
            24 hours a day • 7 days a week • 365 days a year
          </p>
        </div>
      </section>

      <CTASection
        heading={`Emergency or Planned Roofing in ${loc.name}`}
        subtext="Whether it's an emergency right now or a planned repair — ProLine is here. Call 07587 478826 or request a quote online."
      />
    </>
  );
}
