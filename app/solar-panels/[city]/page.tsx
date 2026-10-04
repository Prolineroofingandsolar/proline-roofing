import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Phone,
  ArrowRight,
  MapPin,
  Star,
  Sun,
  TrendingDown,
  Zap,
  Leaf,
  Shield,
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
    title: `Solar Panels ${loc.name} | ProLine Roofing & Solar`,
    description: `Solar panel installation enquiries in ${loc.name}, ${loc.county}. Request a roof and energy-use survey with a written system proposal.`,
    alternates: {
      canonical: `https://www.prolineroofingandsolar.co.uk/solar-panels/${loc.slug}`,
    },
  };
}

const solarServices = [
  {
    title: "Solar PV Systems",
    desc: "High-efficiency monocrystalline panel systems designed and installed for your roof.",
    icon: "☀️",
  },
  {
    title: "Battery Storage",
    desc: "Store excess generation and use it when you need it — even after dark.",
    icon: "🔋",
  },
  {
    title: "Solar Monitoring",
    desc: "Live generation and consumption monitoring via your smartphone.",
    icon: "📱",
  },
  {
    title: "Smart Export Guarantee",
    desc: "Get paid for the energy you export back to the National Grid.",
    icon: "💷",
  },
  {
    title: "Solar Maintenance",
    desc: "Annual health checks, cleaning and inverter servicing for maximum output.",
    icon: "🔧",
  },
  {
    title: "EV Charging Integration",
    desc: "Combine solar with an EV charger to power your car from the sun.",
    icon: "⚡",
  },
  {
    title: "Flat Roof Solar",
    desc: "Ballasted or fixed racking systems optimised for flat commercial and residential roofs.",
    icon: "📐",
  },
  {
    title: "Commercial Solar",
    desc: "Larger-scale solar PV systems for business premises and agricultural buildings.",
    icon: "🏭",
  },
];

const solarFaqs = (name: string, county: string) => [
  {
    q: `How much do solar panels cost in ${name}?`,
    a: `A typical domestic solar PV system for a home in ${name} costs between £5,000 and £9,000 depending on system size, panel brand and whether battery storage is included. We provide a detailed, fixed-price proposal after a free site survey tailored to your specific property and energy usage.`,
  },
  {
    q: `How much can I save on energy bills in ${name}?`,
    a: `Most homeowners in ${name} and the wider ${county} area save between £700 and £1,400 per year on energy bills with a well-sized solar system, depending on energy consumption, household occupancy and whether battery storage is included. We'll give you a site-specific savings estimate at your free survey.`,
  },
  {
    q: `Are there solar grants available in ${name}?`,
    a: `The main financial incentive for solar in ${name} is the Smart Export Guarantee (SEG), which pays you for electricity you export to the grid. Some households may also qualify for the ECO4 scheme or local authority grants depending on income and property type. We'll advise on all available incentives during your survey.`,
  },
  {
    q: `How long does solar panel installation take?`,
    a: `A typical domestic solar installation in ${name} takes 1–2 days for the physical installation. We also handle the DNO (Distribution Network Operator) application and MCS documentation, which can take 2–6 weeks. We manage the full process on your behalf so you have nothing to worry about.`,
  },
  {
    q: `Do I need planning permission for solar panels in ${name}?`,
    a: `In most cases, solar panels installed on a residential roof in ${name} fall within permitted development rights and require no planning permission. Exceptions include listed buildings, certain conservation area properties and ground-mounted systems. We'll confirm the planning position for your specific property during the free survey.`,
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
  const faqs = solarFaqs(loc.name, loc.county);

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

      {/* ── Solar Benefits Banner ─────────────────────────────── */}
      <section className="bg-[#f97316] py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: TrendingDown,
              title: "Cut Your Bills",
              desc: "Savings depend on system design, household usage and electricity tariffs.",
            },
            {
              icon: Zap,
              title: "SEG Export Income",
              desc: "Ask your energy supplier about current export tariffs and eligibility.",
            },
            {
              icon: Sun,
              title: "Add Property Value",
              desc: "A system is designed around the roof, orientation and available space.",
            },
            {
              icon: Leaf,
              title: "Go Green",
              desc: "Generate lower-carbon electricity at the property when conditions allow.",
            },
          ].map(({ icon: Icon, title, desc }, i) => (
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

      {/* ── Section B: Solar Energy Benefits for [City] ─────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="mb-10">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-16 h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
                Local Solar
              </span>
            </div>
            <h2 className="text-3xl font-black text-[#1a1a1a] uppercase tracking-tight mb-4">
              Solar Energy Benefits for {loc.name} Homes
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4 max-w-3xl">
              {loc.solarNote}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed max-w-3xl">
              We serve homeowners across {loc.name} and the surrounding{" "}
              {loc.postcodePrefix} area, including{" "}
              {loc.nearbyAreas.slice(0, 4).join(", ")} and beyond.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: "Energy Independence",
                desc: `Homeowners in ${loc.name} with solar PV systems generate a significant proportion of their annual electricity demand from the sun — reducing reliance on grid power and shielding against future price rises.`,
              },
              {
                title: "Smart Export Guarantee",
                desc: `Under the Smart Export Guarantee, ${loc.name} homeowners earn a payment for every unit of electricity they export to the grid. Combined with self-consumption savings, the financial case for solar has never been stronger.`,
              },
              {
                title: "Long-Term Investment",
                desc: `Solar panels typically pay back their installation cost within 7–10 years and continue generating savings for 25+ years. In ${loc.name}, quality solar systems installed today represent an excellent long-term return.`,
              },
            ].map(({ title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 0.1}>
                <div className="border border-gray-100 hover:border-[#f97316] hover:shadow-md p-6 transition-all duration-300 h-full group">
                  <div className="w-10 h-10 bg-[#f97316]/10 group-hover:bg-[#f97316] flex items-center justify-center mb-4 transition-colors">
                    <Sun className="w-5 h-5 text-[#f97316] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-black text-[#1a1a1a] text-sm uppercase tracking-wide mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section C: Solar Services ────────────────────────── */}
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

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-0">
            {[
              {
                step: "01",
                title: "Free Survey",
                desc: "We visit your property in ${loc.name}, assess your roof and energy usage, and design the ideal system.",
              },
              {
                step: "02",
                title: "System Design",
                desc: "A bespoke layout created to maximise generation from your specific roof orientation and pitch.",
              },
              {
                step: "03",
                title: "DNO & Planning",
                desc: "We handle all grid connection paperwork and any planning applications on your behalf.",
              },
              {
                step: "04",
                title: "Installation",
                desc: "The agreed installation team fits and commissions the system to the written design and programme.",
              },
              {
                step: "05",
                title: "Handover",
                desc: "Full walkthrough, monitoring setup and the certification and warranty documents specified in your proposal.",
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
        subtext={`Get a free, no-obligation solar survey for your ${loc.name} property. We'll tell you exactly how much you could save — and give you a fixed-price installation quote.`}
      />
    </>
  );
}
