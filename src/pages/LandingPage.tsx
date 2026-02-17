import { useParams, Navigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getLandingPageBySlug } from "@/data/landingPages";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const LandingPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? getLandingPageBySlug(slug) : undefined;

  useEffect(() => {
    if (page) {
      document.title = page.metaTitle;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", page.metaDescription);
      } else {
        const meta = document.createElement("meta");
        meta.name = "description";
        meta.content = page.metaDescription;
        document.head.appendChild(meta);
      }
    }
    return () => {
      document.title = "TrafficWerk | SEO & Digitalagentur";
    };
  }, [page]);

  if (!page) return <Navigate to="/404" replace />;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pb-16 pt-32 md:pb-20 md:pt-40">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              className="mx-auto max-w-3xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-foreground md:text-5xl lg:text-6xl">
                {page.h1}
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                {page.intro}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="border-t border-border py-16 md:py-20">
          <div className="container mx-auto px-6">
            <motion.div
              className="mx-auto max-w-3xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <h2 className="text-center text-2xl font-bold text-foreground md:text-3xl">
                Ihre Vorteile
              </h2>
              <ul className="mt-10 space-y-5">
                {page.benefits.map((b, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={i + 1}
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-base font-medium text-foreground/80">
                      {b}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-16 md:py-20">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="mx-auto max-w-2xl"
            >
              <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
                Jetzt SEO-Quick-Check starten
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-primary-foreground/80">
                Erfahren Sie in wenigen Sekunden, wie Ihre Website performt – kostenlos und unverbindlich.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button
                  size="lg"
                  className="rounded-full bg-primary-foreground px-10 text-base font-semibold text-primary shadow-lg hover:bg-primary-foreground/90"
                  asChild
                >
                  <Link to="/#seo-quick-check" aria-label="Zum kostenlosen SEO-Quick-Check">
                    Kostenloser SEO-Check
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-primary-foreground/30 px-10 text-base font-semibold text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <Link to="/kontakt" aria-label="Beratung anfragen">
                    Beratung anfragen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
