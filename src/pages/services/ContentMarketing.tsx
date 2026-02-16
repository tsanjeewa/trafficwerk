import ServicePageLayout from "@/components/ServicePageLayout";
import { PenTool, Palette, Video, FileText, Lightbulb, Image } from "lucide-react";

const ContentMarketing = () => (
  <ServicePageLayout
    title="Content Creation"
    subtitle="Copywriting · Kreatives Design · Storytelling"
    description="Inhalte, die wirken. Von strategischem Copywriting bis zu visuellem Design – wir erstellen Content, der Ihre Zielgruppe erreicht und zum Handeln bewegt."
    features={[
      { icon: <PenTool className="h-5 w-5" />, title: "Copywriting", description: "Überzeugende Texte für Website, Blog, Newsletter und Social Media – SEO-optimiert und zielgruppengerecht." },
      { icon: <Palette className="h-5 w-5" />, title: "Kreatives Design", description: "Visuelle Inhalte, die Ihre Marke stärken – von Infografiken bis zu Social-Media-Grafiken." },
      { icon: <Video className="h-5 w-5" />, title: "Video-Content", description: "Konzeption und Produktion von Videos, Reels und Animationen für maximale Reichweite." },
      { icon: <FileText className="h-5 w-5" />, title: "Fachbeiträge & Guides", description: "Fundierte Ratgeber und Expertenbeiträge für Thought Leadership." },
      { icon: <Lightbulb className="h-5 w-5" />, title: "Content-Strategie", description: "Datenbasierte Themenplanung mit Fokus auf Suchvolumen, Relevanz und Conversion." },
      { icon: <Image className="h-5 w-5" />, title: "Brand Storytelling", description: "Authentische Geschichten, die Ihre Marke erlebbar machen und Vertrauen schaffen." },
    ]}
    process={[
      { step: "Briefing", desc: "Tiefes Verständnis Ihrer Marke, Zielgruppe und Ziele." },
      { step: "Recherche", desc: "Themenrecherche, Keyword-Analyse und Wettbewerbsvergleich." },
      { step: "Produktion", desc: "Professionelle Erstellung mit Feedback-Schleifen." },
      { step: "Distribution", desc: "Gezielte Veröffentlichung und Performance-Messung." },
    ]}
    strategyTitle="Content mit System"
    strategyDescription="Guter Content entsteht nicht zufällig – sondern durch Strategie, Recherche und Handwerk."
    strategyPoints={[
      { text: "Suchintentions-basierte Themenplanung" },
      { text: "Professionelle Texte mit klarer Markenstimme" },
      { text: "Visuelles Design, das Aufmerksamkeit erzeugt" },
      { text: "SEO-optimiert für organische Reichweite" },
    ]}
    growthTitle="Mehr Wirkung"
    growthDescription="Content, der nicht nur gelesen wird – sondern Ergebnisse liefert."
    growthPoints={[
      { text: "Steigende organische Sichtbarkeit" },
      { text: "Höheres Engagement und Verweildauer" },
      { text: "Thought Leadership in Ihrer Branche" },
      { text: "Mehr Conversions durch zielgerichtete Inhalte" },
    ]}
  />
);

export default ContentMarketing;
