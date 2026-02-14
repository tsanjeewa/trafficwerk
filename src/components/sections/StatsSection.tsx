import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { value: 250, suffix: "+", label: "Erfolgreiche Projekte" },
  { value: 340, suffix: "%", label: "Ø Traffic-Steigerung" },
  { value: 1500, suffix: "+", label: "Keywords auf Seite 1" },
  { value: 98, suffix: "%", label: "Kundenzufriedenheit" },
];

const StatItem = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-4xl font-bold text-primary md:text-5xl">
        {count.toLocaleString("de-DE")}{suffix}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
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
