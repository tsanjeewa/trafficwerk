import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="section-alt py-24">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-medium uppercase tracking-widest text-primary">Über uns</span>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              Wir sind TrafficWerk
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              TrafficWerk ist eine datengetriebene SEO-Agentur mit Sitz in Röhrmoos bei München. Unter der Leitung von Thomas Kinne verbinden wir technische Expertise mit kreativem Content-Marketing, um nachhaltiges organisches Wachstum für unsere Kunden zu erzielen.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Unser Team aus SEO-Spezialisten, Content-Strategen und Datenanalysten arbeitet mit modernsten Tools und bewährten Methoden, um Ihre Online-Präsenz auf das nächste Level zu bringen.
            </p>
          </motion.div>
          <motion.div
            className="relative overflow-hidden rounded-2xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
              alt="TrafficWerk Team bei der Arbeit"
              className="h-80 w-full object-cover lg:h-96"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
