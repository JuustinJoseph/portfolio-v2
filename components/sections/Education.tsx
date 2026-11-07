import { LinkRow } from "@/components/ui/LinkRow";
import { Section } from "@/components/ui/Section";
import { education } from "@/lib/content";

/** Schools and programs, newest first. Same row style as Experience. */
export function Education() {
  return (
    <Section id="education" heading={{ top: "My", bottom: "Education" }}>
      <ul className="flex flex-col gap-4">
        {education.map((item, i) => (
          <li key={`${item.school}-${i}`}>
            <LinkRow
              href={item.href}
              title={item.school}
              description={item.summary}
              meta={item.period}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
