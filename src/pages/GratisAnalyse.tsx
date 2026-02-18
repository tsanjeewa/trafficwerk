import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  CheckCircle2, Search, AlertTriangle, Zap, BarChart2,
  Users, FileText, TrendingUp, Shield, Clock, Star, ArrowRight,
} from "lucide-react";
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
    desc: "Wir zeigen Ihnen, für welche Suchbegriffe Ihre Website bereits sichtbar ist – und wo das größte Wachstumspotenzial liegt.",
    example: "z. B. Position 14 für 'SEO-Agentur München' → Potenzial: Top 3",
  },
  {
    icon: AlertTriangle,
    title: "Technische Fehler",
    desc: "Crawling-Fehler, fehlende Meta-Tags, defekte Links und langsame Ladezeiten werden aufgedeckt und verständlich erklärt.",
    example: "z. B. 23 Seiten ohne Meta Description gefunden",
  },
  {
    icon: Zap,
    title: "PageSpeed & Core Web Vitals",
    desc: "Ihr Lighthouse-Score und die Google Core Web Vitals werden geprüft. Wir erklären, was das für Ihr Ranking bedeutet.",
    example: "z. B. LCP: 4.2s (Ziel: unter 2.5s) → Seite lädt zu langsam",
  },
  {
    icon: BarChart2,
    title: "Wettbewerbs-Vergleich",
    desc: "Wir vergleichen Ihre Domain direkt mit Ihren stärksten Mitbewerbern – damit Sie wissen, wo Sie stehen.",
    example: "z. B. Konkurrent A hat 3× mehr Backlinks als Sie",
  },
  {
    icon: Users,
    title: "Backlink-Profil",
    desc: "Qualität und Anzahl der Links, die auf Ihre Website zeigen, werden bewertet. Toxische Links werden markiert.",
    example: "z. B. Domain Authority 18 → konkreter Verbesserungsplan inklusive",
  },
  {
    icon: FileText,
    title: "Content-Lücken",
    desc: "Fehlende Themenbereiche und ungenutzte Suchpotenziale werden sichtbar gemacht – einfach erklärt, ohne Fachjargon.",
    example: "z. B. Kein Content für 'Lokale SEO Tipps' trotz hoher Nachfrage",
  },
];

const steps = [
  { step: "1", title: "Formular ausfüllen", desc: "Nur Ihre Website-URL und E-Mail – fertig. Kein Abo, keine Kreditkarte." },
  { step: "2", title: "Wir analysieren", desc: "Unser Team prüft Ihre Website innerhalb von 24 Stunden mit professionellen SEO-Tools." },
  { step: "3", title: "Report erhalten", desc: "Sie bekommen Ihren persönlichen SEO-Report per E-Mail – verständlich und mit konkreten Empfehlungen." },
  { step: "4", title: "Strategie besprechen", desc: "Optional: Wir erklären Ihnen die Ergebnisse kostenlos in einem kurzen Gespräch." },
];

