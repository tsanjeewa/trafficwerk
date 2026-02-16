import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
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

const navLinks = [
  { name: "Startseite", path: "/" },
  { name: "Leistungen", path: "#services" },
  { name: "Kontakt", path: "/kontakt" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex h-14 items-center justify-between px-6">
          {/* Logo */}
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

            <div
              className="relative"
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              <button
                className="nav-link-underline relative text-sm font-medium text-slate-900"
                style={{ fontFamily: "'Inter', sans-serif" }}
                aria-label="Leistungen Menü öffnen"
                aria-expanded={showServices}
              >
                Leistungen
              </button>
              <AnimatePresence>
                {showServices && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-1/2 top-full mt-3 w-60 -translate-x-1/2 rounded-xl border border-slate-100 bg-white p-1.5 shadow-lg"
                  >
                    {services.map((s) => (
                      <Link
                        key={s.path}
                        to={s.path}
                        className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {s.name}
                      </Link>
                    ))}
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
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-white"
          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link) =>
                link.path === "#services" ? (
                  <div key="services" className="flex flex-col items-center gap-3">
                    <span
                      className="text-xs font-semibold uppercase tracking-widest text-slate-400"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Leistungen
                    </span>
                    {services.map((s) => (
                      <Link
                        key={s.path}
                        to={s.path}
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-medium text-slate-700 transition-colors hover:text-blue-600"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-bold text-slate-900 transition-colors hover:text-blue-600"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {link.name}
                  </Link>
                )
              )}
              <Link
                to="/kontakt"
                onClick={() => setIsOpen(false)}
                className="mt-4 rounded-full bg-blue-600 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-blue-700"
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
