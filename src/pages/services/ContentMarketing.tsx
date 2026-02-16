import ServicePageLayout from "@/components/ServicePageLayout";
import { PenTool, Palette, Video, FileText, Lightbulb, Image } from "lucide-react";

const ContentMarketing = () => (
  <ServicePageLayout
    title="Content Creation"
    subtitle="Copywriting · Kreatives Design"
    description="Inhalte, die wirken. Von strategischem Copywriting bis zu visuellem Design – wir erstellen Content, der Ihre Zielgruppe erreicht, begeistert und zum Handeln bewegt."
    features={[
      { icon: <PenTool className="h-5 w-5" />, title: "Copywriting", description: "Überzeugende Texte für Website, Blog, Newsletter und Social Media – SEO-optimiert und zielgruppengerecht." },
      { icon: <Palette className="h-5 w-5" />, title: "Kreatives Design", description: "Visuelle Inhalte, die Ihre Marke stärken – von Infografiken bis zu Social-Media-Grafiken." },
      { icon: <Video className="h-5 w-5" />, title: "Video-Content", description: "Konzeption und Produktion von Videos, Reels und Animationen für maximale Reichweite." },
      { icon: <FileText className="h-5 w-5" />, title: "Fachbeiträge & Guides", description: "Fundierte Ratgeber, Whitepapers und Expertenbeiträge für Thought Leadership." },
      { icon: <Lightbulb className="h-5 w-5" />, title: "Content-Strategie", description: "Datenbasierte Themenplanung mit Fokus auf Suchvolumen, Relevanz und Conversion." },
      { icon: <Image className="h-5 w-5" />, title: "Brand Storytelling", description: "Authentische Geschichten, die Ihre Marke erlebbar machen und Vertrauen schaffen." },
    ]}
    process={[
      { step: "Briefing & Recherche", desc: "Tiefes Verständnis Ihrer Marke, Zielgruppe und Ziele als Basis für jeden Content." },
      { step: "Erstellung & Abstimmung", desc: "Professionelle Produktion mit Feedback-Schleifen und finaler Freigabe durch Sie." },
      { step: "Distribution & Messung", desc: "Gezielte Veröffentlichung, Promotion und datenbasierte Auswertung der Performance." },
    ]}
  />
);

export default ContentMarketing;
