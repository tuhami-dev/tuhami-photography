import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

const siteUrl = "https://photo.tuhamiconsulting.com";
const siteTitle = "Tuhami Photography | East Valley & Scottsdale Family Photographer";
const siteDescription =
  "Professional family, graduation, and couples photographer serving East Valley and Scottsdale, AZ. 72-hour delivery, pro-grade gear, easy booking. Serving Mesa, Gilbert, Chandler, Tempe & Scottsdale.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "East Valley photographer",
    "Scottsdale family photographer",
    "Mesa family photographer",
    "Gilbert photographer",
    "Chandler photographer",
    "graduation photographer Arizona",
    "couples photographer East Valley",
    "family photography Scottsdale",
    "portrait photographer Mesa AZ",
  ],
  authors: [{ name: "Tuhami Photography" }],
  creator: "Tuhami Photography",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: "Tuhami Photography",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Tuhami Photography – East Valley & Scottsdale Family Photographer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [`${siteUrl}/og-image.jpg`],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "Tuhami Photography",
  description: siteDescription,
  url: siteUrl,
  image: `${siteUrl}/og-image.jpg`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mesa",
    addressRegion: "AZ",
    postalCode: "85201",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", "name": "Mesa" },
    { "@type": "City", "name": "Gilbert" },
    { "@type": "City", "name": "Chandler" },
    { "@type": "City", "name": "Tempe" },
    { "@type": "City", "name": "Scottsdale" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Photography Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mini Session",
          description: "30-minute photography session",
        },
        price: "225",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Standard Session",
          description: "60-minute photography session",
        },
        price: "350",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Event Coverage",
          description: "Full event photography coverage",
        },
        price: "900",
        priceCurrency: "USD",
      },
    ],
  },
  sameAs: ["https://anas.smugmug.com"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
