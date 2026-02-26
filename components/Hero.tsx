import { ArrowRight, ExternalLink, Clock, Camera, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-stone-950 overflow-hidden">
      {/* Background image — for sharper result use a larger SmugMug size (e.g. /X3/ or /Original/ in path) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage:
            "url('https://photos.smugmug.com/People/Branch-Family-Fall-2023/i-v2WStdn/0/MPKMdnvJgnJbWqJm9v9WCrW3CzCvN6wZN6HVcHbFZ/X2/DSC_6558-X2.jpg')",
        }}
        aria-hidden="true"
      />
      {/* Lighter gradient overlay — image shows through more, text stays readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(15,12,8,0.72) 0%, rgba(28,19,10,0.65) 50%, rgba(15,12,8,0.72) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-28 md:py-36">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="text-brand text-sm font-semibold tracking-widest uppercase mb-6">
            Phoenix Metro
          </p>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            Preserve the Moments
            <br />
            <span className="text-brand">That Matter Most</span>
          </h1>

          {/* Subheadline */}
          <p className="text-stone-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
            Family sessions, graduations, couples &amp; events — professionally
            captured with care and delivered fast. Serving Mesa, Gilbert,
            Chandler, Tempe &amp; Scottsdale.
          </p>

          {/* USP pills */}
          <div className="flex flex-wrap gap-3 mb-10">
            <div className="flex items-center gap-2 bg-white/8 border border-white/12 text-stone-200 text-sm px-4 py-2 rounded-full">
              <Clock size={14} className="text-brand" />
              72-hour delivery
            </div>
            <div className="flex items-center gap-2 bg-white/8 border border-white/12 text-stone-200 text-sm px-4 py-2 rounded-full">
              <Camera size={14} className="text-brand" />
              Online Gallery + Download Access
            </div>
            <div className="flex items-center gap-2 bg-white/8 border border-white/12 text-stone-200 text-sm px-4 py-2 rounded-full">
              <MessageCircle size={14} className="text-brand" />
              Easy, responsive communication
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand hover:bg-brand-hover text-white font-semibold text-base transition-colors shadow-lg shadow-black/20"
            >
              Check Availability
              <ArrowRight size={16} />
            </a>
            <a
              href="https://anas.smugmug.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 hover:border-white/40 text-white font-semibold text-base transition-colors hover:bg-white/5"
            >
              View Portfolio
              <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-white" />
      </div>
    </section>
  );
}
