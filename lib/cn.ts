/** Joins class names, skipping falsy values. Keeps conditional classes tidy. */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
