import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";
import { client, urlFor } from "@/sanity/client";

export const metadata: Metadata = {
  title: "Our Projects | ProLine Roofing & Solar",
  description:
    "Browse completed roofing and solar projects by ProLine in Taunton and across Somerset. See our workmanship for yourself.",
};

// Revalidate every 60 seconds so new Sanity projects appear without redeploy
export const revalidate = 60;

interface SanityProject {
  _id: string;
  title: string;
  type: string;
  location: string;
  description: string;
  image: { asset: { _ref: string } };
  order: number;
}

const staticProjects = [
  {
    title: "Full Roof Replacement",
    type: "New Roof",
    location: "Taunton, Somerset",
    description: "Complete strip and re-roof on a 1970s detached property. Premium concrete interlocking tiles, new insulation, UPVC fascias and guttering.",
    img: "/image0.jpeg",
  },
  {
    title: "4kW Solar PV System",
    type: "Solar PV",
    location: "Wellington, Somerset",
    description: "4kW solar system with 10 x 400W panels and a 5kWh battery storage unit. Customer now generates around 70% of their own electricity.",
    img: "/UK_MKT_PHO_REF_Solar_Grasmere_002.jpg",
  },
  {
    title: "GRP Flat Roof",
    type: "Flat Roofing",
    location: "Bridgwater, Somerset",
    description: "Full replacement of a failed felt flat roof on a rear kitchen extension. 25-year GRP fibreglass system with new Velux roof light.",
    img: "/image1.jpeg",
  },
  {
    title: "Slate Roof Repair",
    type: "Roof Repairs",
    location: "Taunton, Somerset",
    description: "Storm damage repair on a Victorian-era terraced property. Replaced 40+ broken Welsh slates, re-pointed ridge, re-sealed lead flashings.",
    img: "/image2.jpeg",
  },
  {
    title: "6kW Solar + Battery",
    type: "Solar PV",
    location: "Taunton, Somerset",
    description: "6kW solar system paired with a 10kWh GivEnergy battery. Customer exports surplus power under the SEG tariff.",
    img: "/image3.jpeg",
  },
  {
    title: "New Build Roof",
    type: "New Roof",
    location: "Yeovil, Somerset",
    description: "Full roofing package for a new-build detached property. Tile installation, UPVC trims, lead valleys, and ridge and hip detailing.",
    img: "/image4.jpeg",
  },
  {
    title: "Chimney Rebuild",
    type: "Chimney Work",
    location: "Bridgwater, Somerset",
    description: "Full chimney stack rebuild on a 1950s semi. New pots, lead flashing, repointing and waterproofing treatment applied.",
    img: "/image5.jpeg",
  },
  {
    title: "Fascias & Guttering",
    type: "Fascias",
    location: "Wellington, Somerset",
    description: "Full UPVC fascia, soffit and guttering replacement on a detached bungalow. Ogee-profile guttering with new downpipes.",
    img: "/image6.jpeg",
  },
  {
    title: "3kW Solar System",
    type: "Solar PV",
    location: "Glastonbury, Somerset",
    description: "3kW solar system for a 2-bed cottage. 8 x 375W panels with SolarEdge inverter. Generating over 60% of household energy.",
    img: "/UK_MKT_PHO_REF_Solar_Grasmere_002.jpg",
  },
];

const typeColours: Record<string, string> = {
  "New Roof": "bg-blue-50 text-blue-700",
  "Solar PV": "bg-yellow-50 text-yellow-700",
  "Flat Roofing": "bg-green-50 text-green-700",
  "Roof Repairs": "bg-orange-50 text-[#f97316]",
  "Chimney Work": "bg-red-50 text-red-700",
  "Fascias": "bg-purple-50 text-purple-700",
  "Leadwork": "bg-gray-100 text-gray-700",
};

async function getProjects() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return null;
  try {
    const data = await client.fetch<SanityProject[]>(
      `*[_type == "project"] | order(order asc, _createdAt desc)`
    );
    return data && data.length > 0 ? data : null;
  } catch {
    return null;
  }
}

export default async function ProjectsPage() {
  const sanityProjects = await getProjects();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#111111] text-white py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/image4.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-[#f97316] text-xs font-black uppercase tracking-[0.25em] mb-3">Our Work</p>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">Recent Projects</h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              A selection of roofing and solar projects completed across Taunton and the South West. Quality you can see for yourself.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">Completed Work</span>
              <div className="flex-1 max-w-[80px] h-px bg-[#f97316]" />
            </div>
            <h2 className="text-3xl font-black text-[#1a1a1a] uppercase">Project Gallery</h2>
            {!sanityProjects && (
              <p className="text-gray-400 text-xs mt-2">Add your own projects via the Studio at <strong>/studio</strong></p>
            )}
          </AnimatedSection>

          {sanityProjects ? (
            /* ── Sanity projects ── */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sanityProjects.map((p, i) => (
                <AnimatedSection key={p._id} delay={(i % 3) * 0.1}>
                  <div className="bg-white border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg hover:border-[#f97316] transition-all duration-300 group h-full flex flex-col">
                    {p.image && (
                      <div className="overflow-hidden h-52 relative">
                        <Image
                          src={urlFor(p.image).width(600).height(416).fit("crop").url()}
                          alt={p.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-xs font-bold px-2.5 py-1 ${typeColours[p.type] ?? "bg-gray-100 text-gray-700"}`}>
                          {p.type}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-gray-400">
                          <MapPin className="w-3.5 h-3.5" /> {p.location}
                        </span>
                      </div>
                      <h3 className="font-black text-gray-900 mb-2">{p.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed flex-1">{p.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            /* ── Static fallback ── */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {staticProjects.map((p, i) => (
                <AnimatedSection key={p.title} delay={(i % 3) * 0.1}>
                  <div className="bg-white border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg hover:border-[#f97316] transition-all duration-300 group">
                    <div className="overflow-hidden h-52">
                      <div
                        className="h-full w-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                        style={{ backgroundImage: `url('${p.img}')` }}
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-xs font-bold px-2.5 py-1 ${typeColours[p.type] ?? "bg-gray-100 text-gray-700"}`}>
                          {p.type}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-gray-400">
                          <MapPin className="w-3.5 h-3.5" /> {p.location}
                        </span>
                      </div>
                      <h3 className="font-black text-gray-900 mb-2">{p.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{p.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}

          <AnimatedSection className="text-center mt-14">
            <p className="text-gray-500 text-sm mb-5">Ready to start your project?</p>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#e8650f] text-white font-black px-7 py-4 uppercase tracking-widest text-sm transition-all hover:scale-105"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <CTASection />
    </>
  );
}
