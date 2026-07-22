import type { CaseStudy } from "./types";

export const swanCaseStudy: CaseStudy = {
  slug: "swan",
  logoId: "swan",
  company: "Swan",
  companyDescription:
    "Swan is a European banking-as-a-service platform. Partners embed accounts, cards, and payments under Swan’s license — GTM runs across Sales & International in Europe.",
  websiteUrl: "https://swan.io",
  industry: "Embedded banking / Fintech B2B",
  headquarters: "Paris, France",
  brandColor: "#D5C9ED",
  heroHeadline: "Swan stopped needing a BDR desk for inbound",
  heroImage: {
    alt: "BRIEF: Soft product/mood shot — Swan lavender dashboard, or a quiet GTM desk with “Talk to an Expert” in frame. No raw Clay UI. Accent #D5C9ED.",
  },
  heroMetrics: [
    {
      value: "~5 people",
      label: "of inbound triage the system now runs",
      variant: "violet",
    },
    {
      value: "17h → <10 min",
      label: "first contact on the hottest leads",
      variant: "violet",
    },
    {
      value: "~0 h/week",
      label: "still spent on manual BDR review",
      variant: "violet",
    },
  ],
  heroQuote:
    "I built the inbound routing so Swan didn’t need a room of people reading every “Talk to an Expert” lead. Hot ones hit AEs in minutes. Everything else gets handled without the noise.",
  intro: [
    "Swan’s best new pipeline still came from the website form: Talk to an Expert. Before anyone booked a call, someone had to open the lead, decide if it was real, and ping the right AE.",
    "That job ate real capacity. When the coverage slipped, leads sat for ~17 hours and AEs got pinged on junk. The problem wasn’t only speed — it was five people’s worth of triage stuck in a queue that shouldn’t have been human.",
  ],
  featuredQuote: {
    text: "Alexis shipped a fully automated lead routing system. AEs only get alerted on genuinely hot leads, and prospects are contacted in minutes.",
    author: "Bastien Roche",
    role: "Senior RevOps",
    avatarSrc: "/testimonials/bastien-roche-swan.png?v=8",
  },
  heroPopoverQuote:
    "Inbound without a BDR desk — **~5 people of triage** in the system, hot leads only.",
  proofMetric: { value: "~5", label: "people of triage automated" },
  impactHighlights: [
    "Inbound triage that used to need ~5 people now runs in production",
    "Hottest leads: ~17 hours to under 10 minutes to first contact",
    "Manual BDR review basically gone (~0 h/week)",
    "~1,700 new people mapped into TAP across 335 companies",
    "Forecast agent still writes the monthly brief without a RevOps hire",
  ],
  problem: {
    title: "The problem",
    body: [
      "I had to take that triage off people’s plates — qualify every inbound lead, route it cleanly, and keep AEs from drowning in noise.",
      "If it only worked while I was watching Clay, it wasn’t done. Docs, ownership, and a path to fix breakage were part of the build.",
    ],
  },
  solution: {
    title: "The solution",
    body: [
      "Each lead goes through validation, enrichment, an ICP score, then a tier. From there it lands in one of four buckets.",
      "Hot leads ping the AE on Slack with a booking link. Decent-but-not-ready get a nurture sequence. Clear no-fits get a polite decline. The rest are logged and left alone.",
      "I shipped it with a maintenance guide so someone else can onboard AEs and debug volume. When a few leads started slipping, I added a light human check for non-TAP — TAP stays fully automatic.",
    ],
  },
  useCases: [
    {
      number: "01",
      title: "Inbound routing that doesn’t need a BDR queue",
      navLabel: "Inbound routing",
      body: [
        "Talk to an Expert used to mean a human read every submission. When that stopped working, first contact blew out to ~17 hours and AEs saw everything.",
        "I built the qualify-and-route flow myself and put it in production — scoring, four buckets, Slack alerts, nurture, decline — plus notes so the team can keep it alive.",
        "The desk that used to absorb ~5 people of triage work is now the system. Top leads move in under 10 minutes. Manual review is basically gone.",
      ],
      bullets: [
        "~5 people of triage capacity in the system",
        "17h → under 10 minutes on hot inbound",
        "Live in production, with a handoff guide",
      ],
      visual: {
        alt: "BRIEF: Clean 4-bucket diagram — hot → AE Slack + booking / nurture / decline / silent log. Light background, accent #D5C9ED. No cluttered Clay UI.",
        caption: "Four-bucket inbound routing",
      },
    },
    {
      number: "02",
      title: "Finding the right people inside TAP accounts",
      navLabel: "TAP enrichment",
      body: [
        "Priority accounts were on the list. The people AEs actually needed — product, C-level, GTM, tech — often weren’t.",
        "I set up enrichment that pulls and sorts contacts by role, with caps so we don’t dump fifty names on every company. Champions for named accounts on demand when an AE asked.",
        "About 1,700 people landed on 335 TAP companies, with phones where we could get them cheap. Enough coverage that AEs stop staring at empty accounts.",
      ],
      bullets: [
        "~1,700 contacts across 335 TAP companies",
        "Role caps so lists stay usable",
        "Champion lists for 10+ named accounts",
      ],
      visual: {
        alt: "BRIEF: Anonymized persona map (Product / C-level / GTM / Tech) or cleaned HubSpot-style contact cards. No real personal data.",
        caption: "TAP persona coverage",
      },
    },
    {
      number: "03",
      title: "A forecast brief that writes itself",
      navLabel: "Forecast agent",
      body: [
        "Weekly forecasting was a manual pile of CRM pulls. Accuracy floated around 65–70%, and shaky deals got noticed late.",
        "I designed an agent setup and shipped the first forecast agent: each month it drops a Notion brief — won / commit / best case by AE and market, coverage, who’s at risk. Julio pushed on the TL;DR and conversion views; I shipped a V2 from that.",
        "The point was boring on purpose: after I left, the report still shows up without hiring a full-time RevOps person to rebuild it every week.",
      ],
      bullets: [
        "Monthly Notion brief from the agent",
        "TL;DR and conversion views from VP Sales feedback",
        "Built to keep running without me",
      ],
      visual: {
        alt: "BRIEF: Notion forecast screenshot with TL;DR visible — blur € figures and AE names if needed. Or a clean mock of the brief.",
        caption: "Forecast agent brief",
      },
      quote: {
        text: "The TL;DR is the strongest part… anyone who reads this report in 30 seconds knows exactly what to do. That’s the right design.",
        author: "Julio Hansoul",
        role: "VP Sales",
      },
    },
  ],
  impact: {
    title: "Impact",
    body: [
      "Inbound doesn’t wait on a triage desk anymore. The system carries about five people’s worth of that work — hot leads to AEs fast, noise filtered, review hours near zero.",
      "TAP accounts have real contacts on them. The forecast brief still lands without a dedicated RevOps seat.",
      "What stuck is the boring part: rules, docs, and a system someone else can run.",
    ],
    quote: {
      text: "Alexis shipped a fully automated lead routing system. AEs only get alerted on genuinely hot leads, and prospects are contacted in minutes.",
      author: "Bastien Roche",
      role: "Senior RevOps",
      avatarSrc: "/testimonials/bastien-roche-swan.png?v=8",
    },
    metrics: [
      {
        value: "~5 people",
        label: "of inbound triage the system now runs",
        variant: "violet",
      },
      {
        value: "17h → <10 min",
        label: "first contact on the hottest leads",
        variant: "violet",
      },
      {
        value: "~1,700",
        label: "new TAP contacts across 335 companies",
        variant: "violet",
      },
    ],
  },
  relatedSlugs: ["flex", "happypal"],
  relatedSubtitle:
    "Other GTM systems built for messy ICPs and real sales teams.",
  indexCard: {
    headline: "Swan stopped needing a BDR desk for inbound",
  },
  wallSnippet:
    "Inbound without a BDR desk — about five people of triage in the system, hot leads only.",
  seo: {
    title: "Swan Case Study — Lever",
    description:
      "How Alexis took Swan’s inbound triage off a BDR desk and into one system — about five people of triage automated, hot leads in minutes.",
  },
};
