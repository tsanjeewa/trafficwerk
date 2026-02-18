import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-section-alt">
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Socials */}
          <div>
            <Link to="/" className="text-2xl font-bold text-foreground font-display">
              TrafficWerk
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Ihre SEO-Agentur für nachhaltiges Wachstum. Wir bringen Ihr Unternehmen auf Seite 1 bei Google.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="https://www.instagram.com/trafficwerk/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/company/trafficwerk/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://www.facebook.com/trafficwerk" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Leistungen – linked to the correct service pages */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">Leistungen</h4>
            <ul className="mt-4 space-y-2.5">
              {[
                { name: "SEO-Strategie", path: "/seo-strategie" },
                { name: "Technische SEO", path: "/services/technische-seo" },
                { name: "On-Page Optimierung", path: "/services/on-page-optimierung" },
                { name: "Off-Page & Linkbuilding", path: "/services/off-page-linkbuilding" },
                { name: "Content Marketing", path: "/services/content-marketing" },
                { name: "Lokale SEO", path: "/services/lokale-seo" },
                { name: "E-Commerce SEO", path: "/services/e-commerce-seo" },
                { name: "Google Ads", path: "/services/google-ads" },
                { name: "GEO & KI-Optimierung", path: "/geo" },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-muted-foreground transition-colors hover:text-primary">{l.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Unternehmen – Über uns → #team anchor */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">Unternehmen</h4>
            <ul className="mt-4 space-y-2.5">
              <li><Link to="/" className="text-sm text-muted-foreground transition-colors hover:text-primary">Startseite</Link></li>
              <li><Link to="/#services" className="text-sm text-muted-foreground transition-colors hover:text-primary">Leistungen</Link></li>
              <li><a href="/#team" className="text-sm text-muted-foreground transition-colors hover:text-primary">Über uns / Team</a></li>
              <li><Link to="/domain-portfolio" className="text-sm text-muted-foreground transition-colors hover:text-primary">Domain Portfolio</Link></li>
              <li><Link to="/wissen" className="text-sm text-muted-foreground transition-colors hover:text-primary">SEO-Glossar</Link></li>
              <li><Link to="/faq" className="text-sm text-muted-foreground transition-colors hover:text-primary">FAQ</Link></li>
              <li><Link to="/kontakt" className="text-sm text-muted-foreground transition-colors hover:text-primary">Kontakt</Link></li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">Kontakt</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Taradeauer Str. 11<br />85244 Röhrmoos</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:info@trafficwerk.de" className="transition-colors hover:text-primary">info@trafficwerk.de</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+4915782208713" className="transition-colors hover:text-primary">+49 1578 2208713</a>
              </li>
            </ul>

            {/* Trust badge */}
            <div className="mt-6 rounded-xl border border-border bg-background p-3 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Zertifizierter Partner</p>
              <p className="mt-1 text-xs font-bold text-foreground">Google · Meta · Sistrix</p>
            </div>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © 2026 TrafficWerk GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <Link to="/impressum" className="text-xs text-muted-foreground transition-colors hover:text-primary">Impressum</Link>
            <Link to="/datenschutz" className="text-xs text-muted-foreground transition-colors hover:text-primary">Datenschutz</Link>
            <Link to="/cookie-richtlinie" className="text-xs text-muted-foreground transition-colors hover:text-primary">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
