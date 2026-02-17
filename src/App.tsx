import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CookieBanner from "@/components/CookieBanner";
import FloatingCallButton from "@/components/FloatingCallButton";
import Index from "./pages/Index";
import Kontakt from "./pages/Kontakt";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import CookieRichtlinie from "./pages/CookieRichtlinie";
import TechnischeSEO from "./pages/services/TechnischeSEO";
import OnPageOptimierung from "./pages/services/OnPageOptimierung";
import OffPageLinkbuilding from "./pages/services/OffPageLinkbuilding";
import ContentMarketing from "./pages/services/ContentMarketing";
import LokaleSEO from "./pages/services/LokaleSEO";
import InternationaleSEO from "./pages/services/InternationaleSEO";
import GoogleAds from "./pages/services/GoogleAds";
import LeadGenerierung from "./pages/services/LeadGenerierung";
import ECommerceSEO from "./pages/services/ECommerceSEO";
import AISearchOptimization from "./pages/services/AISearchOptimization";
import CoreWebVitals from "./pages/blog/CoreWebVitals";
import KIundSEO from "./pages/blog/KIundSEO";
import LokaleSEOTipps from "./pages/blog/LokaleSEOTipps";
import LandingPage from "./pages/LandingPage";
import DomainPortfolio from "./pages/DomainPortfolio";
import Wissen from "./pages/Wissen";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/cookie-richtlinie" element={<CookieRichtlinie />} />
          <Route path="/services/technische-seo" element={<TechnischeSEO />} />
          <Route path="/services/on-page-optimierung" element={<OnPageOptimierung />} />
          <Route path="/services/off-page-linkbuilding" element={<OffPageLinkbuilding />} />
          <Route path="/services/content-marketing" element={<ContentMarketing />} />
          <Route path="/services/lokale-seo" element={<LokaleSEO />} />
          <Route path="/services/internationale-seo" element={<InternationaleSEO />} />
          <Route path="/services/google-ads" element={<GoogleAds />} />
          <Route path="/services/lead-generierung" element={<LeadGenerierung />} />
          <Route path="/services/e-commerce-seo" element={<ECommerceSEO />} />
          <Route path="/services/ai-search-optimization" element={<AISearchOptimization />} />
          <Route path="/blog/core-web-vitals" element={<CoreWebVitals />} />
          <Route path="/blog/ki-und-seo" element={<KIundSEO />} />
          <Route path="/blog/lokale-seo-tipps" element={<LokaleSEOTipps />} />
          <Route path="/domain-portfolio" element={<DomainPortfolio />} />
          <Route path="/wissen" element={<Wissen />} />
          <Route path="/faq" element={<FAQ />} />
          {/* 35 Keyword Landing Pages */}
          <Route path="/lp/:slug" element={<LandingPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieBanner />
        <FloatingCallButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
