import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({ title: "Erfolgreich angemeldet!", description: "Vielen Dank für Ihre Newsletter-Anmeldung." });
      setEmail("");
    }
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">Newsletter</span>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
            SEO-Insights direkt ins Postfach
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Erhalten Sie monatlich die neuesten SEO-Tipps, Branchentrends und exklusive Analysen.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 flex gap-3">
            <Input
              type="email"
              placeholder="Ihre E-Mail-Adresse"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="rounded-full"
            />
            <Button type="submit" className="shrink-0 rounded-full">Anmelden</Button>
          </form>
          <p className="mt-3 text-xs text-muted-foreground">Kein Spam. Jederzeit abbestellbar.</p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
