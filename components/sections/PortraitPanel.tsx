import Image from "next/image";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { tagline } from "@/lib/content";
import { site } from "@/lib/site";

/**
 * Left column: uncropped photo with the tagline card beneath it. On desktop
 * the pair is pinned (sticky) and fits the viewport height, while the right column
 * scrolls. On mobile they stack at the top of the page.
 */
export function PortraitPanel() {
  const { name, portrait } = site;
  if (!portrait) return null;

  return (
    <div className="animate-slide-right flex flex-col gap-3 p-3 sm:gap-4 sm:p-4 lg:sticky lg:top-0 lg:h-svh">
      {/* Photo at its natural aspect ratio (never cropped). On desktop it shrinks
          to fit whatever height is left above the card. */}
      <div className="flex justify-center lg:min-h-0 lg:flex-1">
        <Image
          src={portrait}
          alt={`${name.first} ${name.last}`}
          width={3024}
          height={4032}
          priority
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="bg-accent-dark h-auto w-full rounded-xl lg:h-full lg:w-auto lg:max-w-full"
        />
      </div>

      {/* Tagline card: short line about you and social links (below the text on phones) */}
      <div className="bg-surface border-accent flex shrink-0 flex-col gap-4 rounded-xl border-l-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-5 sm:px-6 sm:py-5">
        <p className="text-paper text-base leading-snug font-medium sm:text-lg">
          {tagline}
        </p>
        <SocialLinks tone="accent" className="shrink-0" />
      </div>
    </div>
  );
}
