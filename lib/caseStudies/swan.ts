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
  brandColor: "#0a4fd6",
  heroHeadline:
    "How Swan cut inbound speed-to-contact from 17 hours to under 10 minutes",
  heroMetrics: [
    {
      value: "17h → <10 min",
      label: "speed-to-first-contact on top inbound",
      variant: "blue",
    },
    {
      value: "~99%",
      label: "of leads hit the <2h SLA after launch",
      variant: "violet",
    },
    {
      value: "~0 h/week",
      label: "of manual BDR triage (was several hours)",
      variant: "violet",
    },
  ],
  heroQuote:
    "I shipped a fully automated inbound routing system so AEs only get alerted on genuinely hot leads — and prospects are contacted in minutes.",
  intro: [
    "Swan sells banking-as-a-service into a crowded European fintech market. Inbound from swan.io — the “Talk to an Expert” form — was the hottest source of new pipeline, but it depended on one BDR manually triaging every lead before anyone reached out.",
    "When that BDR left, leads had no owner. Speed-to-first-contact collapsed to roughly 17 hours. AEs got alerted on everything regardless of fit, and the team was burning several hours a week on manual review. The motion wasn’t a system — it was a person.",
  ],
  featuredQuote: {
    text: "Alexis shipped a fully automated lead routing system. AEs only get alerted on genuinely hot leads, and prospects are contacted in minutes.",
    author: "Bastien Roche",
    role: "Senior RevOps",
    avatarSrc: "/testimonials/bastien-roche-swan.png?v=8",
  },
  heroPopoverQuote:
    "A fully automated lead routing system — **AEs only see hot leads**, prospects contacted in minutes.",
  proofMetric: { value: "<10 min", label: "inbound speed-to-contact" },
  impactHighlights: [
    "Speed-to-first-contact on top inbound: ~17 hours → under 10 minutes",
    "~99% of leads hit the <2h SLA after launch",
    "Manual BDR triage dropped from several hours/week to ~0",
    "~1,700 new TAP contacts associated across 335 companies",
    "Forecast agent shipped so RevOps reporting keeps running without a dedicated hire",
  ],
  problem: {
    title: "The problem",
    body: [
      "The task was clear: design and ship a system that qualifies every inbound lead and routes it appropriately — without losing genuinely hot leads, and without spamming AEs with noise.",
      "It also had to survive without me. Documentation, ownership rules, and a maintenance path mattered as much as the automation itself. One more fragile Clay table wasn’t an option.",
    ],
  },
  solution: {
    title: "The solution",
    body: [
      "I built a two-table Clay pipeline: validation → enrichment → ICP-fit scoring → tiering (T1–T3) → bundle classification (A/B/C/D), wired into HubSpot, Lemlist, Dust, n8n, Slack, and Aircall.",
      "Bundle A (hot) triggers an instant AE Slack alert with a booking link. Bundle B runs an automated nurture sequence. Bundle C gets a polite automated decline. Bundle D is logged only — silent, no noise.",
      "I wrote the full system docs and a maintenance guide (AE onboarding/offboarding, volume management, debugging) so the routing keeps running after handoff. When gaps appeared in production, I shipped Inbound 2.0: a human-in-the-loop Lemlist review for non-TAP leads while keeping full automation for TAP.",
    ],
  },
  useCases: [
    {
      number: "01",
      title: "Automated inbound routing (4-Bundle)",
      navLabel: "Inbound routing",
      body: [
        "Situation: inbound “Talk to an Expert” leads sat ~17 hours before first contact once the manual BDR triage owner left. AEs were alerted on everything.",
        "Task: ship, largely solo, an automated qualify-and-route system that protects hot leads and kills AE noise.",
        "Action: Clay scoring and four-bundle routing into Slack, HubSpot, Lemlist, and Aircall; production launch with company-wide GTM kickoff; Inbound 2.0 HITL for non-TAP edge cases.",
        "Result: top-lead speed-to-contact moved from ~17 hours to under 10 minutes. The <2h SLA hit ~99% of the time. Manual BDR triage went to ~0 hours/week. On a sample run, ~240 leads in → ~16% routed after validation and enrichment — AEs only saw the hot slice.",
      ],
      bullets: [
        "17h → under 10 minutes on top inbound",
        "~99% SLA <2h post-launch",
        "Shipped to production with maintenance docs for handoff",
      ],
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
      "Inbound is no longer a person-shaped bottleneck. Top leads hit AEs in minutes, the SLA holds, and triage hours are gone.",
      "TAP coverage and champion finding give AEs mapped decision-makers instead of blank accounts. The forecast agent keeps a leadership-grade weekly/monthly view alive without a dedicated RevOps headcount.",
      "The lasting change is operational: systems with docs, routing rules, and handoff paths — not one-off Clay experiments that die when someone leaves.",
    ],
    quote: {
      text: "Alexis shipped a fully automated lead routing system. AEs only get alerted on genuinely hot leads, and prospects are contacted in minutes.",
      author: "Bastien Roche",
      role: "Senior RevOps",
      avatarSrc: "/testimonials/bastien-roche-swan.png?v=8",
    },
    metrics: [
      {
        value: "17h → <10 min",
        label: "speed-to-first-contact on top inbound",
        variant: "blue",
      },
      {
        value: "~99%",
        label: "of leads hit the <2h SLA after launch",
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
      "How Swan cut inbound speed-to-contact from 17 hours to under 10 minutes",
  },
  wallSnippet:
    "Inbound routing that turns 17-hour first contact into under 10 minutes — AEs only see genuinely hot leads.",
  seo: {
    title: "Swan Case Study — Lever",
    description:
      "How Alexis automated Swan’s inbound routing: speed-to-contact from ~17 hours to under 10 minutes, with TAP enrichment and an AI forecast agent.",
  },
};
