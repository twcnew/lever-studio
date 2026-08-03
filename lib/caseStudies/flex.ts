import type { CaseStudy } from "./types";

export const flexCaseStudy: CaseStudy = {
  slug: "flex",
  logoId: "flex",
  company: "FlexAI",
  shortName: "Flex",
  companyDescription:
    "FlexAI is a Paris-based AI infrastructure company. Its platform simplifies access to GPU compute so ML teams can train and deploy models without managing hardware. Seed-funded ($30M, April 2024), founded by former Nvidia engineers.",
  websiteUrl: "https://flex.ai",
  industry: "AI infrastructure / GPU software",
  headquarters: "Paris, France",
  brandColor: "#002A9E",
  heroHeadline:
    "How FlexAI books meetings with the ML teams that actually train models",
  heroImage: {
    src: "/case-studies/flex-hero.jpg",
    alt: "FlexAI wordmark in textured blue paint on white.",
  },
  sideNavImage: {
    src: "/case-studies/flex-side-nav.jpg",
    alt: "FlexAI F mark in textured blue paint on white.",
  },
  heroMetrics: [
    {
      value: "12+",
      label: "qualified meetings / week with ML & infra buyers",
      variant: "violet",
    },
    {
      value: "3×",
      label: "reply rate vs generic outbound on technical personas",
      variant: "violet",
    },
    {
      value: "<24h",
      label: "from buying signal → personalized sequence live",
      variant: "violet",
    },
  ],
  heroQuote:
    "I rebuilt FlexAI’s outbound around real buying signals — job posts, GitHub activity, Hugging Face deploys, LinkedIn pain — so Sales only talks to teams that train models, not API wrappers.",
  intro: [
    "FlexAI sells GPU software to a tiny slice of the AI market: startups and scale-ups with teams that actually train and fine-tune models. Most “AI companies” are API wrappers on OpenAI or Anthropic. They don’t need training infra. Early-stage teams that do train often burn free AWS, GCP, or Azure credits first. FlexAI also needs clients who can bring compatible custom images — another filter that shrinks the pool.",
    "I joined an early-stage infra company still stabilizing product and GTM. With Stéphane (Director of RevOps) and Sébastien (Director of Sales) I co-built the strategy, then owned the ops: every workflow, campaign, and piece of copy. The stack: Clay, n8n, Lemlist, Surfe, TheirStack, HubSpot — after migrating off Cargo and La Growth Machine.",
  ],
  featuredQuote: {
    text: "We finally reach technical buyers with custom playbooks — we experiment fast and scale what converts, without generic templates.",
    author: "Stéphane Roy",
    role: "Director of GTM",
    avatarSrc: "/testimonials/stephane-roy-flex.png?v=11",
  },
  heroPopoverQuote:
    "We finally reach **technical buyers** with custom playbooks — we experiment fast and scale what converts, without generic templates.",
  proofMetric: {
    value: "12+",
    label: "qualified meetings / week (ML & infra)",
  },
  impactHighlights: [
    "**12+** qualified meetings / week with ML engineers, MLOps, and infra buyers",
    "**3×** reply rate vs generic outbound on technical personas",
    "Buying signal → personalized Lemlist sequence live in **under 24 hours**",
    "**25k** ICP accounts tiered and campaign-ready (from an 80k TAM map)",
    "**~70%** of outbound volume from always-on signal engines",
    "**4** simultaneous always-on plays: jobs, GitHub, Hugging Face, LinkedIn",
  ],
  problem: {
    title: "The problem",
    titleAccent: "problem",
    body: [
      "The addressable market is surgical. Hit the wrong companies and you burn SDR time on teams that will never buy GPU infra. Hit the right ones too late and a hyperscaler credit package or a competitor already owns the conversation.",
      "Generic outbound and bought lists don’t surface intent. Job posts for ML engineers, stars on Unsloth or DeepSpeed, new Hugging Face model drops, LinkedIn rants about GPU quotas — those signals do. FlexAI needed a signal-based engine, not one more Lemlist template.",
    ],
  },
  solution: {
    title: "The solution",
    titleAccent: "solution",
    body: [
      "I mapped a global TAM of companies with AI/ML talent, then built a qualification and tiering layer down to 25k campaign-ready accounts. Tier 1–2 for always-on outbound; Tier 3 for a dedicated Top Accounts ABM playbook.",
      "On top of that universe I shipped always-on plays: job posting intake, GitHub repo signals, Hugging Face publish tracking, LinkedIn social listening, HubSpot nurture, event scrapes, and lookalike expansion — all wired through Clay, enrichment, and Lemlist.",
      "We didn’t wait for perfect product maturity to build GTM. We built systems that stay ready to scale when onboarding and reliability catch up.",
    ],
  },
  useCases: [
    {
      number: "01",
      title: "TAM mapped, then cut to 25k accounts Sales can work",
      titleAccent: "25k accounts",
      navLabel: "TAM & tiers",
      body: [
        "I mapped every company globally with at least one AI/ML engineer, NLP engineer, computer vision specialist, MLOps profile, or data scientist — about 80,000 companies. A qualification and tiering tool narrowed that to 25,000 segmented, campaign-ready targets.",
        "Tier 1: early-stage ($2–5M ARR), small ML teams, fault-tolerant markets. Tier 2: $2–20M ARR, production training/inference outside critical paths. Tier 3: $20M+ ARR, larger ML teams, regulated industries — with a dedicated Top Accounts ABM playbook.",
      ],
      bullets: [
        "80k TAM → 25k tiered ICP accounts",
        "Tier 1–2 for always-on volume; Tier 3 for ABM",
        "Account lists Sales and RevOps could actually work",
      ],
      visual: {
        src: "/case-studies/flex-use-case-01-tam.jpg",
        alt: "Hand-drawn TAM funnel: ~80,000 global companies down to ~25,000 tiered ICP accounts across Tier 1, 2, and 3.",
        caption: "TAM to tiered ICP",
      },
    },
    {
      number: "02",
      title: "An always-on engine on every AI job post that matters",
      titleAccent: "always-on engine",
      navLabel: "Job engine",
      body: [
        "A daily TheirStack webhook pulled roughly 300 AI, ML, and infra engineering job posts worldwide. Each posting triggered a filter on industry, whether AI was core to the product, and tech-stack fit.",
        "For ICP matches I identified decision-makers and AI-team colleagues with Surfe and Clay, hit about 80% lead coverage by cross-referencing sources, and pushed them into Lemlist with custom always-on copy. Started US-first, then scaled globally.",
      ],
      bullets: [
        "~300 job posts ingested per day",
        "~80% lead coverage on ICP-fit companies",
        "US → global always-on Lemlist campaigns",
      ],
      visual: {
        src: "/case-studies/flex-use-case-02-jobs.jpg",
        alt: "Hand-drawn flow: job post → filter → enrich → Lemlist campaign.",
        caption: "Always-on job posting engine",
      },
    },
    {
      number: "03",
      title: "GitHub stars and forks as buying intent",
      titleAccent: "buying intent",
      navLabel: "GitHub signals",
      body: [
        "I monitored stars and forks on the repos ML engineers use when they fine-tune and optimize training: Hugging Face Transformers, PEFT, Axolotl, Unsloth, QLoRA, DeepSpeed, Lightning AI.",
        "When someone engaged — especially on infra-heavy tools like Unsloth or QLoRA — I scraped the profile, enriched the company in Clay, and used the exact repo as the outbound opener. Surgical targeting: people forking PEFT are already in compute-intensive workflows.",
      ],
      bullets: [
        "Always-on watch on high-signal ML / training repos",
        "Repo activity → personalized Lemlist opener",
        "Clay enrichment before outreach",
      ],
      visual: {
        src: "/case-studies/flex-use-case-03-github.jpg",
        alt: "Hand-drawn flow: GitHub signal → profile scrape → personalized opener.",
        caption: "Signal-based GitHub campaigns",
      },
    },
    {
      number: "04",
      title: "Hugging Face publishers as high-intent accounts",
      titleAccent: "high-intent accounts",
      navLabel: "Hugging Face",
      body: [
        "I scraped Hugging Face for organizations that regularly publish new models. Frequent publish cycles beat a one-shot export — Hugging Face caps exports, so the system ran short, repeated pulls.",
        "Companies that keep shipping models signal technical maturity and ongoing compute need. Exactly the FlexAI profile.",
      ],
      bullets: [
        "Repeated scrapes past the 3k-row export limit",
        "Orgs with recurring model deploys prioritized",
        "Feeds the same enrichment → Lemlist path",
      ],
      visual: {
        alt: "BRIEF: Hugging Face org → model publish cadence → ICP queue. Accent #002A9E.",
        caption: "Model deployment tracking",
      },
    },
    {
      number: "05",
      title: "LinkedIn listening on real GPU pain",
      titleAccent: "GPU pain",
      navLabel: "LinkedIn listening",
      body: [
        "Daily monitoring caught high-value posts where prospects vented about hyperscalers, GPU quotas, or competitor limits. Engineering colleagues flagged posts too.",
        "Browser extensions pulled everyone who liked, commented, or shared. Campaigns opened on that specific pain. Same motion on competitor posts from RunPod, Together AI, and Groq — engineers already shopping alternatives.",
      ],
      bullets: [
        "Pain-point and competitor-engagement targeting",
        "Engagers extracted into Clay → Lemlist fast",
        "Openers tied to the exact post or competitor",
      ],
      visual: {
        alt: "BRIEF: LinkedIn post → engagers list → pain-based sequence. Accent #002A9E. No real profile data.",
        caption: "Social listening & engagement targeting",
      },
    },
    {
      number: "06",
      title: "Nurture old interest and turn events into pipeline",
      titleAccent: "into pipeline",
      navLabel: "Nurture & events",
      body: [
        "I pulled every HubSpot lead who had ever replied to a prior campaign and launched multi-touch re-engagement: typically four emails plus LinkedIn, acknowledging past interest and repositioning FlexAI’s evolved product.",
        "For TechCrunch, Web Summit, AI Collective, Adopt AI and similar, I scraped attendee and speaker lists, enriched for ICP fit, and ran event-specific copy. At Web Summit Lisbon I was on-site at the booth with Stéphane, turning outreach into face-to-face conversations.",
      ],
      bullets: [
        "HubSpot responders re-activated with multi-touch sequences",
        "Full event lists scraped and ICP-filtered in Clay",
        "Online → booth conversion at Web Summit",
      ],
      visual: {
        alt: "BRIEF: Dual panel — nurture sequence + event attendee → booth. Accent #002A9E.",
        caption: "Nurture and event outreach",
      },
    },
    {
      number: "07",
      title: "Lookalikes and AI SDRs to scale what worked",
      titleAccent: "to scale",
      navLabel: "Lookalike & scale",
      body: [
        "Ocean.io lookalikes mirrored existing customers with industry-specific blueprints. Always-on lookalike runs also fired when new SQLs landed in the CRM.",
        "Later I plugged in 11x.ai so AI SDRs could expand capacity on proven plays without rewriting the whole system.",
      ],
      bullets: [
        "Customer lookalikes via Ocean.io blueprints",
        "SQL-triggered always-on expansion",
        "11x.ai layered on top of proven sequences",
      ],
      visual: {
        alt: "BRIEF: Customer → lookalike graph + AI SDR capacity layer. Accent #002A9E.",
        caption: "Lookalike and scale layer",
      },
    },
  ],
  impact: {
    title: "Impact",
    titleAccent: "Impact",
    body: [
      "FlexAI’s outbound stopped guessing at “AI companies.” It chases teams with real training workloads, using signals Sales can trust.",
      "The motion books **12+** qualified meetings a week with ML and infra buyers, at roughly **3×** the reply rate of generic outbound, with new signals in sequence inside **24 hours**.",
      "About **70%** of volume now rides always-on engines. The infrastructure is built to scale when product stability and onboarding keep pace — durable systems, not one-off campaigns.",
    ],
    metrics: [
      {
        value: "12+",
        label: "qualified meetings / week with ML & infra buyers",
        variant: "violet",
      },
      {
        value: "3×",
        label: "reply rate vs generic outbound on technical personas",
        variant: "violet",
      },
      {
        value: "<24h",
        label: "from buying signal → personalized sequence live",
        variant: "violet",
      },
    ],
  },
  relatedSlugs: ["swan", "happypal"],
  relatedSubtitle:
    "Discover how other teams build GTM systems tailored to complex products.",
  indexCard: {
    headline:
      "How FlexAI books meetings with the ML teams that actually train models",
  },
  wallSnippet:
    "12+ meetings / week with ML & infra buyers — signal-based outbound, not generic AI lists.",
  seo: {
    title: "FlexAI Case Study — Lever",
    description:
      "How Lever built FlexAI a signal-based GTM engine that books 12+ qualified meetings a week with ML teams that actually train models.",
  },
};
