import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const CoreWebVitals = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Image */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=600&fit=crop"
          alt="Core Web Vitals Dashboard"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
      </div>

      <article className="relative -mt-32 pb-24">
        <div className="mx-auto max-w-3xl px-6">
          {/* Header */}
          <motion.div {...fadeUp}>
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Zurück zur Startseite
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                Technische SEO
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-400">
                <Calendar className="h-3 w-3" /> 16. Feb. 2026
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-400">
                <Clock className="h-3 w-3" /> Lesezeit: 5 Min
              </span>
            </div>

            <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-4xl lg:text-[2.75rem]">
              Core Web Vitals 2025/2026: Was Sie jetzt wissen müssen
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-500">
              Googles Core Web Vitals sind kein Trend mehr – sie sind der Maßstab für technische Website-Qualität. Erfahren Sie, welche Metriken 2026 wirklich zählen und wie Sie Ihre Seite optimieren.
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            className="prose-article mt-12 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <section>
              <h2 className="text-xl font-bold text-slate-900">Was sind Core Web Vitals?</h2>
              <p className="mt-3 leading-relaxed text-slate-600">
                Core Web Vitals sind eine Reihe von nutzerorientierten Metriken, die Google verwendet, um die Qualität der Nutzererfahrung auf einer Webseite zu bewerten. Sie messen drei entscheidende Aspekte: <strong>Ladegeschwindigkeit</strong>, <strong>Interaktivität</strong> und <strong>visuelle Stabilität</strong>.
              </p>
              <p className="mt-3 leading-relaxed text-slate-600">
                Seit 2021 sind sie ein offizieller Ranking-Faktor. Doch die Metriken entwickeln sich weiter – und wer nicht mithält, verliert Sichtbarkeit.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">Die drei Schlüsselmetriken für 2026</h2>
              <ul className="mt-4 space-y-3">
                <li className="flex gap-3 text-slate-600">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">1</span>
                  <div>
                    <strong className="text-slate-900">Largest Contentful Paint (LCP)</strong> – Misst die Ladezeit des größten sichtbaren Inhaltselements. Zielwert: unter 2,5 Sekunden.
                  </div>
                </li>
                <li className="flex gap-3 text-slate-600">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">2</span>
                  <div>
                    <strong className="text-slate-900">Interaction to Next Paint (INP)</strong> – Der Nachfolger von FID, der die Reaktionsfähigkeit auf Nutzerinteraktionen misst. Zielwert: unter 200 Millisekunden.
                  </div>
                </li>
                <li className="flex gap-3 text-slate-600">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">3</span>
                  <div>
                    <strong className="text-slate-900">Cumulative Layout Shift (CLS)</strong> – Bewertet die visuelle Stabilität der Seite. Zielwert: unter 0,1.
                  </div>
                </li>
              </ul>
            </section>

            <blockquote className="border-l-4 border-blue-600 bg-blue-50/50 py-4 pl-6 pr-4 text-slate-700 italic">
              „Websites, die exzellente Core Web Vitals liefern, haben im Durchschnitt 24 % niedrigere Absprungraten und signifikant höhere Conversion-Rates."
            </blockquote>

            <section>
              <h2 className="text-xl font-bold text-slate-900">Was hat sich 2025/2026 geändert?</h2>
              <p className="mt-3 leading-relaxed text-slate-600">
                Die wichtigste Neuerung: <strong>Interaction to Next Paint (INP)</strong> hat First Input Delay (FID) im März 2024 vollständig ersetzt. INP ist deutlich anspruchsvoller, da es nicht nur die erste Interaktion, sondern alle Interaktionen während des gesamten Seitenbesuchs erfasst.
              </p>
              <p className="mt-3 leading-relaxed text-slate-600">
                Darüber hinaus hat Google die Gewichtung von Core Web Vitals im Ranking-Algorithmus weiter verstärkt. Mobile Performance wird besonders streng bewertet, da über 65 % des globalen Traffics von mobilen Geräten stammen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">5 konkrete Optimierungstipps</h2>
              <ul className="mt-4 space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <ArrowRight className="mt-1 h-3.5 w-3.5 shrink-0 text-blue-600" />
                  <span><strong className="text-slate-900">Bilder optimieren:</strong> Verwenden Sie WebP/AVIF-Formate und implementieren Sie Lazy Loading für alle Bilder unterhalb des Viewports.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="mt-1 h-3.5 w-3.5 shrink-0 text-blue-600" />
                  <span><strong className="text-slate-900">JavaScript reduzieren:</strong> Entfernen Sie ungenutzten Code und setzen Sie auf Code Splitting, um die Interaktivität zu verbessern.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="mt-1 h-3.5 w-3.5 shrink-0 text-blue-600" />
                  <span><strong className="text-slate-900">CLS vermeiden:</strong> Reservieren Sie feste Größen für Bilder, Ads und Embeds, um Layout-Verschiebungen zu verhindern.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="mt-1 h-3.5 w-3.5 shrink-0 text-blue-600" />
                  <span><strong className="text-slate-900">Server-Antwortzeiten:</strong> Nutzen Sie ein CDN und optimieren Sie Ihre Time to First Byte (TTFB) auf unter 200ms.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="mt-1 h-3.5 w-3.5 shrink-0 text-blue-600" />
                  <span><strong className="text-slate-900">Regelmäßig messen:</strong> Nutzen Sie Google PageSpeed Insights und die Search Console, um Ihre Werte kontinuierlich zu überwachen.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">Fazit</h2>
              <p className="mt-3 leading-relaxed text-slate-600">
                Core Web Vitals sind kein optionales Extra – sie sind ein fundamentaler Bestandteil einer erfolgreichen SEO-Strategie. Wer 2026 in den Suchergebnissen bestehen will, muss technische Exzellenz liefern. Die gute Nachricht: Die meisten Optimierungen zahlen sich nicht nur im Ranking aus, sondern verbessern direkt die Nutzererfahrung und damit auch die Conversion-Rate.
              </p>
            </section>
          </motion.div>

          {/* CTA Banner */}
          <motion.div
            className="mt-16 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 text-center md:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-slate-900">
              Sind Ihre Core Web Vitals auf dem neuesten Stand?
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-slate-500">
              Wir analysieren Ihre Website und identifizieren alle Performance-Potenziale – kostenlos und unverbindlich.
            </p>
            <Link
              to="/kontakt"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
            >
              Jetzt Beratung vereinbaren
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default CoreWebVitals;
