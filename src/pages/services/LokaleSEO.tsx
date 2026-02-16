import ServicePageLayout from "@/components/ServicePageLayout";
import { MapPin, Globe2, Star, Languages, Navigation, Search } from "lucide-react";

const LokaleSEO = () => (
  <ServicePageLayout
    title="Lokale & Globale SEO"
    subtitle="Google Maps · Internationale Markterschließung"
    description="Von der lokalen Sichtbarkeit bis zur internationalen Expansion. Wir optimieren Ihre Präsenz in Google Maps, lokalen Suchergebnissen und globalen Zielmärkten."
    features={[
      { icon: <MapPin className="h-5 w-5" />, title: "Google Maps Optimierung", description: "Top-Platzierungen im Local Pack für maximale regionale Sichtbarkeit." },
      { icon: <Star className="h-5 w-5" />, title: "Bewertungsmanagement", description: "Systematischer Aufbau positiver Bewertungen und professionelles Reputationsmanagement." },
      { icon: <Navigation className="h-5 w-5" />, title: "Lokale Citations", description: "Konsistente Einträge in relevanten Verzeichnissen für starke lokale Signale." },
      { icon: <Globe2 className="h-5 w-5" />, title: "Internationale SEO", description: "Hreflang-Implementierung und mehrsprachige Keyword-Strategien für globale Märkte." },
      { icon: <Languages className="h-5 w-5" />, title: "Content-Lokalisierung", description: "Kulturell angepasste Inhalte statt bloßer Übersetzung für jeden Zielmarkt." },
      { icon: <Search className="h-5 w-5" />, title: "Marktspezifische Optimierung", description: "Anpassung an lokale Suchmaschinen und regionale Suchgewohnheiten weltweit." },
    ]}
    process={[
      { step: "Markt- & Standortanalyse", desc: "Analyse der lokalen und internationalen Suchlandschaft, Wettbewerber und bestehenden Einträge." },
      { step: "Optimierung & Lokalisierung", desc: "Google Business Profile, lokale Inhalte, Hreflang-Setup und kulturell angepasster Content." },
      { step: "Monitoring & Expansion", desc: "Ranking-Überwachung, Bewertungsstrategie und schrittweise Expansion in weitere Märkte." },
    ]}
  />
);

export default LokaleSEO;
