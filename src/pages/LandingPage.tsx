import { useParams, Navigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { supabase } from "@/integrations/supabase/client";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

/** Renders markdown-like content with proper H2/H3/paragraph styling */
const ContentRenderer = ({ content }: { content: string }) => {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      elements.push(<div key={key++} className="h-4" />);
    } else if (trimmed.startsWith("### ")) {
      elements.push(
        <h3 key={key++} className="mt-8 mb-3 text-lg font-bold text-foreground md:text-xl">
          {trimmed.slice(4)}
        </h3>
      );
    } else if (trimmed.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="mt-10 mb-4 text-xl font-bold text-foreground md:text-2xl">
          {trimmed.slice(3)}
        </h2>
      );
    } else {
      elements.push(
        <p key={key++} className="mb-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          {trimmed}
        </p>
      );
    }
  }

  return <div className="mx-auto max-w-3xl">{elements}</div>;
};

const LandingPageSkeleton = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <section className="pb-16 pt-32 md:pb-20 md:pt-40">
        <div className="container mx-auto px-6 text-center">
          <div className="mx-auto max-w-3xl space-y-4">
            <Skeleton className="mx-auto h-12 w-3/4" />
            <Skeleton className="mx-auto h-6 w-2/3" />
            <Skeleton className="mx-auto h-6 w-1/2" />
          </div>
        </div>
      </section>
      <section className="border-t border-border py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl space-y-4">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-5 w-full" />
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

const LandingPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: page, isLoading, error } = useQuery({
    queryKey: ["landing_post", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("landing_posts")
        .select("*")
        .eq("slug", slug!)
        .maybeSingle();
      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });

  useEffect(() => {
    if (page) {
      document.title = page.meta_title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", page.meta_description);
      } else {
        const meta = document.createElement("meta");
        meta.name = "description";
        meta.content = page.meta_description;
        document.head.appendChild(meta);
      }
    }
    return () => {
      document.title = "TrafficWerk | SEO & Digitalagentur";
    };
  }, [page]);

  if (isLoading) return <LandingPageSkeleton />;
  if (error || !page) return <Navigate to="/404" replace />;

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

        {/* Content (500-800 words rendered with H2/H3 styling) */}
        {page.content && (
          <section className="border-t border-border py-16 md:py-20">
            <div className="container mx-auto px-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={0}
              >
                <ContentRenderer content={page.content} />
              </motion.div>
            </div>
          </section>
        )}

        {/* Benefits */}
        {page.benefits && page.benefits.length > 0 && (
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
                  {page.benefits.map((b: string, i: number) => (
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
        )}

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
