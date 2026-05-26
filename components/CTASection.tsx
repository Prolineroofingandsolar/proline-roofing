import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

interface CTASectionProps {
  heading?: string;
  subtext?: string;
}

export default function CTASection({
  heading = "Ready for a Free Quote?",
  subtext = "Contact our team today and we'll get back to you within 24 hours with a no-obligation quote.",
}: CTASectionProps) {
  return (
    <section className="bg-[#f97316]">
      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            {heading}
          </h2>
          <p className="text-orange-100 mt-2 max-w-xl">{subtext}</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <a
            href="tel:07587478826"
            className="inline-flex items-center gap-2 bg-white text-[#f97316] font-bold px-6 py-3.5 rounded hover:bg-orange-50 transition-colors whitespace-nowrap"
          >
            <Phone className="w-4 h-4" />
            07587 478826
          </a>
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 bg-[#111111] text-white font-bold px-6 py-3.5 rounded hover:bg-[#1c1c1c] transition-colors whitespace-nowrap"
          >
            Get a Free Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
