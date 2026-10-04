import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Roofing & Solar FAQs | ProLine Roofing & Solar",
  description:
    "Answers to the most common questions about roofing and solar panels in Somerset. Costs, timescales, guarantees, planning permission and more.",
  alternates: { canonical: "https://www.prolineroofingandsolar.co.uk/faq" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a new roof cost in Somerset?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Roof costs vary significantly with size, access, materials, scaffolding and structural repairs. A site survey and written, dated quote are needed for a meaningful price.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you carry out emergency roof repairs in Somerset?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For active leaks or storm damage, call with your postcode and a description of the problem. We will assess urgency and confirm current attendance availability.",
      },
    },
    {
      "@type": "Question",
      name: "How much do solar panels cost in Somerset?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Solar cost and payback depend on the proposed system, roof, usage, tariff and financing. Request a written design, output model and current quote rather than relying on a generic figure.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need planning permission for roof work in Somerset?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most like-for-like roof repairs and replacements are permitted development and don't require planning permission. However, if you're in a conservation area, have a listed building, or are making significant changes (dormers, roof terraces), you'll need to check with your local authority. We can advise during your survey.",
      },
    },
    {
      "@type": "Question",
      name: "Are there grants for solar panels in Somerset?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Solar incentives, VAT treatment and export tariffs change. Check current eligibility with GOV.UK, the scheme administrator and your energy supplier before making a financial decision.",
      },
    },
  ],
};

