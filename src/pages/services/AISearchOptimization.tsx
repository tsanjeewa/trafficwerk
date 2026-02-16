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
      { icon: <FileCheck className="h-5 w-5" />, title: "Strukturierte Daten", description: "Semantisches Markup, das KI-Systeme verstehen und als Quelle nutzen." },
      { icon: <Quote className="h-5 w-5" />, title: "Zitierbare Inhalte", description: "Content-Formate, die von generativen KI-Systemen bevorzugt zitiert werden." },
      { icon: <Rocket className="h-5 w-5" />, title: "Zukunftssichere Strategie", description: "Proaktive Anpassung an neue KI-Suchformate und sich verändernde Algorithmen." },
    ]}
    process={[
      { step: "AI-Visibility Audit", desc: "Analyse Ihrer Sichtbarkeit in Google AI Overviews, ChatGPT und Perplexity." },
      { step: "GEO-Strategie", desc: "Optimierung Ihrer Inhalte und Autorität für maximale KI-Zitierbarkeit." },
      { step: "Implementierung", desc: "Strukturierte Daten, Content-Formate und E-E-A-T-Signale optimieren." },
      { step: "Monitoring", desc: "Laufende Überwachung und proaktive Anpassung an neue Entwicklungen." },
    ]}
    strategyTitle="Die Zukunft der Suche"
    strategyDescription="KI verändert die Suche fundamental. Wer jetzt optimiert, sichert sich einen entscheidenden Vorsprung."
    strategyPoints={[
      { text: "Frühzeitige Positionierung in KI-Suchergebnissen" },
      { text: "Content-Formate, die KI-Systeme bevorzugen" },
      { text: "Starke E-E-A-T-Signale für Vertrauenswürdigkeit" },
      { text: "Technische Optimierung für KI-Crawling" },
    ]}
    growthTitle="KI-Sichtbarkeit"
    growthDescription="Werden Sie zur bevorzugten Quelle für KI-generierte Antworten."
    growthPoints={[
      { text: "Prominente Platzierung in AI Overviews" },
      { text: "Zitation in ChatGPT und Perplexity-Antworten" },
      { text: "Steigende Brand Awareness durch KI-Kanäle" },
      { text: "Zukunftssichere Content-Strategie" },
    ]}
  />
);

export default AISearchOptimization;
