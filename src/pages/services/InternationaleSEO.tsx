import ServicePageLayout from "@/components/ServicePageLayout";
import { Compass, BarChart3, Lightbulb, Users, Layers, Rocket } from "lucide-react";

const InternationaleSEO = () => (
  <ServicePageLayout
    title="Digitale Strategie"
    subtitle="Ganzheitliche Beratung · Digitale Transformation"
    description="Von der Vision zur Umsetzung. Wir entwickeln ganzheitliche digitale Strategien, die alle Kanäle verbinden und Ihr Unternehmen nachhaltig transformieren."
    features={[
      { icon: <Compass className="h-5 w-5" />, title: "Strategische Beratung", description: "Individuelle Digitalstrategie basierend auf Ihren Geschäftszielen, Marktposition und Zielgruppen." },
      { icon: <Layers className="h-5 w-5" />, title: "Omnichannel-Ansatz", description: "Nahtlose Integration aller digitalen Kanäle für ein konsistentes Markenerlebnis." },
      { icon: <BarChart3 className="h-5 w-5" />, title: "Datengestützte Entscheidungen", description: "Analytics-Setup und Dashboards für fundierte Entscheidungen auf Basis realer Daten." },
      { icon: <Users className="h-5 w-5" />, title: "Workshop & Schulung", description: "Kompetenzaufbau in Ihrem Team für nachhaltige digitale Eigenständigkeit." },
      { icon: <Lightbulb className="h-5 w-5" />, title: "Innovations-Roadmap", description: "Zukunftsorientierte Planung mit Fokus auf KI, Automatisierung und neue Technologien." },
      { icon: <Rocket className="h-5 w-5" />, title: "Digitale Transformation", description: "Begleitung des gesamten Transformationsprozesses von der Analyse bis zur erfolgreichen Umsetzung." },
    ]}
    process={[
      { step: "Discovery & Analyse", desc: "Umfassende Bestandsaufnahme Ihrer digitalen Präsenz, Prozesse und Wachstumspotenziale." },
      { step: "Strategieentwicklung", desc: "Erarbeitung einer maßgeschneiderten Digitalstrategie mit klaren Meilensteinen und KPIs." },
      { step: "Umsetzung & Begleitung", desc: "Operative Unterstützung bei der Implementierung und langfristige strategische Begleitung." },
    ]}
  />
);

export default InternationaleSEO;
