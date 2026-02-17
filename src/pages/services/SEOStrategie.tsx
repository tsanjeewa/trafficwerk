import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Search, TrendingUp, BarChart3, Target, Leaf, Globe, Shield, Zap, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const coreFeatures = [
  { icon: <Search className="h-5 w-5" />, title: "Keyword-Strategie", description: "Tiefgehende Recherche und Priorisierung relevanter Suchbegriffe nach Suchvolumen, Wettbewerb und Kaufabsicht." },
  { icon: <BarChart3 className="h-5 w-5" />, title: "Wettbewerbsanalyse", description: "Systematische Analyse Ihrer Mitbewerber – Stärken, Schwächen und ungenutzte Potenziale identifizieren." },
  { icon: <Target className="h-5 w-5" />, title: "Content-Roadmap", description: "Strategisch priorisierte Themenpläne, die Traffic, Autorität und Conversions systematisch aufbauen." },
  { icon: <TrendingUp className="h-5 w-5" />, title: "Ranking-Prognosen", description: "Realistische Wachstumsprognosen und Meilensteine auf Basis historischer Daten und Marktpotenzial." },
  { icon: <Leaf className="h-5 w-5" />, title: "Nachhaltige Sichtbarkeit", description: "Langfristige Strategien statt kurzfristiger Tricks – für organisches Wachstum, das bleibt." },
  { icon: <BarChart3 className="h-5 w-5" />, title: "Datengetriebene Insights", description: "Fundierte Entscheidungen auf Basis von Search Console, Analytics und proprietären Datenmodellen." },
];

const advancedStrategies = [
  { icon: <Layers className="h-5 w-5" />, title: "Hub-and-Spoke Modell", description: "Pillar Pages als Content-Hubs mit thematisch vernetzten Cluster-Artikeln für maximale Topical Authority." },
  { icon: <TrendingUp className="h-5 w-5" />, title: "ROI-Maximierung", description: "Datenbasierte Priorisierung nach erwartetem Return on Investment – jede Maßnahme wird messbar gemacht." },
  { icon: <BarChart3 className="h-5 w-5" />, title: "Data-Driven Roadmap", description: "SEO-Strategie auf Basis von Search Console, Wettbewerbsdaten und KI-gestützter Trendanalyse." },
  { icon: <Zap className="h-5 w-5" />, title: "Growth Hacking", description: "Agile Testmethoden und kreative Wachstumsstrategien für schnelle, skalierbare SEO-Erfolge." },
  { icon: <Target className="h-5 w-5" />, title: "Omnichannel Strategie", description: "SEO als Teil einer kanalübergreifenden Strategie – integriert mit Ads, Social Media und Content Marketing." },
  { icon: <Shield className="h-5 w-5" />, title: "Brand Protection", description: "Schutz Ihrer Marke in den Suchergebnissen – gegen Negative SEO, Brand Bidding und Reputationsrisiken." },
  { icon: <Globe className="h-5 w-5" />, title: "Internationale SEO Expansion", description: "Hreflang-Strategien, länderspezifische Keyword-Recherche und technische Umsetzung für globale Sichtbarkeit." },
];

