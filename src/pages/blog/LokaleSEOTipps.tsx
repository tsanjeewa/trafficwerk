import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import blogLokaleSeo from "@/assets/blog-lokale-seo.webp";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const LokaleSEOTipps = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="relative h-[400px] w-full overflow-hidden">
        <img
          src={blogLokaleSeo}
          alt="Lokale SEO Strategie"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
      </div>

      <article className="relative -mt-32 pb-24">
        <div className="mx-auto max-w-3xl px-6">
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
                Lokale SEO
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-600">
                <Calendar className="h-3 w-3" /> 2. Feb. 2026
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-600">
                <Clock className="h-3 w-3" /> Lesezeit: 5 Min
              </span>
            </div>

            <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-4xl lg:text-[2.75rem]">
              Lokale SEO: 10 Tipps für mehr Sichtbarkeit in Ihrer Region
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-500">
              46 % aller Google-Suchen haben einen lokalen Bezug. Erfahren Sie, wie Sie Ihr Unternehmen in der lokalen Suche nach vorne bringen – Schritt für Schritt.
            </p>
          </motion.div>

          <motion.div
            className="prose-article mt-12 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <section>
              <h2 className="text-xl font-bold text-slate-900">Warum lokale SEO unverzichtbar ist</h2>
              <p className="mt-3 leading-relaxed text-slate-600">
                Ob Restaurant, Handwerksbetrieb oder Arztpraxis – wenn potenzielle Kunden in Ihrer Nähe nach Ihren Dienstleistungen suchen, müssen Sie sichtbar sein. Lokale SEO sorgt dafür, dass Ihr Unternehmen genau dann erscheint, wenn es darauf ankommt.
              </p>
              <p className="mt-3 leading-relaxed text-slate-600">
                <strong>76 % der Nutzer</strong>, die eine lokale Suche auf dem Smartphone durchführen, besuchen innerhalb von 24 Stunden ein Geschäft. Diese Zahlen verdeutlichen das enorme Potenzial.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">10 bewährte Tipps für Ihre lokale Sichtbarkeit</h2>

              <div className="mt-6 space-y-6">
                {[
                  { n: "1", title: "Google Business Profile optimieren", text: "Ihr Google-Unternehmensprofil ist das Fundament lokaler SEO. Füllen Sie alle Felder vollständig aus – Name, Adresse, Telefonnummer, Öffnungszeiten, Kategorien und eine aussagekräftige Beschreibung." },
                  { n: "2", title: "NAP-Konsistenz sicherstellen", text: "Name, Address, Phone (NAP) müssen auf jeder Plattform identisch sein – Website, Google, Social Media, Branchenverzeichnisse. Inkonsistenzen verwirren Google und kosten Rankings." },
                  { n: "3", title: "Lokale Keywords verwenden", text: "Integrieren Sie Ihren Standort natürlich in Titel, Meta-Beschreibungen und Inhalte. Beispiel: 'Zahnarzt München Schwabing' statt nur 'Zahnarzt'." },
                  { n: "4", title: "Bewertungen aktiv managen", text: "Bitten Sie zufriedene Kunden um Google-Bewertungen und antworten Sie auf jede Rezension – positiv wie negativ. Bewertungen sind ein starker lokaler Ranking-Faktor." },
                  { n: "5", title: "Lokale Inhalte erstellen", text: "Erstellen Sie Blogbeiträge und Seiten mit lokalem Bezug: Veranstaltungen, lokale Partnerschaften oder regionale Branchentipps." },
                  { n: "6", title: "Strukturierte Daten nutzen", text: "Implementieren Sie LocalBusiness Schema Markup, damit Google Ihre Unternehmensdaten korrekt erfasst und in Rich Results anzeigt." },
                  { n: "7", title: "Mobile Optimierung priorisieren", text: "Die meisten lokalen Suchen erfolgen mobil. Stellen Sie sicher, dass Ihre Website schnell lädt, responsive ist und eine Click-to-Call-Funktion bietet." },
                  { n: "8", title: "Lokale Backlinks aufbauen", text: "Verlinkungen von regionalen Websites – Zeitungen, Vereine, Handelskammern – stärken Ihre lokale Autorität erheblich." },
                  { n: "9", title: "Verzeichniseinträge pflegen", text: "Tragen Sie Ihr Unternehmen in relevante Verzeichnisse ein: Yelp, Gelbe Seiten, branchenspezifische Portale. Achten Sie auf Aktualität und NAP-Konsistenz." },
                  { n: "10", title: "Google Posts regelmäßig nutzen", text: "Veröffentlichen Sie wöchentlich Updates, Angebote oder Events über Google Posts. Das zeigt Google Aktivität und erhöht Ihre Sichtbarkeit im Knowledge Panel." },
                ].map((tip) => (
                  <div key={tip.n} className="flex gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">
                      {tip.n}
                    </span>
                    <div>
                      <h3 className="font-bold text-slate-900">{tip.title}</h3>
                      <p className="mt-1 leading-relaxed text-slate-600">{tip.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <blockquote className="border-l-4 border-blue-600 bg-blue-50/50 py-4 pl-6 pr-4 text-slate-700 italic">
              „Lokale SEO ist kein einmaliges Projekt, sondern ein kontinuierlicher Prozess. Wer am Ball bleibt, dominiert seine Region."
            </blockquote>

            <section>
              <h2 className="text-xl font-bold text-slate-900">Fazit</h2>
              <p className="mt-3 leading-relaxed text-slate-600">
                Lokale SEO bietet gerade für kleine und mittelständische Unternehmen ein enormes Potenzial. Mit den richtigen Maßnahmen können Sie Ihre regionale Sichtbarkeit signifikant steigern, mehr qualifizierte Anfragen generieren und sich gegenüber der Konkurrenz behaupten. Beginnen Sie mit Ihrem Google Business Profile und arbeiten Sie sich systematisch durch unsere Tipps.
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
              Möchten Sie Ihre lokale Sichtbarkeit steigern?
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-slate-500">
              Wir analysieren Ihre lokale Präsenz und entwickeln eine maßgeschneiderte Strategie für Ihre Region.
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

export default LokaleSEOTipps;
