import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  process: { step: string; desc: string }[];
  icon: ReactNode;
}

const ServicePageLayout = ({ title, subtitle, description, benefits, process, icon }: ServicePageProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[50vh] items-center pt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
          <div className="container relative mx-auto px-6 py-24">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
                {subtitle}
              </span>
              <h1 className="mt-6 font-display text-4xl font-bold md:text-6xl">{title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{description}</p>
              <Button size="lg" className="mt-8 rounded-full" asChild>
                <Link to="/kontakt">Kostenlose Beratung <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-alt py-24">
          <div className="container mx-auto px-6">
            <h2 className="font-display text-2xl font-bold md:text-3xl">Ihre Vorteile</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {benefits.map((b, i) => (
                <motion.div key={i} className="flex items-start gap-4 rounded-xl border border-border/50 bg-card p-5" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }}>
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm">{b}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <h2 className="font-display text-2xl font-bold md:text-3xl">Unser Vorgehen</h2>
            <div className="mt-8 space-y-4">
              {process.map((p, i) => (
                <motion.div key={i} className="flex items-start gap-6 rounded-xl border border-border/50 bg-card p-6" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }} viewport={{ once: true }}>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display font-semibold">{p.step}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-alt py-24">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-display text-2xl font-bold md:text-3xl">Jetzt starten</h2>
            <p className="mt-4 text-muted-foreground">Lassen Sie uns gemeinsam Ihre {title}-Strategie entwickeln.</p>
            <Button size="lg" className="mt-8 rounded-full" asChild>
              <Link to="/kontakt">Beratung anfragen <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePageLayout;
