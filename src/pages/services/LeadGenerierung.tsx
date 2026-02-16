import ServicePageLayout from "@/components/ServicePageLayout";
import { Gauge, Zap, Image, Code2, Monitor, ShieldCheck } from "lucide-react";

const LeadGenerierung = () => (
  <ServicePageLayout
    title="Performance & Speed"
    subtitle="Core Web Vitals · Maximaler PageSpeed"
    description="Schnelle Websites gewinnen – bei Google und bei Ihren Besuchern. Wir optimieren Ladezeiten, Core Web Vitals und technische Performance für Top-Rankings und beste Nutzererfahrung."
    features={[
      { icon: <Gauge className="h-5 w-5" />, title: "Core Web Vitals", description: "Optimierung von LCP, INP und CLS für beste Google-Bewertungen und Nutzererfahrung." },
      { icon: <Zap className="h-5 w-5" />, title: "PageSpeed Optimierung", description: "Ladezeiten unter 2 Sekunden durch Caching, Code-Splitting und Server-Optimierung." },
      { icon: <Image className="h-5 w-5" />, title: "Bild-Optimierung", description: "Moderne Formate, Lazy Loading und responsive Bilder für minimale Ladezeiten." },
      { icon: <Code2 className="h-5 w-5" />, title: "Code-Optimierung", description: "Minifizierung, Tree-Shaking und effiziente Ressourcen-Bereitstellung." },
      { icon: <Monitor className="h-5 w-5" />, title: "Hosting & CDN", description: "Optimale Hosting-Konfiguration und Content Delivery Networks für globale Performance." },
      { icon: <ShieldCheck className="h-5 w-5" />, title: "Performance-Monitoring", description: "Kontinuierliche Überwachung mit automatisierten Alerts bei Performance-Einbrüchen." },
    ]}
    process={[
      { step: "Performance-Audit", desc: "Umfassende Analyse aller Ladezeit-Faktoren mit Lighthouse, WebPageTest und Real-User-Metriken." },
      { step: "Priorisierte Optimierung", desc: "Systematische Behebung aller Performance-Engpässe nach Impact-Priorisierung." },
      { step: "Monitoring & Iteration", desc: "Kontinuierliche Überwachung der Metriken und proaktive Optimierung bei Veränderungen." },
    ]}
  />
);

export default LeadGenerierung;
