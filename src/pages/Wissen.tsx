import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";

interface GlossaryTerm {
  term: string;
  definition: string;
  category?: string;
}

const glossaryTerms: GlossaryTerm[] = [
  // SEO
  { term: "301 Redirect", definition: "Eine permanente Weiterleitung von einer URL auf eine andere, die den Linkwert (Link Juice) nahezu vollständig überträgt.", category: "SEO" },
  { term: "404 Error", definition: "Ein HTTP-Statuscode, der anzeigt, dass die angeforderte Seite auf dem Server nicht gefunden wurde.", category: "SEO" },
  { term: "Alt Text", definition: "Ein beschreibender Text für Bilder, der Suchmaschinen hilft, den Bildinhalt zu verstehen, und die Barrierefreiheit verbessert.", category: "On-Page" },
  { term: "Backlink", definition: "Ein eingehender Link von einer anderen Website. Backlinks sind ein wichtiger Rankingfaktor für die Autorität einer Seite.", category: "Off-Page" },
  { term: "Bounce Rate", definition: "Der Prozentsatz der Besucher, die die Website verlassen, nachdem sie nur eine Seite betrachtet haben.", category: "Analytics" },
  { term: "Broken Link", definition: "Ein Hyperlink, der auf eine nicht mehr existierende Seite verweist und so einen 404-Fehler auslöst.", category: "SEO" },
  { term: "Canonical Tag", definition: "Ein HTML-Element, das Suchmaschinen die bevorzugte Version einer Seite mitteilt, um Duplicate Content zu vermeiden.", category: "SEO" },
  { term: "Content Marketing", definition: "Eine Strategie, bei der wertvolle und relevante Inhalte erstellt werden, um eine Zielgruppe anzusprechen und zu binden.", category: "Marketing" },
  { term: "Content Silo", definition: "Eine Methode der Website-Strukturierung, bei der thematisch verwandte Inhalte in hierarchische Gruppen organisiert werden.", category: "SEO" },
  { term: "Conversion", definition: "Eine gewünschte Aktion eines Nutzers auf einer Website, wie z. B. ein Kauf oder eine Anmeldung zum Newsletter.", category: "Analytics" },
  { term: "Conversion-Rate", definition: "Der Prozentsatz der Besucher, die eine gewünschte Aktion (z. B. Kauf, Anmeldung) auf einer Website durchführen.", category: "Performance Marketing" },
  { term: "Core Web Vitals", definition: "Von Google definierte Metriken (LCP, FID, CLS), die die Ladegeschwindigkeit, Interaktivität und visuelle Stabilität einer Webseite messen.", category: "Webdesign & Tech" },
  { term: "Crawl Budget", definition: "Die Anzahl der Seiten, die ein Suchmaschinen-Bot innerhalb eines bestimmten Zeitraums auf Ihrer Website crawlt.", category: "SEO" },
  { term: "Crawling", definition: "Der Prozess, bei dem Suchmaschinen-Bots das Internet nach neuen oder aktualisierten Inhalten durchsuchen.", category: "SEO" },
  { term: "CTA (Call to Action)", definition: "Ein auffälliges Element (z. B. ein Button), das den Nutzer zu einer bestimmten Handlung auffordert.", category: "Marketing" },
  { term: "CTR (Click-Through-Rate)", definition: "Das Verhältnis von Klicks auf einen Link zu der Anzahl der Impressionen (wie oft er gesehen wurde).", category: "SEO" },
  { term: "Domain Age", definition: "Das Alter einer Domain seit ihrer Erstregistrierung – ein indirekter Vertrauensfaktor für Suchmaschinen.", category: "SEO" },
  { term: "Domain Authority", definition: "Eine Metrik, die vorhersagt, wie gut eine Website in den Suchergebnissen ranken wird.", category: "SEO" },
  { term: "Dwell Time", definition: "Die Verweildauer eines Nutzers auf einer Seite, bevor er zu den Suchergebnissen zurückkehrt – ein Qualitätssignal.", category: "SEO" },
  { term: "E-A-T", definition: "Expertise, Authoritativeness, Trustworthiness – Googles Qualitätskriterien zur Bewertung von Inhalten und Autoren.", category: "SEO" },
  { term: "E-E-A-T", definition: "Experience, Expertise, Authoritativeness, Trustworthiness – erweiterte Google-Qualitätskriterien mit Fokus auf nachgewiesene Erfahrung.", category: "SEO" },
  { term: "Email Marketing", definition: "Der direkte Versand von Werbebotschaften an eine Gruppe von Personen per E-Mail.", category: "Marketing" },
  { term: "External Links", definition: "Hyperlinks, die von Ihrer Website auf eine andere Domain verweisen.", category: "Off-Page" },
  { term: "Favicon", definition: "Das kleine Symbol, das im Browser-Tab neben dem Seitentitel angezeigt wird – stärkt die Markenwiederkennung.", category: "Webdesign & Tech" },
  { term: "Featured Snippet", definition: "Ein hervorgehobenes Suchergebnis (Position 0), das eine direkte Antwort auf die Suchanfrage in einem Kasten anzeigt.", category: "SEO" },
  { term: "Funnel (Marketingtrichter)", definition: "Das Modell, das die Reise eines Kunden von der ersten Aufmerksamkeit bis zum Kauf beschreibt.", category: "Marketing" },
  { term: "Google Bot", definition: "Der Web-Crawler von Google, der Websites scannt, um sie in den Index aufzunehmen.", category: "SEO" },
  { term: "GSC (Google Search Console)", definition: "Ein kostenloses Google-Tool zur Überwachung und Optimierung der Suchperformance Ihrer Website.", category: "Tools" },
  { term: "Header Tags (H1-H6)", definition: "HTML-Elemente, die verwendet werden, um Überschriften und die Struktur des Inhalts zu definieren.", category: "On-Page" },
  { term: "Hreflang", definition: "Ein HTML-Attribut, das Suchmaschinen die Sprach- und Regionszuordnung einer Seite für internationale SEO mitteilt.", category: "SEO" },
  { term: "Image Alt", definition: "Alternativtext für Bilder, der deren Inhalt beschreibt und für Barrierefreiheit und Bild-SEO essenziell ist.", category: "On-Page" },
  { term: "Indexing", definition: "Der Prozess des Speicherns und Organisierens von Inhalten in der Datenbank einer Suchmaschine.", category: "SEO" },
  { term: "Influencer Marketing", definition: "Die Zusammenarbeit mit Personen, die in sozialen Medien eine hohe Reichweite und Einfluss auf ihre Follower haben.", category: "Marketing" },
  { term: "Internal Linking", definition: "Die strategische Verlinkung zwischen Seiten innerhalb der eigenen Website zur Stärkung der Seitenstruktur und Linkverteilung.", category: "On-Page" },
  { term: "Internal Links", definition: "Links, die von einer Seite auf eine andere Seite innerhalb derselben Domain verweisen.", category: "On-Page" },
  { term: "JSON-LD", definition: "Ein Format für strukturierte Daten (Schema Markup), das in den HTML-Head eingebettet wird und Suchmaschinen zusätzliche Informationen liefert.", category: "SEO" },
  { term: "Keyword Density", definition: "Der prozentuale Anteil eines Keywords im Verhältnis zur Gesamtwortzahl eines Textes.", category: "On-Page" },
  { term: "Keyword Gap", definition: "Die Analyse von Keywords, für die Mitbewerber ranken, die eigene Website jedoch nicht – eine Chance zur Erweiterung.", category: "SEO" },
  { term: "KPI (Key Performance Indicator)", definition: "Kennzahlen, mit denen der Erfolg von Marketingmaßnahmen gemessen wird (z. B. Klicks oder Conversions).", category: "Analytics" },
  { term: "Landing Page", definition: "Eine speziell optimierte Zielseite, auf der ein Nutzer landet, nachdem er auf eine Anzeige oder einen Link geklickt hat.", category: "Marketing" },
  { term: "Lead", definition: "Ein potenzieller Kunde, der Interesse an einem Produkt oder einer Dienstleistung gezeigt und Kontaktdaten hinterlassen hat.", category: "Marketing" },
  { term: "Link Juice", definition: "Der SEO-Wert, der über Hyperlinks von einer Seite auf eine andere weitergegeben wird und das Ranking beeinflusst.", category: "Off-Page" },
  { term: "Long Tail", definition: "Längere, spezifischere Suchanfragen mit geringerem Volumen, aber höherer Conversion-Wahrscheinlichkeit.", category: "SEO" },
  { term: "LSI Keywords", definition: "Begriffe, die semantisch mit dem Haupt-Keyword verwandt sind und den Kontext des Inhalts stärken.", category: "On-Page" },
  { term: "Meta Description", definition: "Eine kurze Zusammenfassung des Seiteninhalts, die in den Suchergebnissen unter dem Titel angezeigt wird.", category: "SEO" },
  { term: "Meta Robot", definition: "Ein HTML-Tag, der Suchmaschinen-Crawlern Anweisungen gibt, ob eine Seite indexiert oder Links verfolgt werden sollen.", category: "SEO" },
  { term: "Mobile First", definition: "Googles Indexierungsstrategie, bei der primär die mobile Version einer Website für das Ranking herangezogen wird.", category: "SEO" },
  { term: "NAP Data", definition: "Name, Address, Phone – konsistente Unternehmensdaten, die für Local SEO und Google Business Profile essenziell sind.", category: "SEO" },
  { term: "Native Advertising", definition: "Bezahlte Werbung, die so gestaltet ist, dass sie sich nahtlos in den redaktionellen Inhalt der Plattform einfügt.", category: "Marketing" },
  { term: "NoFollow", definition: "Ein HTML-Attribut, das Suchmaschinen anweist, einem Link keinen PageRank zu vererben.", category: "Off-Page" },
  { term: "Off-Page", definition: "Alle SEO-Maßnahmen, die außerhalb der eigenen Website stattfinden, z. B. Linkbuilding und Mentions.", category: "Off-Page" },
  { term: "Organic Traffic", definition: "Besucher, die über unbezahlte Suchergebnisse auf Ihre Website gelangen.", category: "Analytics" },
  { term: "Outreach", definition: "Die gezielte Kontaktaufnahme mit Websitebetreibern, Bloggern oder Redakteuren zum Aufbau von Backlinks oder Kooperationen.", category: "Off-Page" },
  { term: "PageSpeed", definition: "Die Zeit, die benötigt wird, um den Inhalt einer Webseite vollständig zu laden. Ein wichtiger Rankingfaktor.", category: "SEO" },
  { term: "PBN (Private Blog Network)", definition: "Ein Netzwerk privat betriebener Websites, das ausschließlich zum Linkaufbau genutzt wird – von Google als Manipulation gewertet.", category: "Off-Page" },
  { term: "Pillar Page", definition: "Eine umfassende Übersichtsseite zu einem Kernthema, die als zentrale Anlaufstelle für verwandte Unterthemen dient.", category: "SEO" },
  { term: "Pogo Sticking", definition: "Wenn ein Nutzer ein Suchergebnis anklickt, schnell zurückkehrt und ein anderes Ergebnis wählt – ein negatives Qualitätssignal.", category: "SEO" },
  { term: "PPC (Pay-Per-Click)", definition: "Ein Abrechnungsmodell für Online-Werbung, bei dem der Werbetreibende nur zahlt, wenn ein Nutzer auf die Anzeige klickt.", category: "Marketing" },
  { term: "Query", definition: "Der Suchbegriff oder die Suchanfrage, die ein Nutzer in eine Suchmaschine eingibt.", category: "SEO" },
  { term: "Query Intent", definition: "Die Absicht hinter einer Suchanfrage – ob der Nutzer informieren, navigieren, vergleichen oder kaufen möchte.", category: "SEO" },
  { term: "Rank Tracking", definition: "Die kontinuierliche Überwachung der Positionen Ihrer Keywords in den Suchergebnissen über die Zeit.", category: "Tools" },
  { term: "RankBrain", definition: "Ein Teil des Google-Algorithmus, der künstliche Intelligenz nutzt, um Suchanfragen besser zu verstehen.", category: "SEO" },
  { term: "React", definition: "Eine weit verbreitete JavaScript-Bibliothek zur Erstellung moderner, komponentenbasierter Benutzeroberflächen für Webanwendungen.", category: "Webdesign & Tech" },
  { term: "Responsive Design", definition: "Ein Webdesign-Ansatz, bei dem sich das Layout einer Website automatisch an die Bildschirmgröße des jeweiligen Geräts anpasst.", category: "Webdesign & Tech" },
  { term: "Retargeting", definition: "Eine Online-Marketing-Strategie, bei der Nutzer, die eine Website bereits besucht haben, mit gezielter Werbung erneut angesprochen werden.", category: "Performance Marketing" },
  { term: "Rich Snippets", definition: "Erweiterte Suchergebnisse mit zusätzlichen visuellen Elementen wie Sternebewertungen, Preisen oder FAQ-Dropdowns.", category: "SEO" },
  { term: "ROAS (Return on Ad Spend)", definition: "Eine Kennzahl, die den erzielten Umsatz pro investiertem Werbe-Euro misst und die Effizienz von Kampagnen bewertet.", category: "Performance Marketing" },
  { term: "Robots Meta", definition: "Ein Meta-Tag im HTML-Header, der Crawlern anweist, ob eine Seite indexiert und deren Links verfolgt werden sollen.", category: "SEO" },
  { term: "Robots.txt", definition: "Eine Textdatei, die Anweisungen für Web-Crawler enthält, welche Bereiche der Seite sie scannen dürfen.", category: "SEO" },
  { term: "ROI (Return on Investment)", definition: "Eine Kennzahl, die das Verhältnis zwischen dem investierten Kapital und dem erzielten Gewinn beschreibt.", category: "Analytics" },
  { term: "Schema Markup", definition: "Strukturierte Daten, die Suchmaschinen helfen, spezifische Informationen wie Preise oder Bewertungen zu verstehen.", category: "SEO" },
  { term: "SEA (Google Ads)", definition: "Suchmaschinenwerbung – bezahlte Anzeigen in den Google-Suchergebnissen, die sofortige Sichtbarkeit für definierte Keywords bieten.", category: "Performance Marketing" },
  { term: "Search Intent", definition: "Die Absicht hinter einer Suchanfrage (z. B. Information suchen oder ein Produkt kaufen).", category: "SEO" },
  { term: "SEM (Search Engine Marketing)", definition: "Der Oberbegriff für SEO und SEA (Suchmaschinenwerbung), um die Sichtbarkeit in Suchmaschinen zu erhöhen.", category: "Marketing" },
  { term: "SERP", definition: "Search Engine Results Page – die Ergebnisseite einer Suchmaschine nach Eingabe einer Suchanfrage.", category: "SEO" },
  { term: "SERP Features", definition: "Erweiterte Elemente in den Suchergebnissen wie Featured Snippets, Knowledge Panels, Local Packs oder Video-Karussells.", category: "SEO" },
  { term: "Sitemap", definition: "Eine Datei (oft XML), die alle wichtigen Seiten einer Website auflistet, um das Crawling zu erleichtern.", category: "SEO" },
  { term: "SMM (Social Media Marketing)", definition: "Die Nutzung von sozialen Netzwerken wie Facebook, Instagram oder LinkedIn für Marketingzwecke.", category: "Marketing" },
  { term: "Technical SEO", definition: "Optimierungen an der Infrastruktur der Website, um das Crawling und Indexieren zu verbessern.", category: "SEO" },
  { term: "TF-IDF", definition: "Term Frequency–Inverse Document Frequency – eine statistische Methode zur Bewertung der Relevanz eines Begriffs in einem Dokument.", category: "SEO" },
  { term: "Title Tag", definition: "Das HTML-Element, das den Titel einer Webseite festlegt und in den Suchergebnissen als klickbarer Link erscheint.", category: "On-Page" },
  { term: "Topical Authority", definition: "Die thematische Autorität einer Website, die durch umfassende, vernetzte Inhalte zu einem Kernthema aufgebaut wird.", category: "SEO" },
  { term: "Trust Flow", definition: "Eine Metrik, die die Vertrauenswürdigkeit einer Website anhand der Qualität eingehender Backlinks bewertet.", category: "Off-Page" },
  { term: "UI/UX Design", definition: "Die Gestaltung der Benutzeroberfläche (UI) und des Nutzererlebnisses (UX), um eine intuitive, ansprechende und conversion-optimierte Website zu schaffen.", category: "Webdesign & Tech" },
  { term: "URL Structure", definition: "Die Art und Weise, wie URLs aufgebaut sind. Sie sollten lesbar und keyword-optimiert sein.", category: "SEO" },
  { term: "User Signals", definition: "Nutzersignale wie Klickrate, Verweildauer und Absprungrate, die Google zur Bewertung der Suchergebnis-Qualität heranzieht.", category: "SEO" },
  { term: "Visibility", definition: "Die Sichtbarkeit einer Website in den organischen Suchergebnissen, oft als Sichtbarkeitsindex gemessen.", category: "SEO" },
  { term: "Voice Search", definition: "Suchanfragen, die über Sprachbefehle (z. B. Siri oder Alexa) anstatt über Tastatureingaben getätigt werden.", category: "SEO" },
  { term: "Web Vitals", definition: "Googles Initiative zur Messung der Nutzererfahrung anhand von Metriken wie LCP, FID/INP und CLS.", category: "Webdesign & Tech" },
  { term: "White Hat SEO", definition: "SEO-Praktiken, die den Richtlinien der Suchmaschinen entsprechen und auf langfristigen Erfolg setzen.", category: "SEO" },
  { term: "XML", definition: "Eine Auszeichnungssprache, die verwendet wird, um Daten maschinenlesbar zu strukturieren (wichtig für Sitemaps).", category: "SEO" },
  { term: "XML Sitemap", definition: "Eine XML-Datei, die alle indexierbaren URLs einer Website auflistet und Suchmaschinen das Crawling erleichtert.", category: "SEO" },
  { term: "Yoast SEO", definition: "Ein beliebtes WordPress-Plugin, das bei der On-Page-Optimierung und technischen SEO-Einstellungen hilft.", category: "Tools" },
  { term: "Zero Click Search", definition: "Eine Suchanfrage, bei der die Antwort direkt in den Google-Ergebnissen angezeigt wird, ohne dass ein Klick nötig ist.", category: "SEO" },

  // Performance Marketing & Ads
  { term: "A/B Testing", definition: "Ein Verfahren, bei dem zwei Versionen einer Webseite oder Anzeige verglichen werden, um festzustellen, welche besser abschneidet.", category: "Marketing" },
  { term: "AdWords (Google Ads)", definition: "Das Werbesystem von Google, mit dem Anzeigen in den Suchergebnissen und im Werbenetzwerk geschaltet werden.", category: "Marketing" },
  { term: "Affiliate Marketing", definition: "Eine Form des provisionsbasierten Marketings, bei dem Partner Produkte empfehlen und für Verkäufe belohnt werden.", category: "Marketing" },
  { term: "Native Ads", definition: "Werbeanzeigen, die optisch und inhaltlich an das redaktionelle Umfeld der Plattform angepasst sind.", category: "Marketing" },

  // E-Commerce
  { term: "API-Integration", definition: "Die Anbindung externer Dienste und Datenquellen an eine Website oder Anwendung über definierte Programmierschnittstellen.", category: "Webdesign & Tech" },
  { term: "Checkout-Optimierung", definition: "Die Verbesserung des Bezahlprozesses in einem Online-Shop, um Kaufabbrüche zu reduzieren und die Conversion-Rate zu steigern.", category: "E-Commerce" },
  { term: "Shop-Skalierung", definition: "Strategien und technische Maßnahmen, um einen Online-Shop für wachsende Besucherzahlen und Bestellvolumen leistungsfähig zu halten.", category: "E-Commerce" },
  { term: "Shopify & WooCommerce Optimierung", definition: "Die gezielte Verbesserung von Online-Shops auf Shopify oder WooCommerce hinsichtlich Performance, SEO und Nutzererlebnis.", category: "E-Commerce" },

  // KI-Optimierung (GEO)
  { term: "AI Search", definition: "KI-gestützte Suchsysteme wie Google SGE oder Perplexity, die Antworten mithilfe generativer KI direkt in den Suchergebnissen zusammenfassen.", category: "KI-Optimierung (GEO)" },
  { term: "ChatGPT-Sichtbarkeit", definition: "Strategien, um als Marke oder Unternehmen in den Antworten von KI-Chatbots wie ChatGPT referenziert und empfohlen zu werden.", category: "KI-Optimierung (GEO)" },
  { term: "Generative Engine Optimization (GEO)", definition: "Die Optimierung von Inhalten, damit sie von generativen KI-Suchmaschinen bevorzugt als Quelle herangezogen und zitiert werden.", category: "KI-Optimierung (GEO)" },

  // SEO Strategy & Growth (2026)
  { term: "Data-Driven SEO Roadmap", definition: "Eine datenbasierte SEO-Planung, die auf Keyword-Analyse, Wettbewerbsdaten und KPI-Tracking aufbaut, um nachhaltiges Wachstum für 2026 und darüber hinaus zu sichern.", category: "SEO" },
  { term: "Sustainable Growth (SEO)", definition: "Nachhaltige SEO-Strategien, die langfristig organische Sichtbarkeit und qualifizierten Traffic aufbauen – ohne risikoreiche Shortcuts oder Black-Hat-Methoden.", category: "SEO" },
  { term: "Core Web Vitals Optimization 2026", definition: "Die aktuelle Best-Practice-Umsetzung der Google Core Web Vitals (LCP, INP, CLS) nach den aktualisierten Anforderungen für 2026, inklusive INP-Optimierung als Nachfolger von FID.", category: "Webdesign & Tech" },
  { term: "LCP Optimization Guide", definition: "Largest Contentful Paint (LCP) misst, wie schnell das größte sichtbare Element einer Seite geladen wird. Optimierungsmaßnahmen umfassen Image-Komprimierung, serverseitiges Rendering, CDN-Einsatz und Preloading kritischer Ressourcen.", category: "Webdesign & Tech" },
  { term: "E-E-A-T Guidelines (2026)", definition: "Experience, Expertise, Authoritativeness, Trustworthiness – Googles aktualisierte Qualitätsrichtlinien betonen nachgewiesene Erfahrung des Autors, transparente Autorenprofile, aktuelle Quellenangaben und vertrauensbildende Signale als zentrale Ranking-Faktoren.", category: "SEO" },
  { term: "Search Intent Optimization", definition: "Die präzise Ausrichtung von Inhalten auf die Suchintention (informational, navigational, commercial, transactional), um maximale Relevanz für Nutzer und Suchmaschinen zu erzielen und die organische CTR zu steigern.", category: "SEO" },
];

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("").filter((c) => /[A-Z0-9]/.test(c));

