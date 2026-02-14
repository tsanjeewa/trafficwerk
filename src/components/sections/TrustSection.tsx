import { motion } from "framer-motion";

const partners = [
  "Google Partner", "Sistrix", "Ahrefs", "SEMrush", "HubSpot", "Screaming Frog"
];

const TrustSection = () => {
  return (
    <section className="border-y border-border/50 py-12">
      <div className="container mx-auto px-6">
        <p className="mb-8 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Vertraut von führenden Unternehmen
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {partners.map((p, i) => (
            <motion.span
              key={p}
              className="font-display text-lg font-semibold text-muted-foreground/50 transition-colors hover:text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {p}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
