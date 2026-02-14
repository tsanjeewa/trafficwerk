import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  { name: "Michael S.", role: "Geschäftsführer, lustaufeis24.de", text: "TrafficWerk hat unseren organischen Traffic in weniger als einem Jahr verfünffacht. Die Zusammenarbeit ist professionell, transparent und ergebnisorientiert." },
  { name: "Sandra K.", role: "Marketing-Leiterin, E-Commerce", text: "Endlich eine SEO-Agentur, die nicht nur redet, sondern liefert. Die monatlichen Reportings sind detailliert und die Ergebnisse sprechen für sich." },
  { name: "Thomas R.", role: "Inhaber, Eiscafé Florenz", text: "Seit der Zusammenarbeit mit TrafficWerk werden wir bei Google Maps und in der lokalen Suche deutlich besser gefunden. Die Kundenanfragen sind spürbar gestiegen." },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">Kundenstimmen</span>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
            Was unsere Kunden sagen
          </h2>
        </div>

        <div className="relative mx-auto mt-16 max-w-3xl">
          <motion.div
            key={current}
            className="rounded-2xl border border-border/50 bg-card p-8 md:p-12"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Quote className="h-8 w-8 text-primary/30" />
            <p className="mt-6 text-lg leading-relaxed">{testimonials[current].text}</p>
            <div className="mt-8">
              <p className="font-display font-semibold">{testimonials[current].name}</p>
              <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
            </div>
          </motion.div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button onClick={() => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length)} className="rounded-full border border-border p-2 transition-colors hover:border-primary hover:text-primary">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`h-2 w-2 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-muted"}`} />
              ))}
            </div>
            <button onClick={() => setCurrent((p) => (p + 1) % testimonials.length)} className="rounded-full border border-border p-2 transition-colors hover:border-primary hover:text-primary">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
