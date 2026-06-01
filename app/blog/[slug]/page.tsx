import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight, Phone, Tag } from "lucide-react";
import CTASection from "@/components/CTASection";
import {
  blogPosts,
  getBlogPostBySlug,
  getRelatedPosts,
} from "@/lib/blog-posts";

const BASE = "https://www.prolineroofingandsolar.co.uk";

/* ── Static params ──────────────────────────────────────────── */
export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

/* ── Metadata ───────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    alternates: { canonical: `${BASE}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

/* ── Helpers ────────────────────────────────────────────────── */
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

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/* Render content: split on \n\n, handle ## headers */
function renderContent(content: string) {
  const blocks = content.split(/\n\n+/);
  return blocks.map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2
          key={i}
          className="text-xl font-black text-[#1a1a1a] mt-10 mb-4 pt-2 border-t border-gray-100 uppercase tracking-tight"
        >
          {block.replace("## ", "")}
        </h2>
      );
    }
    if (block.startsWith("# ")) {
      return (
        <h3
          key={i}
          className="text-lg font-black text-[#1a1a1a] mt-8 mb-3 uppercase tracking-tight"
        >
          {block.replace("# ", "")}
        </h3>
      );
    }
    // Handle bold text inline
    const rendered = block.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    return (
      <p
        key={i}
        className="text-gray-700 leading-relaxed mb-0"
        dangerouslySetInnerHTML={{ __html: rendered }}
      />
    );
  });
}

/* Category → service links */
const serviceLinks: Record<string, { label: string; href: string }[]> = {
  roofing: [
    { label: "Roofing Services", href: "/roofing" },
    { label: "Emergency Roofing", href: "/services/emergency-roofing" },
    { label: "Flat Roofing",      href: "/services/flat-roofing" },
    { label: "Chimney Repairs",   href: "/services/chimney-repairs" },
  ],
  solar: [
    { label: "Solar Panels", href: "/solar" },
    { label: "Solar in Taunton",  href: "/solar-panels/taunton" },
    { label: "Solar in Somerset", href: "/solar-panels/bridgwater" },
    { label: "Get a Solar Quote", href: "/quote" },
  ],
  guides: [
    { label: "Roofing Services", href: "/roofing" },
    { label: "Solar Panels",     href: "/solar" },
    { label: "Get a Quote",      href: "/quote" },
    { label: "About ProLine",    href: "/about" },
  ],
  maintenance: [
    { label: "Roofing Services", href: "/roofing" },
    { label: "Fascias & Soffits", href: "/services/fascias-soffits" },
    { label: "Guttering",        href: "/services/guttering" },
    { label: "Emergency Roofing", href: "/services/emergency-roofing" },
  ],
  local: [
    { label: "Roofer in Taunton", href: "/roofer/taunton" },
    { label: "Locations Covered", href: "/locations" },
    { label: "Get a Quote",       href: "/quote" },
    { label: "Contact Us",        href: "/contact" },
  ],
};

