import ServicePageLayout from "@/components/ServicePageLayout";
import { Target, Users, Compass, TrendingUp, BarChart3, Rocket } from "lucide-react";

const LeadGenerierung = () => (
  <ServicePageLayout
    title="Digitale Strategie"
    subtitle="B2B Lead-Gen · Conversion · Sales Funnels"
    description="Von der digitalen Vision zur messbaren Wirkung. Wir entwickeln datengetriebene Strategien für qualifizierte Leads, optimierte Funnels und nachhaltiges Geschäftswachstum."
    features={[
      { icon: <Target className="h-5 w-5" />, title: "B2B Lead-Generierung", description: "Qualifizierte Geschäftskontakte durch präzise Zielgruppenansprache und Inbound-Strategien." },
      { icon: <TrendingUp className="h-5 w-5" />, title: "Conversion-Optimierung", description: "Datenbasierte Optimierung aller Touchpoints für höhere Abschlussraten." },
      { icon: <Compass className="h-5 w-5" />, title: "Sales Funnels", description: "Strategisch aufgebaute Funnels, die Interessenten systematisch zu Kunden konvertieren." },
      { icon: <Users className="h-5 w-5" />, title: "Zielgruppen-Analyse", description: "Tiefgreifende Analyse Ihrer idealen Kunden für präzise Ansprache und höhere Relevanz." },
      { icon: <BarChart3 className="h-5 w-5" />, title: "Performance-Dashboards", description: "Echtzeit-Übersicht über alle KPIs – von der Leadquelle bis zum Umsatz." },
      { icon: <Rocket className="h-5 w-5" />, title: "Growth Frameworks", description: "Skalierbare Wachstumsstrategien, die mit Ihrem Unternehmen mitwachsen." },
    ]}
    process={[
      { step: "Discovery", desc: "Analyse Ihrer Zielgruppe, Vertriebsprozesse und aktuellen Performance." },
      { step: "Strategie", desc: "Maßgeschneiderte Growth-Roadmap mit klaren KPIs und Meilensteinen." },
      { step: "Implementierung", desc: "Aufbau der Funnels, Landing Pages und Automatisierungen." },
      { step: "Skalierung", desc: "Datenbasierte Optimierung und Skalierung erfolgreicher Kanäle." },
    ]}
    strategyTitle="Systematisches Wachstum"
    strategyDescription="Nachhaltiges Wachstum braucht System – keine Zufälle."
    strategyPoints={[
      { text: "Klare Zielgruppendefinition und Buyer Personas" },
      { text: "Multi-Channel Lead-Generierung" },
      { text: "Automatisierte Nurturing-Prozesse" },
      { text: "Nahtlose Sales-Marketing-Alignment" },
    ]}
    growthTitle="Qualifizierte Leads"
    growthDescription="Weniger, aber bessere Leads – für effizienteren Vertrieb und höheren Umsatz."
    growthPoints={[
      { text: "Steigende Anzahl qualifizierter Leads" },
      { text: "Kürzere Sales-Zyklen durch besseres Nurturing" },
      { text: "Höhere Conversion-Raten im gesamten Funnel" },
      { text: "Sinkende Customer Acquisition Costs" },
    ]}
  />
);

export default LeadGenerierung;