const GratisAnalyse = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", url: "", service: "" });
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
          subject: "Neue Gratis-Analyse Anfrage über TrafficWerk",
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", url: "", service: "" });
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
      <main className="pt-16">

        {/* Hero */}
        <section className="border-b border-border bg-gradient-to-br from-primary/5 via-background to-background py-16 md:py-24">
          <div className="container mx-auto px-6 text-center">
            <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              Kostenlos & Unverbindlich
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Ihre persönliche Gratis SEO-Analyse
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
              Wir analysieren Ihre Website kostenlos und zeigen Ihnen in einem professionellen Report genau, wo Sie stehen – und wie Sie messbar wachsen können. Ohne Fachjargon, ohne Risiko.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary" /> 100% kostenlos</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary" /> Keine Kreditkarte nötig</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary" /> DSGVO-konform</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-primary" /> Innerhalb von 24 Stunden</span>
            </div>
            <div className="mt-8">
              <a
                href="#analyse-formular"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
              >
                Jetzt kostenlos anfordern <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Wie es funktioniert */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">So funktioniert's – in 4 einfachen Schritten</h2>
              <p className="mt-3 text-muted-foreground">Kein komplizierter Prozess. Nur Ihre URL – und wir kümmern uns um den Rest.</p>
            </div>
            <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s) => (
                <div key={s.step} className="nc-card rounded-2xl border bg-background p-6 text-center">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                    {s.step}
                  </div>
                  <h3 className="mt-4 font-bold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Report-Vorschau */}
        <section
          className="relative py-16 md:py-20"
          style={{ backgroundImage: `url(${accentBg})`, backgroundSize: "cover", backgroundPosition: "right center" }}
        >
          <div className="absolute inset-0 bg-white/85" />
          <div className="container relative mx-auto px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-medium uppercase tracking-widest text-primary">Report-Vorschau</span>
              <h2 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">
                So sieht Ihr SEO-Report aus
              </h2>
              <p className="mt-3 text-muted-foreground">
                Echte Einblicke – das erwartet Sie nach Ihrer kostenlosen Anfrage:
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-5xl items-center gap-8 md:grid-cols-2">
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

            {/* Was beinhaltet der Report */}
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

        {/* Social Proof */}
        <section className="border-y border-border bg-muted/30 py-10">
          <div className="container mx-auto px-6">
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center md:flex-row md:text-left">
              <div className="flex shrink-0 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  „Schon nach dem kostenlosen Report wussten wir, wo wir ansetzen müssen. Innerhalb von 3 Monaten haben wir unsere Sichtbarkeit verdoppelt."
                </p>
                <p className="mt-1 text-sm text-muted-foreground">– Tobias M., Geschäftsführer, Online-Shop Betreiber</p>
              </div>
            </div>
          </div>
        </section>

        {/* Formular */}
        <section id="analyse-formular" className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-xl">
              <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">Jetzt Gratis-Analyse anfordern</h2>
                <p className="mt-3 text-muted-foreground">
                  Füllen Sie das kurze Formular aus – wir benötigen nur Ihre Website und E-Mail. Alles andere erledigen wir für Sie.
                </p>
              </div>

              {status === "success" ? (
                <div className="flex flex-col items-center justify-center rounded-2xl border border-primary/20 bg-primary/5 p-12 text-center">
                  <CheckCircle2 className="h-12 w-12 text-primary" />
                  <p className="mt-4 text-lg font-semibold text-foreground">
                    Super! Ihre Anfrage ist bei uns angekommen.
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Wir melden uns innerhalb von 24 Stunden mit Ihrem persönlichen SEO-Report. Schauen Sie auch in Ihren Spam-Ordner.
                  </p>
                  <Button className="mt-6 rounded-full" variant="outline" onClick={() => setStatus("idle")}>
                    Weitere Anfrage senden
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
                    <label className="mb-1.5 block text-sm font-medium text-foreground">Ihre E-Mail-Adresse *</label>
                    <Input
                      type="email"
                      placeholder="ihre@email.de"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <p className="mt-1 text-xs text-muted-foreground">Wir senden Ihren Report ausschließlich an diese Adresse.</p>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">Ihre Website-URL *</label>
                    <Input
                      placeholder="https://ihrefirma.de"
                      required
                      value={formData.url}
                      onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                    />
                    <p className="mt-1 text-xs text-muted-foreground">Wir analysieren genau diese Website für Sie.</p>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">Telefonnummer (optional)</label>
                    <Input
                      type="tel"
                      placeholder="+49 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                    <p className="mt-1 text-xs text-muted-foreground">Für ein optionales kurzes Erklärgespräch zum Report.</p>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">Welches Thema interessiert Sie? (optional)</label>
                    <Select value={formData.service} onValueChange={(v) => setFormData({ ...formData, service: v })}>
                      <SelectTrigger><SelectValue placeholder="Bitte wählen…" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="seo-allgemein">Allgemeine SEO-Verbesserung</SelectItem>
                        <SelectItem value="mehr-besucher">Mehr Besucher / Kunden gewinnen</SelectItem>
                        <SelectItem value="lokale-seo">Lokale Sichtbarkeit (Google Maps)</SelectItem>
                        <SelectItem value="technisch">Website-Geschwindigkeit & Technik</SelectItem>
                        <SelectItem value="content">Inhalte & Texte verbessern</SelectItem>
                        <SelectItem value="wettbewerb">Wettbewerber überholen</SelectItem>
                        <SelectItem value="ecommerce">Online-Shop optimieren</SelectItem>
                        <SelectItem value="ki-seo">KI & Zukunft der Suche (GEO)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {status === "error" && errorMsg && (
                    <p className="text-sm font-medium text-destructive">{errorMsg}</p>
                  )}

                  <Button type="submit" size="lg" className="w-full rounded-full" disabled={status === "sending"}>
                    {status === "sending" ? "Wird gesendet…" : "Gratis SEO-Report anfordern →"}
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    Kostenlos, unverbindlich und DSGVO-konform. Kein Spam, keine Werbung – versprochen.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default GratisAnalyse;
