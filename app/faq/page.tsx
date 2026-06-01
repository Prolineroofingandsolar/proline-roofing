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
        text: "A new roof on a typical 3-bedroom semi-detached house in Somerset costs £5,000–£12,000 for concrete tiles, £8,000–£18,000 for natural slate, and £3,500–£8,000 for a flat roof. Costs vary based on size, access, materials and extent of any structural repairs needed.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you carry out emergency roof repairs in Somerset?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ProLine Roofing provides 24/7 emergency call-outs across Somerset. For active leaks or storm damage, we aim to respond within 24 hours — often same-day. We'll make your property safe and provide a full repair quote.",
      },
    },
    {
      "@type": "Question",
      name: "How much do solar panels cost in Somerset?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A typical domestic solar PV system in Somerset costs £5,000–£10,000 installed, depending on system size (typically 3–6kW for a family home). Battery storage adds £2,000–£5,000. Most homeowners see payback within 8–12 years.",
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
        text: "Solar panels are currently zero-rated for VAT (saving 20% off the installation cost) until at least 2027. The ECO4 scheme provides free installations for qualifying low-income households. The Smart Export Guarantee (SEG) pays you for excess energy you export to the grid.",
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
        a: "A new roof on a typical 3-bedroom semi-detached house in Somerset costs £5,000–£12,000 for concrete tiles, £8,000–£18,000 for natural slate, and £3,500–£8,000 for a flat roof. Costs vary based on roof size, pitch, access, materials chosen and whether any structural work is needed. We always provide a free, no-obligation written quote before any work begins.",
        links: [
          { label: "Read: Roof Repair Costs Somerset", href: "/blog/roof-repair-costs-somerset-2024" },
          { label: "Get a Free Quote", href: "/quote" },
        ],
      },
      {
        q: "Do you charge for quotes?",
        a: "No — our surveys and quotes are completely free and come with no obligation. We visit your property, assess the work required and provide a clear, itemised written quote. We leave you to decide in your own time. No pressure selling.",
      },
      {
        q: "What factors affect the cost of a roof repair?",
        a: "The main factors are: the type and extent of damage, the roof material, access requirements (scaffolding adds cost), the age of the roof, and whether any underlying structural work is needed. Minor repairs like replacing a few tiles start from around £150–300. Major works like partial re-roofing can run to several thousand pounds.",
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
        a: "We provide 24/7 emergency roofing across Somerset. For active leaks, storm damage or fallen tiles, we aim to respond within 24 hours — often the same day. Emergency call-outs are available nights, weekends and bank holidays. Call 07587 478826 at any time.",
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
        a: "A typical domestic solar PV system (3–4kW) costs £5,000–£8,000 installed by MCS-accredited installers. A 6kW system with battery storage typically costs £8,000–£14,000. 0% VAT currently applies to residential solar installations, saving up to 20%.",
        links: [{ label: "Read: Solar Panel Costs Somerset", href: "/blog/solar-panel-costs-somerset-2024" }],
      },
      {
        q: "How much can I save with solar panels in Somerset?",
        a: "Somerset receives around 1,400–1,600 sunshine hours per year. A typical 4kW system generates 3,400–3,800 kWh annually, saving £600–£900 per year at current energy prices when combined with the Smart Export Guarantee export income. Most systems pay back in 8–12 years.",
        links: [{ label: "Read: Solar ROI Calculator Somerset", href: "/blog/solar-roi-calculator-somerset" }],
      },
      {
        q: "Are there solar grants available in Somerset?",
        a: "Yes. Solar panels are VAT-free (0% instead of 20%) until at least 2027 — effectively a 20% discount. Low-income households may qualify for free installations through the ECO4 scheme. All homeowners can earn money back through the Smart Export Guarantee (SEG) for excess energy exported to the grid.",
        links: [{ label: "Read: Solar Grants UK 2024", href: "/blog/solar-grants-uk-2024" }],
      },
      {
        q: "Do I need planning permission for solar panels?",
        a: "In most cases, solar panels on a standard residential roof are permitted development and don't require planning permission. Restrictions apply if you live in a conservation area, Area of Outstanding Natural Beauty, or have a listed building. We'll check this during your free survey.",
      },
      {
        q: "What is MCS accreditation and why does it matter?",
        a: "MCS (Microgeneration Certification Scheme) is the quality mark for solar installers in the UK. Only MCS-accredited installations qualify for the Smart Export Guarantee (SEG) — the scheme that pays you for exported solar energy. ProLine is MCS accredited.",
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
        a: "Yes, absolutely. We have extensive experience working in Somerset's conservation areas and with listed buildings. We source traditional materials including natural Welsh slate, clay tiles and handmade bricks, and can advise on what your local authority is likely to require.",
      },
      {
        q: "Do your roofers need to be registered or qualified?",
        a: "All our operatives are trained and experienced roofers. We hold full public liability insurance and employers' liability insurance. We're committed to safe working at height in accordance with the Work at Height Regulations 2005.",
      },
    ],
  },
  {
    category: "Guarantees & Insurance",
    questions: [
      {
        q: "Do you guarantee your work?",
        a: "Yes. All work comes with a written workmanship guarantee. Repair work is typically guaranteed for 1–2 years; larger works such as re-roofing carry 10–15 year guarantees. Materials carry manufacturers' warranties separately.",
      },
      {
        q: "Are you fully insured?",
        a: "Yes — we carry full public liability insurance (£5 million) and employers' liability insurance. Proof of insurance is available on request.",
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
