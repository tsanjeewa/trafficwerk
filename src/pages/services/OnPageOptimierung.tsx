import ServicePageLayout from "@/components/ServicePageLayout";
import { Monitor, Smartphone, Code2, Palette, Zap, Users } from "lucide-react";

const OnPageOptimierung = () => (
  <ServicePageLayout
    title="Webdesign & Entwicklung"
    subtitle="Modernes UI/UX · High-Performance Development"
    description="Maßgeschneiderte Websites, die beeindrucken und konvertieren. Modernes Design trifft auf performante Entwicklung – für ein digitales Erlebnis, das Ihre Marke stärkt."
    features={[
      { icon: <Smartphone className="h-5 w-5" />, title: "Responsive Design", description: "Perfekte Darstellung auf allen Endgeräten – vom Smartphone bis zum Desktop." },
      { icon: <Code2 className="h-5 w-5" />, title: "Clean Code", description: "Saubere, wartbare Codebasis mit modernen Technologien und Best Practices." },
      { icon: <Users className="h-5 w-5" />, title: "User Experience", description: "Nutzerführung, die intuitiv überzeugt und Besucher in Kunden verwandelt." },
      { icon: <Palette className="h-5 w-5" />, title: "Brand Design", description: "Visuelle Identität, die Ihre Marke widerspiegelt und Vertrauen schafft." },
      { icon: <Zap className="h-5 w-5" />, title: "Performance", description: "Blitzschnelle Ladezeiten durch optimierte Architektur und modernes Hosting." },
      { icon: <Monitor className="h-5 w-5" />, title: "CMS-Integration", description: "Flexible Content-Management-Systeme für einfache Pflege Ihrer Inhalte." },
    ]}
    process={[
      { step: "Konzept & Design", desc: "Wireframes, Designentwürfe und UX-Strategie in enger Abstimmung mit Ihrem Team." },
      { step: "Entwicklung & Testing", desc: "Pixel-perfekte Umsetzung mit modernen Technologien, Cross-Browser-Tests und Performance-Optimierung." },
      { step: "Launch & Betreuung", desc: "Go-Live-Begleitung, technischer Support und kontinuierliche Weiterentwicklung Ihrer Website." },
    ]}
  />
);

export default OnPageOptimierung;
