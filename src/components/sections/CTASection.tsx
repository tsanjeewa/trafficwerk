import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-alt py-14">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-card p-12 text-center md:p-16">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Bereit für mehr <span className="text-gradient">Sichtbarkeit</span>?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Lassen Sie uns gemeinsam Ihre SEO-Strategie entwickeln. Kostenlose Erstberatung – unverbindlich und ohne Verpflichtung.
          </p>
          <Button size="lg" className="mt-8 rounded-full text-base" asChild>
            <Link to="/kontakt">
              Jetzt Beratung anfragen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
