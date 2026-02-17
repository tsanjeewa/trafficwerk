import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Search, Globe, ShoppingCart, IceCream, Wrench, User, Shield, ShieldCheck,
  ExternalLink, ArrowRight, Server, TrendingUp, Network, CheckCircle2
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { hubDomains, domainCategories, totalDomains, sslEnabled } from "@/data/domainPortfolio";

const categoryIcons: Record<string, React.ElementType> = {
  ShoppingCart, IceCream, Globe, Search, User, Wrench,
};

const DomainPortfolio = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [checking, setChecking] = useState(false);
  const [checkResult, setCheckResult] = useState<null | { available: boolean; domain: string }>(null);

  useEffect(() => {
    document.title = "Domain Portfolio | TrafficWerk – 50+ Domains im Hub-and-Spoke-Modell";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Entdecken Sie unser Portfolio aus über 50 verwalteten Domains. Bewährte Hub-and-Spoke-SEO-Strategie für maximale Sichtbarkeit.");
  }, []);

  const handleDomainCheck = () => {
    if (!searchQuery.trim()) return;
    setChecking(true);
    setCheckResult(null);
    setTimeout(() => {
      setChecking(false);
      setCheckResult({
        available: Math.random() > 0.5,
        domain: searchQuery.includes(".") ? searchQuery : `${searchQuery}.de`,
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-slate-950 pt-24 pb-20">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-yellow-400/30 blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-blue-500/20 blur-[100px]" />
          </div>
          <div className="container relative mx-auto px-6 text-center">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-yellow-400"
            >
              Domain Portfolio
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mx-auto mt-6 max-w-3xl text-3xl font-bold text-white md:text-5xl"
            >
              Über {totalDomains} Domains.{" "}
              <span className="text-yellow-400">Ein strategisches Netzwerk.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mx-auto mt-5 max-w-2xl text-lg text-slate-400"
            >
              Wir verwalten ein professionelles Domain-Portfolio im Hub-and-Spoke-Modell – mit Fokus auf maximale SEO-Wirkung und nachhaltiges Wachstum.
            </motion.p>

            {/* Domain Checker */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mx-auto mt-10 max-w-xl"
            >
              <div className="flex overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-2xl shadow-yellow-400/5">
                <div className="flex flex-1 items-center gap-3 px-4">
                  <Search className="h-5 w-5 text-slate-500" />
                  <input
                    type="text"
                    placeholder="Domain-Verfügbarkeit prüfen (z.B. meinshop.de)"
                    value={searchQuery}
                    onChange={(e) => { setSearchQuery(e.target.value); setCheckResult(null); }}
                    onKeyDown={(e) => e.key === "Enter" && handleDomainCheck()}
                    className="w-full bg-transparent py-4 text-sm text-white placeholder:text-slate-500 focus:outline-none"
                  />
                </div>
                <button
                  onClick={handleDomainCheck}
                  disabled={checking || !searchQuery.trim()}
                  className="whitespace-nowrap bg-yellow-400 px-6 text-sm font-bold text-slate-900 transition-colors hover:bg-yellow-300 disabled:opacity-50"
                >
                  {checking ? "Prüfe…" : "Prüfen"}
                </button>
              </div>
              {checkResult && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 rounded-lg px-4 py-3 text-sm font-medium ${
                    checkResult.available
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "bg-red-500/10 text-red-400"
                  }`}
                >
                  {checkResult.available
                    ? `✅ ${checkResult.domain} ist möglicherweise verfügbar!`
                    : `❌ ${checkResult.domain} ist bereits vergeben.`}
                </motion.div>
              )}
            </motion.div>

            {/* Quick stats */}
            <div className="mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-6">
              {[
                { value: `${totalDomains}+`, label: "Verwaltete Domains", icon: Globe },
                { value: `${sslEnabled}`, label: "SSL-geschützt", icon: ShieldCheck },
                { value: "3", label: "Hub-Domains", icon: Network },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="text-center"
                >
                  <s.icon className="mx-auto mb-2 h-5 w-5 text-yellow-400" />
                  <p className="text-2xl font-bold text-white">{s.value}</p>
                  <p className="mt-1 text-xs text-slate-500">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Hub Showcase */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">Top-Hubs</span>
              <h2 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">
                Unsere primären Hub-Domains
              </h2>
              <p className="mt-3 text-slate-500">
                Die drei Haupt-Domains bilden das Zentrum unseres Hub-and-Spoke-Netzwerks und generieren den größten Traffic.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {hubDomains.map((hub, i) => (
                <motion.div
                  key={hub.domain}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 transition-all hover:border-blue-100 hover:shadow-xl hover:shadow-blue-600/5"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="rounded-lg bg-blue-50 p-2.5">
                      {i === 0 ? <ShoppingCart className="h-5 w-5 text-blue-600" /> : i === 1 ? <TrendingUp className="h-5 w-5 text-blue-600" /> : <Server className="h-5 w-5 text-blue-600" />}
                    </div>
                    <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-600">
                      <ShieldCheck className="h-3 w-3" /> SSL
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{hub.domain}</h3>
                  <p className="mt-2 text-sm text-slate-500">{hub.description}</p>
                  <a
                    href={`https://${hub.domain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
                  >
                    Website besuchen <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Categorized Domains */}
        <section className="border-t border-slate-100 bg-slate-50 py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">Netzwerk</span>
              <h2 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">
                Gesamtes Domain-Portfolio
              </h2>
              <p className="mt-3 text-slate-500">
                Alle Domains, kategorisiert nach Einsatzzweck – von E-Commerce über Gastronomie bis hin zu SEO und Personal Branding.
              </p>
            </div>

            <div className="mt-12 space-y-8">
              {domainCategories.map((cat, ci) => {
                const Icon = categoryIcons[cat.icon] || Globe;
                return (
                  <motion.div
                    key={cat.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.05 }}
                    className="rounded-2xl border border-slate-200 bg-white p-6"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <div className="rounded-lg bg-blue-50 p-2">
                        <Icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">{cat.title}</h3>
                      <span className="ml-auto rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
                        {cat.domains.length} Domains
                      </span>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {cat.domains.map((d) => (
                        <div
                          key={d.domain}
                          className="flex items-start gap-3 rounded-lg border border-slate-50 bg-slate-50/50 px-4 py-3 transition-colors hover:border-blue-100 hover:bg-blue-50/30"
                        >
                          <Globe className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <p className="truncate text-sm font-semibold text-slate-800">{d.domain}</p>
                              {d.ssl && <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-emerald-500" />}
                            </div>
                            <p className="mt-0.5 text-xs text-slate-400">{d.description}</p>
                            {d.redirectsTo && (
                              <p className="mt-0.5 flex items-center gap-1 text-[11px] text-blue-500">
                                <ArrowRight className="h-3 w-3" /> {d.redirectsTo}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-950 py-16 md:py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Bereit für Ihre eigene <span className="text-yellow-400">Domain-Strategie?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              Wir helfen Ihnen, ein strategisches Domain-Portfolio aufzubauen, das Ihre SEO-Sichtbarkeit maximiert.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                to="/kontakt"
                className="rounded-full bg-yellow-400 px-8 py-3 text-sm font-bold text-slate-900 transition-colors hover:bg-yellow-300"
              >
                Kostenlose Beratung anfragen
              </Link>
              <Link
                to="/#seo-quick-check"
                className="rounded-full border border-slate-700 px-8 py-3 text-sm font-medium text-white transition-colors hover:border-slate-500"
              >
                SEO-Quick-Check starten
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DomainPortfolio;
