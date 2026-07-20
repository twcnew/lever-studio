export const FOOTER_CONTENT = {
  subscribe: {
    label: "Subscribe for GTM system notes and playbook updates.",
    placeholder: "you@company.com",
    comingSoon: "Newsletter coming soon.",
  },
  author: {
    label: "Built by",
  },
  brand: {
    name: "Lever",
    tagline: "Autonomous AI systems for GTM teams",
  },
  credits: {
    line1: "Built by operators",
    line2: "Mapped for modern go-to-market",
  },
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/alexis-rodrigues1/" },
    { label: "X", href: "https://x.com/twicewest94" },
  ],
  get year() {
    return new Date().getFullYear();
  },
};
