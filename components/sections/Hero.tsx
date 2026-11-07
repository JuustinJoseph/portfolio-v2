import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { socialIcons } from "@/components/ui/Icons";
import { site } from "@/lib/site";

/**
 * Top of the right column: accent gradient block with the name, role,
 * social links and location. Fills the viewport height, then the content
 * sections scroll up underneath it.
 */
export function Hero() {
  const { name, tagline, location, socials } = site;

  return (
    <section className="bg-accent-gradient relative flex min-h-svh overflow-hidden">
      <Container className="flex flex-col justify-between pt-40 pb-10">
        {/* Headline */}
        <div className="my-auto">
          <h1 className="text-7xl leading-[0.9] font-medium tracking-[-0.05em] md:text-9xl xl:text-[10rem]">
            {name.first}
            <br />
            {name.last}
          </h1>
          <p className="mt-10 text-2xl leading-tight tracking-tight md:text-4xl">
            {tagline}
          </p>
        </div>

        {/* Footer row: socials left, location right */}
        <div className="flex items-end justify-between text-sm">
          <ul className="flex items-center gap-5">
            {socials.map((s) => {
              const Icon = socialIcons[s.icon];
              return (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="text-paper/90 hover:text-paper block transition-colors"
                  >
                    <Icon className="size-6" />
                  </Link>
                </li>
              );
            })}
          </ul>
          <span className="text-paper/90">{location}</span>
        </div>
      </Container>
    </section>
  );
}
