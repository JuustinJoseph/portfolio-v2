import {
  BriefcaseIcon,
  DumbbellIcon,
  MusicIcon,
  PlanetIcon,
  PuzzleIcon,
  SparklesIcon,
} from "@/components/ui/Icons";
import { LinkRow } from "@/components/ui/LinkRow";
import { Section } from "@/components/ui/Section";
import { ShowMore } from "@/components/ui/ShowMore";
import { projects, type Project } from "@/lib/content";

/** Icon component for each `icon` key in lib/content.ts. */
const icons = {
  music: MusicIcon,
  briefcase: BriefcaseIcon,
  puzzle: PuzzleIcon,
  dumbbell: DumbbellIcon,
  planet: PlanetIcon,
  sparkles: SparklesIcon,
} satisfies Record<Project["icon"], unknown>;

/**
 * "Recent projects" list. Each row has an orange icon tile on the left.
 * Shows the first three; "See more" reveals the rest.
 */
export function Projects() {
  return (
    <Section id="projects" heading={{ top: "Recent", bottom: "Projects" }}>
      <ShowMore initial={3} className="flex flex-col gap-2">
        {projects.map((p) => {
          const Icon = icons[p.icon];
          return (
            <li key={p.name}>
              <LinkRow
                href={p.href}
                title={p.name}
                badge={p.status}
                description={p.description}
                tags={p.tags}
                leading={
                  <div className="bg-accent text-paper grid size-14 shrink-0 place-items-center rounded-xl sm:size-16">
                    <Icon className="size-7" />
                  </div>
                }
              />
            </li>
          );
        })}
      </ShowMore>
    </Section>
  );
}
