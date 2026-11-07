import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import { education } from "@/lib/content";

/**
 * Schools and programs, newest first. Same row look as Experience: program,
 * summary, school and dates, plus honours as small orange chips.
 */
export function Education() {
  return (
    <Section id="education" heading={{ top: "My", bottom: "Education" }}>
      <ol className="flex flex-col gap-4">
        {education.map((item) => (
          <li
            key={`${item.school}-${item.period}`}
            className="hover:bg-surface rounded-xl p-3 transition-colors"
          >
            <h3 className="text-xl font-semibold tracking-tight">
              {item.program}
            </h3>
            <p className="text-muted mt-2 max-w-md text-base leading-relaxed sm:text-sm">
              {item.summary}
            </p>
            <p className="text-muted mt-3 text-base sm:text-sm">
              <span className="text-paper/90">{item.school}</span> ·{" "}
              {item.location} · {item.period}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {item.honours.map((h) => (
                <Tag key={h}>{h}</Tag>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
