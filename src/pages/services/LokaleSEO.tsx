import ServicePageLayout from "@/components/ServicePageLayout";

const LokaleSEO = () => (
  <ServicePageLayout
    title="Lokale SEO"
    subtitle="Regionale Sichtbarkeit"
    description="Werden Sie in Ihrer Region zur ersten Anlaufstelle. Google Maps Optimierung und lokale Suchergebnisse dominieren."
    benefits={[
      "Google Business Profile Optimierung",
      "Lokale Keyword-Strategie entwickeln",
      "Bewertungsmanagement und Reputationsaufbau",
      "Lokale Zitationen und Branchenverzeichnisse",
      "Google Maps Ranking verbessern",
      "Lokale Landingpages für mehrere Standorte",
    ]}
    process={[
      { step: "Lokale Analyse", desc: "Analyse der lokalen Suchlandschaft und Ihrer Wettbewerber." },
      { step: "Profil-Optimierung", desc: "Google Business Profile und alle relevanten Verzeichnisse optimieren." },
      { step: "Content & Citations", desc: "Lokale Inhalte erstellen und Brancheneinträge aufbauen." },
      { step: "Bewertungsstrategie", desc: "Systematischer Aufbau positiver Kundenbewertungen." },
    ]}
    icon={null}
  />
);

export default LokaleSEO;
