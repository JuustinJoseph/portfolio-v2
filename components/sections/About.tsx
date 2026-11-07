import { Section } from "@/components/ui/Section";
import { about } from "@/lib/content";

/** Short bio, right below the hero. Paragraphs come from `about` in lib/content.ts. */
export function About() {
  return (
    <Section id="about" heading={{ top: "About", bottom: "Me" }}>
      <div className="text-muted flex max-w-2xl flex-col gap-5 text-lg leading-relaxed">
        {about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
