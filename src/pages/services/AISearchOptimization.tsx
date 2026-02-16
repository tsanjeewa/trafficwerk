import ServicePageLayout from "@/components/ServicePageLayout";
import { Bot, Brain, Sparkles, FileCheck, Quote, Rocket } from "lucide-react";

const AISearchOptimization = () => (
  <ServicePageLayout
    title="KI-Optimierung (GEO)"
    subtitle="Generative Engine Optimization · AI-Search Visibility"
    description="Machen Sie Ihre Marke sichtbar in der neuen Ära der KI-Suche. Google AI Overviews, ChatGPT, Perplexity – wir optimieren Ihre Inhalte für generative Suchsysteme."
    features={[
      { icon: <Sparkles className="h-5 w-5" />, title: "Google AI Overviews", description: "Optimierung für Googles KI-generierte Antworten und prominente Platzierung als Quelle." },
      { icon: <Bot className="h-5 w-5" />, title: "ChatGPT & Perplexity", description: "Sichtbarkeit in KI-Chatbots und Answer Engines durch gezielte Content-Optimierung." },
      { icon: <Brain className="h-5 w-5" />, title: "E-E-A-T Signale", description: "Stärkung von Erfahrung, Expertise, Autorität und Vertrauen für KI-Quellenauswahl." },
      { icon: <FileCheck className="h-5 w-5" />, title: "Strukturierte Daten", description: "Semantisches Markup, das KI-Systeme verstehen und als vertrauenswürdige Quelle nutzen." },
      { icon: <Quote className="h-5 w-5" />, title: "Zitierbare Inhalte", description: "Content-Formate, die von generativen KI-Systemen bevorzugt zitiert werden." },
      { icon: <Rocket className="h-5 w-5" />, title: "Zukunftssichere Strategie", description: "Proaktive Anpassung an neue KI-Suchformate und sich verändernde Algorithmen." },
    ]}
    process={[
      { step: "AI-Visibility Audit", desc: "Analyse Ihrer Sichtbarkeit in Google AI Overviews, ChatGPT, Perplexity und weiteren KI-Systemen." },
      { step: "GEO-Strategie & Umsetzung", desc: "Optimierung Ihrer Inhalte, Strukturen und Autorität für maximale KI-Zitierbarkeit." },
      { step: "Monitoring & Adaption", desc: "Laufende Überwachung der KI-Sichtbarkeit und proaktive Anpassung an neue Entwicklungen." },
    ]}
  />
);

export default AISearchOptimization;
