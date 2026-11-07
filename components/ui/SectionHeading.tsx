import { cn } from "@/lib/cn";

/**
 * Two-tone section title: a bright first line and a faded second line,
 * e.g. "RECENT" / "PROJECTS". Used at the top of every content section.
 */
export function SectionHeading({
  top,
  bottom,
  as: Tag = "h2",
  className,
}: {
  top: string;
  bottom: string;
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <Tag
      className={cn(
        "text-5xl leading-[0.9] font-bold tracking-tight uppercase md:text-7xl",
        className,
      )}
    >
      <span className="block">{top}</span>
      <span className="text-faint block">{bottom}</span>
    </Tag>
  );
}
