import ServicePageLayout from "@/components/ServicePageLayout";
import { Search, Gauge, BarChart3, Bug, FileCode2, ShieldCheck } from "lucide-react";

const TechnischeSEO = () => (
  <ServicePageLayout
    title="Technische SEO"
    subtitle="PageSpeed · Core Web Vitals · Indexierung"
    description="Die technische Grundlage für Top-Rankings. Wir optimieren Crawlbarkeit, Ladezeiten und Core Web Vitals – damit Google Ihre Seite liebt und Nutzer bleiben."
    features={[
      { icon: <Gauge className="h-5 w-5" />, title: "Core Web Vitals", description: "LCP, INP und CLS auf höchstem Niveau – für beste Google-Bewertungen und Nutzererfahrung." },
      { icon: <Search className="h-5 w-5" />, title: "Crawling & Indexierung", description: "Optimale Crawl-Effizienz und lückenlose Indexierung aller relevanten Seiten." },
      { icon: <FileCode2 className="h-5 w-5" />, title: "Strukturierte Daten", description: "Schema Markup für Rich Snippets und erweiterte Suchergebnisse mit höherer Klickrate." },
      { icon: <Bug className="h-5 w-5" />, title: "Technische Fehleranalyse", description: "Systematische Identifikation und Behebung von Crawl-Fehlern, Weiterleitungsketten und Duplikaten." },
      { icon: <BarChart3 className="h-5 w-5" />, title: "PageSpeed Optimierung", description: "Ladezeiten unter 2 Sekunden durch Caching, Code-Splitting und Server-Optimierung." },
      { icon: <ShieldCheck className="h-5 w-5" />, title: "Security & HTTPS", description: "SSL-Zertifikate, sichere Weiterleitungen und Security-Header für maximales Vertrauen." },
    ]}
    process={[
      { step: "Technisches Audit", desc: "Umfassende Analyse aller technischen SEO-Faktoren mit professionellen Tools." },
      { step: "Priorisierung", desc: "Impact-basierte Bewertung aller Findings mit klarer Maßnahmenplanung." },
      { step: "Implementierung", desc: "Systematische Umsetzung aller technischen Optimierungen." },
      { step: "Monitoring", desc: "Kontinuierliche Überwachung und proaktive Fehlerbehebung." },
    ]}
    strategyTitle="Technische Exzellenz"
    strategyDescription="Eine technisch einwandfreie Website ist das Fundament jeder erfolgreichen SEO-Strategie."
    strategyPoints={[
      { text: "Vollständige Crawlbarkeit aller relevanten Inhalte" },
      { text: "Optimale Seitenarchitektur und URL-Struktur" },
      { text: "Maximale Ladegeschwindigkeit auf allen Endgeräten" },
      { text: "Fehlerfreie Indexierung und Canonical-Management" },
    ]}
    growthTitle="Messbare Resultate"
    growthDescription="Technische SEO liefert die Basis für nachhaltige Rankings und bessere Nutzererfahrung."
    growthPoints={[
      { text: "Bessere Rankings durch optimierte Core Web Vitals" },
      { text: "Höhere Crawl-Effizienz und schnellere Indexierung" },
      { text: "Steigende organische Sichtbarkeit und Traffic" },
      { text: "Niedrigere Absprungraten durch schnellere Ladezeiten" },
    ]}
  />
);

export default TechnischeSEO;
