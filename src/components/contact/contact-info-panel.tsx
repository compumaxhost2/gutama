import Image from "next/image";
import { Mail, MapPin, Phone, ShieldCheck, Clock, Award, Star } from "lucide-react";
import { siteConfig } from "@/config/site";

const addressFull = `${siteConfig.address.streetAddress}, ${siteConfig.address.locality}, ${siteConfig.address.region} ${siteConfig.address.postalCode}`;

export function ContactInfoPanel() {
  return (
    <div className="relative flex h-full flex-col justify-between overflow-hidden bg-gradient-to-b from-[#181310] via-[#120f0d] to-[#0d0b0a] p-8 sm:p-10 lg:p-12">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-secondary/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10">
        {/* Eyebrow */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {siteConfig.business.regionLabel} · Since {siteConfig.business.foundedYear}
        </div>

        {/* Heading */}
        <h2 className="font-serif text-2xl font-bold leading-tight text-white sm:text-3xl">
          We&apos;re here to help protect your home.
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-stone-300">
          Reach out directly to speak with Antonio Gutama or one of our project managers. We provide transparent advice, free on-site inspections, and detailed itemized quotes.
        </p>

        {/* Direct contact items */}
        <div className="mt-8 space-y-3.5">
          {/* Phone English */}
          <a
            href={`tel:${siteConfig.phones.english}`}
            className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-3.5 transition-all duration-200 hover:border-primary/50 hover:bg-white/8"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
              <Phone className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400">
                Call Us (English)
              </p>
              <p className="text-sm font-semibold text-white group-hover:text-secondary sm:text-base">
                {siteConfig.phones.english}
              </p>
            </div>
          </a>

          {/* Phone Spanish */}
          <a
            href={`tel:${siteConfig.phones.spanish}`}
            className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-3.5 transition-all duration-200 hover:border-primary/50 hover:bg-white/8"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-secondary/15 text-secondary transition-colors group-hover:bg-secondary group-hover:text-black">
              <Phone className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400">
                Llamar (Español)
              </p>
              <p className="text-sm font-semibold text-white group-hover:text-secondary sm:text-base">
                {siteConfig.phones.spanish}
              </p>
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${siteConfig.email}`}
            className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-3.5 transition-all duration-200 hover:border-primary/50 hover:bg-white/8"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10 text-stone-300 transition-colors group-hover:bg-primary group-hover:text-white">
              <Mail className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400">
                Email
              </p>
              <p className="truncate text-sm font-semibold text-white group-hover:text-secondary sm:text-base">
                {siteConfig.email}
              </p>
            </div>
          </a>

          {/* Location */}
          <a
            href="https://maps.app.goo.gl/Ft48fUmJwB71CMAk9"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-3.5 transition-all duration-200 hover:border-primary/50 hover:bg-white/8"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10 text-stone-300 transition-colors group-hover:bg-primary group-hover:text-white">
              <MapPin className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400">
                Office Location
              </p>
              <p className="text-sm font-medium text-stone-200 group-hover:text-secondary">
                {addressFull}
              </p>
            </div>
          </a>
        </div>

        {/* Google Review QR Card */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/4 p-3.5 backdrop-blur-sm">
          <div className="flex items-center gap-3.5">
            <a
              href="https://g.page/r/CZcJLgWQY05CEAE/review?utm_source=gbp&utm_medium=reviews&utm_campaign=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="group/qr shrink-0 rounded-xl bg-white p-2 transition-transform duration-200 hover:scale-105"
              title="Click to leave a Google Review"
            >
              <Image
                src="/review-barcode.png"
                alt="Google Review QR Code"
                width={80}
                height={80}
                className="h-16 w-16 object-contain"
              />
            </a>
            <div className="min-w-0">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary">
                Recent Customer?
              </span>
              <p className="text-xs font-bold text-white mt-0.5">
                Leave a Google Review
              </p>
              <a
                href="https://g.page/r/CZcJLgWQY05CEAE/review?utm_source=gbp&utm_medium=reviews&utm_campaign=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1 text-[11px] font-medium text-amber-300 hover:text-amber-200 hover:underline"
              >
                <Star className="h-3 w-3 fill-amber-300 text-amber-300" /> Click or scan to review &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Hours & Guarantees */}
      <div className="relative z-10 mt-8 border-t border-white/10 pt-6">
        <div className="flex items-center gap-2.5 text-xs text-stone-300">
          <Clock className="h-4 w-4 text-secondary shrink-0" />
          <span>
            <strong className="text-white">Mon – Sat:</strong> 7:00 AM – 7:00 PM
          </span>
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span className="text-emerald-400 font-medium">Open</span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 pt-2">
          <div className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/2 px-2.5 py-1.5 text-[11px] text-stone-300">
            <ShieldCheck className="h-3.5 w-3.5 text-secondary shrink-0" />
            <span>Licensed &amp; Insured</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/2 px-2.5 py-1.5 text-[11px] text-stone-300">
            <Award className="h-3.5 w-3.5 text-secondary shrink-0" />
            <span>5-Year Warranty</span>
          </div>
        </div>
      </div>
    </div>
  );
}
