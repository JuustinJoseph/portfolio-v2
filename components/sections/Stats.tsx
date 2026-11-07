import { cn } from "@/lib/cn";
import { stats } from "@/lib/content";

/** Row of headline numbers (years, projects, ...) shown in the hero under the role. */
export function Stats({ className }: { className?: string }) {
  return (
    <dl
      className={cn(
        "border-paper/25 grid max-w-xl grid-cols-3 gap-4 border-t pt-8 sm:gap-8",
        className,
      )}
    >
      {stats.map((s) => (
        <div key={s.label} className="flex flex-col-reverse text-center">
          <dt className="text-paper/90 mt-2 text-[0.65rem] leading-snug font-medium tracking-wide uppercase sm:text-xs">
            {s.label}
          </dt>
          <dd className="text-4xl font-bold tracking-tight sm:text-6xl">
            {s.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
