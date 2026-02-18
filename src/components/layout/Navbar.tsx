import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu, X, ChevronDown,
  Search, Wrench, FileText, TrendingUp, Eye, Bot, Globe,
  Sparkles, BarChart2, MapPin, ShoppingBag, Link2, Zap,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/trafficwerk-logo-new.png";

/* ─── Data ─────────────────────────────────────────────────────────── */

const topNavLinks = [
  { label: "Startseite", to: "/" },
  { label: "Wissen", to: "/wissen" },
  { label: "FAQ", to: "/faq" },
  { label: "Kontakt", to: "/kontakt" },
];

const megaMenuCategories = [
  {
    title: "SEO Beratung",
    icon: Search,
    color: "text-blue-600",
    bg: "bg-blue-50",
    items: [
      { name: "SEO Agentur Deutschland", path: "/lp/seo-agentur-deutschland" },
      { name: "Professionelle SEO Beratung", path: "/lp/seo-beratung" },
      { name: "Kostenlose SEO Analyse", path: "/lp/seo-analyse" },
      { name: "Strategische SEO Planung", path: "/lp/seo-strategie" },
      { name: "Umfassendes SEO Audit", path: "/lp/seo-audit-service" },
      { name: "SEO für KMU", path: "/lp/seo-fuer-kmu" },
      { name: "SEO Coaching & Workshop", path: "/lp/seo-coaching" },
    ],
  },
  {
    title: "Technik & Analyse",
    icon: Wrench,
    color: "text-violet-600",
    bg: "bg-violet-50",
    items: [
      { name: "Technisches SEO Audit", path: "/lp/technisches-seo-audit" },
      { name: "OnPage SEO Optimierung", path: "/lp/onpage-seo-optimierung" },
      { name: "Conversion Optimierung", path: "/lp/conversion-optimierung" },
      { name: "SEO Monitoring", path: "/lp/seo-monitoring" },
      { name: "Keyword Recherche", path: "/lp/keyword-recherche" },
    ],
  },
  {
    title: "Content & Links",
    icon: FileText,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    items: [
      { name: "Content Marketing Agentur", path: "/lp/content-marketing-agentur" },
      { name: "SEO Content Erstellung", path: "/lp/seo-content-erstellung" },
      { name: "Linkbuilding Service", path: "/lp/linkbuilding-service" },
      { name: "Backlink Aufbau", path: "/lp/backlink-aufbau" },
    ],
  },
  {
    title: "Online Marketing",
    icon: TrendingUp,
    color: "text-orange-600",
    bg: "bg-orange-50",
    items: [
      { name: "Onlinemarketing", path: "/lp/onlinemarketing" },
      { name: "E-Commerce SEO", path: "/lp/e-commerce-seo-optimierung" },
      { name: "Shop SEO", path: "/lp/shop-seo" },
      { name: "WordPress SEO", path: "/lp/wordpress-seo" },
      { name: "Google Ads", path: "/services/google-ads" },
    ],
  },
  {
    title: "Google Sichtbarkeit",
    icon: Eye,
    color: "text-sky-600",
    bg: "bg-sky-50",
    items: [
      { name: "Google Ranking verbessern", path: "/lp/google-ranking-verbessern" },
      { name: "Lokale SEO", path: "/services/lokale-seo" },
      { name: "Internationale SEO", path: "/services/internationale-seo" },
      { name: "Suchmaschinenoptimierung", path: "/lp/suchmaschinenoptimierung" },
      { name: "Local SEO Experten", path: "/lp/local-seo-agentur" },
    ],
  },
  {
    title: "KI-SEO & GEO",
    icon: Bot,
    color: "text-fuchsia-600",
    bg: "bg-fuchsia-50",
    items: [
      { name: "Bei ChatGPT gefunden werden", path: "/lp/bei-chatgpt-gefunden-werden" },
      { name: "GEO & KI-Optimierung", path: "/geo" },
      { name: "KI-gestütztes Marketing", path: "/lp/ki-gestuetztes-marketing" },
      { name: "AI Search Optimization", path: "/services/ai-search-optimization" },
    ],
  },
  {
    title: "Domain Management",
    icon: Globe,
    color: "text-teal-600",
    bg: "bg-teal-50",
    items: [
      { name: "Domain Portfolio ansehen", path: "/domain-portfolio" },
      { name: "Hub-and-Spoke Strategie", path: "/domain-portfolio" },
      { name: "Domain-Checker", path: "/domain-portfolio" },
    ],
  },
];

