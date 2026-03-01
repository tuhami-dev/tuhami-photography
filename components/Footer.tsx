import { Camera, MapPin, Mail, ExternalLink, CalendarDays } from "lucide-react";

const serviceAreas = ["Mesa", "Gilbert", "Chandler", "Tempe", "Scottsdale"];

const CONSULTATION_URL =
  process.env.NEXT_PUBLIC_CAL_LINK ||
  "https://calendar.app.google/tKtXpftAQZSBePW68";

export default function Footer() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <Camera size={20} className="text-brand" />
              <span className="font-display font-semibold text-white text-lg">
                Tuhami Photography
              </span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed max-w-xs">
              Premium family, graduation, and couples photography in the Phoenix
              Metro. Galleries delivered within 3–7 business days. Pro-grade gear. Easy
              booking.
            </p>
            <a
              href="https://anas.smugmug.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-brand hover:text-brand-hover text-sm font-medium mt-4 transition-colors"
            >
              View Portfolio
              <ExternalLink size={12} />
            </a>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
              <MapPin size={14} className="text-brand" />
              Service Areas
            </h4>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area} className="text-stone-400 text-sm">
                  {area}, AZ
                </li>
              ))}
              <li className="text-stone-500 text-xs pt-1">
                + metro area travel available
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
              <Mail size={14} className="text-brand" />
              Contact
            </h4>
            {contactEmail ? (
              <a
                href={`mailto:${contactEmail}`}
                className="text-brand hover:text-brand-hover text-sm transition-colors break-all"
              >
                {contactEmail}
              </a>
            ) : (
              <span className="text-stone-500 text-sm italic">
                Email via inquiry form
              </span>
            )}
            <div className="mt-6 space-y-2">
              <a
                href="#contact"
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-brand hover:bg-brand-hover text-white text-sm font-semibold transition-colors"
              >
                Check Availability
              </a>
              <a
                href={CONSULTATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-stone-400 hover:text-brand text-sm font-medium mt-2 transition-colors"
              >
                <CalendarDays size={14} />
                Book a 15-min consultation
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-stone-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-stone-500 text-xs">
            © {currentYear} Tuhami Photography. All rights reserved.
          </p>
          <p className="text-stone-600 text-xs">
            Serving Phoenix Metro ·{" "}
            <a
              href="https://photo.tuhamiconsulting.com"
              className="hover:text-stone-400 transition-colors"
            >
              photo.tuhamiconsulting.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
