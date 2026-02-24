import { motion } from "framer-motion";
import { Download } from "lucide-react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 md:py-32">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">About</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-12 space-y-8"
      >
        <div>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Bio</h2>
          <p className="text-muted-foreground font-body leading-relaxed">
            I'm Jasmine Black, a UX and product designer specializing in mobile-first applications across fitness, wellness, and finance. I'm known for translating complex data into intuitive experiences and designing products meant for real-world development — not just portfolios.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Design Philosophy</h2>
          <p className="text-muted-foreground font-body leading-relaxed">
            I design with the assumption that what I create will be built, used, and iterated on. My goal is to reduce friction for users and ambiguity for developers. Every decision I make is grounded in research, constrained by real-world limitations, and aimed at measurable outcomes.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">What I Bring</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Systems thinking & scalable design",
              "Cross-functional collaboration",
              "Ownership & shipping mindset",
              "Accessibility-first approach",
              "Speed without sacrificing quality",
              "Research-driven iteration",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-muted-foreground font-body text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4">
          <a
            href="/Jasmine_Black_UX_Product_Designer_Resume.docx"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-display text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Download size={16} /> Download Resume
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
