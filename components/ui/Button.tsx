import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * Reusable button.
 *
 * Renders a Next.js <Link> when given `href`, otherwise a native <button>
 * (e.g. form submits). Same look either way.
 *
 * Variants:
 *  - "solid"     light pill (e.g. the "Contact" CTA)
 *  - "accent"    accent-colour pill
 *  - "underline" text with a bottom rule
 *  - "ghost"     plain text, subtle hover
 *
 * Pass `icon` to render an icon after the label.
 */
const variants = {
  solid: "rounded-full bg-paper px-6 py-3 text-ink hover:bg-white",
  accent: "rounded-full bg-accent px-6 py-3 text-paper hover:brightness-110",
  underline:
    "justify-between gap-12 border-b border-paper/60 pb-3 text-paper hover:border-paper",
  ghost: "text-paper/90 hover:text-paper",
} as const;

export type ButtonVariant = keyof typeof variants;

type SharedProps = {
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = SharedProps &
  (
    | { href: string; type?: never; onClick?: never }
    | {
        href?: undefined;
        type?: "button" | "submit";
        onClick?: () => void;
        "aria-expanded"?: boolean;
      }
  );

export function Button({
  href,
  type = "button",
  variant = "solid",
  icon,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-3 text-sm font-medium tracking-wide transition-all duration-200",
    variants[variant],
    className,
  );

  const content = (
    <>
      {children}
      {icon && (
        <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          {icon}
        </span>
      )}
    </>
  );

  return href ? (
    <Link href={href} className={classes}>
      {content}
    </Link>
  ) : (
    <button type={type} className={classes} {...rest}>
      {content}
    </button>
  );
}
