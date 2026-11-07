import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { PortraitPanel } from "@/components/sections/PortraitPanel";
import { Projects } from "@/components/sections/Projects";
import { Stack } from "@/components/sections/Stack";
import { Container } from "@/components/ui/Container";

/**
 * Home page: split layout.
 *  - Left (desktop): photo, pinned while you scroll.
 *  - Right: accent hero with the name, then the content sections and footer.
 * On mobile the two stack: photo banner on top, everything else below.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main className="lg:grid lg:grid-cols-[45%_1fr] lg:items-start">
        <PortraitPanel />

        <div>
          <Hero />
          <Container className="flex max-w-3xl flex-col gap-32 py-24">
            <Projects />
            <Experience />
            <Stack />
            <Contact />
          </Container>
          <Footer />
        </div>
      </main>
    </>
  );
}
