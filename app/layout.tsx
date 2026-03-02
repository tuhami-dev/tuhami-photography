import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { AnnouncementBarWithProvider } from "@/components/AnnouncementBar";
import { faqs } from "@/lib/faqs";
import { packages } from "@/lib/packages";
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
const siteTitle = "Tuhami Photography | Phoenix Metro Family Photographer";
const siteDescription =
  "Professional family, graduation, and couples photographer serving the Phoenix Metro. 72-hour delivery, pro-grade gear, easy booking. Serving Mesa, Gilbert, Chandler, Tempe & Scottsdale.";

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
        alt: "Tuhami Photography – Phoenix Metro Family Photographer",
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

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Tuhami Photography",
  url: siteUrl,
  telephone: "+14804012453",
  image: `${siteUrl}/og-image.jpg`,
  priceRange: "$$",
  serviceType: [
    "Photography",
    "Portrait Photography",
    "Family Photography",
    "Graduation Photography",
    "Couples Photography",
    "Event Photography",
  ],
  areaServed: ["Phoenix", "Tempe", "Mesa", "Gilbert", "Chandler", "Scottsdale"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tempe",
    addressRegion: "AZ",
    addressCountry: "US",
  },
  sameAs: ["https://anas.smugmug.com"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Photography Packages",
    itemListElement: packages.map((pkg) => ({
      "@type": "Offer",
      name: pkg.name,
      description: `${pkg.description} ${pkg.features.slice(0, 3).join(". ")}.`,
      priceCurrency: "USD",
      price: pkg.price.replace("$", ""),
      url: siteUrl,
      category: pkg.name,
      availability: "https://schema.org/InStock",
      eligibleRegion: {
        "@type": "Place",
        name: "Phoenix Metro (Tempe, Phoenix, Mesa, Gilbert, Chandler, Scottsdale)",
      },
    })),
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const GA_MEASUREMENT_ID = "G-10MGYJPCMR";

const gaInlineScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${GA_MEASUREMENT_ID}');
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{ __html: gaInlineScript }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${playfair.variable} antialiased`}>
        <AnnouncementBarWithProvider>{children}</AnnouncementBarWithProvider>
      </body>
    </html>
  );
}
