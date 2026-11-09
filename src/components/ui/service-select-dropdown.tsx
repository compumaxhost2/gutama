"use client";

import { useEffect, useRef, useState, useId } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Wrench } from "lucide-react";

import { cn } from "@/lib/utils";
import { SERVICE_OPTIONS } from "@/lib/contact-schema";

export type Service = (typeof SERVICE_OPTIONS)[number];

export interface ServiceItemConfig {
  value: Service;
  title: string;
  subtitle: string;
  emoji: string;
  badge?: string;
}

export const SERVICE_ITEMS: ServiceItemConfig[] = [
  {
    value: "Roof Removal",
    title: "Roof Removal & Tear-Off",
    subtitle: "Complete tear-off down to the decking with clean debris haul-away",
    emoji: "🏚️",
  },
  {
    value: "Re-Roofing",
    title: "Re-Roofing & Replacement",
    subtitle: "Architectural shingles, underlayment & lifetime warranty systems",
    emoji: "🏠",
  },
  {
    value: "Flat Roof",
    title: "Flat Roofing Systems",
    subtitle: "Commercial & residential TPO, EPDM and modified bitumen",
    emoji: "🏢",
  },
  {
    value: "Slate Roof",
    title: "Slate Roof Restoration",
    subtitle: "Historic natural slate repair, flashing and custom copper work",
    emoji: "🏛️",
  },
  {
    value: "Chimney",
    title: "Chimney Repair & Flashing",
    subtitle: "Masonry repointing, step flashing, crown repair & rebuilds",
    emoji: "🧱",
  },
  {
    value: "Siding",
    title: "Siding Installation & Repair",
    subtitle: "Premium vinyl and James Hardie fiber cement exterior siding",
    emoji: "🏡",
  },
  {
    value: "Carpentry",
    title: "Exterior Carpentry",
    subtitle: "Fascia boards, soffits, rafter repair and decorative trim",
    emoji: "🪚",
  },
  {
    value: "Additions",
    title: "Home Additions",
    subtitle: "Second-story expansions, master suites & room buildouts",
    emoji: "🏗️",
  },
  {
    value: "Dormers",
    title: "Dormer Construction",
    subtitle: "Shed & gable dormers to increase headspace and attic light",
    emoji: "📐",
  },
  {
    value: "Gutters",
    title: "Seamless Gutters & Guards",
    subtitle: "Custom 5\" & 6\" aluminum gutters, downspouts & leaf guards",
    emoji: "🌧️",
  },
  {
    value: "Emergency",
    title: "Emergency Roof Repair",
    subtitle: "Rapid 24/7 response for active leaks, fallen trees & storm damage",
    emoji: "🚨",
    badge: "Fast Dispatch",
  },
];

interface ServiceSelectDropdownProps {
  value: Service | string | null;
  onChange: (service: Service) => void;
  error?: string;
  disabled?: boolean;
  name?: string;
  id?: string;
  placeholder?: string;
  className?: string;
}

export function ServiceSelectDropdown({
  value,
  onChange,
  error,
  disabled = false,
  name = "service",
  id,
  placeholder = "Select a service (e.g. Roofing, Siding, Gutters...)",
  className,
}: ServiceSelectDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const generatedId = useId();
  const triggerId = id || `service-select-${generatedId}`;
  const listboxId = `service-listbox-${generatedId}`;

  const selectedItem = SERVICE_ITEMS.find((s) => s.value === value);

  // Close when clicking outside or pressing Escape
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSelect = (serviceValue: Service) => {
    onChange(serviceValue);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className={cn("relative w-full", className)}>
      {/* Hidden input for standard HTML form submissions */}
      <input type="hidden" name={name} value={value || ""} />

      {/* Dropdown Trigger Button */}
      <button
        id={triggerId}
        type="button"
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls={listboxId}
        disabled={disabled}
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn(
          "relative flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3.5 text-left text-sm transition-all duration-200 cursor-pointer select-none outline-none",
          "bg-[#16120e]/90 hover:bg-[#1c1712]",
          "border-white/12 hover:border-white/25",
          "focus:border-primary focus:ring-2 focus:ring-primary/20",
          isOpen && "border-primary ring-2 ring-primary/20 bg-[#1c1712] shadow-lg shadow-black/40",
          error && "border-red-500/70 ring-1 ring-red-500/20",
          disabled && "opacity-50 cursor-not-allowed"
        )}
      >
        <div className="flex items-center gap-3 min-w-0">
          {selectedItem ? (
            <>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-base">
                {selectedItem.emoji}
              </span>
              <div className="min-w-0 truncate">
                <span className="font-semibold text-white">{selectedItem.title}</span>
                <span className="hidden md:inline text-xs text-stone-400 ml-2">
                  — {selectedItem.subtitle}
                </span>
              </div>
            </>
          ) : (
            <>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-stone-400">
                <Wrench className="h-3.5 w-3.5" />
              </span>
              <span className="text-stone-400 truncate">{placeholder}</span>
            </>
          )}
        </div>

        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-stone-400 transition-transform duration-200 ml-2",
            isOpen && "rotate-180 text-primary"
          )}
        />
      </button>

      {/* Floating Animated Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={listboxId}
            role="listbox"
            aria-labelledby={triggerId}
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 mt-2 z-50 rounded-2xl border border-white/15 bg-[#14100c]/98 p-2 shadow-2xl backdrop-blur-2xl ring-1 ring-black/80 max-h-84 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 mb-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                Select Service Needed
              </span>
              <span className="text-[10px] text-stone-400">
                11 Options Available
              </span>
            </div>

            {/* List of services */}
            <div className="space-y-1">
              {SERVICE_ITEMS.map((item) => {
                const isSelected = value === item.value;
                const isEmergency = item.value === "Emergency";

                return (
                  <button
                    key={item.value}
                    role="option"
                    aria-selected={isSelected}
                    type="button"
                    onClick={() => handleSelect(item.value)}
                    className={cn(
                      "group relative w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-all duration-150 cursor-pointer outline-none",
                      isSelected
                        ? "bg-primary text-white shadow-md shadow-primary/30"
                        : isEmergency
                        ? "bg-red-500/10 border border-red-500/25 hover:bg-red-500/20 text-red-100"
                        : "text-stone-200 hover:bg-white/[0.08] hover:text-white"
                    )}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span
                        className={cn(
                          "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border text-base transition-colors",
                          isSelected
                            ? "bg-white/20 border-white/30"
                            : isEmergency
                            ? "bg-red-500/20 border-red-500/40"
                            : "bg-white/5 border-white/10 group-hover:border-white/20"
                        )}
                      >
                        {item.emoji}
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <p
                            className={cn(
                              "text-xs font-semibold leading-tight",
                              isSelected ? "text-white" : isEmergency ? "text-red-200 font-bold" : "text-stone-100 group-hover:text-white"
                            )}
                          >
                            {item.title}
                          </p>
                          {item.badge && (
                            <span
                              className={cn(
                                "text-[9px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded",
                                isSelected ? "bg-white/25 text-white" : "bg-red-500/30 text-red-200 border border-red-500/40"
                              )}
                            >
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p
                          className={cn(
                            "text-[11px] truncate mt-0.5",
                            isSelected ? "text-white/80" : "text-stone-400 group-hover:text-stone-300"
                          )}
                        >
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    {isSelected && (
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-primary ml-2">
                        <Check className="h-3.5 w-3.5 stroke-[3]" />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

