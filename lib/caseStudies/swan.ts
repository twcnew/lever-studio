import type { CaseStudy } from "./types";

export const swanCaseStudy: CaseStudy = {
  slug: "swan",
  logoId: "swan",
  company: "Swan",
  companyDescription:
    "Swan is a European banking-as-a-service platform. Partners embed accounts, cards, and payments under Swan’s license. GTM runs across Sales & International in Europe.",
  websiteUrl: "https://swan.io",
  industry: "Embedded banking / Fintech B2B",
  headquarters: "Paris, France",
  brandColor: "#D5C9ED",
  heroHeadline: "Swan stopped needing a BDR desk for inbound",
  heroImage: {
    src: "/case-studies/swan-hero.jpg",
    alt: "Swan wordmark in textured black paint on white.",
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
      value: "1,481",
      label: "FI companies sized for board reporting",
      variant: "violet",
    },
  ],
  heroQuote:
    "I shipped inbound routing so hot leads hit AEs in minutes, then cleaned the data layer, sized markets for leadership, and left forecast and tooling work that still runs without me.",
  intro: [
    "Swan’s best new pipeline still came from Talk to an Expert. Before anyone booked a call, someone had to open the lead, decide if it was real, and ping the right AE. When that coverage slipped, leads sat for ~17 hours.",
    "I shipped the routing system that replaced that desk, then kept going: CRM and TAP coverage AEs could use, board-ready FI market sizing, a health vertical launch list, a forecast agent, and tooling cuts that saved real spend.",
  ],
  featuredQuote: {
    text: "Alexis shipped a fully automated lead routing system. AEs only get alerted on genuinely hot leads, and prospects are contacted in minutes.",
    author: "Bastien Roche",
    role: "Senior RevOps",
    avatarSrc: "/testimonials/bastien-roche-swan.png?v=8",
  },
  heroPopoverQuote:
    "No BDR desk on inbound. About **~5 people of triage** in the system. Plus board-ready market sizing and agents that keep running.",
  proofMetric: { value: "~5", label: "people of triage automated" },
  impactHighlights: [
    "Inbound: **~17h → under 10 min** on hot leads; SLA under 2h hit ~99% after launch",
    "Sample run: **240 leads in, 38 routed** (noise filtered before AEs)",
    "**~1,700** new TAP contacts across 335 companies",
    "**1,481** FI companies sized for board reporting across 4 segments",
    "**49** Compliance-validated health accounts added to TAP",
    "Forecast agent recovers **~8h/week** of senior time; still runs without a RevOps hire",
    "**~37k** wasted enrichment credits/month stopped",
    "Full CRM audit on ~40k records: **2–3 days → ~1h30** with Claude Code",
  ],
  problem: {
    title: "The problem",
    titleAccent: "problem",
    body: [
      "Inbound triage sat on people. The CRM had duplication, missing firmographics, and TAP accounts without the right contacts. Forecasting was a weekly manual pile. Leadership had no defensible FI account universe for board reporting.",
      "I needed systems that qualify and route leads, give AEs usable coverage, produce board-grade lists, and keep running after I left.",
    ],
  },
  solution: {
    title: "The solution",
    titleAccent: "solution",
    body: [
      "I built the inbound qualify-and-route flow first: score every lead, four buckets, Slack for hot ones, nurture or decline for the rest, docs so someone else can own it.",
      "In parallel I cleaned and enriched CRM/TAP data, built FI and health account universes for Marketing and Sales, shipped a monthly forecast agent, and cut dead automation spend while speeding RevOps work with coding tools the team adopted.",
    ],
  },
  useCases: [
    {
      number: "01",
      title: "Inbound routing that doesn’t need a BDR queue",
      titleAccent: "BDR queue",
      navLabel: "Inbound routing",
      body: [
        "Talk to an Expert meant a human read every submission. When that stopped working, first contact blew out to ~17 hours and AEs saw everything.",
        "I built the qualify-and-route flow and put it in production: scoring, four buckets, Slack alerts, nurture, decline, plus a maintenance guide. When a few leads slipped, I added a light human check for non-TAP. TAP stays fully automatic.",
        "Roughly five people’s triage work sits in that system. Top leads move in under **10 minutes**. Manual BDR review is near zero. Post-launch, the under-2h SLA held **~99%** of the time.",
      ],
      bullets: [
        "**17h → under 10 minutes** on hot inbound",
        "SLA under 2h hit **~99%** after launch",
        "Sample: **240 in → 38 routed** across four buckets",
      ],
      visual: {
        alt: "BRIEF: Clean 4-bucket diagram — hot → AE Slack + booking / nurture / decline / silent log. Light background, accent #D5C9ED.",
        caption: "Four-bucket inbound routing",
      },
    },
    {
      number: "02",
      title: "CRM hygiene and TAP contacts AEs can use",
      titleAccent: "AEs can use",
      navLabel: "CRM & TAP",
      body: [
        "HubSpot had real debt: heavy duplication, missing industry data, ownership gaps. Priority TAP accounts were on the list; the people AEs needed often weren’t.",
        "I ran a full CRM audit, deduped and enriched records with an action log, then built persona enrichment for TAP with role caps so lists stay usable. On demand I pulled champion lists for named accounts. A Dreamdata cross-check also flagged hundreds of Tier-0 companies outside pipeline tracking.",
        "About 1,700 people landed on 335 TAP companies, with phones where we could get them cheap. AEs stopped staring at empty accounts.",
      ],
      bullets: [
        "~1,700 contacts across 335 TAP companies",
        "CRM audit surfaced thousands of missing industries, hard bounces, and ownership gaps",
        "Champion lists for 10+ named accounts on demand",
      ],
      visual: {
        alt: "BRIEF: Anonymized persona map (Product / C-level / GTM / Tech) or cleaned HubSpot-style contact cards. No real personal data.",
        caption: "TAP persona coverage",
      },
    },
    {
      number: "03",
      title: "FI market sizing leadership could take to the board",
      titleAccent: "to the board",
      navLabel: "FI market sizing",
      body: [
        "Marketing needed a board-ready count for Financial Institutions. An early list was judged not exhaustive enough. No consolidated universe existed across neobanks, lending, insurance card issuers, and legacy/foreign banks.",
        "I cross-referenced the EBA licensing register with HubSpot and web research across four sub-segments, ran cleaning passes, and documented every exclusion category so the number would hold up to scrutiny.",
        "Final count: 1,481 qualified companies (722 / 239 / 398 / 122), with 302 exclusions logged by reason. That dataset became the reference behind Swan’s FI target-account work.",
      ],
      bullets: [
        "1,481 companies across 4 FI segments",
        "302 exclusions documented with reasons",
        "Built for board / market-sizing reporting",
      ],
      visual: {
        alt: "BRIEF: Clean four-segment market-sizing diagram or table mock (Neobanks / Lending / Insurance / Legacy banks) with 1,481 total. Accent #D5C9ED. No confidential partner names.",
        caption: "FI market sizing for the board",
      },
    },
    {
      number: "04",
      title: "Health vertical launch list Sales and Compliance could trust",
      titleAccent: "could trust",
      navLabel: "Health vertical",
      body: [
        "Swan was opening a new segment: health insurance / mutuelles advance cards in France. Sales had no account data or domain knowledge. Compliance had eligibility rules that had to stick.",
        "I built a knowledge base for the regulated space, maintained a target list enriched with size and LinkedIn data, and cross-checked it against Compliance criteria before anything hit HubSpot. Same week I enriched guest lists for healthcare VIP dinners Marketing was running.",
        "Forty-nine Compliance-validated companies landed in TAP. The knowledge base became the ramp doc for the vertical.",
      ],
      bullets: [
        "49 Compliance-validated companies added to TAP",
        "Knowledge base for Sales / Marketing ramp",
        "Guest-list enrichment for healthcare VIP events",
      ],
      visual: {
        alt: "BRIEF: Soft vertical-launch visual — anonymized account list or knowledge-base index for health/mutuelles. Accent #D5C9ED. No real insurer logos required.",
        caption: "Health vertical account universe",
      },
    },
    {
      number: "05",
      title: "A forecast brief that writes itself",
      titleAccent: "writes itself",
      navLabel: "Forecast agent",
      body: [
        "Weekly forecasting was a manual pile of CRM pulls. Accuracy floated around 65–70%, and shaky deals got noticed late.",
        "I designed a multi-agent forecast setup and shipped the first working agent. Each month it drops a Notion brief: won / commit / best case by AE and market, coverage, who’s at risk. Julio pushed on the TL;DR and conversion views. I shipped a V2 from that.",
        "Roughly eight hours a week of senior time comes back. After I left, the report still shows up without a dedicated RevOps hire.",
      ],
      bullets: [
        "Monthly Notion brief from the agent",
        "~8h/week of senior time recovered",
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
    {
      number: "06",
      title: "Cut wasted spend and speed up RevOps work",
      titleAccent: "RevOps work",
      navLabel: "Ops leverage",
      body: [
        "The GTM automation stack had grown organically. Legacy flows nobody tracked were still burning enrichment credits every month.",
        "I audited the stack end to end, paused unused flows, and mapped enrichment lineage so the team had a reference. Separately I proved coding tools on real RevOps tasks, got licenses approved, and used them on the full CRM audit and other pulls.",
        "About 37,000 wasted credits per month stopped. The CRM audit that used to take two to three days dropped to about an hour and a half.",
      ],
      bullets: [
        "~37k enrichment credits/month stopped",
        "CRM audit ~40k records: 2–3 days → ~1h30",
        "First consolidated map of enrichment tooling",
      ],
      visual: {
        alt: "BRIEF: Simple before/after ops visual — wasted credits stopped + audit time 2–3 days → 1h30. Accent #D5C9ED. No raw tool sprawl screenshots.",
        caption: "Ops leverage",
      },
    },
  ],
  impact: {
    title: "Impact",
    titleAccent: "Impact",
    body: [
      "Inbound doesn’t wait on a triage desk. Hot leads reach AEs in minutes, with noise filtered before it hits Slack.",
      "Sales has TAP coverage and champion lists. Leadership has a board-ready FI universe and a Compliance-safe health launch list.",
      "The forecast brief still lands. Dead automation spend is gone. The tooling that sped audits is still in the team’s hands.",
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
        value: "1,481",
        label: "FI companies sized for board reporting",
        variant: "violet",
      },
    ],
  },
  relatedSlugs: ["flex", "happypal"],
  relatedSubtitle: "Other GTM systems for messy ICPs and real sales teams.",
  indexCard: {
    headline: "Swan stopped needing a BDR desk for inbound",
  },
  wallSnippet:
    "No BDR desk on inbound. About five people of triage in the system, plus board-ready market sizing and agents that keep running.",
  seo: {
    title: "Swan Case Study — Lever",
    description:
      "How Alexis shipped Swan’s inbound routing, TAP coverage, board-ready FI market sizing, a health vertical launch list, and forecast agents that keep running.",
  },
};
