"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Globe, Languages } from "lucide-react";
import { cn } from "@/lib/utils";

const TRANSLATE_SCRIPT_ID = "google-translate-script";
const TRANSLATE_CONTAINER_ID = "google_translate_element";

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "es", label: "Spanish" },
  { code: "pt", label: "Portuguese" },
  { code: "it", label: "Italian" },
] as const;

export function GoogleTranslateWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hasInitializedRef = useRef(false);

  useEffect(() => {
    // Check initial cookie
    const match = document.cookie.match(/googtrans=\/en\/([a-z]{2})/i);
    if (match?.[1]) {
      setCurrentLang(match[1].toLowerCase());
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const loadGoogleScript = (targetCode?: string) => {
    if (window.google?.translate?.TranslateElement) {
      applyTranslation(targetCode);
      return;
    }

    window.googleTranslateElementInit = () => {
      const Widget = window.google?.translate?.TranslateElement;
      if (!Widget) return;

      new Widget(
        {
          pageLanguage: "en",
          includedLanguages: "en,es,pt,it",
          autoDisplay: false,
        },
        TRANSLATE_CONTAINER_ID
      );

      if (targetCode) {
        setTimeout(() => applyTranslation(targetCode), 300);
      }
    };

    if (!document.getElementById(TRANSLATE_SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = TRANSLATE_SCRIPT_ID;
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  };

  const applyTranslation = (code?: string) => {
    if (!code) return;
    const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (select) {
      select.value = code;
      select.dispatchEvent(new Event("change"));
    }
  };

  const handleSelectLanguage = (code: string) => {
    setCurrentLang(code);
    setIsOpen(false);

    // Set translation cookies
    const cookieVal = code === "en" ? "/en/en" : `/en/${code}`;
    document.cookie = `googtrans=${cookieVal}; path=/;`;
    if (window.location.hostname !== "localhost") {
      document.cookie = `googtrans=${cookieVal}; path=/; domain=${window.location.hostname};`;
    }

    if (window.google?.translate?.TranslateElement) {
      applyTranslation(code);
      // Give DOM time to update or reload if needed
      setTimeout(() => {
        const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
        if (!select) {
          window.location.reload();
        }
      }, 200);
    } else {
      loadGoogleScript(code);
      setTimeout(() => {
        window.location.reload();
      }, 400);
    }
  };

  const currentLabel = LANGUAGES.find((l) => l.code === currentLang)?.label || "English";

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      {/* Hidden container where Google Translate attaches its combo */}
      <div
        id={TRANSLATE_CONTAINER_ID}
        className="pointer-events-none fixed -left-[9999px] -top-[9999px] h-0 w-0 opacity-0 overflow-hidden"
        aria-hidden="true"
      />

      {/* Custom Designed Trigger Pill */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn(
          "inline-flex items-center gap-1 sm:gap-1.5 rounded-full border border-white/20 bg-[#0c0c0e] px-2 py-1 sm:px-3 sm:py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-200 hover:border-secondary hover:bg-[#141418] cursor-pointer",
          isOpen && "border-secondary ring-1 ring-secondary/50"
        )}
        aria-label="Select Language"
      >
        {/* 文A Translate Icon on Mobile, Globe on Desktop */}
        <Languages className="h-3 w-3 sm:hidden text-secondary shrink-0" />
        <Globe className="hidden sm:inline-block h-3.5 w-3.5 text-secondary shrink-0" />

        {/* Short Code on Mobile (EN), Full Label on Desktop (ENGLISH) */}
        <span className="sm:hidden font-bold tracking-wide">{currentLang.toUpperCase()}</span>
        <span className="hidden sm:inline font-bold tracking-wider">{currentLabel.toUpperCase()}</span>

        <ChevronDown className={cn("h-2.5 w-2.5 sm:h-3 sm:w-3 text-secondary shrink-0 transition-transform duration-200", isOpen && "rotate-180")} />
      </button>

      {/* Custom Jet Black Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 w-38 sm:w-44 rounded-xl border border-white/15 bg-[#0c0c0e] p-1.5 shadow-[0_20px_40px_rgba(0,0,0,0.95)] backdrop-blur-md">
          <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary border-b border-white/10 mb-1">
            Language
          </div>
          <div className="flex flex-col gap-0.5">
            {LANGUAGES.map((lang) => {
              const isSelected = currentLang === lang.code;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => handleSelectLanguage(lang.code)}
                  className={cn(
                    "flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-xs font-medium transition-colors cursor-pointer",
                    isSelected
                      ? "bg-secondary/15 font-bold text-secondary"
                      : "text-stone-300 hover:bg-white/10 hover:text-white"
                  )}
                >
                  <span>{lang.label}</span>
                  {isSelected && <span className="h-1.5 w-1.5 rounded-full bg-secondary" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}