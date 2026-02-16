import { motion } from "framer-motion";

const tools = [
  "Google Search Console", "Google Analytics", "Sistrix", "Ahrefs",
  "SEMrush", "Screaming Frog", "Surfer SEO", "ChatGPT/AI",
  "Google Tag Manager", "Looker Studio", "PageSpeed Insights", "Schema.org",
];

const TechStackSection = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">Technologie</span>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
            Unsere Tools & Technologien
          </h2>
        </div>

        <div className="mx-auto mt-16 flex max-w-4xl flex-wrap justify-center gap-3">
          {tools.map((tool, i) => (
            <motion.span
              key={tool}
              className="rounded-full border border-border/50 bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary/30 hover:text-primary"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.03 }}
              viewport={{ once: true }}
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
