import { motion } from "framer-motion";
import { Search, BarChart3, Settings, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Analyse",
    desc: "Wir analysieren Ihre Website, Ihre Mitbewerber und Ihre Zielgruppe – datenbasiert und präzise.",
    number: "01",
  },
  {
    icon: BarChart3,
    title: "Strategie",
    desc: "Auf Basis der Analyse entwickeln wir eine maßgeschneiderte SEO-Strategie mit klaren Prioritäten.",
    number: "02",
  },
  {
    icon: Settings,
    title: "Umsetzung",
    desc: "Wir implementieren technische und inhaltliche Optimierungen – schnell, sauber und nachhaltig.",
    number: "03",
  },
  {
    icon: Rocket,
    title: "Launch",
    desc: "Kampagnen gehen live, Content wird veröffentlicht und erste Rankings werden sichtbar.",
    number: "04",
  },
  {
    icon: TrendingUp,
    title: "Monitoring",
    desc: "Kontinuierliche Überwachung, Reporting und laufende Optimierung sichern Ihren Vorsprung.",
    number: "05",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "hsl(214 25% 97%)" }}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-12 md:mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Prozess
          </span>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Unser SEO-Prozess
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Von der ersten Analyse bis zum dauerhaften Ranking-Erfolg – strukturiert, transparent und effektiv.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 md:gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              className="relative flex flex-col rounded-2xl border border-border bg-background p-6 md:p-7"
              style={{
                boxShadow: "0 2px 12px 0 hsl(215 25% 15% / 0.07), 0 1px 3px 0 hsl(215 25% 15% / 0.05)",
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{
                boxShadow: "0 8px 32px 0 hsl(217 91% 50% / 0.13), 0 2px 8px 0 hsl(215 25% 15% / 0.08)",
                y: -3,
                transition: { duration: 0.2 },
              }}
            >
              {/* Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                <s.icon className="h-6 w-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="font-display text-lg font-bold text-foreground md:text-xl">{s.title}</h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">{s.desc}</p>

              {/* Bottom accent line */}
              <div className="mt-5 h-0.5 w-8 rounded-full bg-primary/40" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