/* featured service cards shown in the left panel of the mega menu */
const featuredServices = [
  { icon: Sparkles, label: "SEO-Strategie", desc: "Ganzheitliche Planung", path: "/seo-strategie" },
  { icon: BarChart2, label: "Technische SEO", desc: "Core Web Vitals & mehr", path: "/services/technische-seo" },
  { icon: MapPin, label: "Lokale SEO", desc: "Google Maps Dominanz", path: "/services/lokale-seo" },
  { icon: ShoppingBag, label: "E-Commerce SEO", desc: "Shop-Optimierung", path: "/services/e-commerce-seo" },
  { icon: Link2, label: "Linkbuilding", desc: "Autorität aufbauen", path: "/services/off-page-linkbuilding" },
  { icon: Zap, label: "GEO / KI-SEO", desc: "Zukunft der Suche", path: "/geo" },
];

/* ─── Component ─────────────────────────────────────────────────────── */

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMega, setShowMega] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileAcc, setMobileAcc] = useState<string | null>(null);
  const megaTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
    setShowMega(false);
    setMobileAcc(null);
  }, [location.pathname]);

  const openMega = () => {
    if (megaTimerRef.current) clearTimeout(megaTimerRef.current);
    setShowMega(true);
  };
  const closeMega = () => {
    megaTimerRef.current = setTimeout(() => setShowMega(false), 120);
  };

  return (
    <>
      {/* ── Desktop Navbar ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || showMega ? "bg-white shadow-sm border-b border-slate-100" : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img src={logo} alt="TrafficWerk" className="h-8" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden items-center gap-1 lg:flex">
            <Link
              to="/"
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900"
            >
              Startseite
            </Link>

            {/* Leistungen mega-trigger */}
            <div
              className="relative"
              onMouseEnter={openMega}
              onMouseLeave={closeMega}
            >
              <button
                className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-slate-100 ${
                  showMega ? "bg-slate-100 text-slate-900" : "text-slate-700"
                }`}
                aria-expanded={showMega}
              >
                Leistungen
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${showMega ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            {topNavLinks.slice(1).map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="/#seo-analyse"
              className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
            >
              Gratis Analyse
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="relative z-50 flex h-9 w-9 items-center justify-center rounded-md text-slate-700 hover:bg-slate-100 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menü öffnen"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* ── Full-width Mega Menu (edge-to-edge) ── */}
        <AnimatePresence>
          {showMega && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed left-0 right-0 top-16 z-40 border-t border-slate-100 bg-white shadow-2xl"
              onMouseEnter={openMega}
              onMouseLeave={closeMega}
            >
              {/* Full-bleed inner layout */}
              <div className="mx-auto max-w-screen-2xl px-8 py-8">
                <div className="flex gap-10">

                  {/* ── LEFT PANEL: Kernleistungen + CTA ── */}
                  <div className="w-72 shrink-0 border-r border-slate-100 pr-8">
                    <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                      Kernleistungen
                    </p>
                    <div className="space-y-0.5">
                      {featuredServices.map((s) => {
                        const Icon = s.icon;
                        return (
                          <Link
                            key={s.path}
                            to={s.path}
                            className="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all hover:bg-slate-50"
                          >
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                              <Icon className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-slate-800 transition-colors group-hover:text-primary">
                                {s.label}
                              </p>
                              <p className="text-[11px] leading-tight text-slate-400">{s.desc}</p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* CTA Card */}
                    <div className="mt-6 rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/8 to-primary/4 p-5">
                      <div className="mb-1 flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary/15">
                          <Sparkles className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <p className="text-xs font-bold text-primary">Gratis SEO-Audit</p>
                      </div>
                      <p className="mb-3 text-[11px] leading-relaxed text-slate-500">
                        Wir analysieren Ihre Website kostenlos und zeigen konkretes Wachstumspotenzial.
                      </p>
                      <a
                        href="/#seo-analyse"
                        className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
                      >
                        Jetzt starten →
                      </a>
                    </div>
                  </div>

                  {/* ── RIGHT PANEL: All Categories ── */}
                  <div className="flex-1">
                    <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                      Alle Spezialisierungen
                    </p>
                    <div className="grid grid-cols-4 gap-x-8 gap-y-7">
                      {megaMenuCategories.map((cat) => {
                        const Icon = cat.icon;
                        return (
                          <div key={cat.title}>
                            {/* Category header */}
                            <div className="mb-3 flex items-center gap-2">
                              <div className={`flex h-7 w-7 items-center justify-center rounded-lg ${cat.bg}`}>
                                <Icon className={`h-3.5 w-3.5 ${cat.color}`} />
                              </div>
                              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                                {cat.title}
                              </span>
                            </div>
                            {/* Items */}
                            <ul className="space-y-1">
                              {cat.items.map((item) => (
                                <li key={item.path + item.name}>
                                  <Link
                                    to={item.path}
                                    className="flex items-center gap-1.5 rounded-md px-1.5 py-1 text-[12.5px] text-slate-500 transition-all hover:bg-slate-50 hover:text-primary hover:pl-2.5"
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>

                    {/* Bottom bar */}
                    <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                      <p className="text-[11px] text-slate-400">
                        Nicht sicher welche Leistung passt?{" "}
                        <Link to="/kontakt" className="font-semibold text-primary hover:underline">
                          Kostenlos beraten lassen →
                        </Link>
                      </p>
                      <div className="flex items-center gap-1 text-[11px] text-slate-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        Über 150 zufriedene Kunden
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ── Mobile Fullscreen Overlay ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-40 overflow-y-auto bg-white pt-16"
          >
            <div className="flex flex-col px-6 py-4">
              {/* Main links */}
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="border-b border-slate-100 py-4 text-base font-semibold text-slate-900"
              >
                Startseite
              </Link>

              {/* Leistungen accordion */}
              <div className="border-b border-slate-100">
                <button
                  onClick={() => setMobileAcc(mobileAcc === "leistungen" ? null : "leistungen")}
                  className="flex w-full items-center justify-between py-4 text-base font-semibold text-slate-900"
                >
                  Leistungen
                  <ChevronDown
                    className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
                      mobileAcc === "leistungen" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {mobileAcc === "leistungen" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      {/* Featured */}
                      <div className="pb-2">
                        <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                          Kernleistungen
                        </p>
                        <div className="grid grid-cols-2 gap-1">
                          {featuredServices.map((s) => {
                            const Icon = s.icon;
                            return (
                              <Link
                                key={s.path}
                                to={s.path}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-2 rounded-lg p-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-primary"
                              >
                                <Icon className="h-4 w-4 text-primary shrink-0" />
                                {s.label}
                              </Link>
                            );
                          })}
                        </div>
                      </div>

                      {/* Categories */}
                      <div className="mt-2 space-y-1 pb-4">
                        <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                          Spezialisierungen
                        </p>
                        {megaMenuCategories.map((cat) => {
                          const Icon = cat.icon;
                          const isOpen2 = mobileAcc === cat.title;
                          return (
                            <div key={cat.title} className="rounded-lg border border-slate-100">
                              <button
                                onClick={() =>
                                  setMobileAcc(isOpen2 ? "leistungen" : cat.title)
                                }
                                className="flex w-full items-center justify-between px-3 py-2.5"
                              >
                                <span className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                                  <Icon className={`h-4 w-4 ${cat.color}`} />
                                  {cat.title}
                                </span>
                                <ChevronDown
                                  className={`h-3.5 w-3.5 text-slate-400 transition-transform ${
                                    isOpen2 ? "rotate-180" : ""
                                  }`}
                                />
                              </button>
                              <AnimatePresence>
                                {isOpen2 && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.15 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="border-t border-slate-100 px-3 pb-3 pt-2">
                                      {cat.items.map((item) => (
                                        <Link
                                          key={item.path + item.name}
                                          to={item.path}
                                          onClick={() => setIsOpen(false)}
                                          className="block py-1.5 pl-6 text-sm text-slate-500 hover:text-primary"
                                        >
                                          {item.name}
                                        </Link>
                                      ))}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {topNavLinks.slice(1).map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setIsOpen(false)}
                  className="border-b border-slate-100 py-4 text-base font-semibold text-slate-900"
                >
                  {l.label}
                </Link>
              ))}

              <a
                href="/#seo-analyse"
                onClick={() => setIsOpen(false)}
                className="mt-6 rounded-full bg-primary px-8 py-3 text-center text-base font-semibold text-primary-foreground hover:bg-primary/90"
              >
                Gratis Analyse
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
