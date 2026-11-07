import { cn } from "@/lib/cn";

/**
 * Labelled form controls with shared styling.
 * <Field> wraps a label + control; `inputClasses` styles the control itself.
 */
export const inputClasses =
  "w-full rounded-lg bg-surface px-4 py-3 text-sm text-paper placeholder:text-muted outline-none ring-accent transition focus:ring-2";

export function Field({
  label,
  htmlFor,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={htmlFor} className="text-muted text-xs">
        {label}
      </label>
      {children}
    </div>
  );
}
