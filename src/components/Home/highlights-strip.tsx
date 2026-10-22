import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

export function HighlightsStrip() {
  return (
    <section aria-label="Key highlights" className="w-full bg-black py-8 sm:py-10 border-t border-b border-white/10">
      <Container className="max-w-7xl">
        <Reveal>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* Box 1 - Local Expertise */}
            <div className="rounded-2xl border border-secondary/50 bg-[#121212] p-6 sm:p-7 shadow-xl transition-all duration-300 hover:border-secondary/80 hover:bg-[#161616]">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-secondary">
                LOCAL EXPERTISE
              </p>
              <h3 className="mt-2 text-lg sm:text-xl font-bold leading-snug text-white">
                Your Local Roofing Partner
              </h3>
              <p className="mt-1 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                Keeping New Jersey Homes Safe &amp; Protected
              </p>
            </div>

            {/* Box 2 - Fast Response */}
            <div className="rounded-2xl border border-primary/60 bg-[#121212] p-6 sm:p-7 shadow-xl transition-all duration-300 hover:border-primary/90 hover:bg-[#161616]">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-primary">
                FAST RESPONSE
              </p>
              <h3 className="mt-2 text-lg sm:text-xl font-bold leading-snug text-white">
                Roof Problems Don&apos;t Wait
              </h3>
              <p className="mt-1 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                Fast, Reliable Roofing Services
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
