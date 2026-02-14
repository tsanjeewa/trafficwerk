import ServicePageLayout from "@/components/ServicePageLayout";

const GoogleAds = () => (
  <ServicePageLayout
    title="Google Ads (SEA)"
    subtitle="Performance Marketing"
    description="Maximale Effizienz mit Google Ads. Wir erstellen und optimieren Kampagnen, die konvertieren und Ihren ROI maximieren."
    benefits={[
      "Kampagnenstruktur nach Best Practices",
      "Keyword-Recherche und Negative Keywords",
      "Anzeigentexte mit hoher Klickrate",
      "Landing Page Optimierung für Conversions",
      "Bid Management und Budget-Optimierung",
      "A/B Testing und kontinuierliche Verbesserung",
    ]}
    process={[
      { step: "Account-Analyse", desc: "Bewertung bestehender Kampagnen oder Neukonto-Setup." },
      { step: "Kampagnen-Setup", desc: "Strukturierte Kampagnen mit optimierten Anzeigengruppen." },
      { step: "Optimierung", desc: "Laufende Bid-Anpassungen, Anzeigen-Tests und Qualitätsfaktor-Verbesserung." },
      { step: "Reporting", desc: "Transparente monatliche Reports mit KPIs und Handlungsempfehlungen." },
    ]}
    icon={null}
  />
);

export default GoogleAds;
