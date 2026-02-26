import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
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
        }),
      });

      const data = await res.json();

      if (res.ok && data.success !== false) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        // Zeigt die spezifische Fehlermeldung der API an (z.B. Domain nicht verifiziert)
        setErrorMsg(data.message || "Ein Fehler ist aufgetreten. Bitte prüfen Sie Ihre Angaben.");
        setStatus("error");
      }
    } catch (err) {
      // Nur bei echtem Verbindungsabbruch anzeigen
      setErrorMsg("Netzwerkfehler: Die Verbindung zum Server konnte nicht hergestellt werden.");
      setStatus("error");
    }
  };

  // Gemeinsame Styles für hohen Kontrast (White-on-White Fix)
  const inputStyles = "bg-[#F1F5F9] border-2 border-[#94A3B8] text-slate-900 placeholder:text-slate-500 focus:border-[#3B82F6] focus:ring-3 focus:ring-[#3B82F6]/20 transition-all";

  return (
    <div className="min-h-screen bg-background text-slate-900">
      <Navbar />
      <main className="pt-16">
        <section className="border-b border-slate-200 bg-slate-50/50 py-16 md:py-24">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-3xl font-bold md:text-5xl">Sprechen Sie mit uns</h1>
            <p className="mx-auto mt-4 max-w-xl text-slate-600 md:text-lg">
              Wir antworten innerhalb eines Werktages.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-xl font-bold">Direkt erreichbar</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Kein Callcenter, keine Warteschleife – Sie erreichen uns direkt.
                </p>
                <ul className="mt-6 space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">E-Mail</p>
                      <a href="mailto:info@trafficwerk.de" className="text-sm text-slate-600 hover:text-primary">info@trafficwerk.de</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Telefon</p>
                      <a href="tel:+4915782208713" className="text-sm text-slate-600 hover:text-primary">+49 1578 2208713</a>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-primary/20 bg-primary/5 p-12 text-center">
                    <CheckCircle2 className="h-12 w-12 text-primary" />
                    <p className="mt-4 text-lg font-semibold">Nachricht erfolgreich gesendet!</p>
                    <Button className="mt-6 rounded-full" variant="outline" onClick={() => setStatus("idle")}>Weitere Nachricht</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-slate-200 bg-white p-8 shadow-md">
                    <div>
                      <label className="mb-1.5 block text-sm font-bold">Name *</label>
                      <Input
                        required
                        className={inputStyles}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-bold">E-Mail *</label>
                      <Input
                        type="email"
                        required
                        className={inputStyles}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-bold">Nachricht *</label>
                      <Textarea
                        required
                        rows={4}
                        className={inputStyles}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    {status === "error" && (
                      <div className="rounded-lg bg-red-50 p-3 border border-red-200">
                        <p className="text-xs font-bold text-red-600">{errorMsg}</p>
                      </div>
                    )}

                    <Button type="submit" size="lg" className="w-full rounded-full bg-primary font-bold shadow-lg" disabled={status === "sending"}>
                      {status === "sending" ? "Wird gesendet..." : "Nachricht senden →"}
                    </Button>
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
