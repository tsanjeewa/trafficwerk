import { useEffect, useRef } from "react";

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
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    let position = 0;
    const speed = 0.4;

    const animate = () => {
      position += speed;
      const halfWidth = el.scrollWidth / 2;
      if (position >= halfWidth) position = 0;
      el.style.transform = `translateX(-${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const allTools = [...tools, ...tools];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6">
        <p className="mb-8 text-center text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
          Unsere Tools & Technologien
        </p>
      </div>

      {/* Marquee with fade masks */}
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

        <div ref={scrollRef} className="flex items-center gap-16 whitespace-nowrap will-change-transform">
          {allTools.map((tool, i) => (
            <span
              key={`${tool}-${i}`}
              className="inline-block cursor-default text-lg font-semibold text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:text-blue-600"
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
