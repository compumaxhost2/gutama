"use client";

import { useCallback, useEffect, useState } from "react";
import { ArrowRight, Check, Loader2, PhoneCall } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { SERVICE_OPTIONS, contactSchema, type ContactFormInput } from "@/lib/contact-schema";

type Service = (typeof SERVICE_OPTIONS)[number];

const INPUT_CLASS =
  "appearance-none border-0 border-b-[1.5px] border-white/20 bg-transparent pb-2.5 text-[0.93rem] text-white outline-none transition-colors placeholder:text-white/40 focus:border-secondary";

const LABEL_CLASS =
  "text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-stone-300";

const NAME_FIELDS = [
  { id: "fn", label: "First name", placeholder: "John" },
  { id: "ln", label: "Last name", placeholder: "Doe" },
] as const;

function generateCaptchaCode() {
  return `${Math.floor(1000 + Math.random() * 9000)}`;
}

export function ContactForm() {
  const [service, setService] = useState<Service | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [captchaCode, setCaptchaCode] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");

  useEffect(() => {
    setCaptchaCode(generateCaptchaCode());
  }, []);

  const handleServiceSelect = useCallback((selectedService: Service) => {
    setService((prev) => (prev === selectedService ? prev : selectedService));
    setFieldErrors((prev) => {
      const next = { ...prev };
      delete next.service;
      return next;
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setFieldErrors({});

    // Validate service selection explicitly
    if (!service) {
      setFieldErrors({ service: "Please select a service needed from the options above." });
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData(e.currentTarget);
      const payload: ContactFormInput = {
        service: service,
        formType: "contact",
        fn: (formData.get("fn") as string).trim(),
        ln: (formData.get("ln") as string).trim(),
        em: (formData.get("em") as string).trim(),
        ph: (formData.get("ph") as string).trim(),
        msg: (formData.get("msg") as string).trim(),
        captchaCode,
        captchaInput: (formData.get("captchaInput") as string).trim(),
      };

      // Client-side validation
      const validation = contactSchema.safeParse(payload);
      if (!validation.success) {
        const errors: Record<string, string> = {};
        validation.error.issues.forEach((issue) => {
          const field = issue.path[0] as string;
          if (field) {
            errors[field] = issue.message;
          }
        });
        setFieldErrors(errors);
        return;
      }

      if (payload.captchaInput !== payload.captchaCode) {
        setFieldErrors({ captchaInput: "Captcha code does not match." });
        return;
      }

      // Submit to API
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        if (result.fieldErrors && Object.keys(result.fieldErrors).length > 0) {
          setFieldErrors(result.fieldErrors);
        } else {
          setError(result.error || "Something went wrong. Please try again.");
        }
        return;
      }

      // Success
      setSubmitted(true);
    } catch (err) {
      console.error("Form submission error:", err);
      setError("Unable to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setService(null);
    setLoading(false);
    setError(null);
    setFieldErrors({});
    setCaptchaCode(generateCaptchaCode());
    setCaptchaInput("");
    setSubmitted(false);
  };

  return (
    <div className="relative flex h-full flex-col justify-center bg-[#0e0c0b] p-8 sm:p-10 lg:p-12">
      {!submitted ? (
        <>
          {/* Header */}
          <div className="mb-6">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Online Estimate Form
            </span>
            <h2 className="mt-1 font-serif text-2xl font-bold text-white sm:text-3xl">
              Tell us about your project
            </h2>
            <p className="mt-1.5 text-xs text-stone-400">
              Fill out the details below and we&apos;ll get back to you within 24 business hours.
            </p>
          </div>

          {/* Service selector */}
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-stone-300">
                What service do you need? <span className="text-primary">*</span>
              </span>
              {fieldErrors.service && (
                <span className="text-[0.7rem] font-medium text-red-400">
                  {fieldErrors.service}
                </span>
              )}
            </div>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {SERVICE_OPTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => handleServiceSelect(s)}
                  className={cn(
                    "rounded-full border px-3 py-1.5 text-[0.76rem] font-medium transition-all duration-150 cursor-pointer",
                    service === s
                      ? "border-primary bg-primary text-white shadow-md shadow-primary/20"
                      : "border-white/20 bg-white/4 text-stone-300 hover:border-secondary hover:text-white"
                  )}
                >
                  {s === "Emergency" ? "🚨 Emergency Repair" : s}
                </button>
              ))}
            </div>
          </div>

          {/* Form-level Error Message */}
          {error && (
            <div className="mb-5 rounded-lg border-l-4 border-red-500 bg-red-500/10 p-3.5">
              <p className="text-xs font-medium text-red-200">{error}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Name row */}
            <div className="grid grid-cols-2 gap-4 max-[520px]:grid-cols-1">
              {NAME_FIELDS.map(({ id, label, placeholder }) => (
                <div key={id} className="flex flex-col gap-1">
                  <label htmlFor={id} className={LABEL_CLASS}>
                    {label} <span className="text-primary">*</span>
                  </label>
                  <input
                    id={id}
                    name={id}
                    placeholder={placeholder}
                    required
                    disabled={loading}
                    className={cn(INPUT_CLASS, {
                      "border-red-500/70": fieldErrors[id],
                    })}
                  />
                  {fieldErrors[id] && (
                    <p className="text-[0.7rem] text-red-400">{fieldErrors[id]}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Email & Phone Row */}
            <div className="grid grid-cols-2 gap-4 max-[520px]:grid-cols-1">
              <div className="flex flex-col gap-1">
                <label htmlFor="em" className={LABEL_CLASS}>
                  Email address <span className="text-primary">*</span>
                </label>
                <input
                  id="em"
                  name="em"
                  type="email"
                  placeholder="john@email.com"
                  required
                  disabled={loading}
                  className={cn(INPUT_CLASS, {
                    "border-red-500/70": fieldErrors.em,
                  })}
                />
                {fieldErrors.em && (
                  <p className="text-[0.7rem] text-red-400">{fieldErrors.em}</p>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="ph" className={LABEL_CLASS}>
                  Phone number
                </label>
                <input
                  id="ph"
                  name="ph"
                  type="tel"
                  placeholder="(973) 000-0000"
                  disabled={loading}
                  className={INPUT_CLASS}
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="msg" className={LABEL_CLASS}>
                Project Details or Questions
              </label>
              <textarea
                id="msg"
                name="msg"
                rows={3}
                placeholder="Tell us about the issue, scope, address, or timeline…"
                disabled={loading}
                className="resize-none rounded-lg border border-white/20 bg-white/3 p-3 text-[0.9rem] leading-relaxed text-white outline-none transition-colors placeholder:text-white/40 focus:border-secondary disabled:opacity-50"
              />
            </div>

            {/* Captcha Box */}
            <div className="rounded-xl border border-white/10 bg-black/40 p-3.5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className={LABEL_CLASS}>Security Check</p>
                  <p className="mt-0.5 font-mono text-lg font-bold tracking-[0.3em] text-secondary">
                    {captchaCode}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setCaptchaCode(generateCaptchaCode());
                    setCaptchaInput("");
                    setFieldErrors((currentErrors) => {
                      const next = { ...currentErrors };
                      delete next.captchaInput;
                      return next;
                    });
                  }}
                  disabled={loading}
                  className="rounded-md border border-white/20 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-stone-300 transition-colors hover:border-secondary hover:text-secondary cursor-pointer disabled:opacity-50"
                >
                  Refresh
                </button>
              </div>
              <div className="mt-2.5 flex flex-col gap-1">
                <label htmlFor="captchaInput" className="text-[0.68rem] text-stone-400">
                  Enter the 4-digit code above <span className="text-primary">*</span>
                </label>
                <input
                  id="captchaInput"
                  name="captchaInput"
                  value={captchaInput}
                  onChange={(event) => setCaptchaInput(event.target.value)}
                  inputMode="numeric"
                  autoComplete="off"
                  maxLength={4}
                  placeholder="••••"
                  required
                  disabled={loading}
                  className={cn(INPUT_CLASS, "w-full tracking-widest", {
                    "border-red-500/70": fieldErrors.captchaInput,
                  })}
                />
                {fieldErrors.captchaInput && (
                  <p className="text-[0.7rem] text-red-400">{fieldErrors.captchaInput}</p>
                )}
              </div>
            </div>

            {/* Submit & Guarantee */}
            <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={loading}
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary px-7 py-3.5 text-sm font-bold tracking-wide text-white transition-all duration-200 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending Request...
                  </>
                ) : (
                  <>
                    Request Free Estimate
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </>
                )}
              </button>
              <p className="text-xs text-stone-400">
                100% Free • No obligation • Fast response
              </p>
            </div>
          </form>

          {/* Emergency callout */}
          <div className="mt-6 flex items-center gap-3 rounded-xl border border-secondary/25 bg-secondary/5 p-3.5">
            <PhoneCall className="h-5 w-5 text-secondary shrink-0" />
            <div className="min-w-0 text-xs">
              <p className="font-semibold text-white">Active roof leak or emergency?</p>
              <p className="text-stone-300">
                Call us directly at{" "}
                <a
                  href={`tel:${siteConfig.phones.english}`}
                  className="font-bold text-secondary underline hover:text-white"
                >
                  {siteConfig.phones.english}
                </a>{" "}
                for immediate assistance.
              </p>
            </div>
          </div>
        </>
      ) : (
        /* Success state */
        <div className="flex flex-col items-center justify-center gap-4 py-16 text-center animate-in fade-in duration-300">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30">
            <Check className="h-8 w-8" strokeWidth={2.5} />
          </div>
          <h3 className="font-serif text-3xl font-bold text-white">
            Thank you! Request received.
          </h3>
          <p className="max-w-md text-sm leading-relaxed text-stone-300">
            We have received your estimate request. One of our project managers will review your project details and follow up within 24 business hours.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              onClick={handleReset}
              className="rounded-xl border border-white/20 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:border-secondary hover:bg-white/10 cursor-pointer"
            >
              Submit Another Request
            </button>
            <a
              href={`tel:${siteConfig.phones.english}`}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary/90"
            >
              <PhoneCall className="h-4 w-4" />
              Call Now
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
