import ServicePageLayout from "@/components/ServicePageLayout";
import { PenTool, Calendar, TrendingUp, BookOpen, Target, Award } from "lucide-react";

const ContentMarketing = () => (
  <ServicePageLayout
    title="Content Marketing"
    subtitle="Strategie & Storytelling"
    description="Strategische Inhalte, die ranken, begeistern und konvertieren. Von der datengetriebenen Content-Strategie bis zur professionellen Umsetzung und Erfolgsmessung."
    features={[
      { icon: <Target className="h-6 w-6" />, title: "Content-Strategie", description: "Datenbasierte Strategie mit klarem Fokus auf Ihre Geschäftsziele und Zielgruppen." },
      { icon: <PenTool className="h-6 w-6" />, title: "SEO-Copywriting", description: "Professionelle Texte, die Suchmaschinen und Leser gleichermaßen überzeugen." },
      { icon: <Calendar className="h-6 w-6" />, title: "Redaktionsplanung", description: "Strukturierter Content-Kalender mit Themen, Formaten und Veröffentlichungsterminen." },
      { icon: <BookOpen className="h-6 w-6" />, title: "Vielfältige Formate", description: "Blog-Artikel, Ratgeber, Whitepapers, Infografiken und interaktive Inhalte." },
      { icon: <TrendingUp className="h-6 w-6" />, title: "Performance-Analyse", description: "Datengetriebene Auswertung der Content-Performance mit konkreten Optimierungsmaßnahmen." },
      { icon: <Award className="h-6 w-6" />, title: "Thought Leadership", description: "Positionierung als Branchenexperte durch fundierte Fachbeiträge und Experteninterviews." },
    ]}
    process={[
      { step: "Themenrecherche & Planung", desc: "Identifikation relevanter Themen basierend auf Suchvolumen, Wettbewerb und Ihrer Zielgruppe." },
      { step: "Erstellung & Optimierung", desc: "Professionelle Content-Produktion mit SEO-Optimierung, Lektorat und visueller Aufbereitung." },
      { step: "Distribution & Messung", desc: "Veröffentlichung, gezielte Promotion und datenbasierte Performance-Auswertung." },
    ]}
  />
);

export default ContentMarketing;
