import type { Metadata } from "next";
import Link from "next/link";
import { Star, ArrowRight, ExternalLink } from "lucide-react";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";
import GoogleReviewButton from "@/components/GoogleReviewButton";
import { FACEBOOK_REVIEW_URL, BARK_REVIEW_URL } from "@/lib/links";
import { client } from "@/sanity/client";

export const metadata: Metadata = {
  title: "Customer Reviews | ProLine Roofing & Solar",
  description:
    "Read 5-star customer reviews for ProLine Roofing & Solar in Taunton, Somerset. Verified reviews from real customers across the South West.",
};

export const revalidate = 60;

interface SanityReview {
  _id: string;
  name: string;
  location: string;
  service: string;
  text: string;
  date: string;
  rating: number;
  source?: "google" | "facebook" | "bark" | "mybuilder";
}

const staticReviews = [
  { name: "Sarah M.", location: "Taunton, Somerset", rating: 5, text: "Absolutely brilliant service from start to finish. The team replaced our entire roof and it looks fantastic. Tidy workers, great communication, and the price was very fair. Would highly recommend ProLine to anyone.", service: "New Roof", date: "March 2025", source: "google" },
  { name: "David R.", location: "Wellington, Somerset", rating: 5, text: "Had solar panels fitted last month — what a difference! The guys were professional and left everything spotless. Already seeing the savings on our electricity bills. Excellent company.", service: "Solar PV", date: "April 2025", source: "facebook" },
  { name: "Karen T.", location: "Bridgwater, Somerset", rating: 5, text: "Called ProLine after a storm damaged our roof. They came out the very next day, assessed the damage, and had it repaired within the week. Fantastic response time and quality workmanship.", service: "Roof Repairs", date: "January 2025", source: "bark" },
  { name: "James L.", location: "Taunton, Somerset", rating: 5, text: "We had a flat roof on our extension that was leaking badly. ProLine came out, gave us a fair quote, and replaced the whole thing with a GRP fibreglass roof. Brilliant job — no more leaks!", service: "Flat Roofing", date: "February 2025", source: "google" },
  { name: "Helen W.", location: "Yeovil, Somerset", rating: 5, text: "Very impressed with the whole team. They installed our solar panels and battery storage and took care of everything — from design to DNO application. Highly professional.", service: "Solar PV", date: "March 2025", source: "mybuilder" },
  { name: "Mike P.", location: "Taunton, Somerset", rating: 5, text: "ProLine re-roofed our 1930s semi-detached and did a superb job. The tiles match perfectly and the ridge looks immaculate. Clean, courteous team who worked efficiently every day.", service: "New Roof", date: "December 2024", source: "google" },
  { name: "Angela F.", location: "Bridgwater, Somerset", rating: 5, text: "Had a persistent leak that two other roofers failed to fix. ProLine diagnosed it immediately and sorted it out in a few hours. Genuine experts — wish I'd called them first.", service: "Roof Repairs", date: "November 2024", source: "facebook" },
  { name: "Tom H.", location: "Wellington, Somerset", rating: 5, text: "Solar installation was seamless from start to finish. ProLine handled everything — scaffolding, panels, inverter, and battery. Very knowledgeable team who answered all my questions.", service: "Solar PV", date: "October 2024", source: "bark" },
  { name: "Claire S.", location: "Taunton, Somerset", rating: 5, text: "Excellent company. Had the entire roof stripped and re-tiled, plus new fascias and guttering. The quote was detailed and the price was spot on. Whole job done in three days.", service: "New Roof", date: "September 2024", source: "google" },
];

const sourceBadge: Record<string, { label: string; bg: string; text: string }> = {
  google:    { label: "Google",     bg: "bg-blue-50",   text: "text-blue-600" },
  facebook:  { label: "Facebook",   bg: "bg-indigo-50", text: "text-indigo-600" },
  bark:      { label: "Bark.com",   bg: "bg-green-50",  text: "text-green-700" },
  mybuilder: { label: "MyBuilder",  bg: "bg-yellow-50", text: "text-yellow-700" },
};

const serviceColours: Record<string, string> = {
  "New Roof": "bg-blue-50 text-blue-700",
  "Solar PV": "bg-yellow-50 text-yellow-700",
  "Flat Roofing": "bg-green-50 text-green-700",
  "Roof Repairs": "bg-orange-50 text-[#f97316]",
  "Chimney Work": "bg-red-50 text-red-700",
  "Fascias": "bg-purple-50 text-purple-700",
  "Emergency": "bg-gray-100 text-gray-700",
};

