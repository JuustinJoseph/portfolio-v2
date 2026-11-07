"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

/**
 * "Menu ≡" button that opens a full-screen nav overlay.
 * Client component because it owns open/closed state.
 */
export function MenuToggle() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="text-paper/90 hover:text-paper relative z-50 flex items-center gap-4 text-sm"
      >
        {open ? "Close" : "Menu"}
        {/* Two-line hamburger that morphs into an X */}
        <span className="relative block h-2 w-6">
          <span
            className={cn(
              "absolute left-0 h-px w-full bg-current transition-transform",
              open ? "top-1 rotate-45" : "top-0",
            )}
          />
          <span
            className={cn(
              "absolute left-0 h-px w-full bg-current transition-transform",
              open ? "top-1 -rotate-45" : "top-2",
            )}
          />
        </span>
      </button>

      {/* Overlay */}
      <nav
        className={cn(
          "bg-ink/95 fixed inset-0 z-40 flex flex-col justify-center gap-4 px-6 backdrop-blur transition-opacity duration-300 md:px-16",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        {site.nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className="hover:text-accent text-5xl tracking-tight md:text-7xl"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
