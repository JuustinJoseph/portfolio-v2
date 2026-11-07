import Link from "next/link";
import { ArrowUpRight } from "./Icons";
import { Tag } from "./Tag";

/**
 * A clickable list row with a title, optional description, optional meta line,
 * optional tags, an optional leading visual (thumbnail), and a ↗ arrow when
 * it links somewhere.
 * Used by the Projects list.
 */
export function LinkRow({
  href,
  title,
  description,
  meta,
  badge,
  tags,
  leading,
}: {
  href?: string;
  title: string;
  description?: string;
  meta?: string;
  /** Small status pill beside the title, e.g. "Work in progress". */
  badge?: string;
  tags?: string[];
  leading?: React.ReactNode;
}) {
  const body = (
    <>
      {leading}
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
          {badge && (
            <span className="border-accent/40 text-accent inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium">
              <span className="bg-accent size-1.5 animate-pulse rounded-full motion-reduce:animate-none" />
              {badge}
            </span>
          )}
        </div>
        {description && (
          <p className="text-muted mt-2 max-w-md text-base leading-relaxed sm:text-sm">
            {description}
          </p>
        )}
        {meta && <p className="text-muted mt-3 text-base sm:text-sm">{meta}</p>}
        {tags && tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </ul>
        )}
      </div>
      {href && (
        <ArrowUpRight className="text-accent size-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  const classes =
    "group flex items-start gap-5 rounded-xl p-3 transition-colors";

  return href ? (
    <Link
      href={href}
      className={`${classes} hover:bg-surface`}
      // External links (live sites, GitHub) open in a new tab.
      {...(href.startsWith("http") && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
    >
      {body}
    </Link>
  ) : (
    <div className={classes}>{body}</div>
  );
}
