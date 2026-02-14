import { motion } from "framer-motion";
import { Award, Shield, Star } from "lucide-react";

const awards = [
  { icon: Award, title: "Google Partner", desc: "Zertifizierter Google Ads Partner" },
  { icon: Shield, title: "DSGVO-konform", desc: "Datenschutz nach höchsten Standards" },
  { icon: Star, title: "Top SEO-Agentur 2025", desc: "Ausgezeichnet von iBusiness" },
  { icon: Award, title: "Sistrix Certified", desc: "Zertifizierter Sistrix-Partner" },
];

const AwardsSection = () => {
  return (
    <section className="section-alt py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">Auszeichnungen</span>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
            Zertifikate & Awards
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {awards.map((a, i) => (
            <motion.div
              key={a.title}
              className="flex flex-col items-center rounded-xl border border-border/50 bg-card p-6 text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              <a.icon className="h-10 w-10 text-accent" />
              <h3 className="mt-4 font-display text-sm font-semibold">{a.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
