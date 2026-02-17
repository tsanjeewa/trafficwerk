import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";

interface GlossaryTerm {
  term: string;
  definition: string;
  category?: string;
}

// Hier Begriffe einfügen:
const glossaryTerms: GlossaryTerm[] = [
  { term: "Alt Text", definition: "Ein beschreibender Text für Bilder, der Suchmaschinen hilft, den Bildinhalt zu verstehen, und die Barrierefreiheit verbessert.", category: "On-Page" },
  { term: "Backlink", definition: "Ein eingehender Link von einer anderen Website. Sie sind ein wichtiger Rankingfaktor für die Autorität einer Seite.", category: "Off-Page" },
  { term: "Bounce Rate", definition: "Der Prozentsatz der Besucher, die die Website verlassen, nachdem sie nur eine Seite betrachtet haben.", category: "Analytics" },
  { term: "Crawling", definition: "Der Prozess, bei dem Suchmaschinen-Bots das Internet nach neuen oder aktualisierten Inhalten durchsuchen.", category: "Technisch" },
  { term: "CTR (Click-Through-Rate)", definition: "Das Verhältnis von Klicks auf einen Link zu der Anzahl der Impressionen (wie oft er gesehen wurde).", category: "Analytics" },
  { term: "Domain Authority", definition: "Eine Metrik, die vorhersagt, wie gut eine Website in den Suchergebnissen ranken wird.", category: "Off-Page" },
  { term: "External Links", definition: "Hyperlinks, die von Ihrer Website auf eine andere Domain verweisen.", category: "Off-Page" },
  { term: "Google Bot", definition: "Der Web-Crawler von Google, der Websites scannt, um sie in den Index aufzunehmen.", category: "Technisch" },
  { term: "Header Tags (H1-H6)", definition: "HTML-Elemente, die verwendet werden, um Überschriften und die Struktur des Inhalts zu definieren.", category: "On-Page" },
  { term: "Indexing", definition: "Der Prozess des Speicherns und Organisierens von Inhalten in der Datenbank einer Suchmaschine.", category: "Technisch" },
  { term: "Internal Links", definition: "Links, die von einer Seite auf eine andere Seite innerhalb derselben Domain verweisen.", category: "On-Page" },
  { term: "LSI Keywords", definition: "Begriffe, die semantisch mit dem Haupt-Keyword verwandt sind und den Kontext des Inhalts stärken.", category: "On-Page" },
  { term: "Meta Description", definition: "Eine kurze Zusammenfassung des Seiteninhalts, die in den Suchergebnissen unter dem Titel angezeigt wird.", category: "On-Page" },
  { term: "NoFollow", definition: "Ein HTML-Attribut, das Suchmaschinen anweist, einem Link keinen PageRank zu vererben.", category: "Off-Page" },
  { term: "Organic Traffic", definition: "Besucher, die über unbezahlte Suchergebnisse auf Ihre Website gelangen.", category: "Analytics" },
  { term: "PageSpeed", definition: "Die Zeit, die benötigt wird, um den Inhalt einer Webseite vollständig zu laden. Ein wichtiger Rankingfaktor.", category: "Technisch" },
  { term: "RankBrain", definition: "Ein Teil des Google-Algorithmus, der künstliche Intelligenz nutzt, um Suchanfragen besser zu verstehen.", category: "Allgemein" },
  { term: "Robots.txt", definition: "Eine Textdatei, die Anweisungen für Web-Crawler enthält, welche Bereiche der Seite sie scannen dürfen.", category: "Technisch" },
  { term: "Schema Markup", definition: "Strukturierte Daten, die Suchmaschinen helfen, spezifische Informationen wie Preise oder Bewertungen zu verstehen.", category: "Technisch" },
  { term: "Search Intent", definition: "Die Absicht hinter einer Suchanfrage (z. B. Information suchen oder ein Produkt kaufen).", category: "Allgemein" },
  { term: "Sitemap", definition: "Eine Datei (oft XML), die alle wichtigen Seiten einer Website auflistet, um das Crawling zu erleichtern.", category: "Technisch" },
  { term: "Technical SEO", definition: "Optimierungen an der Infrastruktur der Website, um das Crawling und Indexieren zu verbessern.", category: "Technisch" },
  { term: "Title Tag", definition: "Das HTML-Element, das den Titel einer Webseite festlegt und in den Suchergebnissen als klickbarer Link erscheint.", category: "On-Page" },
  { term: "URL Structure", definition: "Die Art und Weise, wie URLs aufgebaut sind. Sie sollten lesbar und keyword-optimiert sein.", category: "Technisch" },
  { term: "Voice Search", definition: "Suchanfragen, die über Sprachbefehle (z. B. Siri oder Alexa) anstatt über Tastatureingaben getätigt werden.", category: "Allgemein" },
  { term: "White Hat SEO", definition: "SEO-Praktiken, die den Richtlinien der Suchmaschinen entsprechen und auf langfristigen Erfolg setzen.", category: "Allgemein" },
  { term: "XML", definition: "Eine Auszeichnungssprache, die verwendet wird, um Daten maschinenlesbar zu strukturieren (wichtig für Sitemaps).", category: "Technisch" },
  { term: "Yoast SEO", definition: "Ein beliebtes WordPress-Plugin, das bei der On-Page-Optimierung und technischen SEO-Einstellungen hilft.", category: "Tools" },
  { term: "Zero Click Search", definition: "Eine Suchanfrage, bei der die Antwort direkt in den Google-Ergebnissen angezeigt wird, ohne dass ein Klick nötig ist.", category: "Allgemein" },
];

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const Wissen = () => {
  const [search, setSearch] = useState("");
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  const filteredTerms = useMemo(() => {
    let terms = glossaryTerms;
    if (activeLetter) {
      terms = terms.filter((t) => t.term.toUpperCase().startsWith(activeLetter));
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      terms = terms.filter(
        (t) => t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q)
      );
    }
    return terms.sort((a, b) => a.term.localeCompare(b.term, "de"));
  }, [search, activeLetter]);

  const availableLetters = useMemo(
    () => new Set(glossaryTerms.map((t) => t.term[0]?.toUpperCase())),
    []
  );

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
            Fachbegriffe aus der Welt des Online-Marketings – einfach und verständlich erklärt.
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="container mx-auto px-4 -mt-8 max-w-4xl relative z-10">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Begriff suchen…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>

          {/* A-Z Filter */}
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
            {alphabet.map((letter) => {
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
              {glossaryTerms.length === 0
                ? "Das Glossar wird in Kürze mit Begriffen befüllt."
                : "Kein Begriff gefunden. Bitte passen Sie Ihre Suche an."}
            </p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Wissen;