const Wissen = () => {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  useEffect(() => {
    const q = searchParams.get("search");
    if (q) setSearch(q);
  }, [searchParams]);

  useEffect(() => {
    document.title = "SEO-Glossar – Fachbegriffe einfach erklärt | TrafficWerk";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Über 90 SEO- und Online-Marketing-Begriffe verständlich erklärt. Von Backlink bis XML Sitemap – das umfassende Glossar von TrafficWerk.");
  }, []);

  const filteredTerms = useMemo(() => {
    let terms = glossaryTerms;
    if (activeLetter) {
      terms = terms.filter((t) => {
        const first = t.term[0]?.toUpperCase();
        if (/[0-9]/.test(activeLetter)) return /[0-9]/.test(first ?? "");
        return first === activeLetter;
      });
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      terms = terms.filter(
        (t) => t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q)
      );
    }
    return terms.sort((a, b) => a.term.localeCompare(b.term, "de"));
  }, [search, activeLetter]);

  const availableLetters = useMemo(() => {
    const set = new Set<string>();
    glossaryTerms.forEach((t) => {
      const first = t.term[0]?.toUpperCase();
      if (first && /[0-9]/.test(first)) set.add("#");
      else if (first) set.add(first);
    });
    return set;
  }, []);

  const displayAlphabet = ["#", ...("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""))];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 to-background pt-28 pb-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            SEO-Glossar
          </h1>
          <p className="text-lg text-muted-foreground">
            Über {glossaryTerms.length} Fachbegriffe aus der Welt des Online-Marketings – einfach und verständlich erklärt.
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="container mx-auto px-4 -mt-8 max-w-4xl relative z-10">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Begriff suchen…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>

          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => setActiveLetter(null)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                activeLetter === null
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              Alle
            </button>
            {displayAlphabet.map((letter) => {
              const hasTerms = availableLetters.has(letter);
              return (
                <button
                  key={letter}
                  onClick={() => hasTerms && setActiveLetter(letter === activeLetter ? null : letter)}
                  disabled={!hasTerms}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    activeLetter === letter
                      ? "bg-primary text-primary-foreground"
                      : hasTerms
                        ? "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                        : "bg-muted/50 text-muted-foreground/30 cursor-not-allowed"
                  }`}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Terms Grid */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        {filteredTerms.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {filteredTerms.map((item) => (
              <div
                key={item.term}
                className="rounded-xl border border-border bg-card p-6 shadow-sm hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-lg font-bold text-foreground">{item.term}</h3>
                  {item.category && (
                    <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      {item.category}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.definition}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">
              Kein Begriff gefunden. Bitte passen Sie Ihre Suche an.
            </p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Wissen;