/* Small related post card */
function RelatedCard({ post }: { post: (typeof blogPosts)[number] }) {
  const cfg = categoryConfig[post.category] ?? {
    label: post.category,
    colour: "text-gray-700",
    bg: "bg-gray-100",
  };
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col gap-2 p-4 border border-gray-100 hover:border-[#f97316] hover:shadow-md transition-all"
    >
      <span
        className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded w-fit ${cfg.bg} ${cfg.colour}`}
      >
        {cfg.label}
      </span>
      <span className="text-sm font-black text-[#1a1a1a] leading-snug group-hover:text-[#f97316] transition-colors line-clamp-2">
        {post.title}
      </span>
      <span className="text-xs text-gray-400 flex items-center gap-1">
        <Clock className="w-3 h-3" /> {post.readTime} min read
      </span>
    </Link>
  );
}

/* ── Page component ─────────────────────────────────────────── */
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const found = getBlogPostBySlug(slug);
  if (!found) notFound();
  const post = found as NonNullable<typeof found>;

  const related = getRelatedPosts(post.slug, 3);
  const catCfg = categoryConfig[post.category] ?? {
    label: post.category,
    colour: "text-gray-700",
    bg: "bg-gray-100",
  };
  const links = serviceLinks[post.category] ?? serviceLinks.guides;

  /* ── JSON-LD ────────────────────────────────────────────── */
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "ProLine Roofing & Solar",
      url: BASE,
    },
    datePublished: post.publishedAt,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE}/blog/${post.slug}` },
    keywords: post.tags.join(", "),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",   item: BASE },
      { "@type": "ListItem", position: 2, name: "Blog",   item: `${BASE}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${BASE}/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── Article Hero ─────────────────────────────────────── */}
      <section className="bg-[#1a1a1a] py-16 text-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
            <Link href="/" className="hover:text-[#f97316] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#f97316] transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gray-300 truncate max-w-[200px]">{post.title}</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <span
              className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded ${catCfg.bg} ${catCfg.colour}`}
            >
              {catCfg.label}
            </span>
            {post.featured && (
              <span className="text-xs font-bold text-[#f97316] uppercase tracking-wider">
                Featured
              </span>
            )}
          </div>

          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight max-w-4xl mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formatDate(post.publishedAt)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime} min read
            </span>
            <span className="text-gray-500">By {post.author}</span>
          </div>
        </div>
      </section>

      {/* ── Main Content ─────────────────────────────────────── */}
      <div className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12 xl:gap-16 items-start">

            {/* Article body */}
            <article>
              {/* Excerpt / lead */}
              <p className="text-lg text-gray-600 leading-relaxed mb-8 pb-8 border-b border-gray-100 font-medium italic">
                {post.excerpt}
              </p>

              {/* Content */}
              <div className="space-y-5 text-[15px]">
                {renderContent(post.content)}
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-100">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-3 flex items-center gap-2">
                  <Tag className="w-3.5 h-3.5" /> Tags
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 bg-gray-100 text-gray-600 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Back + Service links */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-[#f97316] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Blog
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-6">
              {/* Quote CTA */}
              <div className="bg-[#f97316] p-6 text-white">
                <h3 className="font-black text-lg uppercase tracking-tight mb-2">
                  Free Quote
                </h3>
                <p className="text-orange-100 text-sm mb-5 leading-relaxed">
                  Based in Taunton, Somerset. Free surveys, written quotes, no
                  pressure.
                </p>
                <a
                  href="tel:07587478826"
                  className="flex items-center gap-2 bg-white text-[#f97316] font-bold px-4 py-3 text-sm hover:bg-orange-50 transition-colors mb-3"
                >
                  <Phone className="w-4 h-4" /> 07587 478826
                </a>
                <Link
                  href="/quote"
                  className="flex items-center justify-between bg-[#1a1a1a] text-white font-bold px-4 py-3 text-sm hover:bg-black transition-colors"
                >
                  Get a Free Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Related posts */}
              {related.length > 0 && (
                <div>
                  <h3 className="font-black text-sm uppercase tracking-[0.15em] text-gray-400 mb-4">
                    Related Articles
                  </h3>
                  <div className="space-y-3">
                    {related.map((rp) => (
                      <RelatedCard key={rp.slug} post={rp} />
                    ))}
                  </div>
                </div>
              )}

              {/* Service links */}
              <div>
                <h3 className="font-black text-sm uppercase tracking-[0.15em] text-gray-400 mb-4">
                  Our Services
                </h3>
                <div className="space-y-2">
                  {links.map(({ label, href }) => (
                    <Link
                      key={href}
                      href={href}
                      className="flex items-center justify-between p-3 border border-gray-100 hover:border-[#f97316] hover:text-[#f97316] text-sm font-bold text-gray-700 transition-all group"
                    >
                      {label}
                      <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#f97316] transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* ── Related Posts Grid ───────────────────────────────── */}
      {related.length > 0 && (
        <section className="py-14 bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-4 mb-10">
              <div className="flex-1 max-w-[60px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
                You May Also Like
              </span>
              <div className="flex-1 max-w-[60px] h-px bg-[#f97316]" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rp) => {
                const cfg = categoryConfig[rp.category] ?? {
                  label: rp.category,
                  colour: "text-gray-700",
                  bg: "bg-gray-100",
                };
                return (
                  <article
                    key={rp.slug}
                    className="group flex flex-col bg-white border border-gray-100 hover:border-[#f97316] hover:shadow-lg transition-all duration-300"
                  >
                    <div className="p-6 flex flex-col flex-1">
                      <span
                        className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded w-fit mb-3 ${cfg.bg} ${cfg.colour}`}
                      >
                        {cfg.label}
                      </span>
                      <h3 className="font-black text-[#1a1a1a] text-base leading-snug mb-3 group-hover:text-[#f97316] transition-colors line-clamp-2">
                        {rp.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-2 mb-4">
                        {rp.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" /> {rp.readTime} min read
                        </span>
                        <Link
                          href={`/blog/${rp.slug}`}
                          className="inline-flex items-center gap-1 text-[#f97316] font-bold text-xs uppercase tracking-wider hover:gap-2 transition-all"
                        >
                          Read <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <CTASection
        heading="Get a Free Quote Today"
        subtext="ProLine Roofing & Solar covers Taunton, Somerset and the South West. Call or request a quote online."
      />
    </>
  );
}
