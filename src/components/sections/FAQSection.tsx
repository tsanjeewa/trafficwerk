import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Bieten Sie nur SEO an oder sind Sie eine Full-Service-Agentur?",
    a: "TrafficWerk ist eine Full-Service Digitalagentur. Neben SEO bieten wir ganzheitliches Performance Marketing, Webdesign und Content-Strategien an.",
  },
  {
    q: "Wie wird der Erfolg der Maßnahmen gemessen?",
    a: "Wir nutzen datengetriebene KPIs wie Traffic-Wachstum, Keyword-Rankings und Conversion-Rates, die wir in monatlichen transparenten Reports präsentieren.",
  },
  {
    q: "Erstellen Sie auch komplette Webseiten oder Online-Shops?",
    a: "Ja, wir entwickeln hochperformante Websites und E-Commerce-Lösungen, die von Grund auf für Suchmaschinen optimiert sind.",
  },
  {
    q: "Ist SEO auch für kleine, lokale Unternehmen sinnvoll?",
    a: "Absolut. Lokale SEO hilft kleinen Unternehmen, in ihrer Region gefunden zu werden und qualifizierte Kunden direkt vor Ort zu gewinnen.",
  },
  {
    q: "Was unterscheidet TrafficWerk von anderen Agenturen?",
    a: "Unsere Kombination aus tiefem technischem Verständnis, kreativer Content-Erstellung und einem strikten Fokus auf den ROI unserer Kunden.",
  },
];

const FAQSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600">
            Support & Wissen
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Häufige Fragen & <span className="text-blue-600">Antworten</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-500">
            Alles, was Sie über unsere Zusammenarbeit und unsere digitalen Strategien wissen müssen.
          </p>
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
