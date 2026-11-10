"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Check, Loader2, Mail, MessageSquare, Phone, PhoneCall, ShieldCheck, User, Wrench } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { contactSchema, type ContactFormInput } from "@/lib/contact-schema";
import { ServiceSelectDropdown, type Service } from "@/components/ui/service-select-dropdown";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { generateContactWhatsAppMessage, buildWhatsAppUrl } from "@/lib/whatsapp";

const INPUT_CLASS =
  "w-full rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-stone-500 outline-none transition-all duration-200 focus:border-primary focus:bg-white/[0.07] focus:ring-2 focus:ring-primary/20 disabled:opacity-50";

const LABEL_CLASS =
  "text-xs font-medium text-stone-300 flex items-center gap-1.5";

function generateCaptchaCode() {
  return `${Math.floor(1000 + Math.random() * 9000)}`;
}

export function ContactForm() {
  const [service, setService] = useState<Service | "">("");
  const [whatsAppUrl, setWhatsAppUrl] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [captchaCode, setCaptchaCode] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");

  useEffect(() => {
    setCaptchaCode(generateCaptchaCode());
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setFieldErrors({});

    const formData = new FormData(e.currentTarget);
    const selectedService = (formData.get("service") as Service) || service;

    // Validate service selection explicitly
    if (!selectedService) {
      setFieldErrors({ service: "Please select a service from the dropdown." });
      setLoading(false);
      return;
    }

    try {
      const payload: ContactFormInput = {
        service: selectedService,
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

      // Success - generate beautifully formatted WhatsApp message
      const waText = generateContactWhatsAppMessage(payload);
      const waUrl = buildWhatsAppUrl(waText);
      setWhatsAppUrl(waUrl);

      // Attempt automatic redirect to WhatsApp in a new tab
      try {
        window.open(waUrl, "_blank", "noopener,noreferrer");
      } catch (err) {
        console.warn("Popup blocked or not supported:", err);
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Form submission error:", err);
      setError("Unable to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setService("");
    setWhatsAppUrl("");
    setLoading(false);
    setError(null);
    setFieldErrors({});
    setCaptchaCode(generateCaptchaCode());
    setCaptchaInput("");
    setSubmitted(false);
  };

  return (
    <div className="relative flex h-full flex-col justify-center bg-[#0d0b0a] p-8 sm:p-10 lg:p-12">
      {!submitted ? (
        <>
          {/* Header */}
          <div className="mb-7">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Online Estimate Form
            </span>
            <h2 className="mt-1 font-serif text-2xl font-bold text-white sm:text-3xl">
              Tell us about your project
            </h2>
            <p className="mt-1.5 text-xs text-stone-400">
              Fill out the details below and we&apos;ll get back to you with a free, itemized estimate.
            </p>
          </div>

          {/* Form-level Error Message */}
          {error && (
            <div className="mb-5 rounded-xl border border-red-500/40 bg-red-500/10 p-3.5">
              <p className="text-xs font-medium text-red-200">{error}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* 1. Custom Styled Service Dropdown (Inside Form) */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="service-select" className={LABEL_CLASS}>
                <Wrench className="h-3.5 w-3.5 text-secondary" />
                What service do you need? <span className="text-primary">*</span>
              </label>

              <ServiceSelectDropdown
                id="service-select"
                value={service}
                disabled={loading}
                error={fieldErrors.service}
                onChange={(val) => {
                  setService(val);
                  setFieldErrors((prev) => {
                    const next = { ...prev };
                    delete next.service;
                    return next;
                  });
                }}
              />

              {fieldErrors.service && (
                <p className="text-[0.7rem] font-medium text-red-400">{fieldErrors.service}</p>
              )}
            </div>

            {/* 2. Client Details (First Name & Last Name) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="fn" className={LABEL_CLASS}>
                  <User className="h-3.5 w-3.5 text-stone-400" />
                  First name <span className="text-primary">*</span>
                </label>
                <input
                  id="fn"
                  name="fn"
                  placeholder="John"
                  required
                  disabled={loading}
                  className={cn(INPUT_CLASS, {
                    "border-red-500/70 focus:border-red-500": fieldErrors.fn,
                  })}
                />
                {fieldErrors.fn && (
                  <p className="text-[0.7rem] text-red-400">{fieldErrors.fn}</p>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="ln" className={LABEL_CLASS}>
                  <User className="h-3.5 w-3.5 text-stone-400" />
                  Last name <span className="text-primary">*</span>
                </label>
                <input
                  id="ln"
                  name="ln"
                  placeholder="Doe"
                  required
                  disabled={loading}
                  className={cn(INPUT_CLASS, {
                    "border-red-500/70 focus:border-red-500": fieldErrors.ln,
                  })}
                />
                {fieldErrors.ln && (
                  <p className="text-[0.7rem] text-red-400">{fieldErrors.ln}</p>
                )}
              </div>
            </div>

            {/* 3. Contact Info (Email & Phone side-by-side) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="em" className={LABEL_CLASS}>
                  <Mail className="h-3.5 w-3.5 text-stone-400" />
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
                    "border-red-500/70 focus:border-red-500": fieldErrors.em,
                  })}
                />
                {fieldErrors.em && (
                  <p className="text-[0.7rem] text-red-400">{fieldErrors.em}</p>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="ph" className={LABEL_CLASS}>
                  <Phone className="h-3.5 w-3.5 text-stone-400" />
                  Phone number <span className="text-stone-500 font-normal">(Optional)</span>
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

            {/* 4. Project Details Textarea */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="msg" className={LABEL_CLASS}>
                <MessageSquare className="h-3.5 w-3.5 text-stone-400" />
                Project details or questions
              </label>
              <textarea
                id="msg"
                name="msg"
                rows={3}
                placeholder="Briefly describe the work (e.g., roof leak near chimney, full replacement estimate, siding repair, location)…"
                disabled={loading}
                className={cn(
                  INPUT_CLASS,
                  "resize-none leading-relaxed py-3"
                )}
              />
            </div>

            {/* 5. Captcha Security Verification Box */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-secondary" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-300">
                    Security verification
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-base font-bold tracking-[0.25em] text-secondary bg-white/5 border border-white/10 px-3 py-1 rounded-lg">
                    {captchaCode}
                  </span>
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
                    className="rounded-lg border border-white/15 px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-stone-300 transition-colors hover:border-secondary hover:text-secondary cursor-pointer disabled:opacity-50"
                  >
                    Refresh
                  </button>
                </div>
              </div>

              <div className="mt-3 flex flex-col gap-1">
                <input
                  id="captchaInput"
                  name="captchaInput"
                  value={captchaInput}
                  onChange={(event) => setCaptchaInput(event.target.value)}
                  inputMode="numeric"
                  autoComplete="off"
                  maxLength={4}
                  placeholder="Enter the 4-digit code above *"
                  required
                  disabled={loading}
                  className={cn(INPUT_CLASS, "tracking-widest", {
                    "border-red-500/70 focus:border-red-500": fieldErrors.captchaInput,
                  })}
                />
                {fieldErrors.captchaInput && (
                  <p className="text-[0.7rem] text-red-400">{fieldErrors.captchaInput}</p>
                )}
              </div>
            </div>

            {/* Quick WhatsApp option */}
            <div className="flex items-center justify-between gap-3 rounded-xl border border-emerald-500/25 bg-emerald-500/5 px-4 py-3 text-xs">
              <div className="flex items-center gap-2 text-emerald-300">
                <WhatsAppIcon className="h-4 w-4 shrink-0 text-emerald-400" />
                <span>Prefer to chat on WhatsApp?</span>
              </div>
              <a
                href={`https://wa.me/${siteConfig.phones.whatsapp}?text=${encodeURIComponent(
                  "Hi Antonio, I'm reaching out from your website for a free estimate on roofing / exterior work."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-emerald-400 underline hover:text-white"
              >
                Chat on WhatsApp &rarr;
              </a>
            </div>

            {/* 6. Submit Button & Guarantee */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pt-1">
              <button
                type="submit"
                disabled={loading}
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary px-8 py-3.5 text-sm font-bold tracking-wide text-white transition-all duration-200 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
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
                100% Free • No obligation • Reply within 24 hrs
              </p>
            </div>
          </form>

          {/* Emergency callout */}
          <div className="mt-6 flex items-center gap-3 rounded-xl border border-secondary/25 bg-secondary/5 p-3.5">
            <PhoneCall className="h-5 w-5 text-secondary shrink-0" />
            <div className="min-w-0 text-xs">
              <p className="font-semibold text-white">Storm damage or active roof leak?</p>
              <p className="text-stone-300">
                Call our emergency crew at{" "}
                <a
                  href={`tel:${siteConfig.phones.english}`}
                  className="font-bold text-secondary underline hover:text-white"
                >
                  {siteConfig.phones.english}
                </a>{" "}
                for fast dispatch.
              </p>
            </div>
          </div>
        </>
      ) : (
        /* Success state */
        <div className="flex flex-col items-center justify-center gap-4 py-12 text-center animate-in fade-in duration-300">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30">
            <Check className="h-8 w-8" strokeWidth={2.5} />
          </div>
          <h3 className="font-serif text-3xl font-bold text-white">
            Thank you! Request received.
          </h3>
          <p className="max-w-md text-sm leading-relaxed text-stone-300">
            We have received your estimate request. One of our project managers will review your details and contact you within 24 business hours.
          </p>

          {/* WhatsApp Direct Connect Card */}
          <div className="w-full max-w-md rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 text-center my-2">
            <div className="flex items-center justify-center gap-2 text-emerald-400 mb-1">
              <WhatsAppIcon className="h-5 w-5" />
              <p className="text-xs font-bold uppercase tracking-wider">
                Instant WhatsApp Connection
              </p>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed">
              We opened WhatsApp with your project details pre-filled. If it didn&apos;t open automatically on your device, tap the button below:
            </p>
            <a
              href={whatsAppUrl || `https://wa.me/${siteConfig.phones.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3.5 inline-flex items-center justify-center gap-2.5 w-full rounded-xl bg-emerald-600 hover:bg-emerald-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition-all cursor-pointer"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Send to Antonio on WhatsApp
            </a>
          </div>

          <div className="mt-2 flex flex-wrap gap-3 justify-center">
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
              Call Directly
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
