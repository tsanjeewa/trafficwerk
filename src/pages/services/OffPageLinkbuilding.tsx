import ServicePageLayout from "@/components/ServicePageLayout";
import { ExternalLink, Newspaper, BarChart, ShieldAlert, Building2, Lightbulb } from "lucide-react";

const OffPageLinkbuilding = () => (
  <ServicePageLayout
    title="Off-Page & Linkbuilding"
    subtitle="Autorität & Backlinks"
    description="Hochwertige Backlinks aufbauen, die Ihre Domain-Autorität nachhaltig stärken. Mit Digital PR, strategischem Outreach und datengetriebener Analyse."
    features={[
      { icon: <ExternalLink className="h-6 w-6" />, title: "Strategisches Linkbuilding", description: "Aufbau themenrelevanter Backlinks von autoritären Domains Ihrer Branche." },
      { icon: <Newspaper className="h-6 w-6" />, title: "Digital PR", description: "Platzierung in relevanten Medien und Fachpublikationen für natürliche Backlinks." },
      { icon: <BarChart className="h-6 w-6" />, title: "Wettbewerbs-Analyse", description: "Detaillierte Analyse der Backlink-Profile Ihrer Wettbewerber für gezielte Strategien." },
      { icon: <ShieldAlert className="h-6 w-6" />, title: "Toxic Link Audit", description: "Identifikation und Entfernung schädlicher Backlinks zum Schutz Ihrer Domain." },
      { icon: <Building2 className="h-6 w-6" />, title: "Branchenverzeichnisse", description: "Systematische Einträge in relevanten Verzeichnissen für lokale und branchenspezifische Signale." },
      { icon: <Lightbulb className="h-6 w-6" />, title: "Content-basiertes Linkbuilding", description: "Erstellung von Linkbait-Content wie Studien, Infografiken und Experten-Guides." },
    ]}
    process={[
      { step: "Backlink-Audit & Strategie", desc: "Analyse Ihres bestehenden Linkprofils und Entwicklung einer nachhaltigen Linkbuilding-Roadmap." },
      { step: "Outreach & Akquise", desc: "Professionelle Kontaktaufnahme zu relevanten Websites, Redaktionen und Branchenpartnern." },
      { step: "Reporting & Optimierung", desc: "Monatliche Berichte über neue Backlinks, Domain-Rating-Entwicklung und strategische Anpassungen." },
    ]}
  />
);

export default OffPageLinkbuilding;
