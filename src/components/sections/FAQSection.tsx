import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Was ist SEO?", a: "SEO (Search Engine Optimization) bezeichnet die Optimierung von Websites, um in den organischen Suchergebnissen von Google und anderen Suchmaschinen besser gefunden zu werden. Ziel ist es, die Sichtbarkeit, den Traffic und letztlich den Umsatz zu steigern." },
  { q: "Wie lange dauert es, bis SEO-Maßnahmen wirken?", a: "Erste Ergebnisse sind typischerweise nach 3-6 Monaten sichtbar. SEO ist eine langfristige Strategie – nachhaltige Rankings aufzubauen erfordert kontinuierliche Optimierung und Geduld." },
  { q: "Was kostet SEO?", a: "Die Kosten hängen vom Umfang der Maßnahmen, dem Wettbewerb in Ihrer Branche und Ihren Zielen ab. Wir erstellen individuelle Angebote nach einer kostenlosen Erstanalyse." },
  { q: "Was ist der Unterschied zwischen SEO und SEA?", a: "SEO optimiert Ihre Website für organische (unbezahlte) Suchergebnisse, während SEA (Search Engine Advertising) bezahlte Anzeigen in Suchmaschinen bezeichnet. Beide Strategien ergänzen sich ideal." },
  { q: "Was ist technische SEO?", a: "Technische SEO umfasst alle Maßnahmen zur Verbesserung der technischen Grundlagen einer Website: Ladegeschwindigkeit, Crawlbarkeit, Indexierung, Mobile-Friendliness und strukturierte Daten." },
  { q: "Was bedeutet GEO (Generative Engine Optimization)?", a: "GEO ist die Optimierung von Inhalten für KI-basierte Suchsysteme wie Google AI Overviews, ChatGPT oder Perplexity. Es geht darum, dass Ihre Inhalte von KI-Systemen als Quelle zitiert werden." },
];

const FAQSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">FAQ & Lexikon</span>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
            Häufige Fragen
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border border-border/50 bg-card px-6">
                <AccordionTrigger className="text-left font-display text-sm font-semibold hover:text-primary hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
