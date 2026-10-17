import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MapPin, Phone, ShieldCheck } from "lucide-react";
import CTASection from "@/components/CTASection";
import GoogleReviewButton from "@/components/GoogleReviewButton";

const services = [
  [
    "01",
    "Roof repairs",
    "Leaks, slipped tiles, storm damage and the details that keep water out.",
    "/services/roof-repairs",
  ],
  [
    "02",
    "New roofs",
    "A complete roof replacement, specified around your property and budget.",
    "/roofing",
  ],
  [
    "03",
    "Flat roofing",
    "EPDM and GRP systems for extensions, garages and dormers.",
    "/services/flat-roofing",
  ],
  [
    "04",
    "Chimneys & leadwork",
    "Repairs to stacks, flashings, valleys and roof junctions.",
    "/services/chimney-repairs",
  ],
  [
    "05",
    "Solar PV",
    "Roof-led solar design with a clear proposal and realistic assumptions.",
    "/solar",
  ],
  [
    "06",
    "Roofline & gutters",
    "Fascias, soffits, guttering and the finishing details.",
    "/services/fascias-soffits",
  ],
] as const;

const steps = [
  [
    "01",
    "Tell us what you need",
    "Send your postcode and a short description. For an active leak, call us.",
  ],
  [
    "02",
    "We assess the work",
    "We discuss the problem and arrange a suitable survey where needed. We confirm availability before attending.",
  ],
  [
    "03",
    "Get a clear quote",
    "Your written quote sets out the proposed work, materials and any warranty terms relevant to the job.",
  ],
] as const;

