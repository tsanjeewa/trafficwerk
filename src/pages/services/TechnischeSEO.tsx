import ServicePageLayout from "@/components/ServicePageLayout";

const TechnischeSEO = () => (
  <ServicePageLayout
    title="Technische SEO"
    subtitle="Performance & Crawlbarkeit"
    description="Wir optimieren die technische Grundlage Ihrer Website für maximale Sichtbarkeit in Suchmaschinen. Von Core Web Vitals bis zur XML-Sitemap."
    benefits={[
      "Optimierung der Ladegeschwindigkeit und Core Web Vitals",
      "Crawling- und Indexierungsoptimierung",
      "Mobile-First Optimierung",
      "Strukturierte Daten (Schema.org) implementieren",
      "XML-Sitemap und Robots.txt Konfiguration",
      "HTTPS-Migration und Sicherheitsoptimierung",
    ]}
    process={[
      { step: "Technisches Audit", desc: "Umfassende Analyse aller technischen SEO-Faktoren mit Screaming Frog und PageSpeed Insights." },
      { step: "Priorisierung", desc: "Identifikation der größten Hebel und Erstellung eines priorisierten Maßnahmenplans." },
      { step: "Implementierung", desc: "Umsetzung der technischen Optimierungen in enger Zusammenarbeit mit Ihrem Entwicklerteam." },
      { step: "Monitoring", desc: "Kontinuierliche Überwachung der technischen Performance und proaktive Optimierung." },
    ]}
    icon={null}
  />
);

export default TechnischeSEO;
