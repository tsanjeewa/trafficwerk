import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe, Network, ShieldCheck, ArrowRight } from "lucide-react";

const DomainPortfolioSection = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="relative overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-blue-50/30 p-8 md:p-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-blue-100/40 blur-3xl" />
          <div className="relative flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-12">
            {/* Left content */}
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-600">
                Social Proof
              </span>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                Expertise in großem Maßstab: Unser Domain-Portfolio
              </h2>
              <p className="mt-4 max-w-xl text-slate-500">
                Wir verwalten über 50 eigene Domains erfolgreich im Hub-and-Spoke-Modell – mit nachweisbaren SEO-Ergebnissen. Dieses Netzwerk ist der beste Beweis für unsere Kompetenz.
              </p>

              {/* Mini stats */}
              <div className="mt-6 flex flex-wrap justify-center gap-6 lg:justify-start">
                {[
                  { icon: Globe, value: "50+", label: "Domains" },
                  { icon: Network, value: "3", label: "Hub-Sites" },
                  { icon: ShieldCheck, value: "16", label: "SSL-gesichert" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-2.5">
                    <div className="rounded-lg bg-blue-100 p-2">
                      <s.icon className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-slate-900">{s.value}</p>
                      <p className="text-xs text-slate-400">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/domain-portfolio"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-primary/30"
              >
                Portfolio & Domain-Checker ansehen
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Right visual */}
            <div className="grid w-full max-w-xs gap-3">
              {["lustaufeis24.de", "eismaschine.de", "eiscafe-florenz-leipzig.de"].map((d, i) => (
                <motion.div
                  key={d}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
                >
                  <div className="rounded-lg bg-emerald-50 p-1.5">
                    <ShieldCheck className="h-4 w-4 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{d}</p>
                    <p className="text-[11px] text-slate-400">Hub-Domain · SSL</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DomainPortfolioSection;
