import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import blogKiSeo from "@/assets/blog-ki-seo.webp";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const KIundSEO = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="relative h-[400px] w-full overflow-hidden">
        <img
          src={blogKiSeo}
          alt="Künstliche Intelligenz und SEO"
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
                AI & SEO
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-600">
                <Calendar className="h-3 w-3" /> 9. Feb. 2026
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-600">
                <Clock className="h-3 w-3" /> Lesezeit: 5 Min
              </span>
            </div>

            <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-4xl lg:text-[2.75rem]">
              KI und SEO: Wie AI-Search die Branche verändert
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-500">
              Künstliche Intelligenz revolutioniert die Art, wie Menschen suchen und Informationen finden. Was bedeutet das für Ihre SEO-Strategie? Ein umfassender Überblick.
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
              <h2 className="text-xl font-bold text-slate-900">Die neue Ära der Suche</h2>
              <p className="mt-3 leading-relaxed text-slate-600">
                Mit der Einführung von AI Overviews durch Google, Bing Chat und Perplexity AI hat sich die Suchlandschaft fundamental verändert. Nutzer erhalten zunehmend direkte Antworten – generiert durch KI-Modelle, die Inhalte aus dem gesamten Web zusammenfassen.
              </p>
              <p className="mt-3 leading-relaxed text-slate-600">
                Für Website-Betreiber und SEO-Experten stellt sich die zentrale Frage: Wie bleibe ich sichtbar, wenn die KI die Antwort direkt in den Suchergebnissen gibt?
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">Wie AI Overviews funktionieren</h2>
              <p className="mt-3 leading-relaxed text-slate-600">
                Google nutzt seine Gemini-Modelle, um komplexe Suchanfragen zu verstehen und aus mehreren Quellen eine zusammenfassende Antwort zu generieren. Diese erscheint prominent oberhalb der organischen Suchergebnisse.
              </p>
              <ul className="mt-4 space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <ArrowRight className="mt-1 h-3.5 w-3.5 shrink-0 text-blue-600" />
                  <span><strong className="text-slate-900">Quellenangaben:</strong> AI Overviews verlinken auf die genutzten Quellen – hier liegt Ihre Chance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="mt-1 h-3.5 w-3.5 shrink-0 text-blue-600" />
                  <span><strong className="text-slate-900">Conversational Queries:</strong> KI versteht natürliche Sprache besser als je zuvor – optimieren Sie für Fragen und komplexe Suchanfragen.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="mt-1 h-3.5 w-3.5 shrink-0 text-blue-600" />
                  <span><strong className="text-slate-900">E-E-A-T:</strong> Expertise, Experience, Authoritativeness und Trustworthiness werden noch wichtiger als Ranking-Signale.</span>
                </li>
              </ul>
            </section>

            <blockquote className="border-l-4 border-blue-600 bg-blue-50/50 py-4 pl-6 pr-4 text-slate-700 italic">
              „Die Zukunft der Suchmaschinenoptimierung liegt nicht im Kampf gegen KI, sondern darin, die bevorzugte Quelle der KI zu werden."
            </blockquote>

            <section>
              <h2 className="text-xl font-bold text-slate-900">SEO-Strategien für die KI-Ära</h2>
              <p className="mt-3 leading-relaxed text-slate-600">
                Die gute Nachricht: Viele bewährte SEO-Prinzipien bleiben relevant. Doch der Fokus verschiebt sich deutlich.
              </p>
              <ul className="mt-4 space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <ArrowRight className="mt-1 h-3.5 w-3.5 shrink-0 text-blue-600" />
                  <span><strong className="text-slate-900">Unique Expertise zeigen:</strong> Eigene Daten, Fallstudien und Erfahrungsberichte machen Ihre Inhalte zur bevorzugten Quelle.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="mt-1 h-3.5 w-3.5 shrink-0 text-blue-600" />
                  <span><strong className="text-slate-900">Strukturierte Daten:</strong> Schema Markup hilft KI-Systemen, Ihre Inhalte besser zu verstehen und korrekt zu zitieren.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="mt-1 h-3.5 w-3.5 shrink-0 text-blue-600" />
                  <span><strong className="text-slate-900">Themenkompetenz aufbauen:</strong> Erstellen Sie umfassende Content-Cluster, die ein Thema in der Tiefe abdecken.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="mt-1 h-3.5 w-3.5 shrink-0 text-blue-600" />
                  <span><strong className="text-slate-900">Brand Building:</strong> Starke Marken werden häufiger als Quelle in AI Overviews zitiert.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">Chancen statt Bedrohung</h2>
              <p className="mt-3 leading-relaxed text-slate-600">
                Obwohl Zero-Click-Searches zunehmen, zeigen aktuelle Studien: Websites, die in AI Overviews als Quelle zitiert werden, verzeichnen durchschnittlich <strong>18 % mehr qualifizierten Traffic</strong>. Der Grund: Nutzer, die tiefer einsteigen wollen, klicken gezielt auf vertrauenswürdige Quellen.
              </p>
              <p className="mt-3 leading-relaxed text-slate-600">
                Der Schlüssel liegt darin, Inhalte zu erstellen, die über oberflächliche Antworten hinausgehen – Inhalte mit echtem Mehrwert, die KI nicht vollständig ersetzen kann.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">Fazit</h2>
              <p className="mt-3 leading-relaxed text-slate-600">
                KI verändert die Suche, aber sie eliminiert SEO nicht. Im Gegenteil: Wer seine Strategie anpasst, hochwertige Inhalte mit echter Expertise erstellt und technisch sauber arbeitet, wird auch in der KI-Ära profitieren. Die Frage ist nicht ob, sondern wie schnell Sie sich anpassen.
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
              Bereit für die KI-Zukunft der Suche?
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-slate-500">
              Wir entwickeln Ihre SEO-Strategie für die neue Ära – datengetrieben, zukunftssicher und mit messbaren Ergebnissen.
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

export default KIundSEO;
