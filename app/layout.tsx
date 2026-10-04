import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";

export const metadata: Metadata = {
  title: {
    default: "ProLine Roofing & Solar | Taunton, Somerset",
    template: "%s | ProLine Roofing & Solar",
  },
  description:
    "Roofing and solar installation services from a Taunton-based team serving Somerset and surrounding areas. Call 07587 478826 for a free quote.",
  keywords: [
    "roofing taunton",
    "solar panels taunton",
    "roofer somerset",
    "roof repairs taunton",
    "flat roofing somerset",
    "solar PV taunton",
    "roofer bridgwater",
    "roofer bath",
    "roofer bristol",
    "roofer exeter",
    "emergency roofer somerset",
    "chimney repairs somerset",
    "flat roofing somerset",
    "slate roofing somerset",
    "solar panel installation somerset",
    "proline roofing",
  ],
  openGraph: {
    title: "ProLine Roofing & Solar | Somerset & South West",
    description:
      "Roofing and solar installation services from a Taunton-based team serving Somerset and surrounding areas.",
    type: "website",
    locale: "en_GB",
    siteName: "ProLine Roofing & Solar",
    images: [{ url: "/image0.jpeg", alt: "ProLine Roofing & Solar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ProLine Roofing & Solar | Somerset & South West",
    description: "Roofing and solar installation services across Somerset. Free quotes.",
    images: ["/image0.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: "https://www.prolineroofingandsolar.co.uk" },
  metadataBase: new URL("https://www.prolineroofingandsolar.co.uk"),
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["RoofingContractor", "LocalBusiness"],
  name: "ProLine Roofing & Solar",
  image: "https://www.prolineroofingandsolar.co.uk/image0.jpeg",
  logo: "https://www.prolineroofingandsolar.co.uk/logo.svg",
  "@id": "https://www.prolineroofingandsolar.co.uk/#business",
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
    { "@type": "City", name: "Taunton", containedInPlace: { "@type": "AdministrativeArea", name: "Somerset" } },
    { "@type": "City", name: "Bridgwater", containedInPlace: { "@type": "AdministrativeArea", name: "Somerset" } },
    { "@type": "City", name: "Bath", containedInPlace: { "@type": "AdministrativeArea", name: "Somerset" } },
    { "@type": "City", name: "Bristol", containedInPlace: { "@type": "AdministrativeArea", name: "Bristol" } },
    { "@type": "City", name: "Exeter", containedInPlace: { "@type": "AdministrativeArea", name: "Devon" } },
    { "@type": "City", name: "Yeovil", containedInPlace: { "@type": "AdministrativeArea", name: "Somerset" } },
    { "@type": "City", name: "Weston-super-Mare", containedInPlace: { "@type": "AdministrativeArea", name: "North Somerset" } },
    { "@type": "City", name: "Wellington", containedInPlace: { "@type": "AdministrativeArea", name: "Somerset" } },
    { "@type": "City", name: "Burnham-on-Sea", containedInPlace: { "@type": "AdministrativeArea", name: "Somerset" } },
    { "@type": "City", name: "Glastonbury", containedInPlace: { "@type": "AdministrativeArea", name: "Somerset" } },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Roofing & Solar Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "New Roof Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roof Repairs" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency Roofing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Flat Roofing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Slate Roofing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Chimney Repairs" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Leadwork" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fascias & Soffits" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Guttering" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Solar Panel Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Battery Storage" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Roofing" } },
    ],
  },
  priceRange: "££",
  currenciesAccepted: "GBP",
  sameAs: [
    "https://www.facebook.com/prolineroofingandsolar",
  ],
  knowsAbout: [
    "Roofing",
    "Flat Roofing",
    "Slate Roofing",
    "Solar Panel Installation",
    "Chimney Repairs",
    "Leadwork",
    "Fascias and Soffits",
    "Guttering",
    "Emergency Roofing",
    "Commercial Roofing",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.prolineroofingandsolar.co.uk/#website",
  url: "https://www.prolineroofingandsolar.co.uk",
  name: "ProLine Roofing & Solar",
  description: "Expert roofing and solar installation services across Somerset, Devon, Bristol and Bath.",
  publisher: { "@id": "https://www.prolineroofingandsolar.co.uk/#business" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased pb-[56px] lg:pb-0">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
