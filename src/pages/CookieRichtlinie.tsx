import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const CookieRichtlinie = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-20">
      <section className="py-24">
        <div className="container mx-auto max-w-3xl px-6">
          <h1 className="font-display text-4xl font-bold">Cookie-Richtlinie</h1>
          <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
            <div>
              <h2 className="font-display text-lg font-semibold text-foreground">Was sind Cookies?</h2>
              <p className="mt-2">Cookies sind kleine Textdateien, die beim Besuch einer Website auf Ihrem Computer oder mobilen Gerät gespeichert werden. Sie ermöglichen es der Website, Ihr Gerät wiederzuerkennen und verschiedene Funktionen bereitzustellen.</p>
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-foreground">Welche Cookies verwenden wir?</h2>
              <p className="mt-2"><strong className="text-foreground">Notwendige Cookies:</strong> Diese Cookies sind für die grundlegende Funktionalität der Website erforderlich, z.B. zur Speicherung Ihrer Cookie-Einstellungen.</p>
              <p className="mt-2"><strong className="text-foreground">Analyse-Cookies:</strong> Diese Cookies helfen uns zu verstehen, wie Besucher unsere Website nutzen. Alle Daten werden anonymisiert erfasst.</p>
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-foreground">Cookie-Einstellungen ändern</h2>
              <p className="mt-2">Sie können Ihre Cookie-Einstellungen jederzeit ändern, indem Sie Ihren Browser-Cache löschen. Bei Ihrem nächsten Besuch wird der Cookie-Banner erneut angezeigt.</p>
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-foreground">Kontakt</h2>
              <p className="mt-2">Bei Fragen zu unseren Cookies kontaktieren Sie uns unter info@trafficwerk.de.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default CookieRichtlinie;
