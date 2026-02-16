import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, MapPin, ShoppingCart } from "lucide-react";
import imgLustaufeis from "@/assets/portfolio-lustaufeis.webp";
import imgEismaschine from "@/assets/portfolio-eismaschine.webp";
import imgEiscafe from "@/assets/portfolio-eiscafe.webp";

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
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-blue-600">Referenzen</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Ausgewählte Referenzen & Eigene Projekte
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-500">
            Wir sprechen nicht nur über Ergebnisse, wir liefern sie. Hier sehen Sie Beispiele unserer datengetriebenen Arbeit in der Praxis – von lokalem Business bis zum E-Commerce Shop.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {cases.map((c, i) => (
            <motion.a
              key={c.name}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-white transition-all duration-300 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-600/5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Screenshot in browser mockup */}
              <div className="relative overflow-hidden bg-slate-50 p-4 pb-0">
                <div className="rounded-t-lg border border-slate-200 bg-white shadow-sm">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-1.5 border-b border-slate-100 px-3 py-2">
                    <div className="h-2 w-2 rounded-full bg-slate-200" />
                    <div className="h-2 w-2 rounded-full bg-slate-200" />
                    <div className="h-2 w-2 rounded-full bg-slate-200" />
                    <div className="ml-2 flex-1 rounded bg-slate-50 px-2 py-0.5 text-[10px] text-slate-400">
                      {c.url.replace("https://", "")}
                    </div>
                  </div>
                  <div className="h-44 overflow-hidden">
                    <img
                      src={c.image}
                      alt={`Screenshot von ${c.name}`}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-600">
                      {c.icon}
                      {c.category}
                    </span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-slate-300 transition-all group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                <h3 className="mt-3 text-lg font-bold text-slate-900">{c.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{c.desc}</p>

                {/* Honest results */}
                <ul className="mt-4 space-y-1.5">
                  {c.results.map((r, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-slate-600">
                      <TrendingUp className="h-3 w-3 flex-shrink-0 text-blue-600" />
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
