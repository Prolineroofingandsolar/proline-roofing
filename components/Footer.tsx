import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "./Logo";
import GoogleReviewButton from "./GoogleReviewButton";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Roofing Services", href: "/roofing" },
  { label: "Solar Services", href: "/solar" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 – Brand */}
          <div>
            <Logo dark className="mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              Roofing and solar specialists based in Taunton, Somerset.
            </p>
            <p className="text-gray-400 text-sm mt-5 mb-3">Happy with our work?</p>
            <GoogleReviewButton variant="solid" label="Review us on Google" className="text-xs px-5 py-3" />
          </div>

          {/* Col 2 – Quick Links */}
          <div>
            <h3 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-5 pb-2 border-b border-[#f97316]">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-gray-400 hover:text-[#f97316] text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 – Contact */}
          <div>
            <h3 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-5 pb-2 border-b border-[#f97316]">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:07587478826"
                  className="flex items-center gap-2.5 text-gray-400 hover:text-[#f97316] text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#f97316] shrink-0" />
                  07587 478826
                </a>
              </li>
              <li>
                <a
                  href="mailto:admin@prolineroofingandsolar.co.uk"
                  className="flex items-start gap-2.5 text-gray-400 hover:text-[#f97316] text-sm transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-[#f97316] shrink-0 mt-0.5" />
                  admin@prolineroofingandsolar.co.uk
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-[#f97316] shrink-0 mt-0.5" />
                <span>75 HARDYS ROAD<br />TAUNTON, TA2 8FA</span>
              </li>
            </ul>
          </div>

          {/* Col 4 – Get a Free Quote */}
          <div>
            <h3 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-5 pb-2 border-b border-[#f97316]">
              Get a Free Quote
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Get in touch today for a free, no obligation quote for your roofing or solar project.
            </p>
            <Link
              href="/quote"
              className="inline-block bg-[#f97316] hover:bg-[#ea6c0a] text-white font-black text-xs uppercase tracking-widest px-6 py-3 transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} ProLine Roofing &amp; Solar. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
