import Link from "next/link";
import { ArrowUpRight } from "./Icons";

/**
 * A clickable list row with a title, optional description, optional meta line,
 * an optional leading visual (thumbnail), and a ↗ arrow in the corner.
 * Used by the Projects and Experience lists.
 */
export function LinkRow({
  href,
  title,
  description,
  meta,
  leading,
}: {
  href?: string;
  title: string;
  description?: string;
  meta?: string;
  leading?: React.ReactNode;
}) {
  const body = (
    <>
      {leading}
      <div className="min-w-0 flex-1">
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        {description && (
          <p className="text-muted mt-2 max-w-md text-sm leading-relaxed">
            {description}
          </p>
        )}
        {meta && <p className="text-muted mt-3 text-sm">{meta}</p>}
      </div>
      {href && (
        <ArrowUpRight className="text-accent size-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  const classes =
    "group flex items-center gap-5 rounded-xl p-3 transition-colors";

  return href ? (
    <Link href={href} className={`${classes} hover:bg-surface`}>
      {body}
    </Link>
  ) : (
    <div className={classes}>{body}</div>
  );
}
