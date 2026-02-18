import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[82vh] items-center justify-center overflow-hidden pt-16 md:min-h-[92vh] md:pt-20">
      {/* Nextcloud-style: clean white with a very subtle blue radial glow */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-[140px]" />

      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block rounded-full border border-primary/25 bg-primary/8 px-4 py-1.5 text-xs font-semibold text-primary">
              SEO-Agentur für nachhaltiges Wachstum
            </span>
          </motion.div>

          <motion.h1
            className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:mt-8 md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            Wir bringen Ihr
            <br />
            Business auf{" "}
            <span className="text-gradient">Seite&nbsp;1</span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:mt-7 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
          >
            TrafficWerk ist Ihre Agentur für Suchmaschinenoptimierung. Mit <strong className="font-semibold text-foreground">datengetriebenen Strategien</strong> sorgen wir für mehr Sichtbarkeit, mehr Traffic und mehr Umsatz – messbar und nachhaltig.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-3 md:mt-10 md:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36 }}
          >
            <Button size="lg" className="rounded-full text-base font-semibold" asChild>
              <Link to="/kontakt" aria-label="Kostenlose SEO-Beratung anfragen">
                Kostenlose Beratung
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-border text-base font-semibold hover:border-primary hover:text-primary" asChild>
              <a href="#seo-analyse" aria-label="Zu unserer Gratis SEO-Analyse scrollen">Gratis Analyse</a>
            </Button>
          </motion.div>

          {/* Social proof strip */}
          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-6 md:mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {[
              { value: "4", label: "Experten" },
              { value: "10+", label: "Services" },
              { value: "100%", label: "Datengetrieben" },
            ].map((s) => (
              <div key={s.label} className="flex items-baseline gap-1.5">
                <span className="text-xl font-bold text-primary">{s.value}</span>
                <span className="text-sm text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
