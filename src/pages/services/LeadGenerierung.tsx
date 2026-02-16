import ServicePageLayout from "@/components/ServicePageLayout";
import { Gauge, Zap, Server, Image, Code2, Activity } from "lucide-react";

const LeadGenerierung = () => (
  <ServicePageLayout
    title="Performance & Speed"
    subtitle="Core Web Vitals · Ladezeiten · Server-Optimierung"
    description="Geschwindigkeit ist Umsatz. Wir optimieren Ihre Core Web Vitals, Server-Infrastruktur und Frontend-Performance – für blitzschnelle Ladezeiten und bessere Rankings."
    features={[
      { icon: <Gauge className="h-5 w-5" />, title: "Core Web Vitals", description: "LCP, INP und CLS auf Bestniveau – die entscheidenden Google-Ranking-Faktoren für Nutzererfahrung." },
      { icon: <Zap className="h-5 w-5" />, title: "Frontend-Optimierung", description: "Code-Splitting, Tree Shaking und kritisches CSS für minimale Ladezeiten." },
      { icon: <Server className="h-5 w-5" />, title: "Server-Side Optimization", description: "CDN-Konfiguration, Edge Caching und Serverless-Architekturen für globale Performance." },
      { icon: <Image className="h-5 w-5" />, title: "Asset-Optimierung", description: "WebP/AVIF-Konvertierung, Lazy Loading und responsive Bildauslieferung für minimale Payloads." },
      { icon: <Code2 className="h-5 w-5" />, title: "JavaScript-Audit", description: "Analyse und Reduktion von Third-Party-Skripten, Render-Blocking-Ressourcen und Bundle-Größen." },
      { icon: <Activity className="h-5 w-5" />, title: "Performance-Monitoring", description: "Real User Monitoring und automatisierte Alerts bei Performance-Regressionen." },
    ]}
    process={[
      { step: "Performance-Audit", desc: "Umfassende Analyse mit Lighthouse, WebPageTest und Real User Metrics." },
      { step: "Priorisierung", desc: "Impact-basiertes Ranking aller Optimierungspotenziale nach ROI." },
      { step: "Implementierung", desc: "Systematische Umsetzung aller Performance-Maßnahmen." },
      { step: "Monitoring", desc: "Kontinuierliches Tracking und proaktive Optimierung der Ladezeiten." },
    ]}
    strategyTitle="Jede Millisekunde zählt"
    strategyDescription="53 % der Nutzer verlassen eine Seite, die länger als 3 Sekunden lädt. Wir sorgen dafür, dass Ihre bleibt."
    strategyPoints={[
      { text: "Ladezeiten unter 2 Sekunden auf allen Endgeräten" },
      { text: "Lighthouse-Scores von 90+ in allen Kategorien" },
      { text: "Optimiertes Caching und Asset-Delivery" },
      { text: "Minimal-invasive Optimierung ohne Redesign" },
    ]}
    growthTitle="Messbare Resultate"
    growthDescription="Schnellere Seiten bedeuten bessere Rankings, weniger Absprünge und mehr Umsatz."
    growthPoints={[
      { text: "Bessere Google-Rankings durch optimierte Core Web Vitals" },
      { text: "Niedrigere Absprungraten durch kürzere Ladezeiten" },
      { text: "Höhere Conversion-Raten auf schnellen Seiten" },
      { text: "Geringere Serverkosten durch effizientes Caching" },
    ]}
  />
);

export default LeadGenerierung;
