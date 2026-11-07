import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

/**
 * Simple bottom line. No copyright year on purpose: `new Date()` makes the
 * page dynamic under `cacheComponents`, which isn't worth it for a footer.
 */
export function Footer() {
  return (
    <footer className="text-muted py-10 text-center text-sm">
      <Container>
        © {site.name.first} {site.name.last} · {site.location}
      </Container>
    </footer>
  );
}
