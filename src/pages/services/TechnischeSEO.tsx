import ServicePageLayout from "@/components/ServicePageLayout";
import { Gauge, Search, Smartphone, Code2, FileCode, ShieldCheck } from "lucide-react";

const TechnischeSEO = () => (
  <ServicePageLayout
    title="Technische SEO"
    subtitle="Performance & Indexierung"
    description="Wir optimieren die technische Infrastruktur Ihrer Website für maximale Crawlbarkeit, blitzschnelle Ladezeiten und einwandfreie Indexierung – die Basis für Top-Rankings."
    features={[
      { icon: <Gauge className="h-6 w-6" />, title: "Core Web Vitals", description: "Optimierung von LCP, FID und CLS für beste Nutzererfahrung und Ranking-Signale." },
      { icon: <Search className="h-6 w-6" />, title: "Crawling & Indexierung", description: "Sicherstellung, dass Suchmaschinen alle relevanten Seiten effizient finden und indexieren." },
      { icon: <Smartphone className="h-6 w-6" />, title: "Mobile-First Optimierung", description: "Perfekte Darstellung und Performance auf allen mobilen Endgeräten." },
      { icon: <Code2 className="h-6 w-6" />, title: "Strukturierte Daten", description: "Schema.org-Markup für Rich Snippets und bessere Darstellung in den Suchergebnissen." },
      { icon: <FileCode className="h-6 w-6" />, title: "PageSpeed Optimierung", description: "Ladezeiten unter 2 Sekunden durch Bildkomprimierung, Caching und Code-Optimierung." },
      { icon: <ShieldCheck className="h-6 w-6" />, title: "Sicherheit & HTTPS", description: "SSL-Zertifikate, sichere Weiterleitungen und technische Absicherung Ihrer Website." },
    ]}
    process={[
      { step: "Technisches Audit", desc: "Umfassende Analyse aller technischen SEO-Faktoren mit Screaming Frog, PageSpeed Insights und proprietären Tools." },
      { step: "Priorisierte Umsetzung", desc: "Systematische Behebung aller identifizierten Probleme nach Impact-Priorisierung in enger Abstimmung mit Ihrem Team." },
      { step: "Monitoring & Iteration", desc: "Kontinuierliche Überwachung der technischen Performance mit automatisierten Alerts und regelmäßigen Re-Audits." },
    ]}
  />
);

export default TechnischeSEO;
