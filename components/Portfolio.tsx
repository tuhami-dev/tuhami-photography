import Image from "next/image";
import { ExternalLink, ArrowRight } from "lucide-react";

const photos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1511895426328-dc8714191011?auto=format&fit=crop&w=800&q=80",
    alt: "Family laughing together outdoors",
    label: "Family",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    alt: "Graduation cap toss",
    label: "Graduation",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80",
    alt: "Couple portrait outdoors",
    label: "Couples",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?auto=format&fit=crop&w=800&q=80",
    alt: "Family at golden hour",
    label: "Family",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
    alt: "Kids playing in the park",
    label: "Family",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    alt: "Couple laughing together",
    label: "Couples",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1596265371388-43cedbb5bc6e?auto=format&fit=crop&w=800&q=80",
    alt: "Graduation portrait",
    label: "Graduation",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1491013516836-7db643ee125a?auto=format&fit=crop&w=800&q=80",
    alt: "Outdoor family session",
    label: "Family",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
          <div>
<p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Recent Work
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone-900 leading-tight">
              Portfolio Preview
            </h2>
          </div>
          <a
            href="https://anas.smugmug.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-hover text-sm font-semibold transition-colors shrink-0"
          >
            View full portfolio
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className={`relative overflow-hidden rounded-xl bg-stone-100 group ${
                index === 0 || index === 4 ? "row-span-2 aspect-[3/4]" : "aspect-square"
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {/* Label overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-white text-xs font-semibold tracking-wide uppercase bg-black/30 px-2 py-1 rounded-full">
                  {photo.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://anas.smugmug.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-semibold text-sm transition-colors"
          >
            See the Full Portfolio on SmugMug
            <ArrowRight size={15} />
          </a>
          <p className="text-stone-400 text-xs mt-3">
            These are sample placeholder images — the full portfolio is on SmugMug.
          </p>
        </div>
      </div>
    </section>
  );
}
