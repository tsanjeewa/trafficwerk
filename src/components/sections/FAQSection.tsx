import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Was macht TrafficWerk als SEO-Agentur anders?",
    a: "TrafficWerk setzt auf einen rein datengetriebenen Ansatz. Wir nutzen keine Standard-Templates, sondern entwickeln maßgeschneiderte SEO-Roadmaps basierend auf präzisen Marktanalysen. Wir kombinieren technisches Expertenwissen (wie React-Entwicklung) mit kreativer Content-Strategie, um Marktführerschaft zu erreichen.",
  },
  {
    q: "Warum ist Performance & Speed (React) so wichtig für SEO?",
    a: "In der Ära der Core Web Vitals ist Geschwindigkeit ein kritischer Rankingfaktor. Durch den Einsatz moderner Technologien wie React sorgen wir für extrem schnelle Ladezeiten, was nicht nur Google überzeugt, sondern auch Ihre Conversion-Rates signifikant steigert.",
  },
  {
    q: "Was ist KI-Optimierung (GEO) und warum brauche ich das 2026?",
    a: "Generative Engine Optimization (GEO) ist die Zukunft der Suche. Wir optimieren Ihre Inhalte so, dass sie von KI-Systemen wie Google AI Overviews, ChatGPT und Perplexity als vertrauenswürdige Quelle zitiert werden, um auch in der Ära der KI-Suche sichtbar zu bleiben.",
  },
  {
    q: "Bieten Sie auch SEA und Social Media Marketing an?",
    a: "Ja. Als ganzheitliche Digitalagentur integrieren wir Google & Meta Ads sowie strategisches Social Media Marketing, um Ihren ROI über alle digitalen Kanäle hinweg zu maximieren.",
  },
  {
    q: "Wie lange dauert es, bis ich Ergebnisse in der organischen Suche sehe?",
    a: "SEO ist ein langfristiges Investment. Während technische Fehler sofort behoben werden können, dauert nachhaltiges organisches Wachstum in der Regel 3 bis 6 Monate. Unsere Strategien sind auf dauerhafte Marktführerschaft ausgelegt, nicht auf kurzfristige Tricks.",
  },
  {
    q: "Unterstützt TrafficWerk auch lokale Unternehmen?",
    a: "Absolut. Mit spezialisierter Lokaler SEO optimieren wir Ihr Google Business Profile und Standortseiten, damit Sie in Ihrer Region (Google Maps Local Pack) dauerhaft auf Platz 1 stehen.",
  },
];

const FAQSection = () => {
  return (
    <section className="bg-white py-14">
      <div className="container mx-auto px-6">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600">
            Du hast Fragen? Wir haben die Daten.
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Häufig gestellte Fragen & <span className="text-blue-600">Antworten</span>
          </h2>
        </motion.div>

        <motion.div
          className="mx-auto mt-14 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-b border-slate-100 px-0"
              >
                <AccordionTrigger className="py-5 text-left text-[15px] font-semibold text-slate-900 hover:text-blue-600 hover:no-underline [&[data-state=open]]:text-blue-600">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-slate-500">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
