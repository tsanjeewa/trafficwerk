import { motion } from "framer-motion";

const tools = [
  "Google Search Console", "Google Analytics", "Sistrix", "Ahrefs", "Screaming Frog", "Semrush"
];

const TrustSection = () => {
  return (
    <section className="border-y border-slate-100 py-12">
      <div className="container mx-auto px-6">
        <p className="mb-8 text-center text-xs font-medium uppercase tracking-widest text-slate-400">
          Unsere Tools & Technologien
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {tools.map((t, i) => (
            <motion.span
              key={t}
              className="text-lg font-semibold text-slate-300 transition-colors hover:text-slate-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
