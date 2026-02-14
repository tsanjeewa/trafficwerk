import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Datenschutz = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-20">
      <section className="py-24">
        <div className="container mx-auto max-w-3xl px-6">
          <h1 className="font-display text-4xl font-bold">Datenschutzerklärung</h1>
          <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
            <div>
              <h2 className="font-display text-lg font-semibold text-foreground">1. Datenschutz auf einen Blick</h2>
              <p className="mt-2">Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-foreground">2. Verantwortlicher</h2>
              <p className="mt-2">TrafficWerk, Inhaber Thomas Kinne<br />Taradeauer Str. 11<br />85244 Röhrmoos<br />E-Mail: info@trafficwerk.de</p>
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-foreground">3. Datenerfassung auf dieser Website</h2>
              <p className="mt-2">Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Die Daten werden erhoben, wenn Sie uns diese mitteilen (z.B. über das Kontaktformular) oder wenn technische Daten automatisch beim Besuch erfasst werden.</p>
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-foreground">4. Ihre Rechte</h2>
              <p className="mt-2">Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger sowie den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.</p>
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-foreground">5. Cookies</h2>
              <p className="mt-2">Diese Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert. Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Datenschutz;
