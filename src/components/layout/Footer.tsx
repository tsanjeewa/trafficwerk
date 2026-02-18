import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, ArrowRight } from "lucide-react";
import logo from "@/assets/trafficwerk-logo-new.png";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400">
      {/* Top CTA bar */}
      <div className="border-b border-slate-800">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
          <p className="text-sm font-medium text-slate-300">
            Bereit für mehr Sichtbarkeit bei Google?
          </p>
          <Link
            to="/gratis-analyse"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
          >
            Gratis SEO-Analyse starten
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="container mx-auto px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <img src={logo} alt="TrafficWerk" className="h-8 brightness-0 invert" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Ihre SEO-Agentur für nachhaltiges Wachstum. Wir bringen Ihr Unternehmen auf Seite 1 bei Google.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.instagram.com/trafficwerk/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/trafficwerk/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/trafficwerk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* SEO Wissen */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-200">
              SEO-Wissen
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: "Was ist SEO?", path: "/wissen" },
                { name: "Technische SEO", path: "/services/technische-seo" },
                { name: "Lokale SEO", path: "/services/lokale-seo" },
                { name: "Content Marketing", path: "/services/content-marketing" },
                { name: "Backlinks & Linkbuilding", path: "/services/off-page-linkbuilding" },
                { name: "KI & GEO-Optimierung", path: "/geo" },
                { name: "Häufige SEO-Fragen", path: "/faq" },
              ].map((l) => (
                <li key={l.path + l.name}>
                  <Link
                    to={l.path}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Unternehmen */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-200">
              Unternehmen
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/" className="text-sm text-slate-400 transition-colors hover:text-white">
                  Startseite
                </Link>
              </li>
              <li>
                <a href="/#team" className="text-sm text-slate-400 transition-colors hover:text-white">
                  Über uns & Team
                </a>
              </li>
              <li>
                <Link to="/domain-portfolio" className="text-sm text-slate-400 transition-colors hover:text-white">
                  Domain-Portfolio
                </Link>
              </li>
              <li>
                <Link to="/gratis-analyse" className="text-sm text-slate-400 transition-colors hover:text-white">
                  Gratis SEO-Analyse
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-sm text-slate-400 transition-colors hover:text-white">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-200">
              Kontakt
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="leading-relaxed text-slate-400">
                  Taradeauer Str. 11<br />85244 Röhrmoos
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:info@trafficwerk.de" className="text-slate-400 transition-colors hover:text-white">
                  info@trafficwerk.de
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+4915782208713" className="text-slate-400 transition-colors hover:text-white">
                  +49 1578 2208713
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-6 py-5 sm:flex-row">
          <p className="text-xs text-slate-600">
            © 2026 TrafficWerk. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-5">
            <Link to="/impressum" className="text-xs text-slate-600 transition-colors hover:text-slate-300">
              Impressum
            </Link>
            <Link to="/datenschutz" className="text-xs text-slate-600 transition-colors hover:text-slate-300">
              Datenschutz
            </Link>
            <Link to="/cookie-richtlinie" className="text-xs text-slate-600 transition-colors hover:text-slate-300">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
