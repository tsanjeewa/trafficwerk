import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqItems = [
  {
    question: "Was ist SEO?",
    answer: (
      <>
        <Link to="/wissen?search=Suchmaschinenoptimierung" className="text-blue-600 hover:underline">Suchmaschinenoptimierung (SEO)</Link> umfasst alle Maßnahmen, um die Sichtbarkeit einer Website in den unbezahlten Suchergebnissen von Google zu erhöhen.
      </>
    ),
  },
  {
    question: "Was kostet SEO?",
    answer: "Die Kosten variieren je nach Wettbewerb und Aufwand. In der Regel bieten wir maßgeschneiderte Pakete an, die auf Ihre Ziele zugeschnitten sind.",
  },
  {
    question: "Wie lange dauert SEO?",
    answer: "SEO ist ein langfristiger Prozess. Erste signifikante Ergebnisse sind meist nach 3 bis 6 Monaten sichtbar.",
  },
  {
    question: "SEO oder Google Ads?",
    answer: (
      <>
        SEO bietet nachhaltigen, kostenlosen <Link to="/wissen?search=Organic+Traffic" className="text-blue-600 hover:underline">organischen Traffic</Link>, während <Link to="/wissen?search=AdWords" className="text-blue-600 hover:underline">Google Ads (SEA)</Link> sofortige Sichtbarkeit gegen Bezahlung ermöglichen.
      </>
    ),
  },
  {
    question: "Was ist Local SEO?",
    answer: (
      <>
        Die Optimierung für <Link to="/wissen?search=Local+SEO" className="text-blue-600 hover:underline">lokale Suchanfragen</Link>, damit Ihr Unternehmen in Ihrer spezifischen Region (z.B. Röhrmoos oder München) gefunden wird.
      </>
    ),
  },
  {
    question: "Gibt es eine Ranking-Garantie?",
    answer: "Keine seriöse Agentur kann Platz 1 garantieren, da Google den Algorithmus kontrolliert. Wir garantieren jedoch eine deutliche Verbesserung der Sichtbarkeit.",
  },
  {
    question: "SEO für KMU?",
    answer: "Ja, besonders für kleine und mittlere Unternehmen ist gezieltes SEO wichtig, um sich lokal gegen größere Konkurrenten durchzusetzen.",
  },
  {
    question: "Wie oft braucht man neuen Content?",
    answer: (
      <>
        Regelmäßige Updates signalisieren Google Relevanz. Einmal pro Monat ist ein guter Richtwert für neue Artikel oder Blogposts. Erfahren Sie mehr über <Link to="/wissen?search=Content+Marketing" className="text-blue-600 hover:underline">Content Marketing</Link>.
      </>
    ),
  },
  {
    question: "Kann ich SEO selbst machen?",
    answer: (
      <>
        Grundlagen ja, aber für nachhaltige Erfolge und <Link to="/wissen?search=Technical+SEO" className="text-blue-600 hover:underline">technische Optimierungen</Link> ist Expertenwissen meist unumgänglich.
      </>
    ),
  },
  {
    question: "Ist Mobile SEO wichtig?",
    answer: (
      <>
        Absolut. Google nutzt „Mobile-First-Indexing". Eine Website muss auf Smartphones perfekt funktionieren, um gut zu ranken. Mehr dazu unter <Link to="/wissen?search=PageSpeed" className="text-blue-600 hover:underline">PageSpeed</Link>.
      </>
    ),
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-6 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
            <HelpCircle className="h-7 w-7 text-blue-600" />
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Häufig gestellte Fragen
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            Hier finden Sie Antworten auf die wichtigsten Fragen rund um SEO, Online-Marketing und unsere Leistungen.
          </p>
        </div>
      </section>

      {/* FAQ Accordions */}
      <section className="pb-20">
        <div className="container mx-auto max-w-3xl px-6">
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="rounded-xl border border-slate-200 px-6 data-[state=open]:border-blue-200 data-[state=open]:bg-blue-50/30"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-slate-900 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-slate-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-100 bg-slate-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Noch Fragen?
          </h2>
          <p className="mt-3 text-slate-500">Kontaktieren Sie uns – wir beraten Sie gerne persönlich.</p>
          <Link
            to="/kontakt"
            className="mt-6 inline-block rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Jetzt Kontakt aufnehmen
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
