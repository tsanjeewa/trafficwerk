import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Search, MousePointerClick, Monitor, ShoppingCart, Heart, PenTool, Sparkles, Gauge, MapPin, Compass
} from "lucide-react";

const services = [
  { icon: Search, title: "SEO-Strategie", desc: "Nachhaltige Sichtbarkeit durch datengestützte Suchmaschinenoptimierung.", path: "/services/technische-seo" },
  { icon: MousePointerClick, title: "Performance Marketing", desc: "Maximale Leads und Sales durch effiziente Google & Meta Ads.", path: "/services/google-ads" },
  { icon: Monitor, title: "Webdesign & Entwicklung", desc: "Hochperformante Webseiten, die Besucher in treue Kunden verwandeln.", path: "/services/on-page-optimierung" },
  { icon: ShoppingCart, title: "E-Commerce-Lösungen", desc: "Skalierung von Online-Shops durch gezielte Conversion-Optimierung.", path: "/services/e-commerce-seo" },
  { icon: Heart, title: "Social Media Marketing", desc: "Markenaufbau und Community-Management auf allen relevanten Kanälen.", path: "/services/off-page-linkbuilding" },
  { icon: PenTool, title: "Content Creation", desc: "Hochwertiges Copywriting und kreatives Design für Ihre Markenbotschaft.", path: "/services/content-marketing" },
  { icon: Sparkles, title: "KI-Optimierung (GEO)", desc: "Optimierung für die KI-basierte Suche und generative Suchmaschinen.", path: "/services/ai-search-optimization" },
  { icon: Gauge, title: "Performance & Speed", desc: "Maximale Ladezeiten und technische Exzellenz für bessere Rankings.", path: "/services/lead-generierung" },
  { icon: MapPin, title: "Lokale & Globale SEO", desc: "Sichtbarkeit in Ihrer Region oder auf internationalen Märkten.", path: "/services/lokale-seo" },
  { icon: Compass, title: "Digitale Strategie", desc: "Ganzheitliche Beratung für Ihre nachhaltige digitale Transformation.", path: "/services/internationale-seo" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-14">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">Leistungen</span>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
            Unsere SEO-Expertise
          </h2>
          <p className="mt-4 text-muted-foreground">
            Von technischer Optimierung bis KI-basierter Suchmaschinenoptimierung – wir decken das gesamte Spektrum ab.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
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
                className="group block h-full rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <s.icon className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
                <h3 className="mt-4 font-display text-sm font-semibold">{s.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
