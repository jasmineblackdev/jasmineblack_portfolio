import { motion } from "framer-motion";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies } from "@/data/caseStudies";

const CaseStudies = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 md:py-32">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">Case Studies</h1>
        <p className="text-lg text-muted-foreground font-body mt-3 max-w-xl">
          Deep dives into product thinking, UX strategy, and design decisions across fitness, nutrition, finance, and more.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {caseStudies.map((cs, i) => (
          <CaseStudyCard key={cs.slug} {...cs} index={i} />
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
