import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/trafficwerk-hero-bg.webp";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden pt-16 md:min-h-[90vh] md:pt-20">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Subtle overlay so text stays readable */}
      <div className="absolute inset-0 bg-white/70" />

      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
              SEO-Agentur für nachhaltiges Wachstum
            </span>
          </motion.div>

          <motion.h1
            className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight md:mt-8 md:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            Wir bringen Ihr
            <br />
            Business auf{" "}
            <span className="text-gradient">Seite 1</span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:mt-6 md:text-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            TrafficWerk ist Ihre Agentur für Suchmaschinenoptimierung. Mit datengetriebenen Strategien sorgen wir für mehr Sichtbarkeit, mehr Traffic und mehr Umsatz – messbar und nachhaltig.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-3 md:mt-10 md:gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <Button size="lg" className="rounded-full text-base" asChild>
              <Link to="/kontakt" aria-label="Kostenlose SEO-Beratung anfragen">
                Kostenlose Beratung
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full text-base" asChild>
              <a href="#seo-analyse" aria-label="Zu unserer Gratis Analyse scrollen">Gratis Analyse</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
