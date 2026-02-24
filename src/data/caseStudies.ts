import formiqImg from "@/assets/formiq-mockup.jpg";
import macrocoreImg from "@/assets/macrocore-mockup.jpg";
import balanceiqImg from "@/assets/balanceiq-mockup.jpg";
import spotterImg from "@/assets/spotter-mockup.jpg";
import artifexImg from "@/assets/artifex-mockup.jpg";
import balanceiqScreenOnboarding from "@/assets/balanceiq-screen-onboarding.png";
import balanceiqScreenSnapshot from "@/assets/balanceiq-screen-snapshot.png";
import balanceiqScreenHome from "@/assets/balanceiq-screen-home.png";
import balanceiqScreenBills from "@/assets/balanceiq-screen-bills.png";
import balanceiqScreenSavings from "@/assets/balanceiq-screen-savings.png";
import balanceiqScreenAdvisor from "@/assets/balanceiq-screen-advisor.png";
import formiqScreenSplash from "@/assets/formiq-screen-splash.png";
import formiqScreenHome from "@/assets/formiq-screen-home.png";
import formiqScreenHistory from "@/assets/formiq-screen-history.png";
import formiqScreenAnalysis from "@/assets/formiq-screen-analysis.png";
import macrocoreScreenSplash from "@/assets/macrocore-screen-splash.png";
import macrocoreScreenGoal from "@/assets/macrocore-screen-goal.png";
import macrocoreScreenToday from "@/assets/macrocore-screen-today.png";
import macrocoreScreenGoals from "@/assets/macrocore-screen-goals.png";
import spotterScreenOnboarding from "@/assets/spotter-screen-onboarding.png";
import spotterScreenProfilePreview from "@/assets/spotter-screen-profile-preview.png";
import spotterScreenFind from "@/assets/spotter-screen-find.png";
import spotterScreenThisWeek from "@/assets/spotter-screen-thisweek.png";
import artifexScreenHero from "@/assets/artifex-screen-hero.png";
import artifexScreenInput from "@/assets/artifex-screen-input.png";
import artifexScreenOutput from "@/assets/artifex-screen-output.png";
import artifexScreenDirections from "@/assets/artifex-screen-directions.png";

export interface CaseStudySummary {
  title: string;
  subtitle: string;
  role: string;
  platform: string;
  image: string;
  slug: string;
}

export interface CaseStudyDetail extends CaseStudySummary {
  tagline: string;
  overview: string;
  problem: string;
  users: string;
  myRole: string;
  solution: string;
  designApproach: string[];
  designRationale: string[];
  decisions: string[];
  outcome: string;
  nextSteps: string[];
  screenshots?: { src: string; caption: string }[];
  screenshotRationale?: string[];
  screenshotColumns?: 2 | 3;
}

export const caseStudies: CaseStudySummary[] = [
  {
    title: "FormIQ",
    subtitle: "AI-powered exercise form analysis app",
    role: "UX & Product Designer",
    platform: "Mobile (iOS)",
    image: formiqImg,
    slug: "formiq",
  },
  {
    title: "MacroCore",
    subtitle: "Adaptive nutrition & macro tracking app",
    role: "UX Designer & Strategist",
    platform: "Mobile",
    image: macrocoreImg,
    slug: "macrocore",
  },
  {
    title: "BalanceIQ",
    subtitle: "Personal finance advisor in your pocket",
    role: "UX & Brand Designer",
    platform: "Mobile",
    image: balanceiqImg,
    slug: "balanceiq",
  },
  {
    title: "Spotter",
    subtitle: "Fitness-focused dating & gym buddy app",
    role: "UX/Product Designer",
    platform: "Mobile App",
    image: spotterImg,
    slug: "spotter",
  },
  {
    title: "Artifex",
    subtitle: "AI-powered design ideation software",
    role: "UX & Product Designer",
    platform: "Web (SaaS)",
    image: artifexImg,
    slug: "artifex",
  },
];

