import ServicePageLayout from "@/components/ServicePageLayout";

const ECommerceSEO = () => (
  <ServicePageLayout
    title="E-Commerce SEO"
    subtitle="Shop-Optimierung"
    description="Mehr Umsatz für Ihren Online-Shop durch spezialisierte E-Commerce SEO. Produktseiten, Kategorien und Shop-Architektur optimieren."
    benefits={[
      "Produktseiten-Optimierung für mehr Conversions",
      "Kategorie-Architektur und interne Verlinkung",
      "Strukturierte Daten für Rich Snippets",
      "Duplicate Content Lösungen",
      "Shop-spezifische technische SEO",
      "Wettbewerbs- und Marktplatz-Analyse",
    ]}
    process={[
      { step: "Shop-Audit", desc: "Umfassende Analyse Ihres Online-Shops und des Wettbewerbs." },
      { step: "Keyword-Mapping", desc: "Keyword-Strategie für Kategorien und Produktseiten." },
      { step: "Optimierung", desc: "Technische und inhaltliche Optimierung aller Shop-Bereiche." },
      { step: "Monitoring", desc: "Umsatz-Tracking und kontinuierliche Ranking-Optimierung." },
    ]}
    icon={null}
  />
);

export default ECommerceSEO;