const faqCategories = [
  {
    category: "Roofing Costs & Quotes",
    questions: [
      {
        q: "How much does a new roof cost in Somerset?",
        a: "Roof costs vary with size, pitch, access, scaffolding, materials and any structural work uncovered. A site survey and written, dated quote are needed for a meaningful price.",
        links: [
          { label: "Read: Archived 2024 Roof Cost Guide", href: "/blog/roof-repair-costs-somerset-2024" },
          { label: "Get a Free Quote", href: "/quote" },
        ],
      },
      {
        q: "Do you charge for quotes?",
        a: "No — our surveys and quotes are completely free and come with no obligation. We visit your property, assess the work required and provide a clear, itemised written quote. We leave you to decide in your own time. No pressure selling.",
      },
      {
        q: "What factors affect the cost of a roof repair?",
        a: "The main factors are the extent of damage, roof material, access and scaffolding, the roof's age and any underlying structural work. We confirm the price in a dated written quote after assessing the roof.",
      },
      {
        q: "Can I get a rough quote over the phone?",
        a: "We can give you a rough price indication over the phone, but an accurate quote always requires a site visit. Roof repairs vary too much in scope to quote accurately without seeing the problem. Our survey visits are always free.",
      },
    ],
  },
  {
    category: "Roof Repairs & Emergency",
    questions: [
      {
        q: "How quickly can you respond to an emergency roof repair?",
        a: "For active leaks, storm damage or fallen tiles, call 07587 478826 with your postcode and a description of the problem. We will assess urgency and confirm current attendance availability.",
        links: [{ label: "Emergency Roofing Taunton", href: "/emergency-roofer/taunton" }],
      },
      {
        q: "What should I do if my roof is leaking right now?",
        a: "First, call us on 07587 478826. While you wait: place buckets under active drips, move valuables and electrics away from water, take photos of any damage for your insurance, and if safe to do so, cover the entry point with tarpaulin. Don't go onto the roof yourself — it's dangerous and can cause further damage.",
      },
      {
        q: "Will my insurance cover a roof repair?",
        a: "Buildings insurance typically covers sudden damage such as storm damage, falling trees or impacts. Gradual wear and tear is usually excluded. We can provide a written report and photographs to support your insurance claim and we regularly work with insurance assessors.",
      },
      {
        q: "How long do roof repairs take?",
        a: "Minor repairs like replacing tiles or resealing flashing can often be completed in a few hours. Larger repairs such as re-bedding ridge tiles, replacing a section of roof or flat roof repairs may take 1–3 days. We'll give you a realistic timescale with every quote.",
      },
    ],
  },
  {
    category: "New Roofs & Replacement",
    questions: [
      {
        q: "How do I know if I need a new roof?",
        a: "Key signs include: roof age over 25–30 years, widespread cracked or missing tiles, sagging or dipping sections, daylight visible through the roof from the loft, water stains on ceilings, failed or missing underfelt, and multiple repairs in a short period. If you're unsure, our free survey will give you an honest assessment.",
        links: [{ label: "Read: 10 Signs You Need a New Roof", href: "/blog/signs-you-need-a-new-roof" }],
      },
      {
        q: "How long does a new roof take to install?",
        a: "A standard residential re-roof typically takes 3–7 working days, depending on roof size, complexity, weather and the material chosen. We set up full scaffolding before starting and won't leave your property without full weatherproofing each day.",
      },
      {
        q: "What is the best roof material for Somerset homes?",
        a: "Concrete tiles offer the best value for most modern homes. Natural clay tiles or slate are better suited to period properties and conservation areas. EPDM or GRP flat roofing is ideal for extensions and flat-roof areas. We'll advise on the best option for your property during a free survey.",
        links: [{ label: "Read: Tile vs Slate Roofing", href: "/blog/tile-vs-slate-roofing-somerset" }],
      },
      {
        q: "Do you handle everything or do I need other contractors?",
        a: "We handle everything from scaffold erection to completion — no need to coordinate multiple trades. We arrange our own scaffolding, carry out all roof works including fascias, soffits and guttering if needed, and dispose of all waste. You deal with one company from start to finish.",
      },
    ],
  },
  {
    category: "Solar Panels",
    questions: [
      {
        q: "How much do solar panels cost in Somerset?",
        a: "Solar costs depend on the designed capacity, panel and inverter specification, roof access, scaffolding, electrical work and whether battery storage is included. Request a written, dated proposal for your property.",
        links: [{ label: "Read: Archived 2024 Solar Cost Guide", href: "/blog/solar-panel-costs-somerset-2024" }],
      },
      {
        q: "How much can I save with solar panels in Somerset?",
        a: "Savings and payback vary with roof orientation, shading, system output, when you use electricity, battery behaviour and current import and export tariffs. Ask for a property-specific output and savings model, and test its assumptions before proceeding.",
        links: [{ label: "Read: Solar ROI Calculator Somerset", href: "/blog/solar-roi-calculator-somerset" }],
      },
      {
        q: "Are there solar grants available in Somerset?",
        a: "Schemes, tax treatment and export tariffs change and eligibility is property- and household-specific. Check current information with GOV.UK, the scheme administrator and your energy supplier before relying on an incentive.",
        links: [{ label: "Read: Archived 2024 Grants Guide", href: "/blog/solar-grants-uk-2024" }],
      },
      {
        q: "Do I need planning permission for solar panels?",
        a: "In most cases, solar panels on a standard residential roof are permitted development and don't require planning permission. Restrictions apply if you live in a conservation area, Area of Outstanding Natural Beauty, or have a listed building. We'll check this during your free survey.",
      },
      {
        q: "What is MCS accreditation and why does it matter?",
        a: "MCS is a UK certification scheme for small-scale renewable installations. Certification can affect export-tariff eligibility and consumer protections. Ask us to identify the installer and certification route for your project in writing, then verify it on the official MCS register.",
      },
    ],
  },
  {
    category: "Planning & Regulations",
    questions: [
      {
        q: "Do I need planning permission for roof work in Somerset?",
        a: "Most roof repairs and like-for-like replacements are permitted development. You may need permission for: dormers, roof extensions, roof terraces, solar panels in certain areas, or changes of material in conservation areas. We advise on this during every survey.",
        links: [{ label: "Read: Planning Permission for Roof Work in Somerset", href: "/blog/planning-permission-roof-somerset" }],
      },
      {
        q: "My house is in a conservation area — can you still help?",
        a: "Conservation-area and listed-building work may need specialist materials and consent. We can assess the roofing requirement, but the property owner should confirm permissions with the local planning authority before work begins.",
      },
      {
        q: "Do your roofers need to be registered or qualified?",
        a: "Ask for the qualifications, method statement and current insurance information relevant to your project. Roofing work should be planned and carried out in accordance with current work-at-height requirements.",
      },
    ],
  },
  {
    category: "Guarantees & Insurance",
    questions: [
      {
        q: "Do you guarantee your work?",
        a: "Warranty terms depend on the scope, materials and existing roof condition. Any workmanship and manufacturer warranties included will be identified in your written quote.",
      },
      {
        q: "Are you fully insured?",
        a: "Ask us for current insurance documentation and check that the policy type, limit and dates are suitable for your project before work begins.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept bank transfer, cash and debit/credit card. We never ask for large upfront cash payments. For larger jobs, staged payments are available. We provide full receipts and written documentation for all work.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-[#1a1a1a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-[#f97316] text-xs font-black uppercase tracking-[0.25em] mb-4">
              Your Questions Answered
            </p>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-5 uppercase">
              Roofing &amp; Solar<br />
              <span className="text-[#f97316]">FAQs</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              Find answers to the most common questions about roofing repairs, new roofs, solar panels and our services across Somerset and the South West.
            </p>
            <a href="tel:07587478826" className="inline-flex items-center gap-2 bg-[#f97316] text-white font-black px-7 py-4 uppercase tracking-widest text-sm hover:bg-[#e8650f] transition-colors">
              <Phone className="w-4 h-4" /> Still Have Questions? Call 07587 478826
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Jump Links */}
      <section className="bg-white border-b border-gray-100 py-6 sticky top-[72px] z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {faqCategories.map(({ category }) => (
              <a
                key={category}
                href={`#${category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="text-xs font-bold text-gray-600 hover:text-[#f97316] border border-gray-200 hover:border-[#f97316] px-3 py-1.5 transition-colors"
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {faqCategories.map(({ category, questions }) => (
          <div key={category} id={category.toLowerCase().replace(/[^a-z0-9]+/g, "-")} className="mb-16 scroll-mt-36">
            <AnimatedSection>
              <h2 className="text-2xl font-black text-[#1a1a1a] uppercase tracking-tight mb-8 pb-3 border-b-2 border-[#f97316]">
                {category}
              </h2>
            </AnimatedSection>
            <div className="space-y-5">
              {questions.map(({ q, a, links }, i) => (
                <AnimatedSection key={i} delay={i * 0.06}>
                  <div className="border border-gray-200 hover:border-[#f97316] p-6 transition-all">
                    <h3 className="font-black text-[#1a1a1a] mb-3">{q}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
                    {links && links.length > 0 && (
                      <div className="flex flex-wrap gap-3 mt-4">
                        {links.map(({ label, href }) => (
                          <Link
                            key={label}
                            href={href}
                            className="inline-flex items-center gap-1 text-xs font-bold text-[#f97316] hover:underline"
                          >
                            {label} <ArrowRight className="w-3 h-3" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        ))}
      </div>

      <CTASection
        heading="Can&apos;t Find Your Answer?"
        subtext="Call or email us directly — we&apos;re happy to answer any question about your roofing or solar project."
      />
    </>
  );
}
