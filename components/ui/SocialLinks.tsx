import Link from "next/link";
import { socialIcons } from "@/components/ui/Icons";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

/** Icon colours: `light` for dark/orange backgrounds, `accent` for light cards. */
const tones = {
  light: "text-paper/90 hover:text-paper",
  accent: "text-accent hover:text-accent-deep",
} as const;

/** Row of social profile icons (from lib/site.ts), each opening in a new tab. */
export function SocialLinks({
  tone = "light",
  className,
}: {
  tone?: keyof typeof tones;
  className?: string;
}) {
  return (
    <ul className={cn("flex items-center gap-5", className)}>
      {site.socials.map((s) => {
        const Icon = socialIcons[s.icon];
        return (
          <li key={s.label}>
            <Link
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className={cn("block transition-colors", tones[tone])}
            >
              <Icon className="size-6" />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
