import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Clock, Phone } from "lucide-react";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";
import { locations } from "@/lib/locations";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Roofing & Solar Services Across Somerset & the South West | ProLine",
  description:
    "ProLine Roofing & Solar covers Taunton, Bridgwater, Bath, Weston-super-Mare, Bristol, Exeter, Yeovil, Wellington, Burnham-on-Sea and Glastonbury. Find your nearest service area.",
  alternates: {
    canonical: "https://www.prolineroofingandsolar.co.uk/locations",
  },
};

const somersetLocations = locations.filter(
  (loc) =>
    loc.county === "Somerset" || loc.county === "Somerset / BANES"
);
const bristolLocation = locations.filter((loc) => loc.county === "Bristol");
const devonLocations = locations.filter((loc) => loc.county === "Devon");
const bathLocations = locations.filter((loc) =>
  loc.county.includes("BANES")
);

// Group for display: Somerset (excl Bath), North Somerset, Bristol, Devon, Bath
const locationGroups = [
  {
    region: "Somerset",
    tagline: "Our home county — we know every rooftop",
    locations: locations.filter(
      (loc) =>
        (loc.county === "Somerset" || loc.county === "North Somerset") &&
        !loc.county.includes("BANES")
    ),
  },
  {
    region: "Bristol & Bath",
    tagline: "Heritage roofing specialists for the city and spa city",
    locations: locations.filter(
      (loc) => loc.county === "Bristol" || loc.county.includes("BANES")
    ),
  },
  {
    region: "Devon",
    tagline: "Covering the South West down into Devon",
    locations: locations.filter((loc) => loc.county === "Devon"),
  },
];

