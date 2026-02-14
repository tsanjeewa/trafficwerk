import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("tw-cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const handleConsent = (accepted: boolean) => {
    localStorage.setItem("tw-cookie-consent", accepted ? "accepted" : "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] border-t border-border bg-card/95 p-4 backdrop-blur-xl md:p-6">
      <div className="container mx-auto flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex-1 pr-8">
          <p className="text-sm font-medium">Wir nutzen Cookies 🍪</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. Weitere Informationen finden Sie in unserer{" "}
            <a href="/cookie-richtlinie" className="text-primary underline">Cookie-Richtlinie</a>.
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <Button variant="outline" size="sm" onClick={() => handleConsent(false)}>Ablehnen</Button>
          <Button size="sm" onClick={() => handleConsent(true)}>Akzeptieren</Button>
        </div>
        <button onClick={() => handleConsent(false)} className="absolute right-4 top-4 text-muted-foreground hover:text-foreground md:hidden">
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
