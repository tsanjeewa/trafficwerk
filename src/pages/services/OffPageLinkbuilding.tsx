import ServicePageLayout from "@/components/ServicePageLayout";
import { Heart, Users, MessageCircle, Camera, TrendingUp, Calendar } from "lucide-react";

const OffPageLinkbuilding = () => (
  <ServicePageLayout
    title="Social Media Marketing"
    subtitle="Strategie · Branding · Community"
    description="Starke Marken entstehen durch echte Verbindungen. Wir entwickeln Social-Media-Strategien, die Ihre Community begeistern und messbare Ergebnisse liefern."
    features={[
      { icon: <Heart className="h-5 w-5" />, title: "Markenaufbau", description: "Konsistente Markenkommunikation, die Ihre Werte transportiert und Wiedererkennung schafft." },
      { icon: <Users className="h-5 w-5" />, title: "Community-Management", description: "Aktive Betreuung Ihrer Community mit schnellen Reaktionszeiten und authentischem Dialog." },
      { icon: <Calendar className="h-5 w-5" />, title: "Redaktionsplanung", description: "Strategischer Content-Kalender mit durchdachten Themen und optimalen Posting-Zeiten." },
      { icon: <Camera className="h-5 w-5" />, title: "Visual Content", description: "Ansprechende Grafiken, Reels und Stories, die Aufmerksamkeit erzeugen." },
      { icon: <TrendingUp className="h-5 w-5" />, title: "Performance-Analyse", description: "Datenbasiertes Reporting mit Insights zu Reichweite, Engagement und Wachstum." },
      { icon: <MessageCircle className="h-5 w-5" />, title: "Social Advertising", description: "Gezielte Paid-Social-Kampagnen für Reichweite, Leads und Conversions." },
    ]}
    process={[
      { step: "Analyse", desc: "Marke, Zielgruppe und Wettbewerber verstehen." },
      { step: "Strategie", desc: "Klare Social-Media-Roadmap mit messbaren Zielen." },
      { step: "Content & Community", desc: "Professionelle Inhalte und aktives Engagement." },
      { step: "Optimierung", desc: "Performance-Reports und Skalierung erfolgreicher Formate." },
    ]}
    strategyTitle="Authentische Präsenz"
    strategyDescription="Social Media ist kein Kanal – es ist eine Beziehung zu Ihrer Zielgruppe."
    strategyPoints={[
      { text: "Plattformgerechte Content-Strategie" },
      { text: "Authentische Markenstimme und Tonalität" },
      { text: "Community-first Ansatz für echtes Engagement" },
      { text: "Integration in die gesamte Marketing-Strategie" },
    ]}
    growthTitle="Wachsende Community"
    growthDescription="Mehr Reichweite, mehr Engagement, mehr Kunden – nachhaltig aufgebaut."
    growthPoints={[
      { text: "Organisches Follower-Wachstum mit echtem Mehrwert" },
      { text: "Steigende Engagement-Raten und Interaktionen" },
      { text: "Messbare Leads und Conversions über Social Channels" },
      { text: "Stärkere Markenbekanntheit und Vertrauen" },
    ]}
  />
);

export default OffPageLinkbuilding;
