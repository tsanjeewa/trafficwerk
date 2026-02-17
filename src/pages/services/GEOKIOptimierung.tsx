import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Bot, Brain, Sparkles, Globe, Search, Eye, FileCheck, Zap } from "lucide-react";
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

const features = [
  { icon: <Sparkles className="h-5 w-5" />, title: "Generative Engine Optimization", description: "Optimierung Ihrer Inhalte, damit sie von KI-Suchmaschinen als bevorzugte Quelle herangezogen und zitiert werden." },
  { icon: <Eye className="h-5 w-5" />, title: "AI Overview Optimierung", description: "Gezielte Platzierung in Googles KI-generierten Antworten für maximale Sichtbarkeit ohne Klick." },
  { icon: <Bot className="h-5 w-5" />, title: "ChatGPT Visibility", description: "Strategien, damit Ihre Marke in ChatGPT-Antworten referenziert und empfohlen wird." },
  { icon: <Search className="h-5 w-5" />, title: "Perplexity SEO", description: "Optimierung für Perplexity und andere Answer Engines, die Quellen direkt in Antworten einbinden." },
  { icon: <Brain className="h-5 w-5" />, title: "AI-Powered Content", description: "Content-Strategien, die KI-Systeme als autoritativ und vertrauenswürdig einstufen." },
  { icon: <Globe className="h-5 w-5" />, title: "Semantic Search", description: "Semantische Optimierung Ihrer Inhalte für ein tiefes Verständnis durch KI-Algorithmen." },
  { icon: <FileCheck className="h-5 w-5" />, title: "Strukturierte Daten für KI", description: "JSON-LD und Schema Markup, das KI-Systeme zuverlässig interpretieren und nutzen." },
  { icon: <Zap className="h-5 w-5" />, title: "E-E-A-T Optimierung", description: "Stärkung von Erfahrung, Expertise, Autorität und Vertrauen – entscheidend für KI-Quellenauswahl." },
];

const process = [
  { step: "AI-Visibility Audit", desc: "Umfassende Analyse Ihrer aktuellen Sichtbarkeit in Google AI Overviews, ChatGPT, Perplexity und weiteren KI-Systemen." },
  { step: "GEO-Strategie", desc: "Entwicklung einer maßgeschneiderten Strategie für maximale Zitierbarkeit und Markenpräsenz in KI-Antworten." },
  { step: "Content & Technik", desc: "Implementierung optimierter Content-Formate, strukturierter Daten und E-E-A-T-Signale." },
  { step: "Monitoring & Skalierung", desc: "Laufende Überwachung der KI-Sichtbarkeit und proaktive Anpassung an neue Entwicklungen." },
];

const GEOKIOptimierung = () => {
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
                Generative Engine Optimization · AI Search · Zukunft der Suche
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 md:text-5xl lg:text-6xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                GEO & KI-Optimierung
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-500 md:text-xl">
                Die Suche verändert sich fundamental. Google AI Overviews, ChatGPT, Perplexity – KI-Systeme bestimmen zunehmend, welche Marken sichtbar sind. Wir machen Ihr Unternehmen zur bevorzugten Quelle in der neuen Ära der Suche.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button
                  size="lg"
                  className="rounded-full bg-blue-600 px-10 text-base font-medium text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700"
                  asChild
                >
                  <Link to="/kontakt">
                    GEO-Beratung anfragen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Link to="/wissen?search=Generative+Engine+Optimization" className="text-sm font-medium text-blue-600 hover:underline">
                  Was ist GEO? →
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why GEO */}
        <section className="border-t border-slate-100 bg-slate-50 py-24">
          <div className="container mx-auto px-6">
            <motion.div className="mx-auto max-w-3xl text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">Warum GEO?</span>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                KI verändert die Spielregeln der Suche
              </h2>
              <p className="mt-4 text-slate-500 leading-relaxed">
                Über 40% aller Google-Suchen zeigen bereits AI Overviews. ChatGPT hat über 200 Millionen Nutzer. Wer jetzt nicht in KI-Suchsystemen sichtbar ist, verliert Marktanteile an Wettbewerber, die es sind.
              </p>
            </motion.div>
            <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
              {[
                { value: "40%+", label: "der Google-Suchen mit AI Overview" },
                { value: "200M+", label: "aktive ChatGPT-Nutzer weltweit" },
                { value: "0 Klicks", label: "Zero-Click-Antworten nehmen zu" },
              ].map((stat, i) => (
                <motion.div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}>
                  <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
                  <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="border-t border-slate-100 py-24">
          <div className="container mx-auto px-6">
            <motion.div className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">Leistungen</span>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                So machen wir Ihre Marke in KI-Suchen sichtbar
              </h2>
            </motion.div>
            <div className="mx-auto mt-16 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((f, i) => (
                <motion.div key={i} className="group rounded-2xl border border-slate-100 bg-white p-7 transition-all duration-300 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-600/5" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">{f.icon}</div>
                  <h3 className="mt-5 text-base font-semibold text-slate-900">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{f.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="border-t border-slate-100 py-24">
          <div className="container mx-auto px-6">
            <motion.div className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">Ablauf</span>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Unser GEO-Prozess</h2>
            </motion.div>
            <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
              {process.map((p, i) => (
                <motion.div key={i} className="relative rounded-2xl border border-slate-100 bg-white p-7" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">{i + 1}</div>
                  <h3 className="mt-5 text-base font-semibold text-slate-900">{p.step}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{p.desc}</p>
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

        {/* Strategy & Results */}
        <section className="border-t border-slate-100 py-24">
          <div className="container mx-auto px-6">
            <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">Strategie</span>
                <h3 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Die Zukunft gehört GEO</h3>
                <p className="mt-4 text-slate-500 leading-relaxed">KI-Suchsysteme bewerten Inhalte anders als klassische Suchmaschinen. Wer jetzt optimiert, sichert sich einen entscheidenden Wettbewerbsvorteil.</p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Frühzeitige Positionierung in KI-Suchergebnissen",
                    "Content-Formate, die KI-Systeme bevorzugt zitieren",
                    "Starke E-E-A-T-Signale für maximale Vertrauenswürdigkeit",
                    "Technische Optimierung für KI-Crawling und Parsing",
                  ].map((text, i) => (
                    <motion.li key={i} className="flex items-start gap-3" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}>
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                      <span className="text-sm font-medium text-slate-700">{text}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}>
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">Ergebnisse</span>
                <h3 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>KI-Sichtbarkeit als Wettbewerbsvorteil</h3>
                <p className="mt-4 text-slate-500 leading-relaxed">Werden Sie zur bevorzugten Quelle für KI-generierte Antworten – über alle Plattformen hinweg.</p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Prominente Platzierung in Google AI Overviews",
                    "Zitation in ChatGPT- und Perplexity-Antworten",
                    "Steigende Brand Awareness über KI-Kanäle",
                    "Zukunftssichere Content- und SEO-Strategie",
                  ].map((text, i) => (
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

        {/* CTA */}
        <section className="bg-blue-600 py-20">
          <div className="container mx-auto px-6 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold text-white md:text-4xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Bereit für die Zukunft der Suche?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-blue-100">
                Lassen Sie uns gemeinsam Ihre Marke in KI-Suchmaschinen sichtbar machen – bevor es Ihre Wettbewerber tun.
              </p>
              <Button size="lg" className="mt-8 rounded-full bg-white px-10 text-base font-semibold text-blue-600 shadow-lg hover:bg-blue-50" asChild>
                <Link to="/kontakt">
                  Kostenlose GEO-Analyse
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

export default GEOKIOptimierung;
