import Image from "next/image";
import { LinkRow } from "@/components/ui/LinkRow";
import { Section } from "@/components/ui/Section";
import { projects } from "@/lib/content";

/** "Recent projects" list with thumbnails. */
export function Projects() {
  return (
    <Section id="projects" heading={{ top: "Recent", bottom: "Projects" }}>
      <ul className="flex flex-col gap-2">
        {projects.map((p) => (
          <li key={p.name}>
            <LinkRow
              href={p.href}
              title={p.name}
              description={p.description}
              leading={<Thumbnail name={p.name} image={p.image} />}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}

/** Project screenshot, or an accent tile with the initial as a fallback. */
function Thumbnail({ name, image }: { name: string; image?: string }) {
  return (
    <div className="bg-accent relative grid size-20 shrink-0 place-items-center overflow-hidden rounded-lg text-2xl font-bold">
      {image ? (
        <Image src={image} alt="" fill sizes="80px" className="object-cover" />
      ) : (
        name[0]
      )}
    </div>
  );
}
