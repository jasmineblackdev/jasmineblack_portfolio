import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Github } from "lucide-react";
import CaseStudyCard from "@/components/CaseStudyCard";
import heroImage from "@/assets/hero-mockups.jpg";
import { caseStudies } from "@/data/caseStudies";

const skills = [
  "UX Research",
  "Product Thinking",
  "User Flows",
  "Wireframing",
  "Prototyping",
  "Design Systems",
  "Mobile‑First UX",
  "Developer Handoff",
];

const tools = ["Figma", "Webflow", "GitHub", "Notion", "HTML/CSS"];

const credibility = [
  { label: "GitHub-backed", desc: "All projects include active repositories" },
  { label: "Built to scale", desc: "Designed for real development" },
  { label: "Product-focused", desc: "UX decisions grounded in outcomes" },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-body text-accent font-medium tracking-wide uppercase mb-4">
              UX & Product Designer
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground text-balance">
              Building real, scalable digital products
            </h1>
            <p className="mt-6 text-lg text-muted-foreground font-body leading-relaxed max-w-lg">
              I design mobile-first experiences across fitness, wellness, and finance — grounded in UX strategy and built for development.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-display text-sm font-medium hover:opacity-90 transition-opacity"
              >
                View Case Studies <ArrowRight size={16} />
              </Link>
              <a
                href="https://github.com/jasmineblackdev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg text-foreground font-display text-sm font-medium hover:bg-secondary transition-colors"
              >
                <Github size={16} /> GitHub
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <img
              src={heroImage}
              alt="Portfolio mockups of FormIQ, MacroCore, and BalanceIQ apps"
              className="w-full rounded-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 bg-secondary/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-3xl font-bold text-foreground">Selected Work</h2>
            <p className="text-muted-foreground font-body mt-2">
              Case studies from fitness, nutrition, finance, and more.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((cs, i) => (
              <CaseStudyCard key={cs.slug} {...cs} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* How I Think */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-bold text-foreground mb-12"
          >
            How I Think
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "UX Strategy", desc: "Research-driven decisions that solve real user problems, not just design trends." },
              { title: "Product Thinking", desc: "Every screen answers: what problem does this solve, and how do we measure success?" },
              { title: "Dev-Ready Design", desc: "Components, specs, and flows designed for seamless developer handoff." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-lg border border-border bg-card"
              >
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="py-24 bg-secondary/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-bold text-foreground mb-10"
          >
            Skills & Tools
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-display text-sm font-semibold text-accent uppercase tracking-wide mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="px-3 py-1.5 text-sm font-body bg-card border border-border rounded-full text-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display text-sm font-semibold text-accent uppercase tracking-wide mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span key={t} className="px-3 py-1.5 text-sm font-body bg-card border border-border rounded-full text-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {credibility.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <h3 className="font-display text-xl font-bold text-foreground">{item.label}</h3>
                <p className="text-sm text-muted-foreground font-body mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
