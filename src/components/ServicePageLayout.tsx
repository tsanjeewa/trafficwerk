import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface ProcessStep {
  step: string;
  desc: string;
}

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  features: Feature[];
  process: ProcessStep[];
}

const ServicePageLayout = ({ title, subtitle, description, features, process }: ServicePageProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
          <div className="container relative mx-auto px-6 py-24 md:py-32">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                {subtitle}
              </span>
              <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                {description}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full px-8 text-base" asChild>
                  <Link to="/kontakt">
                    Beratung anfragen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 text-base" asChild>
                  <Link to="/#leistungen">Alle Leistungen</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="border-t border-border/40 py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="font-display text-3xl font-bold md:text-4xl">Was wir für Sie tun</h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Unsere spezialisierten Leistungen im Bereich {title} – maßgeschneidert für Ihren Erfolg.
              </p>
            </motion.div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  className="group rounded-2xl border border-border/50 bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    {f.icon}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section – 3 Steps */}
        <section className="bg-secondary/30 py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="font-display text-3xl font-bold md:text-4xl">So gehen wir vor</h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Unser bewährter Prozess für messbare {title}-Ergebnisse.
              </p>
            </motion.div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {process.map((p, i) => (
                <motion.div
                  key={i}
                  className="relative rounded-2xl border border-border/50 bg-card p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.12 }}
                  viewport={{ once: true }}
                >
                  <span className="absolute -top-5 left-8 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground shadow-lg">
                    {i + 1}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold">{p.step}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-primary py-20">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
                Kostenlose Erstberatung sichern
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
                Lassen Sie uns gemeinsam Ihre {title}-Strategie besprechen. Unverbindlich, persönlich und auf den Punkt.
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="mt-8 rounded-full px-10 text-base font-semibold"
                asChild
              >
                <Link to="/kontakt">
                  Jetzt Beratungsgespräch vereinbaren
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePageLayout;
