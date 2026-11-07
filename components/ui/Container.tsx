import { cn } from "@/lib/cn";

/** Consistent horizontal page padding. Wrap any full-width section's content in this. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("w-full px-6 md:px-12 lg:px-16", className)}>
      {children}
    </div>
  );
}
