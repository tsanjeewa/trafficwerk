import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import blogCoreWebVitals from "@/assets/blog-core-web-vitals.webp";
import blogKiSeo from "@/assets/blog-ki-seo.webp";
import blogLokaleSeo from "@/assets/blog-lokale-seo.webp";

const posts = [
  { title: "Core Web Vitals 2025/2026: Was Sie jetzt wissen müssen", date: "16. Feb. 2026", category: "Technische SEO", image: blogCoreWebVitals, slug: "/blog/core-web-vitals" },
  { title: "KI und SEO: Wie AI-Search die Branche verändert", date: "9. Feb. 2026", category: "AI & SEO", image: blogKiSeo, slug: "/blog/ki-und-seo" },
  { title: "Lokale SEO: 10 Tipps für mehr Sichtbarkeit in Ihrer Region", date: "2. Feb. 2026", category: "Lokale SEO", image: blogLokaleSeo, slug: "/blog/lokale-seo-tipps" },
];

const BlogSection = () => {
  return (
    <section className="section-alt py-10 md:py-14">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">Blog</span>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
            Aktuelles aus der SEO-Welt
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                to={post.slug}
                className="group block cursor-pointer overflow-hidden rounded-xl border border-border/50 bg-card transition-all hover:border-primary/30"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    decoding="async"
                    width={400}
                    height={192}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                    <span className="rounded bg-primary/10 px-2 py-0.5 text-primary">{post.category}</span>
                  </div>
                  <h3 className="mt-3 font-display text-base font-semibold leading-snug">{post.title}</h3>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                    Weiterlesen <ArrowRight className="ml-1 h-3 w-3" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
