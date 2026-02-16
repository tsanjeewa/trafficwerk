import ServicePageLayout from "@/components/ServicePageLayout";
import { MousePointerClick, LineChart, Target, Wallet, SplitSquareVertical, Megaphone } from "lucide-react";

const GoogleAds = () => (
  <ServicePageLayout
    title="Performance Marketing"
    subtitle="SEA · Google & Meta Ads · ROI-Optimierung"
    description="Maximale Effizienz mit datengetriebenen Werbekampagnen. Wir steuern und optimieren Ihre Ads-Kampagnen für messbar höheren Return on Investment."
    features={[
      { icon: <Target className="h-5 w-5" />, title: "Lead-Generierung", description: "Qualifizierte Anfragen durch präzise Zielgruppenansprache und performante Landingpages." },
      { icon: <LineChart className="h-5 w-5" />, title: "Conversion-Tracking", description: "Lückenloses Tracking vom ersten Klick bis zum Abschluss für vollständige Attribution." },
      { icon: <SplitSquareVertical className="h-5 w-5" />, title: "A/B Testing", description: "Systematisches Testing von Anzeigen, Zielgruppen und Landingpages für stetige Verbesserung." },
      { icon: <Wallet className="h-5 w-5" />, title: "Budget-Optimierung", description: "Intelligentes Bid-Management und Budget-Allokation für maximalen ROAS." },
      { icon: <MousePointerClick className="h-5 w-5" />, title: "Retargeting", description: "Gezielte Remarketing-Kampagnen, die Interessenten zurückholen und konvertieren." },
      { icon: <Megaphone className="h-5 w-5" />, title: "Multi-Channel-Strategie", description: "Abgestimmte Kampagnen über Google, Meta, LinkedIn und weitere Plattformen." },
    ]}
    process={[
      { step: "Audit & Planung", desc: "Analyse bestehender Kampagnen oder professionelles Setup mit optimierter Struktur." },
      { step: "Kampagnen-Launch", desc: "Go-Live mit optimierten Anzeigen, Zielgruppen und Tracking-Setup." },
      { step: "Laufende Optimierung", desc: "Bid-Anpassungen, Anzeigen-Tests und Zielgruppen-Verfeinerung." },
      { step: "Reporting & Skalierung", desc: "Transparente KPI-Reports und datenbasierte Skalierung der Top-Kanäle." },
    ]}
    strategyTitle="Datengetriebene Kampagnen"
    strategyDescription="Jeder Euro zählt. Wir maximieren Ihren Werbeerfolg durch präzise Steuerung und Analyse."
    strategyPoints={[
      { text: "Granulare Zielgruppenaussteuerung" },
      { text: "Vollständiges Conversion-Tracking und Attribution" },
      { text: "Automatisierte Gebotsstrategien mit manueller Kontrolle" },
      { text: "Kontinuierliche Creative-Optimierung" },
    ]}
    growthTitle="Ihr ROI-Wachstum"
    growthDescription="Mehr Leads, mehr Umsatz – bei gleichem oder sinkendem Budget pro Conversion."
    growthPoints={[
      { text: "Sinkende Cost-per-Lead durch laufende Optimierung" },
      { text: "Höhere Conversion-Raten auf Landingpages" },
      { text: "Skalierbare Kampagnenstrukturen für Wachstum" },
      { text: "Transparente Performance-Reports in Echtzeit" },
    ]}
  />
);

export default GoogleAds;
