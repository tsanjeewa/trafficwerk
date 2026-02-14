import { motion } from "framer-motion";
import { Search, BarChart3, Settings, Rocket, TrendingUp } from "lucide-react";

const steps = [
  { icon: Search, title: "Analyse", desc: "Umfassende SEO-Analyse Ihrer Website und Ihres Wettbewerbs" },
  { icon: BarChart3, title: "Strategie", desc: "Maßgeschneiderte SEO-Strategie basierend auf Ihren Zielen" },
  { icon: Settings, title: "Umsetzung", desc: "Technische und inhaltliche Optimierungen implementieren" },
  { icon: Rocket, title: "Launch", desc: "Kampagnen starten und Content veröffentlichen" },
  { icon: TrendingUp, title: "Monitoring", desc: "Kontinuierliche Überwachung und Optimierung der Ergebnisse" },
];

const ProcessSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">Prozess</span>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
            Unser SEO-Prozess
          </h2>
        </div>

        <div className="relative mt-16">
          {/* Connection line */}
          <div className="absolute left-1/2 top-8 hidden h-0.5 w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block" />
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                className="relative text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <s.icon className="h-7 w-7 text-primary" />
                </div>
                <span className="mt-2 block text-xs font-bold text-primary">0{i + 1}</span>
                <h3 className="mt-2 font-display text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
