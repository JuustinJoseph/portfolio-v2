import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
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
 * On mobile the photo sits on the dark page and the hero's gradient fades
 * in beneath it, so they read as one block. The wrapper below uses
 * `display: contents` on desktop so its children drop straight into the grid.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main className="lg:grid lg:grid-cols-[45%_1fr]">
        <div className="lg:contents">
          <PortraitPanel />
          <Hero />
        </div>

        <div className="lg:col-start-2">
          <Container className="flex max-w-3xl flex-col gap-20 py-16 lg:gap-32 lg:py-24">
            <About />
            <Experience />
            <Projects />
            <Stack />
            <Education />
            <Contact />
          </Container>
          <Footer />
        </div>
      </main>
    </>
  );
}
