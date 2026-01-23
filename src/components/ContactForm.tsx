"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useTransition } from "react";
import { sendContactEmail } from "./lib/SendContactEmail";

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
    <form action={handleSubmit} className="space-y-6">
      <Input
        name="name"
        placeholder="Your Name"
        className="h-14 primary-field"
      />

      <Input
        name="email"
        type="email"
        placeholder="Your Email (for response)"
        className="h-14 primary-field"
      />

      <Textarea
        name="message"
        placeholder="Your Message"
        rows={8}
       className="resize-y min-h-35 primary-field"
      />

      <Button type="submit" className="bg-primary text-white px-10 py-6 shadow-md hover:bg-primary/90 w-full md:w-auto" disabled={pending}>
         {pending ? "Sending..." : "Send Message"}
      </Button>

      {success && (
        <p className="text-green-600 text-sm">
          Message sent successfully. We’ll be in touch.
        </p>
      )}

      {error && (
        <p className="text-red-600 text-sm">
          {error}
        </p>
      )}

    </form>
  );
}