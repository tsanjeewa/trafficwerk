import ServicePageLayout from "@/components/ServicePageLayout";
import { Search, TrendingUp, BarChart3, Database, Target, Leaf, Zap, Shield, Code, Image, FileCode, Server } from "lucide-react";

const TechnischeSEO = () => (
  <ServicePageLayout
    title="SEO-Strategie"
    subtitle="Datengetrieben · Nachhaltig · Skalierbar"
    description="Nachhaltiges Wachstum beginnt mit der richtigen Strategie. Wir entwickeln datengestützte SEO-Roadmaps, die Ihre organische Sichtbarkeit systematisch und langfristig steigern."
    features={[
      { icon: <Search className="h-5 w-5" />, title: "Keyword-Strategie", description: "Tiefgehende Recherche und Priorisierung relevanter Suchbegriffe nach Suchvolumen, Wettbewerb und Kaufabsicht." },
      { icon: <BarChart3 className="h-5 w-5" />, title: "Wettbewerbsanalyse", description: "Systematische Analyse Ihrer Mitbewerber – Stärken, Schwächen und ungenutzte Potenziale identifizieren." },
      { icon: <Database className="h-5 w-5" />, title: "Datengetriebene Insights", description: "Fundierte Entscheidungen auf Basis von Search Console, Analytics und proprietären Datenmodellen." },
      { icon: <Target className="h-5 w-5" />, title: "Content-Roadmap", description: "Strategisch priorisierte Themenpläne, die Traffic, Autorität und Conversions systematisch aufbauen." },
      { icon: <TrendingUp className="h-5 w-5" />, title: "Ranking-Prognosen", description: "Realistische Wachstumsprognosen und Meilensteine auf Basis historischer Daten und Marktpotenzial." },
      { icon: <Leaf className="h-5 w-5" />, title: "Nachhaltige Sichtbarkeit", description: "Langfristige Strategien statt kurzfristiger Tricks – für organisches Wachstum, das bleibt." },
      { icon: <Zap className="h-5 w-5" />, title: "Core Web Vitals (LCP, FID, CLS)", description: "Optimierung der drei Google-Metriken für Ladegeschwindigkeit, Interaktivität und visuelle Stabilität." },
      { icon: <Shield className="h-5 w-5" />, title: "HTTPS & Security Setup", description: "Sichere Verschlüsselung via SSL/TLS – ein Rankingfaktor und Vertrauenssignal für Nutzer und Google." },
      { icon: <Code className="h-5 w-5" />, title: "Structured Data & JSON-LD", description: "Schema Markup für Rich Snippets, FAQ-Dropdowns und erweiterte Suchergebnisse in Google." },
      { icon: <Image className="h-5 w-5" />, title: "Image SEO & Optimierung", description: "Bildkomprimierung, WebP-Formate, Lazy Loading und Alt-Texte für maximale Performance und Sichtbarkeit." },
      { icon: <FileCode className="h-5 w-5" />, title: "React & Next.js Performance", description: "SSR, Pre-Rendering und Code-Splitting für SEO-freundliche Single Page Applications." },
      { icon: <Server className="h-5 w-5" />, title: "Headless CMS & SSR", description: "Optimale Crawlbarkeit durch Server-Side Rendering und moderne Headless-CMS-Architekturen." },
    ]}
    process={[
      { step: "Technisches Audit", desc: "Umfassende Analyse von Core Web Vitals, Crawl-Fehlern, 404-Seiten, XML Sitemaps und Robots.txt." },
      { step: "Strategieentwicklung", desc: "Maßgeschneiderte SEO-Roadmap mit klaren Prioritäten, KPIs und Meilensteinen." },
      { step: "Umsetzung", desc: "Gezielte Maßnahmen in Content, Technik und Offpage – koordiniert und priorisiert." },
      { step: "Optimierung & Reporting", desc: "Monatliche Performance-Reviews und datenbasierte Anpassung der Strategie." },
    ]}
    strategyTitle="Daten statt Bauchgefühl"
    strategyDescription="Jede unserer Empfehlungen basiert auf messbaren Daten – für transparente und nachvollziehbare Ergebnisse."
    strategyPoints={[
      { text: "Individuelle Analyse statt Standard-Audit" },
      { text: "Priorisierung nach Impact und Umsetzbarkeit" },
      { text: "Transparentes Reporting mit klaren KPIs" },
      { text: "Kontinuierliche Optimierung und Anpassung" },
    ]}
    growthTitle="Nachhaltiges Wachstum"
    growthDescription="SEO ist kein Sprint – sondern ein System für langfristigen, messbaren Unternehmenserfolg."
    growthPoints={[
      { text: "Steigende organische Sichtbarkeit Monat für Monat" },
      { text: "Qualifizierter Traffic mit hoher Kaufabsicht" },
      { text: "Sinkende Abhängigkeit von bezahlter Werbung" },
      { text: "Nachhaltige Marktpositionierung gegenüber Wettbewerbern" },
    ]}
  />
);

export default TechnischeSEO;
