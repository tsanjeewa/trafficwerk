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
      <p className="text-4xl font-bold text-blue-600 md:text-5xl">
        {count.toLocaleString("de-DE")}{suffix}
      </p>
      <p className="mt-2 text-sm text-slate-500">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
