import { Section } from "@/components/ui/Section";
import { TechLogo } from "@/components/ui/TechLogo";
import { stack } from "@/lib/content";

/** Tools & Stack, one sub-section per category, each tool with its logo. */
export function Stack() {
  return (
    <Section id="stack" heading={{ top: "Tools &", bottom: "Stack" }}>
      <div className="flex flex-col gap-10">
        {stack.map((group) => (
          <div key={group.category}>
            <h3 className="text-muted mb-5 px-3 text-sm font-medium tracking-widest uppercase">
              {group.category}
            </h3>
            <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {group.items.map((name) => (
                <li key={name} className="flex items-center gap-4 px-3">
                  <TechLogo name={name} />
                  <p className="text-lg font-semibold">{name}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
