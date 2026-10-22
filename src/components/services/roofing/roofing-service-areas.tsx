import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/config/site";

export function RoofingServiceAreasSection() {
  const towns = [
    "Newark",
    "East Orange",
    "Orange",
    "Irvington",
    "Belleville",
    "Bloomfield",
    "Caldwell",
    "Cedar Grove",
    "Essex Fells",
    "Glen Ridge",
    "Livingston",
    "Maplewood",
    "Millburn",
    "Montclair",
    "Nutley",
    "Roseland",
    "South Orange",
    "Verona",
    "West Orange",
  ];

  return (
    <section className="bg-[#dfd0c0] text-black py-14 px-6 border-t border-stone-300">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Local NJ Presence
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Serving Essex County & Surrounding Communities
            </h2>
            <div className="gold-divider mt-5 mb-5" />
            <p className="text-base font-medium text-black">
              Headquartered at {siteConfig.address.streetAddress} in {siteConfig.address.locality}, NJ, we deliver responsive roofing services tailored to North Jersey's unique architectural heritage and local municipal permitting requirements.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {towns.map((town) => (
            <div
              key={town}
              className="flex items-center gap-2 rounded-xl border border-stone-300/80 bg-white/95 px-3.5 py-3 text-xs font-medium text-black shadow-xs transition-all duration-200 hover:border-primary/40 hover:bg-white hover:text-primary hover:shadow-sm"
            >
              <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
              <span>{town}, NJ</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
