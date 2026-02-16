import ServicePageLayout from "@/components/ServicePageLayout";
import { MapPin, Star, Building, Navigation, Globe, Users } from "lucide-react";

const LokaleSEO = () => (
  <ServicePageLayout
    title="Lokale SEO"
    subtitle="Regionale Sichtbarkeit"
    description="Werden Sie in Ihrer Region zur ersten Anlaufstelle. Google Maps dominieren, lokale Suchergebnisse beherrschen und regionale Kunden gezielt erreichen."
    features={[
      { icon: <MapPin className="h-6 w-6" />, title: "Google Maps Optimierung", description: "Top-Platzierungen im Google Local Pack für maximale lokale Sichtbarkeit." },
      { icon: <Star className="h-6 w-6" />, title: "Bewertungsmanagement", description: "Systematischer Aufbau positiver Kundenbewertungen und professionelles Reputationsmanagement." },
      { icon: <Building className="h-6 w-6" />, title: "Google Business Profile", description: "Vollständige Optimierung Ihres Unternehmensprofils für bessere lokale Rankings." },
      { icon: <Navigation className="h-6 w-6" />, title: "Lokale Citations", description: "Konsistente Einträge in relevanten Branchenverzeichnissen und lokalen Plattformen." },
      { icon: <Globe className="h-6 w-6" />, title: "Lokale Landingpages", description: "Standortspezifische Seiten für optimale Auffindbarkeit in mehreren Regionen." },
      { icon: <Users className="h-6 w-6" />, title: "Regionale Keyword-Strategie", description: "Gezielte Keyword-Recherche für lokale Suchbegriffe und regionale Suchintentionen." },
    ]}
    process={[
      { step: "Lokale Analyse", desc: "Umfassende Analyse der lokalen Suchlandschaft, Ihrer Wettbewerber und bestehender Einträge." },
      { step: "Profil- & Content-Optimierung", desc: "Google Business Profile optimieren, lokale Inhalte erstellen und Citations aufbauen." },
      { step: "Bewertungsstrategie & Monitoring", desc: "Systematischer Aufbau von Kundenbewertungen und laufende Überwachung Ihrer lokalen Rankings." },
    ]}
  />
);

export default LokaleSEO;
