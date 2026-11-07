import { Section } from "@/components/ui/Section";
import { tools } from "@/lib/content";

/** Grid of tools/technologies. Each gets a monogram tile instead of a logo. */
export function Stack() {
  return (
    <Section id="stack" heading={{ top: "Tools &", bottom: "Stack" }}>
      <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        {tools.map((t) => (
          <li key={t.name} className="flex items-center gap-4 px-3">
            <span className="bg-paper text-ink grid size-12 shrink-0 place-items-center rounded-xl text-lg font-bold">
              {t.name[0]}
            </span>
            <div>
              <p className="text-lg font-semibold">{t.name}</p>
              <p className="text-muted text-sm">{t.note}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
