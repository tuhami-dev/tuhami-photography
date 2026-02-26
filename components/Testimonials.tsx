import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    session: "Family Session",
    location: "Gilbert, AZ",
    quote:
      "We absolutely loved our session. The photos came back so quickly and they were stunning, way better than I expected. Our kids actually had fun which never happens during photos!",
    rating: 5,
  },
  {
    name: "Jordan T.",
    session: "Graduation Session",
    location: "Tempe, AZ",
    quote:
      "I was nervous about getting photos done but the whole experience was so relaxed. The gallery was delivered in under 48 hours and I couldn't stop sharing them. 10/10.",
    rating: 5,
  },
  {
    name: "The Reyes Family",
    session: "Family Session",
    location: "Chandler, AZ",
    quote:
      "Professional, punctual, and the communication was easy from start to finish. We'll definitely be booking again for our holiday cards this year.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-stone-100">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-brand text-sm font-semibold tracking-widest uppercase mb-3">
            What Clients Say
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone-900 leading-tight mb-4">
            Happy Families &amp; Grads
          </h2>
          <p className="text-stone-500 text-lg leading-relaxed">
            Don't take our word for it — here's what past clients have shared.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-7 border border-stone-200 shadow-sm flex flex-col"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-[#E6B800] text-[#E6B800]" />
                ))}
              </div>

              {/* Quote */}
              <Quote size={18} className="text-brand mb-3" />
              <p className="text-stone-600 text-base leading-relaxed flex-grow mb-6">
                {t.quote}
              </p>

              {/* Attribution */}
              <div className="border-t border-stone-100 pt-5">
                <p className="font-semibold text-stone-900 text-sm">{t.name}</p>
                <p className="text-stone-400 text-xs mt-0.5">
                  {t.session} · {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder note */}
        {/*<p className="text-center text-stone-400 text-xs mt-8">
          ✦ Placeholder testimonials — swap with real client reviews before launch.
        </p>*/}
      </div>
    </section>
  );
}
