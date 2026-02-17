import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Search, Globe, ShoppingCart, IceCream, Wrench, User, Shield, ShieldCheck,
  ExternalLink, ArrowRight, Server, TrendingUp, Network, CheckCircle2
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { hubDomains, referenceDomains, trademarkDomains, domainCategories, totalDomains, sslEnabled } from "@/data/domainPortfolio";

const categoryIcons: Record<string, React.ElementType> = {
  ShoppingCart, IceCream, Globe, Search, User, Wrench,
};

const DomainPortfolio = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [checking, setChecking] = useState(false);
  const [checkResult, setCheckResult] = useState<null | { available: boolean; domain: string }>(null);

  useEffect(() => {
    document.title = "Strategisches Domain-Portfolio | TrafficWerk – 50+ Domains im Hub-and-Spoke-Modell";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Entdecken Sie unser strategisches Portfolio aus über 50 verwalteten Domains. Bewährte Hub-and-Spoke-SEO-Strategie für maximale Sichtbarkeit.");
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
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white pt-28 pb-20">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/5 blur-[100px]" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary/10 blur-[80px]" />
          <div className="container relative mx-auto px-6 text-center">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary"
            >
              Strategisches Domain-Portfolio
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mx-auto mt-6 max-w-3xl text-3xl font-bold text-foreground md:text-5xl"
            >
              Über {totalDomains} Domains.{" "}
              <span className="text-gradient">Ein strategisches Netzwerk.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground"
            >
              Wir sichern uns wertvolle digitale Assets frühzeitig. Hier sehen Sie einen Auszug aus unserem Portfolio an strategischen Domains.
            </motion.p>

            {/* Domain Checker */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mx-auto mt-10 max-w-xl"
            >
              <div className="flex overflow-hidden rounded-xl border-2 border-primary/20 bg-card shadow-lg shadow-primary/5">
                <div className="flex flex-1 items-center gap-3 px-4">
                  <Search className="h-5 w-5 text-primary/60" />
                  <input
                    type="text"
                    placeholder="Domain-Verfügbarkeit prüfen (z.B. meinshop.de)"
                    value={searchQuery}
                    onChange={(e) => { setSearchQuery(e.target.value); setCheckResult(null); }}
                    onKeyDown={(e) => e.key === "Enter" && handleDomainCheck()}
                    className="w-full bg-transparent py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                  />
                </div>
                <button
                  onClick={handleDomainCheck}
                  disabled={checking || !searchQuery.trim()}
                  className="whitespace-nowrap bg-primary px-6 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
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
                      ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
                      : "bg-red-50 text-red-600 border border-red-200"
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
                  <s.icon className="mx-auto mb-2 h-5 w-5 text-primary" />
                  <p className="text-2xl font-bold text-foreground">{s.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Hub Showcase */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Top-Hubs</span>
              <h2 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">
                Unsere primären Hub-Domains
              </h2>
              <p className="mt-3 text-muted-foreground">
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
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="rounded-lg bg-primary/10 p-2.5">
                      {i === 0 ? <ShoppingCart className="h-5 w-5 text-primary" /> : i === 1 ? <TrendingUp className="h-5 w-5 text-primary" /> : <Server className="h-5 w-5 text-primary" />}
                    </div>
                    <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-600">
                      <ShieldCheck className="h-3 w-3" /> SSL aktiv
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{hub.domain}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{hub.description}</p>
                  <a
                    href={`https://${hub.domain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    Website besuchen <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Aktive Referenzprojekte */}
        <section className="border-t border-border bg-gradient-to-b from-background to-secondary/30 py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Aktive Referenzen</span>
              <h2 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">
                Referenzprojekte in Aktion
              </h2>
              <p className="mt-3 text-muted-foreground">
                Diese Nischen-Domains betreiben wir aktiv als Referenzprojekte – sie zeigen unsere SEO-Expertise in der Praxis.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {referenceDomains.map((ref, i) => (
                <motion.div
                  key={ref.domain}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="rounded-lg bg-primary/10 p-2.5">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                    <span className="flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
                      <CheckCircle2 className="h-3 w-3" /> Aktiv
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{ref.domain}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{ref.description}</p>
                  <a
                    href={`https://${ref.domain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    Website besuchen <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Markenschutz-Expertise */}
        <section className="border-t border-border py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-3xl">
              <div className="rounded-2xl border border-border bg-card p-8">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">Markenschutz-Expertise</span>
                    <h2 className="mt-2 text-xl font-bold text-foreground md:text-2xl">
                      Trademark-Strategien für geschützte Begriffe
                    </h2>
                    <p className="mt-3 text-muted-foreground">
                      Wir entwickeln SEO-Strategien für Domains mit markenrechtlich geschützten Begriffen. Unser Wissen über Trademark-SEO hilft Unternehmen, rechtssicher im digitalen Raum zu agieren.
                    </p>
                    <div className="mt-4 flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3">
                      <Globe className="h-4 w-4 shrink-0 text-primary" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">{trademarkDomains[0].domain}</p>
                        <p className="text-xs text-muted-foreground">{trademarkDomains[0].description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categorized Domains – Vollständige Liste */}
        <section className="border-t border-border section-alt py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Vollständige Liste</span>
              <h2 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">
                Alle {totalDomains} Domains im Überblick
              </h2>
              <p className="mt-3 text-muted-foreground">
                Unser gesamtes strategisches Domain-Portfolio – kategorisiert nach Einsatzzweck. Diese Domains sind Teil unserer langfristigen Hub-and-Spoke-SEO-Strategie.
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
                    className="rounded-2xl border border-border bg-card p-6"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <div className="rounded-lg bg-primary/10 p-2">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{cat.title}</h3>
                      <span className="ml-auto rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                        {cat.domains.length} Domains
                      </span>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {cat.domains.map((d) => (
                        <div
                          key={d.domain}
                          className="flex items-start gap-3 rounded-lg border border-border bg-background px-4 py-3"
                        >
                          <Globe className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <p className="truncate text-sm font-semibold text-foreground">{d.domain}</p>
                              {d.ssl && <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-emerald-500" />}
                            </div>
                            <p className="mt-0.5 text-xs text-muted-foreground">{d.description}</p>
                            {d.redirectsTo && (
                              <p className="mt-0.5 flex items-center gap-1 text-[11px] text-primary/70">
                                <ArrowRight className="h-3 w-3" /> → {d.redirectsTo}
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
        <section className="bg-gradient-to-br from-primary to-accent py-16 md:py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-primary-foreground md:text-3xl">
              Bereit für Ihre eigene Domain-Strategie?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              Wir helfen Ihnen, ein strategisches Domain-Portfolio aufzubauen, das Ihre SEO-Sichtbarkeit maximiert.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                to="/kontakt"
                className="rounded-full bg-white px-8 py-3 text-sm font-bold text-primary shadow-lg transition-colors hover:bg-white/90"
              >
                Kostenlose Beratung anfragen
              </Link>
              <Link
                to="/#seo-quick-check"
                className="rounded-full border border-primary-foreground/30 px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:border-primary-foreground/60 hover:bg-primary-foreground/10"
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
