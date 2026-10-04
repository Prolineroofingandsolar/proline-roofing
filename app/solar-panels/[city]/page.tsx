import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle, ChevronDown, Phone } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import SolarSavingsEstimator from "@/components/SolarSavingsEstimator";
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
    description: `Estimate what solar could be worth for a home in ${loc.name}, then request a roof and energy-use survey with a written proposal.`,
    alternates: {
      canonical: `https://www.prolineroofingandsolar.co.uk/solar-panels/${loc.slug}`,
    },
  };
}

const solarFaqs = (name: string) => [
  {
    q: `How accurate is the solar estimate for ${name}?`,
    a: "It is a useful starting range rather than a quote. A survey and design must account for measured roof space, orientation, shading, electricity use and the actual import and export tariffs.",
  },
  {
    q: `How much do solar panels cost in ${name}?`,
    a: "The cost depends on the designed capacity, equipment, roof access, scaffolding, electrical work and whether battery storage is included. We provide a dated, written proposal after assessing the property.",
  },
  {
    q: "Do I need a battery?",
    a: "Not always. A battery may increase the amount of solar used at the property, but it also adds cost. It should be assessed against consumption, tariff, usable capacity and expected lifetime.",
  },
  {
    q: `Do I need planning permission for solar panels in ${name}?`,
    a: "Many domestic roof installations can be permitted development, but limits and exceptions apply, especially for listed buildings, conservation areas, flats and ground-mounted systems. Check current Planning Portal guidance and seek a decision from the relevant authority where required.",
  },
  {
    q: "What will the written proposal include?",
    a: "It should identify the proposed layout and equipment, modelled output, financial assumptions, installation scope, responsibilities, price, warranty terms and handover documents.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <section className="relative overflow-hidden bg-[#111111] py-20 text-white md:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/UK_MKT_PHO_REF_Solar_Grasmere_002.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <AnimatedSection>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
              Solar made simple in {loc.name}
            </p>
            <h1 className="text-4xl font-black uppercase leading-none tracking-tight md:text-6xl">
              What could solar be worth for your <span className="text-[#f97316]">{loc.name} home?</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
              {loc.solarNote}
            </p>
            <p className="mx-auto mb-8 mt-3 max-w-2xl text-sm leading-relaxed text-gray-400">
              Get a quick estimate first. If it looks worthwhile, we can check the roof and prepare a written proposal.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#solar-estimator"
                className="inline-flex min-h-13 items-center justify-center gap-2 bg-[#f97316] px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition-colors hover:bg-[#e8650f]"
              >
                Start my estimate <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="tel:07587478826"
                className="inline-flex min-h-13 items-center justify-center gap-2 border-2 border-white px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-[#1a1a1a]"
              >
                <Phone className="h-4 w-4" /> 07587 478826
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <SolarSavingsEstimator cityName={loc.name} />

      <section className="bg-[#1a1a1a] py-16 text-white md:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <AnimatedSection className="mb-9 text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">From estimate to proposal</p>
            <h2 className="text-3xl font-black uppercase tracking-tight">We check the details properly</h2>
          </AnimatedSection>
          <div className="grid gap-px bg-white/10 sm:grid-cols-3">
            {[
              ["Roof and site", `We assess the roof at your ${loc.name} property, including space, condition, direction and shading.`],
              ["Energy use", "We use your consumption and tariff information instead of relying on a generic household figure."],
              ["Clear paperwork", "The design, assumptions, equipment, responsibilities, price and warranty terms are set out in writing."],
            ].map(([title, text]) => (
              <div key={title} className="bg-[#1a1a1a] p-7">
                <CheckCircle className="mb-4 h-6 w-6 text-[#f97316]" />
                <h3 className="font-black uppercase tracking-wide">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/solar" className="inline-flex items-center gap-2 font-bold text-[#f97316]">
              Read the simple solar guide <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <AnimatedSection className="mb-10 text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">Questions before you decide</p>
            <h2 className="text-3xl font-black uppercase tracking-tight text-[#1a1a1a]">
              Solar questions for {loc.name}
            </h2>
          </AnimatedSection>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group border border-gray-200">
                <summary className="flex cursor-pointer list-none items-start gap-3 p-5 text-sm font-black text-[#1a1a1a]">
                  <span className="flex-1">{faq.q}</span>
                  <ChevronDown className="h-4 w-4 shrink-0 text-[#f97316] transition-transform group-open:rotate-180" />
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-xl font-black uppercase tracking-tight text-[#1a1a1a]">
            Solar estimates near {loc.name}
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {loc.nearbyAreas.map((area) => {
              const nearbyLoc = locations.find(
                (item) => item.name.toLowerCase() === area.toLowerCase()
              );
              return nearbyLoc ? (
                <Link
                  key={area}
                  href={`/solar-panels/${nearbyLoc.slug}`}
                  className="border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-[#f97316] hover:text-[#f97316]"
                >
                  {area}
                </Link>
              ) : (
                <span key={area} className="border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700">
                  {area}
                </span>
              );
            })}
            {adjacent.map((adjLoc) => (
              <Link
                key={adjLoc.slug}
                href={`/solar-panels/${adjLoc.slug}`}
                className="border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-[#f97316] hover:text-[#f97316]"
              >
                {adjLoc.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading={`Want a Solar Proposal in ${loc.name}?`}
        subtext="Request a no-obligation survey and get the design, price and assumptions clearly set out in writing."
      />
    </>
  );
}