export const caseStudyDetails: Record<string, CaseStudyDetail> = {
  formiq: {
    title: "FormIQ",
    tagline: "AI-Powered Exercise Form Analysis App",
    role: "UX Designer, Product Designer",
    platform: "Mobile (iOS-first)",
    subtitle: "AI-powered exercise form analysis app",
    image: formiqImg,
    slug: "formiq",
    overview:
      "FormIQ is an AI-powered fitness app that acts as a pocket personal trainer. Users record their exercises, receive real-time form scores and correction cues, and track technique improvement over time — making expert feedback accessible without a coach in the room.",
    problem:
      "Most fitness apps focus on tracking reps and weight, but poor exercise form remains a leading cause of injuries and stalled progress. Beginners have no feedback loop, and serious lifters have no way to objectively assess their technique between sessions with a coach. The gap between intent and execution is invisible — until something goes wrong.",
    users:
      "Beginner lifters seeking safe fundamentals, intermediate gym-goers trying to break plateaus, and advanced strength athletes who train without consistent access to coaching.",
    myRole:
      "Led end-to-end product design — from concept definition through high-fidelity UI. Responsible for user flows, component architecture, interaction design, and developer handoff specifications.",
    solution:
      "A mobile-first iOS app that analyzes recorded exercise footage using AI, scores technique across key movement checkpoints, and delivers plain-language correction cues within seconds of recording.",
    designApproach: [
      "Began layout exploration directly in high-fidelity Figma screens, testing visual hierarchy and component density at real screen size",
      "Prioritized the core Record → Analyze → Review loop before building any secondary features",
      "Iterated on the scoring UI to balance data richness with instant readability for sweaty, distracted gym environments",
      "Built a modular component system to maintain design consistency across 20+ screens",
    ],
    designRationale: [
      "Oversized form score indicators — visual-first scoring lets users process feedback at a glance without reading dense text mid-workout",
      "Progressive disclosure — basic feedback surfaces immediately; detailed joint-by-joint breakdown is one tap deeper for users who want it",
      "All interactive elements meet 44px minimum tap targets, optimized for one-handed use during an active set",
      "High-contrast color system ensures legibility under bright gym lighting and at varied phone brightness settings",
    ],
    decisions: [
      "Chose visual scoring over text summaries to reduce cognitive load in-session — numbers and color-coded icons communicate faster than paragraphs",
      "Implemented a camera-first entry flow (record first, account setup second) to eliminate friction at the most critical user touchpoint",
      "Deferred social sharing and community features to V2 to keep V1 focused on the core form-feedback value proposition — shipping focused beats shipping everything",
    ],
    outcome:
      "FormIQ demonstrates the constraint-driven product thinking required to ship a technically complex mobile experience. The design is developer-ready with documented component specs and an active GitHub repository — not a concept deck, a real product foundation.",
    nextSteps: [
      "Live pose-detection overlays using TensorFlow Pose or Apple's Vision framework for real-time in-rep feedback",
      "React Native implementation targeting cross-platform distribution",
      "AI coaching mode that adapts correction cues based on historical progression data",
    ],
    screenshots: [
      { src: formiqScreenSplash, caption: "Splash / Onboarding" },
      { src: formiqScreenHome, caption: "Home — Ready to Record" },
      { src: formiqScreenAnalysis, caption: "AI Form Analysis" },
      { src: formiqScreenHistory, caption: "Form History — Empty State" },
    ],
    screenshotRationale: [
      "Dark-first color system (#0D0D0D) keeps the UI low-glare and legible under the bright overhead lighting common in gym environments — a context-specific decision that also reads as a premium, modern aesthetic.",
      "The Record action lives as a raised circular button in the center tab bar position, breaking the flat icon pattern to signal permanent one-tap access to the product's primary function from any screen.",
      "A full-width blue hero card dominates the Home screen above the fold — the core action (Record Your Form) is the first and only thing a user needs to see on arrival, with no competing visual weight.",
      "A 4-step process strip sits between the hero card and the exercise grid, educating users on the AI flow passively — no dedicated tutorial screen, no onboarding modal, no added friction.",
      "The AI Analysis screen leads with a circular ring score (52/100) before any text — users get the verdict instantly; the detailed coaching breakdown is there when they're ready to dig in.",
      "Color-coded feedback cards (green checkmark = strength, amber warning = correction) let users triage positive vs. corrective feedback at a glance without reading every word.",
      "The freemium usage counter ('4 free analyses remaining') surfaces in the header subtitle — transparent about limits without interrupting the result experience with a paywall modal.",
      "Video replay sits above the score card so users can re-watch their set before processing AI feedback — designed around the natural review-then-interpret mental model.",
      "Exercise cards in the Quick Pick grid show muscle group tags below the exercise name, giving users an anatomy-based secondary signal that speeds up selection without adding UI complexity or extra taps.",
      "The Form History empty state is instructional, not a dead end — it explains exactly how to trigger the save flow and provides a direct blue CTA, converting a zero-content screen into an active entry point.",
    ],
  },

  macrocore: {
    title: "MacroCore",
    tagline: "Adaptive Nutrition & Macro Tracking App",
    role: "UX Designer, Product Strategist",
    platform: "Mobile",
    subtitle: "Adaptive nutrition & macro tracking app",
    image: macrocoreImg,
    slug: "macrocore",
    overview:
      "MacroCore is a smart nutrition companion that adapts macro targets based on body measurements, activity patterns, and adherence data — removing the guesswork from long-term tracking without burying users in data entry.",
    problem:
      "Nutrition apps overwhelm users with manual food logging, inconsistent tracking interfaces, and static macro targets that never adjust. As weight, training intensity, and goals evolve, these apps fall behind. Users either burn out from over-logging or lose trust when the numbers stop making sense.",
    users:
      "Active individuals managing body composition goals — from casual gym members logging meals for the first time to physique competitors who need precision without being buried in manual entry.",
    myRole:
      "Led UX strategy and product design. Defined information architecture, designed the nutrition dashboard and daily logging flow, and established the full visual design system including both light and dark mode.",
    solution:
      "A mobile app with a simplified daily logging interface and an intelligent target-adjustment engine that recalculates macros weekly based on progress inputs — not daily noise. The app supports both light and dark mode, adapting to user system preferences.",
    designApproach: [
      "Audited five leading nutrition apps (MyFitnessPal, Cronometer, Carbon, MacroFactor, Lose It) to identify friction points and differentiation opportunities",
      "Moved directly into high-fidelity explorations to test how dense nutritional data could be presented cleanly at mobile scale",
      "Ran multiple layout iterations on the daily dashboard — the most-opened screen — before expanding to secondary features",
      "Established a component library around the food logging card to ensure speed and consistency across the product",
    ],
    designRationale: [
      "MacroCore supports both light and dark mode — light mode keeps the interface clean and clinical for daytime use, while dark mode reduces eye strain during early-morning and late-night logging sessions without any user configuration required",
      "Three-macro ring visualization gives users an instant status check without reading individual gram counts",
      "Condensed food search results use a two-line card layout (name + macro preview) so users can decide without opening every entry",
      "Weekly macro recalculation framing reduces panic around single off-days, reinforcing the long-term adherence mindset the product promotes",
    ],
    decisions: [
      "Chose weekly macro recalculation over daily to smooth data noise — users overreact to single-day fluctuations, which increases abandonment",
      "Designed a five-tap food logging flow to reduce friction at the highest drop-off point identified across competitive app audits",
      "Used color-coded ring charts over spreadsheet-style tables — tested multiple formats before committing based on scan-ability and emotional clarity",
    ],
    outcome:
      "A trust-focused nutrition experience that respects user time and cognitive bandwidth. The design demonstrates the ability to handle information-dense data in a way that feels clean rather than clinical — a key challenge in the health tech space.",
    nextSteps: [
      "Barcode scanning via React Native camera module for instant food lookup",
      "AI-powered meal suggestion engine using real-time macro gap analysis",
      "Wearable sync (Apple Watch / Garmin) for dynamic TDEE adjustment based on activity data",
    ],
    screenshots: [
      { src: macrocoreScreenSplash, caption: "Splash / Onboarding" },
      { src: macrocoreScreenGoal, caption: "Goal Setting" },
      { src: macrocoreScreenToday, caption: "Today — Dashboard" },
      { src: macrocoreScreenGoals, caption: "Goals & Adjustments" },
    ],
    screenshotRationale: [
      "Screenshots shown in light mode — MacroCore fully supports dark mode via system preference, with both themes designed at full fidelity so neither feels like an afterthought.",
      "The splash tagline — 'One number, not a spreadsheet' — addresses the core pain point of existing nutrition apps directly on first contact, positioning MacroCore's value before the user taps anything.",
      "'Takes about 60 seconds' micro-copy sits below the CTA to preempt onboarding drop-off anxiety — setting a time expectation without adding a screen or modal.",
      "The segmented progress bar across the top of the goal-setting screen makes the end of the flow visible, reducing abandonment by showing users exactly how far they are from getting their plan.",
      "Contextual rate guidance ('0.5–1 lb/week is ideal for lean gains') appears inline below the rate selector — delivering coaching context at the exact decision moment, not buried in a help section.",
      "The large circular calorie ring on the dashboard communicates daily progress status instantly through arc completion — users grasp where they stand before reading a single number.",
      "Protein, Carbs, and Fats each carry a distinct color label (teal, orange, purple) on the Goals screen, making the three macro values immediately distinguishable at a glance without parsing text.",
      "'How Adjustments Work' is displayed as a transparent, numbered 3-step card — showing users the logic behind macro changes builds trust and reduces the confusion that causes abandonment when targets shift.",
      "The timestamped Adjustment History card gives users a clear audit trail of every macro change, directly addressing the distrust users feel when nutrition apps silently alter their targets.",
    ],
  },

  balanceiq: {
    title: "BalanceIQ",
    tagline: "Personal Finance Advisor in Your Pocket",
    role: "UX Designer, Brand Designer",
    platform: "Mobile",
    subtitle: "Personal finance advisor in your pocket",
    image: balanceiqImg,
    slug: "balanceiq",
    overview:
      "BalanceIQ is a personal finance advisor designed for people who've been failed by spreadsheets and overwhelmed by traditional banking apps. It translates financial complexity into clear, actionable guidance — surfacing one smart next step at a time instead of a wall of raw data.",
    problem:
      "Personal finance apps default to data dumps — transaction lists, percentage breakdowns, and budget bars — without telling users what any of it means or what to do next. For users living paycheck-to-paycheck, this creates paralysis, not action. The interface itself becomes another source of financial anxiety.",
    users:
      "Young adults (22–35) new to intentional budgeting, individuals recovering from periods of financial stress, and users who find traditional banking apps cold, confusing, and emotionally discouraging.",
    myRole:
      "Led UX design, visual design, and brand identity. Defined the design language, built the onboarding flow and dashboard architecture, and established the component system and tone of voice.",
    solution:
      "A mobile app that combines spending categorization with plain-language advice, surfacing one clear 'next best action' per session rather than exposing users to raw financial data they don't know how to act on.",
    designApproach: [
      "Began with brand exploration — BalanceIQ needed to feel approachable and empowering, distinctly different from corporate fintech aesthetics",
      "Designed the onboarding flow to establish trust before asking for sensitive financial data — soft-onboarding as a conversion and trust lever",
      "Explored multiple dashboard layouts before settling on a card-based system that surfaces one financial signal at a time",
      "Created a warm, accessible color palette intentionally distinct from the blue-dominant standard in fintech",
    ],
    designRationale: [
      "Card-based dashboard creates focus — each card isolates a single financial insight instead of requiring users to interpret a wall of data simultaneously",
      "Primary CTA on every screen is always the 'next best action' — reducing decision fatigue for users who are already overwhelmed by their finances",
      "Conversational UI copy ('You're on track this week') replaces clinical language ('Budget utilization: 68%') to reduce anxiety and increase daily engagement",
      "Color system uses green/amber/neutral rather than green/red to avoid shame framing around overspending — a critical empathy decision",
    ],
    decisions: [
      "Chose qualitative financial framing ('You could save $40 this week') over raw category percentages to drive action rather than just awareness",
      "Designed a soft-onboarding path that provides value before requiring account connection — removing the biggest trust barrier in consumer fintech",
      "Avoided surfacing total debt balance prominently on the home screen — research shows this pattern increases app abandonment rather than motivating change",
    ],
    outcome:
      "A finance product that proves empathy and clarity are design decisions, not afterthoughts. The visual design and brand voice demonstrate how design can make a difficult, high-stakes subject feel human — a critical capability for consumer fintech products.",
    nextSteps: [
      "Plaid API integration for live bank and transaction data",
      "AI-powered spending insight generation using categorization and trend analysis",
      "Financial health score feature using ML to identify behavioral patterns and surface personalized guidance over time",
    ],
    screenshots: [
      { src: balanceiqScreenOnboarding, caption: "Onboarding — Take-Home Pay" },
      { src: balanceiqScreenSnapshot, caption: "You're All Set! — Financial Snapshot" },
      { src: balanceiqScreenHome, caption: "Home — Financial Health Dashboard" },
      { src: balanceiqScreenBills, caption: "Bills — Upcoming & Overdue" },
      { src: balanceiqScreenSavings, caption: "Savings — Goals & Progress" },
      { src: balanceiqScreenAdvisor, caption: "AI Advisor — Conversational Finance" },
    ],
    screenshotColumns: 3,
    screenshotRationale: [
      "Onboarding opens with 'What's your take-home pay?' — the single most important input for a budgeting app — as a large centered input, with a 'Skip for now' option in the top right that removes the all-or-nothing commitment barrier for skeptical first-time users.",
      "The 'You're all set!' confirmation screen delivers a BalanceIQ Score (42/100) and Estimated Safe to Spend immediately after onboarding — giving users a concrete financial insight before they've logged a single transaction, proving the product's value before asking for ongoing engagement.",
      "The Home dashboard leads with Financial Health (68/100 — 'Getting there!') as a scored, labeled metric rather than a raw account balance — replacing a number that causes anxiety with a signal that drives action.",
      "Safe to Spend ($1,247 until Nov 15) is displayed as the dominant card on the Home screen with a clear date boundary, giving users a single actionable number for daily spending decisions instead of a full budget breakdown that requires interpretation.",
      "The Bills screen uses amber highlighting for the overdue Rent entry and a 'OVERDUE' badge — surfacing urgency at the list level so users don't need to open each bill to identify what needs immediate attention.",
      "Dual add-bill CTAs ('Scan Bill' and 'Add Manually') use a dashed card treatment that clearly signals interactivity without occupying the visual weight of confirmed bill entries — the affordance is clear but subordinate to existing data.",
      "The Savings screen leads with Total Saved vs Total Goals as a header stat pair, followed by a motivational insight card ('At this rate, you'll hit Emergency Fund by March') — co-locating progress data and behavioral coaching in a single scroll position rather than separating them across tabs.",
    ],
  },

  spotter: {
    title: "Spotter",
    tagline: "Fitness-Focused Dating & Gym Buddy App",
    role: "UX/Product Designer",
    platform: "Mobile App",
    subtitle: "Fitness-focused dating & gym buddy app",
    image: spotterImg,
    slug: "spotter",
    overview:
      "Spotter is a fitness-first connection app where your training identity is your profile. Users match based on workout compatibility — training style, schedule, and goals — before defaulting to a traditional photo swipe, creating stronger alignment from the first match.",
    problem:
      "Dating apps built around appearance-first matching consistently fail fitness-oriented users. Lifestyle compatibility — training schedule, workout style, physical discipline — is invisible in standard profiles. Matching with someone who actually shares your gym life is mostly luck.",
    users:
      "Gym-dedicated singles (20–35) — from recreational gym-goers to competitive athletes — who want meaningful connections built on shared lifestyle values, not just swipes.",
    myRole:
      "Led full product design — user research framing, onboarding flow, matching system UI, and interaction design. Responsible for the product voice, safety design patterns, and inclusive design framework.",
    solution:
      "A mobile dating and gym-buddy platform where fitness data drives matching logic, training compatibility is visualized on the match card, and workout invite scheduling is built directly into the conversation flow.",
    designApproach: [
      "Defined three distinct personas before touching the UI: Serious Lifter, Wellness-Focused User, Casual Gym-Goer — ensuring the design serves the full spectrum",
      "Designed onboarding to collect fitness data through engaging, low-friction questions rather than intimidating form fields",
      "Explored multiple match card layouts before settling on a design that surfaces training stats above traditional profile photos",
      "Iterated on the 'invite to workout' flow to feel natural within a first conversation rather than requiring navigation away from the thread",
    ],
    designRationale: [
      "Training stats surface before bio text in the match card — a deliberate hierarchy inversion that communicates Spotter's core differentiator immediately on every profile",
      "Onboarding steps are framed as 'Tell us how you train' not 'Fill out your profile' — language that shapes user perception of what kind of app this is",
      "Workout invite is accessible from any message thread without navigation — reducing friction at the moment of spontaneous intent when both users are engaged",
      "Inclusive gym type selection (CrossFit, powerlifting, yoga, running, casual gym) ensures the design doesn't exclude non-traditional fitness identities",
    ],
    decisions: [
      "Made fitness profile setup mandatory before swiping — users who skip this step produce worse matches and lower retention, and the short-term friction is worth the long-term product integrity",
      "Chose activity-based match prompts ('Would you spot them on squats?') over generic icebreakers to reinforce unique product positioning from the first interaction",
      "Deprioritized a standard swipe pattern in favor of a compatibility score display — differentiating from Tinder-style mechanics to signal this is a different kind of product",
    ],
    outcome:
      "A product that demonstrates how niche targeting and lifestyle-driven UX can create a compelling alternative to generalist platforms. The design shows strong systems thinking — matching logic, safety patterns, inclusivity, and conversion all resolved in one cohesive flow.",
    nextSteps: [
      "Gym geolocation matching via Google Maps API to surface nearby-gym compatibility",
      "Wearable data integration (Apple Watch / Garmin) for verified, dynamic training stats",
      "AI compatibility scoring using logged workout history to improve match quality over time",
    ],
    screenshots: [
      { src: spotterScreenOnboarding, caption: "Onboarding — Step 1 of 8" },
      { src: spotterScreenProfilePreview, caption: "Profile Preview — Step 8 of 8" },
      { src: spotterScreenFind, caption: "Find Your Spot — Match Feed" },
      { src: spotterScreenThisWeek, caption: "This Week — Scheduling" },
    ],
    screenshotRationale: [
      "Intent is captured on step 1 — asking 'What brings you to Spotter?' before any swiping ensures the matching algorithm and every profile context card are meaningful from the first interaction.",
      "The 'Recommended' badge on 'Gym Buddy → Bae' nudges users toward the product's most differentiated use case without forcing the choice — reducing pressure at the highest-stakes onboarding decision.",
      "'You can always change this later' micro-copy on step 1 directly addresses commitment anxiety, the most common drop-off trigger at intent-selection in social apps.",
      "Step 8 shows users exactly how their profile appears before they confirm — 'Here's how you'll appear' closes the onboarding loop with transparency, reducing post-signup regret.",
      "'My Boundaries' (No body comments, Supportive feedback only, Taking things slow) is displayed on the public profile card — making safety a visible, first-class product feature rather than a buried setting.",
      "On the match card, the 3-column fitness stat grid (Style, Frequency, Trains) appears above the photo and name — a deliberate hierarchy inversion that surfaces compatibility data before physical appearance.",
      "Dual intent badges on each match card ('85% Spot Match' + 'Open to Dating') communicate both compatibility score and romantic openness simultaneously, without requiring the profile to be opened.",
      "'Pending Invites' and 'Confirmed Sessions' are separated into distinct labeled sections on This Week — the action hierarchy is clear: pending requires a decision, confirmed surfaces contextual actions (Message, Get Directions) timed to the session.",
    ],
  },

  artifex: {
    title: "Artifex",
    tagline: "AI-Powered Design Ideation Software",
    role: "UX Designer, Product Designer",
    platform: "Web Software (SaaS)",
    subtitle: "AI-powered design ideation software",
    image: artifexImg,
    slug: "artifex",
    overview:
      "Artifex is an AI-powered design direction tool that transforms project briefs into strategic visual recommendations — including color systems, typography pairings, and curated direction rationale — in minutes, not days.",
    problem:
      "Early-stage designers and solo founders waste weeks trying to establish visual direction for new products. Mood boards take hours to build, and AI image tools produce aesthetically random results with no strategic rationale. The result is either decision paralysis or expensive agency engagements for what should be a fast, confident first step.",
    users:
      "Early-stage product designers and founders who need to move fast, design agencies conducting initial client discovery, and creative leads exploring visual direction before committing to full brand work.",
    myRole:
      "Led UX design and product strategy. Defined the core user flow, designed the input/output system, and established the visual design language for the product itself — which needed to demonstrate the quality it claimed to produce.",
    solution:
      "A SaaS web application that guides users through a structured project brief input, then generates three curated design directions with clear strategic rationale — not just aesthetic outputs or image dumps.",
    designApproach: [
      "Started with the output experience, not the input — designed what a great 'design direction card' looks like before designing how to generate one",
      "Built the input flow as a progressive guided questionnaire (tone, industry, audience, constraints) to structure AI outputs without exposing prompt engineering to users",
      "Explored multiple output display formats before settling on a three-direction model (Bold / Refined / Experimental) that mirrors how creative directors naturally present options",
      "Designed the product's own visual identity as a portfolio piece — clean, design-forward, and confident in its own aesthetic",
    ],
    designRationale: [
      "Output structured as three named directions, not infinite options — constraint drives decision-making and prevents the creative paralysis that unlimited AI generation creates",
      "Each direction card includes a named rationale section explaining the strategic thinking behind the aesthetic, making it useful in client presentations and design reviews",
      "Typography previews render in context (headline, body, caption hierarchy) rather than font specimens — designers need to see application, not just typefaces",
      "Export-ready format is built into the output design from the start — a practical decision that respects how designers actually integrate inspiration into their workflow",
    ],
    decisions: [
      "Chose guided structured input over a free-text prompt field — this produces more consistent, higher-quality outputs and reduces user frustration with AI unpredictability",
      "Capped directions at three to force clarity — showing ten options would undermine the core product promise of reducing creative decision fatigue",
      "Designed the interface to feel like a premium design tool, not a ChatGPT wrapper — visual quality signals credibility when your entire product promise is about visual quality",
    ],
    outcome:
      "A product that demonstrates design systems thinking, AI-product strategy, and high-craft visual execution in a single case study. Artifex shows the ability to design the product and understand the product — a critical skill set for design roles adjacent to AI and emerging technology.",
    nextSteps: [
      "React + TypeScript front-end implementation with a live public demo",
      "OpenAI API backend for dynamic direction generation based on structured brief inputs",
      "Figma plugin that exports generated color systems and type pairings directly into design files — closing the loop from inspiration to production",
    ],
    screenshots: [
      { src: artifexScreenHero, caption: "Landing Page — Hero" },
      { src: artifexScreenInput, caption: "Brief Input — Step 1 of 3" },
      { src: artifexScreenOutput, caption: "Output — Directions Generated" },
      { src: artifexScreenDirections, caption: "Example Output — Direction Cards" },
    ],
    screenshotRationale: [
      "The hero headline — 'Strategic direction, not random inspiration' — names the competitor failure mode in the first line, positioning Artifex against the AI image generator category before explaining what it does.",
      "The single word 'inspiration' receives a blue-to-purple gradient treatment in the headline, pulling the eye directly to the product's core differentiator without any separate decorative element.",
      "The secondary CTA ('View Example Output') uses a ghost/text treatment at lower visual weight than the primary — the hierarchy is explicit: act first, explore second, with no competition between the two paths.",
      "The 3-step input flow uses pill selectors for Industry and Platform Type instead of a free-text prompt field — removing blank-page anxiety, constraining inputs for consistent output quality, and making the brief feel fast to complete.",
      "The output is capped at exactly 3 named directions (Minimal Authority, Warm Kinetic, Neo Editorial) — constraint drives decision-making; showing 10 options would recreate the creative paralysis the product exists to solve.",
      "Each direction card in the Example Output delivers a complete package — color swatches, typography pairing, descriptive tags, and strategic rationale — making every output immediately usable in a client presentation, not just visually interesting.",
      "The footer credits 'Designed by Jasmine' — the product itself is a portfolio piece, and signing it is a deliberate signal of craft ownership and confidence in the work.",
    ],
  },
};

export const slugs = Object.keys(caseStudyDetails);
