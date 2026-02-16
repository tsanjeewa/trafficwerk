import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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

interface StrategyPoint {
  text: string;
}

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  features: Feature[];
  process: ProcessStep[];
  strategyTitle?: string;
  strategyDescription?: string;
  strategyPoints?: StrategyPoint[];
  growthTitle?: string;
  growthDescription?: string;
  growthPoints?: StrategyPoint[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const ServicePageLayout = ({
  title,
  subtitle,
  description,
  features,
  process,
  strategyTitle = "Unser Ansatz",
  strategyDescription = "Strategisch, datengetrieben und ergebnisorientiert – so arbeiten wir mit Ihnen zusammen.",
  strategyPoints = [
    { text: "Individuelle Analyse Ihrer Ausgangslage" },
    { text: "Maßgeschneiderte Strategie statt Schablone" },
    { text: "Transparente Kommunikation und Reporting" },
    { text: "Kontinuierliche Optimierung und Skalierung" },
  ],
  growthTitle = "Ihr Wachstum",
  growthDescription = "Messbare Ergebnisse, die Ihr Unternehmen nachhaltig voranbringen.",
  growthPoints = [
    { text: "Steigende Sichtbarkeit und qualifizierter Traffic" },
    { text: "Höhere Conversion-Raten und mehr Umsatz" },
    { text: "Stärkere Markenpositionierung im Markt" },
    { text: "Langfristiger Wettbewerbsvorteil" },
  ],
}: ServicePageProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pb-20 pt-32 md:pb-28 md:pt-40">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              className="mx-auto max-w-3xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600">
                {subtitle}
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-500 md:text-xl">
                {description}
              </p>
              <div className="mt-10">
                <Button
                  size="lg"
                  className="rounded-full bg-blue-600 px-10 text-base font-medium text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/25"
                  asChild
                >
                  <Link to="/kontakt">
                    Beratung anfragen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="border-t border-slate-100 py-24">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                Leistungen
              </span>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                Was wir bieten
              </h2>
            </motion.div>
            <div className="mx-auto mt-16 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  className="group rounded-2xl border border-slate-100 bg-white p-7 transition-all duration-300 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-600/5"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i + 1}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    {f.icon}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {f.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategy Section */}
        <section className="border-t border-slate-100 py-24">
          <div className="container mx-auto px-6">
            <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={0}
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                  Strategie
                </span>
                <h3 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">
                  {strategyTitle}
                </h3>
                <p className="mt-4 text-slate-500 leading-relaxed">
                  {strategyDescription}
                </p>
                <ul className="mt-8 space-y-4">
                  {strategyPoints.map((point, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      custom={i + 1}
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                      <span className="text-sm font-medium text-slate-700">{point.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={2}
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                  Ergebnisse
                </span>
                <h3 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">
                  {growthTitle}
                </h3>
                <p className="mt-4 text-slate-500 leading-relaxed">
                  {growthDescription}
                </p>
                <ul className="mt-8 space-y-4">
                  {growthPoints.map((point, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      custom={i + 3}
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                      <span className="text-sm font-medium text-slate-700">{point.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Flow – 4 Steps Horizontal */}
        <section className="border-t border-slate-100 py-24">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                Ablauf
              </span>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                Unser Prozess
              </h2>
            </motion.div>
            <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
              {process.map((p, i) => (
                <motion.div
                  key={i}
                  className="relative rounded-2xl border border-slate-100 bg-white p-7"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i + 1}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                    {i + 1}
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-slate-900">
                    {p.step}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {p.desc}
                  </p>
                  {i < process.length - 1 && (
                    <div className="absolute -right-3 top-12 hidden text-slate-300 lg:block">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner – Full Width Blue */}
        <section className="bg-blue-600 py-20">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="mx-auto max-w-2xl"
            >
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Starten Sie jetzt
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-blue-100">
                Lassen Sie uns in einem unverbindlichen Gespräch besprechen, wie wir Ihre Ziele im Bereich {title} erreichen.
              </p>
              <Button
                size="lg"
                className="mt-8 rounded-full bg-white px-10 text-base font-semibold text-blue-600 shadow-lg hover:bg-blue-50"
                asChild
              >
                <Link to="/kontakt">
                  Kostenlose Erstberatung
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
