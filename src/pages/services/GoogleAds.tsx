import ServicePageLayout from "@/components/ServicePageLayout";
import { MousePointerClick, LineChart, Target, Wallet, SplitSquareVertical, Megaphone } from "lucide-react";

const GoogleAds = () => (
  <ServicePageLayout
    title="Performance Marketing"
    subtitle="Google & Meta Ads · ROI-Optimierung"
    description="Maximale Effizienz mit datengetriebenen Werbekampagnen. Wir konzipieren, steuern und optimieren Ihre Google- und Meta-Ads-Kampagnen für messbar höheren Return on Investment."
    features={[
      { icon: <Target className="h-5 w-5" />, title: "Lead-Generierung", description: "Qualifizierte Anfragen durch präzise Zielgruppenansprache und performante Landingpages." },
      { icon: <LineChart className="h-5 w-5" />, title: "Conversion-Tracking", description: "Lückenloses Tracking vom ersten Klick bis zum Abschluss für vollständige Attribution." },
      { icon: <SplitSquareVertical className="h-5 w-5" />, title: "A/B Testing", description: "Systematisches Testing von Anzeigen, Zielgruppen und Landingpages für stetige Verbesserung." },
      { icon: <Wallet className="h-5 w-5" />, title: "Budget-Optimierung", description: "Intelligentes Bid-Management und Budget-Allokation für maximalen ROAS." },
      { icon: <MousePointerClick className="h-5 w-5" />, title: "Retargeting", description: "Gezielte Remarketing-Kampagnen, die Interessenten zurückholen und konvertieren." },
      { icon: <Megaphone className="h-5 w-5" />, title: "Multi-Channel-Strategie", description: "Abgestimmte Kampagnen über Google, Meta, LinkedIn und weitere Plattformen." },
    ]}
    process={[
      { step: "Audit & Kampagnenplanung", desc: "Analyse bestehender Kampagnen oder professionelles Setup mit optimierter Kampagnenstruktur und Tracking." },
      { step: "Launch & Optimierung", desc: "Laufende Bid-Anpassungen, Anzeigen-Tests und Zielgruppen-Verfeinerung für steigende Performance." },
      { step: "Reporting & Skalierung", desc: "Transparente KPI-Reports und datenbasierte Skalierung der erfolgreichsten Kanäle und Kampagnen." },
    ]}
  />
);

export default GoogleAds;
