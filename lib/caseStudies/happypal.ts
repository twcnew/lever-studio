import type { CaseStudy } from "./types";

export const happypalCaseStudy: CaseStudy = {
  slug: "happypal",
  logoId: "happypal",
  company: "HappyPal",
  companyDescription:
    "HappyPal is a digital CSE platform for employee benefits, including gift cards, ticketing, subsidies, and internal communication. Series A (€7M, Educapital & Anthemis), 500K+ beneficiaries, with clients including LVMH, Société Générale, and RATP.",
  websiteUrl: "https://www.happypal.com",
  industry: "Employee benefits / CSE platform",
  headquarters: "Paris, France",
  brandColor: "#02B6AA",
  heroHeadline:
    "How we built an always-on pipeline that books enterprise CSE meetings",
  heroImage: {
    src: "/case-studies/happypal-hero.png",
    alt: "HappyPal wordmark with impasto paint texture",
  },
  sideNavImage: {
    src: "/case-studies/happypal-side-nav.png",
    alt: "HappyPal H mark with impasto paint texture",
  },
  heroMetrics: [
    {
      value: "Netflix+",
      label: "enterprise CSE meetings at Carrefour, BNP, L'Oréal, Orange",
      variant: "blue",
    },
    {
      value: "10+",
      label: "qualified meetings booked every week",
      variant: "violet",
    },
    {
      value: "41%",
      label: "referral response via HR & Sales",
      variant: "violet",
    },
  ],
  heroQuote:
    "We built a pipeline that books 10+ enterprise CSE meetings every week at Netflix, Carrefour, BNP Paribas, L'Oréal, and Orange.",
  intro: [
    "After its Series A, HappyPal had a clear mandate: accelerate commercial growth and reach one million users. The product was excellent and the market enormous: every French company with 11+ employees has a CSE (works council). But go-to-market had a structural problem that nobody in the industry had truly solved.",
    "Their buyer doesn't exist in any B2B database. A CSE elected official is an everyday employee (accountant, developer, HR assistant) elected by colleagues to manage the committee. That role appears nowhere in Apollo, LinkedIn Sales Navigator, or ZoomInfo. It's a ghost ICP.",
  ],
  featuredQuote: {
    text: "From kickoff to delivery, the collaboration was seamless and the work was impeccable. I'd recommend them without hesitation.",
    author: "Eddy Frodé",
    role: "Head of Growth",
    avatarSrc: "/testimonials/eddy-frode-happypal-proof.png?v=2",
  },
  heroPopoverQuote:
    "From kickoff to delivery, the collaboration was **seamless and the work was impeccable** — I'd recommend them without hesitation.",
  proofMetric: { value: "10+", label: "qualified meetings / week" },
  impactHighlights: [
    "Enterprise CSE meetings at **Netflix, Carrefour, BNP Paribas, L'Oréal, and Orange**",
    "**10+** qualified meetings booked every week across BDRs and AEs",
    "**41%** response rate on the automated HR & Sales referral channel, 8 to 12× cold email",
    "Full sales team fed with call-ready CSE leads, **zero manual prospecting**",
    "Domain → enriched contact → live campaign in **under 2 minutes**",
  ],
  problem: {
    title: "The problem",
    titleAccent: "problem",
    body: [
      "HappyPal's ICP, CSE elected officials, doesn't appear in any standard B2B database. \"Élu CSE\" isn't a LinkedIn title, isn't a full-time role, and isn't a firmographic filter you can buy. Professional emails for elected officials are often personal addresses or simply unreachable through classic enrichment tools.",
      "The sales team was operating artisanally: manual research, word of mouth, cold calls to company switchboards asking \"who manages the CSE?\" It worked, but it didn't scale. Reps spent more time finding the right contact than actually selling.",
    ],
  },
  solution: {
    title: "The solution",
    titleAccent: "solution",
    body: [
      "We attacked the identification problem on four fronts simultaneously, each designed to solve one facet of finding a buyer who doesn't exist in any database.",
      "Competitive market mapping gave the team a head start with thousands of pre-qualified CSE contacts. An AI workflow turned a single domain input into a verified CSE contact. Proprietary email pattern generation created deliverable addresses that no enrichment vendor had. And an automated referral channel reached HR and Sales staff who always know who runs the CSE.",
      "The full stack (Clay, Smartlead, HubSpot, and Slack) orchestrates detection and outreach so the first channel that finds the right contact wins, then multi-channel sequences take over automatically.",
      "We didn't build a campaign. We built infrastructure. The pipeline runs continuously, feeding the sales team with fresh, verified CSE contacts without manual ops.",
    ],
  },
  useCases: [
    {
      number: "01",
      title: "Mapping the active CSE market",
      titleAccent: "CSE market",
      navLabel: "Market mapping",
      body: [
        "Before building the detection engine, we mapped the active market. Several competitor platforms had exposed endpoints: publicly accessible directories and APIs without proper authentication. We extracted their full client bases: CSE names, elected officials, company names, and committee sizes.",
        "The result was thousands of pre-qualified contacts already using a competing platform, already educated on the category and potentially open to switching. Rather than starting from zero, HappyPal began with a complete map of the active CSE market.",
      ],
      bullets: [
        "Full competitive client base extracted via exposed public endpoints",
        "Thousands of pre-qualified CSE contacts as pipeline foundation",
        "Contacts already category-aware and potentially switch-ready",
      ],
      visual: {
        src: "/case-studies/happypal-use-case-01-market-map.png",
        alt: "Competitive CSE market map / scraping workflow",
      },
    },
    {
      number: "02",
      title: "One domain in, one CSE contact out",
      titleAccent: "CSE contact out",
      navLabel: "Domain → CSE contact",
      body: [
        "The core workflow: the commercial team enters a single company domain. AI agents take over from there, analyzing the company website and social pages for CSE mentions, scraping search results for names linked to the works council, cross-referencing LinkedIn to identify the most likely profile, and enriching the contact.",
        "The result is pushed automatically to three places at once: HubSpot (contact created or updated with full enrichment), Slack (notification to the sales team with a lead summary), and the appropriate outreach campaign. From domain entry to email sent: under 2 minutes, with zero human intervention beyond the initial paste.",
        "This isn't a one-shot workflow. Every domain processed keeps the engine running. Reps receive call-ready leads via Slack and HubSpot on an ongoing basis, without waiting for the next campaign push.",
      ],
      bullets: [
        "Website, search, and LinkedIn analysis via AI agents",
        "Automatic push to HubSpot, Slack, and campaign enrollment",
        "Under 2 minutes from domain input to outreach live",
      ],
      visual: {
        alt: "Domain-in → CSE contact-out agent workflow",
      },
    },
    {
      number: "03",
      title: "Proprietary email generation at scale",
      titleAccent: "at scale",
      navLabel: "Email generation",
      body: [
        "When classic enrichment tools can't find an elected official's email, which happens in the majority of cases, we don't stop. We built a pattern-matching system that analyzes the target company's email format (firstname.lastname@, f.lastname@, firstname@, etc.), generates every possible combination for the identified contact, and runs bulk SMTP verification to determine which address is valid.",
        "This produces verified emails that don't exist in any market database. Not Hunter, not Apollo, not Dropcontact. Proprietary data, created from scratch for each lead: 12,000+ verified emails at 95% deliverability.",
      ],
      visual: {
        alt: "Email pattern generation & SMTP verification pipeline",
      },
    },
    {
      number: "04",
      title: "Automated referral via HR & Sales",
      titleAccent: "HR & Sales",
      navLabel: "Referral channel",
      body: [
        "Rather than hunting the CSE elected official directly, we contact the people inside the company who always know who it is: HR and Sales staff.",
        "The system automatically identifies HR and Sales profiles at the target company and sends a short, non-commercial message: \"We're trying to reach the person in charge of the CSE at [company]. Could you point us in the right direction?\" HR knows every elected official; it's their daily workflow. The message asks for minimal effort and sells nothing.",
        "Response rate on this channel: 41%. Nearly one in two contacts gives the elected official's name, 8 to 12× higher than classic cold email.",
      ],
      bullets: [
        "RH/Sales referral: 41% response, high-quality introductions",
        "Classic cold email: 3–5% response",
        "Switchboard calls: ~10%, often wrong contact",
      ],
      visual: {
        alt: "Automated RH/Sales referral sequence",
      },
    },
  ],
  impact: {
    title: "How HappyPal turned an impossible market into enterprise pipeline",
    titleAccent: "enterprise pipeline",
    body: [
      "HappyPal needed enterprise CSE meetings at companies like Netflix, Carrefour, BNP Paribas, L'Oréal, and Orange. The pipeline now books 10+ qualified meetings every week, feeding every BDR and AE without manual prospecting.",
      "At HappyPal, the problem was upstream: the ICP didn't exist anywhere. Every CSE elected official identified by the system is data that didn't exist before, not in Apollo, not in LinkedIn, not in ZoomInfo. This is data creation, not enrichment.",
      "The combination of competitive mapping, AI agents, proprietary email generation, and automated referral transformed a market reputed impossible to prospect into a predictable, scalable pipeline.",
      "The ghost ICP didn't just get found once. Every CSE elected official the system surfaces is net-new data that no enrichment vendor had. Enterprise pipeline, built from scratch.",
    ],
    quote: {
      text: "From kickoff to delivery, the collaboration was seamless and the work was impeccable. I'd recommend them without hesitation.",
      author: "Eddy Frodé",
      role: "Head of Growth",
      avatarSrc: "/testimonials/eddy-frode-happypal.png?v=5",
    },
    metrics: [
      {
        value: "Netflix+",
        label: "enterprise CSE meetings at Carrefour, BNP, L'Oréal, Orange",
        variant: "blue",
      },
      {
        value: "10+",
        label: "qualified meetings booked every week",
        variant: "violet",
      },
      {
        value: "41%",
        label: "referral response via HR & Sales",
        variant: "violet",
      },
    ],
  },
  relatedSlugs: ["swan", "flex"],
  relatedSubtitle:
    "Discover how other teams build GTM systems tailored to complex products.",
  indexCard: {
    headline:
      "How we built an always-on pipeline that books enterprise CSE meetings",
  },
  wallSnippet:
    "10+ enterprise CSE meetings every week at Netflix, Carrefour, BNP, L'Oréal, Orange.",
  seo: {
    title: "HappyPal Case Study — Lever",
    description:
      "How Lever helped HappyPal build a pipeline that books 10+ enterprise CSE meetings every week at Netflix, Carrefour, BNP Paribas, L'Oréal, and Orange.",
  },
};
