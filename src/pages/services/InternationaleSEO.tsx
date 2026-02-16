import ServicePageLayout from "@/components/ServicePageLayout";
import { Globe2, Languages, MapPin, Search, TrendingUp, BarChart3 } from "lucide-react";

const InternationaleSEO = () => (
  <ServicePageLayout
    title="Internationale SEO"
    subtitle="Globales Wachstum · Markt-Erschließung · Hreflang"
    description="Erobern Sie neue Märkte weltweit. Von der Hreflang-Implementierung über mehrsprachige Keyword-Strategien bis zur kulturellen Content-Anpassung – wir machen Sie international sichtbar."
    features={[
      { icon: <Globe2 className="h-5 w-5" />, title: "Hreflang-Implementierung", description: "Technisch einwandfreie Sprachauszeichnung für korrekte Ausspielung in Zielmärkten." },
      { icon: <Languages className="h-5 w-5" />, title: "Mehrsprachige Keyword-Strategie", description: "Marktspezifische Keyword-Recherche – keine Übersetzung, sondern echte Lokalisierung." },
      { icon: <Search className="h-5 w-5" />, title: "Lokale Suchmaschinen", description: "Optimierung für Baidu, Yandex, Naver und weitere regionale Suchmaschinen." },
      { icon: <MapPin className="h-5 w-5" />, title: "Marktspezifische Domains", description: "ccTLD-, Subdomain- und Verzeichnis-Strategien für optimale internationale Struktur." },
      { icon: <TrendingUp className="h-5 w-5" />, title: "Content-Lokalisierung", description: "Kulturell angepasste Inhalte statt bloßer Übersetzung für jeden Zielmarkt." },
      { icon: <BarChart3 className="h-5 w-5" />, title: "Internationales Reporting", description: "Marktspezifische KPI-Dashboards für globale Performance-Übersicht." },
    ]}
    process={[
      { step: "Marktanalyse", desc: "Bewertung der Zielmärkte, Wettbewerber und Suchlandschaft." },
      { step: "Technisches Setup", desc: "Hreflang, Domain-Strategie und technische Infrastruktur." },
      { step: "Lokalisierung", desc: "Keyword-Strategien und kulturell angepasster Content." },
      { step: "Expansion", desc: "Ranking-Monitoring und schrittweise Erschließung weiterer Märkte." },
    ]}
    strategyTitle="Global denken"
    strategyDescription="Internationale SEO erfordert mehr als Übersetzung – es braucht echtes Marktverständnis."
    strategyPoints={[
      { text: "Marktspezifische Keyword-Recherche und Suchverhalten" },
      { text: "Technisch einwandfreie internationale Seitenarchitektur" },
      { text: "Kulturelle Anpassung statt wörtlicher Übersetzung" },
      { text: "Lokale Backlink-Strategien für jeden Zielmarkt" },
    ]}
    growthTitle="Globale Reichweite"
    growthDescription="Erschließen Sie neue Märkte und skalieren Sie Ihren Erfolg international."
    growthPoints={[
      { text: "Sichtbarkeit in neuen Zielmärkten aufbauen" },
      { text: "Qualifizierter internationaler Traffic" },
      { text: "Stärkere Markenposition weltweit" },
      { text: "Nachhaltige Umsatzquellen in neuen Regionen" },
    ]}
  />
);

export default InternationaleSEO;
