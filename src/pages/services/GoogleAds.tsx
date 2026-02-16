import ServicePageLayout from "@/components/ServicePageLayout";
import { MousePointerClick, Target, LineChart, SplitSquareVertical, Wallet, Megaphone } from "lucide-react";

const GoogleAds = () => (
  <ServicePageLayout
    title="Google Ads (SEA)"
    subtitle="Performance Marketing"
    description="Maximale Effizienz mit Google Ads. Wir erstellen und optimieren ROI-getriebene Kampagnen, die qualifizierten Traffic liefern und messbar konvertieren."
    features={[
      { icon: <Target className="h-6 w-6" />, title: "Kampagnenstruktur", description: "Professioneller Kampagnen-Aufbau nach Google Best Practices für maximale Qualitätsfaktoren." },
      { icon: <MousePointerClick className="h-6 w-6" />, title: "Anzeigen-Optimierung", description: "Hochkonvertierende Anzeigentexte mit starken CTAs und kontinuierlichem A/B-Testing." },
      { icon: <Wallet className="h-6 w-6" />, title: "Budget-Management", description: "Intelligentes Bid-Management und Budget-Allokation für maximalen Return on Ad Spend." },
      { icon: <SplitSquareVertical className="h-6 w-6" />, title: "Landing Page Optimierung", description: "Conversion-optimierte Landingpages, die Klicks in Kunden verwandeln." },
      { icon: <Megaphone className="h-6 w-6" />, title: "Remarketing & Display", description: "Gezielte Retargeting-Kampagnen und Display-Anzeigen für maximale Reichweite." },
      { icon: <LineChart className="h-6 w-6" />, title: "Transparentes Reporting", description: "Detaillierte monatliche Reports mit KPIs, Insights und konkreten Handlungsempfehlungen." },
    ]}
    process={[
      { step: "Account-Analyse & Setup", desc: "Bewertung bestehender Kampagnen oder professionelles Neukonto-Setup mit optimierter Kampagnenstruktur." },
      { step: "Kampagnen-Optimierung", desc: "Laufende Bid-Anpassungen, Anzeigen-Tests, Keyword-Pflege und Qualitätsfaktor-Verbesserung." },
      { step: "Reporting & Skalierung", desc: "Transparente KPI-Reports, datenbasierte Strategieanpassungen und Skalierung erfolgreicher Kampagnen." },
    ]}
  />
);

export default GoogleAds;
