import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, CheckCircle2, FileText, BarChart2, Search, AlertTriangle, Zap, Users } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const WEB3FORMS_KEY = "972a2eeb-c625-4b2a-9991-b60bf2d7912d";

const reportItems = [
  {
    icon: Search,
    title: "Keyword-Analyse",
    desc: "Wir zeigen, für welche Begriffe Sie bereits ranken und wo Ihr größtes Wachstumspotenzial liegt.",
    example: "z. B. Position 14 für 'SEO-Agentur München' → Potenzial: Top 3",
  },
  {
    icon: AlertTriangle,
    title: "Technische Fehler",
    desc: "Crawling-Fehler, fehlende Meta-Tags, defekte Links und langsame Ladezeiten werden aufgedeckt.",
    example: "z. B. 23 Seiten ohne Meta Description gefunden",
  },
  {
    icon: Zap,
    title: "PageSpeed & Core Web Vitals",
    desc: "Ihr Lighthouse-Score und die Google Core Web Vitals werden analysiert und bewertet.",
    example: "z. B. LCP: 4.2s (Ziel: unter 2.5s)",
  },
  {
    icon: BarChart2,
    title: "Wettbewerbs-Vergleich",
    desc: "Wir vergleichen Ihre Domain mit Ihren stärksten Mitbewerbern in der organischen Suche.",
    example: "z. B. Konkurrent A hat 3× mehr Backlinks",
  },
  {
    icon: Users,
    title: "Backlink-Profil",
    desc: "Qualität und Quantität Ihrer eingehenden Links werden bewertet – toxische Links inklusive.",
    example: "z. B. Domain Authority 18 → Verbesserungspotenzial vorhanden",
  },
  {
    icon: FileText,
    title: "Content-Lücken",
    desc: "Fehlende Themenbereiche und ungenutzte Content-Potenziale werden sichtbar gemacht.",
    example: "z. B. Kein Content für 'Lokale SEO Tipps' trotz hoher Nachfrage",
  },
];

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
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">

        {/* Hero */}
        <section className="border-b border-slate-100 bg-gradient-to-br from-blue-50 via-white to-white py-16 md:py-24">
          <div className="container mx-auto px-6 text-center">
            <span className="inline-block rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600">
              Kostenlos & Unverbindlich
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Ihr persönlicher SEO-Report
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-slate-500">
              Wir analysieren Ihre Website kostenfrei und zeigen Ihnen in einem professionellen PDF-Report, wo Sie stehen und wie Sie wachsen können.
            </p>
          </div>
        </section>

        {/* Was steckt im Report */}
        <section id="seo-analyse" className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                Was beinhaltet Ihr SEO-Report?
              </h2>
              <p className="mt-3 text-slate-500">
                Innerhalb von 24 Stunden erhalten Sie einen detaillierten Report – hier ein Vorgeschmack auf die Inhalte:
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reportItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="mt-4 font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.desc}</p>
                    <div className="mt-3 rounded-lg bg-slate-50 px-3 py-2">
                      <p className="text-xs font-medium text-slate-400">{item.example}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 rounded-2xl border border-blue-100 bg-blue-50 p-6 text-center">
              <p className="text-sm font-semibold text-blue-700">
                ✅ Keine Kosten, keine Pflichten – Sie erhalten den vollständigen Report als PDF per E-Mail innerhalb von 24 Stunden.
              </p>
            </div>
          </div>
        </section>

        {/* Kontaktformular */}
        <section className="border-t border-slate-100 bg-slate-50 py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Jetzt Analyse anfordern</h2>
              <p className="mt-3 text-slate-500">
                Füllen Sie das Formular aus – wir melden uns innerhalb von 24 Stunden.
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-2xl">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center rounded-2xl border border-blue-200 bg-blue-50 p-12 text-center">
                  <CheckCircle2 className="h-12 w-12 text-blue-600" />
                  <p className="mt-4 text-lg font-semibold text-blue-800">
                    Vielen Dank! Ihre Anfrage wurde erfolgreich versendet.
                  </p>
                  <p className="mt-2 text-sm text-blue-600">Wir senden Ihnen den SEO-Report innerhalb von 24 Stunden zu.</p>
                  <Button
                    className="mt-6 rounded-full"
                    variant="outline"
                    onClick={() => setStatus("idle")}
                  >
                    Weitere Nachricht senden
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input placeholder="Ihr Name *" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                    <Input type="email" placeholder="E-Mail-Adresse *" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                  </div>
                  <Input type="tel" placeholder="Telefonnummer" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                  <Input placeholder="Ihre Website-URL (z. B. https://ihrefirma.de)" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                  <Select value={formData.service} onValueChange={(v) => setFormData({ ...formData, service: v })}>
                    <SelectTrigger><SelectValue placeholder="Gewünschte Leistung (optional)" /></SelectTrigger>
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

                  {status === "error" && errorMsg && (
                    <p className="text-sm font-medium text-red-600">{errorMsg}</p>
                  )}

                  <Button type="submit" size="lg" className="w-full rounded-full bg-blue-600 hover:bg-blue-700" disabled={status === "sending"}>
                    {status === "sending" ? "Wird gesendet…" : "Gratis SEO-Report anfordern →"}
                  </Button>
                  <p className="text-center text-xs text-slate-400">Kostenlos, unverbindlich und DSGVO-konform.</p>
                </form>
              )}
            </div>

            {/* Kontakt-Info */}
            <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-bold text-slate-900">TrafficWerk – Direkt erreichbar</h3>
              <p className="mt-1 text-sm text-slate-500">Inhaber Thomas Kinne</p>
              <div className="mt-4 flex flex-wrap gap-6">
                <a href="mailto:info@trafficwerk.de" className="flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-blue-600">
                  <Mail className="h-4 w-4 text-blue-600" /> info@trafficwerk.de
                </a>
                <a href="tel:+4915782208713" className="flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-blue-600">
                  <Phone className="h-4 w-4 text-blue-600" /> +49 1578 2208713
                </a>
                <span className="flex items-center gap-2 text-sm text-slate-500">
                  <MapPin className="h-4 w-4 text-blue-600" /> Taradeauer Str. 11, 85244 Röhrmoos
                </span>
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
