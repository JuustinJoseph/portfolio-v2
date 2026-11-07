"use client";

import { Children, useState } from "react";
import { Button } from "@/components/ui/Button";

/**
 * List that shows the first `initial` items, with a "See more" button below
 * to reveal the rest ("Show less" collapses them again). Children should be
 * the <li> rows.
 */
export function ShowMore({
  initial = 3,
  className,
  children,
}: {
  initial?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);
  const items = Children.toArray(children);
  const hidden = items.length - initial;

  return (
    <div>
      <ul className={className}>
        {expanded ? items : items.slice(0, initial)}
      </ul>
      {hidden > 0 && (
        <div className="mt-6 flex justify-end">
          <Button
            variant="underline"
            onClick={() => setExpanded((e) => !e)}
            aria-expanded={expanded}
          >
            {expanded ? "Show less" : `See ${hidden} more`}
          </Button>
        </div>
      )}
    </div>
  );
}
