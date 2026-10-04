export const dynamic = "force-static";

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Battery,
  CheckCircle,
  ChevronDown,
  Phone,
  Sun,
  Zap,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import SolarSavingsEstimator from "@/components/SolarSavingsEstimator";

export const metadata: Metadata = {
  title: "Solar Panel Installation | Taunton & South West",
  description:
    "Estimate what solar could be worth for your home, then request a roof and energy-use survey with a clear written proposal.",
  alternates: { canonical: "https://www.prolineroofingandsolar.co.uk/solar" },
};

const choices = [
  {
    icon: Sun,
    title: "Solar panels",
    text: "Generate electricity on your roof. The layout should be based on usable space, orientation and shading.",
  },
  {
    icon: Battery,
    title: "Battery storage",
    text: "Store more solar for later. A battery only makes sense when its cost, capacity and your usage are considered together.",
  },
  {
    icon: Zap,
    title: "EV charging",
    text: "Use compatible solar-aware charging where the cable route, supply and load management are suitable.",
  },
];

const faqs = [
  {
    question: "How accurate is the quick estimate?",
    answer:
      "It is a useful starting range, not a quote. A proper design must account for measured roof space, shading, panel layout, electricity use and your actual tariff.",
  },
  {
    question: "Do I need a battery?",
    answer:
      "Not always. A battery may increase the amount of solar you use at home, but it also adds cost. We compare the options rather than treating storage as an automatic extra.",
  },
  {
    question: "Will I need planning permission?",
    answer:
      "Many domestic roof installations can be permitted development, but limits and exceptions apply. Listed buildings, conservation areas, flats and ground-mounted systems may need additional checks.",
  },
  {
    question: "When will I know the price and likely payback?",
    answer:
      "After the survey, the written proposal can show the equipment, full scope, price, modelled output and the assumptions behind any savings or payback estimate.",
  },
];

export default function SolarPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#111111] py-20 text-white md:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/UK_MKT_PHO_REF_Solar_Grasmere_002.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <AnimatedSection>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
              Solar made simple
            </p>
            <h1 className="text-4xl font-black uppercase leading-none tracking-tight md:text-6xl">
              See what solar could be <span className="text-[#f97316]">worth to you</span>
            </h1>
            <p className="mx-auto mb-8 mt-5 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
              Start with a quick estimate. If it looks worthwhile, we can check the roof and turn it into a clear written proposal.
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
            <div className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-bold text-gray-300">
              {["No contact details", "Indicative range", "Takes about a minute"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-[#f97316]" /> {item}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <SolarSavingsEstimator />

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <AnimatedSection className="mb-10 text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">Your options</p>
            <h2 className="text-3xl font-black uppercase tracking-tight text-[#1a1a1a] md:text-4xl">
              Choose only what fits
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-600">
              A sensible solar design starts with the property and your electricity use—not a pre-packed system.
            </p>
          </AnimatedSection>
          <div className="grid gap-5 md:grid-cols-3">
            {choices.map(({ icon: Icon, title, text }, index) => (
              <AnimatedSection key={title} delay={index * 0.08}>
                <div className="h-full border border-gray-200 p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center bg-orange-100 text-[#f97316]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-black uppercase tracking-wide text-[#1a1a1a]">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1a1a1a] py-16 text-white md:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <AnimatedSection className="mb-10 text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">If the estimate looks right</p>
            <h2 className="text-3xl font-black uppercase tracking-tight">Three clear next steps</h2>
          </AnimatedSection>
          <div className="grid gap-px bg-white/10 sm:grid-cols-3">
            {[
              ["01", "Survey", "We check the roof, shading, electrics and your energy use."],
              ["02", "Proposal", "You get the design, equipment, assumptions, scope and price in writing."],
              ["03", "Your decision", "Ask questions, compare the figures and proceed only if it makes sense."],
            ].map(([number, title, text]) => (
              <div key={number} className="bg-[#1a1a1a] p-7 text-center">
                <span className="mx-auto mb-4 flex h-11 w-11 items-center justify-center bg-[#f97316] font-black">{number}</span>
                <h3 className="font-black uppercase tracking-wide">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <AnimatedSection className="mb-9 text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">Before you decide</p>
            <h2 className="text-3xl font-black uppercase tracking-tight text-[#1a1a1a]">Common questions</h2>
          </AnimatedSection>
          <div className="space-y-3">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="group border border-gray-200">
                <summary className="flex cursor-pointer list-none items-start gap-3 p-5 text-sm font-black text-[#1a1a1a]">
                  <span className="flex-1">{question}</span>
                  <ChevronDown className="h-4 w-4 shrink-0 text-[#f97316] transition-transform group-open:rotate-180" />
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-gray-600">{answer}</p>
              </details>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-gray-600">
            Want the detail? Read our practical guides in the{" "}
            <Link href="/blog" className="font-bold text-[#f97316] underline underline-offset-4">knowledge centre</Link>.
          </p>
        </div>
      </section>

      <CTASection
        heading="Want a Proper Solar Proposal?"
        subtext="Request a no-obligation survey and get the design, price and assumptions clearly set out in writing."
      />
    </>
  );
}
