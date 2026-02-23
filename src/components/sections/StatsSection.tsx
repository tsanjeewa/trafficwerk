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
      {/* Use foreground-based color token for WCAG AA contrast */}
      <p className="text-3xl font-bold text-primary md:text-5xl">
        {count.toLocaleString("de-DE")}{suffix}
      </p>
      <p className="mt-2 text-sm text-foreground/60">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="bg-slate-50 py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
