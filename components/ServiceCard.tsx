import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-[#f97316]/30 transition-all flex flex-col"
    >
      <div className="w-12 h-12 bg-orange-50 group-hover:bg-[#f97316] rounded-lg flex items-center justify-center mb-4 transition-colors">
        <Icon className="w-6 h-6 text-[#f97316] group-hover:text-white transition-colors" />
      </div>
      <h3 className="font-bold text-gray-900 text-base mb-2 group-hover:text-[#f97316] transition-colors">
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed flex-1">{description}</p>
      <div className="flex items-center gap-1 mt-4 text-[#f97316] text-sm font-semibold">
        Learn more
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
