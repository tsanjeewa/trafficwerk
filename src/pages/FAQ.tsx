import { useEffect } from "react";
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
    question: "Was ist der Unterschied zwischen SEO und SEA?",
    answer: (
      <>
        <Link to="/wissen?search=Technical+SEO" className="text-blue-600 hover:underline">SEO</Link> (Suchmaschinenoptimierung) sorgt für nachhaltigen, unbezahlten <Link to="/wissen?search=Organic+Traffic" className="text-blue-600 hover:underline">organischen Traffic</Link> durch die Optimierung Ihrer Website. <Link to="/wissen?search=SEA" className="text-blue-600 hover:underline">SEA (Google Ads)</Link> hingegen liefert sofortige Sichtbarkeit durch bezahlte Anzeigen. Beide Kanäle ergänzen sich ideal – SEO für langfristiges Wachstum, SEA für schnelle Ergebnisse.
      </>
    ),
  },
  {
    question: "Warum ist UI/UX Design wichtig für die Conversion?",
    answer: (
      <>
        Ein durchdachtes <Link to="/wissen?search=UI%2FUX+Design" className="text-blue-600 hover:underline">UI/UX Design</Link> sorgt dafür, dass Besucher sich intuitiv auf Ihrer Website zurechtfinden. Das steigert die <Link to="/wissen?search=Conversion-Rate" className="text-blue-600 hover:underline">Conversion-Rate</Link> erheblich, weil Nutzer schneller zur gewünschten Aktion geführt werden. Auch die <Link to="/wissen?search=Core+Web+Vitals" className="text-blue-600 hover:underline">Core Web Vitals</Link> spielen dabei eine wichtige Rolle.
      </>
    ),
  },
  {
    question: "Wie hilft TrafficWerk bei der KI-Optimierung (GEO)?",
    answer: (
      <>
        Mit <Link to="/wissen?search=Generative+Engine+Optimization" className="text-blue-600 hover:underline">Generative Engine Optimization (GEO)</Link> optimieren wir Ihre Inhalte so, dass sie von KI-Suchsystemen wie <Link to="/wissen?search=AI+Search" className="text-blue-600 hover:underline">AI Search</Link> und ChatGPT bevorzugt als Quelle herangezogen werden. So steigern wir Ihre <Link to="/wissen?search=ChatGPT-Sichtbarkeit" className="text-blue-600 hover:underline">ChatGPT-Sichtbarkeit</Link> und sichern Ihnen einen Vorsprung in der neuen Ära der Suche.
      </>
    ),
  },
  {
    question: "Was kostet eine ganzheitliche digitale Strategie?",
    answer: (
      <>
        Die Kosten hängen von Ihren Zielen und dem Wettbewerbsumfeld ab. Eine ganzheitliche Strategie kann <Link to="/wissen?search=Technical+SEO" className="text-blue-600 hover:underline">SEO</Link>, <Link to="/wissen?search=SEA" className="text-blue-600 hover:underline">Google Ads</Link>, <Link to="/wissen?search=Content+Marketing" className="text-blue-600 hover:underline">Content Marketing</Link> und <Link to="/wissen?search=UI%2FUX+Design" className="text-blue-600 hover:underline">UI/UX Design</Link> umfassen. Wir erstellen für jedes Unternehmen ein maßgeschneidertes Angebot – kontaktieren Sie uns für eine kostenlose Erstberatung.
      </>
    ),
  },
  {
    question: "Wie lange dauert es, bis SEO-Ergebnisse sichtbar sind?",
    answer: (
      <>
        SEO ist ein langfristiger Prozess. Erste signifikante Verbesserungen in <Link to="/wissen?search=Organic+Traffic" className="text-blue-600 hover:underline">organischem Traffic</Link> und <Link to="/wissen?search=Domain+Authority" className="text-blue-600 hover:underline">Domain Authority</Link> sind meist nach 3 bis 6 Monaten sichtbar. Die genaue Dauer hängt vom Wettbewerb, dem aktuellen Zustand Ihrer Website und der gewählten Strategie ab.
      </>
    ),
  },
  {
    question: "Bietet TrafficWerk auch Support für Shopify/WooCommerce?",
    answer: (
      <>
        Ja! Wir bieten professionelle <Link to="/wissen?search=Shopify" className="text-blue-600 hover:underline">Shopify & WooCommerce Optimierung</Link> an – von <Link to="/wissen?search=Checkout-Optimierung" className="text-blue-600 hover:underline">Checkout-Optimierung</Link> über <Link to="/wissen?search=Shop-Skalierung" className="text-blue-600 hover:underline">Shop-Skalierung</Link> bis hin zu technischem SEO für E-Commerce.
      </>
    ),
  },
  {
    question: "Was kostet ein SEO Audit?",
    answer: (
      <>
        Ein professionelles <Link to="/wissen?search=Technical+SEO" className="text-blue-600 hover:underline">SEO Audit</Link> bei TrafficWerk umfasst eine umfassende Analyse Ihrer Website – von der technischen Infrastruktur über <Link to="/wissen?search=Core+Web+Vitals" className="text-blue-600 hover:underline">Core Web Vitals</Link> bis hin zu <Link to="/wissen?search=Content+Silo" className="text-blue-600 hover:underline">Content-Struktur</Link>. Die Kosten variieren je nach Umfang und Website-Größe. Kontaktieren Sie uns für ein individuelles Angebot.
      </>
    ),
  },
  {
    question: "Wie lange dauert der ROI bei Ads?",
    answer: (
      <>
        Bei <Link to="/wissen?search=SEA" className="text-blue-600 hover:underline">Google Ads (SEA)</Link> können erste Ergebnisse bereits innerhalb weniger Tage sichtbar sein. Der tatsächliche <Link to="/wissen?search=ROI" className="text-blue-600 hover:underline">ROI</Link> hängt von der Branche, dem <Link to="/wissen?search=ROAS" className="text-blue-600 hover:underline">ROAS</Link>-Ziel und der Kampagnenoptimierung ab. In der Regel stabilisiert sich der ROI nach 4–8 Wochen kontinuierlicher Optimierung.
      </>
    ),
  },
  {
    question: "Ist React gut für SEO?",
    answer: (
      <>
        <Link to="/wissen?search=React" className="text-blue-600 hover:underline">React</Link> kann für SEO hervorragend funktionieren – vorausgesetzt, man setzt auf Server-Side Rendering (SSR) oder Pre-Rendering. Ohne diese Maßnahmen kann das <Link to="/wissen?search=Crawling" className="text-blue-600 hover:underline">Crawling</Link> durch Suchmaschinen erschwert sein. Wir sorgen dafür, dass Ihre React-Anwendung vollständig indexierbar ist und optimale <Link to="/wissen?search=Core+Web+Vitals" className="text-blue-600 hover:underline">Core Web Vitals</Link> erreicht.
      </>
    ),
  },
  {
    question: "Warum ist PageSpeed wichtig?",
    answer: (
      <>
        <Link to="/wissen?search=PageSpeed" className="text-blue-600 hover:underline">PageSpeed</Link> ist ein direkter <Link to="/wissen?search=Rank+Tracking" className="text-blue-600 hover:underline">Rankingfaktor</Link> bei Google. Langsame Seiten führen zu höherer <Link to="/wissen?search=Bounce+Rate" className="text-blue-600 hover:underline">Bounce Rate</Link> und schlechteren <Link to="/wissen?search=User+Signals" className="text-blue-600 hover:underline">Nutzersignalen</Link>. Die <Link to="/wissen?search=Core+Web+Vitals" className="text-blue-600 hover:underline">Core Web Vitals</Link> messen diese Performance – wir optimieren Ihre Website auf Bestwerte.
      </>
    ),
  },
  {
    question: "Brauche ich einen Blog für SEO?",
    answer: (
      <>
        Ein Blog ist eines der effektivsten Werkzeuge für <Link to="/wissen?search=Content+Marketing" className="text-blue-600 hover:underline">Content Marketing</Link> und SEO. Regelmäßige, hochwertige Artikel stärken Ihre <Link to="/wissen?search=Topical+Authority" className="text-blue-600 hover:underline">Topical Authority</Link>, generieren <Link to="/wissen?search=Long+Tail" className="text-blue-600 hover:underline">Long-Tail-Traffic</Link> und unterstützen Ihre <Link to="/wissen?search=Internal+Linking" className="text-blue-600 hover:underline">interne Verlinkung</Link>.
      </>
    ),
  },
  {
    question: "Wie verändert KI die SEO-Branche?",
    answer: (
      <>
        KI transformiert die Suche grundlegend: <Link to="/wissen?search=AI+Search" className="text-blue-600 hover:underline">AI Search</Link>-Systeme wie Google AI Overviews und ChatGPT liefern direkte Antworten. Mit <Link to="/wissen?search=Generative+Engine+Optimization" className="text-blue-600 hover:underline">GEO (Generative Engine Optimization)</Link> optimieren wir Ihre Inhalte, damit sie von KI-Systemen als Quelle zitiert werden. <Link to="/wissen?search=E-E-A-T" className="text-blue-600 hover:underline">E-E-A-T-Signale</Link> werden dabei immer wichtiger.
      </>
    ),
  },
  {
    question: "Was sind die besten Marketing-Tools 2026?",
    answer: (
      <>
        Zu den wichtigsten Tools gehören die <Link to="/wissen?search=GSC" className="text-blue-600 hover:underline">Google Search Console</Link> für SEO-Monitoring, Google Ads für <Link to="/wissen?search=SEA" className="text-blue-600 hover:underline">Suchmaschinenwerbung</Link>, sowie Tools für <Link to="/wissen?search=Rank+Tracking" className="text-blue-600 hover:underline">Rank Tracking</Link>, <Link to="/wissen?search=Keyword+Gap" className="text-blue-600 hover:underline">Keyword-Gap-Analysen</Link> und <Link to="/wissen?search=TF-IDF" className="text-blue-600 hover:underline">TF-IDF-Analysen</Link>. Für KI-SEO empfehlen wir spezialisierte GEO-Monitoring-Tools.
      </>
    ),
  },
];

const FAQ = () => {
  useEffect(() => {
    document.title = "FAQ – Häufig gestellte Fragen zu SEO & Marketing | TrafficWerk";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Antworten auf die wichtigsten Fragen zu SEO, Google Ads, KI-Optimierung und digitaler Strategie. Jetzt informieren bei TrafficWerk.");
  }, []);

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
