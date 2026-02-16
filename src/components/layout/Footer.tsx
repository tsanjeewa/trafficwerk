import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Socials */}
          <div>
            <Link to="/" className="text-2xl font-bold text-slate-900">
              TrafficWerk
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              Ihre SEO-Agentur für nachhaltiges Wachstum. Wir bringen Ihr Unternehmen auf Seite 1 bei Google.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="https://www.instagram.com/trafficwerk/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full border border-slate-200 p-2 text-slate-400 transition-colors hover:border-blue-600 hover:text-blue-600">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/company/trafficwerk/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full border border-slate-200 p-2 text-slate-400 transition-colors hover:border-blue-600 hover:text-blue-600">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Facebook" className="rounded-full border border-slate-200 p-2 text-slate-400 transition-colors hover:border-blue-600 hover:text-blue-600">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Leistungen */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">Leistungen</h4>
            <ul className="mt-4 space-y-2.5">
              {[
                { name: "Technische SEO", path: "/services/technische-seo" },
                { name: "On-Page Optimierung", path: "/services/on-page-optimierung" },
                { name: "Content Marketing", path: "/services/content-marketing" },
                { name: "Lokale SEO", path: "/services/lokale-seo" },
                { name: "Google Ads", path: "/services/google-ads" },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-slate-500 transition-colors hover:text-blue-600">{l.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Unternehmen */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">Unternehmen</h4>
            <ul className="mt-4 space-y-2.5">
              {[
                { name: "Startseite", path: "/" },
                { name: "Services", path: "/#services" },
                { name: "Über uns", path: "/#about" },
                { name: "Wissen", path: "/#faq" },
                { name: "Kontakt", path: "/kontakt" },
              ].map((l) => (
                <li key={l.name}>
                  <Link to={l.path} className="text-sm text-slate-500 transition-colors hover:text-blue-600">{l.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">Kontakt</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-500">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                <span>Taradeauer Str. 11<br />85244 Röhrmoos</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <Mail className="h-4 w-4 shrink-0 text-blue-600" />
                <a href="mailto:info@trafficwerk.de" className="transition-colors hover:text-blue-600">info@trafficwerk.de</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <Phone className="h-4 w-4 shrink-0 text-blue-600" />
                <a href="tel:+4915782208713" className="transition-colors hover:text-blue-600">+49 1578 2208713</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 md:flex-row">
          <p className="text-xs text-slate-400">
            © 2026 TrafficWerk. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <Link to="/impressum" className="text-xs text-slate-400 transition-colors hover:text-blue-600">Impressum</Link>
            <Link to="/datenschutz" className="text-xs text-slate-400 transition-colors hover:text-blue-600">Datenschutz</Link>
            <Link to="/cookie-richtlinie" className="text-xs text-slate-400 transition-colors hover:text-blue-600">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
