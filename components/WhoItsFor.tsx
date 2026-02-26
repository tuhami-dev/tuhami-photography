import { Users, GraduationCap, Heart, Star, CalendarDays } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Family Sessions",
    description:
      "Candid, genuine moments with the people you love most — outdoors, in your neighborhood, or at a location meaningful to your family.",
  },
  {
    icon: GraduationCap,
    title: "Graduation Sessions",
    description:
      "High school, college, or grad school — capture this milestone with portraits that reflect your personality, not a template.",
  },
  {
    icon: Heart,
    title: "Couples",
    description:
      "Engagement announcements, anniversaries, or just a chapter worth remembering. Relaxed sessions that feel like your story.",
  },
  {
    icon: Star,
    title: "Personal Branding",
    description:
      "Professional headshots and lifestyle portraits for entrepreneurs, creatives, and professionals who want images that actually represent them.",
  },
  {
    icon: CalendarDays,
    title: "Small Events",
    description:
      "Birthday parties, gender reveals, quinceañeras, small gatherings — full event coverage that doesn't break the budget.",
  },
];

export default function WhoItsFor() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            What We Shoot
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone-900 leading-tight mb-4">
            Who It's Perfect For
          </h2>
          <p className="text-stone-500 text-lg leading-relaxed">
            Every session is tailored to you. No cookie-cutter poses, no
            awkward directions — just natural moments, beautifully captured.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group p-7 rounded-2xl border border-stone-100 bg-stone-50 hover:border-stone-200 hover:bg-stone-100/80 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-stone-200 flex items-center justify-center mb-5 group-hover:bg-stone-300 transition-colors">
                  <Icon size={20} className="text-accent" />
                </div>
                <h3 className="font-semibold text-stone-900 text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}

          {/* CTA card */}
          <div className="p-7 rounded-2xl bg-stone-900 flex flex-col justify-between">
            <div>
              <p className="text-stone-500 text-xs font-semibold tracking-widest uppercase mb-3">
                Ready to book?
              </p>
              <h3 className="font-display text-2xl font-bold text-white mb-3 leading-snug">
                Not sure which session fits?
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Send a quick message and we'll figure it out together.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-7 inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-accent hover:bg-accent-hover text-white text-sm font-semibold transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
