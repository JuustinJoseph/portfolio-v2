import Link from "next/link";
import { site } from "@/lib/site";

/** Accent-colour monogram badge + uppercase wordmark. Links home. */
export function Logo() {
  const { first, last } = site.name;
  return (
    <Link href="/" className="flex items-center gap-5">
      <span className="bg-accent grid size-14 place-items-center rounded-full text-sm font-semibold shadow-lg shadow-black/20">
        {first[0]}
      </span>
      <span className="hidden text-2xl tracking-tight uppercase sm:inline">
        {first}
        {last}
      </span>
    </Link>
  );
}
