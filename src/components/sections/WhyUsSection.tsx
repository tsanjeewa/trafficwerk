import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const usps = [
  "Datengetriebene Strategien mit messbaren Ergebnissen",
  "Transparente Reportings und direkte Kommunikation",
  "Keine langfristigen Vertragsbindungen",
  "Individuelle Strategien statt Schablonen-Lösungen",
  "Erfahrenes Team mit branchenübergreifender Expertise",
  "Modernste Tools und bewährte Methoden",
];

const WhyUsSection = () => {
  return (
    <section className="section-alt py-24">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-primary">Vorteile</span>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              Warum TrafficWerk?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Wir setzen auf Qualität, Transparenz und messbare Ergebnisse. Jedes Projekt wird individuell betreut.
            </p>
          </div>
          <div className="space-y-4">
            {usps.map((usp, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-4 rounded-lg border border-border/50 bg-card p-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm">{usp}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
