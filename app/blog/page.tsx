import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import CTASection from "@/components/CTASection";
import { blogPosts, getFeaturedPosts } from "@/lib/blog-posts";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Roofing & Solar Blog | ProLine Roofing & Solar",
  description:
    "Expert roofing and solar advice for Somerset homeowners. Guides on roof repairs, solar panel costs, flat roofing, maintenance tips and local planning advice from ProLine Roofing & Solar in Taunton.",
  keywords: [
    "roofing blog Somerset",
    "solar panel advice",
    "roof repair guide",
    "flat roofing guide",
    "solar installation Somerset",
    "roofing tips UK",
    "ProLine Roofing blog",
  ],
  alternates: { canonical: "https://www.prolineroofingandsolar.co.uk/blog" },
};

const categoryConfig: Record<
  string,
  { label: string; colour: string; bg: string }
> = {
  roofing:     { label: "Roofing",     colour: "text-blue-700",   bg: "bg-blue-100"   },
  solar:       { label: "Solar",       colour: "text-yellow-700", bg: "bg-yellow-100" },
  guides:      { label: "Guides",      colour: "text-green-700",  bg: "bg-green-100"  },
  maintenance: { label: "Maintenance", colour: "text-purple-700", bg: "bg-purple-100" },
  local:       { label: "Local",       colour: "text-orange-700", bg: "bg-orange-100" },
};

function CategoryBadge({ category }: { category: string }) {
  const cfg = categoryConfig[category] ?? {
    label: category,
    colour: "text-gray-700",
    bg: "bg-gray-100",
  };
  return (
    <span
      className={`inline-block text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded ${cfg.bg} ${cfg.colour}`}
    >
      {cfg.label}
    </span>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function PostCard({ post }: { post: (typeof blogPosts)[number] }) {
  return (
    <article className="group flex flex-col bg-white border border-gray-100 hover:border-[#f97316] hover:shadow-lg transition-all duration-300 h-full">
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <CategoryBadge category={post.category} />
        </div>
        <h3 className="font-black text-[#1a1a1a] text-base leading-snug mb-3 group-hover:text-[#f97316] transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-3 mb-4">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(post.publishedAt)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime} min read
            </span>
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 text-[#f97316] font-bold text-xs uppercase tracking-wider hover:gap-2 transition-all"
          >
            Read More <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}

function FeaturedPostCard({ post }: { post: (typeof blogPosts)[number] }) {
  return (
    <article className="group relative flex flex-col bg-[#1a1a1a] text-white h-full border border-white/10 hover:border-[#f97316] transition-all duration-300">
      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-4">
          <CategoryBadge category={post.category} />
          <span className="text-xs font-bold text-[#f97316] uppercase tracking-wider">
            Featured
          </span>
        </div>
        <h3 className="font-black text-xl leading-snug mb-3 group-hover:text-[#f97316] transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-5">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between pt-5 border-t border-white/10">
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(post.publishedAt)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime} min read
            </span>
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#e8650f] text-white font-bold text-xs px-4 py-2 uppercase tracking-wider transition-colors"
          >
            Read <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}

const categories = [
  { value: "all",         label: "All Posts" },
  { value: "roofing",     label: "Roofing"   },
  { value: "solar",       label: "Solar"     },
  { value: "guides",      label: "Guides"    },
  { value: "maintenance", label: "Maintenance" },
  { value: "local",       label: "Local"     },
];

export default function BlogIndexPage() {
  const featured = getFeaturedPosts();

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-[#1a1a1a] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[#f97316] text-xs font-black uppercase tracking-[0.25em] mb-4">
            Roofing &amp; Solar Advice
          </p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-none mb-5">
            Expert Advice &amp; Guides
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Honest, practical roofing and solar guidance for Somerset homeowners —
            written by the ProLine Roofing &amp; Solar team in Taunton.
          </p>
        </div>
      </section>

      {/* ── Featured Posts ───────────────────────────────────── */}
      {featured.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-4 mb-10">
              <div className="flex-1 max-w-[60px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
                Featured Articles
              </span>
              <div className="flex-1 max-w-[60px] h-px bg-[#f97316]" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.slice(0, 3).map((post) => (
                <FeaturedPostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Category Filter ──────────────────────────────────── */}
      <section className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
            {categories.map((cat) => {
              const count =
                cat.value === "all"
                  ? blogPosts.length
                  : blogPosts.filter((p) => p.category === cat.value).length;
              return (
                <a
                  key={cat.value}
                  href={`#${cat.value}`}
                  className="shrink-0 flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-gray-600 hover:text-[#f97316] hover:bg-orange-50 rounded transition-colors whitespace-nowrap"
                >
                  {cat.label}
                  <span className="text-xs text-gray-400">({count})</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── All Posts Grid ───────────────────────────────────── */}
      <section id="all" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 max-w-[60px] h-px bg-[#f97316]" />
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
              All Articles
            </span>
            <div className="flex-1 max-w-[60px] h-px bg-[#f97316]" />
          </div>

          {/* Roofing */}
          <div id="roofing" className="mb-14 scroll-mt-16">
            <h2 className="text-2xl font-black text-[#1a1a1a] uppercase tracking-tight mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-blue-600 inline-block" />
              Roofing
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {blogPosts
                .filter((p) => p.category === "roofing")
                .map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
            </div>
          </div>

          {/* Solar */}
          <div id="solar" className="mb-14 scroll-mt-16">
            <h2 className="text-2xl font-black text-[#1a1a1a] uppercase tracking-tight mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-yellow-500 inline-block" />
              Solar
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {blogPosts
                .filter((p) => p.category === "solar")
                .map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
            </div>
          </div>

          {/* Guides */}
          <div id="guides" className="mb-14 scroll-mt-16">
            <h2 className="text-2xl font-black text-[#1a1a1a] uppercase tracking-tight mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-green-600 inline-block" />
              Guides
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {blogPosts
                .filter((p) => p.category === "guides")
                .map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
            </div>
          </div>

          {/* Maintenance */}
          <div id="maintenance" className="mb-14 scroll-mt-16">
            <h2 className="text-2xl font-black text-[#1a1a1a] uppercase tracking-tight mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-purple-600 inline-block" />
              Maintenance
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {blogPosts
                .filter((p) => p.category === "maintenance")
                .map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
            </div>
          </div>

          {/* Local — only show section if there are any */}
          {blogPosts.filter((p) => p.category === "local").length > 0 && (
            <div id="local" className="mb-14 scroll-mt-16">
              <h2 className="text-2xl font-black text-[#1a1a1a] uppercase tracking-tight mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-orange-500 inline-block" />
                Local
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {blogPosts
                  .filter((p) => p.category === "local")
                  .map((post) => (
                    <PostCard key={post.slug} post={post} />
                  ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Tags Cloud ───────────────────────────────────────── */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-5 flex items-center gap-2">
            <Tag className="w-3.5 h-3.5" /> Topics Covered
          </p>
          <div className="flex flex-wrap gap-2">
            {Array.from(new Set(blogPosts.flatMap((p) => p.tags)))
              .sort()
              .map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 bg-white border border-gray-200 rounded text-gray-600"
                >
                  {tag}
                </span>
              ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Need Roofing or Solar Advice?"
        subtext="Our team in Taunton is happy to answer questions and provide free, no-obligation quotes across Somerset."
      />
    </>
  );
}
