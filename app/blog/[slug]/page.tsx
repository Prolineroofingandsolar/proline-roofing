import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, Calendar, User, Tag } from "lucide-react";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { blogPosts, getBlogPostBySlug, getRelatedPosts } from "@/lib/blog-posts";

export const dynamic = "force-static";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  const base = "https://www.prolineroofingandsolar.co.uk";

  return {
    title: `${post.title} | ProLine Roofing & Solar`,
    description: post.excerpt,
    keywords: post.tags,
    alternates: { canonical: `${base}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${base}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
  };
}

const categoryColors: Record<string, string> = {
  roofing: "bg-[#f97316] text-white",
  solar: "bg-yellow-500 text-white",
  guides: "bg-blue-600 text-white",
  maintenance: "bg-green-600 text-white",
  local: "bg-purple-600 text-white",
};

const categoryLabels: Record<string, string> = {
  roofing: "Roofing",
  solar: "Solar",
  guides: "Guides",
  maintenance: "Maintenance",
  local: "Local",
};

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="text-2xl font-black text-[#1a1a1a] uppercase tracking-tight mt-10 mb-4 pt-6 border-t border-gray-100">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={key++} className="text-lg font-black text-[#1a1a1a] uppercase tracking-tight mt-8 mb-3">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("- ")) {
      const listItems: string[] = [];
      let j = i;
      while (j < lines.length && lines[j].startsWith("- ")) {
        listItems.push(lines[j].slice(2));
        j++;
      }
      elements.push(
        <ul key={key++} className="space-y-2 my-4 pl-4">
          {listItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] shrink-0 mt-2" />
              <span dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
            </li>
          ))}
        </ul>
      );
      i = j - 1;
    } else if (/^\d+\. /.test(line)) {
      const listItems: string[] = [];
      let j = i;
      while (j < lines.length && /^\d+\. /.test(lines[j])) {
        listItems.push(lines[j].replace(/^\d+\. /, ""));
        j++;
      }
      elements.push(
        <ol key={key++} className="space-y-2 my-4 pl-4">
          {listItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
              <span className="w-5 h-5 shrink-0 bg-[#f97316] text-white text-xs font-black flex items-center justify-center rounded-sm mt-0.5">
                {idx + 1}
              </span>
              <span dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
            </li>
          ))}
        </ol>
      );
      i = j - 1;
    } else if (line.trim() === "") {
      // skip blank lines
    } else {
      elements.push(
        <p key={key++} className="text-gray-600 text-sm leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: formatInline(line) }} />
      );
    }
  }

  return elements;
}

function formatInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>");
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);
  const base = "https://www.prolineroofingandsolar.co.uk";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: "ProLine Roofing & Solar",
      url: base,
    },
    publisher: {
      "@type": "Organization",
      name: "ProLine Roofing & Solar",
      url: base,
      logo: {
        "@type": "ImageObject",
        url: `${base}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${base}/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
  };

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <section className="relative bg-[#111111] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: "url('/image1.jpeg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/85" />
        <div className="relative max-w-4xl mx-auto px-4">
          <AnimatedSection>
            <BreadcrumbNav
              items={[{ label: "Blog", href: "/blog" }, { label: post.title }]}
              dark
            />
            <div className="flex items-center gap-3 mt-6 mb-5">
              <span className={`text-xs font-black uppercase tracking-widest px-3 py-1.5 ${categoryColors[post.category]}`}>
                {categoryLabels[post.category]}
              </span>
              {post.featured && (
                <span className="text-xs font-black uppercase tracking-widest px-3 py-1.5 bg-white/10 text-white">Featured</span>
              )}
            </div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-5 leading-tight">
              {post.title}
            </h1>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl">{post.excerpt}</p>
            <div className="flex flex-wrap items-center gap-4 text-gray-400 text-xs">
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" /> {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(post.publishedAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> {post.readTime} min read
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            {/* Main content */}
            <article className="prose-custom min-w-0">
              <AnimatedSection>
                {renderContent(post.content)}
              </AnimatedSection>

              {/* Tags */}
              <div className="mt-10 pt-6 border-t border-gray-100">
                <div className="flex flex-wrap gap-2 items-center">
                  <Tag className="w-4 h-4 text-gray-400" />
                  {post.tags.map((tag) => (
                    <span key={tag} className="border border-gray-200 text-gray-500 text-xs px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Prev / Next */}
              <div className="mt-10 pt-6 border-t border-gray-100 grid sm:grid-cols-2 gap-4">
                {prevPost ? (
                  <Link href={`/blog/${prevPost.slug}`} className="group flex items-start gap-3 p-4 border border-gray-100 hover:border-[#f97316] transition-all">
                    <ArrowLeft className="w-4 h-4 text-[#f97316] shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Previous</p>
                      <p className="text-sm font-bold text-[#1a1a1a] group-hover:text-[#f97316] transition-colors leading-tight">{prevPost.title}</p>
                    </div>
                  </Link>
                ) : <div />}
                {nextPost && (
                  <Link href={`/blog/${nextPost.slug}`} className="group flex items-start gap-3 p-4 border border-gray-100 hover:border-[#f97316] transition-all text-right sm:justify-end">
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Next</p>
                      <p className="text-sm font-bold text-[#1a1a1a] group-hover:text-[#f97316] transition-colors leading-tight">{nextPost.title}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#f97316] shrink-0 mt-1" />
                  </Link>
                )}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* CTA */}
              <div className="bg-[#f97316] p-6 text-white">
                <h3 className="font-black text-sm uppercase tracking-widest mb-2">Get a Free Quote</h3>
                <p className="text-orange-100 text-sm mb-4">Serving Somerset since 1994. Free written quotes, fully insured.</p>
                <Link href="/quote" className="block bg-white text-[#f97316] font-black text-sm uppercase tracking-widest text-center py-3 hover:bg-orange-50 transition-colors">
                  Request Quote
                </Link>
                <a href="tel:07587478826" className="block mt-2 border border-white/40 text-white font-black text-sm uppercase tracking-widest text-center py-3 hover:bg-white/10 transition-colors">
                  07587 478826
                </a>
              </div>

              {/* Related posts */}
              {related.length > 0 && (
                <div className="border border-gray-100 p-6">
                  <h3 className="font-black text-[#1a1a1a] text-xs uppercase tracking-widest mb-4 pb-3 border-b border-gray-100">Related Articles</h3>
                  <div className="space-y-4">
                    {related.map((r) => (
                      <Link key={r.slug} href={`/blog/${r.slug}`} className="group block">
                        <span className={`text-xs font-black uppercase tracking-wider px-2 py-0.5 ${categoryColors[r.category]}`}>
                          {categoryLabels[r.category]}
                        </span>
                        <p className="text-sm font-bold text-[#1a1a1a] group-hover:text-[#f97316] transition-colors mt-1 leading-tight">
                          {r.title}
                        </p>
                        <p className="text-gray-400 text-xs mt-1 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {r.readTime} min read
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Services quick links */}
              <div className="border border-gray-100 p-6">
                <h3 className="font-black text-[#1a1a1a] text-xs uppercase tracking-widest mb-4 pb-3 border-b border-gray-100">Our Services</h3>
                <ul className="space-y-2">
                  {[
                    { l: "Roof Repairs", h: "/services/roof-repairs" },
                    { l: "Flat Roofing", h: "/services/flat-roofing" },
                    { l: "Slate Roofing", h: "/services/slate-roofing" },
                    { l: "Chimney Repairs", h: "/services/chimney-repairs" },
                    { l: "Solar Panels", h: "/solar" },
                    { l: "Emergency Roofing", h: "/services/emergency-roofing" },
                    { l: "Commercial Roofing", h: "/services/commercial-roofing" },
                  ].map(({ l, h }) => (
                    <li key={l}>
                      <Link href={h} className="flex items-center justify-between text-sm text-gray-600 hover:text-[#f97316] transition-colors group">
                        <span>{l}</span>
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#f97316]" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Location quick links */}
              <div className="border border-gray-100 p-6">
                <h3 className="font-black text-[#1a1a1a] text-xs uppercase tracking-widest mb-4 pb-3 border-b border-gray-100">Areas We Cover</h3>
                <div className="flex flex-wrap gap-2">
                  {["Taunton", "Bridgwater", "Bath", "Bristol", "Exeter", "Yeovil", "Wellington"].map((city) => (
                    <Link
                      key={city}
                      href={`/roofer/${city.toLowerCase().replace(/ /g, "-")}`}
                      className="border border-gray-200 hover:border-[#f97316] hover:text-[#f97316] text-gray-600 text-xs px-2 py-1 transition-colors"
                    >
                      {city}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTASection heading="Need a Roofing or Solar Quote?" subtext="Call ProLine on 07587 478826 or request a free written quote online — no obligation." />
    </>
  );
}
