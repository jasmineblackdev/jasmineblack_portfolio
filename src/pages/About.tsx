import { motion } from "framer-motion";
import { Download } from "lucide-react";

const experience = [
  {
    role: "UI/UX Designer",
    company: "Hype",
    period: "2022 – Present",
    desc: "Leading product and visual design for client projects across fitness, wellness, and finance. Responsible for end-to-end design from discovery to developer handoff.",
  },
  {
    role: "Lead UX/UI Designer",
    company: "Response Mine Interactive",
    period: "2021 – 2022",
    desc: "Designed conversion-focused digital experiences for direct-response clients. Owned the UX audit, wireframe, and hi-fi delivery process across multiple simultaneous accounts.",
  },
  {
    role: "Senior Digital Marketing Designer",
    company: "Viktoria Deann",
    period: "2020 – 2021",
    desc: "Produced brand and digital assets for e-commerce clients. Designed landing pages, ad creative, and email campaigns optimized for conversion.",
  },
  {
    role: "Graphic / Web Designer",
    company: "Sentinel Home Health",
    period: "2019 – 2020",
    desc: "Designed internal and external-facing materials. Built and maintained the company website, created marketing collateral and patient-facing print and digital assets.",
  },
];

const education = [
  {
    degree: "B.S. Software Engineering",
    school: "Western Governors University",
    period: "In progress — expected 2027",
  },
  {
    degree: "Google UX Design Certificate",
    school: "Google / Coursera",
    period: "2022",
  },
  {
    degree: "B.S. Graphic Design",
    school: "Art Institute of Pittsburgh",
    period: "2019",
  },
];

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
        className="mt-12 space-y-16"
      >
        {/* Bio */}
        <div>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Bio</h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-4">
            I'm Jasmine Black — a UX and product designer based in Charlotte, NC, specializing in mobile-first applications across fitness, wellness, and finance. I design products that are built to ship, not just to present.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed">
            My background spans graphic design, digital marketing, and product design — which means I think about conversion, not just craft. Every interface decision I make is grounded in user context, constrained by real-world limitations, and aimed at an outcome I can articulate.
          </p>
        </div>

        {/* What I Bring */}
        <div>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">What I Bring</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Systems thinking — component architecture, not just screens",
              "Dev-ready handoff — specs, states, and edge cases documented",
              "Conversion background — design decisions tied to measurable goals",
              "Accessibility-first approach — WCAG compliance by default",
              "Cross-functional fluency — comfortable with product, engineering, and marketing",
              "Speed without sacrificing craft — shipped projects on 2–4 week cycles",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-muted-foreground font-body text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">Experience</h2>
          <div className="space-y-8">
            {experience.map((job) => (
              <div key={job.company} className="grid md:grid-cols-[1fr_2fr] gap-2 md:gap-8">
                <div>
                  <p className="font-display text-sm font-semibold text-foreground">{job.role}</p>
                  <p className="text-sm text-accent font-body">{job.company}</p>
                  <p className="text-xs text-muted-foreground font-body mt-0.5">{job.period}</p>
                </div>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{job.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">Education</h2>
          <div className="space-y-5">
            {education.map((ed) => (
              <div key={ed.degree} className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-display text-sm font-semibold text-foreground">{ed.degree}</p>
                  <p className="text-sm text-muted-foreground font-body">{ed.school}</p>
                </div>
                <p className="text-xs text-muted-foreground font-body shrink-0 text-right">{ed.period}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Resume */}
        <div className="pt-2">
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
