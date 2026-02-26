"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { ExternalLink, ArrowRight } from "lucide-react";
import PortfolioLightbox from "./PortfolioLightbox";

export type PortfolioImage = { src: string; alt: string };

export type PortfolioPreviewProps = {
  heroImage: PortfolioImage;
  images: PortfolioImage[];
  portfolioHref: string;
};

const DEFAULT_HERO: PortfolioImage = {
  src: "https://photos.smugmug.com/People/Branch-Family-Fall-2023/i-v2WStdn/0/MPKMdnvJgnJbWqJm9v9WCrW3CzCvN6wZN6HVcHbFZ/X2/DSC_6558-X2.jpg",
  alt: "Family laughing together outdoors",
};

const DEFAULT_IMAGES: PortfolioImage[] = [
  {
    src: "https://photos.smugmug.com/Weddings/Sara-Gamaleldin/Pre-Wedding/i-nxXrRJF/0/LbCCf2XpVNCwNMDNWJpc9s7BqWcHFzfsFm37526kL/X4/Sarah-Gamaldin-Wedding-2019%20156-25-X4.jpg",
    alt: "Couple at wedding",
  },
  {
    src: "https://photos.smugmug.com/Graduation/Hassan-Sara-Maleh-Graduation/Graduation/i-Phvrctc/0/KMHwxCmGdhCNQSLBp7SQ5rB5fp2VVf3C8jwXRd9kM/X2/HassanSaraMalehGrad%20414-232-X2.jpg",
    alt: "Graduation portrait",
  },
  {
    src: "https://photos.smugmug.com/Cycling/-Jingle-World-Cup-CX-2018/i-HMb3Dhk/0/LvVVWpB6TG28bfmfzjTZ2SdKZj3wjcBPz4QCqjdFD/X3/World%20Cup%20Jingle%20Cross%202018%20579-X3.jpg",
    alt: "Cyclocross world cup race",
  },
  {
    src: "https://photos.smugmug.com/People/Nayeli-Family/i-5Tv6PRb/0/KNXTzrhDFHCmF6tcFf3Cv3d9kc3vSLgfF9hPLZHzP/X3/Nayeli_McBride_2018-19-X3.jpg",
    alt: "Toddler in the fall",
  },
  {
    src: "https://photos.smugmug.com/Campus-Groups/WISE-2019/i-3KH2mZW/0/Kj3ZCzvV7wVHmvT7k8F6fW6QHLk6kWgrtGPpHcThW/X4/West-High-Journalism-AnasElTuhami-12-X4.jpg",
    alt: "Campus group portrait",
  },
  {
    src: "https://photos.smugmug.com/Floof/Holly/i-tVr4CjV/0/NZX76NZ3dGDCSmQPTGX9sg6cH43bcDPMfQwKfPz9t/X4/Holly-Doggo-2018-41-X4.jpg",
    alt: "Outdoor puppy candid",
  },
];

const DEFAULT_PORTFOLIO_HREF = "https://anas.smugmug.com";

export default function Portfolio({
  heroImage = DEFAULT_HERO,
  images = DEFAULT_IMAGES,
  portfolioHref = DEFAULT_PORTFOLIO_HREF,
}: Partial<PortfolioPreviewProps>) {
  const hero = heroImage ?? DEFAULT_HERO;
  const supportingImages = (images ?? DEFAULT_IMAGES).slice(0, 6);
  const href = portfolioHref ?? DEFAULT_PORTFOLIO_HREF;

  const lightboxImages = [hero, ...supportingImages];
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Header — unchanged */}
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
              Recent Work
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight text-stone-900 sm:text-5xl">
              Portfolio Preview
            </h2>
          </div>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-hover"
          >
            View full portfolio
            <ExternalLink size={14} />
          </a>
        </div>

        {/* A) Hero image — full width, 60–75vh desktop, ~50vh mobile, rounded, hover */}
        <div className="mb-6 sm:mb-8">
          <button
            type="button"
            onClick={() => openLightbox(0)}
            className="group relative block h-[50vh] w-full cursor-pointer overflow-hidden rounded-2xl bg-stone-100 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:h-[60vh] lg:h-[75vh]"
            aria-label={`View ${hero.alt} in gallery`}
          >
            <Image
              src={hero.src}
              alt={hero.alt}
              fill
              className="object-cover transform-gpu will-change-transform backface-hidden transition-transform duration-300 ease-out group-hover:scale-[1.03]"
              sizes="100vw"
              quality={90}
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-white/[0.06] opacity-0 transition-opacity duration-250 ease-out group-hover:opacity-100"
            />
          </button>
        </div>

        {/* B) Supporting grid — 6 images, 4:5, 3 / 2 / 1 cols, gap 16–24px */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-3">
          {supportingImages.map((img, i) => (
            <button
              key={`${img.src}-${i}`}
              type="button"
              onClick={() => openLightbox(i + 1)}
              className="group relative aspect-[4/5] w-full cursor-pointer overflow-hidden rounded-2xl bg-stone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              aria-label={`View ${img.alt} in gallery`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transform-gpu will-change-transform backface-hidden transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={90}
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-white/[0.06] opacity-0 transition-opacity duration-250 ease-out group-hover:opacity-100"
              />
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-stone-800"
          >
            See the Full Portfolio on SmugMug
            <ArrowRight size={15} />
          </a>
          <p className="mt-3 text-xs text-stone-400">
            View full portfolio on SmugMug for more work.
          </p>
        </div>
      </div>

      <PortfolioLightbox
        open={lightboxOpen}
        onClose={closeLightbox}
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onIndexChange={setLightboxIndex}
      />
    </section>
  );
}
