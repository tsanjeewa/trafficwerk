import ServicePageLayout from "@/components/ServicePageLayout";
import { ShoppingCart, Layers, Code2, Copy, Wrench, TrendingUp } from "lucide-react";

const ECommerceSEO = () => (
  <ServicePageLayout
    title="E-Commerce SEO"
    subtitle="Shop-Optimierung"
    description="Mehr Umsatz für Ihren Online-Shop. Spezialisierte E-Commerce SEO für Shopify, WooCommerce und individuelle Shop-Systeme – von der Produktseite bis zur Checkout-Optimierung."
    features={[
      { icon: <ShoppingCart className="h-6 w-6" />, title: "Produktseiten-Optimierung", description: "Conversion-optimierte Produktseiten mit SEO-gerechten Beschreibungen und Rich Snippets." },
      { icon: <Layers className="h-6 w-6" />, title: "Kategorie-Architektur", description: "Optimale Kategoriestruktur und interne Verlinkung für maximale Crawl-Effizienz." },
      { icon: <Code2 className="h-6 w-6" />, title: "Strukturierte Daten", description: "Product-Markup, Bewertungen und Preise für auffällige Rich Snippets in den SERPs." },
      { icon: <Copy className="h-6 w-6" />, title: "Duplicate Content", description: "Lösung von Duplicate-Content-Problemen durch Canonical-Tags, Filter und Paginierung." },
      { icon: <Wrench className="h-6 w-6" />, title: "Shopify & WooCommerce", description: "Plattformspezifische Optimierung für die führenden E-Commerce-Systeme." },
      { icon: <TrendingUp className="h-6 w-6" />, title: "Umsatz-Tracking", description: "Vollständiges E-Commerce-Tracking und Attribution für datenbasierte Entscheidungen." },
    ]}
    process={[
      { step: "Shop-Audit & Keyword-Mapping", desc: "Umfassende Analyse Ihres Online-Shops und Entwicklung einer Keyword-Strategie für Kategorien und Produkte." },
      { step: "Technische & inhaltliche Optimierung", desc: "Optimierung der Shop-Architektur, Produktseiten, Meta-Daten und strukturierten Daten." },
      { step: "Monitoring & Revenue-Optimierung", desc: "Umsatz-Tracking, Ranking-Monitoring und kontinuierliche Optimierung für nachhaltiges Wachstum." },
    ]}
  />
);

export default ECommerceSEO;
