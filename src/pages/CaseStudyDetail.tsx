import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { caseStudyDetails, slugs } from "@/data/caseStudies";

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? caseStudyDetails[slug] : null;

  if (!study) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-32 text-center">
        <h1 className="font-display text-2xl font-bold text-foreground">Case study not found</h1>
        <Link to="/case-studies" className="text-accent mt-4 inline-block font-body">
          ← Back to case studies
        </Link>
      </div>
    );
  }

  const currentIdx = slugs.indexOf(slug!);
  const nextSlug = slugs[(currentIdx + 1) % slugs.length];
  const nextStudy = caseStudyDetails[nextSlug];

  return (
    <div>
      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-accent transition-colors font-body mb-8"
          >
            <ArrowLeft size={14} /> All Case Studies
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">{study.title}</h1>
            <p className="text-xl text-muted-foreground font-body mt-3">{study.tagline}</p>
            <div className="flex flex-wrap gap-4 mt-6 text-sm font-body">
              <span className="px-3 py-1.5 rounded-full bg-secondary border border-border text-foreground">
                <strong>Role:</strong> {study.role}
              </span>
              <span className="px-3 py-1.5 rounded-full bg-secondary border border-border text-foreground">
                <strong>Platform:</strong> {study.platform}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-5xl mx-auto px-6"
      >
        <img src={study.image} alt={study.title} className="w-full rounded-xl bg-secondary" loading="lazy" />
      </motion.div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-6 py-20 space-y-16">

        {/* Overview */}
        <Section title="Overview" content={study.overview} />

        {/* Problem */}
        <Section title="The Problem" content={study.problem} />

        {/* Target Users */}
        <Section title="Target Users" content={study.users} />

        {/* My Role */}
        <Section title="My Role" content={study.myRole} />

        {/* Solution */}
        <Section title="Solution" content={study.solution} />

        {/* Design Approach */}
        <BulletSection
          title="Design Approach"
          description="I moved directly into high-fidelity exploration, testing layout decisions at real screen density from the start."
          items={study.designApproach}
        />

        {/* Screenshots + Screen-level Rationale */}
        {study.screenshots && study.screenshots.length > 0 && (
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">Final UI Screens</h2>
            <p className="text-muted-foreground font-body text-sm mb-6 leading-relaxed">
              High-fidelity screens from the final product design.
            </p>
            <div className={`grid gap-4 mb-10 ${(study.screenshotColumns ?? 2) === 3 ? "grid-cols-3" : "grid-cols-2"}`}>
              {study.screenshots.map((s) => (
                <div key={s.caption} className="flex flex-col gap-2">
                  <img
                    src={s.src}
                    alt={s.caption}
                    className="w-full rounded-2xl border border-border shadow-md"
                    loading="lazy"
                  />
                  <p className="text-xs text-center text-muted-foreground font-body">{s.caption}</p>
                </div>
              ))}
            </div>
            {study.screenshotRationale && (
              <BulletSection
                title="Design Rationale"
                description="Key hierarchy, spacing, and usability decisions visible in the screens above — and why they were made."
                items={study.screenshotRationale}
              />
            )}
          </div>
        )}

        {/* Design Rationale (non-screenshot fallback) */}
        {!study.screenshots && (
          <BulletSection
            title="Design Rationale"
            description="Key hierarchy, spacing, and usability decisions — and why they were made."
            items={study.designRationale}
          />
        )}

        {/* Key Decisions & Tradeoffs */}
        <BulletSection
          title="Key Decisions & Tradeoffs"
          items={study.decisions}
        />

        {/* Outcome & Impact */}
        <Section title="Outcome & Impact" content={study.outcome} />

        {/* Next Steps */}
        <BulletSection
          title="Next Steps & Future Enhancements"
          description="Planned technical expansions that build on this design foundation."
          items={study.nextSteps}
        />

        {/* Next Case Study */}
        <div className="pt-8 border-t border-border">
          <Link to={`/case-studies/${nextSlug}`} className="group flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground font-body">Next Case Study</p>
              <p className="font-display text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                {nextStudy.title}
              </p>
            </div>
            <ArrowRight size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, content }: { title: string; content: string }) => (
  <div>
    <h2 className="font-display text-2xl font-bold text-foreground mb-3">{title}</h2>
    <p className="text-muted-foreground font-body leading-relaxed">{content}</p>
  </div>
);

const BulletSection = ({
  title,
  description,
  items,
}: {
  title: string;
  description?: string;
  items: string[];
}) => (
  <div>
    <h2 className="font-display text-2xl font-bold text-foreground mb-2">{title}</h2>
    {description && (
      <p className="text-muted-foreground font-body text-sm mb-4 leading-relaxed">{description}</p>
    )}
    <ul className="space-y-3 mt-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-muted-foreground font-body">
          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-[0.55rem] shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default CaseStudyDetail;
