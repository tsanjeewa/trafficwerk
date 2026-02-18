import { motion } from "framer-motion";
import imgThushara from "@/assets/team-thushara-real.webp";
import imgEyana from "@/assets/team-eyana-real.webp";
import imgJohn from "@/assets/team-john-real.webp";

const team = [
  {
    name: "Thushara",
    role: "Strategic Management",
    bio: "Fokussiert auf visionäre Wachstumsstrategien und exzellente Kundenbetreuung.",
    image: imgThushara,
    alt: "Thushara – Strategic Management bei TrafficWerk",
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
    image: imgJohn,
    alt: "John – Technical SEO Expert bei TrafficWerk",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="section-alt py-10 md:py-14">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600">
            Expertise & Leidenschaft
          </span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 md:mt-6 md:text-4xl">
            Das Team hinter Ihrem Erfolg
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-500">
            Wir kombinieren jahrelange Erfahrung mit innovativen Strategien, um TrafficWerk zur ersten Wahl für SEO zu machen.
          </p>
        </motion.div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:mt-16 md:gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              className="nc-card group rounded-xl border p-3 text-center transition-all duration-300 hover:border-primary/20 md:p-5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mx-auto h-24 w-24 overflow-hidden rounded-2xl md:h-36 md:w-36">
                <img
                  src={member.image}
                  alt={member.alt}
                  loading="lazy"
                  width={144}
                  height={144}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="mt-3 text-sm font-bold text-slate-900 md:mt-5 md:text-base">{member.name}</h3>
              <p className="mt-0.5 text-[11px] font-semibold text-blue-600 md:mt-1 md:text-xs">{member.role}</p>
              <p className="mt-1 text-[11px] leading-relaxed text-slate-500 md:mt-2 md:text-xs">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
