import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";
import { Stats } from "@/components/sections/Stats";

/**
 * Top of the right column: accent gradient block with the name, role,
 * stats row and location. Fills the viewport height, then the content
 * sections scroll up underneath it. On mobile the gradient fades in from the
 * dark page colour so it flows on from the photo above.
 */
export function Hero() {
  const { name, role, location } = site;

  return (
    <section className="bg-accent-gradient-fade lg:bg-accent-gradient relative flex overflow-hidden lg:min-h-svh">
      <Container className="flex flex-col justify-between gap-12 pt-16 pb-10 lg:pt-40">
        {/* Headline */}
        <div className="animate-slide-up my-auto text-center">
          {/* One line at every width: size scales with the viewport (the right
              column is ~55vw on desktop, so the lg size is smaller). */}
          <h1 className="text-[12vw] leading-[0.9] font-medium tracking-[-0.05em] whitespace-nowrap lg:text-[6.5vw]">
            {name.first} {name.last}
          </h1>
          <p className="mt-10 text-2xl leading-tight tracking-tight md:text-4xl">
            {role}
          </p>
          <Stats className="mx-auto mt-12" />
        </div>

        {/* Footer row: location, right-aligned (desktop only) */}
        <div className="animate-slide-up hidden items-end justify-end text-sm lg:flex">
          <span className="text-paper/90">{location}</span>
        </div>
      </Container>
    </section>
  );
}
