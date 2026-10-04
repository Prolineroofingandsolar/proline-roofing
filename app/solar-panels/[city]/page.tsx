import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Phone,
  ArrowRight,
  MapPin,
  Star,
  Shield,
  Award,
  ChevronDown,
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
    title: `Solar Panels ${loc.name}`,
    description: `Solar panel installation enquiries in ${loc.name}, ${loc.county}. Request a roof and energy-use survey with a written system proposal.`,
    alternates: {
      canonical: `https://www.prolineroofingandsolar.co.uk/solar-panels/${loc.slug}`,
    },
  };
}

const solarServices = [
  {
    title: "Solar PV Systems",
    desc: "A written layout and output estimate based on the roof, shading and electricity use.",
    icon: "☀️",
  },
  {
    title: "Battery Storage",
    desc: "Storage options assessed against consumption, tariff, usable capacity and expected lifetime.",
    icon: "🔋",
  },
  {
    title: "Solar Monitoring",
    desc: "Compatible monitoring options explained and configured as part of handover.",
    icon: "📱",
  },
  {
    title: "EV Charging Integration",
    desc: "Assess solar-aware charging, cable routes, supply capacity and load management.",
    icon: "⚡",
  },
];

const solarFaqs = (name: string) => [
  {
    q: `How much do solar panels cost in ${name}?`,
    a: `The cost depends on designed capacity, equipment, roof access, scaffolding, electrical work and whether battery storage is included. We provide a dated, written proposal after surveying the property and reviewing its electricity use.`,
  },
  {
    q: `How much can I save on energy bills in ${name}?`,
    a: `Savings cannot be predicted reliably from the town alone. They depend on the final design, roof orientation, shading, household consumption, self-consumption, tariff and export rate. A proposal should show its assumptions and a property-specific estimate rather than promise a fixed saving.`,
  },
  {
    q: `Are there solar grants available in ${name}?`,
    a: `Export tariffs and support schemes change. Check current eligibility with GOV.UK, Ofgem, the scheme administrator and your chosen energy supplier before making a financial decision. We can identify the assumptions used in your proposal but cannot guarantee scheme eligibility.`,
  },
  {
    q: `How long does solar panel installation take?`,
    a: `Physical installation time depends on the array, roof access and electrical work. Grid approval, scaffolding, planning and certification can extend the overall programme. Your proposal should state the expected sequence, responsibilities and handover documents.`,
  },
  {
    q: `Do I need planning permission for solar panels in ${name}?`,
    a: `Many domestic roof installations can be permitted development, but limits and exceptions apply, especially for listed buildings, conservation areas, flats and ground-mounted systems. Check the current Planning Portal guidance and obtain a decision from the relevant planning authority where required.`,
  },
];

export default async function SolarPanelsCityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const locMaybe = getLocationBySlug(city);
  if (!locMaybe) notFound();
  const loc = locMaybe as NonNullable<typeof locMaybe>;

  const adjacent = getAdjacentLocations(city, 5);
  const faqs = solarFaqs(loc.name);

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
    "@type": "LocalBusiness",
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
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url('/UK_MKT_PHO_REF_Solar_Grasmere_002.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/85" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-[#f97316] text-xs font-black uppercase tracking-[0.25em] mb-4">
              Solar Panel Installation — {loc.name.toUpperCase()}
            </p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-5 uppercase leading-none">
              Solar Panel Installation in{" "}
              <span className="text-[#f97316]">{loc.name}</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-3">
              {loc.solarNote}
            </p>
            <p className="text-gray-400 text-base max-w-2xl mx-auto mb-8">
              Solar PV, battery storage and EV charging designed around your
              roof, electricity use and project requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#e8650f] text-white font-black px-8 py-4 uppercase tracking-widest text-sm transition-all hover:scale-105"
              >
                Get a Free Survey <ArrowRight className="w-4 h-4" />
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
              { value: "Free", label: "Initial Survey" },
              { value: "Written", label: "System Proposal" },
              { value: "Modelled", label: "Output Estimate" },
              { value: "Clear", label: "Warranty Terms" },
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

      {/* ── Solar Services ────────────────────────────────────── */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
                Our Services
              </span>
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">
              Solar Services in {loc.name}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {solarServices.map(({ title, desc, icon }, i) => (
              <AnimatedSection key={title} delay={i * 0.07}>
                <div className="group border border-white/10 hover:border-[#f97316] p-5 transition-all duration-300 h-full">
                  <span className="text-2xl block mb-3">{icon}</span>
                  <h3 className="text-white font-black text-xs uppercase tracking-wide mb-2 group-hover:text-[#f97316] transition-colors">
                    {title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center">
            <Link
              href="/solar"
              className="inline-flex items-center gap-2 border-2 border-[#f97316] text-[#f97316] font-black text-sm uppercase tracking-widest px-6 py-3 hover:bg-[#f97316] hover:text-white transition-all"
            >
              View Full Solar Services <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Why Choose ProLine Solar ─────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
                Why ProLine Solar
              </span>
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">
              Why Choose ProLine for Solar in {loc.name}?
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {[
              {
                icon: Award,
                title: "Certification in Writing",
                desc: "The proposal should identify the certification route and the documents supplied at handover.",
              },
              {
                icon: Shield,
                title: "Current Documentation",
                desc: "Ask for current insurance evidence and the exact product and workmanship warranty terms before proceeding.",
              },
              {
                icon: MapPin,
                title: "Local Experts",
                desc: `Based ${loc.distanceFromTaunton} from ${loc.name} — we're on hand for your survey, installation and any aftercare queries.`,
              },
              {
                icon: Star,
                title: "Customer Feedback",
                desc: "Our Reviews page identifies the source platform for each displayed customer review.",
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

        </div>
      </section>

      {/* ── Installation Process ─────────────────────────────── */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
                The Process
              </span>
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">
              How Solar Installation Works in {loc.name}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Survey & Usage Review",
                desc: `We assess the roof at your ${loc.name} property, its orientation and shading, plus your electricity use.`,
              },
              {
                step: "02",
                title: "Written Proposal",
                desc: "You receive the proposed layout, equipment, modelled output, responsibilities, price and warranty terms.",
              },
              {
                step: "03",
                title: "Installation & Handover",
                desc: "Once agreed, the named team completes the stated permissions, installation, commissioning and handover scope.",
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
              Solar Panel Questions for {loc.name}
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <details className="group border border-gray-100 hover:border-[#f97316] transition-colors">
                  <summary className="cursor-pointer list-none p-5 flex items-start gap-3 font-black text-[#1a1a1a] text-sm">
                    <span className="text-[#f97316] shrink-0">Q.</span>
                    <span className="flex-1">{faq.q}</span>
                    <ChevronDown className="w-4 h-4 text-[#f97316] shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="text-gray-500 text-sm leading-relaxed px-5 pb-5 pl-11">
                    {faq.a}
                  </p>
                </details>
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
              Solar Installations Near {loc.name}
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              We install solar panels across these areas too
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
                  href={`/solar-panels/${nearbyLoc.slug}`}
                  className="bg-white border border-gray-200 hover:border-[#f97316] hover:text-[#f97316] text-gray-700 font-semibold px-4 py-2 text-sm transition-all"
                >
                  Solar Panels {area}
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
                  href={`/solar-panels/${adjLoc.slug}`}
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

      <CTASection
        heading={`Free Solar Survey in ${loc.name}`}
        subtext={`Request a free, no-obligation survey for your ${loc.name} property and receive a written proposal with a modelled output and savings estimate.`}
      />
    </>
  );
}
