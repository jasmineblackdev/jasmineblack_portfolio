import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import megaflexImg from "@/assets/megaflex-mockup.jpg";
import metabolicImg from "@/assets/metabolic-mockup.jpg";
import megaflexBeforeHero from "@/assets/megaflex-before-hero.png";
import megaflexBeforeContent from "@/assets/megaflex-before-content.png";
import megaflexBeforeFooter from "@/assets/megaflex-before-footer.png";
import megaflexAfterHero from "@/assets/megaflex-after-hero.png";
import megaflexAfterLocations from "@/assets/megaflex-after-locations.png";
import megaflexAfterFeatures from "@/assets/megaflex-after-features.png";
import metabolicBeforeHero from "@/assets/metabolic-before-hero.png";
import metabolicBeforeServices from "@/assets/metabolic-before-services.png";
import metabolicBeforeAbout from "@/assets/metabolic-before-about.png";
import metabolicAfterHero from "@/assets/metabolic-after-hero.png";
import metabolicAfterServices from "@/assets/metabolic-after-services.png";
import metabolicAfterWeightloss from "@/assets/metabolic-after-weightloss.png";

interface OtherProject {
  title: string;
  subtitle: string;
  role: string;
  type: string;
  overview: string;
  image: string;
  before?: { src: string; caption: string }[];
  after?: { src: string; caption: string }[];
  designRationale?: string[];
  points: string[];
  liveUrl?: string;
  liveLabel?: string;
}

const projects: OtherProject[] = [
  {
    title: "MegaFlex Gym",
    subtitle: "Website Redesign",
    role: "UX/UI Designer",
    type: "Client Project — Web",
    liveUrl: "https://megaflex-gym.vercel.app",
    overview:
      "MegaFlex Gym is a Charlotte, NC-based independent gym with 400+ members and two locations. The existing site lacked a clear visual identity, buried key information in long paragraphs, and gave first-time visitors no obvious path to becoming a member. The redesign focused on projecting the gym's hardcore identity, structuring information for intent-driven visitors, and surfacing a clear conversion path.",
    image: megaflexImg,
    before: [
      { src: megaflexBeforeHero, caption: "Before — Homepage Hero" },
      { src: megaflexBeforeContent, caption: "Before — Content Section" },
      { src: megaflexBeforeFooter, caption: "Before — CTA & Footer" },
    ],
    after: [
      { src: megaflexAfterHero, caption: "After — Homepage Hero" },
      { src: megaflexAfterLocations, caption: "After — Our Locations" },
      { src: megaflexAfterFeatures, caption: "After — Why Lifters Choose MegaFlex" },
    ],
    designRationale: [
      "The hero headline was rewritten from 'A Home for All Fitness Enthusiasts' (generic) to 'Charlotte's Hardcore Gym / With a Community Feel' — immediately communicating the brand's specific identity and competitive positioning in one line.",
      "The wordmark was simplified from a complex illustrated logo to a clean bold 'MEGAFLEX' with a single blue accent word — a modernization that reads clearly at all sizes and projects brand confidence.",
      "Navigation was restructured from Home/About/Join/Contact to Locations/Memberships/Training/Equipment — reflecting the actual decision-making journey of a gym-shopper rather than generic site structure.",
      "A single high-contrast 'JOIN NOW' CTA was pinned to the top navigation bar, remaining visible on scroll — replacing two competing equal-weight buttons in the original hero that split conversion intent.",
      "Location information was moved from a call-to-action text block to a structured card format with photo, name, address, phone, and 'Get Directions' — designed specifically for the discovery intent of a first-time visitor.",
      "Differentiators buried in paragraph copy ('you'll never wait in line') were surfaced as a scannable 5-column icon feature grid (Unique Equipment, 24/7 Access, No Waits, Real Community, Meal Prep) — readable in under 5 seconds.",
      "A consistent dark/black background with a single electric blue accent replaces the original's inconsistent section-color alternation — establishing a visual system that reads as premium and intentional.",
    ],
    points: [
      "Conducted UX audit identifying navigation structure, hierarchy, and conversion path failures",
      "Simplified content from dense paragraphs to scannable feature cards and structured location blocks",
      "Rebuilt brand identity with a modernized wordmark and consistent dark + blue color system",
      "Designed mobile-responsive layouts with a sticky conversion CTA across all breakpoints",
    ],
  },
  {
    title: "Metabolic Reset Clinic",
    subtitle: "Website Redesign",
    role: "UX/UI Designer",
    type: "Client Project — Web",
    liveUrl: "https://metabolic-reset-clinic.vercel.app",
    overview:
      "Metabolic Reset Clinic is a faith-based medical wellness practice in Matthews, NC offering physician-supervised weight loss, chronic disease management, and metabolic health programs. The existing site triggered an email capture popup on page load, lacked visible credibility signals, and buried the highest-converting service (weight loss) inside a generic services dropdown. The redesign rebuilt first impressions around trust, surfaced the clinic's strongest differentiators above the fold, and created a clear path from landing to appointment.",
    image: metabolicImg,
    before: [
      { src: metabolicBeforeHero, caption: "Before — Homepage (with popup)" },
      { src: metabolicBeforeServices, caption: "Before — Services Page" },
      { src: metabolicBeforeAbout, caption: "Before — About Section" },
    ],
    after: [
      { src: metabolicAfterHero, caption: "After — Homepage Hero" },
      { src: metabolicAfterWeightloss, caption: "After — Weight Loss Landing" },
      { src: metabolicAfterServices, caption: "After — Services Page" },
    ],
    designRationale: [
      "The original site triggered an email capture popup immediately on load — blocking the hero before any value was established; the redesign removes all interruption-layer patterns and leads with credibility first.",
      "A credibility bar (30+ Years Experience, AGNP-C Board Certified, 5.0★ Google Rating, Faith Based Care) was added directly below the hero fold — surfacing the four highest-trust signals a patient evaluates before booking a medical appointment.",
      "The phone number is now pinned in the navigation alongside 'Book Free Consult' — providing two conversion paths permanently visible on every page scroll, not just the footer.",
      "The weight loss landing page leads with '87% SUCCESS RATE' and 'MATTHEWS, NC' credential pills above the headline — proof before pitch, which is the correct hierarchy for a skeptical medical patient audience.",
      "A 'What's Included' checklist card sits in the weight loss hero — co-locating the service details and 'Schedule Appointment' CTA in a single unit so patients can evaluate and convert without scrolling.",
      "Services were restructured from a left-aligned dropdown filter (which required interaction to reveal content) to a full-width expandable card list — making all services immediately visible and scannable.",
      "Mixed serif/italic weight in the hero headline ('With *Purposeful, Whole-Person* Care') creates typographic warmth that signals a personal, human practice — contrasting intentionally with cold clinical aesthetics common in medical sites.",
    ],
    points: [
      "Removed disruptive on-load popup and replaced with persistent, trust-building hero layout",
      "Surfaced credibility signals (board certification, years of experience, Google rating) above the fold",
      "Created a dedicated weight loss landing page with proof-first hierarchy and inline conversion card",
      "Rebuilt service navigation as scannable card list, reflecting patient intent rather than internal clinic taxonomy",
      "Applied consistent dark navy + green + white system to replace the inconsistent light-green template aesthetic",
    ],
  },
];

