import ServicePageLayout from "@/components/ServicePageLayout";
import { FileText, Search, Link2, Heading, Tag, BarChart3 } from "lucide-react";

const OnPageOptimierung = () => (
  <ServicePageLayout
    title="On-Page SEO"
    subtitle="Content-Relevanz · Meta-Tags · Interne Verlinkung"
    description="Jede Seite ein Rankingfaktor. Wir optimieren Inhalte, Meta-Daten und Seitenstruktur für maximale Relevanz und Sichtbarkeit in den Suchergebnissen."
    features={[
      { icon: <FileText className="h-5 w-5" />, title: "Content-Optimierung", description: "Bestehende Inhalte auf Suchintention, Relevanz und E-E-A-T analysieren und verbessern." },
      { icon: <Tag className="h-5 w-5" />, title: "Meta-Tags & Snippets", description: "Überzeugende Title-Tags und Meta-Descriptions für höhere Klickraten in der Suche." },
      { icon: <Link2 className="h-5 w-5" />, title: "Interne Verlinkung", description: "Strategische Linkarchitektur, die Relevanz bündelt und Crawlbarkeit verbessert." },
      { icon: <Heading className="h-5 w-5" />, title: "Überschriftenstruktur", description: "Semantische H-Tag-Hierarchie für bessere Lesbarkeit und Suchmaschinenverständnis." },
      { icon: <Search className="h-5 w-5" />, title: "Keyword-Mapping", description: "Jede Seite gezielt auf relevante Suchbegriffe ausgerichtet – ohne Kannibalisierung." },
      { icon: <BarChart3 className="h-5 w-5" />, title: "Content-Gap-Analyse", description: "Identifikation fehlender Themen und Inhalte für vollständige Suchintentions-Abdeckung." },
    ]}
    process={[
      { step: "On-Page Audit", desc: "Analyse aller Seiten auf Content-Qualität, Meta-Daten und Struktur." },
      { step: "Keyword-Mapping", desc: "Zielgerichtete Zuordnung von Suchbegriffen zu jeder einzelnen URL." },
      { step: "Optimierung", desc: "Systematische Verbesserung von Inhalten, Tags und interner Verlinkung." },
      { step: "Performance-Tracking", desc: "Ranking-Monitoring und iterative Nachjustierung für anhaltenden Erfolg." },
    ]}
    strategyTitle="Content mit Wirkung"
    strategyDescription="Relevante Inhalte und perfekte Strukturierung sind der Schlüssel zu nachhaltigen Rankings."
    strategyPoints={[
      { text: "Suchintentions-gerechte Inhalte für jede URL" },
      { text: "Perfekt optimierte Meta-Daten und Rich Snippets" },
      { text: "Strategische interne Verlinkung mit Relevanz-Fokus" },
      { text: "Regelmäßige Content-Updates für anhaltende Frische" },
    ]}
    growthTitle="Organisches Wachstum"
    growthDescription="Bessere Inhalte bedeuten bessere Rankings – und mehr qualifizierten Traffic."
    growthPoints={[
      { text: "Steigende Rankings für relevante Suchbegriffe" },
      { text: "Höhere Klickraten durch optimierte Snippets" },
      { text: "Längere Verweildauer und niedrigere Absprungraten" },
      { text: "Mehr Conversions durch zielgerichtete Inhalte" },
    ]}
  />
);

export default OnPageOptimierung;
