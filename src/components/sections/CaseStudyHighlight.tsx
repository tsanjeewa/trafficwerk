import { motion } from "framer-motion";
import { ShoppingCart, Target, MapPin, Settings, TrendingUp } from "lucide-react";

const projects = [
  {
    icon: <ShoppingCart className="h-5 w-5" />,
    label: "E-Commerce",
    text: "Organische Sichtbarkeit und Umsatz für lustaufeis24.de nachhaltig gesteigert.",
  },
  {
    icon: <Target className="h-5 w-5" />,
    label: "Nischen-SEO",
    text: "eismaschine.de zur führenden Informationsplattform in der Nische entwickelt.",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "Lokale SEO",
    text: "Eiscafé Florenz Leipzig im Google Maps Local Pack dauerhaft positioniert.",
  },
];

const CaseStudyHighlight = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="mx-auto max-w-2xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-blue-600">
            Ergebnisse
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Echte Ergebnisse, echte Projekte
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-slate-500">
            Keine erfundenen Zahlen – sondern nachweisbare Resultate aus unseren eigenen Projekten.
          </p>
        </motion.div>

        {/* Desktop Flow Chart */}
        <div className="hidden lg:flex items-center justify-center gap-0 max-w-6xl mx-auto">
          {/* LEFT — Project Cards */}
          <div className="flex flex-col gap-5 shrink-0 w-[260px]">
            {projects.map((p, i) => (
              <motion.div
                key={p.label}
                className="rounded-2xl border border-slate-100 bg-white p-5 shadow-lg shadow-blue-500/5"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  {p.icon}
                </div>
                <h3 className="mt-3 text-sm font-bold text-slate-900">{p.label}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{p.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Arrows Left → Center */}
          <motion.div
            className="flex flex-col justify-center gap-5 shrink-0 w-[80px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {[0, 1, 2].map((i) => (
              <svg key={i} viewBox="0 0 80 40" className="w-[80px] h-[40px]" fill="none">
                <path
                  d={i === 0 ? "M0 35 Q40 35 75 20" : i === 1 ? "M0 20 Q40 20 75 20" : "M0 5 Q40 5 75 20"}
                  stroke="#0f172a"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                  fill="none"
                />
                <polygon points="75,20 68,16 68,24" fill="#2563eb" />
              </svg>
            ))}
          </motion.div>

          {/* CENTER — Strategy Circle */}
          <motion.div
            className="relative shrink-0"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
          >
            {/* Pulse ring */}
            <motion.div
              className="absolute inset-0 rounded-full bg-blue-600/20"
              animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ margin: "-12px" }}
            />
            <div className="relative flex h-[160px] w-[160px] flex-col items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-xl shadow-blue-600/25">
              <Settings className="h-7 w-7 mb-2" />
              <span className="text-[11px] font-bold leading-tight text-center px-4">
                TrafficWerk
                <br />
                Strategie &
                <br />
                Umsetzung
              </span>
            </div>
          </motion.div>

          {/* Arrow Center → Right */}
          <motion.div
            className="shrink-0 w-[100px] flex items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <svg viewBox="0 0 100 24" className="w-[100px] h-[24px]" fill="none">
              <line x1="0" y1="12" x2="88" y2="12" stroke="#2563eb" strokeWidth="3" />
              <polygon points="88,12 78,6 78,18" fill="#2563eb" />
            </svg>
          </motion.div>

          {/* RIGHT — Result Block */}
          <motion.div
            className="shrink-0 w-[280px] rounded-2xl border-4 border-blue-600 bg-white p-6 shadow-xl shadow-blue-600/10"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            <TrendingUp className="h-10 w-10 text-blue-600 mb-3" />
            <h3 className="text-xl font-bold text-blue-600 tracking-wide">MESSBARER ERFOLG</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              Nachweisbare Resultate. Echtes Wachstum. Keine vagen Versprechungen.
            </p>
          </motion.div>
        </div>

        {/* Mobile / Tablet — Vertical Flow */}
        <div className="lg:hidden flex flex-col items-center gap-4 max-w-sm mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={p.label}
              className="w-full rounded-2xl border border-slate-100 bg-white p-5 shadow-lg shadow-blue-500/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                {p.icon}
              </div>
              <h3 className="mt-3 text-sm font-bold text-slate-900">{p.label}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{p.text}</p>
            </motion.div>
          ))}

          {/* Arrow down */}
          <motion.svg
            viewBox="0 0 24 48"
            className="w-6 h-12"
            fill="none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <line x1="12" y1="0" x2="12" y2="40" stroke="#0f172a" strokeWidth="2" strokeDasharray="5 3" />
            <polygon points="12,46 7,38 17,38" fill="#2563eb" />
          </motion.svg>

          {/* Center Circle */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.5, type: "spring" }}
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-blue-600/20"
              animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ margin: "-10px" }}
            />
            <div className="relative flex h-[130px] w-[130px] flex-col items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-xl shadow-blue-600/25">
              <Settings className="h-6 w-6 mb-1.5" />
              <span className="text-[10px] font-bold leading-tight text-center px-3">
                TrafficWerk
                <br />
                Strategie &
                <br />
                Umsetzung
              </span>
            </div>
          </motion.div>

          {/* Arrow down */}
          <motion.svg
            viewBox="0 0 24 48"
            className="w-6 h-12"
            fill="none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            <line x1="12" y1="0" x2="12" y2="40" stroke="#2563eb" strokeWidth="3" />
            <polygon points="12,46 7,38 17,38" fill="#2563eb" />
          </motion.svg>

          {/* Result Block */}
          <motion.div
            className="w-full rounded-2xl border-4 border-blue-600 bg-white p-6 shadow-xl shadow-blue-600/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <TrendingUp className="h-10 w-10 text-blue-600 mb-3" />
            <h3 className="text-xl font-bold text-blue-600 tracking-wide">MESSBARER ERFOLG</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              Nachweisbare Resultate. Echtes Wachstum. Keine vagen Versprechungen.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHighlight;
