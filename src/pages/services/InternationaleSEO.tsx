import ServicePageLayout from "@/components/ServicePageLayout";
import { Compass, Lightbulb, BarChart3, Users, Layers, Rocket } from "lucide-react";

const InternationaleSEO = () => (
  <ServicePageLayout
    title="Digitale Strategie"
    subtitle="Transformation · Beratung · Ganzheitliche Strategie"
    description="Von der Vision zur messbaren Wirkung. Wir entwickeln ganzheitliche digitale Strategien, die alle Kanäle orchestrieren und Ihr Unternehmen nachhaltig transformieren."
    features={[
      { icon: <Compass className="h-5 w-5" />, title: "Strategie-Audits", description: "360°-Analyse Ihrer digitalen Präsenz – von Website über SEO bis Social Media und Paid Channels." },
      { icon: <Lightbulb className="h-5 w-5" />, title: "Digitale Transformation", description: "Begleitung Ihres Unternehmens auf dem Weg zur datengetriebenen, digitalen Organisation." },
      { icon: <Layers className="h-5 w-5" />, title: "Kanal-Orchestrierung", description: "Abgestimmte Strategie über alle digitalen Touchpoints für maximale Synergieeffekte." },
      { icon: <Users className="h-5 w-5" />, title: "Stakeholder-Workshops", description: "Interaktive Workshops mit Ihrem Team für gemeinsames Verständnis und klare Zielsetzung." },
      { icon: <BarChart3 className="h-5 w-5" />, title: "KPI-Frameworks", description: "Maßgeschneiderte Mess- und Reporting-Frameworks für datenbasierte Entscheidungen." },
      { icon: <Rocket className="h-5 w-5" />, title: "Wachstums-Roadmaps", description: "Priorisierte Maßnahmenpläne mit klaren Meilensteinen und messbaren Zielen." },
    ]}
    process={[
      { step: "Discovery", desc: "Tiefgreifende Analyse Ihrer Geschäftsziele, Zielgruppen und digitalen Reife." },
      { step: "Strategieentwicklung", desc: "Ganzheitliche digitale Roadmap mit Priorisierung und KPI-Definition." },
      { step: "Implementierungsbegleitung", desc: "Hands-on Unterstützung bei der Umsetzung aller strategischen Maßnahmen." },
      { step: "Review & Skalierung", desc: "Regelmäßige Strategy Reviews und Anpassung an Marktveränderungen." },
    ]}
    strategyTitle="Ganzheitlich denken"
    strategyDescription="Digitaler Erfolg entsteht nicht in Silos – sondern durch eine Strategie, die alle Kanäle verbindet."
    strategyPoints={[
      { text: "Umfassende Ist-Analyse aller digitalen Kanäle" },
      { text: "Klare Priorisierung nach Impact und Ressourcen" },
      { text: "Integration von SEO, Paid, Content und Social Media" },
      { text: "Messbare Ziele und transparentes Reporting" },
    ]}
    growthTitle="Nachhaltige Transformation"
    growthDescription="Eine klare Strategie ist das Fundament für langfristigen digitalen Erfolg."
    growthPoints={[
      { text: "Klarheit über digitale Prioritäten und Investitionen" },
      { text: "Höhere Effizienz durch abgestimmte Kanalstrategie" },
      { text: "Messbare Fortschritte gegenüber definierten KPIs" },
      { text: "Zukunftssichere Positionierung im digitalen Markt" },
    ]}
  />
);

export default InternationaleSEO;
