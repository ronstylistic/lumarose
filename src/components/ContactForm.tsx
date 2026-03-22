"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useState, useTransition } from "react";
import { sendContactEmail } from "./lib/SendContactEmail";

const fieldClass =
  "h-14 rounded-xl border-slate-200/80 bg-white/90 primary-field transition-[border-color,box-shadow] duration-200 focus-visible:border-primary/40 focus-visible:ring-primary/20";

export default function ContactForm() {
  const [pending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(formData: FormData) {
    setError(null);
    setSuccess(false);

    startTransition(async () => {
      const res = await sendContactEmail(formData);

      if (res?.success) {
        setSuccess(true);
      } else {
        setError(res?.error || "Something went wrong");
      }
    });
  }

  return (
    <form action={handleSubmit} className="space-y-6" noValidate>
      {(error || success) && (
        <div className="space-y-3">
          {error && (
            <p
              className="rounded-lg border border-red-200/80 bg-red-50/90 px-4 py-3 text-sm text-red-900"
              role="alert"
            >
              {error}
            </p>
          )}

          {success && (
            <p
              className="rounded-lg border border-emerald-200/80 bg-emerald-50/90 px-4 py-3 text-sm text-emerald-900"
              role="status"
            >
              Message sent successfully. We&apos;ll be in touch.
            </p>
          )}
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="contact-name" className="text-sm font-medium text-foreground">
          Name
        </Label>
        <Input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          placeholder="Your name"
          className={cn(fieldClass)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-email" className="text-sm font-medium text-foreground">
          Email
        </Label>
        <Input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="Email for our reply"
          className={cn(fieldClass)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-message" className="text-sm font-medium text-foreground">
          Message
        </Label>
        <Textarea
          id="contact-message"
          name="message"
          required
          placeholder="How can we help?"
          rows={8}
          className={cn(
            "min-h-[10rem] resize-y rounded-xl border-slate-200/80 bg-white/90 primary-field transition-[border-color,box-shadow] duration-200 focus-visible:border-primary/40 focus-visible:ring-primary/20"
          )}
        />
      </div>

      <Button
        type="submit"
        disabled={pending}
        className={cn(
          "min-h-12 w-full cursor-pointer rounded-full px-10 py-6 text-base font-semibold shadow-md transition-[box-shadow,opacity] duration-200 motion-reduce:transition-none",
          "hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70",
          "md:w-auto md:min-w-[12rem]"
        )}
      >
        {pending ? "Sending…" : "Send inquiry"}
      </Button>
    </form>
  );
}
