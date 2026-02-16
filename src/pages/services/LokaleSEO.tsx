import ServicePageLayout from "@/components/ServicePageLayout";
import { MapPin, Globe2, Star, Navigation, Languages, Search } from "lucide-react";

const LokaleSEO = () => (
  <ServicePageLayout
    title="Lokale & Globale SEO"
    subtitle="Google Maps · Regionale Dominanz · Internationale Expansion"
    description="Ob hyper-lokale Sichtbarkeit in Ihrer Region oder strategische Expansion in internationale Märkte – wir machen Sie dort sichtbar, wo Ihre Kunden suchen."
    features={[
      { icon: <MapPin className="h-5 w-5" />, title: "Google Maps Optimierung", description: "Top-Platzierungen im Local Pack für maximale regionale Sichtbarkeit und qualifizierte Laufkundschaft." },
      { icon: <Star className="h-5 w-5" />, title: "Bewertungsmanagement", description: "Systematischer Aufbau positiver Bewertungen und professionelles Reputationsmanagement." },
      { icon: <Navigation className="h-5 w-5" />, title: "Google Business Profile", description: "Vollständig optimiertes Profil mit Posts, Fotos, Q&A und konsistenten NAP-Daten." },
      { icon: <Globe2 className="h-5 w-5" />, title: "Internationale Märkte", description: "Strategische Erschließung neuer Zielmärkte mit kulturell angepassten SEO-Strategien." },
      { icon: <Languages className="h-5 w-5" />, title: "Mehrsprachige SEO", description: "Hreflang-Implementierung und marktspezifische Keyword-Strategien statt bloßer Übersetzung." },
      { icon: <Search className="h-5 w-5" />, title: "Lokale Keywords", description: "Ortsspezifische Keyword-Strategien für Suchanfragen mit höchster Kaufabsicht." },
    ]}
    process={[
      { step: "Markt- & Standortanalyse", desc: "Lokale Suchlandschaft und internationale Marktpotenziale bewerten." },
      { step: "Profil- & Strukturoptimierung", desc: "Google Business Profile, Verzeichnisse und technische Infrastruktur aufsetzen." },
      { step: "Content-Lokalisierung", desc: "Regionale und kulturell angepasste Inhalte für jeden Zielmarkt erstellen." },
      { step: "Expansion & Monitoring", desc: "Performance tracken und schrittweise weitere Märkte erschließen." },
    ]}
    strategyTitle="Lokal dominieren, global wachsen"
    strategyDescription="Lokale Suchen haben die höchste Kaufabsicht. Internationale Märkte bieten das größte Potenzial. Wir verbinden beides."
    strategyPoints={[
      { text: "Hyper-lokale Optimierung für Ihre Kernregion" },
      { text: "Strategische internationale Expansion mit echtem Marktverständnis" },
      { text: "Konsistente NAP-Daten und Citations über alle Plattformen" },
      { text: "Kulturell angepasste Content-Strategien statt Übersetzung" },
    ]}
    growthTitle="Sichtbarkeit ohne Grenzen"
    growthDescription="Von der Nachbarschaft bis zum internationalen Markt – messbare Ergebnisse auf jedem Level."
    growthPoints={[
      { text: "Top-3 Platzierungen im lokalen Google Maps Pack" },
      { text: "Steigende Anrufe und Wegbeschreibungsanfragen" },
      { text: "Organischer Traffic aus neuen internationalen Zielmärkten" },
      { text: "Wachsende Markenbekanntheit regional und global" },
    ]}
  />
);

export default LokaleSEO;