export default function LocationsPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative bg-[#111111] text-white py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/image1.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/85" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-[#f97316] text-xs font-black uppercase tracking-[0.25em] mb-4">
              Service Coverage
            </p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-5 uppercase leading-none">
              Areas <span className="text-[#f97316]">We Cover</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              Based in Taunton, Somerset — ProLine Roofing &amp; Solar serves
              customers across Somerset, North Somerset, Bristol, Bath and
              Devon. Find your area below.
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

        <div className="relative max-w-7xl mx-auto px-4 mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
            {[
              { value: "10+", label: "Service Areas" },
              { value: "50 mi", label: "Coverage Radius" },
              { value: "30+", label: "Years Experience" },
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

      {/* ── All Locations Grid ──────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
                All Service Areas
              </span>
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">
              Find Your Area
            </h2>
            <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">
              Click any location to view roofing and solar services available
              in your area.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc, i) => (
              <AnimatedSection key={loc.slug} delay={i * 0.05}>
                <div className="group border border-gray-100 hover:border-[#f97316] hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="p-6 flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-black text-[#1a1a1a] text-lg group-hover:text-[#f97316] transition-colors">
                          {loc.name}
                        </h3>
                        <p className="text-gray-400 text-xs mt-0.5 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {loc.county} &bull; {loc.postcodePrefix}
                        </p>
                      </div>
                      {loc.driveTime !== "based here" ? (
                        <div className="text-right shrink-0 ml-3">
                          <p className="text-[#f97316] font-black text-sm">
                            {loc.distanceFromTaunton}
                          </p>
                          <p className="text-gray-400 text-xs flex items-center gap-1 justify-end">
                            <Clock className="w-3 h-3" />
                            {loc.driveTime}
                          </p>
                        </div>
                      ) : (
                        <span className="text-xs bg-[#f97316] text-white font-bold px-2.5 py-1 shrink-0 ml-3">
                          HQ
                        </span>
                      )}
                    </div>

                    <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">
                      {loc.roofingNote}
                    </p>

                    <div className="mb-4">
                      <p className="text-xs font-black text-gray-400 uppercase tracking-wider mb-2">
                        Also covering:
                      </p>
                      <p className="text-gray-500 text-xs">
                        {loc.nearbyAreas.slice(0, 3).join(", ")}
                        {loc.nearbyAreas.length > 3 && " & more"}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 p-4 bg-gray-50 group-hover:bg-orange-50 transition-colors">
                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        href={`/roofer/${loc.slug}`}
                        className="text-center text-xs font-black text-[#1a1a1a] hover:text-[#f97316] py-2 border border-gray-200 hover:border-[#f97316] transition-all"
                      >
                        Roofing
                      </Link>
                      <Link
                        href={`/solar-panels/${loc.slug}`}
                        className="text-center text-xs font-black text-[#1a1a1a] hover:text-[#f97316] py-2 border border-gray-200 hover:border-[#f97316] transition-all"
                      >
                        Solar Panels
                      </Link>
                      <Link
                        href={`/roof-repair/${loc.slug}`}
                        className="text-center text-xs font-black text-[#1a1a1a] hover:text-[#f97316] py-2 border border-gray-200 hover:border-[#f97316] transition-all"
                      >
                        Roof Repairs
                      </Link>
                      <Link
                        href={`/emergency-roofer/${loc.slug}`}
                        className="text-center text-xs font-black text-red-600 hover:text-white hover:bg-red-600 py-2 border border-red-200 hover:border-red-600 transition-all"
                      >
                        Emergency
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── By Region ─────────────────────────────────────────── */}
      {locationGroups.map((group) =>
        group.locations.length > 0 ? (
          <section key={group.region} className="py-16 bg-[#1a1a1a]">
            <div className="max-w-7xl mx-auto px-4">
              <AnimatedSection className="mb-10">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-px bg-[#f97316]" />
                  <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
                    {group.region}
                  </span>
                </div>
                <h2 className="text-2xl font-black text-white uppercase tracking-tight">
                  {group.region}
                </h2>
                <p className="text-gray-400 text-sm mt-1">{group.tagline}</p>
              </AnimatedSection>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.locations.map((loc, i) => (
                  <AnimatedSection key={loc.slug} delay={i * 0.07}>
                    <div className="border border-white/10 hover:border-[#f97316] p-5 transition-all group">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-black text-white text-sm uppercase tracking-wide group-hover:text-[#f97316] transition-colors">
                          {loc.name}
                        </h3>
                        <span className="text-xs text-gray-500">
                          {loc.postcodePrefix}
                        </span>
                      </div>
                      <p className="text-gray-400 text-xs leading-relaxed mb-4 line-clamp-2">
                        {loc.intro.split(".")[0]}.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Link
                          href={`/roofer/${loc.slug}`}
                          className="text-xs font-bold text-[#f97316] hover:underline flex items-center gap-1"
                        >
                          Roofer <ArrowRight className="w-3 h-3" />
                        </Link>
                        <span className="text-gray-600">|</span>
                        <Link
                          href={`/solar-panels/${loc.slug}`}
                          className="text-xs font-bold text-[#f97316] hover:underline flex items-center gap-1"
                        >
                          Solar <ArrowRight className="w-3 h-3" />
                        </Link>
                        <span className="text-gray-600">|</span>
                        <Link
                          href={`/emergency-roofer/${loc.slug}`}
                          className="text-xs font-bold text-[#f97316] hover:underline flex items-center gap-1"
                        >
                          Emergency <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        ) : null
      )}

      {/* ── Popular Service + Location Links ─────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
                Popular Services
              </span>
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">
              Popular Service + Location Combinations
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Roofing */}
            <AnimatedSection>
              <h3 className="font-black text-[#1a1a1a] text-sm uppercase tracking-wide mb-4 pb-3 border-b border-gray-100 flex items-center gap-2">
                <span className="w-4 h-4 bg-[#f97316] inline-block" />
                Roofer Near Me
              </h3>
              <ul className="space-y-2">
                {locations.map((loc) => (
                  <li key={loc.slug}>
                    <Link
                      href={`/roofer/${loc.slug}`}
                      className="text-sm text-gray-600 hover:text-[#f97316] transition-colors flex items-center gap-2"
                    >
                      <ArrowRight className="w-3 h-3 text-[#f97316] shrink-0" />
                      Roofer {loc.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            {/* Roof Repair */}
            <AnimatedSection delay={0.1}>
              <h3 className="font-black text-[#1a1a1a] text-sm uppercase tracking-wide mb-4 pb-3 border-b border-gray-100 flex items-center gap-2">
                <span className="w-4 h-4 bg-[#f97316] inline-block" />
                Roof Repair
              </h3>
              <ul className="space-y-2">
                {locations.map((loc) => (
                  <li key={loc.slug}>
                    <Link
                      href={`/roof-repair/${loc.slug}`}
                      className="text-sm text-gray-600 hover:text-[#f97316] transition-colors flex items-center gap-2"
                    >
                      <ArrowRight className="w-3 h-3 text-[#f97316] shrink-0" />
                      Roof Repair {loc.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            {/* Solar Panels */}
            <AnimatedSection delay={0.2}>
              <h3 className="font-black text-[#1a1a1a] text-sm uppercase tracking-wide mb-4 pb-3 border-b border-gray-100 flex items-center gap-2">
                <span className="w-4 h-4 bg-[#f97316] inline-block" />
                Solar Panels
              </h3>
              <ul className="space-y-2">
                {locations.map((loc) => (
                  <li key={loc.slug}>
                    <Link
                      href={`/solar-panels/${loc.slug}`}
                      className="text-sm text-gray-600 hover:text-[#f97316] transition-colors flex items-center gap-2"
                    >
                      <ArrowRight className="w-3 h-3 text-[#f97316] shrink-0" />
                      Solar Panels {loc.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>

          {/* Emergency links */}
          <AnimatedSection className="mt-12 pt-10 border-t border-gray-100">
            <h3 className="font-black text-[#1a1a1a] text-sm uppercase tracking-wide mb-4 flex items-center gap-2">
              <span className="w-4 h-4 bg-red-600 inline-block" />
              Emergency Roofer
            </h3>
            <div className="flex flex-wrap gap-3">
              {locations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/emergency-roofer/${loc.slug}`}
                  className="text-sm text-gray-600 hover:text-[#f97316] transition-colors border border-gray-100 hover:border-[#f97316] px-3 py-1.5 flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-red-500 shrink-0" />
                  Emergency Roofer {loc.name}
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Not on the list? ────────────────────────────────── */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <MapPin className="w-8 h-8 text-[#f97316] mx-auto mb-4" />
            <h2 className="text-2xl font-black text-[#1a1a1a] uppercase tracking-tight mb-3">
              Not Sure If We Cover Your Area?
            </h2>
            <p className="text-gray-500 text-sm mb-6 max-w-lg mx-auto">
              We cover a wide radius from our Taunton base and may well travel
              to your location for larger projects. Give us a call or drop us a
              message and we&apos;ll let you know.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:07587478826"
                className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white font-black px-6 py-4 uppercase tracking-widest text-sm hover:bg-[#2a2a2a] transition-colors"
              >
                <Phone className="w-4 h-4" /> Call Us: 07587 478826
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#e8650f] text-white font-black px-6 py-4 uppercase tracking-widest text-sm transition-all"
              >
                Send a Message <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        heading="Ready to Get Started?"
        subtext="Contact ProLine Roofing & Solar for a free, no-obligation quote anywhere across our Somerset and South West service area."
      />
    </>
  );
}
