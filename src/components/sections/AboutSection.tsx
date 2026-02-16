import { motion } from "framer-motion";
import { BarChart3, Leaf, Cpu } from "lucide-react";

const pillars = [
  {
    icon: BarChart3,
    title: "Datengetriebene Strategien",
    desc: "Kein Raten, nur Resultate basierend auf präzisen Marktanalysen.",
  },
  {
    icon: Leaf,
    title: "Nachhaltiges Wachstum",
    desc: "Wir bauen organische Sichtbarkeit auf, die langfristig Bestand hat.",
  },
  {
    icon: Cpu,
    title: "Technische Exzellenz",
    desc: "Optimierung bis ins kleinste Detail für maximale Performance.",
  },
];

const AboutSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Image */}
          <motion.div
            className="overflow-hidden rounded-3xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
              alt="Modernes Office-Setting"
              className="h-80 w-full object-cover lg:h-[480px]"
            />
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600">
              Über TrafficWerk
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Wir transformieren digitale Präsenz in{" "}
              <span className="text-blue-600">messbaren Erfolg</span>.
            </h2>
            <p className="mt-6 leading-relaxed text-slate-500">
              TrafficWerk steht für eine neue Ära des digitalen Marketings. Wir sind ein Team aus SEO-Architekten, Content-Strategen und Datenanalysten, die ein gemeinsames Ziel verfolgen: Die Marktführerschaft unserer Kunden in der organischen Suche.
            </p>
            <p className="mt-4 leading-relaxed text-slate-500">
              Wir glauben nicht an Standardlösungen. Jedes Projekt bei TrafficWerk wird als Unikat behandelt, mit einer maßgeschneiderten Roadmap, die technisches Know-how mit kreativer Exzellenz verbindet.
            </p>

            {/* Pillars */}
            <div className="mt-8 space-y-3">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  className="flex items-start gap-4 rounded-xl p-3 transition-colors duration-200 hover:bg-blue-50"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <p.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{p.title}</h3>
                    <p className="mt-0.5 text-xs leading-relaxed text-slate-500">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
