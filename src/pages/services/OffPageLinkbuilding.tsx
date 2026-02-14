import ServicePageLayout from "@/components/ServicePageLayout";

const OffPageLinkbuilding = () => (
  <ServicePageLayout
    title="Off-Page / Linkbuilding"
    subtitle="Autorität & Backlinks"
    description="Hochwertige Backlinks aufbauen, die Ihre Domain-Autorität stärken und Ihre Rankings nachhaltig verbessern."
    benefits={[
      "Strategischer Aufbau hochwertiger Backlinks",
      "Digital PR und Gastbeiträge bei relevanten Medien",
      "Wettbewerbs-Backlink-Analyse",
      "Toxic Link Audit und Disavow-Management",
      "Branchenverzeichnisse und lokale Zitationen",
      "Content-basiertes Linkbuilding (Linkbait)",
    ]}
    process={[
      { step: "Backlink-Audit", desc: "Analyse Ihres bestehenden Linkprofils und des Wettbewerbs." },
      { step: "Strategie", desc: "Entwicklung einer nachhaltigen Linkbuilding-Strategie." },
      { step: "Outreach", desc: "Kontaktaufnahme zu relevanten Websites und Medien." },
      { step: "Reporting", desc: "Monatliche Berichte über neue Backlinks und Domain-Rating-Entwicklung." },
    ]}
    icon={null}
  />
);

export default OffPageLinkbuilding;
