import ServicePageLayout from "@/components/ServicePageLayout";
import { ShoppingCart, Layers, TrendingUp, Wrench, Code2, BarChart3 } from "lucide-react";

const ECommerceSEO = () => (
  <ServicePageLayout
    title="E-Commerce-Lösungen"
    subtitle="Shop-Skalierung · Shopify & WooCommerce"
    description="Mehr Umsatz für Ihren Online-Shop. Spezialisierte Optimierung für Shopify, WooCommerce und individuelle Shop-Systeme – von der Produktseite bis zur Checkout-Conversion."
    features={[
      { icon: <ShoppingCart className="h-5 w-5" />, title: "Produktseiten-Optimierung", description: "Conversion-optimierte Produktseiten mit überzeugenden Beschreibungen und Rich Snippets." },
      { icon: <Layers className="h-5 w-5" />, title: "Shop-Architektur", description: "Optimale Kategoriestruktur und Navigation für maximale Nutzerfreundlichkeit." },
      { icon: <Wrench className="h-5 w-5" />, title: "Shopify & WooCommerce", description: "Plattformspezifische Optimierung und Entwicklung für die führenden E-Commerce-Systeme." },
      { icon: <Code2 className="h-5 w-5" />, title: "UX-Optimierung", description: "Reibungsloser Checkout-Prozess und intuitive Nutzerführung für höhere Abschlussraten." },
      { icon: <TrendingUp className="h-5 w-5" />, title: "Conversion-Steigerung", description: "Datenbasierte Optimierung aller Touchpoints für messbar mehr Umsatz." },
      { icon: <BarChart3 className="h-5 w-5" />, title: "E-Commerce-Analytics", description: "Vollständiges Tracking und Attribution für fundierte Geschäftsentscheidungen." },
    ]}
    process={[
      { step: "Shop-Audit", desc: "Umfassende Analyse Ihres Online-Shops und aller Conversion-Barrieren." },
      { step: "Strategie", desc: "Maßgeschneiderte Roadmap für Shop-Optimierung und Umsatzsteigerung." },
      { step: "Umsetzung", desc: "Technische und inhaltliche Optimierung aller Shop-Bereiche." },
      { step: "Skalierung", desc: "Performance-Tracking, A/B-Tests und iterative Wachstumsoptimierung." },
    ]}
    strategyTitle="Shop-Expertise"
    strategyDescription="Wir kennen die Erfolgsfaktoren im E-Commerce – von der Produktsuche bis zum Checkout."
    strategyPoints={[
      { text: "Plattformspezifisches Know-how für Shopify und WooCommerce" },
      { text: "Conversion-optimierte Customer Journey" },
      { text: "SEO-Strategien speziell für Online-Shops" },
      { text: "Datenbasierte Entscheidungen statt Bauchgefühl" },
    ]}
    growthTitle="Mehr Umsatz"
    growthDescription="Messbar mehr Verkäufe durch systematische Optimierung Ihres gesamten Shops."
    growthPoints={[
      { text: "Höhere Conversion-Raten im gesamten Funnel" },
      { text: "Steigende organische Sichtbarkeit für Produkte" },
      { text: "Niedrigere Warenkorbabbruchrate" },
      { text: "Besserer ROI durch optimierte Werbeausgaben" },
    ]}
  />
);

export default ECommerceSEO;
