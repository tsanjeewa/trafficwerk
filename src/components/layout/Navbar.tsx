import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/trafficwerk-logo.png";

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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="TrafficWerk" className="h-10" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 lg:flex">
          <Link to="/" className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === "/" ? "text-primary" : "text-muted-foreground"}`}>
            Startseite
          </Link>
          <div className="relative" onMouseEnter={() => setShowServices(true)} onMouseLeave={() => setShowServices(false)}>
            <button className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Leistungen
            </button>
            {showServices && (
              <div className="absolute left-0 top-full mt-2 w-64 rounded-lg border border-border bg-card p-2 shadow-2xl">
                {services.map((s) => (
                  <Link key={s.path} to={s.path} className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/kontakt" className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === "/kontakt" ? "text-primary" : "text-muted-foreground"}`}>
            Kontakt
          </Link>
          <Button asChild className="rounded-full">
            <Link to="/kontakt">Kostenlose Beratung</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container mx-auto space-y-1 px-6 py-4">
            <Link to="/" onClick={() => setIsOpen(false)} className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary">Startseite</Link>
            <p className="px-3 pt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Leistungen</p>
            {services.map((s) => (
              <Link key={s.path} to={s.path} onClick={() => setIsOpen(false)} className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground">
                {s.name}
              </Link>
            ))}
            <Link to="/kontakt" onClick={() => setIsOpen(false)} className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary">Kontakt</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
