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
  Award,
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
    title: `Roofer ${loc.name} | ProLine Roofing & Solar`,
    description: `Looking for a trusted roofer in ${loc.name}, ${loc.county}? ProLine Roofing & Solar provides expert roofing services. Call 07587 478826 for a free quote today.`,
    alternates: {
      canonical: `https://www.prolineroofingandsolar.co.uk/roofer/${loc.slug}`,
    },
  };
}

const serviceLinks = [
  { title: "New Roofs", href: "/services/new-roofs", icon: "🏠" },
  { title: "Roof Repairs", href: "/services/roof-repairs", icon: "🔧" },
  { title: "Flat Roofing", href: "/services/flat-roofing", icon: "📐" },
  { title: "Slate Roofing", href: "/services/slate-roofing", icon: "🪨" },
  { title: "Tile Roofing", href: "/services/tile-roofing", icon: "🏗️" },
  { title: "Chimney Repairs", href: "/services/chimney-repairs", icon: "🧱" },
  { title: "Leadwork", href: "/services/leadwork", icon: "⚒️" },
  { title: "Fascias & Guttering", href: "/services/fascias-guttering", icon: "🌧️" },
];

export default async function RooferCityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const locMaybe = getLocationBySlug(city);
  if (!locMaybe) notFound();
  const loc = locMaybe as NonNullable<typeof locMaybe>;

  const adjacent = getAdjacentLocations(city, 5);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: loc.faqs.map((faq) => ({
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
    image: "https://www.prolineroofingandsolar.co.uk/image1.jpeg",
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
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        name: loc.name,
      },
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

      {/* ── Section A: Hero ──────────────────────────────────── */}
      <section className="relative bg-[#111111] text-white py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/image1.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/85" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-[#f97316] text-xs font-black uppercase tracking-[0.25em] mb-4">
              Roofing Services — {loc.name.toUpperCase()}
            </p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-5 uppercase leading-none">
              Your Local Roofer in{" "}
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

        {/* Trust bar */}
        <div className="relative max-w-7xl mx-auto px-4 mt-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
            {[
              { value: "30+", label: "Years Experience" },
              { value: "1,000+", label: "Roofs Completed" },
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

      {/* ── Section B: About This Area ───────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="mb-10">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-16 h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
                Local Coverage
              </span>
            </div>
            <h2 className="text-3xl font-black text-[#1a1a1a] uppercase tracking-tight mb-4">
              Serving {loc.name} &amp; Surrounding Areas
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              We regularly work across{" "}
              {loc.nearbyAreas.join(", ")} and the wider{" "}
              {loc.postcodePrefix} postcode area.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {loc.roofingNote}
            </p>
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 text-[#f97316] font-bold text-sm hover:gap-3 transition-all"
            >
              View full coverage map <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <AnimatedSection>
              <h3 className="font-black text-[#1a1a1a] uppercase tracking-wide text-sm mb-4">
                Local Landmarks We Work Near
              </h3>
              <ul className="space-y-3">
                {loc.landmarks.map((landmark) => (
                  <li
                    key={landmark}
                    className="flex items-center gap-3 text-sm text-gray-600"
                  >
                    <MapPin className="w-4 h-4 text-[#f97316] shrink-0" />
                    {landmark}
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-gray-50 border border-gray-100 p-6">
                <h3 className="font-black text-[#1a1a1a] uppercase tracking-wide text-sm mb-3">
                  Distance from Taunton HQ
                </h3>
                <div className="flex items-center gap-6">
                  <div>
                    <p className="text-2xl font-black text-[#f97316]">
                      {loc.distanceFromTaunton}
                    </p>
                    <p className="text-gray-400 text-xs uppercase tracking-wider">
                      Distance
                    </p>
                  </div>
                  {loc.driveTime !== "based here" && (
                    <div>
                      <p className="text-2xl font-black text-[#f97316]">
                        {loc.driveTime}
                      </p>
                      <p className="text-gray-400 text-xs uppercase tracking-wider">
                        Drive time
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Section C: Our Roofing Services ─────────────────── */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
                What We Offer
              </span>
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">
              Our Roofing Services in {loc.name}
            </h2>
            <p className="text-gray-400 text-sm mt-3 max-w-xl mx-auto">
              From emergency repairs to complete roof replacements — we cover
              everything your roof needs.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {serviceLinks.map(({ title, href, icon }, i) => (
              <AnimatedSection key={title} delay={i * 0.07}>
                <Link
                  href={href}
                  className="group border border-white/10 hover:border-[#f97316] p-5 flex flex-col items-center text-center transition-all duration-300 h-full"
                >
                  <span className="text-2xl mb-3">{icon}</span>
                  <span className="text-white font-black text-xs uppercase tracking-wide group-hover:text-[#f97316] transition-colors">
                    {title}
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center">
            <Link
              href="/roofing"
              className="inline-flex items-center gap-2 border-2 border-[#f97316] text-[#f97316] font-black text-sm uppercase tracking-widest px-6 py-3 hover:bg-[#f97316] hover:text-white transition-all"
            >
              View All Roofing Services <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Section D: Why Choose ProLine ──────────────────── */}
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
              Why Choose ProLine in {loc.name}?
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {[
              {
                icon: MapPin,
                title: "Local Knowledge",
                desc: `Based in Taunton, just ${loc.distanceFromTaunton} from ${loc.name}. We know the local building styles, common issues and planning requirements.`,
              },
              {
                icon: Shield,
                title: "Fully Insured",
                desc: "Full public liability insurance and written workmanship guarantees on every job, giving you complete peace of mind.",
              },
              {
                icon: Star,
                title: "5-Star Rated",
                desc: "Hundreds of verified 5-star Google reviews from customers across Somerset and the South West.",
              },
              {
                icon: Clock,
                title: "24/7 Emergency Cover",
                desc: "Storm damage or active leak? We're available around the clock for genuine roofing emergencies.",
              },
            ].map(({ icon: Icon, title, desc }, i) => (
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

          {/* Testimonial */}
          <AnimatedSection>
            <div className="border-l-4 border-[#f97316] bg-gray-50 p-8 max-w-3xl mx-auto">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#f97316] text-[#f97316]"
                  />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed italic mb-4">
                &ldquo;{loc.testimonial.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-black text-[#1a1a1a] text-sm">
                    — {loc.testimonial.name}
                  </p>
                  <p className="text-gray-400 text-xs mt-0.5">
                    {loc.testimonial.suburb}
                  </p>
                </div>
                <span className="text-xs bg-orange-50 text-[#f97316] font-bold px-3 py-1">
                  {loc.testimonial.service}
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Section E: FAQs ─────────────────────────────────── */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
                FAQs
              </span>
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">
              Common Questions About Roofing in {loc.name}
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {loc.faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="border border-white/10 p-6">
                  <h3 className="font-black text-white text-sm mb-3 flex items-start gap-3">
                    <span className="text-[#f97316] shrink-0">Q.</span>
                    {faq.q}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section F: Nearby Areas We Cover ────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-10">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
                Coverage
              </span>
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">
              Areas We Also Cover Near {loc.name}
            </h2>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {loc.nearbyAreas.map((area) => {
              const nearbyLoc = locations.find(
                (l) =>
                  l.name.toLowerCase() === area.toLowerCase() ||
                  l.nearbyAreas
                    .map((n) => n.toLowerCase())
                    .includes(area.toLowerCase())
              );
              return nearbyLoc ? (
                <Link
                  key={area}
                  href={`/roofer/${nearbyLoc.slug}`}
                  className="bg-gray-50 border border-gray-200 hover:border-[#f97316] hover:text-[#f97316] text-gray-700 font-semibold px-4 py-2 text-sm transition-all"
                >
                  {area}
                </Link>
              ) : (
                <span
                  key={area}
                  className="bg-gray-50 border border-gray-200 text-gray-700 px-4 py-2 text-sm font-semibold"
                >
                  {area}
                </span>
              );
            })}
          </div>

          <div className="text-center mt-4">
            <p className="text-gray-500 text-sm mb-4">
              We also serve many other towns and villages across the South West.
            </p>
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 text-[#f97316] font-bold text-sm hover:gap-3 transition-all"
            >
              View our full coverage area <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {adjacent.length > 0 && (
            <div className="mt-12 pt-10 border-t border-gray-100">
              <h3 className="font-black text-[#1a1a1a] text-sm uppercase tracking-wide text-center mb-6">
                Other Areas We Serve
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {adjacent.map((adjLoc) => (
                  <Link
                    key={adjLoc.slug}
                    href={`/roofer/${adjLoc.slug}`}
                    className="group border border-gray-100 hover:border-[#f97316] p-4 text-center transition-all"
                  >
                    <p className="font-black text-[#1a1a1a] text-xs uppercase tracking-wide group-hover:text-[#f97316] transition-colors">
                      {adjLoc.name}
                    </p>
                    <p className="text-gray-400 text-xs mt-0.5">
                      {adjLoc.county}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Section G: Emergency Banner ──────────────────────── */}
      <section className="bg-[#f97316] py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <p className="text-white font-black text-xl uppercase tracking-tight">
              Emergency Roofer in {loc.name}?
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
        heading={`Get a Free Roofing Quote in ${loc.name}`}
        subtext={`Contact ProLine today for a free, no-obligation survey and quote anywhere in the ${loc.postcodePrefix} postcode area.`}
      />
    </>
  );
}
