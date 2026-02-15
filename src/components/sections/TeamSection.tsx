import { motion } from "framer-motion";
import imgThushara from "@/assets/team-thushara.webp";
import imgThomas from "@/assets/team-thomas.webp";
import imgEyana from "@/assets/team-eyana.webp";
import imgAnna from "@/assets/team-anna.webp";

const team = [
  { name: "Thushara", role: "Lead SEO Expert & Gründer", image: imgThushara },
  { name: "Eden", role: "Inhaber & Geschäftsführer", image: imgThomas },
  { name: "Eyana", role: "Content Specialist", image: imgEyana },
  { name: "John", role: "Technical SEO Analyst", image: imgAnna },
];

const TeamSection = () => {
  return (
    <section className="section-alt py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">Team</span>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
            Unsere Experten
          </h2>
          <p className="mt-4 text-muted-foreground">
            Ein Team aus Spezialisten mit Leidenschaft für SEO und digitales Marketing.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              className="group text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mx-auto h-40 w-40 overflow-hidden rounded-2xl border-2 border-border/50 transition-colors group-hover:border-primary/30">
                <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-4 font-display font-semibold">{member.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
