import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Mail, Phone, CheckCircle2 } from "lucide-react";
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
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          subject: "Neue Kontaktanfrage über TrafficWerk",
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setErrorMsg("Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Netzwerkfehler. Bitte überprüfen Sie Ihre Internetverbindung.");
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-medium uppercase tracking-widest text-primary">Kontakt</span>
              <h1 className="mt-4 font-display text-4xl font-bold md:text-5xl">Lassen Sie uns sprechen</h1>
              <p className="mt-4 text-muted-foreground">Kontaktieren Sie uns für eine kostenlose Erstberatung.</p>
            </div>

            <div className="mt-16 grid gap-12 lg:grid-cols-2">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center rounded-2xl border border-blue-200 bg-blue-50 p-12 text-center">
                  <CheckCircle2 className="h-12 w-12 text-blue-600" />
                  <p className="mt-4 text-lg font-semibold text-blue-600">
                    Vielen Dank! Ihre Nachricht wurde erfolgreich versendet. Wir setzen uns so schnell wie möglich mit Ihnen in Verbindung.
                  </p>
                  <Button
                    className="mt-6 rounded-full"
                    variant="outline"
                    onClick={() => setStatus("idle")}
                  >
                    Weitere Nachricht senden
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input placeholder="Ihr Name *" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                    <Input type="email" placeholder="E-Mail-Adresse *" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                  </div>
                  <Input type="tel" placeholder="Telefonnummer" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                  <Select value={formData.service} onValueChange={(v) => setFormData({ ...formData, service: v })}>
                    <SelectTrigger><SelectValue placeholder="Gewünschte Leistung" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technische-seo">Technische SEO</SelectItem>
                      <SelectItem value="on-page">On-Page Optimierung</SelectItem>
                      <SelectItem value="off-page">Off-Page / Linkbuilding</SelectItem>
                      <SelectItem value="content">Content Marketing</SelectItem>
                      <SelectItem value="lokal">Lokale SEO</SelectItem>
                      <SelectItem value="international">Internationale SEO</SelectItem>
                      <SelectItem value="sea">Google Ads (SEA)</SelectItem>
                      <SelectItem value="leads">Lead-Generierung</SelectItem>
                      <SelectItem value="ecommerce">E-Commerce SEO</SelectItem>
                      <SelectItem value="geo">AI-Search (GEO)</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea placeholder="Ihre Nachricht *" required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />

                  {status === "error" && errorMsg && (
                    <p className="text-sm font-medium text-red-600">{errorMsg}</p>
                  )}

                  <Button type="submit" size="lg" className="w-full rounded-full" disabled={status === "sending"}>
                    {status === "sending" ? "Wird gesendet…" : "Nachricht senden"}
                  </Button>
                </form>
              )}

              <div className="space-y-8">
                <div className="rounded-xl border border-border/50 bg-card p-8">
                  <h3 className="font-display text-lg font-semibold">TrafficWerk</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Inhaber Thomas Kinne</p>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-start gap-3 text-sm text-muted-foreground">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>Taradeauer Str. 11, 85244 Röhrmoos</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Mail className="h-4 w-4 shrink-0 text-primary" />
                      <span>info@trafficwerk.de</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4 shrink-0 text-primary" />
                      <a href="tel:+4915782208713" className="transition-colors hover:text-primary">+49 1578 2208713</a>
                    </div>
                  </div>
                </div>
                <div className="h-64 overflow-hidden rounded-xl border border-border/50 bg-secondary/50">
                  <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                    <MapPin className="mr-2 h-5 w-5" /> Kartenansicht
                  </div>
                </div>
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
