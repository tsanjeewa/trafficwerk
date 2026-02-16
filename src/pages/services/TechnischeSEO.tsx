import ServicePageLayout from "@/components/ServicePageLayout";
import { Search, TrendingUp, BarChart3, Target, FileText, Layers } from "lucide-react";

const TechnischeSEO = () => (
  <ServicePageLayout
    title="SEO-Strategie"
    subtitle="Datengetriebene Suchmaschinenoptimierung"
    description="Nachhaltige Sichtbarkeit in Google durch fundierte Analysen, strategische Keyword-Planung und technische Exzellenz. Wir bringen Ihre Website dauerhaft auf Seite 1."
    features={[
      { icon: <Search className="h-5 w-5" />, title: "Keyword-Strategie", description: "Tiefgehende Recherche und Mapping relevanter Suchbegriffe mit echtem Business-Impact." },
      { icon: <BarChart3 className="h-5 w-5" />, title: "Wettbewerbsanalyse", description: "Detaillierte Analyse der Konkurrenz, um Chancen und Lücken systematisch zu nutzen." },
      { icon: <TrendingUp className="h-5 w-5" />, title: "Ranking-Monitoring", description: "Echtzeit-Tracking aller wichtigen Keywords mit automatisierten Performance-Reports." },
      { icon: <Layers className="h-5 w-5" />, title: "Technisches SEO", description: "Crawlbarkeit, Indexierung und Core Web Vitals auf höchstem Niveau optimiert." },
      { icon: <FileText className="h-5 w-5" />, title: "Content-Optimierung", description: "Bestehende Inhalte auf Suchintention und Relevanz analysieren und verbessern." },
      { icon: <Target className="h-5 w-5" />, title: "Nachhaltige Ergebnisse", description: "White-Hat-Methoden für langfristiges Wachstum ohne Risiko von Abstrafungen." },
    ]}
    process={[
      { step: "Analyse & Audit", desc: "Umfassende Bewertung Ihrer Website, des Wettbewerbs und der aktuellen Suchlandschaft." },
      { step: "Strategie & Umsetzung", desc: "Maßgeschneiderte SEO-Roadmap mit priorisierten Maßnahmen und transparentem Zeitplan." },
      { step: "Reporting & Skalierung", desc: "Monatliche Performance-Reports, iterative Optimierung und kontinuierliche Strategieanpassung." },
    ]}
  />
);

export default TechnischeSEO;
