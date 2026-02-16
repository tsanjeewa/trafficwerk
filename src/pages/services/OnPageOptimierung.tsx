import ServicePageLayout from "@/components/ServicePageLayout";
import { Monitor, Palette, Code2, Smartphone, MousePointerClick, Gauge } from "lucide-react";

const OnPageOptimierung = () => (
  <ServicePageLayout
    title="Webdesign & Entwicklung"
    subtitle="UI/UX · React · Conversion-Optimierung"
    description="Hochperformante Webseiten, die begeistern und konvertieren. Wir verbinden modernes UI/UX-Design mit React-Performance – für digitale Erlebnisse, die Besucher in Kunden verwandeln."
    features={[
      { icon: <Palette className="h-5 w-5" />, title: "UI/UX Design", description: "Nutzerzentriertes Design, das intuitive Bedienung mit visueller Exzellenz vereint." },
      { icon: <Code2 className="h-5 w-5" />, title: "React-Entwicklung", description: "Performante Single-Page-Applications mit React, TypeScript und modernem Tech-Stack." },
      { icon: <MousePointerClick className="h-5 w-5" />, title: "Conversion-Optimierung", description: "Strategisch platzierte CTAs, optimierte Formulare und datenbasierte A/B-Tests für höhere Abschlussraten." },
      { icon: <Smartphone className="h-5 w-5" />, title: "Responsive Design", description: "Pixel-perfekte Darstellung auf allen Endgeräten – von Desktop bis Mobile." },
      { icon: <Gauge className="h-5 w-5" />, title: "Performance-First", description: "Blitzschnelle Ladezeiten durch Code-Splitting, Lazy Loading und optimierte Assets." },
      { icon: <Monitor className="h-5 w-5" />, title: "Barrierefreiheit", description: "WCAG-konforme Websites, die für alle Nutzer zugänglich und bedienbar sind." },
    ]}
    process={[
      { step: "Discovery & Wireframing", desc: "Anforderungsanalyse, User Research und strukturelle Konzeption Ihrer Website." },
      { step: "Design & Prototyping", desc: "Visuelles Design mit interaktiven Prototypen und Feedback-Schleifen." },
      { step: "Entwicklung", desc: "Saubere React-Entwicklung mit Fokus auf Performance und Wartbarkeit." },
      { step: "Launch & Optimierung", desc: "Go-Live mit Performance-Monitoring und iterativer Conversion-Optimierung." },
    ]}
    strategyTitle="Design trifft Technik"
    strategyDescription="Schöne Websites, die nicht konvertieren, sind wertlos. Wir bauen beides – Ästhetik und Ergebnis."
    strategyPoints={[
      { text: "Nutzerzentrierter Design-Prozess mit echtem User Research" },
      { text: "Komponenten-basierte React-Architektur für Skalierbarkeit" },
      { text: "Lighthouse-Scores über 90 auf allen Seiten" },
      { text: "Continuous Improvement durch datenbasierte Optimierung" },
    ]}
    growthTitle="Digitale Exzellenz"
    growthDescription="Ihre Website als leistungsstärkstes Vertriebsinstrument – schnell, überzeugend, messbar."
    growthPoints={[
      { text: "Höhere Conversion-Raten durch optimiertes UI/UX" },
      { text: "Bessere Rankings durch Performance-Exzellenz" },
      { text: "Niedrigere Absprungraten und längere Verweildauer" },
      { text: "Skalierbare Codebasis für zukünftiges Wachstum" },
    ]}
  />
);

export default OnPageOptimierung;
