import { LinkRow } from "@/components/ui/LinkRow";
import { Section } from "@/components/ui/Section";
import { experience } from "@/lib/content";

/** Work history, newest first. */
export function Experience() {
  return (
    <Section id="experience" heading={{ top: "Work", bottom: "Experience" }}>
      <ul className="flex flex-col gap-4">
        {experience.map((job, i) => (
          <li key={`${job.company}-${i}`}>
            <LinkRow
              href={job.href}
              title={job.company}
              description={job.summary}
              meta={job.period}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
