import ServicePageLayout from "@/components/ServicePageLayout";
import { Heart, Users, MessageCircle, Camera, TrendingUp, Calendar } from "lucide-react";

const OffPageLinkbuilding = () => (
  <ServicePageLayout
    title="Social Media Marketing"
    subtitle="Markenaufbau · Community-Management"
    description="Starke Marken entstehen durch echte Verbindungen. Wir entwickeln Social-Media-Strategien, die Ihre Community begeistern, Vertrauen aufbauen und messbare Ergebnisse liefern."
    features={[
      { icon: <Heart className="h-5 w-5" />, title: "Markenaufbau", description: "Konsistente Markenkommunikation, die Ihre Werte transportiert und Wiedererkennung schafft." },
      { icon: <Users className="h-5 w-5" />, title: "Community-Management", description: "Aktive Betreuung Ihrer Community mit schnellen Reaktionszeiten und authentischem Dialog." },
      { icon: <Calendar className="h-5 w-5" />, title: "Redaktionsplanung", description: "Strategischer Content-Kalender mit durchdachten Themen und optimalen Posting-Zeiten." },
      { icon: <Camera className="h-5 w-5" />, title: "Visual Content", description: "Ansprechende Grafiken, Reels und Stories, die Aufmerksamkeit erzeugen." },
      { icon: <TrendingUp className="h-5 w-5" />, title: "Performance-Analyse", description: "Datenbasiertes Reporting mit Insights zu Reichweite, Engagement und Wachstum." },
      { icon: <MessageCircle className="h-5 w-5" />, title: "Social Advertising", description: "Gezielte Paid-Social-Kampagnen für Reichweite, Leads und Conversions." },
    ]}
    process={[
      { step: "Strategie & Positionierung", desc: "Analyse Ihrer Marke, Zielgruppe und Wettbewerber – Entwicklung einer klaren Social-Media-Roadmap." },
      { step: "Content & Community", desc: "Professionelle Content-Erstellung, Community-Aufbau und aktives Engagement-Management." },
      { step: "Analyse & Skalierung", desc: "Monatliche Performance-Reports, Strategieanpassung und Skalierung erfolgreicher Formate." },
    ]}
  />
);

export default OffPageLinkbuilding;
