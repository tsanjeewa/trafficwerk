import { motion } from "framer-motion";
import { TrendingUp, Target, Zap, BarChart3 } from "lucide-react";

const approaches = [
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: "Datengetriebene Analyse",
    desc: "Jede Entscheidung basiert auf Daten aus Search Console, Analytics und professionellen SEO-Tools.",
  },
  {
    icon: <Target className="h-5 w-5" />,
    title: "Fokussierte Strategie",
    desc: "Klare Priorisierung nach Impact – wir arbeiten zuerst an dem, was den größten Unterschied macht.",
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "Nachhaltige Ergebnisse",
    desc: "Langfristige Sichtbarkeit statt kurzfristiger Tricks. Unsere Arbeit wirkt auch in 12 Monaten noch.",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Agile Umsetzung",
    desc: "Kurze Iterationszyklen mit transparentem Reporting – damit Sie jederzeit den Fortschritt sehen.",
  },
];

const ResultsSection = () => {
  return (
    <section className="border-t border-slate-100 py-14">
      <div className="container mx-auto px-6">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-blue-600">Unser Ansatz</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            So arbeiten wir
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-slate-500">
            Transparenz, Daten und Handwerk – die Grundlagen unserer Arbeit.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {approaches.map((a, i) => (
            <motion.div
              key={a.title}
              className="rounded-2xl border border-slate-100 bg-white p-6 transition-all hover:border-blue-100 hover:shadow-lg hover:shadow-blue-600/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                {a.icon}
              </div>
              <h3 className="mt-4 text-sm font-bold text-slate-900">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
