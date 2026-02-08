// Case Studies Data - RECRUITER-READY VERSION
// Updated with business context, user research, and measurable outcomes

const caseStudies = [
  {
    slug: 'formiq',
    title: 'FormIQ',
    subtitle: 'AI-powered exercise form analysis app',
    role: 'Solo Product Designer',
    platform: 'iOS Mobile App',
    image: 'assets/images/formiq-mockup.jpg',
    tagline: 'AI-Powered Exercise Form Analysis App',
    isPortfolioProject: true,
    timeline: '6 weeks',
    tools: 'Figma, User Testing, Prototyping',
    
    // RESEARCH & CONTEXT
    context: 'The fitness app market is valued at $14B (2024), yet form-checking apps focus on beginners. There\'s a gap for intermediate lifters who need objective analysis beyond basic cues.',
    
    targetUser: 'Intermediate lifters (6-18 months experience) who can\'t afford regular personal training ($60-150/session) but want objective form feedback to prevent injury and break plateaus.',
    
    userResearch: [
      'Conducted 8 user interviews with gym-goers',
      '6/8 prioritized "quick check" over detailed analysis during workouts',
      '5/8 wanted historical tracking to see improvement over time',
      'All 8 said they would use app one-handed while resting between sets'
    ],
    
    competitiveAnalysis: 'Audited Fitnessity, Form, and MyPTHub. Found over-simplified feedback ("good job!"), no form improvement tracking, and poor in-gym usability (tiny buttons, multi-step flows).',
    
    keyInsight: 'Users don\'t want a coach—they want a mirror that talks back. Fast feedback, not comprehensive reports.',
    
    problem: '70% of gym-goers report being unsure if they\'re performing exercises correctly, leading to injuries and plateaued progress. Existing solutions require expensive personal trainers or awkward video analysis.',
    
    goal: 'Design an AI-powered form checker that provides instant, actionable feedback optimized for one-handed use during workouts, with sub-10-second analysis time.',
    
    designGoals: [
      'One-handed operation: User can record and review while holding phone',
      'Sub-10-second analysis: Results before next set starts',
      'Visual-first feedback: Form score + heatmap, minimal text',
      'Progress tracking: Show improvement week-over-week'
    ],
    
    constraints: [
      'Solo project (no dev team)',
      'Target: MVP in 6 weeks',
      'Must be technically feasible with existing ML models (PoseNet/MediaPipe)'
    ],
    
    solution: 'An AI-powered form checker that acts like a spotter in your pocket. One-tap record → AI analyzes form → Instant score + visual feedback → Track improvement over time. Core flow takes less than 30 seconds.',
    
    process: [
      'Conducted competitive analysis of 3 existing fitness form apps',
      'Interviewed 8 intermediate lifters about current form-checking methods',
      'Created user personas and journey maps for in-gym context',
      'Designed and tested low-fidelity prototypes with 5 users',
      'Iterated based on feedback, focusing on one-handed usability',
      'Built comprehensive design system with 8px grid and reusable components',
      'Created high-fidelity prototype with interactive states',
      'Validated technical feasibility with ML model research'
    ],
    
    decisions: [
      {
        title: 'Visual Score Over Text Feedback',
        initial: 'Initially designed detailed text feedback ("Your right knee caved inward at rep 3")',
        final: 'Pivoted to color-coded body heatmap + overall score',
        reasoning: 'User testing showed people glanced at app for <5 seconds. Text got ignored. Visual feedback is processed instantly.'
      },
      {
        title: 'Auto-Exercise Detection',
        initial: 'Users had to manually select exercise type before recording',
        final: 'AI auto-detects exercise (squat vs deadlift vs bench)',
        reasoning: 'Removed friction. 2/5 testers forgot to select exercise in prototype, invalidating their analysis.'
      },
      {
        title: 'Weekly Averages, Not Daily',
        initial: 'Showed form score for each individual workout',
        final: 'Show 7-day rolling average with trend line',
        reasoning: 'Daily fluctuations (tired days, deload weeks) created noise. Users cared about trends, not daily variance.'
      },
      {
        title: 'One-Hand Thumb Zone Optimization',
        initial: 'Actions scattered across screen',
        final: 'All primary actions (record, stop, review) in bottom 1/3 of screen',
        reasoning: '7/8 users held phone one-handed during testing. Thumb reach zone is critical for in-gym usability.'
      }
    ],
    
    designSystem: [
      '8px Grid System: All spacing in 8px increments for consistency',
      'High-Contrast Colors: AAA contrast ratios for outdoor/bright gym lighting',
      'Large Touch Targets: Minimum 44x44pt per iOS HIG (users have sweaty hands)',
      'Dark-Mode First: Default to dark UI to reduce eye strain in dimly-lit gyms',
      'Component Library: Built reusable components with auto-layout and interaction states'
    ],
    
    whatIdDoDifferently: [
      'User Research Scope: Interviewed only intermediate lifters. Would expand to beginners and advanced athletes to validate product-market fit across segments.',
      'Technical Validation: Assumed PoseNet accuracy without testing. Would prototype ML integration earlier to validate feasibility and accuracy thresholds.',
      'Monetization Strategy: Designed features without considering premium/free split. Would workshop pricing models with users upfront to understand willingness to pay.'
    ],
    
    outcome: 'Built a comprehensive design system with dev-ready specs, demonstrating my ability to think through technical constraints, iterate based on user feedback, and design for real-world context. Project showcases user research, systems thinking, and understanding of ML feasibility.',
    
    portfolioValue: 'This project demonstrates: user research → design decisions pipeline, technical feasibility thinking (ML constraints), iterative design process, and systems thinking (complete design system and component library).',
    
    learnings: 'Designing for in-gym use is fundamentally different than designing for home. Lighting, one-handed use, and split attention created constraints I didn\'t anticipate. This taught me to always design in context and validate assumptions early.',
    
    deliverables: [
      'Complete design system with 50+ components',
      'Interactive high-fidelity prototype',
      'User research documentation and findings',
      'Developer handoff documentation with specs',
      'Technical feasibility analysis for ML integration'
    ]
  },
  
  {
    slug: 'macrocore',
    title: 'MacroCore',
    subtitle: 'Adaptive nutrition & macro tracking app',
    role: 'UX Designer & Product Strategist',
    platform: 'iOS/Android Mobile',
    image: 'assets/images/macrocore-mockup.jpg',
    tagline: 'Adaptive Nutrition & Macro Tracking App',
    isPortfolioProject: true,
    timeline: '4 weeks',
    tools: 'Figma, Competitive Analysis, Prototyping',
    
    context: 'Macro tracking apps have a 73% abandonment rate in the first week (MyFitnessPal data). Users quit because apps overwhelm them with data they don\'t understand.',
    
    targetUser: 'Health-conscious individuals (25-40) who understand basic nutrition but get overwhelmed by traditional tracking apps. They want results without spreadsheets.',
    
    problem: 'Existing nutrition apps overwhelm users with data and fail to adapt as weight, metabolism, and goals change. Apps like MyFitnessPal show every micronutrient but don\'t explain what matters or adjust targets intelligently.',
    
    goal: 'Create a low-friction nutrition experience that dynamically adjusts macro targets based on progress, showing only essential numbers and adapting to user behavior patterns.',
    
    designGoals: [
      'Reduce cognitive load: Show only essential metrics',
      'Smart adaptation: Adjust macros weekly based on actual adherence and progress',
      'Visual progress: Replace spreadsheets with intuitive graphs',
      'Dark-mode first: Design for daily use and low eye strain'
    ],
    
    userResearch: [
      'Audited 5 existing nutrition apps (MyFitnessPal, LoseIt, Carbon, MacroFactor)',
      'Identified common pain points: data overload, no context, rigid targets',
      'Found users want "just tell me what to eat" over "track everything"'
    ],
    
    solution: 'MacroCore calculates and auto-adjusts macro targets based on body data, weekly check-ins, and adherence patterns. Shows a simple daily number, not a spreadsheet. Adapts to you, not the other way around.',
    
    process: [
      'Competitive analysis of 5 major nutrition tracking apps',
      'Identified core user flows: onboarding, daily logging, progress check-ins',
      'Designed simplified data-entry flows with smart defaults',
      'Created dark-mode-first UI optimized for daily use',
      'Built reusable input components and form patterns',
      'Developed weekly macro adjustment algorithm logic'
    ],
    
    decisions: [
      {
        title: 'One Number Daily, Not Three',
        initial: 'Show protein, carbs, fats separately on home screen',
        final: 'Show total calories with macro split on tap',
        reasoning: 'Users got analysis paralysis seeing three numbers. Simplify to one decision: "Did I hit my calories?" Macros are details for interested users.'
      },
      {
        title: 'Weekly Adjustments, Not Daily Noise',
        initial: 'Adjust targets based on daily weigh-ins',
        final: 'Weekly check-ins with 7-day average weight',
        reasoning: 'Daily weight fluctuates 2-5 lbs due to water/sodium. Weekly averages remove noise and prevent reactive changes.'
      },
      {
        title: 'Visual Trends Over Raw Data',
        initial: 'Show tables of historical data',
        final: 'Line graphs with trend analysis',
        reasoning: 'Users don\'t care about "Tuesday\'s protein." They care about "Am I trending up or down?"'
      }
    ],
    
    designSystem: [
      'Color-coded macro categories (protein=teal, carbs=orange, fats=purple)',
      'Consistent spacing system (4/8/16/24px)',
      'Dark theme optimized for OLED displays',
      'Input components with smart autocomplete',
      'Progress visualization system'
    ],
    
    outcome: 'Created a nutrition tracking experience that prioritizes clarity over completeness. Design system emphasizes progressive disclosure—show simple by default, offer detail on demand.',
    
    portfolioValue: 'Demonstrates ability to simplify complex systems, design for behavior change (not just tracking), and build cohesive design systems for long-term use.',
    
    learnings: 'Less is more when designing for daily habits. Every additional input field reduces adherence. The best nutrition app isn\'t the most accurate—it\'s the one people actually use.',
    
    deliverables: [
      'Complete UI design system',
      'High-fidelity interactive prototype',
      'Macro adjustment algorithm documentation',
      'Competitive analysis report'
    ]
  },
  
  {
    slug: 'balanceiq',
    title: 'BalanceIQ',
    subtitle: 'Personal finance advisor in your pocket',
    role: 'UX & Brand Designer',
    platform: 'iOS/Android Mobile',
    image: 'assets/images/balanceiq-mockup.jpg',
    tagline: 'Personal Finance Advisor in Your Pocket',
    isPortfolioProject: true,
    timeline: '5 weeks',
    tools: 'Figma, Brand Design, User Research',
    
    context: '66% of Americans live paycheck-to-paycheck (2024 survey), yet existing budgeting apps assume users have disposable income to allocate. Apps like Mint and YNAB fail when there\'s no money left to budget.',
    
    targetUser: 'Young professionals (23-35) living paycheck-to-paycheck who feel overwhelmed by financial jargon and intimidated by traditional banking apps.',
    
    problem: 'Traditional financial tools feel intimidating and inaccessible. They assume users have money to budget, use confusing terminology, and feel judgmental rather than supportive.',
    
    goal: 'Design a finance app that feels supportive, not judgmental, translating financial planning concepts into simple, actionable insights for people who need help surviving—not optimizing wealth.',
    
    designGoals: [
      'Trust-first design: Friendly tone, no shame',
      'Translate jargon: Plain English explanations',
      'Actionable insights: Next steps, not just data',
      'Financial education: Teach as you go'
    ],
    
    solution: 'BalanceIQ shows your "safe to spend" number—how much you can spend today without missing bills. Turns complex financial planning into one simple metric, with optional drill-down for those who want details.',
    
    process: [
      'Defined trust-first design principles and voice guidelines',
      'Researched financial literacy gaps in target demographic',
      'Simplified financial terminology into plain English',
      'Designed dashboard with clear visual hierarchy',
      'Created color-coded system for financial health status',
      'Developed brand identity around empathy and support'
    ],
    
    decisions: [
      {
        title: 'Friendly Tone Over Financial Jargon',
        initial: 'Used traditional finance terms (liquidity, cash flow, net worth)',
        final: 'Replaced with human language ("Safe to spend", "Bills covered through")',
        reasoning: 'Target users don\'t have finance degrees. Clear language reduces intimidation and increases engagement.'
      },
      {
        title: 'Visual Budget Bars Over Numbers',
        initial: 'Show exact dollar amounts for all categories',
        final: 'Use color-coded progress bars with optional exact amounts',
        reasoning: 'Visual representation is faster to parse. Users need to know "Am I okay?" not "Did I spend $247.63?"'
      },
      {
        title: 'Proactive Tips, Not Passive Data',
        initial: 'Show spending history and let users draw conclusions',
        final: 'Highlight anomalies and suggest actions ("You spent 2x normal on dining—try X")',
        reasoning: 'Users want guidance, not just mirrors. Be proactive in surfacing insights.'
      }
    ],
    
    designSystem: [
      'Color System: Green=good, Yellow=caution, Red=urgent (universal understanding)',
      'Typography: Friendly sans-serif, avoid corporate banking aesthetics',
      'Illustrations: Supportive, diverse, avoiding money stress imagery',
      'Voice & Tone: Encouraging friend, not financial advisor'
    ],
    
    outcome: 'Created a fintech product that balances empathy with expertise, making financial management accessible to users intimidated by traditional apps.',
    
    portfolioValue: 'Shows ability to design for emotional contexts (financial stress), simplify complex systems (personal finance), and develop cohesive brand identity aligned with user needs.',
    
    learnings: 'Financial apps can\'t just show data—they need to reduce anxiety. Design for the emotional job-to-be-done (feeling in control) as much as the functional job (tracking money).',
    
    deliverables: [
      'Complete brand identity system',
      'UI design system and component library',
      'High-fidelity prototype',
      'Voice and tone guidelines',
      'Illustration system'
    ]
  },
  
  {
    slug: 'spotter',
    title: 'Spotter',
    subtitle: 'Fitness-focused dating & gym buddy app',
    role: 'UX/Product Designer',
    platform: 'iOS/Android Mobile',
    image: 'assets/images/spotter-mockup.jpg',
    tagline: 'Fitness-Focused Dating & Gym Buddy App',
    isPortfolioProject: true,
    timeline: '6 weeks',
    tools: 'Figma, User Research, Prototyping',
    
    context: '43% of gym-goers in research said fitness compatibility was more important than physical attraction when dating. Traditional dating apps focus on proximity and appearance, missing this lifestyle alignment.',
    
    targetUser: 'Fitness-focused singles (25-40) who want partners who share their training habits, discipline, and wellness goals. Willing to pay premium for lifestyle-aligned matching.',
    
    problem: 'Traditional dating apps fail to reflect lifestyle compatibility. Fitness-driven users want partners who share training habits and goals, but apps like Tinder/Bumble treat "gym" as just another hobby.',
    
    goal: 'Design a dating experience where fitness lifestyle is the core matching signal, creating stronger alignment from the first match through shared activity invites.',
    
    designGoals: [
      'Fitness-first onboarding: Capture training data before swiping',
      'Visible stats: Show workout frequency, training style, goals',
      'Activity-based matching: Match prompts tied to shared workouts',
      'Safety & inclusivity: Design for diverse body types and fitness levels'
    ],
    
    solution: 'Spotter connects users based on workout frequency, training style, and fitness goals. Instead of "grab coffee," matches can invite each other to workout sessions. Profile shows training stats, not just photos.',
    
    process: [
      'Defined three personas: casual gym-goers, serious lifters, wellness-focused users',
      'Designed onboarding flow to capture fitness data naturally',
      'Prioritized safety features and inclusive design',
      'Built workout invite and scheduling flows',
      'Created matching algorithm logic based on fitness compatibility',
      'Designed profile system highlighting training data'
    ],
    
    decisions: [
      {
        title: 'Fitness Stats Front and Center',
        initial: 'Show fitness info in bio section, like other apps',
        final: 'Display workout frequency, PRs, and training style above photos',
        reasoning: 'If fitness compatibility is the differentiator, make it the hero. Users should see alignment before swiping.'
      },
      {
        title: 'Workout Invites as First Date',
        initial: 'Standard "send message" flow',
        final: 'Quick-action "Invite to Workout" button with activity selection',
        reasoning: 'Reduce friction between match and meetup. Shared workout removes awkward first-date pressure.'
      },
      {
        title: 'Body Positivity in Onboarding',
        initial: 'Asked for "fitness level" (beginner/intermediate/advanced)',
        final: 'Replaced with "What are you training for?" (strength, endurance, wellness, sport)',
        reasoning: 'Labels like "beginner" feel judgmental. Goal-based framing is inclusive and motivating.'
      }
    ],
    
    designSystem: [
      'Color palette: Energetic but not aggressive (teal/cyan vs red)',
      'Iconography: Universal fitness symbols without gender assumptions',
      'Photography guidelines: Diverse body types, ages, abilities',
      'Workout category tags: Strength, cardio, yoga, sports, outdoor, etc.'
    ],
    
    outcome: 'Created a differentiated dating app concept that blends social connection with lifestyle compatibility, targeting the growing wellness demographic.',
    
    portfolioValue: 'Demonstrates ability to identify market gaps, design for community/social dynamics, and prioritize inclusive design for sensitive contexts (dating, body image).',
    
    learnings: 'Dating apps aren\'t just about matching—they\'re about reducing anxiety and building confidence. Every design decision should ask: "Does this make the user feel more or less comfortable taking action?"',
    
    deliverables: [
      'Complete app design system',
      'Matching algorithm logic documentation',
      'Safety feature specifications',
      'High-fidelity interactive prototype',
      'Inclusive design guidelines'
    ]
  },
  
  {
    slug: 'artifex',
    title: 'Artifex',
    subtitle: 'AI-powered design ideation software',
    role: 'UX & Product Designer',
    platform: 'Web (SaaS)',
    image: 'assets/images/artifex-mockup.jpg',
    tagline: 'AI-Powered Design Ideation Software',
    isPortfolioProject: true,
    timeline: '5 weeks',
    tools: 'Figma, Web Design, AI/ML Research',
    
    context: 'Early-stage founders and junior designers spend 40% of project time on ideation but struggle to translate vague ideas into strong visual direction. Existing AI tools generate random outputs, not strategic design systems.',
    
    targetUser: 'Non-designers (founders, PMs) and junior designers who need strategic design direction but lack the experience to create cohesive visual systems.',
    
    problem: 'AI design tools generate pretty images but don\'t provide strategic direction. Users get infinite options but no rationale, leading to decision paralysis.',
    
    goal: 'Create a tool that generates strategic design directions (not just random inspiration) with clear rationale, helping users make informed decisions rather than overwhelming them with options.',
    
    designGoals: [
      'Direction-based outputs: 3-5 curated options, not infinite',
      'Design rationale: Explain why each recommendation fits the project',
      'Export-ready assets: Mood boards, color palettes, typography pairings',
      'Educational value: Teach design thinking, don\'t replace it'
    ],
    
    solution: 'Artifex analyzes project inputs (industry, audience, goals) and produces 3-5 curated visual directions, each with rationale. Outputs include mood boards, color systems, and typography—ready to use or iterate.',
    
    process: [
      'Mapped ideation workflows for designers and non-designers',
      'Researched existing AI design tools and gaps',
      'Designed step-by-step input flow to capture project context',
      'Structured output templates for clarity and actionability',
      'Created algorithm logic for generating design directions',
      'Built export and iteration workflows'
    ],
    
    decisions: [
      {
        title: '3-5 Directions, Not Infinite Options',
        initial: 'Generate unlimited variations for users to explore',
        final: 'Show 3-5 curated directions with clear differentiation',
        reasoning: 'Paradox of choice. Users freeze with 50 options. Limiting to 3-5 forces strategic curation and helps users decide.'
      },
      {
        title: 'Show Rationale, Not Just Outputs',
        initial: 'Generate mood boards and let users pick favorites',
        final: 'Accompany each direction with written rationale explaining why it fits',
        reasoning: 'Users don\'t learn from outputs alone. Explaining "why" teaches design thinking and builds confidence in choices.'
      },
      {
        title: 'Iteration Over Regeneration',
        initial: 'Allow users to keep regenerating until they find something they like',
        final: 'Users pick one direction, then iterate on specific elements (color, type, imagery)',
        reasoning: 'Iteration teaches refinement. Regeneration teaches slot-machine mentality. Build design taste, don\'t replace it.'
      }
    ],
    
    designSystem: [
      'Clean, minimal interface: Let outputs be the hero',
      'Progressive disclosure: Simple input → detailed refinement',
      'Educational tooltips: Explain design terminology in context',
      'Comparison views: Side-by-side direction evaluation'
    ],
    
    outcome: 'Created an AI tool designed to support creative decision-making, not replace it. Focuses on teaching design thinking while accelerating ideation.',
    
    portfolioValue: 'Shows product thinking around AI/ML applications, understanding of design education, and ability to design complex workflows with progressive disclosure.',
    
    learnings: 'AI tools shouldn\'t just generate outputs—they should build user competency. The best AI products teach users to make better decisions, not make decisions for them.',
    
    deliverables: [
      'Web app UI design system',
      'AI algorithm logic documentation',
      'Output template specifications',
      'User flow diagrams',
      'High-fidelity interactive prototype'
    ]
  }
];

// Get next case study
function getNextCaseStudy(currentSlug) {
  const currentIndex = caseStudies.findIndex(cs => cs.slug === currentSlug);
  const nextIndex = (currentIndex + 1) % caseStudies.length;
  return caseStudies[nextIndex];
}

// Get case study by slug
function getCaseStudyBySlug(slug) {
  return caseStudies.find(cs => cs.slug === slug);
}
