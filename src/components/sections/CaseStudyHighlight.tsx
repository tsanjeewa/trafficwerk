import { motion } from "framer-motion";
import { TrendingUp, Search, ShoppingCart, Star } from "lucide-react";

const highlights = [
  { icon: <ShoppingCart className="h-5 w-5" />, label: "E-Commerce", text: "Organische Sichtbarkeit und Umsatz für lustaufeis24.de nachhaltig gesteigert." },
  { icon: <Search className="h-5 w-5" />, label: "Nischen-SEO", text: "eismaschine.de zur führenden Informationsplattform in der Nische entwickelt." },
  { icon: <Star className="h-5 w-5" />, label: "Lokale SEO", text: "Eiscafé Florenz Leipzig im Google Maps Local Pack dauerhaft positioniert." },
];

const CaseStudyHighlight = () => {
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
          <span className="text-xs font-medium uppercase tracking-widest text-blue-600">Ergebnisse</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Echte Ergebnisse, echte Projekte
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-slate-500">
            Keine erfundenen Zahlen – sondern nachweisbare Resultate aus unseren eigenen Projekten.
          </p>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              className="rounded-2xl border border-slate-100 bg-white p-6 transition-all hover:border-blue-100 hover:shadow-lg hover:shadow-blue-600/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                {h.icon}
              </div>
              <h3 className="mt-4 text-sm font-bold text-slate-900">{h.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{h.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHighlight;
