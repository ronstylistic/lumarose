import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ThemeTest() {
  return (
    <main className="min-h-screen bg-bone p-10 space-y-10">
      <h1 className="text-4xl font-bold text-rose-dark">
        Lumarose Theme Preview 🌸
      </h1>

      <div className="flex gap-4">
        <Button>Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="outline">Outline Button</Button>

        <span className="text-[#94526E]">Health & Wellness</span>
      </div>


<div className="bg-muted p-10 rounded-xl">
  Accent background (#F7F7F7)
</div>

      <div className="flex gap-4">
  <Button>Primary</Button>
  <Button variant="secondary">Secondary</Button>
</div>

      <Card className="max-w-md">
        <CardHeader>
          <CardTitle>Lumarose Card</CardTitle>
        </CardHeader>
        <CardContent>
          All colors here are using the custom rose palette.
        </CardContent>
      </Card>
    </main>
  );
}
