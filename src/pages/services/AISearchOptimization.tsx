import ServicePageLayout from "@/components/ServicePageLayout";

const AISearchOptimization = () => (
  <ServicePageLayout
    title="AI-Search Optimization (GEO)"
    subtitle="Zukunft der Suche"
    description="Optimieren Sie Ihre Inhalte für KI-basierte Suchsysteme. Google AI Overviews, ChatGPT, Perplexity und mehr."
    benefits={[
      "Optimierung für Google AI Overviews",
      "Sichtbarkeit in ChatGPT und Perplexity",
      "E-E-A-T Signale stärken (Erfahrung, Expertise, Autorität, Vertrauen)",
      "Strukturierte Daten für KI-Systeme",
      "Content-Formatierung für Featured Snippets",
      "Zukunftssichere SEO-Strategie entwickeln",
    ]}
    process={[
      { step: "AI-Audit", desc: "Analyse Ihrer aktuellen Sichtbarkeit in KI-Suchsystemen." },
      { step: "Strategie", desc: "GEO-Strategie basierend auf den neuesten Entwicklungen." },
      { step: "Content-Optimierung", desc: "Inhalte für KI-Zitierbarkeit und Quellennennung optimieren." },
      { step: "Zukunftssicherung", desc: "Laufende Anpassung an neue KI-Suchformate." },
    ]}
    icon={null}
  />
);

export default AISearchOptimization;
