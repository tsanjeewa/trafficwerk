import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Search, CheckCircle2, Globe, Link2, FileSearch } from "lucide-react";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const WEB3FORMS_KEY = "972a2eeb-c625-4b2a-9991-b60bf2d7912d";

type Phase = "idle" | "analyzing" | "done" | "error";

const steps = [
  { label: "Analysiere On-Page Faktoren...", icon: FileSearch, duration: 1500 },
  { label: "Prüfe Backlinks...", icon: Link2, duration: 1500 },
];

const SEOQuickCheckSection = () => {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [phase, setPhase] = useState<Phase>("idle");
  const [stepIndex, setStepIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");

  const isValidUrl = (v: string) =>
    /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}(\/.*)?$/i.test(v.trim());

  const isValidEmail = (v: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!url.trim() || !isValidUrl(url)) {
      setErrorMsg("Bitte geben Sie eine gültige Website-URL ein.");
      return;
    }
    if (!email.trim() || !isValidEmail(email)) {
      setErrorMsg("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      return;
    }

    setPhase("analyzing");
    setStepIndex(0);
    setProgress(0);

    // Step 1
    const t1 = 1500;
    const i1 = setInterval(() => setProgress((p) => Math.min(p + 2, 48)), t1 / 25);
    await new Promise((r) => setTimeout(r, t1));
    clearInterval(i1);

    // Step 2
    setStepIndex(1);
    const i2 = setInterval(() => setProgress((p) => Math.min(p + 2, 95)), t1 / 25);
    await new Promise((r) => setTimeout(r, t1));
    clearInterval(i2);
    setProgress(100);

    // Send via Web3Forms
    try {
      await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: "Neuer SEO-Quick-Check Anfrage",
          from_name: "SEO-Quick-Check TrafficWerk",
          replyto: email.trim(),
          to: "info@trafficwerk.de",
          website_url: url.trim(),
          "Kontakt-E-Mail": email.trim(),
          message: `Neue SEO-Quick-Check Anfrage:\n\nWebsite: ${url.trim()}\nKontakt-E-Mail: ${email.trim()}`,
          autoresponse: true,
          autoresponse_to: email.trim(),
          autoresponse_subject: "Ihre SEO-Quick-Check Anfrage bei TrafficWerk",
          autoresponse_message: "Vielen Dank für Ihre SEO-Quick-Check Anfrage! Wir führen gerade die Analyse Ihrer Website durch. Sie erhalten in Kürze eine vorläufige Auswertung per E-Mail und den vollständigen PDF-Bericht innerhalb von 24 Stunden von unserem Team.\n\nMit freundlichen Grüßen,\nIhr TrafficWerk Team",
        }),
      });
      setPhase("done");
    } catch {
      setPhase("error");
      setErrorMsg("Netzwerkfehler. Bitte versuchen Sie es erneut.");
    }
  };

  const reset = () => {
    setPhase("idle");
    setUrl("");
    setEmail("");
    setProgress(0);
    setStepIndex(0);
    setErrorMsg("");
  };

  return (
    <section className="bg-white py-14">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600">
              <Globe className="h-3.5 w-3.5" /> Kostenlos
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold text-slate-900 md:text-4xl">
              SEO-Quick-Check
            </h2>
            <p className="mt-3 text-sm text-slate-500">
              Geben Sie Ihre Website-URL ein und erhalten Sie eine erste Einschätzung Ihrer SEO-Performance – völlig kostenlos und unverbindlich.
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {phase === "idle" && (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-10"
              >
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Input
                    type="text"
                    placeholder="https://ihre-website.de"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="rounded-full border-slate-200 text-slate-900 placeholder:text-slate-400"
                  />
                  <Input
                    type="email"
                    placeholder="Ihre E-Mail-Adresse"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-full border-slate-200 text-slate-900 placeholder:text-slate-400"
                  />
                </div>
                <Button type="submit" className="mt-3 w-full gap-2 rounded-full bg-blue-600 hover:bg-blue-700 sm:w-auto">
                  <Search className="h-4 w-4" /> Kostenlos prüfen
                </Button>
                {errorMsg && (
                  <p className="mt-3 text-sm font-medium text-red-600">{errorMsg}</p>
                )}
              </motion.form>
            )}

            {phase === "analyzing" && (
              <motion.div
                key="loading"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-10 space-y-5"
              >
                <div className="flex items-center justify-center gap-2 text-sm font-medium text-slate-700">
                  {(() => {
                    const Icon = steps[stepIndex].icon;
                    return <Icon className="h-4 w-4 animate-pulse text-blue-600" />;
                  })()}
                  {steps[stepIndex].label}
                </div>
                <Progress value={progress} className="h-2.5 rounded-full bg-slate-100 [&>div]:bg-blue-600" />
                <p className="text-xs text-slate-400">Analyse läuft – bitte warten...</p>
              </motion.div>
            )}

            {phase === "done" && (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-blue-200 bg-blue-50 p-8"
              >
                <CheckCircle2 className="h-10 w-10 text-blue-600" />
                <p className="text-lg font-semibold text-blue-600">Analyse abgeschlossen!</p>
                <p className="text-sm text-slate-600">
                  Vielen Dank! Wir führen gerade die Analyse durch. Sie erhalten in Kürze eine vorläufige Auswertung per E-Mail und den vollständigen PDF-Bericht innerhalb von 24 Stunden von unserem Team.
                </p>
                <Button variant="outline" className="mt-4 rounded-full" onClick={reset}>
                  Neue Analyse starten
                </Button>
              </motion.div>
            )}

            {phase === "error" && (
              <motion.div
                key="error"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-10 text-center"
              >
                <p className="text-sm font-medium text-red-600">{errorMsg}</p>
                <Button variant="outline" className="mt-4 rounded-full" onClick={reset}>
                  Erneut versuchen
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SEOQuickCheckSection;
