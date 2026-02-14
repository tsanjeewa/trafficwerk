import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import StatsSection from "@/components/sections/StatsSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CaseStudyHighlight from "@/components/sections/CaseStudyHighlight";
import ResultsSection from "@/components/sections/ResultsSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TeamSection from "@/components/sections/TeamSection";
import TechStackSection from "@/components/sections/TechStackSection";
import BlogSection from "@/components/sections/BlogSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import IndustrySection from "@/components/sections/IndustrySection";
import AwardsSection from "@/components/sections/AwardsSection";
import NewsletterSection from "@/components/sections/NewsletterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <TrustSection />
        <StatsSection />
        <AboutSection />
        <ServicesSection />
        <WhyUsSection />
        <ProcessSection />
        <CaseStudyHighlight />
        <ResultsSection />
        <PortfolioSection />
        <TestimonialsSection />
        <TeamSection />
        <TechStackSection />
        <BlogSection />
        <FAQSection />
        <CTASection />
        <IndustrySection />
        <AwardsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
