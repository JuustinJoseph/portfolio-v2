import {
  BriefcaseIcon,
  CapIcon,
  FolderIcon,
  LayersIcon,
  MailIcon,
} from "@/components/ui/Icons";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

/** Icon per section, keyed by nav href (shown instead of the label on phones). */
const icons: Record<string, React.ReactNode> = {
  "#projects": <FolderIcon />,
  "#experience": <BriefcaseIcon />,
  "#stack": <LayersIcon />,
  "#education": <CapIcon />,
  "#contact": <MailIcon />,
};

/**
 * Section links in the header. Phones get icons only (label kept for screen
 * readers) on a dark surface pill; from `sm` up they show as text on a
 * dark translucent pill (the header sits over the orange hero there).
 * "Contact" only shows on phones, since the Contact button covers it from
 * `sm` up.
 */
export function NavLinks() {
  return (
    <nav aria-label="Sections">
      <ul className="bg-surface sm:bg-canvas/35 flex items-center gap-5 rounded-full px-5 py-2.5 text-sm font-medium backdrop-blur-sm sm:gap-6 sm:px-6">
        {site.nav.map((item) => (
          <li
            key={item.href}
            className={cn(item.href === "#contact" && "sm:hidden")}
          >
            <a
              href={item.href}
              title={item.label}
              className="text-paper hover:text-accent flex transition-colors"
            >
              <span className="sm:hidden">{icons[item.href]}</span>
              <span className="sr-only sm:not-sr-only">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
