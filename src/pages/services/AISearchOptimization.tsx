import ServicePageLayout from "@/components/ServicePageLayout";
import { Bot, Brain, Sparkles, FileCheck, Quote, Rocket } from "lucide-react";

const AISearchOptimization = () => (
  <ServicePageLayout
    title="AI-Search Optimization (GEO)"
    subtitle="Zukunft der Suche"
    description="Optimieren Sie Ihre Inhalte für KI-basierte Suchsysteme. Google AI Overviews, ChatGPT, Perplexity und weitere generative Suchmaschinen – wir machen Ihre Marke zukunftssicher."
    features={[
      { icon: <Sparkles className="h-6 w-6" />, title: "Google AI Overviews", description: "Optimierung für Googles KI-generierte Antworten und prominente Platzierung in AI Overviews." },
      { icon: <Bot className="h-6 w-6" />, title: "ChatGPT & Perplexity", description: "Sichtbarkeit in KI-Chatbots und Answer Engines durch gezielte Content-Optimierung." },
      { icon: <Brain className="h-6 w-6" />, title: "E-E-A-T Optimierung", description: "Stärkung von Erfahrung, Expertise, Autorität und Vertrauen für KI-Quellenauswahl." },
      { icon: <FileCheck className="h-6 w-6" />, title: "Strukturierte Daten für KI", description: "Semantisches Markup, das KI-Systeme verstehen und als vertrauenswürdige Quelle erkennen." },
      { icon: <Quote className="h-6 w-6" />, title: "Zitierbare Inhalte", description: "Content-Formate, die von KI-Systemen bevorzugt als Quelle zitiert werden." },
      { icon: <Rocket className="h-6 w-6" />, title: "Zukunftssichere Strategie", description: "Proaktive Anpassung an neue KI-Suchformate und sich verändernde Suchalgorithmen." },
    ]}
    process={[
      { step: "AI-Visibility Audit", desc: "Analyse Ihrer aktuellen Sichtbarkeit in Google AI Overviews, ChatGPT, Perplexity und weiteren KI-Systemen." },
      { step: "GEO-Strategie & Optimierung", desc: "Entwicklung einer GEO-Strategie und Optimierung Ihrer Inhalte für maximale KI-Zitierbarkeit." },
      { step: "Monitoring & Zukunftssicherung", desc: "Laufende Überwachung der KI-Sichtbarkeit und proaktive Anpassung an neue Entwicklungen." },
    ]}
  />
);

export default AISearchOptimization;