const SEOStrategie = () => {
  useEffect(() => {
    document.title = "SEO-Strategie – Datengetriebene Roadmaps | TrafficWerk";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Nachhaltige SEO-Strategien für messbares Wachstum. Hub-and-Spoke, Growth Hacking, ROI-Maximierung & internationale Expansion. Jetzt beraten lassen.");
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pb-20 pt-32 md:pb-28 md:pt-40">
          <div className="container mx-auto px-6 text-center">
            <motion.div className="mx-auto max-w-3xl" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600">
                Datengetrieben · Nachhaltig · Skalierbar
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 md:text-5xl lg:text-6xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                SEO-Strategie
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-500 md:text-xl">
                Nachhaltiges Wachstum beginnt mit der richtigen Strategie. Wir entwickeln datengestützte SEO-Roadmaps, die Ihre organische Sichtbarkeit systematisch und langfristig steigern.
              </p>
              <div className="mt-10">
                <Button size="lg" className="rounded-full bg-blue-600 px-10 text-base font-medium text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700" asChild>
                  <Link to="/kontakt">Beratung anfragen <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Features */}
        <section className="border-t border-slate-100 py-24">
          <div className="container mx-auto px-6">
            <motion.div className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">Leistungen</span>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Was wir bieten</h2>
            </motion.div>
            <div className="mx-auto mt-16 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {coreFeatures.map((f, i) => (
                <motion.div key={i} className="group rounded-2xl border border-slate-100 bg-white p-7 transition-all duration-300 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-600/5" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">{f.icon}</div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{f.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Strategies */}
        <section className="border-t border-slate-100 bg-slate-50 py-24">
          <div className="container mx-auto px-6">
            <motion.div className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">Advanced Strategies</span>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Fortgeschrittene SEO-Strategien</h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-500">Für Unternehmen, die den nächsten Schritt gehen wollen – von Hub-and-Spoke über Growth Hacking bis zur internationalen Expansion.</p>
            </motion.div>
            <div className="mx-auto mt-16 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {advancedStrategies.map((f, i) => (
                <motion.div key={i} className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-600/5" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">{f.icon}</div>
                  <h3 className="mt-5 text-base font-semibold text-slate-900">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{f.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategy & Growth */}
        <section className="border-t border-slate-100 py-24">
          <div className="container mx-auto px-6">
            <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">Strategie</span>
                <h3 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Daten statt Bauchgefühl</h3>
                <p className="mt-4 text-slate-500 leading-relaxed">Jede unserer Empfehlungen basiert auf messbaren Daten – für transparente und nachvollziehbare Ergebnisse.</p>
                <ul className="mt-8 space-y-4">
                  {["Individuelle Analyse statt Standard-Audit", "Priorisierung nach Impact und Umsetzbarkeit", "Transparentes Reporting mit klaren KPIs", "Kontinuierliche Optimierung und Anpassung"].map((text, i) => (
                    <motion.li key={i} className="flex items-start gap-3" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}>
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                      <span className="text-sm font-medium text-slate-700">{text}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}>
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">Ergebnisse</span>
                <h3 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Nachhaltiges Wachstum</h3>
                <p className="mt-4 text-slate-500 leading-relaxed">SEO ist kein Sprint – sondern ein System für langfristigen, messbaren Unternehmenserfolg.</p>
                <ul className="mt-8 space-y-4">
                  {["Steigende organische Sichtbarkeit Monat für Monat", "Qualifizierter Traffic mit hoher Kaufabsicht", "Sinkende Abhängigkeit von bezahlter Werbung", "Nachhaltige Marktpositionierung gegenüber Wettbewerbern"].map((text, i) => (
                    <motion.li key={i} className="flex items-start gap-3" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 3}>
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                      <span className="text-sm font-medium text-slate-700">{text}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="border-t border-slate-100 py-24">
          <div className="container mx-auto px-6">
            <motion.div className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">Ablauf</span>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Unser Prozess</h2>
            </motion.div>
            <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { step: "Ist-Analyse", desc: "Umfassende Bestandsaufnahme Ihrer organischen Performance, Wettbewerbssituation und Marktchancen." },
                { step: "Strategieentwicklung", desc: "Maßgeschneiderte SEO-Roadmap mit klaren Prioritäten, KPIs und Meilensteinen." },
                { step: "Umsetzung", desc: "Gezielte Maßnahmen in Content, Technik und Offpage – koordiniert und priorisiert." },
                { step: "Optimierung & Reporting", desc: "Monatliche Performance-Reviews und datenbasierte Anpassung der Strategie." },
              ].map((p, i) => (
                <motion.div key={i} className="relative rounded-2xl border border-slate-100 bg-white p-7" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">{i + 1}</div>
                  <h3 className="mt-5 text-base font-semibold text-slate-900">{p.step}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{p.desc}</p>
                  {i < 3 && <div className="absolute -right-3 top-12 hidden text-slate-300 lg:block"><ArrowRight className="h-5 w-5" /></div>}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 py-20">
          <div className="container mx-auto px-6 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold text-white md:text-4xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Starten Sie jetzt</h2>
              <p className="mx-auto mt-4 max-w-lg text-blue-100">Lassen Sie uns in einem unverbindlichen Gespräch besprechen, wie wir Ihre SEO-Strategie auf das nächste Level bringen.</p>
              <Button size="lg" className="mt-8 rounded-full bg-white px-10 text-base font-semibold text-blue-600 shadow-lg hover:bg-blue-50" asChild>
                <Link to="/kontakt">Kostenlose Erstberatung <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SEOStrategie;
