import { Send, CalendarCheck, ImageIcon } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Send,
    title: "Submit Your Inquiry",
    description:
      "Fill out the short form below with your session type, preferred date, and any details you'd like to share. Takes less than two minutes.",
  },
  {
    number: "02",
    icon: CalendarCheck,
    title: "Confirm the Details",
    description:
      "A 50% non-refundable deposit invoice will be sent to secure your session date. The remaining balance is due 48 hours before your session.",
  },
  {
    number: "03",
    icon: ImageIcon,
    title: "Shoot & Receive Your Gallery",
    description:
      "Show up, be yourself. Your edited gallery will be delivered within 3–7 business days for portrait sessions (1–2 weeks for events) — ready to download and print once the remaining balance has been completed.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-stone-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-brand text-sm font-semibold tracking-widest uppercase mb-3">
            The Process
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone-900 leading-tight mb-4">
            How It Works
          </h2>
          <p className="text-stone-500 text-lg leading-relaxed">
            Booking a session should be simple. Here's what to expect from
            inquiry to delivered gallery.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative z-10 flex flex-col items-start">
                {/* Number + icon */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-white border border-stone-200 shadow-sm flex items-center justify-center">
                    <Icon size={28} className="text-brand" />
                  </div>
                  <span className="absolute -top-2.5 -right-2.5 w-7 h-7 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center">
                    {step.number.replace("0", "")}
                  </span>
                </div>

                <h3 className="font-semibold text-stone-900 text-xl mb-3">
                  {step.title}
                </h3>
                <p className="text-stone-500 text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col sm:flex-row items-center gap-4 p-8 rounded-2xl bg-white border border-stone-200">
          <div className="flex-grow">
            <h3 className="font-semibold text-stone-900 text-lg mb-1">
              Ready to get started?
            </h3>
            <p className="text-stone-500 text-sm">
              Dates fill up — especially spring graduation season and fall
              family portraits.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center px-6 py-3 rounded-full bg-brand hover:bg-brand-hover text-white font-semibold text-sm transition-colors"
          >
            Check Availability
          </a>
        </div>
      </div>
    </section>
  );
}
