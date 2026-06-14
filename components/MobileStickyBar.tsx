import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden grid grid-cols-2 shadow-[0_-4px_24px_rgba(0,0,0,0.18)] will-change-transform [transform:translateZ(0)]">
      <a
        href="tel:07587478826"
        className="flex items-center justify-center gap-2 bg-[#1a1a1a] text-white font-black text-xs uppercase tracking-widest py-4 active:bg-black transition-colors"
      >
        <Phone className="w-4 h-4 text-[#f97316]" />
        07587 478826
      </a>
      <Link
        href="/quote"
        className="flex items-center justify-center gap-2 bg-[#f97316] text-white font-black text-xs uppercase tracking-widest py-4 active:bg-[#e8650f] transition-colors"
      >
        Free Quote <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
