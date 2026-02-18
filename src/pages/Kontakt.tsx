import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, CheckCircle2, FileText, BarChart2, Search, AlertTriangle, Zap, Users, TrendingUp, Shield } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import seoPreview from "@/assets/seo-dashboard-preview.webp";
import seoAuditImg from "@/assets/seo-audit-preview.webp";
import accentBg from "@/assets/content-section-accent-bg.webp";

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
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", url: "" });
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
          message: `Website-URL: ${formData.url}`,
          subject: "Neue SEO-Report Anfrage über TrafficWerk",
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", service: "", url: "" });
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

        {/* Hero */}
        <section className="border-b border-border bg-gradient-to-br from-primary/5 via-background to-background py-16 md:py-24">
          <div className="container mx-auto px-6 text-center">
            <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              Kostenlos & Unverbindlich
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Ihr persönlicher SEO-Report
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Wir analysieren Ihre Website kostenfrei und zeigen Ihnen in einem professionellen Report, wo Sie stehen und wie Sie messbar wachsen können.
            </p>
          </div>
        </section>

        {/* SEO Report Preview – visuell */}
        <section
          id="seo-analyse"
          className="relative py-16 md:py-20"
          style={{ backgroundImage: `url(${accentBg})`, backgroundSize: 'cover', backgroundPosition: 'right center' }}
        >
          <div className="absolute inset-0 bg-white/85" />
          <div className="container relative mx-auto px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-medium uppercase tracking-widest text-primary">Report-Vorschau</span>
              <h2 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">
                So sieht Ihr SEO-Report aus
              </h2>
              <p className="mt-3 text-muted-foreground">
                Ein echter Blick in das Dashboard – das erwartet Sie nach Ihrer kostenlosen Anfrage:
              </p>
            </div>

            {/* Split: Dashboard + Audit-Foto */}
            <div className="mx-auto mt-10 grid max-w-5xl items-center gap-8 md:grid-cols-2">
              {/* Dashboard Screenshot */}
              <div className="nc-card overflow-hidden rounded-2xl border">
                <div className="flex items-center gap-1.5 border-b border-border bg-muted/50 px-4 py-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
                  <div className="ml-2 flex-1 rounded-md bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">
                    trafficwerk.de/seo-report
                  </div>
                  <Shield className="h-3.5 w-3.5 text-green-500" />
                </div>
                <img
                  src={seoPreview}
                  alt="SEO Performance Report Dashboard Vorschau – TrafficWerk"
                  loading="lazy"
                  width={720}
                  height={480}
                  className="w-full object-cover"
                />
              </div>

              {/* Audit-Foto mit Bullet-Points */}
              <div className="space-y-6">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={seoAuditImg}
                    alt="SEO Audit Report – professionelle Analyse durch TrafficWerk"
                    loading="lazy"
                    width={600}
                    height={400}
                    className="w-full rounded-2xl object-cover shadow-md"
                  />
                </div>
                <ul className="space-y-3">
                  {[
                    "Keyword-Rankings & Wachstumspotenziale",
                    "Technische Fehler & PageSpeed-Score",
                    "Backlink-Profil & Wettbewerbs-Vergleich",
                    "Content-Lücken & Quick-Wins",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <TrendingUp className="h-3 w-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-3">
                  <p className="text-sm font-semibold text-primary">
                    ✅ Kostenlos · Unverbindlich · DSGVO-konform · Innerhalb 24 h
                  </p>
                </div>
              </div>
            </div>

            {/* Was beinhaltet der Report – Cards */}
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reportItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="nc-card rounded-xl border bg-background p-6 transition-shadow">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="mt-4 font-bold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                    <div className="mt-3 rounded-lg bg-muted px-3 py-2">
                      <p className="text-xs font-medium text-muted-foreground">{item.example}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Kontaktformular */}
        <section className="border-t border-border bg-muted/30 py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">Jetzt Analyse anfordern</h2>
              <p className="mt-3 text-muted-foreground">
                Füllen Sie das Formular aus – wir melden uns innerhalb von 24 Stunden.
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-2xl">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center rounded-2xl border border-primary/20 bg-primary/5 p-12 text-center">
                  <CheckCircle2 className="h-12 w-12 text-primary" />
                  <p className="mt-4 text-lg font-semibold text-foreground">
                    Vielen Dank! Ihre Anfrage wurde erfolgreich versendet.
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">Wir senden Ihnen den SEO-Report innerhalb von 24 Stunden zu.</p>
                  <Button className="mt-6 rounded-full" variant="outline" onClick={() => setStatus("idle")}>
                    Weitere Nachricht senden
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="nc-card space-y-5 rounded-2xl border p-8">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input placeholder="Ihr Name *" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                    <Input type="email" placeholder="E-Mail-Adresse *" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                  </div>
                  <Input type="tel" placeholder="Telefonnummer (optional)" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                  <Input placeholder="Ihre Website-URL (z. B. https://ihrefirma.de)" value={formData.url} onChange={(e) => setFormData({ ...formData, url: e.target.value })} />
                  <Select value={formData.service} onValueChange={(v) => setFormData({ ...formData, service: v })}>
                    <SelectTrigger><SelectValue placeholder="Gewünschte Leistung (optional)" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="seo-strategie">SEO-Strategie</SelectItem>
                      <SelectItem value="technische-seo">Technische SEO</SelectItem>
                      <SelectItem value="on-page">On-Page Optimierung</SelectItem>
                      <SelectItem value="off-page">Off-Page / Linkbuilding</SelectItem>
                      <SelectItem value="content">Content Marketing</SelectItem>
                      <SelectItem value="lokal">Lokale SEO</SelectItem>
                      <SelectItem value="international">Internationale SEO</SelectItem>
                      <SelectItem value="sea">Google Ads (SEA)</SelectItem>
                      <SelectItem value="ecommerce">E-Commerce SEO</SelectItem>
                      <SelectItem value="geo">AI-Search (GEO)</SelectItem>
                    </SelectContent>
                  </Select>

                  {status === "error" && errorMsg && (
                    <p className="text-sm font-medium text-destructive">{errorMsg}</p>
                  )}

                  <Button type="submit" size="lg" className="w-full rounded-full" disabled={status === "sending"}>
                    {status === "sending" ? "Wird gesendet…" : "Gratis SEO-Report anfordern →"}
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">Kostenlos, unverbindlich und DSGVO-konform.</p>
                </form>
              )}
            </div>

            {/* Kontakt-Info – kein Google Maps */}
            <div className="mx-auto mt-10 max-w-2xl nc-card rounded-2xl border p-6">
              <h3 className="font-bold text-foreground">TrafficWerk – Direkt erreichbar</h3>
              <p className="mt-1 text-sm text-muted-foreground">Inhaber Thomas Kinne</p>
              <div className="mt-4 flex flex-wrap gap-6">
                <a href="mailto:info@trafficwerk.de" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
                  <Mail className="h-4 w-4 text-primary" /> info@trafficwerk.de
                </a>
                <a href="tel:+4915782208713" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
                  <Phone className="h-4 w-4 text-primary" /> +49 1578 2208713
                </a>
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" /> Taradeauer Str. 11, 85244 Röhrmoos
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
