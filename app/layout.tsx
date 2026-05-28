import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "ProLine Roofing & Solar | Taunton, Somerset",
    template: "%s | ProLine Roofing & Solar",
  },
  description:
    "Expert roofing and solar installation services in Taunton, Somerset. Local, trusted and fully qualified roofers. Call 07587 478826 for a free quote.",
  keywords: [
    "roofing taunton",
    "roofer taunton",
    "solar panels taunton",
    "roofer somerset",
    "roof repairs taunton",
    "flat roofing taunton",
    "flat roofing somerset",
    "solar PV taunton",
    "solar panel installation taunton",
    "solar panel installation somerset",
    "emergency roofer taunton",
    "chimney repairs taunton",
    "fascias guttering taunton",
    "new roof taunton",
    "proline roofing",
    "proline roofing and solar",
    "MCS certified solar taunton",
    "GRP flat roofing taunton",
    "roof repairs somerset",
    "roofer bridgwater",
    "roofer wellington somerset",
    "taunton roofing company",
    "local roofer taunton",
  ],
  openGraph: {
    title: "ProLine Roofing & Solar | Taunton, Somerset",
    description:
      "Expert roofing and solar installation services in Taunton, Somerset. Local, trusted and fully qualified roofers.",
    type: "website",
    locale: "en_GB",
    url: "https://www.prolineroofingandsolar.co.uk",
    siteName: "ProLine Roofing & Solar",
    images: [
      {
        url: "/UK_MKT_PHO_REF_Solar_Grasmere_002.jpg",
        width: 1200,
        height: 800,
        alt: "ProLine Roofing & Solar — Taunton's trusted roofing and solar specialists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ProLine Roofing & Solar | Taunton, Somerset",
    description:
      "Expert roofing and solar installation services in Taunton, Somerset. Local, trusted and fully qualified roofers.",
    images: ["/UK_MKT_PHO_REF_Solar_Grasmere_002.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.prolineroofingandsolar.co.uk" },
  metadataBase: new URL("https://www.prolineroofingandsolar.co.uk"),
  other: {
    "geo.region": "GB-SOM",
    "geo.placename": "Taunton, Somerset",
    "geo.position": "51.0183;-3.1006",
    "ICBM": "51.0183, -3.1006",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": "https://www.prolineroofingandsolar.co.uk/#business",
  name: "ProLine Roofing & Solar",
  description:
    "Expert roofing and solar panel installation in Taunton, Somerset and across the South West. Services include roof repairs, new roofs, flat roofing, solar PV, battery storage, chimney repairs, fascias and 24/7 emergency call-outs.",
  image:
    "https://www.prolineroofingandsolar.co.uk/UK_MKT_PHO_REF_Solar_Grasmere_002.jpg",
  url: "https://www.prolineroofingandsolar.co.uk",
  telephone: "+447587478826",
  email: "admin@prolineroofingandsolar.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "75 Hardys Road",
    addressLocality: "Taunton",
    addressRegion: "Somerset",
    postalCode: "TA2 8FA",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.0183,
    longitude: -3.1006,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "13:00",
    },
  ],
  areaServed: [
    {
      "@type": "City",
      name: "Taunton",
      containedInPlace: { "@type": "AdministrativeArea", name: "Somerset" },
    },
    {
      "@type": "City",
      name: "Bridgwater",
      containedInPlace: { "@type": "AdministrativeArea", name: "Somerset" },
    },
    {
      "@type": "City",
      name: "Wellington",
      containedInPlace: { "@type": "AdministrativeArea", name: "Somerset" },
    },
    {
      "@type": "City",
      name: "Yeovil",
      containedInPlace: { "@type": "AdministrativeArea", name: "Somerset" },
    },
    {
      "@type": "City",
      name: "Glastonbury",
      containedInPlace: { "@type": "AdministrativeArea", name: "Somerset" },
    },
    {
      "@type": "City",
      name: "Wells",
      containedInPlace: { "@type": "AdministrativeArea", name: "Somerset" },
    },
    {
      "@type": "City",
      name: "Weston-super-Mare",
      containedInPlace: { "@type": "AdministrativeArea", name: "Somerset" },
    },
    {
      "@type": "City",
      name: "Tiverton",
      containedInPlace: { "@type": "AdministrativeArea", name: "Devon" },
    },
    {
      "@type": "City",
      name: "Exeter",
      containedInPlace: { "@type": "AdministrativeArea", name: "Devon" },
    },
    { "@type": "City", name: "Bristol" },
    { "@type": "City", name: "Bath" },
  ],
  priceRange: "££",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: 127,
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    "https://www.facebook.com/prolineroofingandsolar",
    "https://www.bark.com/en/gb/company/proline-roofing--solar/",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+447587478826",
    contactType: "customer service",
    areaServed: "GB",
    availableLanguage: "English",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Roofing & Solar Services in Taunton",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Roof Repairs Taunton",
          description:
            "Fast, reliable emergency and planned roof repairs in Taunton and Somerset.",
          url: "https://www.prolineroofingandsolar.co.uk/roofing",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "New Roof Installation Taunton",
          description:
            "Full roof replacement and new roof installations across Taunton and Somerset.",
          url: "https://www.prolineroofingandsolar.co.uk/roofing",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Flat Roofing Taunton",
          description:
            "GRP fibreglass and EPDM flat roofing systems with 25-year guarantees in Somerset.",
          url: "https://www.prolineroofingandsolar.co.uk/roofing",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Solar Panel Installation Taunton",
          description:
            "MCS-certified solar PV panel installation in Taunton, Somerset.",
          url: "https://www.prolineroofingandsolar.co.uk/solar",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Battery Storage Somerset",
          description:
            "Solar battery storage systems for homes and businesses across Somerset.",
          url: "https://www.prolineroofingandsolar.co.uk/solar",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Chimney Repairs Taunton",
          description:
            "Chimney repairs, repointing, flashing and full rebuilds in Taunton.",
          url: "https://www.prolineroofingandsolar.co.uk/roofing",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Fascias & Guttering Taunton",
          description:
            "UPVC fascias, soffits and guttering replacement across Taunton and Somerset.",
          url: "https://www.prolineroofingandsolar.co.uk/roofing",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Emergency Roofing Taunton",
          description:
            "24/7 emergency roofing call-outs across Taunton and the South West.",
          url: "https://www.prolineroofingandsolar.co.uk/contact",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
