"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you have a studio?",
    answer:
      "No — all sessions are outdoor and on-location. East Valley has incredible natural backdrops: desert landscapes, parks, green belts, and urban settings in Scottsdale. We'll work together to find a spot that fits your vision and vibe.",
  },
  {
    question: "What's the turnaround time?",
    answer:
      "Standard sessions (Mini and Standard) are delivered within 72 hours of your shoot — often sooner. Event coverage is delivered within 1 week. You'll receive a private online gallery link to download your full resolution images.",
  },
  {
    question: "What should we wear?",
    answer:
      "Coordinated, not matching. Think about a main color palette (2–3 tones) and vary the textures and styles within it. Avoid busy logos or patterns that date quickly. When in doubt, earth tones and neutrals photograph beautifully — especially in Arizona's natural light.",
  },
  {
    question: "How do we book?",
    answer:
      "Fill out the inquiry form below with your session type, preferred date, and location preferences. We'll follow up to confirm details. A 50% deposit is required to hold your date — the remaining balance is due the day of your session.",
  },
  {
    question: "Do you travel outside the East Valley?",
    answer:
      "Standard pricing covers the Phoenix metro area (Mesa, Gilbert, Chandler, Tempe, Scottsdale, and surrounding areas). Travel outside the metro is available for a travel fee — reach out and we'll put together a custom quote.",
  },
  {
    question: "What is the payment structure?",
    answer:
      "A 50% non-refundable deposit is required at the time of booking to hold your session date. The remaining 50% is due the day of the session. We accept payment via Venmo, Zelle, or cash.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-stone-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-stone-900 text-base pr-4">
          {question}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-stone-400 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-64 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-stone-500 text-base leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-14">
          {/* Left column */}
          <div>
<p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Got Questions?
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone-900 leading-tight mb-4">
              Frequently Asked
            </h2>
            <p className="text-stone-500 text-base leading-relaxed mb-6">
              Can't find your answer? Send a message and I'll get back to you
              within a few hours.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white text-sm font-semibold transition-colors"
            >
              Ask a Question
            </a>
          </div>

          {/* Right column */}
          <div className="divide-y divide-stone-200 border-t border-stone-200">
            {faqs.map((faq) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
