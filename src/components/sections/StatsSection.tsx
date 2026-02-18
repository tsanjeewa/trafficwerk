import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { value: 3, suffix: "", label: "Eigene Referenzprojekte" },
  { value: 10, suffix: "", label: "Spezialisierte Services" },
  { value: 100, suffix: "%", label: "Datengetriebener Ansatz" },
  { value: 4, suffix: "", label: "Experten im Team" },
];

const StatItem = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <p className="text-3xl font-bold text-primary md:text-5xl">
        {count.toLocaleString("de-DE")}{suffix}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="nc-card grid grid-cols-2 gap-0 divide-x divide-y divide-border rounded-2xl overflow-hidden md:grid-cols-4 md:divide-y-0">
          {stats.map((s, i) => (
            <div key={s.label} className={`p-6 text-center ${i === 0 ? '' : ''}`}>
              <StatItem {...s} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
