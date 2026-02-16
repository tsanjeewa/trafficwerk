import ServicePageLayout from "@/components/ServicePageLayout";
import { UserPlus, Filter, MousePointerClick, FormInput, BarChart3, Repeat } from "lucide-react";

const LeadGenerierung = () => (
  <ServicePageLayout
    title="Lead-Generierung"
    subtitle="B2B Leads & Conversion"
    description="Mehr qualifizierte Leads durch gezielte SEO- und Conversion-Strategien. Wir optimieren Ihren gesamten Funnel – von der ersten Suchanfrage bis zur Kontaktaufnahme."
    features={[
      { icon: <Filter className="h-6 w-6" />, title: "Sales Funnel Optimierung", description: "Strategische Gestaltung des gesamten Conversion-Funnels für maximale Lead-Qualität." },
      { icon: <UserPlus className="h-6 w-6" />, title: "B2B Lead-Strategien", description: "Spezialisierte Ansätze für B2B-Unternehmen zur Gewinnung qualifizierter Geschäftskontakte." },
      { icon: <MousePointerClick className="h-6 w-6" />, title: "Conversion-Optimierung", description: "Datenbasierte CRO für höhere Conversion-Rates auf allen relevanten Seiten." },
      { icon: <FormInput className="h-6 w-6" />, title: "Lead-Magneten", description: "Erstellung wertvoller Content-Offers wie Whitepapers, Checklisten und Webinare." },
      { icon: <Repeat className="h-6 w-6" />, title: "A/B Testing", description: "Systematisches Testing von Formularen, CTAs und Landingpages für stetige Verbesserung." },
      { icon: <BarChart3 className="h-6 w-6" />, title: "Lead-Tracking & Attribution", description: "Vollständige Nachverfolgung vom ersten Klick bis zum abgeschlossenen Lead." },
    ]}
    process={[
      { step: "Funnel-Analyse & Strategie", desc: "Analyse des bestehenden Lead-Funnels, Identifikation von Schwachstellen und Entwicklung einer datenbasierten Strategie." },
      { step: "Landingpage- & CTA-Optimierung", desc: "Optimierung aller Conversion-relevanten Elemente: Landingpages, Formulare, CTAs und Lead-Magneten." },
      { step: "Skalierung & Iteration", desc: "Erfolgreiche Ansätze skalieren, neue Kanäle erschließen und Conversion-Rates kontinuierlich steigern." },
    ]}
  />
);

export default LeadGenerierung;
