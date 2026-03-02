"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/faqs";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-stone-200 last:border-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen(!open);
          }
        }}
        aria-expanded={open}
        className="group w-full flex items-center justify-between gap-4 px-4 py-5 text-left cursor-pointer rounded-sm transition-colors duration-200 ease-out hover:bg-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500 focus-visible:ring-offset-2"
      >
        <span className="font-semibold text-stone-900 text-base pr-4 transition-colors duration-200 ease-out group-hover:text-stone-700">
          {question}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-stone-400 transition-all duration-200 ease-out group-hover:text-stone-600 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          open ? "max-h-64 pb-5" : "max-h-0"
        }`}
      >
        <p className="px-4 text-stone-500 text-base leading-relaxed">{answer}</p>
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
<p className="text-brand text-sm font-semibold tracking-widest uppercase mb-3">
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
