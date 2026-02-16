import ServicePageLayout from "@/components/ServicePageLayout";
import { FileText, Tag, Link2, Heading, Image, BarChart3 } from "lucide-react";

const OnPageOptimierung = () => (
  <ServicePageLayout
    title="On-Page Optimierung"
    subtitle="Content & Meta-Optimierung"
    description="Perfektionieren Sie Ihre Inhalte, Meta-Tags und interne Verlinkung – für bessere Rankings, höhere Klickraten und nachhaltig mehr organischen Traffic."
    features={[
      { icon: <Tag className="h-6 w-6" />, title: "Meta-Tag Optimierung", description: "Keyword-optimierte Title-Tags und Meta-Descriptions für maximale Klickraten in den SERPs." },
      { icon: <FileText className="h-6 w-6" />, title: "Content-Optimierung", description: "Inhalte, die exakt auf die Suchintention Ihrer Zielgruppe abgestimmt sind." },
      { icon: <Link2 className="h-6 w-6" />, title: "Interne Verlinkung", description: "Strategische Link-Architektur für optimalen Linkjuice-Fluss und bessere Nutzerführung." },
      { icon: <Heading className="h-6 w-6" />, title: "Heading-Struktur", description: "Saubere H1-H6-Hierarchie für bessere Lesbarkeit und Suchmaschinen-Verständnis." },
      { icon: <Image className="h-6 w-6" />, title: "Bild-SEO", description: "Alt-Tags, Komprimierung und moderne Formate für schnelle Ladezeiten und Bildersuche." },
      { icon: <BarChart3 className="h-6 w-6" />, title: "Content-Gap-Analyse", description: "Identifikation ungenutzter Keyword-Potenziale und neuer Content-Chancen." },
    ]}
    process={[
      { step: "Keyword-Recherche & Audit", desc: "Umfassende Keyword-Analyse kombiniert mit einer Bewertung Ihrer bestehenden Inhalte und Optimierungspotenziale." },
      { step: "Strategische Optimierung", desc: "Überarbeitung von Meta-Tags, Content-Struktur und interner Verlinkung nach datenbasierten Prioritäten." },
      { step: "Performance-Tracking", desc: "Laufendes Monitoring der Ranking-Entwicklung mit iterativer Verbesserung basierend auf Echtzeit-Daten." },
    ]}
  />
);

export default OnPageOptimierung;
