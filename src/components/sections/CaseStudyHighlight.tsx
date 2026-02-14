import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";

const CaseStudyHighlight = () => {
  return (
    <section className="section-alt py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">Erfolgsgeschichte</span>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
            +520% organischer Traffic in 8 Monaten
          </h2>
        </div>

        <motion.div
          className="mx-auto mt-12 max-w-4xl rounded-2xl border border-border/50 bg-card p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-display text-xl font-bold">lustaufeis24.de</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Durch gezielte technische SEO, Content-Optimierung und strategisches Linkbuilding konnten wir den organischen Traffic von lustaufeis24.de um über 520% steigern. Die Anzahl der Keywords auf Seite 1 wurde vervierfacht.
              </p>
              <div className="mt-6 flex gap-6">
                <div>
                  <p className="font-display text-2xl font-bold text-primary">+520%</p>
                  <p className="text-xs text-muted-foreground">Traffic</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-primary">4x</p>
                  <p className="text-xs text-muted-foreground">Keywords Seite 1</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-primary">8 Mo.</p>
                  <p className="text-xs text-muted-foreground">Zeitraum</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center rounded-xl border border-border/30 bg-secondary/50 p-8">
              <TrendingUp className="h-24 w-24 text-primary/30" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudyHighlight;
