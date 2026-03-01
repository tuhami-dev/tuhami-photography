import { Check, ArrowRight } from "lucide-react";

const packages = [
  {
    name: "Mini Session",
    duration: "30 minutes",
    price: "$225",
    priceNote: "starting at",
    description: "Perfect for quick milestones, updated portraits, or seasonal shots.",
    features: [
      "30-minute outdoor session",
      "1 location",
      "Immediate family (up to 4 people)",
      "20+ edited digital images",
      "Online gallery delivery",
      "Delivered within 3–7 business days",
      "Print release included",
    ],
    highlight: false,
    cta: "Book Mini Session",
  },
  {
    name: "Standard Session",
    duration: "60 minutes",
    price: "$350",
    priceNote: "starting at",
    description: "Our most popular option — ideal for families, grads, and couples.",
    features: [
      "60-minute outdoor session",
      "Up to 2 locations",
      "Any group size",
      "40+ edited digital images",
      "Online gallery delivery",
      "Delivered within 3–7 business days",
      "Print release included",
      "1 outfit change welcome",
    ],
    highlight: true,
    cta: "Book Standard Session",
  },
  {
    name: "Event Coverage",
    duration: "Varies",
    price: "$900",
    priceNote: "starting at",
    description: "Full coverage for birthday parties, gender reveals, quinceañeras & more.",
    features: [
      "Up to 3 hours of coverage",
      "Full event documentation",
      "100+ edited images",
      "Online gallery delivery",
      "1-2 weeks turnaround",
      "Print release included",
      "Custom packages available",
    ],
    highlight: false,
    cta: "Get a Quote",
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-24 bg-stone-950">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-brand text-sm font-semibold tracking-widest uppercase mb-3">
            Transparent Pricing
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
            Simple, Clear Packages
          </h2>
          <p className="text-stone-400 text-lg leading-relaxed">
          A 50% non-refundable deposit secures your date — the remaining balance is due 48 hours before your session.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col rounded-2xl p-7 ${
                pkg.highlight
                  ? "bg-brand text-white"
                  : "bg-stone-900 border border-stone-800"
              }`}
            >
              {pkg.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-brand text-xs font-bold px-4 py-1 rounded-full shadow-md tracking-wide">
                  MOST POPULAR
                </span>
              )}

              {/* Duration badge */}
              <span
                className={`inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-5 w-fit ${
                  pkg.highlight
                    ? "bg-white/20 text-white"
                    : "bg-stone-800 text-stone-400"
                }`}
              >
                {pkg.duration}
              </span>

              <h3
                className={`font-display text-2xl font-bold mb-1 ${
                  pkg.highlight ? "text-white" : "text-white"
                }`}
              >
                {pkg.name}
              </h3>

              <p
                className={`text-sm mb-5 leading-relaxed ${
                  pkg.highlight ? "text-white/80" : "text-stone-400"
                }`}
              >
                {pkg.description}
              </p>

              <div className="mb-6">
                <span
                  className={`text-xs mb-0.5 block ${
                    pkg.highlight ? "text-white/70" : "text-stone-500"
                  }`}
                >
                  {pkg.priceNote}
                </span>
                <span
                  className={`text-4xl font-bold ${
                    pkg.highlight ? "text-white" : "text-white"
                  }`}
                >
                  {pkg.price}
                </span>
              </div>

              <ul className="flex flex-col gap-2.5 mb-8 flex-grow">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check
                      size={15}
                      className={`mt-0.5 shrink-0 ${
                        pkg.highlight ? "text-white" : "text-stone-400"
                      }`}
                    />
                    <span
                      className={
                        pkg.highlight ? "text-white/90" : "text-stone-300"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`flex items-center justify-center gap-2 py-3 rounded-full font-semibold text-sm transition-colors ${
                  pkg.highlight
                    ? "bg-white text-brand hover:bg-stone-50"
                    : "bg-stone-800 hover:bg-stone-700 text-white border border-stone-700"
                }`}
              >
                {pkg.cta}
                <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 space-y-2">
          <p className="text-stone-500 text-sm">
            All sessions are outdoor / on-location. Custom packages available for
            larger families or extended coverage.{" "}
            <a href="#contact" className="text-brand hover:text-brand-hover hover:underline">
              Reach out to discuss.
            </a>
          </p>
          <p className="text-stone-600 text-xs">
            A signed agreement and deposit are required to confirm all bookings. Additional time or services requested will be invoiced separately.
          </p>
        </div>
      </div>
    </section>
  );
}
