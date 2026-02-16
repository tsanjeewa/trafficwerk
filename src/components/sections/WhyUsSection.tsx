import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Search, MousePointerClick, Monitor, ShoppingCart, Heart, PenTool, Sparkles, Gauge, MapPin, Compass, ArrowRight
} from "lucide-react";

const services = [
  { icon: Search, title: "SEO-Strategie", subtitle: "Datengetrieben · Nachhaltig · Skalierbar", desc: "Nachhaltiges Wachstum beginnt mit der richtigen Strategie. Wir entwickeln datengestützte SEO-Roadmaps, die Ihre organische Sichtbarkeit systematisch und langfristig steigern.", path: "/services/technische-seo" },
  { icon: MousePointerClick, title: "Performance Marketing", subtitle: "SEA · Google & Meta Ads · ROI-Optimierung", desc: "Maximale Effizienz mit datengetriebenen Werbekampagnen. Wir steuern und optimieren Ihre Ads-Kampagnen für messbar höheren Return on Investment.", path: "/services/google-ads" },
  { icon: Monitor, title: "Webdesign & Entwicklung", subtitle: "UI/UX · React · Conversion-Optimierung", desc: "Hochperformante Webseiten, die begeistern und konvertieren. Wir verbinden modernes UI/UX-Design mit React-Performance.", path: "/services/on-page-optimierung" },
  { icon: ShoppingCart, title: "E-Commerce-Lösungen", subtitle: "Shop-Skalierung · Shopify & WooCommerce", desc: "Mehr Umsatz für Ihren Online-Shop. Spezialisierte Optimierung für Shopify, WooCommerce und individuelle Shop-Systeme.", path: "/services/e-commerce-seo" },
  { icon: Heart, title: "Social Media Marketing", subtitle: "Strategie · Branding · Community", desc: "Starke Marken entstehen durch echte Verbindungen. Wir entwickeln Social-Media-Strategien, die Ihre Community begeistern.", path: "/services/off-page-linkbuilding" },
  { icon: PenTool, title: "Content Creation", subtitle: "Copywriting · Kreatives Design · Storytelling", desc: "Inhalte, die wirken. Von strategischem Copywriting bis zu visuellem Design – Content, der zum Handeln bewegt.", path: "/services/content-marketing" },
  { icon: Sparkles, title: "KI-Optimierung (GEO)", subtitle: "Generative Engine Optimization · AI-Search", desc: "Machen Sie Ihre Marke sichtbar in der neuen Ära der KI-Suche. Optimierung für Google AI Overviews, ChatGPT und Perplexity.", path: "/services/ai-search-optimization" },
  { icon: Gauge, title: "Performance & Speed", subtitle: "Core Web Vitals · Ladezeiten · Server", desc: "Geschwindigkeit ist Umsatz. Wir optimieren Ihre Core Web Vitals, Server-Infrastruktur und Frontend-Performance.", path: "/services/lead-generierung" },
  { icon: MapPin, title: "Lokale & Globale SEO", subtitle: "Google Maps · Regional · International", desc: "Ob hyper-lokale Sichtbarkeit oder strategische Expansion in internationale Märkte – wir machen Sie dort sichtbar, wo Ihre Kunden suchen.", path: "/services/lokale-seo" },
  { icon: Compass, title: "Digitale Strategie", subtitle: "Transformation · Beratung · Ganzheitlich", desc: "Von der Vision zur messbaren Wirkung. Ganzheitliche digitale Strategien, die alle Kanäle orchestrieren.", path: "/services/internationale-seo" },
];

const WhyUsSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-blue-600">Unsere Expertise</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Ganzheitliche Lösungen für Ihr digitales Wachstum
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-500">
            Wir kombinieren Kreativität mit Technologie, um messbare Ergebnisse für Ihr Unternehmen zu erzielen – von SEO bis hin zur kompletten Web-Entwicklung.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {services.map((s, i) => (
            <motion.div
              key={s.path}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Link
                to={s.path}
                className="group flex h-full gap-5 rounded-2xl border border-slate-100 bg-white p-6 transition-all duration-300 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-600/5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-slate-900">{s.title}</h3>
                    <ArrowRight className="h-4 w-4 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-blue-600" />
                  </div>
                  <p className="mt-0.5 text-xs font-medium text-blue-600/70">{s.subtitle}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
