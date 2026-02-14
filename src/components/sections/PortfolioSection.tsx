import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    name: "lustaufeis24.de",
    url: "https://lustaufeis24.de",
    desc: "E-Commerce SEO für einen der führenden Online-Shops für Eismaschinen und Eiszubehör.",
    result: "+520% Traffic",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&h=400&fit=crop",
  },
  {
    name: "eismaschine.de",
    url: "https://eismaschine.de",
    desc: "Content-Strategie und technische SEO für die führende Informationsplattform rund um Eismaschinen.",
    result: "+380% Sichtbarkeit",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=400&fit=crop",
  },
  {
    name: "eiscafe-florenz-leipzig.de",
    url: "https://eiscafe-florenz-leipzig.de",
    desc: "Lokale SEO-Optimierung für ein traditionsreiches Eiscafé in Leipzig mit Google Maps Integration.",
    result: "+290% lokale Anfragen",
    image: "https://images.unsplash.com/photo-1516559828984-fb3b99548b21?w=600&h=400&fit=crop",
  },
];

const PortfolioSection = () => {
  return (
    <section className="section-alt py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">Portfolio</span>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
            Unsere Erfolgsprojekte
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {cases.map((c, i) => (
            <motion.a
              key={c.name}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-xl border border-border/50 bg-card transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-48 overflow-hidden">
                <img src={c.image} alt={c.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold">{c.name}</h3>
                  <ArrowUpRight className="h-4 w-4 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                <span className="mt-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {c.result}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
