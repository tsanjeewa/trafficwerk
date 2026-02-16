import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="border-b border-slate-100 pb-8">
    <h2 className="text-lg font-bold text-slate-900">{title}</h2>
    <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-600">{children}</div>
  </div>
);

const Datenschutz = () => (
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
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">Datenschutzerklärung</h1>
          <div className="mt-10 space-y-8">

            <Section title="1. Datenschutz auf einen Blick">
              <p><strong className="text-slate-900">Allgemeine Hinweise</strong></p>
              <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>
              <p><strong className="text-slate-900">Datenerfassung auf dieser Website</strong></p>
              <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.</p>
              <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).</p>
            </Section>

            <Section title="2. Hosting und Content Delivery Networks (CDN)">
              <p>Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v.a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.</p>
              <p>Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).</p>
            </Section>

            <Section title="3. Allgemeine Hinweise und Pflichtinformationen">
              <p><strong className="text-slate-900">Hinweis zur verantwortlichen Stelle</strong></p>
              <p>
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                TrafficWerk<br />
                Inhaber: Thomas Kinne<br />
                Taradeauer Str. 11<br />
                85244 Röhrmoos<br /><br />
                Telefon: +49 1578 2208713<br />
                E-Mail: <a href="mailto:info@trafficwerk.de" className="text-blue-600 hover:underline">info@trafficwerk.de</a>
              </p>
              <p><strong className="text-slate-900">Widerruf Ihrer Einwilligung zur Datenverarbeitung</strong></p>
              <p>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>
              <p><strong className="text-slate-900">Beschwerderecht bei der zuständigen Aufsichtsbehörde</strong></p>
              <p>Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes.</p>
              <p><strong className="text-slate-900">Recht auf Datenübertragbarkeit</strong></p>
              <p>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.</p>
              <p><strong className="text-slate-900">Auskunft, Löschung und Berichtigung</strong></p>
              <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten.</p>
            </Section>

            <Section title="4. Datenerfassung auf dieser Website">
              <p><strong className="text-slate-900">Cookies</strong></p>
              <p>Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.</p>
              <p><strong className="text-slate-900">Kontaktformular</strong></p>
              <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.</p>
              <p><strong className="text-slate-900">Server-Log-Dateien</strong></p>
              <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</p>
            </Section>

            <Section title="5. Analyse-Tools und Werbung">
              <p><strong className="text-slate-900">Google Analytics</strong></p>
              <p>Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland. Google Analytics ermöglicht es dem Websitebetreiber, das Verhalten der Websitebesucher zu analysieren. Hierbei erhält der Websitebetreiber verschiedene Nutzungsdaten, wie z.B. Seitenaufrufe, Verweildauer, verwendete Betriebssysteme und Herkunft des Nutzers.</p>
              <p><strong className="text-slate-900">Google Tag Manager</strong></p>
              <p>Wir setzen den Google Tag Manager ein. Der Google Tag Manager ist eine Lösung, mit der wir so genannte Website-Tags über eine Oberfläche verwalten können. Der Tag Manager selbst (das Tool, welches die Tags implementiert) ist eine cookielose Domain und erfasst keine personenbezogenen Daten.</p>
            </Section>

            <Section title="6. Plugins und Tools">
              <p><strong className="text-slate-900">Google Maps</strong></p>
              <p>Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.</p>
              <p><strong className="text-slate-900">Google Web Fonts</strong></p>
              <p>Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen. Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen.</p>
            </Section>

          </div>
        </motion.div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Datenschutz;
