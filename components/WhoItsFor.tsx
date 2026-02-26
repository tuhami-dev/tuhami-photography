import Image from "next/image";

type ServiceItem = {
  src: string;
  alt: string;
  title: string;
  description: string;
  featured?: boolean;
  tall?: boolean;
};

const services: ServiceItem[] = [
  {
    src: "https://photos.smugmug.com/People/Branch-Family-Fall-2023/i-v2WStdn/0/MPKMdnvJgnJbWqJm9v9WCrW3CzCvN6wZN6HVcHbFZ/X2/DSC_6558-X2.jpg",
    alt: "Family laughing together outdoors during a fall session",
    title: "Family Sessions",
    description:
      "Photos that feel like your family, not stiff poses. Relaxed outdoor sessions that capture real connection.",
    featured: true,
  },
  {
    src: "https://photos.smugmug.com/Graduation/Hassan-Sara-Maleh-Graduation/Graduation/i-Phvrctc/0/KMHwxCmGdhCNQSLBp7SQ5rB5fp2VVf3C8jwXRd9kM/X2/HassanSaraMalehGrad%20414-232-X2.jpg",
    alt: "Graduate in cap and gown smiling confidently",
    title: "Graduation Portraits",
    description:
      "Celebrate the milestone with portraits that look confident, modern, and uniquely you.",
    tall: true,
  },
  {
    src: "https://photos.smugmug.com/Weddings/Sara-Gamaleldin/Pre-Wedding/i-nxXrRJF/0/LbCCf2XpVNCwNMDNWJpc9s7BqWcHFzfsFm37526kL/X4/Sarah-Gamaldin-Wedding-2019%20156-25-X4.jpg",
    alt: "Couple sharing a natural moment together",
    title: "Couples",
    description:
      "Engagements, anniversaries, or just because. Natural sessions that tell your story without over posing.",
  },
  {
    src: "https://photos.smugmug.com/Campus-Groups/WISE-2019/i-3KH2mZW/0/Kj3ZCzvV7wVHmvT7k8F6fW6QHLk6kWgrtGPpHcThW/X4/West-High-Journalism-AnasElTuhami-12-X4.jpg",
    alt: "Professional headshot in a clean, modern setting",
    title: "Personal Branding",
    description:
      "Headshots and lifestyle portraits that look polished, confident, and authentic. Great for entrepreneurs and professionals.",
  },
  {
    src: "https://photos.smugmug.com/People/Nayeli-Family/i-5Tv6PRb/0/KNXTzrhDFHCmF6tcFf3Cv3d9kc3vSLgfF9hPLZHzP/X3/Nayeli_McBride_2018-19-X3.jpg",
    alt: "Candid moment at a family celebration",
    title: "Small Events",
    description:
      "Birthday parties, celebrations, and intimate gatherings. Coverage that captures the atmosphere without interrupting it.",
  },
];

function ServiceCard({ src, alt, title, description, featured, tall }: ServiceItem) {
  const aspectClass = featured
    ? "lg:col-span-2 aspect-[16/9]"
    : tall
    ? "aspect-[4/3] lg:aspect-auto"
    : "aspect-[4/3]";

  return (
    <div
      className={[
        "group relative overflow-hidden rounded-2xl bg-stone-900",
        "shadow-sm ring-1 ring-black/10",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-0.5 hover:shadow-lg",
        aspectClass,
      ].join(" ")}
    >
      {/* Photo */}
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        sizes={
          featured
            ? "(max-width: 1024px) 100vw, 66vw"
            : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        }
        quality={85}
      />

      {/* Gradient scrim — ensures WCAG-AA contrast for white text at all times */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.28) 50%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Text overlay — anchored bottom-left */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
        <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight mb-1.5">
          {title}
        </h3>

        <p className="text-white/90 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function WhoItsFor() {
  const [featured, ...rest] = services;
  const row1Secondary = rest.slice(0, 1);
  const row2 = rest.slice(1);

  return (
    <section id="services" aria-labelledby="who-title" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-14">
          <p className="text-brand text-sm font-semibold tracking-widest uppercase mb-3">
            What We Shoot
          </p>
          <h2
            id="who-title"
            className="font-display text-4xl sm:text-5xl font-bold text-stone-900 leading-tight mb-4"
          >
            Who I Work With
          </h2>
          <p className="text-stone-500 text-lg leading-relaxed">
            Every session is built around you. Natural moments. Clean edits.
            Timeless images.
          </p>
        </div>

        {/* Row 1: featured (2 cols) + 1 standard card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <ServiceCard {...featured} />
          {row1Secondary.map((item) => (
            <ServiceCard key={item.title} {...item} />
          ))}
        </div>

        {/* Row 2: 3 standard cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {row2.map((item) => (
            <ServiceCard key={item.title} {...item} />
          ))}
        </div>

        {/* Full-width CTA band */}
        <div className="mt-12 rounded-2xl bg-stone-900 px-8 py-12 sm:px-12 sm:py-14">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-brand text-xs font-semibold tracking-widest uppercase mb-4">
              Ready to book?
            </p>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
              Not sure what to book?
            </h3>
            <p className="text-stone-400 text-base leading-relaxed mb-8">
              Tell me what you&apos;re celebrating and I will guide you toward the
              right session.
            </p>

            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-hover w-full sm:w-auto"
              >
                Send a Message
              </a>
            </div>

            <p className="mt-6 text-xs text-stone-500">
              Guided posing&nbsp;&nbsp;·&nbsp;&nbsp;Clean natural
              edits&nbsp;&nbsp;·&nbsp;&nbsp;Phoenix metro
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
