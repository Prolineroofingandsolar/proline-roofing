import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Phone,
  ArrowRight,
  MapPin,
  Star,
  CheckCircle,
  Shield,
  Clock,
  Wrench,
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
    title: `Roof Repair ${loc.name} | ProLine Roofing & Solar`,
    description: `Expert roof repair services in ${loc.name}. We fix leaks, replace tiles, repair chimneys and storm damage. Call 07587 478826 for a same-day survey.`,
    alternates: {
      canonical: `https://www.prolineroofingandsolar.co.uk/roof-repair/${loc.slug}`,
    },
  };
}

const repairServices = [
  {
    title: "Tile Repairs",
    desc: "Slipped, cracked or missing tiles replaced to match the existing roof.",
    icon: "🏗️",
  },
  {
    title: "Leak Detection",
    desc: "Expert diagnosis to find the true source of a roof leak — not just the symptom.",
    icon: "🔍",
  },
  {
    title: "Emergency Repairs",
    desc: "24/7 emergency call-out for active leaks, fallen tiles and storm damage.",
    icon: "⚡",
  },
  {
    title: "Storm Damage",
    desc: "Rapid assessment and repair following high winds, hail and severe weather.",
    icon: "🌩️",
  },
  {
    title: "Chimney Repairs",
    desc: "Repointing, flaunching, lead flashing and stack rebuilding.",
    icon: "🧱",
  },
  {
    title: "Flat Roof Repairs",
    desc: "Blistering, split seams and pooling water — all correctly diagnosed and fixed.",
    icon: "📐",
  },
  {
    title: "Gutter Repairs",
    desc: "Blocked, leaking or sagging gutters and downpipes repaired or replaced.",
    icon: "🌧️",
  },
  {
    title: "Leadwork",
    desc: "Failed lead valleys, flashings and soakers re-dressed or replaced.",
    icon: "⚒️",
  },
];

const repairFaqs = (name: string) => [
  {
    q: `How much does a roof repair cost in ${name}?`,
    a: `Roof repair costs in ${name} vary depending on the nature and extent of the problem. Minor repairs such as replacing a few slipped tiles typically start from around £150–£300. More complex work — re-ridging, valley leadwork, flat roof sections or chimney repairs — is quoted individually after a free survey. We always provide a written, fixed-price quote before starting any work.`,
  },
  {
    q: `How quickly can you come out for a repair in ${name}?`,
    a: `We aim to offer same-day or next-day surveys for roof repairs in ${name} wherever possible. For active leaks or storm damage, we provide 24/7 emergency attendance. Call us on 07587 478826 and we'll assess the urgency and schedule accordingly.`,
  },
  {
    q: `Do you offer emergency roof repairs in ${name}?`,
    a: `Yes — we provide genuine 24/7 emergency roof repairs. If you have active water ingress, fallen tiles, or visible structural damage, call us immediately on 07587 478826. We'll discuss the situation, advise on immediate protective measures, and arrange attendance as quickly as possible.`,
  },
  {
    q: `What are the most common roof problems in ${name}?`,
    a: `The most common roof repair issues we encounter in ${name} are slipped or cracked roof tiles and slates, failed ridge and hip mortar, deteriorated lead flashings at chimneys and abutments, blocked or leaking gutters, and flat roof blistering or seam failure. Most of these are straightforward to repair when caught early — which is why we recommend a periodic professional inspection.`,
  },
  {
    q: `Do you provide a guarantee on roof repairs?`,
    a: `Yes. All our repair work comes with a written workmanship guarantee. The duration depends on the nature of the repair — minor tile work is typically guaranteed for 3 years, while larger repairs and new flat roofing are guaranteed for 10+ years. We'll confirm the specific guarantee terms in your written quote.`,
  },
];

