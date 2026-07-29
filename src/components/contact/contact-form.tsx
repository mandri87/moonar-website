"use client";

import { useId, useState } from "react";
import { Button } from "@/components/ui/button";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const formId = useId();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="card-elevated rounded-md border border-border bg-surface p-8 text-center">
        <p className="text-lg font-semibold text-text-primary">Message sent</p>
        <p className="mt-2 text-sm leading-relaxed text-text-secondary">
          Thank you for reaching out. Our engineering team will get back to you
          shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            htmlFor={`${formId}-name`}
            className="font-mono text-xs uppercase tracking-[0.1em] text-text-muted"
          >
            Full Name
          </label>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            required
            autoComplete="name"
            className="rounded-sm border border-border bg-background px-4 py-3 text-sm text-text-primary outline-none transition-colors duration-150 focus:border-accent-secondary"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor={`${formId}-email`}
            className="font-mono text-xs uppercase tracking-[0.1em] text-text-muted"
          >
            Work Email
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            className="rounded-sm border border-border bg-background px-4 py-3 text-sm text-text-primary outline-none transition-colors duration-150 focus:border-accent-secondary"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor={`${formId}-company`}
          className="font-mono text-xs uppercase tracking-[0.1em] text-text-muted"
        >
          Company
        </label>
        <input
          id={`${formId}-company`}
          name="company"
          type="text"
          required
          autoComplete="organization"
          className="rounded-sm border border-border bg-background px-4 py-3 text-sm text-text-primary outline-none transition-colors duration-150 focus:border-accent-secondary"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor={`${formId}-message`}
          className="font-mono text-xs uppercase tracking-[0.1em] text-text-muted"
        >
          Message
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          required
          rows={5}
          placeholder="Tell us about your tyre engineering workflow and what you'd like to discuss."
          className="resize-none rounded-sm border border-border bg-background px-4 py-3 text-sm text-text-primary outline-none transition-colors duration-150 focus:border-accent-secondary"
        />
      </div>

      {status === "error" ? (
        <p className="text-sm text-red-400">{errorMessage}</p>
      ) : null}

      <Button type="submit" size="lg" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Request a Demo"}
      </Button>
    </form>
  );
}
