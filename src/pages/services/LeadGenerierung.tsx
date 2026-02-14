import ServicePageLayout from "@/components/ServicePageLayout";

const LeadGenerierung = () => (
  <ServicePageLayout
    title="Lead-Generierung"
    subtitle="Qualifizierte Anfragen"
    description="Mehr qualifizierte Leads durch gezielte SEO-Strategien. Wir optimieren Ihren gesamten Funnel für maximale Conversion."
    benefits={[
      "SEO-optimierte Landing Pages",
      "Conversion-Rate-Optimierung (CRO)",
      "Lead-Magneten und Content-Offers",
      "Call-to-Action Optimierung",
      "A/B Testing von Formularen",
      "Lead-Tracking und Attribution",
    ]}
    process={[
      { step: "Funnel-Analyse", desc: "Analyse des bestehenden Lead-Funnels und Identifikation von Schwachstellen." },
      { step: "Strategie", desc: "Entwicklung einer SEO-Lead-Strategie mit klaren KPIs." },
      { step: "Umsetzung", desc: "Optimierung von Landing Pages, CTAs und Formularen." },
      { step: "Skalierung", desc: "Erfolgreiche Ansätze skalieren und auf neue Bereiche ausweiten." },
    ]}
    icon={null}
  />
);

export default LeadGenerierung;
