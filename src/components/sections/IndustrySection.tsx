import { motion } from "framer-motion";
import { Building2, ShoppingBag, Utensils, Briefcase, Heart, GraduationCap, Home, Car } from "lucide-react";

const branches = [
  { icon: ShoppingBag, name: "E-Commerce" },
  { icon: Utensils, name: "Gastronomie" },
  { icon: Briefcase, name: "B2B & SaaS" },
  { icon: Heart, name: "Gesundheit" },
  { icon: Building2, name: "Immobilien" },
  { icon: GraduationCap, name: "Bildung" },
  { icon: Home, name: "Handwerk" },
  { icon: Car, name: "Automotive" },
];

const IndustrySection = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">Branchen</span>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
            Branchenexpertise
          </h2>
          <p className="mt-4 text-muted-foreground">
            Wir kennen die Besonderheiten Ihrer Branche und entwickeln maßgeschneiderte SEO-Strategien.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {branches.map((b, i) => (
            <motion.div
              key={b.name}
              className="flex flex-col items-center rounded-xl border border-slate-200 bg-slate-50 p-6 text-center transition-colors hover:border-primary/30"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <b.icon className="h-8 w-8 text-primary" />
              <span className="mt-3 text-sm font-medium">{b.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
