"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle, AlertCircle, CalendarDays } from "lucide-react";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  sessionType: string;
  preferredLocation: string;
  preferredDate: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialForm: FormData = {
  fullName: "",
  email: "",
  phone: "",
  sessionType: "",
  preferredLocation: "",
  preferredDate: "",
  message: "",
};

const sessionTypes = [
  "Family Session",
  "Graduation Session",
  "Couples Session",
  "Personal Branding",
  "Small Event",
  "Mini Session",
  "Other / Not Sure",
];

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.fullName.trim()) errors.fullName = "Full name is required.";
  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "A valid email address is required.";
  }
  if (!data.phone.trim()) errors.phone = "Phone number is required.";
  if (!data.sessionType) errors.sessionType = "Please select a session type.";
  if (!data.preferredDate) errors.preferredDate = "Please select a preferred date.";
  return errors;
}

export default function LeadForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const calLink =
    process.env.NEXT_PUBLIC_CAL_LINK ||
    "https://calendar.app.google/tKtXpftAQZSBePW68";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or email us directly.");
    }
  };

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3 rounded-xl border text-stone-900 text-sm bg-white placeholder-stone-400 transition-colors focus:outline-none focus:ring-2 focus:ring-brand/50 ${
      errors[field]
        ? "border-red-400 focus:border-red-400"
        : "border-stone-200 focus:border-brand"
    }`;

  if (status === "success") {
    return (
      <section id="contact" className="py-24 bg-stone-950">
        <div className="max-w-xl mx-auto px-5 sm:px-8 text-center">
          <div className="w-16 h-16 rounded-full bg-brand/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={32} className="text-brand" />
          </div>
          <h2 className="font-display text-3xl font-bold text-white mb-3">
            You're on the list!
          </h2>
          <p className="text-stone-400 text-base leading-relaxed mb-8">
            Thanks for reaching out — I'll follow up within a few hours to
            confirm your details and get your date locked in.
          </p>
          <a
            href={calLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 hover:border-brand/60 text-white text-sm font-semibold transition-colors hover:bg-white/5"
          >
            <CalendarDays size={16} className="text-brand" />
            Schedule a 15-Minute Phone Consultation (Optional)
          </a>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-stone-950">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-14 items-start">
          {/* Left copy */}
          <div>
<p className="text-brand text-sm font-semibold tracking-widest uppercase mb-3">
            Let's Connect
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
              Check Availability
            </h2>
            <p className="text-stone-400 text-lg leading-relaxed mb-8">
              Fill out the form and I'll get back to you within a few hours.
              Spring graduation season and fall family portrait season book
              fast — don't wait.
            </p>

            <div className="space-y-4">
              {[
                { label: "Delivered within 3–7 business days", note: "Standard sessions" },
                { label: "Outdoor & on-location", note: "Phoenix Metro" },
                { label: "50% deposit to hold your date", note: "Balance due day-of" },
                { label: "Travel outside metro available", note: "Travel fee applies" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand mt-2 shrink-0" />
                  <div>
                    <span className="text-white text-sm font-medium">{item.label}</span>
                    <span className="text-stone-500 text-sm"> — {item.note}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-stone-400 text-sm">
              Prefer a quick call?{" "}
              <a
                href={calLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:text-brand-hover font-medium underline underline-offset-2"
              >
                Book a 15-minute phone consultation
              </a>
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-white rounded-2xl p-7 sm:p-8"
          >
            <h3 className="font-semibold text-stone-900 text-lg mb-6">
              Session Inquiry
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {/* Full Name */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-stone-700 mb-1.5">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={inputClass("fullName")}
                  autoComplete="name"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputClass("email")}
                  autoComplete="email"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">
                  Phone <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(480) 555-0123"
                  className={inputClass("phone")}
                  autoComplete="tel"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Session Type */}
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">
                  Session Type <span className="text-red-400">*</span>
                </label>
                <select
                  name="sessionType"
                  value={form.sessionType}
                  onChange={handleChange}
                  className={`${inputClass("sessionType")} cursor-pointer`}
                >
                  <option value="">Select a session type</option>
                  {sessionTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.sessionType && (
                  <p className="text-red-500 text-xs mt-1">{errors.sessionType}</p>
                )}
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">
                  Preferred Date <span className="text-red-400">*</span>
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  value={form.preferredDate}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  className={inputClass("preferredDate")}
                />
                {errors.preferredDate && (
                  <p className="text-red-500 text-xs mt-1">{errors.preferredDate}</p>
                )}
              </div>

              {/* Preferred Location */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-stone-700 mb-1.5">
                  Preferred Location{" "}
                  <span className="text-stone-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  name="preferredLocation"
                  value={form.preferredLocation}
                  onChange={handleChange}
                  placeholder="e.g. Riparian Preserve, Cosmo Dog Park, Scottsdale Waterfront..."
                  className={inputClass("preferredLocation")}
                />
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-stone-700 mb-1.5">
                  Anything else?{" "}
                  <span className="text-stone-400 font-normal">(Optional)</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Number of people, special requests, questions..."
                  className={`${inputClass("message")} resize-none`}
                />
              </div>
            </div>

            {status === "error" && (
              <div className="flex items-start gap-2.5 bg-red-50 border border-red-200 rounded-xl px-4 py-3 mb-4">
                <AlertCircle size={16} className="text-red-500 mt-0.5 shrink-0" />
                <p className="text-red-600 text-sm">{errorMsg}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-brand hover:bg-brand-hover disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition-colors"
            >
              {status === "submitting" ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={15} />
                  Send Inquiry
                </>
              )}
            </button>

            <p className="text-stone-400 text-xs text-center mt-3">
              No spam, ever. Your information is used only to respond to your inquiry.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
