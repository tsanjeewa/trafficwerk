import ServicePageLayout from "@/components/ServicePageLayout";

const OnPageOptimierung = () => (
  <ServicePageLayout
    title="On-Page Optimierung"
    subtitle="Content & Meta-Optimierung"
    description="Perfektionieren Sie Ihre Inhalte, Meta-Tags und interne Verlinkung für bessere Rankings und höhere Klickraten."
    benefits={[
      "Keyword-optimierte Title-Tags und Meta-Descriptions",
      "Content-Optimierung mit Fokus auf Suchintention",
      "Interne Verlinkungsstrategie aufbauen",
      "Heading-Struktur (H1-H6) optimieren",
      "Bild-SEO mit Alt-Tags und Komprimierung",
      "Content-Gap-Analyse und neue Content-Chancen",
    ]}
    process={[
      { step: "Keyword-Recherche", desc: "Umfassende Keyword-Analyse mit Fokus auf Suchvolumen und Wettbewerb." },
      { step: "Content-Audit", desc: "Bewertung bestehender Inhalte und Identifikation von Optimierungspotenzial." },
      { step: "Optimierung", desc: "Überarbeitung von Meta-Tags, Content und interner Verlinkung." },
      { step: "Performance-Tracking", desc: "Monitoring der Ranking-Entwicklung und iterative Verbesserung." },
    ]}
    icon={null}
  />
);

export default OnPageOptimierung;