const OtherWork = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20 md:py-32">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">Other Work</h1>
        <p className="text-lg text-muted-foreground font-body mt-3">
          Client projects and design collaborations outside of core case studies.
        </p>
      </motion.div>

      <div className="mt-20 space-y-32">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            {/* Header */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-3 mb-3">
                <span className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground font-body">
                  {project.type}
                </span>
                <span className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground font-body">
                  {project.role}
                </span>
              </div>
              <h2 className="font-display text-3xl font-bold text-foreground">{project.title}</h2>
              <p className="text-accent font-body text-sm mt-1">{project.subtitle}</p>
              <p className="text-muted-foreground font-body leading-relaxed mt-4 max-w-2xl">{project.overview}</p>
            </div>

            {/* Before / After Screenshots */}
            {project.before && project.after ? (
              <div className="space-y-8 mb-12">
                {/* Before */}
                <div>
                  <p className="text-xs font-body font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                    Before
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    {project.before.map((s) => (
                      <div key={s.caption}>
                        <img
                          src={s.src}
                          alt={s.caption}
                          className="w-full rounded-lg border border-border object-cover"
                          loading="lazy"
                        />
                        <p className="text-xs text-center text-muted-foreground font-body mt-2">{s.caption}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* After */}
                <div>
                  <p className="text-xs font-body font-semibold uppercase tracking-widest text-accent mb-3">
                    After — Redesign
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    {project.after.map((s) => (
                      <div key={s.caption}>
                        <img
                          src={s.src}
                          alt={s.caption}
                          className="w-full rounded-lg border border-border object-cover"
                          loading="lazy"
                        />
                        <p className="text-xs text-center text-muted-foreground font-body mt-2">{s.caption}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* Fallback: single mockup */
              <div className="overflow-hidden rounded-lg bg-secondary mb-8">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
            )}

            {/* Design Rationale */}
            {project.designRationale && (
              <div className="mb-8">
                <h3 className="font-display text-lg font-bold text-foreground mb-3">Design Rationale</h3>
                <ul className="space-y-2.5">
                  {project.designRationale.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground font-body">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-[0.45rem] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* What I Did */}
            <div>
              <h3 className="font-display text-lg font-bold text-foreground mb-3">What I Did</h3>
              <ul className="space-y-2">
                {project.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-muted-foreground font-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-[0.45rem] shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* View Project */}
            {project.liveUrl && (
              <div className="pt-6 border-t border-border">
                <p className="text-xs font-body font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                  View Project
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-body bg-accent text-white hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink size={14} /> View Live Site
                  </a>
                  <a
                    href="https://github.com/jasmineblackdev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-body border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                  >
                    <Github size={14} /> GitHub Repository
                  </a>
                </div>
                <p className="text-xs text-muted-foreground font-body mt-3 leading-relaxed">
                  Deployed web build of the {project.title} redesign
                </p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OtherWork;
