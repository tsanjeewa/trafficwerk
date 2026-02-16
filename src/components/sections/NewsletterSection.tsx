import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2 } from "lucide-react";

const FORMSPREE_URL = "https://formspree.io/f/YOUR_FORMSPREE_ID";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      setStatus("error");
      return;
    }

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, _subject: "Neue Newsletter-Anmeldung" }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setErrorMsg("Fehler beim Senden. Bitte versuchen Sie es erneut.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Netzwerkfehler. Bitte überprüfen Sie Ihre Verbindung.");
      setStatus("error");
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

          {status === "success" ? (
            <div className="mt-8 flex items-center justify-center gap-2 text-blue-600">
              <CheckCircle2 className="h-5 w-5" />
              <span className="text-sm font-semibold">Vielen Dank! Sie wurden erfolgreich angemeldet.</span>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="mt-8 flex gap-3">
                <Input
                  type="email"
                  placeholder="Ihre E-Mail-Adresse"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="rounded-full"
                />
                <Button type="submit" className="shrink-0 rounded-full" disabled={status === "sending"}>
                  {status === "sending" ? "…" : "Anmelden"}
                </Button>
              </form>
              {status === "error" && errorMsg && (
                <p className="mt-2 text-sm font-medium text-red-600">{errorMsg}</p>
              )}
            </>
          )}

          <p className="mt-3 text-xs text-muted-foreground">Kein Spam. Jederzeit abbestellbar.</p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
