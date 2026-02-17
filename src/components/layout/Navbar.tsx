import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Search, Wrench, FileText, TrendingUp, Eye, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/trafficwerk-logo-new.png";

const services = [
  { name: "SEO-Strategie", path: "/services/technische-seo" },
  { name: "Performance Marketing", path: "/services/google-ads" },
  { name: "Webdesign & Entwicklung", path: "/services/on-page-optimierung" },
  { name: "E-Commerce-Lösungen", path: "/services/e-commerce-seo" },
  { name: "Social Media Marketing", path: "/services/off-page-linkbuilding" },
  { name: "Content Creation", path: "/services/content-marketing" },
  { name: "KI-Optimierung (GEO)", path: "/services/ai-search-optimization" },
  { name: "Performance & Speed", path: "/services/lead-generierung" },
  { name: "Lokale & Globale SEO", path: "/services/lokale-seo" },
  { name: "Digitale Strategie", path: "/services/internationale-seo" },
];

const megaMenuCategories = [
  {
    title: "SEO Beratung",
    icon: Search,
    items: [
      { name: "SEO Agentur Deutschland", path: "/lp/seo-agentur-deutschland" },
      { name: "Professionelle SEO Beratung", path: "/lp/seo-beratung" },
      { name: "Kostenlose SEO Analyse", path: "/lp/seo-analyse" },
      { name: "Strategische SEO Planung", path: "/lp/seo-strategie" },
      { name: "Umfassendes SEO Audit", path: "/lp/seo-audit-service" },
      { name: "Individuelle SEO Beratung", path: "/lp/seo-experten-beratung" },
      { name: "SEO für KMU", path: "/lp/seo-fuer-kmu" },
      { name: "SEO Coaching & Workshop", path: "/lp/seo-coaching" },
    ],
  },
  {
    title: "Technik & Analyse",
    icon: Wrench,
    items: [
      { name: "Technisches SEO Audit", path: "/lp/technisches-seo-audit" },
      { name: "OnPage SEO Optimierung", path: "/lp/onpage-seo-optimierung" },
      { name: "Technisches Web-Audit", path: "/lp/technisches-web-audit" },
      { name: "Conversion Optimierung", path: "/lp/conversion-optimierung" },
      { name: "SEO Monitoring", path: "/lp/seo-monitoring" },
      { name: "Keyword Recherche", path: "/lp/keyword-recherche" },
    ],
  },
  {
    title: "Content & Links",
    icon: FileText,
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
    items: [
      { name: "Onlinemarketing", path: "/lp/onlinemarketing" },
      { name: "Suchmaschinenmarketing", path: "/lp/suchmaschinenmarketing" },
      { name: "E-Commerce SEO", path: "/lp/e-commerce-seo-optimierung" },
      { name: "Shop SEO", path: "/lp/shop-seo" },
      { name: "WordPress SEO", path: "/lp/wordpress-seo" },
    ],
  },
  {
    title: "Google Sichtbarkeit",
    icon: Eye,
    items: [
      { name: "Google Ranking verbessern", path: "/lp/google-ranking-verbessern" },
      { name: "Sichtbarkeit bei Google steigern", path: "/lp/sichtbarkeit-google-erhoehen" },
      { name: "Bei Google gefunden werden", path: "/lp/bei-google-gefunden-werden" },
      { name: "Online sichtbar werden", path: "/lp/google-sichtbar-werden" },
      { name: "Online-Präsenz erhöhen", path: "/lp/online-sichtbarkeit" },
      { name: "Suchmaschinenoptimierung", path: "/lp/suchmaschinenoptimierung" },
      { name: "Local SEO Experten", path: "/lp/local-seo-agentur" },
    ],
  },
  {
    title: "KI-SEO",
    icon: Bot,
    items: [
      { name: "Bei ChatGPT gefunden werden", path: "/lp/bei-chatgpt-gefunden-werden" },
      { name: "ChatGPT Sichtbarkeit", path: "/lp/chatgpt-sichtbarkeit-verbessern" },
      { name: "KI-gestütztes Marketing", path: "/lp/ki-gestuetztes-marketing" },
      { name: "Optimierung KI-Suche", path: "/lp/optimierung-ki-suche" },
    ],
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setShowMegaMenu(false);
    setMobileAccordion(null);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex h-14 items-center justify-between px-6">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="TrafficWerk" className="h-8" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 lg:flex">
            <Link
              to="/"
              className="nav-link-underline relative text-sm font-medium text-slate-900"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Startseite
            </Link>

            {/* Leistungen with Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setShowMegaMenu(true)}
              onMouseLeave={() => setShowMegaMenu(false)}
            >
              <button
                className="nav-link-underline relative flex items-center gap-1 text-sm font-medium text-slate-900"
                style={{ fontFamily: "'Inter', sans-serif" }}
                aria-label="Leistungen Menü öffnen"
                aria-expanded={showMegaMenu}
              >
                Leistungen
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${showMegaMenu ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {showMegaMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full mt-3 w-[820px] -translate-x-1/4 rounded-2xl border border-slate-100 bg-white p-6 shadow-xl"
                  >
                    {/* Core Services */}
                    <div className="mb-5 border-b border-slate-100 pb-5">
                      <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">Unsere Leistungen</p>
                      <div className="grid grid-cols-2 gap-1">
                        {services.map((s) => (
                          <Link
                            key={s.path}
                            to={s.path}
                            className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
                          >
                            {s.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Mega Menu Categories */}
                    <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">Spezialisierungen</p>
                    <div className="grid grid-cols-3 gap-6">
                      {megaMenuCategories.map((cat) => {
                        const Icon = cat.icon;
                        return (
                          <div key={cat.title}>
                            <div className="mb-2 flex items-center gap-2">
                              <Icon className="h-4 w-4 text-blue-600" />
                              <span className="text-xs font-bold uppercase tracking-wider text-slate-900">{cat.title}</span>
                            </div>
                            <ul className="space-y-0.5">
                              {cat.items.map((item) => (
                                <li key={item.path}>
                                  <Link
                                    to={item.path}
                                    className="block rounded-md px-2 py-1 text-[13px] text-slate-500 transition-colors hover:bg-blue-50 hover:text-blue-600"
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
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/kontakt"
              className="nav-link-underline relative text-sm font-medium text-slate-900"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Kontakt
            </Link>

            <Link
              to="/kontakt"
              className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Gratis Analyse
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="relative z-50 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menü"
          >
            {isOpen ? <X className="h-6 w-6 text-slate-900" /> : <Menu className="h-6 w-6 text-slate-900" />}
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 overflow-y-auto bg-white pt-16"
          >
            <div className="flex flex-col gap-2 px-6 py-6">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="py-3 text-lg font-bold text-slate-900"
              >
                Startseite
              </Link>

              {/* Mobile Services */}
              <div className="border-t border-slate-100 pt-2">
                <p className="py-3 text-xs font-bold uppercase tracking-widest text-slate-400">Unsere Leistungen</p>
                {services.map((s) => (
                  <Link
                    key={s.path}
                    to={s.path}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-sm font-medium text-slate-600 hover:text-blue-600"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Mega Menu Accordions */}
              <div className="border-t border-slate-100 pt-2">
                <p className="py-3 text-xs font-bold uppercase tracking-widest text-slate-400">Spezialisierungen</p>
                {megaMenuCategories.map((cat) => {
                  const Icon = cat.icon;
                  const isAccOpen = mobileAccordion === cat.title;
                  return (
                    <div key={cat.title} className="border-b border-slate-50">
                      <button
                        onClick={() => setMobileAccordion(isAccOpen ? null : cat.title)}
                        className="flex w-full items-center justify-between py-3"
                        aria-expanded={isAccOpen}
                      >
                        <span className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                          <Icon className="h-4 w-4 text-blue-600" />
                          {cat.title}
                        </span>
                        <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${isAccOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {isAccOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pb-3 pl-6">
                              {cat.items.map((item) => (
                                <Link
                                  key={item.path}
                                  to={item.path}
                                  onClick={() => setIsOpen(false)}
                                  className="block py-1.5 text-sm text-slate-500 hover:text-blue-600"
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

              <Link
                to="/kontakt"
                onClick={() => setIsOpen(false)}
                className="py-3 text-lg font-bold text-slate-900"
              >
                Kontakt
              </Link>

              <Link
                to="/kontakt"
                onClick={() => setIsOpen(false)}
                className="mt-4 rounded-full bg-blue-600 px-8 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Gratis Analyse
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
