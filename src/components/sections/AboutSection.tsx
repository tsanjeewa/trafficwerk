import { motion } from "framer-motion";
import { BarChart3, Leaf, Cpu } from "lucide-react";
import aboutNeonBg from "@/assets/about-neon-bg.webp";
import aboutBuilding from "@/assets/about-building.webp";

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
    <section className="relative overflow-hidden py-10 md:py-14">
      {/* Neon background layer – deep behind everything */}
      <div className="absolute inset-0 -z-10">
        <img
          src={aboutNeonBg}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
          style={{ opacity: 0.15, filter: "blur(80px)" }}
        />
      </div>

      {/* Content layer */}
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left: Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute -bottom-6 -right-6 h-64 w-64 rounded-full bg-primary/15 blur-[100px]" />
            <div className="absolute -left-8 -top-8 h-48 w-48 rounded-full bg-primary/8 blur-[80px]" />

            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-primary/10">
              <img
                src={aboutBuilding}
                alt="Moderne Glasfassade – TrafficWerk digitale Architektur"
                loading="lazy"
                width={800}
                height={600}
                className="h-56 w-full object-cover md:h-80 lg:h-[480px]"
              />
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              Über TrafficWerk
            </span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground md:mt-6 md:text-4xl">
              Wir transformieren digitale Präsenz in{" "}
              <span className="text-primary">messbaren Erfolg</span>.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              TrafficWerk steht für eine neue Ära des digitalen Marketings. Wir sind ein Team aus SEO-Architekten, Content-Strategen und Datenanalysten, die ein gemeinsames Ziel verfolgen: Die Marktführerschaft unserer Kunden in der organischen Suche.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              Wir glauben nicht an Standardlösungen. Jedes Projekt bei TrafficWerk wird als Unikat behandelt, mit einer maßgeschneiderten Roadmap, die technisches Know-how mit kreativer Exzellenz verbindet.
            </p>

            <div className="mt-6 space-y-2 md:mt-8 md:space-y-3">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  className="nc-card flex items-start gap-4 rounded-xl p-3 transition-all"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <p.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">{p.title}</h3>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{p.desc}</p>
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
