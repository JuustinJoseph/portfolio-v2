import { Section } from "@/components/ui/Section";
import { ContactForm } from "./ContactForm";

/** "Let's work together" section with the contact form. */
export function Contact() {
  return (
    <Section id="contact" heading={{ top: "Let's work", bottom: "Together" }}>
      <ContactForm />
    </Section>
  );
}
