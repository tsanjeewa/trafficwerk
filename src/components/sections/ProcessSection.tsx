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
    <section className="py-10 md:py-14">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">Prozess</span>
          <h2 className="mt-3 font-display text-2xl font-bold md:mt-4 md:text-4xl">
            Unser SEO-Prozess
          </h2>
        </div>

        <div className="relative mt-10 md:mt-16">
          {/* Connection line */}
          <div className="absolute left-1/2 top-8 hidden h-0.5 w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block" />
          
          <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 md:gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                className="relative text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10 md:h-16 md:w-16">
                  <s.icon className="h-5 w-5 text-primary md:h-7 md:w-7" />
                </div>
                <span className="mt-1.5 block text-xs font-bold text-primary md:mt-2">0{i + 1}</span>
                <h3 className="mt-1 font-display text-sm font-semibold md:mt-2 md:text-base">{s.title}</h3>
                <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground md:mt-2 md:text-xs">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
