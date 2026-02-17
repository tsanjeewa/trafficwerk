import { ShoppingCart, TrendingUp, MapPin, Globe, IceCream, Coffee, Wrench, User, Search } from "lucide-react";

export interface DomainEntry {
  domain: string;
  ssl: boolean;
  type: "hub" | "independent" | "satellite" | "seo";
  description: string;
  redirectsTo?: string;
}

export interface DomainCategory {
  title: string;
  icon: string; // lucide icon name reference
  domains: DomainEntry[];
}

export const hubDomains: DomainEntry[] = [
  { domain: "lustaufeis24.de", ssl: true, type: "hub", description: "Haupt-E-Commerce-Shop für Eismaschinen und Eiszubehör" },
  { domain: "eismaschine.de", ssl: true, type: "hub", description: "Führende Informationsplattform für Eismaschinen" },
  { domain: "eiscafe-florenz-leipzig.de", ssl: true, type: "hub", description: "Lokales Eiscafé – Referenzprojekt für Local SEO" },
];

export const domainCategories: DomainCategory[] = [
  {
    title: "E-Commerce & Shop",
    icon: "ShoppingCart",
    domains: [
      { domain: "eiscafebedarf.com", ssl: false, type: "satellite", description: "Eiscafé-Zubehör & Bedarf", redirectsTo: "lustaufeis24.de" },
      { domain: "eisdielenbedarf.com", ssl: false, type: "satellite", description: "Eisdielenbedarf & Ausstattung", redirectsTo: "lustaufeis24.de" },
      { domain: "eisautomat.com", ssl: false, type: "satellite", description: "Eisautomaten & Vending", redirectsTo: "lustaufeis24.de" },
      { domain: "eisauto.de", ssl: false, type: "satellite", description: "Eiswagen & mobile Eislösungen", redirectsTo: "eismaschine.de" },
      { domain: "eiswagen.com", ssl: false, type: "satellite", description: "Eiswagen-Ausstattung", redirectsTo: "lustaufeis24.de" },
      { domain: "eistheke.com", ssl: false, type: "satellite", description: "Eistheken & Vitrinen", redirectsTo: "lustaufeis24.de" },
      { domain: "eisvitrine.com", ssl: false, type: "satellite", description: "Professionelle Eisvitrinen", redirectsTo: "lustaufeis24.de" },
      { domain: "speiseeismaschine.com", ssl: false, type: "satellite", description: "Speiseeismaschinen", redirectsTo: "lustaufeis24.de" },
      { domain: "speiseeismaschine.de", ssl: true, type: "satellite", description: "Speiseeismaschinen (DE)", redirectsTo: "lustaufeis24.de" },
    ],
  },
  {
    title: "Gastronomie & Eis",
    icon: "IceCream",
    domains: [
      { domain: "bamslush.de", ssl: false, type: "independent", description: "Slush-Eis Produktlinie" },
      { domain: "bio-frozen-yogurt.de", ssl: false, type: "independent", description: "Bio Frozen Yogurt Nische" },
      { domain: "frozen-yogurt.info", ssl: false, type: "independent", description: "Frozen Yogurt Informationsportal" },
      { domain: "frozen-yogurt-eis.de", ssl: true, type: "satellite", description: "Frozen Yogurt & Eis", redirectsTo: "lustaufeis24.de" },
      { domain: "lustaufeis.de", ssl: false, type: "independent", description: "Markenportal Eis" },
      { domain: "lustaufslush.de", ssl: false, type: "independent", description: "Slush-Eis Equipment" },
      { domain: "mein-eisladen.de", ssl: false, type: "independent", description: "Eisladen-Ressourcen" },
      { domain: "softeis.org", ssl: false, type: "independent", description: "Softeis-Nische" },
      { domain: "softeisherstellung.de", ssl: false, type: "independent", description: "Softeis-Herstellung" },
      { domain: "eisbereiter.org", ssl: false, type: "independent", description: "Eisbereitung & Zubereitung" },
      { domain: "eisfachmesse.de", ssl: false, type: "independent", description: "Eis-Fachmessen & Events" },
      { domain: "pinguin-eis.de", ssl: true, type: "satellite", description: "Pinguin Eis Marke", redirectsTo: "lustaufeis24.de" },
    ],
  },
  {
    title: "Satellite-Domains",
    icon: "Globe",
    domains: [
      { domain: "eis-dealer.de", ssl: false, type: "satellite", description: "Eis-Dealer Portal", redirectsTo: "lustaufeis24.de" },
      { domain: "eisdealer.de", ssl: true, type: "satellite", description: "Eisdealer Nische", redirectsTo: "lustaufeis24.de" },
      { domain: "eisdealer.com", ssl: false, type: "satellite", description: "Eisdealer International", redirectsTo: "lustaufeis24.de" },
      { domain: "eisfabrik-bedarf.de", ssl: false, type: "satellite", description: "Eisfabrik Bedarf", redirectsTo: "lustaufeis24.de" },
      { domain: "eishersteller.com", ssl: false, type: "satellite", description: "Eishersteller", redirectsTo: "lustaufeis24.de" },
      { domain: "eisherstellung.com", ssl: false, type: "satellite", description: "Eisherstellung", redirectsTo: "lustaufeis24.de" },
      { domain: "eismaschinen-vergleich.de", ssl: false, type: "satellite", description: "Eismaschinen-Vergleichsportal", redirectsTo: "eismaschine.de" },
      { domain: "profi-eismaschine.de", ssl: true, type: "satellite", description: "Profi-Eismaschinen", redirectsTo: "eismaschine.de" },
      { domain: "profi-eismaschine.com", ssl: false, type: "satellite", description: "Profi-Eismaschinen (COM)", redirectsTo: "eismaschine.de" },
      { domain: "softeismaschine.com", ssl: false, type: "satellite", description: "Softeis-Maschinen", redirectsTo: "eismaschine.de" },
      { domain: "softeismaschine.de", ssl: true, type: "satellite", description: "Softeis-Maschinen (DE)", redirectsTo: "eismaschine.de" },
      { domain: "softeis-maschine.de", ssl: false, type: "satellite", description: "Softeis Maschine", redirectsTo: "eismaschine.de" },
      { domain: "slusheis-maschine.de", ssl: false, type: "satellite", description: "Slush-Eis Maschinen", redirectsTo: "eismaschine.de" },
      { domain: "slushmaschine.com", ssl: false, type: "satellite", description: "Slushmaschinen", redirectsTo: "eismaschine.de" },
      { domain: "slush-maschine.de", ssl: false, type: "satellite", description: "Slush-Maschine", redirectsTo: "eismaschine.de" },
      { domain: "mobilfunkshop.de", ssl: false, type: "satellite", description: "Redirect-Domain", redirectsTo: "lustaufeis24.de" },
    ],
  },
  {
    title: "SEO & Tech",
    icon: "Search",
    domains: [
      { domain: "1a-seo-rank.de", ssl: false, type: "seo", description: "SEO-Ranking & Optimierung" },
      { domain: "trafficwerk.de", ssl: false, type: "seo", description: "SEO & Digitalagentur – Hauptprojekt" },
    ],
  },
  {
    title: "Personal & Brand",
    icon: "User",
    domains: [
      { domain: "kinne.de", ssl: false, type: "independent", description: "Unternehmens- & Personalmarke" },
      { domain: "thomaskinne.de", ssl: false, type: "independent", description: "Personal Brand Thomas Kinne" },
    ],
  },
];

export const totalDomains = 50;
export const sslEnabled = 16;
export const hostingProvider = "All-Inkl (Deutschland)";
