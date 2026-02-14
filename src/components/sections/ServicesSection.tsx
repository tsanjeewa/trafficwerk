import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Settings, FileText, Link2, PenTool, MapPin, Globe, MousePointerClick, Users, ShoppingCart, Sparkles
} from "lucide-react";

const services = [
  { icon: Settings, title: "Technische SEO", desc: "Crawling, Indexierung und technische Performance optimieren", path: "/services/technische-seo" },
  { icon: FileText, title: "On-Page Optimierung", desc: "Content, Meta-Tags und interne Verlinkung perfektionieren", path: "/services/on-page-optimierung" },
  { icon: Link2, title: "Off-Page / Linkbuilding", desc: "Hochwertige Backlinks für mehr Domain-Autorität", path: "/services/off-page-linkbuilding" },
  { icon: PenTool, title: "Content Marketing", desc: "Strategische Inhalte, die ranken und konvertieren", path: "/services/content-marketing" },
  { icon: MapPin, title: "Lokale SEO", desc: "Regionale Sichtbarkeit und Google Maps Optimierung", path: "/services/lokale-seo" },
  { icon: Globe, title: "Internationale SEO", desc: "Mehrsprachige SEO-Strategien für globale Märkte", path: "/services/internationale-seo" },
  { icon: MousePointerClick, title: "Google Ads (SEA)", desc: "Performance-Marketing mit maximaler Effizienz", path: "/services/google-ads" },
  { icon: Users, title: "Lead-Generierung", desc: "Qualifizierte Leads durch gezielte SEO-Strategien", path: "/services/lead-generierung" },
  { icon: ShoppingCart, title: "E-Commerce SEO", desc: "Shop-Optimierung für mehr Umsatz und Sichtbarkeit", path: "/services/e-commerce-seo" },
  { icon: Sparkles, title: "AI-Search (GEO)", desc: "Optimierung für KI-basierte Suchergebnisse", path: "/services/ai-search-optimization" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24">
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
