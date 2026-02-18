import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Spalte 1: Marke & Social */}
          <div>
            <Link to="/" className="text-xl font-bold text-slate-900 tracking-tight">
              TrafficWerk
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              Ihre SEO-Agentur für nachhaltiges Wachstum. Wir bringen Ihr Unternehmen auf Seite 1 bei Google.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="https://www.instagram.com/trafficwerk/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="rounded-full border border-slate-200 p-2 text-slate-400 transition-colors hover:border-primary hover:text-primary">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/company/trafficwerk/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="rounded-full border border-slate-200 p-2 text-slate-400 transition-colors hover:border-primary hover:text-primary">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://www.facebook.com/trafficwerk" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="rounded-full border border-slate-200 p-2 text-slate-400 transition-colors hover:border-primary hover:text-primary">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Spalte 2: Leistungen – gezieltes Internal Linking */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900">Leistungen</h4>
            <ul className="mt-4 space-y-2.5">
              {[
                { name: "SEO-Strategie & Beratung", path: "/services/seo-strategie" },
                { name: "Technische SEO", path: "/services/technische-seo" },
                { name: "On-Page Optimierung", path: "/services/on-page-optimierung" },
                { name: "Lokale SEO", path: "/services/lokale-seo" },
                { name: "Content Marketing", path: "/services/content-marketing" },
                { name: "Off-Page & Linkbuilding", path: "/services/off-page-linkbuilding" },
                { name: "GEO / KI-Optimierung", path: "/services/geo-ki-optimierung" },
                { name: "E-Commerce SEO", path: "/services/e-commerce-seo" },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-slate-500 transition-colors hover:text-primary">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Spalte 3: Unternehmen */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900">Unternehmen</h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link to="/" className="text-sm text-slate-500 transition-colors hover:text-primary">Startseite</Link>
              </li>
              <li>
                <a href="/#team" className="text-sm text-slate-500 transition-colors hover:text-primary">Über uns & Team</a>
              </li>
              <li>
                <Link to="/wissen" className="text-sm text-slate-500 transition-colors hover:text-primary">SEO-Wissen & Glossar</Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-slate-500 transition-colors hover:text-primary">Häufige Fragen (FAQ)</Link>
              </li>
              <li>
                <Link to="/domain-portfolio" className="text-sm text-slate-500 transition-colors hover:text-primary">Domain-Portfolio</Link>
              </li>
              <li>
                <Link to="/gratis-analyse" className="text-sm text-slate-500 transition-colors hover:text-primary">Gratis SEO-Analyse</Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-sm text-slate-500 transition-colors hover:text-primary">Kontakt</Link>
              </li>
            </ul>
          </div>

          {/* Spalte 4: Kontakt */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900">Kontakt</h4>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-500">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Taradeauer Str. 11<br />85244 Röhrmoos</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:info@trafficwerk.de" className="transition-colors hover:text-primary">
                  info@trafficwerk.de
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+4915782208713" className="transition-colors hover:text-primary">
                  +49 1578 2208713
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Trennlinie & Copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 md:flex-row">
          <p className="text-xs text-slate-400">
            © 2026 TrafficWerk. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <Link to="/impressum" className="text-xs text-slate-400 transition-colors hover:text-primary">Impressum</Link>
            <Link to="/datenschutz" className="text-xs text-slate-400 transition-colors hover:text-primary">Datenschutz</Link>
            <Link to="/cookie-richtlinie" className="text-xs text-slate-400 transition-colors hover:text-primary">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
