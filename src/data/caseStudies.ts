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
  timeline: string;
  tools: string;
  overview: string;
  problem: string;
  users: string;
  goals: string[];
  constraints: string[];
  myRole: string;
  solution: string;
  designApproach: string[];
  designRationale: string[];
  decisions: string[];
  outcome: string;
  nextSteps: string[];
  links?: { label: string; url: string; description: string; primary?: boolean }[];
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
    subtitle: "iOS nutrition & macro tracking app",
    role: "UI / Product Designer",
    platform: "Mobile (iOS)",
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
    tagline: "AI form coach built for the gym floor, not the app store",
    role: "UX Designer, Product Designer",
    platform: "Mobile (iOS-first)",
    timeline: "4 weeks",
    tools: "Figma",
    subtitle: "AI-powered exercise form analysis app",
    image: formiqImg,
    slug: "formiq",
    overview:
      "FormIQ turns a phone into a form spotter. Users record a set, receive an AI-generated score and plain-language correction cues within seconds, and track technique trends across sessions. The entire product is designed for the gym floor: dark-mode-first, one-handed, and built around a sub-30-second core loop — because feedback that arrives after the workout is finished doesn't change how you lifted.",
    problem:
      "Most fitness apps count reps. None of them watch how you lift. Poor form is the leading cause of gym injuries and stalled progress — but the only solution most people have access to is a personal trainer they can't afford or a training partner who isn't always there. The feedback gap is invisible until something goes wrong.",
    users:
      "Intermediate gym-goers (18–35) who train consistently but don't have regular access to coaching. They have enough experience to care about technique but not enough certainty to self-correct confidently. They'll use their phone between sets — one hand, 30 seconds, zero patience for multi-step flows.",
    goals: [
      "Design a sub-30-second core loop: Record → Analyze → Review, completable with one hand mid-workout",
      "Surface AI form scores visually-first so users grasp feedback at a glance without reading during a set",
      "Build a modular component system that scales to 20+ screens without visual inconsistency",
      "Establish a developer-ready spec layer from the start — not a concept deck, a real handoff",
    ],
    constraints: [
      "Solo project — no dev team, no user testing lab, no budget",
      "Must be technically feasible with existing AI pose-detection models (PoseNet / MediaPipe)",
      "iOS-first: all tap targets, spacing, and interactions follow Apple HIG minimums",
      "Full UI system scoped to 4 weeks — forced strict prioritization of the core loop before any secondary features",
    ],
    myRole:
      "Led end-to-end product design — from concept definition through high-fidelity UI. Responsible for user flows, component architecture, interaction design, and developer handoff specifications.",
    solution:
      "A camera-first mobile app with a one-tap record flow, AI form scoring, and plain-language correction cues delivered before the next set starts. A history view tracks technique trends across sessions so users can see whether they're actually improving — not just whether they worked out.",
    designApproach: [
      "Started with the Analysis result screen — the moment the product lives or dies. Designed what a perfect feedback card looks like before building anything else. If the output isn't readable in under 5 seconds, the rest of the product is irrelevant.",
      "Explored three scoring formats: text report, number only, and ring score with color-coded breakdown. The ring won — it communicates pass/fail before the user reads a single word, which matters in a gym environment where attention is split.",
      "Mapped every interactive element to a one-handed thumb zone before finalizing layout. Record, stop, and review all land in the bottom third — the only reachable zone during an active session.",
      "Designed the Form History empty state as an active entry point, not a dead end — it explains the save flow and surfaces a direct CTA. A zero-content screen that converts nothing is a churn trigger.",
    ],
    designRationale: [
      "Camera-first entry — the app opens to record, not a home screen or dashboard. Every tap before the camera is a potential abandoned session.",
      "Ring score leads the Analysis screen before any text — visual verdict first, detailed breakdown second. Users get the answer in under a second.",
      "Color-coded feedback cards (green = strength, amber = correction) let users triage positive vs. corrective feedback without reading every line mid-workout.",
      "Freemium counter ('4 free analyses remaining') surfaces in the header subtitle, not a modal — transparent about limits without hijacking the result screen.",
    ],
    decisions: [
      "Camera-first entry flow over a traditional home screen — the product's entire value happens in the record flow. Every screen before the camera is friction that costs sessions.",
      "Ring score over text feedback — tested both. Ring communicates pass/fail in under a second. Text requires sustained attention that gym users don't have between sets.",
      "Mandatory exercise selection before analysis — removing this created ambiguous results. Short-term friction justified by accurate, trustworthy output.",
      "Deferred social, community, and sharing features to V2 entirely — not because they aren't valuable, but because shipping a focused V1 well is worth more than shipping everything at half quality.",
    ],
    outcome:
      "FormIQ is a complete, developer-ready product foundation — 20+ screens, a documented component system, and an active GitHub repository. The core loop (Record → Analyze → Review) is fully designed end-to-end with no placeholder screens. The design is production-ready for a React Native build.",
    nextSteps: [
      "Live pose-detection overlays using TensorFlow Pose or Apple's Vision framework for real-time in-rep feedback",
      "React Native implementation targeting cross-platform distribution",
      "AI coaching mode that adapts correction cues based on historical progression data",
    ],
    links: [
      {
        label: "View Live App",
        url: "https://form-iq-app.vercel.app",
        description: "Deployed web build of the FormIQ product design",
        primary: true,
      },
      {
        label: "GitHub Repository",
        url: "https://github.com/jasmineblackdev",
        description: "Source code and project structure",
        primary: false,
      },
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
    tagline: "iOS Nutrition & Macro Tracking App",
    role: "UI / Product Designer",
    platform: "Mobile (iOS)",
    timeline: "3 weeks",
    tools: "Figma, Design Systems, High-Fidelity Prototyping",
    subtitle: "iOS nutrition & macro tracking app",
    image: macrocoreImg,
    slug: "macrocore",
    overview:
      "MacroCore is a mobile nutrition app designed to help fitness-focused users track macros and follow meal plans without the complexity and friction common in traditional tracking apps. The goal was to create a clean, fast, and approachable interface that reduces cognitive overload while still supporting advanced nutrition goals. I owned the end-to-end UI and product design, focusing on clarity, hierarchy, and scalability.",
    problem:
      "Many macro-tracking apps overwhelm users with dense dashboards, excessive data entry, confusing navigation, and too many decisions at once. This creates friction — especially for users who train regularly, want consistency, and don't want to 'study' their food app every day. The core question driving this project: how might we make macro tracking feel lightweight and intuitive while still supporting serious fitness goals?",
    users:
      "Fitness-focused adults who track macros as part of a consistent training routine. They range from casual gym-goers building a logging habit to experienced athletes who need precision without overhead. What they share: they want to know if today was a good day in under 10 seconds, and they won't tolerate an app that makes daily logging feel like a chore.",
    goals: [
      "Reduce cognitive load during daily use — key actions obvious within seconds",
      "Make logging fast enough that it never becomes a reason to stop tracking",
      "Support repeat usage without friction — designed for habit, not novelty",
      "Design for mobile-first, one-handed interaction throughout",
    ],
    constraints: [
      "Mobile-only experience — every layout decision optimized for a single screen context",
      "Nutrition data must remain readable and accurate — density cannot be sacrificed for aesthetics",
      "Design needed to scale for future AI-generated meal plans without requiring structural changes",
    ],
    myRole:
      "I owned the end-to-end UI and product design — information architecture, component system, visual design, and high-fidelity prototyping. Focused on clarity, hierarchy, and building a foundation that scales.",
    solution:
      "A stripped-down daily tracking interface built around a glanceable macro dashboard, a fast logging flow, and a goal system designed for long-term use. The final UI prioritizes clarity over density, speed over configuration, and consistency across screens — so the app builds muscle memory rather than requiring re-learning every session.",
    designApproach: [
      "Rather than starting with low-fidelity wireframes, I used rapid high-fidelity layout exploration to iterate quickly on hierarchy, spacing, and interaction patterns — testing real content density early and making faster decisions around navigation.",
      "Ran multiple layout iterations on the dashboard — the most-opened screen in the product. Tested table format, progress bars, and ring charts before landing on rings: the only format that communicates macro status before a number is read.",
      "Iterated on logging flow length until the primary actions felt immediately discoverable without explanation. Every tap beyond the minimum was evaluated as a potential drop-off point.",
      "Designed light and dark mode simultaneously at full fidelity. Light mode for daytime clarity; dark mode for early-morning and late-night sessions. Neither was added after the fact.",
    ],
    designRationale: [
      "Primary action placed above the fold — users can log or view macros immediately without scrolling. The most important action is always the most visible.",
      "Card-based layout chosen for scanability — nutrition data is broken into small, digestible chunks so users can process what they need without reading the entire screen.",
      "Inputs grouped by task to reduce cognitive load during logging — decisions are presented one at a time, in the order they naturally occur.",
      "Clear visual hierarchy through typography and spacing guides attention from totals → details — users see their summary first, drill into specifics only if they want to.",
      "Consistent placement of actions across screens builds muscle memory for repeat users — the app should feel automatic after a week of use.",
      "Minimal color usage reserved for emphasis only — in a data-heavy interface, color used everywhere is the same as color used nowhere.",
    ],
    decisions: [
      "Rapid high-fidelity exploration over wireframes — testing at real content density from day one surfaced hierarchy and spacing problems that low-fidelity mockups would have hidden until much later.",
      "Ring charts as the macro visualization format — the single criterion was whether a user could tell if they were on track without reading a number. Rings were the only format that passed.",
      "Logging flow scoped to the minimum required taps — every additional step was removed unless it directly served accuracy or user understanding. Friction is the reason people stop tracking.",
      "Scalable component system designed upfront — the layout is structured to accommodate AI-generated meal plans and expanded insights without requiring a structural redesign.",
    ],
    outcome:
      "While still in progress with an App Store release planned, the design achieves its core goals: macro visibility is immediate and glanceable, daily logging requires minimal effort, and the component system provides a scalable foundation for future features including AI-generated meal plans. The UI is designed to grow with the product without requiring major structural changes.",
    nextSteps: [
      "Introduce AI-assisted meal planning and macro-optimized meal suggestions",
      "Expand macro insights and trend data without increasing cognitive load",
      "Continue refining logging flows based on real usage patterns post-launch",
    ],
    screenshots: [
      { src: macrocoreScreenSplash, caption: "Splash / Onboarding" },
      { src: macrocoreScreenGoal, caption: "Goal Setting" },
      { src: macrocoreScreenToday, caption: "Today — Dashboard" },
      { src: macrocoreScreenGoals, caption: "Goals & Adjustments" },
    ],
    screenshotRationale: [
      "Shown in light mode — MacroCore supports both light and dark mode at full fidelity. Dark mode reduces eye strain for early-morning and late-night sessions; neither theme was added as an afterthought.",
      "Splash screen tagline — 'One number, not a spreadsheet' — names the failure mode of every competing app in the first line. The value proposition is communicated before the user taps anything.",
      "'Takes about 60 seconds' micro-copy below the CTA sets a time expectation that directly reduces onboarding drop-off anxiety — no added screen, no modal, one line of copy doing real product work.",
      "Progress bar across the top of the goal-setting screen makes the end of the onboarding flow visible — showing users exactly how close they are to their plan reduces abandonment mid-flow.",
      "Contextual guidance ('0.5–1 lb/week is ideal for lean gains') appears inline at the decision point, not in a help section — coaching delivered at the moment it's needed, zero extra taps.",
      "Calorie ring on the dashboard communicates daily progress through arc completion before any number is read — the primary action and the primary status check are both above the fold.",
      "Protein, Carbs, and Fat each carry a distinct color on the Goals screen — three macro values are distinguishable at a glance without parsing labels or comparing numbers.",
    ],
    links: [
      {
        label: "View Live App",
        url: "https://macro-core-app.vercel.app",
        description: "Deployed web build of the MacroCore product design",
        primary: true,
      },
      {
        label: "GitHub Repository",
        url: "https://github.com/jasmineblackdev",
        description: "Source code and project structure",
        primary: false,
      },
    ],
  },

  balanceiq: {
    title: "BalanceIQ",
    tagline: "Personal finance that tells you what to do, not just what happened",
    role: "UX Designer, Brand Designer",
    platform: "Mobile",
    timeline: "5 weeks",
    tools: "Figma",
    subtitle: "Personal finance advisor in your pocket",
    image: balanceiqImg,
    slug: "balanceiq",
    overview:
      "BalanceIQ replaces account balances and budget breakdowns with one number that matters: how much you can safely spend today. Built for users who are overwhelmed by money, not just bad at managing it — the app surfaces a single Safe to Spend metric, tracks bills with overdue flags, monitors savings goals, and provides an AI advisor for questions. Everything else is one tap deeper, available when the user is ready.",
    problem:
      "Finance apps are built for people who are already financially comfortable. Mint, YNAB, and traditional banking apps surface raw data — transaction lists, category breakdowns, debt totals — and call it guidance. For users living close to the edge, opening these apps makes them feel worse, not better. The interface becomes another source of anxiety, and they close it. The people who most need financial tools are the ones most likely to abandon them.",
    users:
      "Young adults (22–35) who want help with their finances but avoid apps that make them feel judged. They open a finance app hoping to feel better — not to see a spreadsheet. They'll abandon any product that leads with total debt or requires interpreting a dashboard before they can act.",
    goals: [
      "Replace anxiety-inducing raw financial data with a single actionable daily number — 'Safe to Spend'",
      "Design onboarding that builds trust and delivers value before asking for sensitive financial information",
      "Establish a brand voice that feels human and supportive, not clinical or judgmental",
      "Create a color and feedback system that avoids shame framing around overspending",
    ],
    constraints: [
      "No live bank integration — designed for future Plaid API connection",
      "Must handle zero-balance and debt-heavy user scenarios without shame or dead-end states",
      "Color system must avoid red as a primary alert color — shame response increases abandonment",
      "5-week timeline — AI Advisor, Bills, and Savings screens prioritized; investment tracking deferred to V2",
    ],
    myRole:
      "Led UX design, visual design, and brand identity. Defined the design language, built the onboarding flow and dashboard architecture, and established the component system and tone of voice.",
    solution:
      "A mobile app centered on a single hero metric — Safe to Spend — showing exactly how much is available before the next paycheck after committed bills and savings goals are accounted for. Bills tracking flags overdue items in amber. Savings goals show progress with a forward-looking projection. An AI advisor answers financial questions in plain English. The design system removes red entirely as an alert color and replaces clinical finance copy with conversational language throughout.",
    designApproach: [
      "Started with brand direction before touching layouts — dark navy, green, and warm white established first. BalanceIQ needed to feel categorically different from every banking app the target user has already abandoned.",
      "Explored three dashboard models: full account overview (rejected — too much data, requires interpretation), budget category breakdown (rejected — presumes users have categories worth tracking), and single Safe to Spend hero metric (chosen — one number, immediately actionable, no math required).",
      "Designed onboarding to deliver a BalanceIQ Score and Safe to Spend estimate after three inputs — before any account connection is required. Users needed a reason to trust the product before it asked for anything sensitive.",
      "Every alert state uses amber, not red. This was a deliberate system-level decision, not a style preference — red triggers a shame response that drives exactly the avoidance behavior the product needs to prevent.",
    ],
    designRationale: [
      "Safe to Spend is the homepage hero — not account balance, net worth, or a pie chart. One number that answers the only question users actually open the app to ask: 'Can I spend money today?'",
      "Overdue bills are flagged amber with an 'OVERDUE' badge at the list level — users see urgency without opening each item, and the warm amber avoids the anxiety spike that red creates.",
      "Onboarding delivers value before asking for data — the BalanceIQ Score appears after 3 inputs. Value first, trust earned, account connection requested second.",
      "Conversational copy throughout — 'Getting there!' instead of '68/100', 'You're all set!' instead of 'Setup complete'. Tone is a product decision, not a branding exercise.",
    ],
    decisions: [
      "Safe to Spend as the single homepage metric — tested against account balance display and category breakdown. Safe to Spend was the only format that answered 'what do I do right now?' without requiring interpretation.",
      "Removed red from the design system as a primary alert color — overdue and overspent states use amber. This was a product decision: red triggers shame, shame causes app abandonment, and BalanceIQ's entire value depends on users staying engaged.",
      "Onboarding delivers a useful output before requiring account connection — the BalanceIQ Score and Safe to Spend appear at step 3. Removing the connection requirement from the trust-building phase was the single biggest conversion lever in the design.",
      "AI Advisor opens with quick-action chips ('What can I cut?', 'Am I on track?') instead of a blank input — the blank prompt is a conversion dead zone. Chips guide users toward questions they actually have.",
    ],
    outcome:
      "BalanceIQ is a complete product design covering onboarding, dashboard, bills, savings, and AI advisor — six fully realized screens with a consistent design language built on one principle: make users feel capable, not judged. The product makes the case that tone, color, and information hierarchy are not aesthetic choices — they are product decisions that directly affect whether people come back.",
    nextSteps: [
      "Plaid API integration for live bank and transaction data",
      "AI-powered spending insight generation using categorization and trend analysis",
      "Financial health score feature using ML to identify behavioral patterns and surface personalized guidance over time",
    ],
    links: [
      {
        label: "View Live App",
        url: "https://balance-iq-three.vercel.app",
        description: "Deployed web build of the BalanceIQ product design",
        primary: true,
      },
      {
        label: "GitHub Repository",
        url: "https://github.com/jasmineblackdev",
        description: "Source code and project structure",
        primary: false,
      },
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
    tagline: "A dating app where your training stats come before your photo",
    role: "UX/Product Designer",
    platform: "Mobile App",
    timeline: "4 weeks",
    tools: "Figma",
    subtitle: "Fitness-focused dating & gym buddy app",
    image: spotterImg,
    slug: "spotter",
    overview:
      "Spotter is a fitness-first connection app for gym-dedicated singles who want to meet people who actually share their lifestyle. Training compatibility — workout style, schedule, and goals — surfaces on every match card before photos, flipping the hierarchy of every existing dating app. Workout scheduling is built directly into the conversation flow, removing the friction between 'want to meet?' and 'want to train together?'",
    problem:
      "Dating apps optimized for appearance-first matching consistently fail fitness-focused users. Lifestyle compatibility — training schedule, gym culture, physical commitment — is invisible in a standard profile. You can match with someone attractive and find out three dates in that they think the gym is something other people do. Shared lifestyle values are the strongest predictor of long-term compatibility, and no app surfaces them.",
    users:
      "Gym-dedicated singles (20–35) who structure their lives around training — from recreational lifters to competitive athletes. They want to know upfront whether a match will understand a 5am alarm, a prep diet, or a Saturday at a meet. A gym filter on Hinge is not a solution.",
    goals: [
      "Surface training compatibility data above physical appearance on every match card — the core product differentiator",
      "Design onboarding that captures fitness identity through engaging inputs, not intimidating form fields",
      "Build workout scheduling natively into the messaging flow — no navigation away from an active thread",
      "Make safety features first-class and visible on the public profile, not buried in settings",
    ],
    constraints: [
      "Safety patterns mandatory — boundary-setting and reporting must be designed upfront, not retrofitted",
      "Must serve the full fitness spectrum from casual gym-goers to competitive athletes without excluding either",
      "Fitness profile setup required before swiping — short-term onboarding friction accepted for long-term match quality",
      "4-week scope — geolocation gym matching and wearable sync deferred to V2",
    ],
    myRole:
      "Led full product design — user research framing, onboarding flow, matching system UI, and interaction design. Responsible for the product voice, safety design patterns, and inclusive design framework.",
    solution:
      "A mobile app where fitness data drives matching logic and training compatibility is the first thing visible on every profile card. Onboarding collects training identity through simple, focused questions. Match cards show training style, frequency, and gym type above the photo — not below it. Workout invite scheduling is a native feature inside the message thread, not a separate flow.",
    designApproach: [
      "Defined three user personas (Serious Lifter, Wellness-Focused, Casual Gym-Goer) before opening Figma — the design had to serve the full fitness spectrum without making any group feel like a second-class user.",
      "The match card was the highest-stakes design decision in the product. Explored five layouts before landing on the 3-column fitness stat grid above the photo. Every other format buried the differentiator below the fold — which meant Spotter was just Tinder with a gym filter.",
      "Rewrote onboarding copy from 'Create your profile' to 'Tell us how you train' — the language shift changes what kind of app the user believes they're setting up before they see a single match.",
      "Designed safety features — boundary statements, block, report — as first-class UI elements visible on the public profile card, not buried in a settings menu. Safety has to be a product value, not a legal checkbox.",
    ],
    designRationale: [
      "3-column fitness stat grid (Style, Frequency, Trains) sits above the photo on every match card — the hierarchy inversion is the entire product. If compatibility data lives below the photo, the differentiator disappears.",
      "Dual intent badges ('85% Spot Match' + 'Open to Dating') appear on the card without opening the profile — users get compatibility score and romantic openness in one glance, zero taps.",
      "'My Boundaries' is visible on the public profile (not just in settings) — making safety a visible product feature builds trust with the users most likely to be cautious about a new social app.",
      "Onboarding step 1 includes 'You can always change this later' micro-copy — directly addressing commitment anxiety, the most common drop-off trigger at intent-selection in social apps.",
    ],
    decisions: [
      "Fitness profile setup is mandatory before swiping — short-term onboarding friction accepted for long-term product integrity. Users who skip fitness setup match worse and retain less. The gate is worth it.",
      "Training stats above the photo on every match card — this was non-negotiable. Tested with the stats below and the product became indistinguishable from every other dating app. The hierarchy is the product.",
      "Pending Invites and Confirmed Sessions are separate labeled sections on the This Week screen — pending requires a decision, confirmed surfaces time-sensitive actions (Message, Get Directions). The distinction matters.",
      "Geolocation gym matching and wearable sync deferred to V2 — both would have required the UI to promise functionality that doesn't exist yet. Scoping to what's designable and buildable made the product honest.",
    ],
    outcome:
      "Spotter is a fully designed social product that resolves competing priorities — matching logic, safety, inclusivity, and conversion — into a single coherent system. The onboarding flow, match card, scheduling feature, and safety patterns are all realized end-to-end. The design has a clear point of view about what this product is and exactly who it's for.",
    nextSteps: [
      "Gym geolocation matching via Google Maps API to surface nearby-gym compatibility",
      "Wearable data integration (Apple Watch / Garmin) for verified, dynamic training stats",
      "AI compatibility scoring using logged workout history to improve match quality over time",
    ],
    links: [
      {
        label: "View Live App",
        url: "https://spotter-seven-pink.vercel.app",
        description: "Deployed web build of the Spotter product design",
        primary: true,
      },
      {
        label: "GitHub Repository",
        url: "https://github.com/jasmineblackdev",
        description: "Source code and project structure",
        primary: false,
      },
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
    tagline: "AI design direction tool — strategy, not just aesthetics",
    role: "UX Designer, Product Designer",
    platform: "Web Software (SaaS)",
    timeline: "3 weeks",
    tools: "Figma",
    subtitle: "AI-powered design ideation software",
    image: artifexImg,
    slug: "artifex",
    overview:
      "Artifex turns a structured project brief into three named design directions — each with a color system, typography pairing, and written strategic rationale — in minutes. It's built for designers and founders who need to establish visual direction fast without mood board rabbit holes, random AI image outputs, or expensive brand agency retainers. The output is formatted for immediate use in a Figma file or client presentation.",
    problem:
      "Early-stage visual direction is broken for most product teams. AI image generators produce aesthetically random results with no strategic logic. Mood boards take hours and are hard to present. The output of both — disconnected visuals — doesn't tell you why a direction is right for your product. The result is decision paralysis, expensive consultants, or just picking whatever looks good this week and regretting it during the next design review.",
    users:
      "Early-stage product designers and founders who need fast, defensible visual direction decisions. Design agencies running initial discovery. Creative leads exploring multiple directions before committing to a full brand system. The common thread: they need to move quickly and they need to be able to explain why.",
    goals: [
      "Turn a structured project brief into 3 strategic design directions with clear rationale — not random AI imagery",
      "Make the input flow feel fast and structured, eliminating blank-page anxiety without exposing prompt engineering",
      "Design the product's own visual identity as a portfolio piece — it must demonstrate the quality it claims to produce",
      "Output format must be usable in a client presentation the day it's generated, not just visually interesting",
    ],
    constraints: [
      "Output capped at exactly 3 directions — more recreates the creative paralysis the product exists to solve",
      "No free-text prompt fields — guided input only to ensure consistent, high-quality output regardless of user skill",
      "Desktop-first SaaS layout — export functionality and presentation-readiness built into the design from the start",
      "3-week timeline — Figma plugin integration and live OpenAI backend deferred to V2",
    ],
    myRole:
      "Led UX design and product strategy. Defined the core user flow, designed the input/output system, and established the visual design language for the product itself — which needed to demonstrate the quality it claimed to produce.",
    solution:
      "A SaaS web application where a guided brief input (industry, audience, tone, platform) feeds an AI generation engine that returns exactly three named design directions — Bold, Refined, Experimental — each with a complete system: color palette, typography pairing, descriptive tags, and a written strategic rationale. The output is formatted for immediate use in a client presentation or Figma file, not just a screenshot to screenshot.",
    designApproach: [
      "Started with the output card, not the input form. Designed what a complete, immediately-usable design direction looks like before building anything that generates it. If the output can't go straight into a client deck, the product fails regardless of how smart the AI is.",
      "Explored free-text prompt input versus guided structured questions. Guided won — it constrains outputs for consistent quality, removes blank-page anxiety for less experienced users, and means the product works the same way every time regardless of prompt-writing skill.",
      "Tested two, three, four, and five directions in layout explorations. Three mirrors how creative directors naturally present options — enough specificity to be useful, few enough to force a decision. Five created the same paralysis the product was built to solve.",
      "Designed the product's interface to demonstrate the quality it claims to produce. A tool that promises to help you establish visual credibility cannot have mediocre UI. The product is simultaneously a tool and a proof of concept.",
    ],
    designRationale: [
      "Three named directions always — 'Bold / Refined / Experimental' as named archetypes gives users a framework for discussing direction, not just scrolling and picking. The naming does strategic work.",
      "Each direction card includes a written rationale paragraph — this is the core differentiator. Knowing why a direction is right for your product is more valuable than knowing what it looks like.",
      "Pill selectors for Industry and Platform Type instead of free-text — removes blank-page anxiety, constrains inputs for consistent outputs, and makes the brief feel fast to complete.",
      "Ghost CTA ('View Example Output') sits at lower visual weight than the primary — hierarchy is explicit: act first, explore second. No competition between the two paths.",
    ],
    decisions: [
      "Guided structured input over free-text prompt — the product takes the prompt-engineering expertise burden off the user. Quality outputs shouldn't require knowing how to write a good AI prompt.",
      "Exactly three directions — tested more, landed on three. The constraint is the product. Unlimited generation recreates the decision fatigue Artifex exists to eliminate.",
      "Written strategic rationale in every direction card — this is what separates Artifex from a mood board generator. Designers need to defend their direction choices. The rationale card gives them the language to do it.",
      "Product UI is intentionally design-forward — a design direction tool with weak visual design is self-refuting. The interface had to practice what the product preaches.",
    ],
    outcome:
      "Artifex is a fully realized SaaS product — brief input flow, three-direction output system, and a product identity that practices what it preaches. The design shows the ability to work with AI-powered products: structuring inputs for consistent outputs, making AI results immediately actionable, and building around the real user workflow rather than the technology. It is a portfolio piece and a proof of concept simultaneously.",
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
    links: [
      {
        label: "View Live App",
        url: "https://artifex-umber.vercel.app",
        description: "Deployed web build of the Artifex product design",
        primary: true,
      },
      {
        label: "GitHub Repository",
        url: "https://github.com/jasmineblackdev",
        description: "Source code and project structure",
        primary: false,
      },
    ],
  },
};

export const slugs = Object.keys(caseStudyDetails);
