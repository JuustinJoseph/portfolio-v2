import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { NavLinks } from "@/components/layout/NavLinks";

/** Top bar overlaid on the hero: logo on the left, section links + Contact CTA on the right. */
export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 py-6">
      <Container className="flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-6 sm:gap-8">
          <NavLinks />
          {/* Wrapped so `hidden` isn't overridden by the Button's own inline-flex */}
          <div className="hidden sm:block">
            <Button href="#contact" icon={<ArrowUpRight />}>
              Contact
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
