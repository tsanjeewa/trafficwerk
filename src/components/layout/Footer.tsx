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
              <a href="https://www.facebook.com/trafficwerk" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-full border border-slate-200 p-2 text-slate-400 transition-colors hover:border-blue-600 hover:text-blue-600">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* SEO Wissen – Keyword-fokussiertes Internal Linking */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">SEO-Wissen</h4>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed">
              Alles, was Sie über Suchmaschinenoptimierung wissen müssen – verständlich erklärt.
            </p>
            <ul className="mt-4 space-y-2.5">
              {[
                { name: "Was ist SEO? (Einstieg)", path: "/wissen" },
                { name: "Wie funktioniert Google-Ranking?", path: "/wissen" },
                { name: "Technische SEO erklärt", path: "/services/technische-seo" },
                { name: "Lokale SEO für lokale Betriebe", path: "/services/lokale-seo" },
                { name: "Content Marketing – was steckt dahinter?", path: "/services/content-marketing" },
                { name: "Was sind Backlinks?", path: "/services/off-page-linkbuilding" },
                { name: "KI & die Zukunft der Suche (GEO)", path: "/geo" },
                { name: "Häufige SEO-Fragen (FAQ)", path: "/faq" },
              ].map((l) => (
                <li key={l.path + l.name}>
                  <Link to={l.path} className="text-sm text-slate-500 transition-colors hover:text-blue-600">{l.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Unternehmen */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">Unternehmen</h4>
            <ul className="mt-4 space-y-2.5">
              <li><Link to="/" className="text-sm text-slate-500 transition-colors hover:text-blue-600">Startseite</Link></li>
              <li><a href="/#team" className="text-sm text-slate-500 transition-colors hover:text-blue-600">Über uns & Team</a></li>
              <li><Link to="/domain-portfolio" className="text-sm text-slate-500 transition-colors hover:text-blue-600">Domain-Portfolio</Link></li>
              <li><Link to="/gratis-analyse" className="text-sm text-slate-500 transition-colors hover:text-blue-600">Gratis SEO-Analyse</Link></li>
              <li><Link to="/kontakt" className="text-sm text-slate-500 transition-colors hover:text-blue-600">Kontakt</Link></li>
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
