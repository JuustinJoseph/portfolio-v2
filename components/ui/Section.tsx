import { cn } from "@/lib/cn";
import { SectionHeading } from "./SectionHeading";

/**
 * Wrapper for each content section: anchor id (for the menu links),
 * two-tone heading, and consistent vertical spacing.
 */
export function Section({
  id,
  heading,
  className,
  children,
}: {
  id: string;
  heading: { top: string; bottom: string };
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("scroll-mt-12", className)}>
      <SectionHeading {...heading} />
      <div className="mt-10">{children}</div>
    </section>
  );
}
