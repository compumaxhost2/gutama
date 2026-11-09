"use client";

import { useCallback, useMemo, useState } from "react";
import { ArrowRight, CalendarDays, Check, Loader2 } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { SERVICE_OPTIONS, appointmentSchema, type AppointmentFormInput } from "@/lib/contact-schema";

type Service = (typeof SERVICE_OPTIONS)[number];

const INPUT_CLASS =
  "appearance-none border-0 border-b-[1.5px] border-white/28 bg-transparent pb-3 text-[0.93rem] text-white outline-none transition-colors placeholder:text-white/45 focus:border-secondary";

const LABEL_CLASS =
  "text-[0.7rem] font-medium uppercase tracking-[0.1em] text-white/60";

const NAME_FIELDS = [
  { id: "fn", label: "First name", placeholder: "John" },
  { id: "ln", label: "Last name", placeholder: "Doe" },
] as const;

function generateCaptchaCode() {
  return `${Math.floor(1000 + Math.random() * 9000)}`;
}

export function BookAppointmentForm() {
  const [service, setService] = useState<Service | null>(null);
  const [step3, setStep3] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [captchaCode, setCaptchaCode] = useState(() => generateCaptchaCode());
  const [captchaInput, setCaptchaInput] = useState("");
  const step2 = Boolean(service);

  const todayValue = useMemo(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, "0");
    const day = `${now.getDate()}`.padStart(2, "0");

    return `${year}-${month}-${day}`;
  }, []);

  const markStep3Started = useCallback(() => {
    setStep3((prev) => (prev ? prev : true));
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
        service: formData.get("service") as Service,
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
    } catch (submissionError) {
      console.error("Appointment form error:", submissionError);
      setError("Unable to send your appointment request. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setService(null);
    setStep3(false);
    setLoading(false);
    setError(null);
    setFieldErrors({});
    setCaptchaCode(generateCaptchaCode());
    setCaptchaInput("");
    setSubmitted(false);
  };

  return (
    <div className="contact-form-bg relative flex min-h-155 flex-col overflow-y-auto border-l border-white/12 bg-[#120d09]/85 backdrop-blur-xl lg:min-h-full">
      <div className="paper-grain pointer-events-none absolute inset-0 z-0 opacity-40" aria-hidden="true" />

      <div className="relative z-10 flex min-h-full flex-col justify-center px-[clamp(1.75rem,5vw,3.5rem)] py-[clamp(2.3rem,5vw,3.6rem)] max-[900px]:px-7 max-[900px]:py-10">
        {!submitted ? (
          <>
            <p className="mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-primary opacity-0 animate-[fade-up_0.3s_0.05s_ease_both]">
              Step 01 — Appointment request
            </p>
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.4rem)] font-bold leading-[1.1] text-[#f6f0e9] opacity-0 animate-[fade-up_0.3s_0.1s_ease_both]">
              Tell us about<br />
              your <strong className="font-black text-primary">project</strong>
            </h2>

            <div className="mt-4 mb-7 flex gap-1 opacity-0 animate-[fade-in_0.3s_0.15s_ease_both]">
              {[true, step2, step3].map((active, i) => (
                <div
                  key={i}
                  className={cn(
                    "h-0.75 rounded-sm transition-colors duration-300",
                    i === 0 ? "w-11" : "w-5",
                    active ? "bg-primary" : "bg-white/20"
                  )}
                />
              ))}
            </div>

            <div className="flex items-center justify-between">
              <span className="mb-2.5 block text-[0.7rem] font-medium uppercase tracking-[0.12em] text-white/60">
                What service do you need?
              </span>
              {fieldErrors.service && (
                <span className="text-[0.7rem] font-medium text-red-400">
                  {fieldErrors.service}
                </span>
              )}
            </div>
            <div className="mb-7 flex flex-wrap gap-2">
              {SERVICE_OPTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => handleServiceSelect(s)}
                  className={cn(
                    "whitespace-nowrap rounded-full border-[1.5px] px-3 py-1.5 text-[0.78rem] font-medium transition-all duration-150",
                    service === s
                      ? "border-primary bg-primary text-white"
                      : "border-white/25 bg-white/2 text-white/75 hover:border-secondary hover:text-secondary"
                  )}
                >
                  {s === "Emergency" ? "🚨 Emergency" : s}
                </button>
              ))}
            </div>

            {error && (
              <div className="mb-5 rounded-lg border-l-[3px] border-red-500 bg-red-500/10 p-3.5">
                <p className="text-sm text-red-200">{error}</p>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              onInput={step3 ? undefined : markStep3Started}
              className="flex flex-col gap-4"
            >
              <input type="hidden" name="service" value={service || ""} />
              <input type="hidden" name="formType" value="appointment" />

              <div className="flex flex-col gap-1">
                <label htmlFor="appointmentDate" className={LABEL_CLASS}>Preferred appointment date</label>
                <div className="relative">
                  <input
                    id="appointmentDate"
                    name="appointmentDate"
                    type="date"
                    min={todayValue}
                    required
                    disabled={loading}
                    className={cn(INPUT_CLASS, "pr-10", {
                      "border-red-500/60": fieldErrors.appointmentDate,
                    })}
                  />
                  <CalendarDays className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-white/45" />
                </div>
                {fieldErrors.appointmentDate && (
                  <p className="text-[0.7rem] text-red-400">{fieldErrors.appointmentDate}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3.5 max-[520px]:grid-cols-1">
                {NAME_FIELDS.map(({ id, label, placeholder }) => (
                  <div key={id} className="flex flex-col gap-1">
                    <label htmlFor={id} className={LABEL_CLASS}>{label}</label>
                    <input
                      id={id}
                      name={id}
                      placeholder={placeholder}
                      required
                      disabled={loading}
                      className={cn(INPUT_CLASS, {
                        "border-red-500/60": fieldErrors[id],
                      })}
                    />
                    {fieldErrors[id] && (
                      <p className="text-[0.7rem] text-red-400">{fieldErrors[id]}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="em" className={LABEL_CLASS}>Email address</label>
                <input
                  id="em"
                  name="em"
                  type="email"
                  placeholder="john@email.com"
                  required
                  disabled={loading}
                  className={cn(INPUT_CLASS, {
                    "border-red-500/60": fieldErrors.em,
                  })}
                />
                {fieldErrors.em && (
                  <p className="text-[0.7rem] text-red-400">{fieldErrors.em}</p>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="ph" className={LABEL_CLASS}>Phone number</label>
                <input
                  id="ph"
                  name="ph"
                  type="tel"
                  placeholder="(973) 000-0000"
                  disabled={loading}
                  className={INPUT_CLASS}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="msg" className={LABEL_CLASS}>Project details</label>
                <textarea
                  id="msg"
                  name="msg"
                  rows={3}
                  placeholder="Briefly describe the work…"
                  disabled={loading}
                  className="resize-none rounded-lg border-[1.5px] border-white/24 bg-white/2 p-3 text-[0.93rem] leading-relaxed text-white outline-none transition-colors placeholder:text-white/45 focus:border-secondary disabled:opacity-50"
                />
              </div>

              <div className="flex flex-col gap-2 rounded-xl border border-white/12 bg-black/18 p-3.5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className={LABEL_CLASS}>Security check</p>
                    <p className="mt-1 font-mono text-[1.15rem] tracking-[0.32em] text-primary">
                      {captchaCode}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setCaptchaCode(generateCaptchaCode());
                      setCaptchaInput("");
                      setFieldErrors((currentErrors) => {
                        const nextErrors = { ...currentErrors };
                        delete nextErrors.captchaInput;
                        return nextErrors;
                      });
                    }}
                    disabled={loading}
                    className="rounded-md border border-white/18 px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white/70 transition-colors hover:border-secondary hover:text-secondary disabled:opacity-60"
                  >
                    Refresh
                  </button>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="captchaInput" className={LABEL_CLASS}>Enter the 4-digit code</label>
                  <input
                    id="captchaInput"
                    name="captchaInput"
                    value={captchaInput}
                    onChange={(event) => setCaptchaInput(event.target.value)}
                    inputMode="numeric"
                    autoComplete="off"
                    maxLength={4}
                    placeholder="1234"
                    required
                    disabled={loading}
                    className={cn(INPUT_CLASS, "w-full", {
                      "border-red-500/60": fieldErrors.captchaInput,
                    })}
                  />
                  {fieldErrors.captchaInput && (
                    <p className="text-[0.7rem] text-red-400">{fieldErrors.captchaInput}</p>
                  )}
                </div>
              </div>

              <div className="mt-2 flex items-center gap-5">
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-md bg-[#0f0e0c] px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition-[transform,box-shadow] duration-150 disabled:cursor-not-allowed disabled:opacity-60 hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(184,74,46,0.25)] hover:disabled:shadow-none"
                >
                  <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-300 ease-out group-hover:translate-x-0" />
                  <span className="relative z-10 flex items-center gap-2">
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Request Appointment
                        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </>
                    )}
                  </span>
                </button>
                <p className="max-w-37.5 text-xs leading-snug text-white/55">
                  No obligation. Reply within 24 hrs.
                </p>
              </div>
            </form>

            <div className="mt-8 flex items-center gap-3.5 rounded-r-lg border-l-[3px] border-secondary bg-black/25 p-4 shadow-[0_10px_26px_rgba(0,0,0,0.3)]">
              <div>
                <span className="mb-0.5 block text-[0.68rem] font-semibold uppercase tracking-widest text-primary">
                  Storm damage or active leak?
                </span>
                <a
                  href={`tel:${siteConfig.phones.english}`}
                  className="font-serif text-lg font-bold text-[#f6f0e9] transition-colors hover:text-secondary"
                >
                  {siteConfig.phones.english} — Call us now
                </a>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4 py-12 text-center animate-[fade-up_0.5s_ease_both]">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
              <Check className="h-7 w-7 text-white" strokeWidth={2.5} />
            </div>
            <h3 className="font-serif text-3xl font-bold text-[#f6f0e9]">
              Request received!
            </h3>
            <p className="max-w-70 text-sm leading-relaxed text-white/65">
              We&apos;ve received your appointment request and will reach out within 24 business hours to confirm the date.
            </p>
            <button
              onClick={handleReset}
              className="mt-2 rounded-md border-[1.5px] border-white/25 bg-transparent px-5 py-2.5 text-sm text-white/75 transition-all hover:border-secondary hover:text-secondary"
            >
              Submit another request
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