const feedback = [
  {
    quote:
      "Roof and chimney repointing. Brilliant. All very friendly and polite. Did a brilliant job and cleaned up nicely after themselves :) very pleased.",
    name: "Rebecca",
    location: "Axminster",
    source: "MyBuilder",
  },
  {
    quote:
      "Will came out on Bank Holiday Monday to complete the job, quickly, efficiently and to a high standard.",
    name: "Verified customer",
    location: "Yeovil",
    source: "MyBuilder",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#141a1d] text-white">
        <div className="absolute inset-0 lg:left-[48%]">
          <Image
            src="/image0.jpeg"
            alt="Slate roof on a Somerset property"
            fill
            priority
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="object-cover object-center lg:object-[50%_42%]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#141a1d] via-[#141a1d]/95 to-[#141a1d]/55 lg:bg-gradient-to-r lg:from-[#141a1d] lg:via-[#141a1d] lg:to-transparent" />
        <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-center px-5 py-20 sm:px-8 lg:min-h-[680px] lg:grid-cols-2 lg:py-24">
          <div className="max-w-2xl">
            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-orange-300">
              <span className="h-px w-9 bg-orange-400" /> Taunton based ·
              Somerset focused
            </p>
            <h1 className="max-w-[13ch] text-5xl font-black uppercase leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-[4.7rem]">
              A better roof.{" "}
              <span className="text-orange-400">A clearer process.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-gray-200 sm:text-lg">
              Roofing repairs, replacements and solar PV from a Taunton-based
              team. Tell us what your property needs and we&apos;ll explain the
              options, scope and next steps plainly.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/quote"
                className="inline-flex min-h-14 items-center justify-center gap-3 bg-[#c2410c] px-7 py-4 text-sm font-black uppercase tracking-wider text-white transition-colors hover:bg-[#9a3412] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Request a free quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:07587478826"
                className="inline-flex min-h-14 items-center justify-center gap-3 border border-white/60 px-7 py-4 text-sm font-black uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-[#141a1d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Phone className="h-4 w-4" /> 07587 478826
              </a>
            </div>
            <p className="mt-6 text-xs leading-5 text-gray-300">
              Urgent roof problem? Call to check current attendance
              availability.
            </p>
          </div>
          <div className="hidden self-end justify-self-end lg:block">
            <div className="border-l-2 border-orange-400 bg-[#141a1d]/90 p-5 backdrop-blur-sm">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
                Roofing · Solar · Roofline
              </p>
              <p className="mt-2 max-w-[22rem] text-sm leading-6 text-gray-200">
                From a single repair to a full re-roof, with a written scope for
                the work proposed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-b border-stone-200 bg-[#f8f6f2]">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-5 text-sm font-semibold text-[#253039] sm:grid-cols-3 sm:px-8">
          <p className="flex items-center gap-3">
            <MapPin className="h-5 w-5 shrink-0 text-[#c2410c]" /> Based in
            Taunton
          </p>
          <p className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 shrink-0 text-[#c2410c]" /> Written
            scope &amp; materials
          </p>
          <p className="flex items-center gap-3">
            <Check className="h-5 w-5 shrink-0 text-[#c2410c]" /> No-obligation
            quotes
          </p>
        </div>
      </div>

      <section
        className="bg-white py-20 sm:py-24"
        aria-labelledby="services-heading"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-11 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#c2410c]">
                What we do
              </p>
              <h2
                id="services-heading"
                className="mt-3 max-w-xl text-4xl font-black uppercase leading-tight tracking-tight text-[#18232a] sm:text-5xl"
              >
                The right work for your roof.
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 self-start text-sm font-bold text-[#9a3412] underline-offset-4 hover:underline"
            >
              Explore all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-px border border-stone-200 bg-stone-200 md:grid-cols-2 lg:grid-cols-3">
            {services.map(([number, title, description, href]) => (
              <Link
                key={number}
                href={href}
                className="group flex min-h-64 flex-col bg-white p-7 transition-colors hover:bg-[#f8f6f2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#c2410c] sm:p-9"
              >
                <span className="text-sm font-black tracking-widest text-[#c2410c]">
                  {number}
                </span>
                <h3 className="mt-9 text-xl font-black uppercase tracking-tight text-[#18232a] sm:text-2xl">
                  {title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">
                  {description}
                </p>
                <span className="mt-auto flex items-center gap-2 pt-6 text-xs font-black uppercase tracking-wider text-[#9a3412]">
                  Explore service{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-[#18232a] py-20 text-white sm:py-24"
        aria-labelledby="approach-heading"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-300">
              Straightforward from the start
            </p>
            <h2
              id="approach-heading"
              className="mt-4 text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl"
            >
              No guesswork. Just a clear way forward.
            </h2>
            <p className="mt-6 max-w-md leading-7 text-gray-300">
              A roof problem can feel urgent and expensive. We&apos;ll help you
              understand what needs attention and what the proposed work
              includes.
            </p>
            <Link
              href="/quote"
              className="mt-8 inline-flex items-center gap-2 font-bold text-orange-300 underline-offset-4 hover:underline"
            >
              Tell us about your project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="divide-y divide-white/15 border-t border-white/15">
            {steps.map(([number, title, text]) => (
              <div
                key={number}
                className="grid gap-4 py-7 sm:grid-cols-[4rem_1fr]"
              >
                <span className="text-2xl font-black text-orange-300">
                  {number}
                </span>
                <div>
                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="mt-2 max-w-lg text-sm leading-6 text-gray-300">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-[#f8f6f2] py-20 sm:py-24"
        aria-labelledby="gallery-heading"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#c2410c]">
                See the details
              </p>
              <h2
                id="gallery-heading"
                className="mt-3 text-4xl font-black uppercase tracking-tight text-[#18232a] sm:text-5xl"
              >
                Roofing gallery
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 self-start text-sm font-bold text-[#9a3412] underline-offset-4 hover:underline"
            >
              View the gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
            <Link
              href="/projects"
              className="group relative block min-h-80 overflow-hidden bg-stone-300 sm:min-h-[450px]"
            >
              <Image
                src="/image2.jpeg"
                alt="Slate roofing and lead valley detail"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 to-transparent px-6 pb-6 pt-16 text-lg font-bold text-white">
                Roofing &amp; leadwork
              </span>
            </Link>
            <div className="flex flex-col bg-white p-8 sm:p-10">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#c2410c]">
                Built around the details
              </span>
              <h3 className="mt-6 text-3xl font-black uppercase leading-tight text-[#18232a]">
                See the finish before you decide.
              </h3>
              <p className="mt-5 leading-7 text-slate-600">
                Browse examples of roof coverings and finishing details. For a
                recent project similar to yours, ask when you request a quote.
              </p>
              <Link
                href="/projects"
                className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-bold text-[#9a3412]"
              >
                Browse the gallery <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-white py-20 sm:py-24"
        aria-labelledby="reviews-heading"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#c2410c]">
                Customer feedback
              </p>
              <h2
                id="reviews-heading"
                className="mt-3 text-4xl font-black uppercase tracking-tight text-[#18232a] sm:text-5xl"
              >
                In their words.
              </h2>
            </div>
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 self-start text-sm font-bold text-[#9a3412] underline-offset-4 hover:underline"
            >
              Read more reviews <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {feedback.map((review) => (
              <blockquote
                key={review.quote}
                className="flex flex-col border border-stone-200 bg-[#f8f6f2] p-7 sm:p-9"
              >
                <p className="text-lg leading-8 text-[#253039]">
                  “{review.quote}”
                </p>
                <footer className="mt-auto pt-7 text-sm font-bold text-[#18232a]">
                  {review.name} · {review.location}
                  <span className="mt-1 block text-xs font-normal text-slate-500">
                    Source: {review.source}
                  </span>
                </footer>
              </blockquote>
            ))}
          </div>
          <div className="mt-8">
            <GoogleReviewButton variant="outline" label="Find us on Google" />
          </div>
        </div>
      </section>

      <section
        className="border-t border-stone-200 bg-[#f8f6f2] py-14"
        aria-labelledby="areas-heading"
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-5 sm:px-8 lg:flex-row lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#c2410c]">
              Where we work
            </p>
            <h2
              id="areas-heading"
              className="mt-2 text-2xl font-black uppercase text-[#18232a] sm:text-3xl"
            >
              Taunton &amp; surrounding Somerset
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Including Bridgwater, Wellington and nearby areas. Send your
              postcode to confirm coverage.
            </p>
          </div>
          <Link
            href="/locations"
            className="inline-flex min-h-12 items-center justify-center gap-2 self-start border border-[#18232a] px-6 text-sm font-bold text-[#18232a] hover:bg-[#18232a] hover:text-white"
          >
            Check service areas <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <CTASection
        heading="Ready to discuss your roof?"
        subtext="Tell us about your project for a no-obligation quote, or call to check availability for an urgent problem."
      />
    </>
  );
}
