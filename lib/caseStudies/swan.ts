import type { CaseStudy } from "./types";

export const swanCaseStudy: CaseStudy = {
  slug: "swan",
  logoId: "swan",
  company: "Swan",
  companyDescription:
    "[TODO: Add company description — embedded banking / B2B fintech, 1–2 sentences.]",
  websiteUrl: "[TODO: https://swan.io]",
  industry: "[TODO: Embedded banking / Fintech B2B]",
  headquarters: "[TODO: Paris, France]",
  brandColor: "#0a4fd6",
  heroHeadline:
    "How Swan rebuilt outbound with signal-driven ABM and doubled pipeline",
  heroMetrics: [
    { value: "2×", label: "pipeline growth in one quarter" },
    {
      value: "[TODO]",
      label: "[TODO: signal-driven ABM motion operational]",
    },
    { value: "[TODO]", label: "[TODO: reduced manual research per account]" },
  ],
  heroQuote:
    "[TODO: Pull quote — e.g. Rebuilt outbound on signal-driven ABM and doubled pipeline in one quarter.]",
  intro: [
    "[TODO: STAR Situation — Swan's market position, GTM team structure, and product complexity.]",
    "[TODO: Context before engagement — inbound vs outbound mix, target segments.]",
  ],
  featuredQuote: {
    text: "Lever helped us rebuild outbound on signal-driven ABM — pipeline doubled in one quarter without adding headcount.",
    author: "Bastien Roche",
    role: "Senior RevOps",
    avatarSrc: "/testimonials/bastien-roche-swan.png?v=8",
  },
  heroPopoverQuote:
    "Lever helped us **rebuild outbound on ABM signals** — pipeline doubled in a quarter, without adding headcount.",
  proofMetric: { value: "2×", label: "pipeline in one quarter" },
  impactHighlights: [
    "[TODO: e.g. 2× pipeline in one quarter]",
    "[TODO: e.g. Signal-driven ABM motion operational]",
    "[TODO: e.g. Reduced manual research per account]",
  ],
  problem: {
    title: "The problem",
    body: [
      "[TODO: STAR Task/Challenge — Outbound wasn't compounding: generic sequences, weak ICP focus, or low enrichment coverage.]",
      "[TODO: Specific constraint — team size, market, or product complexity.]",
    ],
  },
  solution: {
    title: "The solution",
    body: [
      "[TODO: STAR Action overview — ABM system design, signal mapping, sequence architecture.]",
      "[TODO: How Lever embedded with the marketing/GTM team.]",
    ],
  },
  useCases: [
    {
      number: "01",
      title: "[TODO: Signal-driven ABM targeting]",
      body: [
        "[TODO: How ICP and account signals were defined and operationalized.]",
        "[TODO: Tools, workflows, or data sources used.]",
      ],
    },
    {
      number: "02",
      title: "[TODO: Outbound sequences for fintech buyers]",
      body: [
        "[TODO: Messaging, channels, and personalization approach for Swan's buyers.]",
      ],
      bullets: [
        "[TODO: Deliverable or workflow]",
        "[TODO: Deliverable or workflow]",
      ],
    },
    {
      number: "03",
      title: "[TODO: Pipeline reporting & iteration loop]",
      body: [
        "[TODO: How the team measured progress and iterated on what worked.]",
      ],
      quote: {
        text: "[TODO: Client quote on ABM / pipeline results.]",
        author: "[TODO: Contact name]",
        role: "[TODO: Role]",
      },
    },
  ],
  impact: {
    title: "Impact",
    body: [
      "[TODO: STAR Result — Pipeline growth, meeting quality, or cycle time improvements.]",
      "[TODO: Lasting change in how Swan runs GTM.]",
    ],
    metrics: [
      { value: "[TODO: 2×]", label: "[TODO: pipeline growth]" },
      { value: "[TODO]", label: "[TODO: metric label]" },
    ],
  },
  relatedSlugs: ["flex", "happypal"],
  indexCard: {
    headline:
      "How Swan rebuilt outbound with signal-driven ABM and doubled pipeline",
  },
  wallSnippet:
    "Signal-driven ABM targeting turns account intent into outbound that compounds — without adding headcount.",
  seo: {
    title: "Swan Case Study — Lever",
    description:
      "How Lever helped Swan rebuild outbound with signal-driven ABM. [TODO: refine with real outcomes.]",
  },
};
