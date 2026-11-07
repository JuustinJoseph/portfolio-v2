import Image from "next/image";
import { site } from "@/lib/site";

/**
 * Left column photo. On desktop it fills the full viewport height and stays
 * pinned (sticky) while the right column scrolls. On mobile it's a banner
 * at the top of the page.
 */
export function PortraitPanel() {
  const { name, portrait } = site;
  if (!portrait) return null;

  return (
    <div className="bg-accent-dark relative h-[70svh] lg:sticky lg:top-0 lg:h-svh">
      <Image
        src={portrait}
        alt={`${name.first} ${name.last}`}
        fill
        priority
        sizes="(min-width: 1024px) 45vw, 100vw"
        className="object-cover object-[55%_35%]"
      />
      {/* Soft shade on the inner edge so the photo meets the orange column cleanly */}
      <div className="absolute inset-y-0 right-0 hidden w-24 bg-gradient-to-l from-black/40 to-transparent lg:block" />
    </div>
  );
}
