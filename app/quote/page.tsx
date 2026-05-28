import type { Metadata } from "next";
import { CheckCircle, Phone, Clock, Shield, Star } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Free Roofing & Solar Quote Taunton | ProLine",
  description:
    "Get a free, no-obligation roofing or solar quote from ProLine in Taunton, Somerset. We visit, survey and provide a detailed written quote within 24 hours. Call 07587 478826.",
  keywords: [
    "free roofing quote taunton",
    "free solar quote taunton",
    "roofing estimate taunton",
    "get a quote roofer taunton",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.prolineroofingandsolar.co.uk",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Get a Free Quote",
      item: "https://www.prolineroofingandsolar.co.uk/quote",
    },
  ],
};

export default function QuotePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero */}
      <section className="relative bg-[#111111] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-[#f97316] text-xs font-black uppercase tracking-[0.25em] mb-3">No Obligation</p>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">Get a Free Quote</h1>
            <p className="text-gray-300 text-lg max-w-xl mx-auto">
              Tell us about your project and we&apos;ll come out, assess the work and provide a detailed quote — completely free with no pressure.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Trust strip */}
      <div className="bg-[#f97316] py-4">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { icon: CheckCircle, text: "Free no-obligation quote" },
            { icon: Clock, text: "Response within 24 hours" },
            { icon: Shield, text: "Fully insured & qualified" },
            { icon: Star, text: "5-star Google rated" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center justify-center gap-2 text-white">
              <Icon className="w-4 h-4 shrink-0" />
              <span className="text-xs font-bold uppercase tracking-wide">{text}</span>
            </div>
          ))}
        </div>
      </div>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Sidebar */}
            <AnimatedSection direction="left" className="space-y-6">
              {/* What to expect */}
              <div className="bg-[#1a1a1a] p-7 text-white">
                <h2 className="font-black text-base uppercase tracking-wide mb-5 pb-3 border-b border-white/10">What to Expect</h2>
                <ul className="space-y-5">
                  {[
                    { step: "1", title: "Submit Your Enquiry", desc: "Fill in the form with details about your project." },
                    { step: "2", title: "We'll Be in Touch", desc: "A member of our team will call or email within 24 hours." },
                    { step: "3", title: "Free Site Survey", desc: "We arrange a convenient time to visit and assess the work." },
                    { step: "4", title: "Receive Your Quote", desc: "Detailed, itemised quote with no hidden costs." },
                  ].map(({ step, title, desc }) => (
                    <li key={step} className="flex items-start gap-3">
                      <div className="w-7 h-7 bg-[#f97316] flex items-center justify-center shrink-0 text-xs font-black text-white">
                        {step}
                      </div>
                      <div>
                        <p className="font-bold text-sm text-white">{title}</p>
                        <p className="text-gray-400 text-xs mt-0.5">{desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call us */}
              <div className="bg-[#f97316] p-6 text-white text-center">
                <p className="font-black text-base uppercase tracking-wide mb-1">Prefer to Call?</p>
                <p className="text-orange-100 text-sm mb-4">Our team is ready Mon–Sat, 8am–6pm</p>
                <a
                  href="tel:07587478826"
                  className="inline-flex items-center gap-2 bg-white text-[#f97316] font-black px-5 py-3 hover:bg-orange-50 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" /> 07587 478826
                </a>
              </div>

              {/* Reviews snippet */}
              <div className="bg-white border border-gray-100 shadow-sm p-6">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#f97316] text-[#f97316]" />)}
                </div>
                <p className="text-gray-600 text-sm italic leading-relaxed mb-3">
                  &ldquo;Great service from start to finish. Professional, reliable and great value. Highly recommend!&rdquo;
                </p>
                <p className="text-gray-900 font-black text-xs">— Sarah M., Taunton</p>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection direction="right" className="lg:col-span-2">
              <div className="bg-white border border-gray-100 shadow-sm p-8">
                <h2 className="text-2xl font-black text-[#1a1a1a] uppercase mb-1">Tell Us About Your Project</h2>
                <p className="text-gray-500 text-sm mb-6">
                  The more detail you provide, the more accurate our initial estimate will be.
                </p>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
