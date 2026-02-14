import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Impressum = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-20">
      <section className="py-24">
        <div className="container mx-auto max-w-3xl px-6">
          <h1 className="font-display text-4xl font-bold">Impressum</h1>
          <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
            <div>
              <h2 className="font-display text-lg font-semibold text-foreground">Angaben gemäß § 5 TMG</h2>
              <p className="mt-2">TrafficWerk<br />Inhaber: Thomas Kinne<br />Taradeauer Str. 11<br />85244 Röhrmoos</p>
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-foreground">Kontakt</h2>
              <p className="mt-2">Telefon: +49 (0) 8139 999 000<br />E-Mail: info@trafficwerk.de</p>
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-foreground">Umsatzsteuer-ID</h2>
              <p className="mt-2">Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: [wird nachgetragen]</p>
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-foreground">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p className="mt-2">Thomas Kinne<br />Taradeauer Str. 11<br />85244 Röhrmoos</p>
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-foreground">Haftungsausschluss</h2>
              <p className="mt-2">Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Impressum;
