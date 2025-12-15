import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  return (
    <form className="space-y-6">
      <Input
        placeholder="Your Name"
        className="h-14 primary-field"
      />

      <Input
        type="email"
        placeholder="Your Email (for response)"
        className="h-14 primary-field"
      />

      <Textarea
        placeholder="Your Message"
        rows={8}
       className="resize-y min-h-35 primary-field"
      />

      <Button className="bg-primary text-white px-10 py-6 shadow-md hover:bg-primary/90">
        SEND MESSAGE
      </Button>
    </form>
  );
}