"use client";

import { useActionState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Field, inputClasses } from "@/components/ui/Field";
import { cn } from "@/lib/cn";
import { sendContactMessage, type ContactState } from "@/app/actions/contact";

const initialState: ContactState = { status: "idle" };

/** Contact form. Submits to a Server Action that emails the message via Resend. */
export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    initialState,
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state]);

  return (
    <form
      ref={formRef}
      action={formAction}
      className="grid gap-5 sm:grid-cols-2"
    >
      {/* Honeypot for bots; hidden from people and screen readers. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
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
        disabled={pending}
        className="rounded-lg sm:col-span-2"
      >
        {pending ? "Sending…" : "Send message"}
      </Button>
      {state.message && (
        <p
          role="status"
          className={cn(
            "text-sm sm:col-span-2",
            state.status === "success" ? "text-paper" : "text-accent",
          )}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
