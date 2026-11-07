import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { MenuToggle } from "./MenuToggle";
import { site } from "@/lib/site";

/** Top bar overlaid on the hero: logo on the left, Contact CTA + menu on the right. */
export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 py-6">
      <Container className="flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-8">
          <Button
            href={`mailto:${site.email}`}
            icon={<ArrowUpRight />}
            className="hidden sm:inline-flex"
          >
            {/* Status dot */}
            <span className="bg-ink size-1.5 rounded-full" />
            Contact
          </Button>
          <MenuToggle />
        </div>
      </Container>
    </header>
  );
}
