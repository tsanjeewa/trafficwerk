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
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container mx-auto px-6">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-medium uppercase tracking-widest text-blue-600">
                {subtitle}
              </span>
              <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-500 md:text-xl">
                {description}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full bg-blue-600 px-8 text-base text-white hover:bg-blue-700" asChild>
                  <Link to="/kontakt">
                    Beratung anfragen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="border-t border-slate-100 bg-white py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-medium uppercase tracking-widest text-blue-600">Leistungen</span>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">Was wir bieten</h2>
            </motion.div>
            <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  className="group"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  viewport={{ once: true }}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    {f.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{f.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="border-t border-slate-100 bg-slate-50/60 py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-medium uppercase tracking-widest text-blue-600">Ablauf</span>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">Unser Prozess</h2>
            </motion.div>
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {process.map((p, i) => (
                <motion.div
                  key={i}
                  className="relative rounded-2xl border border-slate-200 bg-white p-8"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900">{p.step}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="border-t border-slate-100 bg-white py-24">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-2xl"
            >
              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                Bereit für den nächsten Schritt?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-slate-500">
                Lassen Sie uns in einem unverbindlichen Gespräch besprechen, wie wir Ihre Ziele im Bereich {title} erreichen.
              </p>
              <Button
                size="lg"
                className="mt-8 rounded-full bg-blue-600 px-10 text-base text-white hover:bg-blue-700"
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
