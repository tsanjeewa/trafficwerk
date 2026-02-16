import ServicePageLayout from "@/components/ServicePageLayout";
import { MapPin, Star, Navigation, Search, Building2, Phone } from "lucide-react";

const LokaleSEO = () => (
  <ServicePageLayout
    title="Lokale SEO"
    subtitle="Google Maps · Local Pack · Regionale Dominanz"
    description="Werden Sie die erste Wahl in Ihrer Region. Top-Platzierungen in Google Maps, lokalen Suchergebnissen und Branchenverzeichnissen – für maximale regionale Sichtbarkeit."
    features={[
      { icon: <MapPin className="h-5 w-5" />, title: "Google Maps Optimierung", description: "Top-Platzierungen im Local Pack für maximale regionale Sichtbarkeit und Laufkundschaft." },
      { icon: <Star className="h-5 w-5" />, title: "Bewertungsmanagement", description: "Systematischer Aufbau positiver Bewertungen und professionelles Reputationsmanagement." },
      { icon: <Navigation className="h-5 w-5" />, title: "Lokale Citations", description: "Konsistente Einträge in allen relevanten Verzeichnissen für starke lokale Signale." },
      { icon: <Building2 className="h-5 w-5" />, title: "Google Business Profile", description: "Vollständig optimiertes Profil mit Posts, Fotos und aktiven Q&A-Antworten." },
      { icon: <Search className="h-5 w-5" />, title: "Lokale Keywords", description: "Ortsspezifische Keyword-Strategie für regionale Suchanfragen mit Kaufabsicht." },
      { icon: <Phone className="h-5 w-5" />, title: "Click-to-Call Optimierung", description: "Mobile-first Strategie für sofortige Kontaktaufnahme und Anfragen." },
    ]}
    process={[
      { step: "Standortanalyse", desc: "Analyse der lokalen Suchlandschaft und Ihrer bestehenden Einträge." },
      { step: "Profil-Optimierung", desc: "Google Business Profile und alle Verzeichniseinträge optimieren." },
      { step: "Bewertungsstrategie", desc: "Systematischer Aufbau authentischer positiver Bewertungen." },
      { step: "Local Dominance", desc: "Ranking-Monitoring und Ausbau der regionalen Sichtbarkeit." },
    ]}
    strategyTitle="Regional stark"
    strategyDescription="Lokale Suchen haben die höchste Kaufabsicht. Wir machen Sie zur ersten Wahl."
    strategyPoints={[
      { text: "Optimiertes Google Business Profile als Aushängeschild" },
      { text: "Konsistente NAP-Daten in allen Verzeichnissen" },
      { text: "Aktives Bewertungsmanagement und Reputation" },
      { text: "Lokaler Content mit regionalem Bezug" },
    ]}
    growthTitle="Mehr Kunden vor Ort"
    growthDescription="Von der lokalen Suche direkt in Ihr Geschäft – messbar und nachhaltig."
    growthPoints={[
      { text: "Top-3 Platzierungen im Local Pack" },
      { text: "Steigende Anrufe und Wegbeschreibungsanfragen" },
      { text: "Mehr positive Bewertungen und höherer Score" },
      { text: "Wachsende lokale Markenbekanntheit" },
    ]}
  />
);

export default LokaleSEO;
