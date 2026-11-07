import Image from "next/image";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { tagline } from "@/lib/content";
import { site } from "@/lib/site";

/**
 * Left column: uncropped photo with the tagline beneath it.
 *  - Phones/tablets: one centred profile card (photo on top, tagline and
 *    socials below), as wide as the photo, sitting above the hero.
 *  - Desktop: the card wrapper drops away (`lg:contents`); photo and tagline
 *    card are pinned (sticky) and fit the viewport height while the right
 *    column scrolls.
 */
export function PortraitPanel() {
  const { name, portrait } = site;
  if (!portrait) return null;

  return (
    <div className="animate-slide-right flex flex-col px-3 pt-24 sm:px-4 sm:pt-28 lg:sticky lg:top-0 lg:row-span-2 lg:h-svh lg:gap-4 lg:self-start lg:px-28 lg:py-24">
      {/* Profile card on phones/tablets. `w-min` makes it exactly as wide as
          the photo, so the text wraps to the photo's width. */}
      <div className="bg-surface mx-auto flex w-min flex-col gap-4 rounded-2xl p-3 shadow-xl shadow-black/30 lg:contents">
        {/* Photo at its natural aspect ratio (never cropped). On desktop it
            shrinks to fit whatever height is left above the card. */}
        <div className="flex justify-center lg:min-h-0 lg:flex-1">
          <Image
            src={portrait}
            alt={`${name.first} ${name.last}`}
            width={3024}
            height={4032}
            priority
            sizes="(min-width: 1024px) 45vw, 60vw"
            className="bg-accent-dark h-[38svh] w-auto max-w-none rounded-xl sm:h-[48svh] lg:h-full lg:max-w-full"
          />
        </div>

        {/* Tagline + socials: plain and centred inside the card on phones;
            its own card with an orange left border on desktop. */}
        <div className="lg:bg-surface lg:border-accent flex flex-col items-center gap-3 px-2 pb-2 text-center lg:shrink-0 lg:flex-row lg:justify-between lg:gap-5 lg:rounded-xl lg:border-l-4 lg:px-6 lg:py-5 lg:text-left">
          <p className="text-paper text-sm leading-snug font-medium sm:text-base lg:text-lg">
            {tagline}
          </p>
          <SocialLinks tone="accent" className="shrink-0" />
        </div>
      </div>
    </div>
  );
}
