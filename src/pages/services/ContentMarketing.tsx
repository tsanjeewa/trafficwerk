import ServicePageLayout from "@/components/ServicePageLayout";

const ContentMarketing = () => (
  <ServicePageLayout
    title="Content Marketing Excellence"
    subtitle="Strategie & Storytelling"
    description="Strategische Inhalte, die ranken, begeistern und konvertieren. Von der Content-Strategie bis zur Erfolgsmessung."
    benefits={[
      "Datengetriebene Content-Strategie entwickeln",
      "SEO-optimierte Texte mit Mehrwert",
      "Content-Kalender und redaktionelle Planung",
      "Verschiedene Content-Formate (Blog, Guides, Infografiken)",
      "Content-Performance-Analyse und Optimierung",
      "Thought Leadership und Expertenpositionierung",
    ]}
    process={[
      { step: "Themenrecherche", desc: "Identifikation relevanter Themen basierend auf Suchvolumen und Zielgruppe." },
      { step: "Redaktionsplan", desc: "Erstellung eines strukturierten Content-Kalenders mit Prioritäten." },
      { step: "Content-Erstellung", desc: "Professionelle Texte, optimiert für Suchmaschinen und Leser." },
      { step: "Distribution & Analyse", desc: "Veröffentlichung, Promotion und Performance-Messung." },
    ]}
    icon={null}
  />
);

export default ContentMarketing;
