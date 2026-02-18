import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, MapPin, ShoppingCart } from "lucide-react";
import imgLustaufeis from "@/assets/portfolio-lustaufeis-real.webp";
import imgEismaschine from "@/assets/portfolio-eismaschine-real.webp";
import imgEiscafe from "@/assets/portfolio-eiscafe-real.webp";

const cases = [
  {
    name: "lustaufeis24.de",
    url: "https://lustaufeis24.de",
    category: "E-Commerce SEO",
    icon: <ShoppingCart className="h-4 w-4" />,
    desc: "Ganzheitliche SEO-Strategie und Shop-Optimierung für einen der führenden Online-Shops für Eismaschinen und Eiszubehör.",
    results: [
      "Organische Sichtbarkeit signifikant gesteigert",
      "Top-Rankings für umsatzrelevante Keywords",
      "Conversion-Rate nachhaltig verbessert",
    ],
    image: imgLustaufeis,
  },
  {
    name: "eismaschine.de",
    url: "https://eismaschine.de",
    category: "Nischen-Dominanz & Content",
    icon: <TrendingUp className="h-4 w-4" />,
    desc: "Content-Strategie und technische SEO für die führende deutschsprachige Informationsplattform rund um Eismaschinen.",
    results: [
      "Marktführende Position in der Nische aufgebaut",
      "Umfassende Themendominanz im Themencluster",
      "Qualifizierten Traffic kontinuierlich gesteigert",
    ],
    image: imgEismaschine,
  },
  {
    name: "eiscafe-florenz-leipzig.de",
    url: "https://eiscafe-florenz-leipzig.de",
    category: "Lokale SEO & Google Maps",
    icon: <MapPin className="h-4 w-4" />,
    desc: "Lokale SEO-Optimierung und Google Business Profile Management für ein traditionsreiches Eiscafé in Leipzig.",
    results: [
      "Lokale Dominanz im Google Maps Pack",
      "Steigende Anfragen und Laufkundschaft",
      "Bewertungsprofil systematisch aufgebaut",
    ],
    image: imgEiscafe,
  },
];

const PortfolioSection = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-primary">Referenzen</span>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground md:mt-4 md:text-4xl">
            Ausgewählte Referenzen & Eigene Projekte
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Wir sprechen nicht nur über Ergebnisse, wir liefern sie. Beispiele unserer datengestützten Arbeit in der Praxis – von lokalem Business bis zum E-Commerce Shop.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
          {cases.map((c, i) => (
            <motion.a
              key={c.name}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="nc-card group overflow-hidden rounded-xl border transition-all duration-300 hover:border-primary/20"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Screenshot in browser mockup */}
              <div className="relative overflow-hidden bg-muted p-4 pb-0">
                <div className="rounded-t-lg border border-border bg-background shadow-sm">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
                    <div className="h-2 w-2 rounded-full bg-muted-foreground/20" />
                    <div className="h-2 w-2 rounded-full bg-muted-foreground/20" />
                    <div className="h-2 w-2 rounded-full bg-muted-foreground/20" />
                    <div className="ml-2 flex-1 rounded bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">
                      {c.url.replace("https://", "")}
                    </div>
                  </div>
                  <div className="h-44 overflow-hidden">
                    <img
                      src={c.image}
                      alt={`Screenshot von ${c.name} – ${c.category}`}
                      loading="lazy"
                      width={400}
                      height={176}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
                      {c.icon}
                      {c.category}
                    </span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground/40 transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                <h3 className="mt-3 text-lg font-bold text-foreground">{c.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>

                {/* Honest results */}
                <ul className="mt-4 space-y-1.5">
                  {c.results.map((r, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-foreground/70">
                      <TrendingUp className="h-3 w-3 flex-shrink-0 text-primary" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
