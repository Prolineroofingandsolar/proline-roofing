import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Clock, Phone } from "lucide-react";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";
import { locations } from "@/lib/locations";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Roofing & Solar Service Areas | ProLine",
  description:
    "Browse ProLine Roofing & Solar service areas across Somerset and surrounding parts of the South West, or ask whether we can travel to your property.",
  alternates: {
    canonical: "https://www.prolineroofingandsolar.co.uk/locations",
  },
};

export default function LocationsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#111111] py-24 text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/85" />
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <AnimatedSection>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
              Service Coverage
            </p>
            <h1 className="mb-5 text-4xl font-black uppercase leading-none tracking-tight md:text-6xl">
              Areas <span className="text-[#f97316]">We Cover</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-300">
              We are based in Taunton and regularly work across the listed
              areas. For properties farther away, contact us with the postcode
              and project details so we can confirm availability.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <AnimatedSection className="mb-12 text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
              Current Service Areas
            </p>
            <h2 className="text-3xl font-black uppercase tracking-tight text-[#1a1a1a]">
              Find Your Nearest Area
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((location, index) => (
              <AnimatedSection key={location.slug} delay={(index % 3) * 0.06}>
                <article className="flex h-full flex-col border border-gray-200 bg-white p-6 transition hover:border-[#f97316] hover:shadow-lg">
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-black text-[#1a1a1a]">
                        {location.name}
                      </h3>
                      <p className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                        <MapPin className="h-3.5 w-3.5" />
                        {location.county} · {location.postcodePrefix}
                      </p>
                    </div>
                    <span className="flex shrink-0 items-center gap-1 text-xs text-gray-500">
                      <Clock className="h-3.5 w-3.5" />
                      {location.driveTime === "based here" ? "Our base" : location.driveTime}
                    </span>
                  </div>

                  <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-600">
                    {location.roofingNote}
                  </p>

                  <div className="grid grid-cols-2 gap-2 border-t border-gray-100 pt-4">
                    <Link className="text-sm font-bold text-[#1a1a1a] hover:text-[#f97316]" href={`/roofer/${location.slug}`}>
                      Roofing
                    </Link>
                    <Link className="text-sm font-bold text-[#1a1a1a] hover:text-[#f97316]" href={`/roof-repair/${location.slug}`}>
                      Roof repairs
                    </Link>
                    <Link className="text-sm font-bold text-[#1a1a1a] hover:text-[#f97316]" href={`/solar-panels/${location.slug}`}>
                      Solar
                    </Link>
                    <Link className="text-sm font-bold text-[#1a1a1a] hover:text-[#f97316]" href={`/emergency-roofer/${location.slug}`}>
                      Urgent repairs
                    </Link>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-gray-100 bg-gray-50 py-14">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <AnimatedSection>
            <MapPin className="mx-auto mb-4 h-8 w-8 text-[#f97316]" />
            <h2 className="mb-3 text-2xl font-black uppercase text-[#1a1a1a]">
              Not Sure If We Cover Your Area?
            </h2>
            <p className="mx-auto mb-6 max-w-xl text-sm text-gray-600">
              Send us your postcode and a short description of the work. We
              will confirm whether we can visit before you spend time arranging
              a survey.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <a href="tel:07587478826" className="inline-flex items-center justify-center gap-2 bg-[#1a1a1a] px-6 py-4 text-sm font-black uppercase tracking-widest text-white">
                <Phone className="h-4 w-4" /> 07587 478826
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#f97316] px-6 py-4 text-sm font-black uppercase tracking-widest text-white">
                Send a Message <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        heading="Ready to Get Started?"
        subtext="Send us your postcode and project details for a free, no-obligation quote."
      />
    </>
  );
}
