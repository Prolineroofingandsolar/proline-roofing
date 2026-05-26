import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  date?: string;
}

export default function TestimonialCard({
  name,
  location,
  rating,
  text,
  service,
  date,
}: TestimonialCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? "fill-[#f97316] text-[#f97316]" : "text-gray-200"
              }`}
            />
          ))}
        </div>
        <Quote className="w-6 h-6 text-[#f97316] opacity-40" />
      </div>
      <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-5">&ldquo;{text}&rdquo;</p>
      <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
        <div>
          <p className="font-bold text-sm text-gray-900">{name}</p>
          <p className="text-xs text-gray-500">{location}</p>
        </div>
        <div className="text-right">
          <span className="inline-block bg-orange-50 text-[#f97316] text-xs font-semibold px-2.5 py-1 rounded">
            {service}
          </span>
          {date && <p className="text-xs text-gray-400 mt-1">{date}</p>}
        </div>
      </div>
    </div>
  );
}
