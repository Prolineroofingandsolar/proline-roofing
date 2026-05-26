import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Contact Us | ProLine Roofing & Solar",
  description:
    "Get in touch with ProLine Roofing & Solar in Taunton, Somerset. Call 07587 478826 or send us a message online. Free quotes available.",
};

const contactDetails = [
  { icon: Phone, label: "Phone", value: "07587 478826", href: "tel:07587478826" },
  { icon: Mail, label: "Email", value: "admin@prolineroofingandsolar.co.uk", href: "mailto:admin@prolineroofingandsolar.co.uk" },
  { icon: MapPin, label: "Address", value: "75 Hardys Road\nTaunton, TA2 8FA", href: null },
  { icon: Clock, label: "Opening Hours", value: "Mon–Fri: 8am–6pm\nSat: 8am–1pm\nSun & Bank Hols: Emergency only", href: null },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#111111] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-[#f97316] text-xs font-black uppercase tracking-[0.25em] mb-3">Get in Touch</p>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">Contact Us</h1>
            <p className="text-gray-300 text-lg max-w-xl mx-auto">
              Have a question or ready to book? Get in touch and we&apos;ll respond within 24 hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Emergency strip */}
      <div className="bg-[#f97316] py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white font-black text-sm uppercase tracking-wide">⚡ 24/7 Emergency Roofing Available</p>
          <a href="tel:07587478826" className="text-white font-black text-sm bg-black/20 px-4 py-2 hover:bg-black/40 transition-colors">
            Call Now: 07587 478826
          </a>
        </div>
      </div>

      {/* Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <AnimatedSection direction="left">
              <h2 className="text-2xl font-black text-[#1a1a1a] uppercase mb-6">Get in Touch</h2>
              <div className="space-y-5 mb-8">
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-[#f97316] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-gray-900 font-semibold hover:text-[#f97316] transition-colors text-sm">
                          {value}
                        </a>
                      ) : (
                        <p className="text-gray-900 font-semibold whitespace-pre-line text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* OpenStreetMap embed */}
              <div className="border border-gray-200 overflow-hidden">
                <iframe
                  title="ProLine Roofing & Solar location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-3.15%2C51.00%2C-3.05%2C51.04&layer=mapnik&marker=51.018%2C-3.1"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection direction="right">
              <div className="bg-white border border-gray-100 shadow-sm p-8">
                <h2 className="text-2xl font-black text-[#1a1a1a] uppercase mb-1">Send Us a Message</h2>
                <p className="text-gray-500 text-sm mb-6">We&apos;ll get back to you within 24 hours.</p>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