async function getReviews() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return null;
  try {
    const data = await client.fetch<SanityReview[]>(
      `*[_type == "review"] | order(_createdAt desc)`
    );
    return data && data.length > 0 ? data : null;
  } catch {
    return null;
  }
}

export default async function ReviewsPage() {
  const sanityReviews = await getReviews();
  const reviews = sanityReviews ?? staticReviews;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#111111] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/image0.jpeg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
            <p className="text-[#f97316] text-xs font-black uppercase tracking-[0.25em] mb-3">Customer Reviews</p>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">What Our Customers Say</h1>
            <div className="flex items-center justify-center gap-1 my-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-[#f97316] text-[#f97316]" />)}
            </div>
            <p className="text-gray-300 text-lg">
              <span className="text-white font-black">5.0 / 5</span> — Verified reviews across Google, Facebook &amp; Bark
            </p>
            <div className="flex items-center justify-center gap-3 mt-4 flex-wrap">
              {["Google", "Facebook", "Bark.com", "MyBuilder"].map((p) => (
                <span key={p} className="text-xs font-bold bg-white/10 text-white px-3 py-1">{p}</span>
              ))}
            </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-[#f97316] py-6">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-3 gap-4 text-center">
          {[
            { value: "30+", label: "Total Reviews" },
            { value: "5.0 ★", label: "Average Rating" },
            { value: "100%", label: "Would Recommend" },
          ].map(({ value, label }) => (
            <AnimatedSection key={label}>
              <p className="text-white font-black text-2xl md:text-3xl">{value}</p>
              <p className="text-orange-100 text-xs uppercase tracking-wider mt-1">{label}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {sanityReviews && (
            <AnimatedSection className="text-center mb-10">
              <p className="text-gray-400 text-xs">
                Showing {sanityReviews.length} review{sanityReviews.length !== 1 ? "s" : ""} — manage them at{" "}
                <strong>/studio</strong>
              </p>
            </AnimatedSection>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => {
              const key = "name" in r ? r.name + (r.date ?? i) : (r as SanityReview)._id;
              return (
                <AnimatedSection key={key} delay={(i % 3) * 0.1}>
                  <div className="bg-white border border-gray-100 p-6 shadow-sm hover:shadow-md hover:border-[#f97316] transition-all duration-300 h-full flex flex-col">
                    {/* Stars */}
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(r.rating ?? 5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-[#f97316] text-[#f97316]" />
                      ))}
                    </div>
                    {/* Review text */}
                    <p className="text-gray-600 text-sm leading-relaxed italic flex-1 mb-4">&ldquo;{r.text}&rdquo;</p>
                    {/* Footer */}
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-end justify-between gap-2 mb-2">
                        <div>
                          <p className="font-black text-gray-900 text-sm">— {r.name}</p>
                          <p className="text-gray-400 text-xs">{r.location}</p>
                          {r.date && <p className="text-gray-400 text-xs">{r.date}</p>}
                        </div>
                        {r.service && (
                          <span className={`text-xs font-bold px-2.5 py-1 shrink-0 ${serviceColours[r.service] ?? "bg-gray-100 text-gray-600"}`}>
                            {r.service}
                          </span>
                        )}
                      </div>
                      {r.source && sourceBadge[r.source] && (
                        <span className={`inline-block text-xs font-bold px-2 py-0.5 ${sourceBadge[r.source].bg} ${sourceBadge[r.source].text}`}>
                          {sourceBadge[r.source].label}
                        </span>
                      )}
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection className="text-center mt-14">
            <p className="text-gray-900 font-black text-xl uppercase mb-2">Had a great experience?</p>
            <p className="text-gray-500 text-sm mb-8">Leave us a review on your preferred platform — it really helps!</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <GoogleReviewButton variant="solid" label="Google Review" className="w-full sm:w-auto justify-center" />
              <a
                href={FACEBOOK_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#1464d2] text-white font-black px-6 py-3 uppercase tracking-widest text-sm transition-all hover:scale-105 w-full sm:w-auto justify-center"
              >
                <ExternalLink className="w-4 h-4" /> Facebook Review
              </a>
              <a
                href={BARK_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1a1a1a] hover:bg-black text-white font-black px-6 py-3 uppercase tracking-widest text-sm transition-all hover:scale-105 w-full sm:w-auto justify-center"
              >
                <ExternalLink className="w-4 h-4" /> Bark Review
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection />
    </>
  );
}