export default async function RoofRepairCityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const locMaybe = getLocationBySlug(city);
  if (!locMaybe) notFound();
  const loc = locMaybe as NonNullable<typeof locMaybe>;

  const adjacent = getAdjacentLocations(city, 5);
  const faqs = repairFaqs(loc.name);

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

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative bg-[#111111] text-white py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/image1.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/85" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-[#f97316] text-xs font-black uppercase tracking-[0.25em] mb-4">
              Roof Repairs — {loc.name.toUpperCase()}
            </p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-5 uppercase leading-none">
              Roof Repair Specialists in{" "}
              <span className="text-[#f97316]">{loc.name}</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              {loc.intro}
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

        <div className="relative max-w-7xl mx-auto px-4 mt-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
            {[
              { value: "30+", label: "Years Experience" },
              { value: "Same Day", label: "Survey Available" },
              { value: "5 ★", label: "Google Rating" },
              { value: "24/7", label: "Emergency Cover" },
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

      {/* ── Section B: Roof Repair Services in [City] ────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="mb-10">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-16 h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
                Local Service
              </span>
            </div>
            <h2 className="text-3xl font-black text-[#1a1a1a] uppercase tracking-tight mb-4">
              Roof Repair Services in {loc.name}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              We carry out all types of roof repair work across {loc.name} and the
              surrounding {loc.postcodePrefix} area, including{" "}
              {loc.nearbyAreas.join(", ")}.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {loc.roofingNote}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {repairServices.map(({ title, desc, icon }, i) => (
              <AnimatedSection key={title} delay={i * 0.07}>
                <div className="group border border-gray-100 hover:border-[#f97316] hover:shadow-md p-6 transition-all duration-300 h-full">
                  <span className="text-2xl block mb-3">{icon}</span>
                  <h3 className="font-black text-[#1a1a1a] text-sm uppercase tracking-wide mb-2 group-hover:text-[#f97316] transition-colors">
                    {title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#e8650f] text-white font-black px-8 py-4 uppercase tracking-widest text-sm transition-all hover:scale-105"
              >
                Get a Repair Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/roofing"
                className="inline-flex items-center gap-2 border-2 border-[#1a1a1a] text-[#1a1a1a] font-black text-sm uppercase tracking-widest px-6 py-3 hover:bg-[#1a1a1a] hover:text-white transition-all"
              >
                All Roofing Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Section D: Why Choose ProLine for Repairs ────────── */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
                Why ProLine
              </span>
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">
              Why Choose ProLine for Roof Repairs in {loc.name}?
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {[
              {
                icon: Wrench,
                title: "Expert Diagnosis",
                desc: "We find the true cause of a roof problem — not just apply a temporary patch that fails again next winter.",
              },
              {
                icon: Shield,
                title: "Written Guarantee",
                desc: "Every repair is backed by a written workmanship guarantee so you have recourse if anything is not right.",
              },
              {
                icon: Clock,
                title: "Fast Response",
                desc: `Just ${loc.distanceFromTaunton} from ${loc.name} — we offer same-day emergency attendance and next-day surveys.`,
              },
              {
                icon: CheckCircle,
                title: "No Hidden Costs",
                desc: "We agree a fixed price in writing before work starts. No surprises, no extras.",
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 0.08}>
                <div className="group p-7 border border-white/10 hover:border-[#f97316] transition-all duration-300 h-full">
                  <div className="w-11 h-11 bg-[#f97316]/20 group-hover:bg-[#f97316] flex items-center justify-center mb-4 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#f97316] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-black text-white mb-2 text-sm uppercase tracking-wide">
                    {title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Testimonial */}
          <AnimatedSection>
            <div className="border border-white/10 border-l-4 border-l-[#f97316] p-8 max-w-3xl mx-auto">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#f97316] text-[#f97316]"
                  />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed italic mb-4">
                &ldquo;{loc.testimonial.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-black text-white text-sm">
                    — {loc.testimonial.name}
                  </p>
                  <p className="text-gray-500 text-xs mt-0.5">
                    {loc.testimonial.suburb}
                  </p>
                </div>
                <span className="text-xs bg-[#f97316]/20 text-[#f97316] font-bold px-3 py-1">
                  {loc.testimonial.service}
                </span>
              </div>
            </div>
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
              Roof Repair Questions for {loc.name}
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

      {/* ── Nearby Areas ────────────────────────────────────── */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-xl font-black text-[#1a1a1a] uppercase tracking-tight">
              Roof Repair Services Near {loc.name}
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              We also cover these nearby areas
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
                  href={`/roof-repair/${nearbyLoc.slug}`}
                  className="bg-white border border-gray-200 hover:border-[#f97316] hover:text-[#f97316] text-gray-700 font-semibold px-4 py-2 text-sm transition-all"
                >
                  Roof Repair {area}
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
                  href={`/roof-repair/${adjLoc.slug}`}
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

          <div className="text-center mt-8">
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 text-[#f97316] font-bold text-sm"
            >
              View full coverage area <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Emergency Banner ─────────────────────────────────── */}
      <section className="bg-[#f97316] py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <p className="text-white font-black text-xl uppercase tracking-tight">
              Emergency Roof Repair in {loc.name}?
            </p>
            <p className="text-orange-100 text-sm mt-1 max-w-xl">
              {loc.emergencyNote}
            </p>
          </div>
          <a
            href="tel:07587478826"
            className="shrink-0 inline-flex items-center gap-2 bg-white text-[#f97316] font-black px-7 py-4 uppercase tracking-widest text-sm hover:bg-orange-50 transition-colors"
          >
            <Phone className="w-4 h-4" /> Call Now: 07587 478826
          </a>
        </div>
      </section>

      <CTASection
        heading={`Roof Repair Quote in ${loc.name}`}
        subtext={`Contact ProLine for a free, no-obligation roof repair survey anywhere in the ${loc.postcodePrefix} area. We'll find the problem and fix it properly.`}
      />
    </>
  );
}
