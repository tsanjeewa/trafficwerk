import { motion } from "framer-motion";
import { BarChart3, Leaf, Cpu } from "lucide-react";
import aboutWaveBg from "@/assets/about-wave-bg.webp";

const pillars = [
  {
    icon: BarChart3,
    title: "Datengetriebene Strategien",
    desc: "Kein Raten, nur Resultate basierend auf präzisen Marktanalysen und validierten Daten.",
  },
  {
    icon: Leaf,
    title: "Nachhaltiges Wachstum",
    desc: "Wir bauen organische Sichtbarkeit auf, die langfristig Bestand hat und echten Mehrwert liefert.",
  },
  {
    icon: Cpu,
    title: "Technische Exzellenz",
    desc: "Optimierung bis ins kleinste Detail für maximale Performance und herausragende Nutzererlebnisse.",
  },
];

const AboutSection = () => {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24">
      <div className="container relative z-10 mx-auto px-4 md:px-6">

        {/* Header */}
        <motion.div
          className="mx-auto max-w-2xl text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            Über TrafficWerk
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Wir transformieren digitale Präsenz in{" "}
            <span className="text-primary">messbaren Erfolg</span>.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            TrafficWerk ist ein Team aus SEO-Architekten, Content-Strategen und Datenanalysten – mit einem gemeinsamen Ziel: die Marktführerschaft unserer Kunden in der organischen Suche.
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
            Wir glauben nicht an Standardlösungen. Jedes Projekt erhält eine maßgeschneiderte Roadmap, die technisches Know-how mit kreativer Exzellenz verbindet.
          </p>
        </motion.div>

        {/* Pillar Cards */}
        <div className="mx-auto grid max-w-5xl gap-6 grid-cols-1 sm:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              className="relative overflow-hidden rounded-2xl border border-border bg-background shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Abstract background image – subtle overlay */}
              <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
                <img
                  src={aboutWaveBg}
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-cover object-center"
                  style={{ opacity: 0.22 }}
                />
              </div>

              {/* Card content */}
              <div className="relative z-10 p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                  <p.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground md:text-xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70 md:text-base">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
