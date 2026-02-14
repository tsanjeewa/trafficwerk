import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="font-display text-2xl font-bold">
              Traffic<span className="text-primary">Werk</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Ihre SEO-Agentur für nachhaltiges Wachstum. Wir bringen Ihr Unternehmen auf Seite 1 bei Google.
            </p>
            <div className="mt-6 flex gap-4">
              {["LinkedIn", "Twitter", "Instagram"].map((s) => (
                <a key={s} href="#" className="text-xs font-medium text-muted-foreground transition-colors hover:text-primary">{s}</a>
              ))}
            </div>
          </div>

          {/* Leistungen */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider">Leistungen</h4>
            <ul className="mt-4 space-y-2">
              {[
                { name: "Technische SEO", path: "/services/technische-seo" },
                { name: "On-Page Optimierung", path: "/services/on-page-optimierung" },
                { name: "Content Marketing", path: "/services/content-marketing" },
                { name: "Lokale SEO", path: "/services/lokale-seo" },
                { name: "Google Ads", path: "/services/google-ads" },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-muted-foreground transition-colors hover:text-primary">{l.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Unternehmen */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider">Unternehmen</h4>
            <ul className="mt-4 space-y-2">
              {[
                { name: "Kontakt", path: "/kontakt" },
                { name: "Impressum", path: "/impressum" },
                { name: "Datenschutz", path: "/datenschutz" },
                { name: "Cookie-Richtlinie", path: "/cookie-richtlinie" },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-muted-foreground transition-colors hover:text-primary">{l.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider">Kontakt</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Taradeauer Str. 11<br />85244 Röhrmoos</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span>info@trafficwerk.de</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span>+49 (0) 8139 999 000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} TrafficWerk. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <Link to="/impressum" className="text-xs text-muted-foreground hover:text-primary">Impressum</Link>
            <Link to="/datenschutz" className="text-xs text-muted-foreground hover:text-primary">Datenschutz</Link>
            <Link to="/cookie-richtlinie" className="text-xs text-muted-foreground hover:text-primary">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
