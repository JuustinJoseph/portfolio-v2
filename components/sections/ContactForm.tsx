"use client";

import { Button } from "@/components/ui/Button";
import { Field, inputClasses } from "@/components/ui/Field";
import { site } from "@/lib/site";

/**
 * Contact form. There is no backend yet, so submitting opens the visitor's
 * email app with the message pre-filled. To send from the server instead,
 * swap `handleSubmit` for a Server Action or a form service.
 */
export function ContactForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `Portfolio enquiry from ${data.get("name")}`;
    const body = `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <Field label="Name" htmlFor="name">
        <input
          id="name"
          name="name"
          required
          placeholder="Your name"
          className={inputClasses}
        />
      </Field>
      <Field label="Email" htmlFor="email">
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@email.com"
          className={inputClasses}
        />
      </Field>
      <Field label="Message" htmlFor="message" className="sm:col-span-2">
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What are you working on?"
          className={inputClasses}
        />
      </Field>
      <Button
        type="submit"
        variant="accent"
        className="rounded-lg sm:col-span-2"
      >
        Send message
      </Button>
    </form>
  );
}
