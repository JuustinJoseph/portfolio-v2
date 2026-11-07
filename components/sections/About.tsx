import { ArrowRight } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { about, focusCards, stats } from "@/lib/content";

/** Card colours, keyed by `tone` in lib/content.ts */
const tones = {
  accent: "bg-accent text-paper",
  highlight: "bg-highlight text-ink",
} as const;

/** Intro: role heading, short bio, stats row, and two focus cards. */
export function About() {
  return (
    <section id="about" className="scroll-mt-12">
      <SectionHeading top="Software" bottom="Developer" />
      <p className="text-muted mt-6 max-w-md leading-relaxed">{about.intro}</p>

      {/* Stats */}
      <dl className="mt-12 flex flex-wrap gap-x-12 gap-y-6">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col-reverse">
            <dt className="text-muted mt-2 max-w-24 text-xs uppercase">
              {s.label}
            </dt>
            <dd className="text-6xl font-bold tracking-tight">{s.value}</dd>
          </div>
        ))}
      </dl>

      {/* Focus cards */}
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {focusCards.map((card) => (
          <div
            key={card.title}
            className={cn(
              "flex min-h-48 flex-col justify-between rounded-2xl p-6",
              tones[card.tone],
            )}
          >
            <p className="text-xl leading-tight font-semibold uppercase">
              {card.title}
            </p>
            <ArrowRight className="size-5 self-end" />
          </div>
        ))}
      </div>
    </section>
  );
}
