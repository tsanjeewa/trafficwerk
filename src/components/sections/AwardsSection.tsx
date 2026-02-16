import { motion } from "framer-motion";
import { Code2, BarChart3, ShieldCheck, Lock } from "lucide-react";

const qualities = [
  { icon: Code2, title: "Deep-Dive Audits", desc: "Wir analysieren jede Zeile Code für maximale Performance." },
  { icon: BarChart3, title: "ROI-Fokus", desc: "Messbare Erfolge statt vager Versprechungen." },
  { icon: ShieldCheck, title: "White-Hat SEO", desc: "Nachhaltige Strategien nach Google-Richtlinien." },
  { icon: Lock, title: "DSGVO-konform", desc: "Sicherheit und Datenschutz auf höchstem EU-Niveau." },
];

const AwardsSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600">
            Qualitätsversprechen
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Unsere Standards für Ihren <span className="text-blue-600">Erfolg</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-500">
            Bei TrafficWerk setzen wir auf Transparenz und Qualität – ohne Kompromisse.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {qualities.map((q, i) => (
            <motion.div
              key={q.title}
              className="rounded-2xl border border-slate-100 bg-white p-6 text-center transition-all duration-300 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <q.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-sm font-bold text-slate-900">{q.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">{q.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
