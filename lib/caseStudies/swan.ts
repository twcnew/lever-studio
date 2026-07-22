import type { CaseStudy } from "./types";

export const swanCaseStudy: CaseStudy = {
  slug: "swan",
  logoId: "swan",
  company: "Swan",
  companyDescription:
    "Swan is a European banking-as-a-service platform for embedded finance. Fintechs and enterprises issue accounts and cards under Swan's license, with GTM spanning Sales & International across Europe.",
  websiteUrl: "https://swan.io",
  industry: "Embedded banking / Fintech B2B",
  headquarters: "Paris, France",
  brandColor: "#8166C4",
  heroHeadline:
    "How Swan automated five people’s worth of inbound triage into one system",
  heroImage: {
    alt: "BRIEF: Product/mood shot — Swan lavender dashboard mock OR GTM team context with a soft “Talk to an Expert” overlay. Avoid raw Clay screenshots. Accent #8166C4.",
  },
  heroMetrics: [
    {
      value: "~5 people",
      label: "of manual inbound triage replaced by the system",
      variant: "violet",
    },
    {
      value: "17h → <10 min",
      label: "speed-to-first-contact on top inbound",
      variant: "violet",
    },
    {
      value: "~0 h/week",
      label: "left in manual BDR review",
      variant: "violet",
    },
  ],
  heroQuote:
    "I turned Swan’s inbound triage into a system that absorbs roughly five people’s worth of manual work — so AEs only see hot leads, and prospects get contacted in minutes.",
  intro: [
    "Swan sells banking-as-a-service into a crowded European fintech market. Inbound from swan.io — the “Talk to an Expert” form — was the hottest source of new pipeline, but it depended on a manual BDR layer: humans reading every lead, deciding fit, and pinging AEs.",
    "That layer doesn’t scale. When coverage broke, leads sat without an owner, speed-to-first-contact ballooned to ~17 hours, and AEs got alerted on everything. The real cost wasn’t only latency — it was headcount trapped in triage instead of selling.",
  ],
  featuredQuote: {
    text: "Alexis shipped a fully automated lead routing system. AEs only get alerted on genuinely hot leads, and prospects are contacted in minutes.",
    author: "Bastien Roche",
    role: "Senior RevOps",
    avatarSrc: "/testimonials/bastien-roche-swan.png?v=8",
  },
  heroPopoverQuote:
    "Inbound triage automated — **~5 people’s worth of work** in one system, hot leads only.",
  proofMetric: { value: "~5", label: "people of triage automated" },
  impactHighlights: [
    "Roughly five people’s worth of manual inbound triage absorbed by one production system",
    "Speed-to-first-contact on top inbound: ~17 hours → under 10 minutes",
    "Manual BDR review dropped to ~0 hours/week after launch",
    "~1,700 new TAP contacts associated across 335 companies",
    "Forecast agent shipped so RevOps reporting keeps running without a dedicated hire",
  ],
  problem: {
    title: "The problem",
    body: [
      "The task: replace a person-shaped inbound process with a system that qualifies and routes every lead — without losing genuinely hot opportunities, and without flooding AEs with noise.",
      "Success meant the sales org no longer needed a standing BDR triage bench for this motion. The automation had to carry the volume those seats were doing, with docs and ownership so it survives handoff.",
    ],
  },
  solution: {
    title: "The solution",
    body: [
      "I built a two-table Clay pipeline: validation → enrichment → ICP-fit scoring → tiering (T1–T3) → bundle classification (A/B/C/D), wired into HubSpot, Lemlist, Dust, n8n, Slack, and Aircall.",
      "Bundle A (hot) triggers an instant AE Slack alert with a booking link. Bundle B runs an automated nurture sequence. Bundle C gets a polite automated decline. Bundle D is logged only — silent, no noise.",
      "I wrote the full system docs and a maintenance guide (AE onboarding/offboarding, volume management, debugging) so routing keeps running after handoff. When gaps appeared in production, I shipped Inbound 2.0: a human-in-the-loop Lemlist review for non-TAP leads while keeping full automation for TAP.",
    ],
  },
  useCases: [
    {
      number: "01",
      title: "Automated inbound routing (4-Bundle)",
      navLabel: "Inbound routing",
      body: [
        "Situation: inbound “Talk to an Expert” depended on manual BDR triage. When that coverage failed, leads sat ~17 hours and AEs were alerted on everything — a multi-person workload for a single bottlenecked process.",
        "Task: ship, largely solo, a qualify-and-route system that absorbs that triage capacity — protecting hot leads and killing AE noise — so the motion no longer needs a dedicated BDR bench.",
        "Action: Clay scoring and four-bundle routing into Slack, HubSpot, Lemlist, and Aircall; production launch with company-wide GTM kickoff; Inbound 2.0 HITL for non-TAP edge cases; full maintenance docs for handoff.",
        "Result: roughly five people’s worth of inbound triage work runs in the system. Top-lead speed-to-contact moved from ~17 hours to under 10 minutes. Manual BDR review went to ~0 hours/week. AEs only see the hot slice.",
      ],
      bullets: [
        "~5 people’s worth of triage capacity automated",
        "17h → under 10 minutes on top inbound",
        "Shipped to production with maintenance docs for handoff",
      ],
      visual: {
        alt: "BRIEF: Simple 4-bundle diagram — A hot → AE Slack + booking / B nurture / C decline / D silent. Clean light background, accent #8166C4. No cluttered Clay UI.",
        caption: "Four-bundle inbound routing",
      },
    },
    {
      number: "02",
      title: "TAP enrichment and champion coverage",
      navLabel: "TAP enrichment",
      body: [
        "Situation: the Target Account Program lacked mapped contacts by persona — Product, C-level, GTM, and Tech decision-makers — so AEs couldn’t reliably find champions inside priority accounts.",
        "Task: build automated enrichment that systematically identifies and classifies the right contacts at scale across the TAP list.",
        "Action: Clay agents (Claude-backed) with per-company persona caps; company-level org-chart views in HubSpot; on-demand champion finder via Clay + Sales Navigator scraping for named accounts and FI targeting motions.",
        "Result: ~1,700 new people associated with 335 companies added to the TAP. Hundreds of phone numbers retrieved via Clay credits and synced to HubSpot. Champion lists delivered for 10+ named target accounts across enterprise and neobank motions.",
      ],
      bullets: [
        "~1,700 TAP contacts across 335 companies",
        "Persona-capped enrichment to control volume and quality",
        "Champion lists for 10+ named target accounts",
      ],
      visual: {
        alt: "BRIEF: Anonymized TAP org-chart / persona map (Product, C-level, GTM, Tech) or cleaned HubSpot contact cards. No real personal data visible.",
        caption: "TAP persona coverage",
      },
    },
    {
      number: "03",
      title: "AI forecasting agent for RevOps continuity",
      navLabel: "Forecast agent",
      body: [
        "Situation: weekly forecasting was a manual compile. Accuracy sat around 65–70%, and at-risk deals were often caught informally.",
        "Task: design and ship an AI agent system that automates forecast compilation and deal-health visibility — and keep RevOps forecasting running after the internship with no dedicated hire lined up yet.",
        "Action: architected a multi-agent Dust design; shipped a working Forecast Agent V1 that auto-generates a monthly Notion report (Closed Won / Commit / Best Case by AE and market, coverage, at-risk alerts); iterated to V2 from direct VP Sales feedback on TL;DR, numbering, and stage conversion.",
        "Result: forecasting moved from a manual senior-time sink to a repeatable agent-generated brief. The design goal was continuity: the function keeps running without me in the seat.",
      ],
      bullets: [
        "Monthly Notion forecast report generated by the agent",
        "Iterated with VP Sales on TL;DR and conversion views",
        "Handover docs so forecasting survives headcount gaps",
      ],
      visual: {
        alt: "BRIEF: Notion forecast report screenshot with TL;DR visible — blur sensitive € figures and AE names if needed. Or a clean mock of the agent brief.",
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
      "Inbound no longer depends on a standing manual triage layer. The system carries roughly five people’s worth of that work: hot leads reach AEs in minutes, noise is filtered out, and review hours go to zero.",
      "TAP coverage and champion finding give AEs mapped decision-makers instead of blank accounts. The forecast agent keeps a leadership-grade view alive without a dedicated RevOps headcount.",
      "The lasting change is operational: routing rules, docs, and handoff paths — capacity in the system, not trapped in seats.",
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
        label: "of manual inbound triage replaced by the system",
        variant: "violet",
      },
      {
        value: "17h → <10 min",
        label: "speed-to-first-contact on top inbound",
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
    "Discover how other teams build GTM systems tailored to complex products.",
  indexCard: {
    headline:
      "How Swan automated five people’s worth of inbound triage into one system",
  },
  wallSnippet:
    "Inbound triage automated — roughly five people’s worth of work in one system, AEs only see hot leads.",
  seo: {
    title: "Swan Case Study — Lever",
    description:
      "How Alexis automated Swan’s inbound triage: roughly five people’s worth of manual work into one system, with TAP enrichment and an AI forecast agent.",
  },
};
