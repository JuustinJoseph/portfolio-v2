"use client";

import { useEffect, useRef } from "react";

/**
 * A native <details> that starts open on desktop (`lg` and up) and closed on
 * smaller screens. The page is prerendered, so it renders closed and opens
 * itself after load when the screen is wide enough.
 */
export function Disclosure({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    if (ref.current && window.matchMedia("(min-width: 1024px)").matches) {
      ref.current.open = true;
    }
  }, []);

  return (
    <details ref={ref} className={className}>
      {children}
    </details>
  );
}
