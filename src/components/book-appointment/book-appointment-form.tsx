"use client";

import { useCallback, useMemo, useState } from "react";
import { ArrowRight, CalendarDays, Check, CheckCircle2, Loader2, Mail, MessageSquare, Phone, PhoneCall, ShieldCheck, User } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { SERVICE_OPTIONS, appointmentSchema, type AppointmentFormInput } from "@/lib/contact-schema";

type Service = (typeof SERVICE_OPTIONS)[number];

const INPUT_CLASS =
  "w-full rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-stone-500 outline-none transition-all duration-200 focus:border-primary focus:bg-white/[0.07] focus:ring-2 focus:ring-primary/20 disabled:opacity-50";

const LABEL_CLASS =
  "text-xs font-medium text-stone-300 flex items-center gap-1.5";

function generateCaptchaCode() {
  return `${Math.floor(1000 + Math.random() * 9000)}`;
}

export function BookAppointmentForm() {
  const [service, setService] = useState<Service | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [captchaCode, setCaptchaCode] = useState(() => generateCaptchaCode());
  const [captchaInput, setCaptchaInput] = useState("");

  const todayValue = useMemo(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, "0");
    const day = `${now.getDate()}`.padStart(2, "0");

    return `${year}-${month}-${day}`;
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

    if (!service) {
      setFieldErrors({ service: "Please select a service needed from the options above." });
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData(e.currentTarget);
      const payload: AppointmentFormInput = {
        formType: "appointment",
        service: service,
        appointmentDate: (formData.get("appointmentDate") as string).trim(),
        fn: (formData.get("fn") as string).trim(),
        ln: (formData.get("ln") as string).trim(),
        em: (formData.get("em") as string).trim(),
        ph: (formData.get("ph") as string).trim(),
        msg: (formData.get("msg") as string).trim(),
        captchaCode,
        captchaInput: (formData.get("captchaInput") as string).trim(),
      };

      const validation = appointmentSchema.safeParse(payload);
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

      setSubmitted(true);
    } catch (err) {
      console.error("Appointment submission error:", err);
      setError("Unable to schedule appointment right now. Please try again later.");
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
    <div className="relative flex flex-col justify-center bg-[#0d0b0a] p-8 sm:p-10 lg:p-14">
      {!submitted ? (
        <>
          <div className="mb-7">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Online Scheduling
            </span>
            <h2 className="mt-1 font-serif text-2xl font-bold text-white sm:text-3xl">
              Choose your service &amp; preferred date
            </h2>
            <p className="mt-1.5 text-xs text-stone-400">
              Pick a convenient date and we will confirm your evaluation within 24 business hours.
            </p>
          </div>

          {error && (
            <div className="mb-5 rounded-xl border border-red-500/40 bg-red-500/10 p-3.5">
              <p className="text-xs font-medium text-red-200">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Service selector */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-5">
              <div className="flex items-center justify-between gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-300">
                  Select Service Needed <span className="text-primary">*</span>
                </label>
                {fieldErrors.service && (
                  <span className="text-[0.72rem] font-semibold text-red-400">
                    {fieldErrors.service}
                  </span>
                )}
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {SERVICE_OPTIONS.map((s) => {
                  const isSelected = service === s;
                  const isEmergency = s === "Emergency";

                  return (
                    <button
                      key={s}
                      type="button"
                      onClick={() => handleServiceSelect(s)}
                      className={cn(
                        "group relative inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-xs font-medium transition-all duration-200 cursor-pointer select-none",
                        isSelected
                          ? "border-primary bg-primary text-white shadow-lg shadow-primary/25 scale-[1.02]"
                          : isEmergency
                          ? "border-red-500/30 bg-red-500/10 text-red-300 hover:border-red-500/60 hover:bg-red-500/20"
                          : "border-white/10 bg-white/[0.03] text-stone-300 hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
                      )}
                    >
                      {isSelected ? (
                        <CheckCircle2 className="h-3.5 w-3.5 text-white shrink-0" />
                      ) : isEmergency ? (
                        <span className="text-sm">🚨</span>
                      ) : null}
                      <span>{isEmergency ? "Emergency Repair" : s}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Date & Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="appointmentDate" className={LABEL_CLASS}>
                  <CalendarDays className="h-3.5 w-3.5 text-secondary" />
                  Preferred Date <span className="text-primary">*</span>
                </label>
                <input
                  id="appointmentDate"
                  name="appointmentDate"
                  type="date"
                  min={todayValue}
                  required
                  disabled={loading}
                  className={cn(INPUT_CLASS, "cursor-pointer [color-scheme:dark]", {
                    "border-red-500/70 focus:border-red-500": fieldErrors.appointmentDate,
                  })}
                />
                {fieldErrors.appointmentDate && (
                  <p className="text-[0.7rem] text-red-400">{fieldErrors.appointmentDate}</p>
                )}
              </div>

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

            {/* Email & Phone */}
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

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="msg" className={LABEL_CLASS}>
                <MessageSquare className="h-3.5 w-3.5 text-stone-400" />
                Project notes or specific requests
              </label>
              <textarea
                id="msg"
                name="msg"
                rows={3}
                placeholder="Share any details about your property, address, or timeline…"
                disabled={loading}
                className={cn(
                  INPUT_CLASS,
                  "resize-none leading-relaxed py-3"
                )}
              />
            </div>

            {/* Captcha */}
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

            {/* Submit */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pt-1">
              <button
                type="submit"
                disabled={loading}
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary px-8 py-3.5 text-sm font-bold tracking-wide text-white transition-all duration-200 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Booking Appointment...
                  </>
                ) : (
                  <>
                    Request Appointment
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </>
                )}
              </button>
              <p className="text-xs text-stone-400">
                100% Free Consultation • No Obligation
              </p>
            </div>
          </form>

          {/* Emergency callout */}
          <div className="mt-6 flex items-center gap-3 rounded-xl border border-secondary/25 bg-secondary/5 p-3.5">
            <PhoneCall className="h-5 w-5 text-secondary shrink-0" />
            <div className="min-w-0 text-xs">
              <p className="font-semibold text-white">Need emergency same-day dispatch?</p>
              <p className="text-stone-300">
                Call our direct line at{" "}
                <a
                  href={`tel:${siteConfig.phones.english}`}
                  className="font-bold text-secondary underline hover:text-white"
                >
                  {siteConfig.phones.english}
                </a>
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
            Appointment Request Received!
          </h3>
          <p className="max-w-md text-sm leading-relaxed text-stone-300">
            Thank you for scheduling with us. Our team will review our calendar and reach out within 24 business hours to confirm your appointment.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              onClick={handleReset}
              className="rounded-xl border border-white/20 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:border-secondary hover:bg-white/10 cursor-pointer"
            >
              Book Another Appointment
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
