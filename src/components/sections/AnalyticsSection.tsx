import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, Eye, Target, Zap } from "lucide-react";

const trafficData = [
  { month: "Jan", traffic: 820 },
  { month: "Feb", traffic: 920 },
  { month: "Mär", traffic: 1050 },
  { month: "Apr", traffic: 1200 },
  { month: "Mai", traffic: 1400 },
  { month: "Jun", traffic: 1580 },
  { month: "Jul", traffic: 1750 },
  { month: "Aug", traffic: 1920 },
  { month: "Sep", traffic: 2080 },
  { month: "Okt", traffic: 2200 },
  { month: "Nov", traffic: 2350 },
  { month: "Dez", traffic: 2500 },
];

const kpis = [
  { icon: Eye, label: "Sichtbarkeit", value: "+120%", desc: "Organische Impressionen" },
  { icon: Target, label: "Keywords Top 10", value: "85%", desc: "Aller Ziel-Keywords" },
  { icon: Zap, label: "ROI Fokus", value: "100%", desc: "Datengetriebene Strategie" },
  { icon: TrendingUp, label: "Traffic-Wachstum", value: "3x", desc: "In 12 Monaten" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const AnalyticsSection = () => {
  return (
    <section className="bg-slate-50 py-10 md:py-14">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          <span className="inline-block rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600">
            Analytik & Insights
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            SEO Erfolg ist <span className="text-blue-600">messbar</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-500">
            Wir verwandeln komplexe Daten in klare Wachstumsstrategien. Erleben Sie maximale Transparenz durch unsere Analyse-Methoden.
          </p>
        </motion.div>

        {/* 2-Column Grid */}
        <div className="mx-auto mt-16 grid max-w-6xl gap-6 lg:grid-cols-5">
          {/* Left: Area Chart (3 cols) */}
          <motion.div
            className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-600/5 lg:col-span-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            <div className="mb-1 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-900">Organischer Traffic</h3>
                <p className="text-xs text-slate-400">Typisches Wachstumsszenario über 12 Monate</p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-600">
                <TrendingUp className="h-3 w-3" />
                Wachstumstrend
              </span>
            </div>
            <div className="mt-4 h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trafficData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2563eb" stopOpacity={0.15} />
                      <stop offset="100%" stopColor="#2563eb" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                  <XAxis
                    dataKey="month"
                    tick={{ fill: "#94a3b8", fontSize: 11 }}
                    axisLine={{ stroke: "#e2e8f0" }}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "#94a3b8", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => v >= 1000 ? `${(v / 1000).toFixed(0)}k` : v}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#ffffff",
                      border: "1px solid #e2e8f0",
                      borderRadius: "12px",
                      fontSize: 12,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                    }}
                    formatter={(value: number) => [`${value.toLocaleString("de-DE")} Besucher`, "Traffic"]}
                  />
                  <Area
                    type="monotone"
                    dataKey="traffic"
                    stroke="#2563eb"
                    strokeWidth={2.5}
                    fill="url(#blueGradient)"
                    dot={false}
                    activeDot={{ r: 5, fill: "#2563eb", stroke: "#fff", strokeWidth: 2 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Right: KPI Cards (2 cols) */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
            {kpis.map((kpi, i) => (
              <motion.div
                key={kpi.label}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-600/5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i + 2}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <kpi.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">{kpi.value}</p>
                  <p className="text-xs font-semibold text-slate-700">{kpi.label}</p>
                  <p className="text-[11px] text-slate-400">{kpi.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
