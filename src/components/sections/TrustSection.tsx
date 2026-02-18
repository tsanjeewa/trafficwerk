const tools = [
  "Google Search Console",
  "Google Analytics",
  "Sistrix",
  "Ahrefs",
  "Screaming Frog",
  "Semrush",
  "Google Ads",
  "Looker Studio",
  "PageSpeed Insights",
  "Google Tag Manager",
];

const TrustSection = () => {
  const allTools = [...tools, ...tools];

  return (
    <section className="bg-white py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <p className="mb-6 text-center text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground md:mb-8">
          Unsere Tools & Technologien
        </p>
      </div>

      {/* Pure CSS marquee – no JS rAF loop, no forced reflows */}
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

        <div
          className="flex items-center gap-8 whitespace-nowrap md:gap-16"
          style={{
            animation: "marquee 30s linear infinite",
            willChange: "transform",
          }}
        >
          {allTools.map((tool, i) => (
            <span
              key={`${tool}-${i}`}
              className="inline-block cursor-default text-sm font-semibold text-muted-foreground/50 transition-colors duration-300 hover:text-primary md:text-lg"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
