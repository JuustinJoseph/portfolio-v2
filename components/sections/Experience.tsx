import { Disclosure } from "@/components/ui/Disclosure";
import { PlusIcon } from "@/components/ui/Icons";
import { Section } from "@/components/ui/Section";
import { experience } from "@/lib/content";

/**
 * Work history, newest first. Rows match the LinkRow look (company, summary,
 * role and dates, + toggle). Each row is a `Disclosure` (<details>): tapping
 * it hides or shows the bullet highlights. Open by default on desktop,
 * collapsed on phones/tablets; × when open, + when collapsed.
 */
export function Experience() {
  return (
    <Section id="experience" heading={{ top: "Work", bottom: "Experience" }}>
      <ol className="flex flex-col gap-4">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`}>
            <Disclosure className="group hover:bg-surface open:bg-surface rounded-xl p-3 transition-colors">
              <summary className="flex cursor-pointer list-none items-start gap-5 [&::-webkit-details-marker]:hidden">
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {job.company}
                  </h3>
                  <p className="text-muted mt-2 max-w-md text-base leading-relaxed sm:text-sm">
                    {job.summary}
                  </p>
                  <p className="text-muted mt-3 text-base sm:text-sm">
                    <span className="text-paper/90">{job.role}</span> ·{" "}
                    {job.period}
                  </p>
                </div>
                <PlusIcon className="text-accent mt-1.5 size-5 shrink-0 transition-transform duration-200 group-open:rotate-45" />
              </summary>

              <ul className="border-paper/10 mt-5 flex flex-col gap-3 border-t pt-5 text-base leading-relaxed sm:text-sm">
                {job.highlights.map((h) => (
                  <li key={h.label} className="flex gap-3">
                    <span className="bg-accent mt-2.5 size-1.5 shrink-0 rounded-full sm:mt-2" />
                    <p className="text-muted">
                      <span className="text-paper font-medium">{h.label}:</span>{" "}
                      {h.text}
                    </p>
                  </li>
                ))}
              </ul>
            </Disclosure>
          </li>
        ))}
      </ol>
    </Section>
  );
}
