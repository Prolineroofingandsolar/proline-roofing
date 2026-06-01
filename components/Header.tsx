"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, MapPin, Menu, X, ChevronDown } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { label: "HOME", href: "/" },
  {
    label: "ROOFING",
    href: "/roofing",
    children: [
      { label: "All Roofing Services", href: "/roofing" },
      { label: "Roof Repairs", href: "/services/roof-repairs" },
      { label: "New Roofs", href: "/roofing" },
      { label: "Flat Roofing", href: "/services/flat-roofing" },
      { label: "Slate Roofing", href: "/services/slate-roofing" },
      { label: "Tile Roofing", href: "/services/tile-roofing" },
      { label: "Chimney Repairs", href: "/services/chimney-repairs" },
      { label: "Leadwork", href: "/services/leadwork" },
      { label: "Fascias & Soffits", href: "/services/fascias-soffits" },
      { label: "Guttering", href: "/services/guttering" },
      { label: "Emergency Roofing", href: "/services/emergency-roofing" },
      { label: "Commercial Roofing", href: "/services/commercial-roofing" },
    ],
  },
  {
    label: "SOLAR",
    href: "/solar",
    children: [
      { label: "Solar Panel Installation", href: "/solar" },
      { label: "Solar Panel Repairs", href: "/solar" },
      { label: "Solar Maintenance", href: "/solar" },
      { label: "Battery Storage", href: "/solar" },
    ],
  },
  {
    label: "LOCATIONS",
    href: "/locations",
    children: [
      { label: "All Areas We Cover", href: "/locations" },
      { label: "Roofer Taunton", href: "/roofer/taunton" },
      { label: "Roofer Bridgwater", href: "/roofer/bridgwater" },
      { label: "Roofer Wellington", href: "/roofer/wellington" },
      { label: "Roofer Yeovil", href: "/roofer/yeovil" },
      { label: "Roofer Burnham-on-Sea", href: "/roofer/burnham-on-sea" },
      { label: "Roofer Glastonbury", href: "/roofer/glastonbury" },
    ],
  },
  { label: "PROJECTS", href: "/projects" },
  { label: "BLOG", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "ABOUT US", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const pathname = usePathname();

  function toggleSection(label: string) {
    setOpenSection((prev) => (prev === label ? null : label));
  }

  return (
    <header className="sticky top-0 z-50 w-full shadow-md">
      {/* Top bar */}
      <div className="bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between min-w-0">
          <div className="hidden sm:flex items-center gap-1.5 text-gray-300 text-xs shrink-0">
            <MapPin className="w-3.5 h-3.5 text-[#f97316]" />
            <span>Based in Taunton &mdash; Serving Somerset &amp; the South West</span>
          </div>
          <div className="flex items-center gap-3 ml-auto">
            <a
              href="tel:07587478826"
              className="flex items-center gap-1.5 text-gray-300 hover:text-[#f97316] transition-colors text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#f97316] shrink-0" />
              <span className="hidden xs:inline">Call: </span>
              <strong className="text-[#f97316]">07587 478826</strong>
            </a>
            <a
              href="mailto:admin@prolineroofingandsolar.co.uk"
              className="hidden lg:flex items-center gap-1.5 text-gray-300 hover:text-[#f97316] transition-colors text-xs"
            >
              <Mail className="w-3.5 h-3.5 text-[#f97316]" />
              <span>admin@prolineroofingandsolar.co.uk</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-[72px]">
          <Logo />

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-0">
            {navLinks.map((link) => {
              const active =
                pathname === link.href ||
                (link.children && link.children.some((c) => c.href === pathname));
              return (
                <li key={link.label} className="relative group">
                  {link.children ? (
                    <>
                      <button
                        className={`flex items-center gap-1 px-3 py-2 text-xs font-bold tracking-wider transition-colors border-b-2 border-transparent ${
                          active
                            ? "text-[#f97316] border-[#f97316]"
                            : "text-gray-700 hover:text-[#f97316] group-hover:border-[#f97316]"
                        }`}
                      >
                        {link.label}
                        <ChevronDown className="w-3 h-3" />
                      </button>
                      <div className="absolute top-full left-0 w-52 bg-white shadow-xl border-t-2 border-[#f97316] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2.5 text-xs font-semibold text-gray-700 hover:text-[#f97316] hover:bg-orange-50 transition-colors border-b border-gray-100 last:border-0"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`block px-3 py-2 text-xs font-bold tracking-wider transition-colors border-b-2 ${
                        active
                          ? "text-[#f97316] border-[#f97316]"
                          : "text-gray-700 hover:text-[#f97316] border-transparent hover:border-[#f97316]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/quote"
              className="hidden lg:inline-flex items-center bg-[#f97316] hover:bg-[#ea6c0a] text-white text-xs font-black tracking-widest px-5 py-3 transition-colors uppercase"
            >
              Get a Free Quote
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-[#f97316] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <ul className="divide-y divide-gray-100">
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.children ? (
                    <div>
                      <button
                        onClick={() => toggleSection(link.label)}
                        className="w-full flex items-center justify-between px-4 py-3 text-xs font-bold tracking-wider text-gray-700"
                      >
                        {link.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            openSection === link.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openSection === link.label && (
                        <div className="bg-gray-50 divide-y divide-gray-100">
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="block px-8 py-2.5 text-xs font-semibold text-gray-600 hover:text-[#f97316]"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-4 py-3 text-xs font-bold tracking-wider ${
                        pathname === link.href ? "text-[#f97316]" : "text-gray-700"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="p-4 grid grid-cols-2 gap-3">
              <a
                href="tel:07587478826"
                className="flex items-center justify-center gap-2 bg-[#1a1a1a] text-white text-xs font-black tracking-widest py-3 uppercase"
              >
                <Phone className="w-3.5 h-3.5" /> Call Now
              </a>
              <Link
                href="/quote"
                onClick={() => setMobileOpen(false)}
                className="block text-center bg-[#f97316] hover:bg-[#ea6c0a] text-white text-xs font-black tracking-widest py-3 uppercase"
              >
                Free Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
