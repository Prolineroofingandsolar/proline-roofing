import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { blogPosts, getFeaturedPosts, getPostsByCategory } from "@/lib/blog-posts";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Roofing & Solar Blog | Guides, Tips & Advice | ProLine Somerset",
  description:
    "Expert roofing and solar advice for homeowners in Somerset. Cost guides, repair tips, solar FAQs, and local insights from ProLine Roofing & Solar.",
  keywords: ["roofing blog somerset", "solar panel advice", "roof repair tips", "roofing guides uk", "somerset roofer blog"],
  alternates: { canonical: "https://www.prolineroofingandsolar.co.uk/blog" },
  openGraph: {
    title: "Roofing & Solar Blog | ProLine Roofing & Solar",
    description: "Expert roofing and solar advice for homeowners in Somerset.",
    url: "https://www.prolineroofingandsolar.co.uk/blog",
  },
};

const categoryLabels: Record<string, string> = {
  roofing: "Roofing",
  solar: "Solar",
  guides: "Guides",
  maintenance: "Maintenance",
  local: "Local",
};

const categoryColors: Record<string, string> = {
  roofing: "bg-[#f97316] text-white",
  solar: "bg-yellow-500 text-white",
  guides: "bg-blue-600 text-white",
  maintenance: "bg-green-600 text-white",
  local: "bg-purple-600 text-white",
};

function PostCard({ post, featured = false }: { post: (typeof blogPosts)[0]; featured?: boolean }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article className={`border border-gray-100 hover:border-[#f97316] transition-all hover:shadow-md h-full flex flex-col ${featured ? "p-8" : "p-6"}`}>
        <div className="flex items-center gap-3 mb-4">
          <span className={`text-xs font-black uppercase tracking-widest px-2 py-1 ${categoryColors[post.category]}`}>
            {categoryLabels[post.category]}
          </span>
          <span className="flex items-center gap-1 text-gray-400 text-xs">
            <Clock className="w-3 h-3" /> {post.readTime} min read
          </span>
        </div>
        <h2 className={`font-black text-[#1a1a1a] group-hover:text-[#f97316] transition-colors leading-tight mb-3 ${featured ? "text-2xl" : "text-base uppercase tracking-tight"}`}>
          {post.title}
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{post.excerpt}</p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <span className="text-xs text-gray-400">
            {new Date(post.publishedAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </span>
          <span className="text-[#f97316] text-xs font-black uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
            Read More <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </article>
    </Link>
  );
}

export default function BlogPage() {
  const featured = getFeaturedPosts();
  const roofingPosts = getPostsByCategory("roofing").slice(0, 4);
  const solarPosts = getPostsByCategory("solar").slice(0, 4);
  const guidePosts = getPostsByCategory("guides").slice(0, 4);
  const allCategories = ["roofing", "solar", "guides", "maintenance", "local"] as const;

  return (
    <>
      <section className="relative bg-[#111111] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: "url('/image1.jpeg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/85" />
        <div className="relative max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <BreadcrumbNav items={[{ label: "Blog & Advice" }]} dark />
            <p className="text-[#f97316] text-xs font-black uppercase tracking-[0.25em] mb-4 mt-4">Expert Roofing &amp; Solar Advice</p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-5 uppercase leading-none">
              Roofing &amp; Solar<br /><span className="text-[#f97316]">Blog</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl">
              Cost guides, repair advice, solar FAQs and local insights from our team of experienced Somerset roofers. {blogPosts.length} articles and growing.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-[#1a1a1a] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap gap-3 items-center">
          <span className="text-gray-400 text-xs uppercase tracking-widest font-semibold mr-2">Browse:</span>
          {allCategories.map((cat) => (
            <span key={cat} className={`text-xs font-black uppercase tracking-widest px-3 py-1.5 cursor-default ${categoryColors[cat]}`}>
              {categoryLabels[cat]}
            </span>
          ))}
        </div>
      </section>

      {/* Featured Posts */}
      {featured.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection className="mb-10">
              <div className="flex items-center gap-4 mb-2">
                <div className="h-px flex-1 max-w-[60px] bg-[#f97316]" />
                <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">Featured</span>
              </div>
              <h2 className="text-2xl font-black text-[#1a1a1a] uppercase tracking-tight">Most Popular Articles</h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-6">
              {featured.slice(0, 2).map((post) => (
                <AnimatedSection key={post.slug}>
                  <PostCard post={post} featured />
                </AnimatedSection>
              ))}
            </div>
            {featured.length > 2 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
                {featured.slice(2).map((post) => (
                  <AnimatedSection key={post.slug}>
                    <PostCard post={post} />
                  </AnimatedSection>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Roofing Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="flex items-center justify-between mb-10">
            <div>
              <div className="flex items-center gap-4 mb-2">
                <div className="h-px flex-1 max-w-[60px] bg-[#f97316]" />
                <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">Roofing</span>
              </div>
              <h2 className="text-2xl font-black text-[#1a1a1a] uppercase tracking-tight">Roofing Guides</h2>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {roofingPosts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.07}>
                <PostCard post={post} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Solar Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="mb-10">
            <div className="flex items-center gap-4 mb-2">
              <div className="h-px flex-1 max-w-[60px] bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">Solar</span>
            </div>
            <h2 className="text-2xl font-black text-[#1a1a1a] uppercase tracking-tight">Solar Panel Guides</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {solarPosts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.07}>
                <PostCard post={post} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-px flex-1 max-w-[80px] bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">All Articles</span>
              <div className="h-px flex-1 max-w-[80px] bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">Every Article</h2>
            <p className="text-gray-400 text-sm mt-2">{blogPosts.length} articles covering roofing, solar, costs and local advice</p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogPosts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={(i % 6) * 0.05}>
                <Link href={`/blog/${post.slug}`} className="group flex flex-col sm:flex-row gap-4 p-5 border border-white/10 hover:border-[#f97316] transition-all">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-black uppercase tracking-wider px-2 py-0.5 shrink-0 ${categoryColors[post.category]}`}>
                        {categoryLabels[post.category]}
                      </span>
                    </div>
                    <h3 className="font-black text-white text-sm uppercase tracking-tight group-hover:text-[#f97316] transition-colors leading-tight mb-1">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{post.excerpt}</p>
                  </div>
                  <div className="shrink-0 flex sm:flex-col items-center sm:items-end gap-2 sm:gap-1">
                    <span className="text-gray-500 text-xs whitespace-nowrap">
                      {new Date(post.publishedAt).toLocaleDateString("en-GB", { month: "short", year: "numeric" })}
                    </span>
                    <span className="flex items-center gap-1 text-gray-500 text-xs whitespace-nowrap">
                      <Clock className="w-3 h-3" />{post.readTime}m
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#f97316] hidden sm:block mt-auto" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tags cloud */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-sm font-black text-[#1a1a1a] uppercase tracking-widest mb-6 text-center">Browse by Topic</h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {Array.from(new Set(blogPosts.flatMap((p) => p.tags))).map((tag) => (
              <span key={tag} className="flex items-center gap-1 border border-gray-200 hover:border-[#f97316] hover:text-[#f97316] text-gray-600 text-xs px-3 py-1.5 transition-colors cursor-default">
                <Tag className="w-3 h-3" />{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Need a Roofer or Solar Quote?" subtext="Get a free, no-obligation written quote from ProLine Roofing & Solar — serving Somerset since 1994." />
    </>
  );
}
