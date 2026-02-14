import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

const trafficData = [
  { month: "Jan", traffic: 1200 },
  { month: "Feb", traffic: 1800 },
  { month: "Mär", traffic: 2400 },
  { month: "Apr", traffic: 3100 },
  { month: "Mai", traffic: 4200 },
  { month: "Jun", traffic: 5800 },
  { month: "Jul", traffic: 7200 },
  { month: "Aug", traffic: 8500 },
];

const keywordData = [
  { name: "Top 3", value: 45, color: "hsl(142, 60%, 50%)" },
  { name: "Top 10", value: 120, color: "hsl(142, 60%, 35%)" },
  { name: "Top 20", value: 85, color: "hsl(220, 16%, 30%)" },
];

const ResultsSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">Ergebnisse</span>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
            Ergebnisse in Zahlen
          </h2>
          <p className="mt-4 text-muted-foreground">
            Transparente Daten und messbare Erfolge für unsere Kunden.
          </p>
        </div>

        <motion.div
          className="mt-16 grid gap-8 lg:grid-cols-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="rounded-xl border border-border/50 bg-card p-6">
            <h3 className="font-display text-sm font-semibold">Organischer Traffic (Beispielprojekt)</h3>
            <div className="mt-4 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={trafficData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 18%)" />
                  <XAxis dataKey="month" tick={{ fill: "hsl(215, 15%, 55%)", fontSize: 12 }} />
                  <YAxis tick={{ fill: "hsl(215, 15%, 55%)", fontSize: 12 }} />
                  <Tooltip contentStyle={{ backgroundColor: "hsl(220, 18%, 10%)", border: "1px solid hsl(220, 14%, 18%)", borderRadius: "8px", fontSize: 12 }} />
                  <Bar dataKey="traffic" fill="hsl(142, 60%, 50%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-xl border border-border/50 bg-card p-6">
            <h3 className="font-display text-sm font-semibold">Keyword-Verteilung</h3>
            <div className="mt-4 flex h-64 items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={keywordData} cx="50%" cy="50%" outerRadius={80} dataKey="value" label={({ name, value }) => `${name}: ${value}`}>
                    {keywordData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: "hsl(220, 18%, 10%)", border: "1px solid hsl(220, 14%, 18%)", borderRadius: "8px", fontSize: 12 }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
