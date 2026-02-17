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
  // Beispiel:
  // { term: "Backlink", definition: "Ein eingehender Link von einer externen Website.", category: "SEO" },
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
