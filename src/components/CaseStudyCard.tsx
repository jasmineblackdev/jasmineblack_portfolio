import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface CaseStudyCardProps {
  title: string;
  subtitle: string;
  role: string;
  platform: string;
  image: string;
  slug: string;
  index: number;
}

const CaseStudyCard = ({ title, subtitle, role, platform, image, slug, index }: CaseStudyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <Link to={`/case-studies/${slug}`} className="group block">
        <div className="overflow-hidden rounded-lg bg-secondary mb-4">
          <img
            src={image}
            alt={title}
            className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1 font-body">{subtitle}</p>
          </div>
          <div className="text-right shrink-0">
            <p className="text-xs text-muted-foreground font-body">{role}</p>
            <p className="text-xs text-muted-foreground font-body">{platform}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CaseStudyCard;
