import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="border-b border-slate-100 pb-8">
    <h2 className="text-lg font-bold text-slate-900">{title}</h2>
    <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-600">{children}</div>
  </div>
);

const Impressum = () => (
  <div className="min-h-screen bg-white">
    <Navbar />
    <main className="pt-20">
      <section className="py-24">
        <motion.div
          className="container mx-auto max-w-3xl px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">Impressum</h1>
          <div className="mt-10 space-y-8">
            <Section title="Angaben gemäß § 5 TMG">
              <p>
                TrafficWerk<br />
                Inhaber: Thomas Kinne<br />
                Taradeauer Str. 11<br />
                85244 Röhrmoos<br />
                Deutschland
              </p>
            </Section>

            <Section title="Kontakt">
              <p>
                Telefon: +49 1578 2208713<br />
                E-Mail: <a href="mailto:info@trafficwerk.de" className="text-blue-600 hover:underline">info@trafficwerk.de</a>
              </p>
            </Section>

           <Section title="Umsatzsteuer-ID">
  <p>
    Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
    DE208168690
  </p>
</Section>>

            <Section title="Redaktionell verantwortlich">
              <p>
                Thomas Kinne<br />
                Taradeauer Str. 11<br />
                85244 Röhrmoos
              </p>
            </Section>

            <Section title="EU-Streitschlichtung">
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
            </Section>

            <Section title="Verbraucherstreitbeilegung / Universalschlichtungsstelle">
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </Section>

            <Section title="Haftung für Inhalte">
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
            </Section>

            <Section title="Haftung für Links">
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </Section>
          </div>
        </motion.div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Impressum;
