import ServicePageLayout from "@/components/ServicePageLayout";
import { Globe2, Languages, Network, Map, Search, TrendingUp } from "lucide-react";

const InternationaleSEO = () => (
  <ServicePageLayout
    title="Internationale SEO"
    subtitle="Globale Märkte"
    description="Expandieren Sie erfolgreich in neue Märkte mit mehrsprachigen SEO-Strategien. Hreflang-Implementierung, internationale Domain-Strukturen und kulturell lokalisierte Inhalte."
    features={[
      { icon: <Languages className="h-6 w-6" />, title: "Mehrsprachige Keyword-Recherche", description: "Native Keyword-Analyse für jeden Zielmarkt – keine bloße Übersetzung, sondern echte Lokalisierung." },
      { icon: <Globe2 className="h-6 w-6" />, title: "Hreflang-Implementierung", description: "Technisch korrekte Hreflang-Tags für fehlerfreie Sprachzuordnung durch Suchmaschinen." },
      { icon: <Network className="h-6 w-6" />, title: "Domain-Strategie", description: "Optimale Wahl zwischen ccTLDs, Subdomains und Unterverzeichnissen für Ihre Zielmärkte." },
      { icon: <Map className="h-6 w-6" />, title: "Kulturelle Lokalisierung", description: "Inhalte, die kulturelle Nuancen und lokale Suchgewohnheiten berücksichtigen." },
      { icon: <Search className="h-6 w-6" />, title: "Lokale Suchmaschinen", description: "Optimierung für Baidu, Yandex, Naver und weitere marktspezifische Suchmaschinen." },
      { icon: <TrendingUp className="h-6 w-6" />, title: "Internationales Linkbuilding", description: "Aufbau länderspezifischer Backlink-Profile für Autorität in jedem Zielmarkt." },
    ]}
    process={[
      { step: "Marktanalyse & Strategie", desc: "Bewertung der Zielmärkte, Suchverhalten und Wettbewerb – inklusive technischer Internationalisierungsplanung." },
      { step: "Technische Umsetzung & Lokalisierung", desc: "Hreflang-Setup, URL-Struktur und kulturell angepasste Inhalte für jeden Zielmarkt." },
      { step: "Skalierung & Expansion", desc: "Schrittweise Expansion in weitere Märkte mit datenbasierter Priorisierung und laufender Optimierung." },
    ]}
  />
);

export default InternationaleSEO;
