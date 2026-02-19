import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const WEB3FORMS_KEY = "972a2eeb-c625-4b2a-9991-b60bf2d7912d";

const Kontakt = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMsg("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      setStatus("error");
      return;
    }

    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email.trim(),
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          subject: "Neue Kontaktanfrage über TrafficWerk",
          from_name: formData.name || "TrafficWerk Kontaktformular",
          replyto: formData.email.trim(),
          botcheck: "",
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success !== false) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setErrorMsg(data.message || "Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Die Verbindung konnte nicht hergestellt werden. Bitte prüfen Sie Ihre Internetverbindung und versuchen es erneut.");
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">

        {/* Hero */}
        <section className="border-b border-border bg-gradient-to-br from-primary/5 via-background to-background py-16 md:py-24">
          <div className="container mx-auto px-6 text-center">
            <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              Wir freuen uns auf Sie
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Sprechen Sie mit uns
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground md:text-lg">
              Haben Sie eine Frage, ein Anliegen oder möchten Sie einfach mehr über TrafficWerk erfahren? Schreiben Sie uns – wir antworten innerhalb eines Werktages.
            </p>
          </div>
        </section>

        {/* Formular + Kontakt-Info */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">

              {/* Kontakt-Info */}
              <div>
                <h2 className="text-xl font-bold text-foreground">Direkt erreichbar</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Kein Callcenter, kein Warteschleife – Sie erreichen uns direkt.
                </p>
                <ul className="mt-6 space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">E-Mail</p>
                      <a href="mailto:info@trafficwerk.de" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                        info@trafficwerk.de
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Telefon</p>
                      <a href="tel:+4915782208713" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                        +49 1578 2208713
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Adresse</p>
                      <p className="text-sm text-muted-foreground">
                        Taradeauer Str. 11<br />85244 Röhrmoos
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-5">
                  <p className="text-sm font-semibold text-primary">Möchten Sie eine kostenlose SEO-Analyse?</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Nutzen Sie unser spezielles Analyse-Formular – mit Report-Vorschau und allen Details.
                  </p>
                  <a
                    href="/gratis-analyse"
                    className="mt-3 inline-block rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90"
                  >
                    Zur Gratis-Analyse →
                  </a>
                </div>
              </div>

              {/* Formular */}
              <div>
                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center rounded-2xl border border-primary/20 bg-primary/5 p-12 text-center">
                    <CheckCircle2 className="h-12 w-12 text-primary" />
                    <p className="mt-4 text-lg font-semibold text-foreground">
                      Vielen Dank! Ihre Nachricht ist angekommen.
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Wir melden uns innerhalb eines Werktages bei Ihnen.
                    </p>
                    <Button className="mt-6 rounded-full" variant="outline" onClick={() => setStatus("idle")}>
                      Weitere Nachricht senden
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="nc-card space-y-5 rounded-2xl border bg-background p-8 shadow-sm">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">Ihr Name *</label>
                      <Input
                        placeholder="z. B. Maria Müller"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">E-Mail-Adresse *</label>
                      <Input
                        type="email"
                        placeholder="ihre@email.de"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">Telefonnummer (optional)</label>
                      <Input
                        type="tel"
                        placeholder="+49 ..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">Ihr Anliegen (optional)</label>
                      <Select value={formData.service} onValueChange={(v) => setFormData({ ...formData, service: v })}>
                        <SelectTrigger><SelectValue placeholder="Worum geht es?" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="allgemein">Allgemeine Anfrage</SelectItem>
                          <SelectItem value="beratung">SEO-Beratungsgespräch</SelectItem>
                          <SelectItem value="angebot">Angebot anfordern</SelectItem>
                          <SelectItem value="zusammenarbeit">Zusammenarbeit / Partnerschaft</SelectItem>
                          <SelectItem value="presse">Presse & Medien</SelectItem>
                          <SelectItem value="sonstiges">Sonstiges</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">Ihre Nachricht *</label>
                      <Textarea
                        placeholder="Schreiben Sie uns, wie wir Ihnen helfen können…"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    {status === "error" && errorMsg && (
                      <p className="text-sm font-medium text-destructive">{errorMsg}</p>
                    )}

                    <Button type="submit" size="lg" className="w-full rounded-full" disabled={status === "sending"}>
                      {status === "sending" ? "Wird gesendet…" : "Nachricht senden →"}
                    </Button>
                    <p className="text-center text-xs text-muted-foreground">
                      Ihre Daten sind bei uns sicher. Wir antworten innerhalb eines Werktages.
                    </p>
                  </form>
                )}
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Kontakt;
