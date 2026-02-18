import { motion } from "framer-motion";
import imgThushara from "@/assets/team-thushara.webp";
import imgThomas from "@/assets/team-thomas.webp";
import imgEyana from "@/assets/team-eyana-new.webp";
import imgAnna from "@/assets/team-john-new.webp";

const team = [
  {
    name: "Thushara",
    role: "Senior SEO Strategist",
    bio: "Spezialist für datengetriebene SEO-Kampagnen und nachhaltige Ranking-Optimierung.",
    image: imgThushara,
    alt: "Thushara – Senior SEO Strategist bei TrafficWerk",
  },
  {
    name: "Eden",
    role: "Strategic Management",
    bio: "Fokussiert auf visionäre Wachstumsstrategien und exzellente Kundenbetreuung.",
    image: imgThomas,
    alt: "Eden – Strategic Management bei TrafficWerk",
  },
  {
    name: "Eyana",
    role: "Content Marketing Lead",
    bio: "Verwandelt Markenbotschaften in fesselnde Geschichten, die Reichweite generieren.",
    image: imgEyana,
    alt: "Eyana – Content Marketing Lead bei TrafficWerk",
  },
  {
    name: "John",
    role: "Technical SEO Expert",
    bio: "Meister der Core Web Vitals und komplexen technischen Infrastrukturen.",
    image: imgAnna,
    alt: "John – Technical SEO Expert bei TrafficWerk",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="bg-background py-10 md:py-14">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            Expertise & Leidenschaft
          </span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground md:mt-6 md:text-4xl">
            Das Team hinter Ihrem Erfolg
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Wir kombinieren jahrelange Erfahrung mit innovativen Strategien, um TrafficWerk zur ersten Wahl für SEO zu machen.
          </p>
        </motion.div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-5 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:mt-16 md:gap-7">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              className="nc-card group rounded-2xl p-4 text-center transition-all md:p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mx-auto h-24 w-24 overflow-hidden rounded-2xl ring-2 ring-border transition-all duration-300 group-hover:ring-primary/40 md:h-36 md:w-36">
                <img
                  src={member.image}
                  alt={member.alt}
                  loading="lazy"
                  width={144}
                  height={144}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-3 text-sm font-bold text-foreground md:mt-5 md:text-base">{member.name}</h3>
              <p className="mt-0.5 text-[11px] font-semibold text-primary md:mt-1 md:text-xs">{member.role}</p>
              <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground md:mt-2 md:text-xs">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
