import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
  className?: string;
  dark?: boolean;
}

export default function BreadcrumbNav({ items, className = "", dark = false }: BreadcrumbNavProps) {
  const allItems = [{ label: "Home", href: "/" }, ...items];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: item.href ? `https://www.prolineroofingandsolar.co.uk${item.href}` : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className={`py-2.5 ${dark ? "bg-transparent" : "bg-gray-50 border-b border-gray-100"} ${className}`}>
        <div className="max-w-7xl mx-auto px-4">
          <ol className={`flex items-center flex-wrap gap-1 text-xs ${dark ? "text-gray-400" : "text-gray-500"}`}>
            {allItems.map((item, i) => (
              <li key={i} className="flex items-center gap-1">
                {i > 0 && <ChevronRight className={`w-3 h-3 shrink-0 ${dark ? "text-gray-500" : "text-gray-400"}`} />}
                {item.href && i < allItems.length - 1 ? (
                  <Link href={item.href} className="hover:text-[#f97316] transition-colors font-medium">
                    {item.label}
                  </Link>
                ) : (
                  <span className={`font-semibold ${dark ? "text-white" : "text-[#1a1a1a]"}`}>{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
