import ServicePageLayout from "@/components/ServicePageLayout";

const InternationaleSEO = () => (
  <ServicePageLayout
    title="Internationale SEO"
    subtitle="Globale Märkte"
    description="Expandieren Sie in neue Märkte mit mehrsprachigen SEO-Strategien. Hreflang, Domain-Struktur und lokalisierte Inhalte."
    benefits={[
      "Mehrsprachige Keyword-Recherche",
      "Hreflang-Tag Implementierung",
      "Internationale Domain- und URL-Strategie",
      "Lokalisierung statt bloßer Übersetzung",
      "Marktspezifische Suchmaschinen-Optimierung",
      "Internationales Linkbuilding",
    ]}
    process={[
      { step: "Marktanalyse", desc: "Bewertung der Zielmärkte und deren Suchverhalten." },
      { step: "Technische Basis", desc: "Hreflang, URL-Struktur und technische Internationalisierung." },
      { step: "Lokalisierung", desc: "Kulturell angepasste Inhalte für jeden Zielmarkt." },
      { step: "Skalierung", desc: "Schrittweise Expansion in weitere Märkte." },
    ]}
    icon={null}
  />
);

export default InternationaleSEO;
