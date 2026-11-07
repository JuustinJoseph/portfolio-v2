import { cn } from "@/lib/cn";

/** Small orange pill for tech tags and honours. */
export function Tag({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <li
      className={cn(
        "bg-accent/10 text-accent rounded-full px-3 py-1 text-sm font-medium",
        className,
      )}
    >
      {children}
    </li>
  );
}
