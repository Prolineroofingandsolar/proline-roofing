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
    "Expert roofing and solar installation services in Taunton, Somerset. Local, trusted and fully qualified. Call 07587 478826 for a free quote.",
  keywords: [
    "roofing taunton",
    "solar panels taunton",
    "roofer somerset",
    "roof repairs taunton",
    "flat roofing somerset",
    "solar PV taunton",
    "proline roofing",
  ],
  openGraph: {
    title: "ProLine Roofing & Solar | Taunton, Somerset",
    description:
      "Expert roofing and solar installation services in Taunton, Somerset. Local, trusted and fully qualified.",
    type: "website",
    locale: "en_GB",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.prolineroofingandsolar.co.uk" },
  metadataBase: new URL("https://www.prolineroofingandsolar.co.uk"),
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "ProLine Roofing & Solar",
  image: "https://www.prolineroofingandsolar.co.uk/og-image.jpg",
  "@id": "https://www.prolineroofingandsolar.co.uk",
  url: "https://www.prolineroofingandsolar.co.uk",
  telephone: "07587478826",
  email: "admin@prolineroofingandsolar.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "75 HARDYS ROAD",
    addressLocality: "TAUNTON",
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
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 51.0183,
      longitude: -3.1006,
    },
    geoRadius: "40000",
  },
  priceRange: "££",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "127",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
