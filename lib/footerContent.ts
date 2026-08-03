export const FOOTER_CONTENT = {
  author: {
    label: "Built by",
  },
  brand: {
    name: "Lever",
    tagline: "Autonomous AI systems for GTM teams",
  },
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/alexis-rodrigues1/" },
    { label: "X", href: "https://x.com/twicewest94" },
  ],
  get year() {
    return new Date().getFullYear();
  },
};
