import { CASE_STUDIES } from "./caseStudies";
import type { CaseStudy } from "./caseStudies/types";
import { HERO_LOGO_ENTRIES } from "./heroLogoStrip";

export type ProofShowcaseItem = {
  slug: string;
  company: string;
  brandColor: string;
  headline: string;
  quote: string;
  author: string;
  role: string;
  initials: string;
  avatarSrc?: string;
  signatureSrc?: string;
  metric: { value: string; label: string };
  href: string;
  logoId: CaseStudy["logoId"];
};

/** Curated homepage metrics — add a slug here when a new case study ships. */
const PROOF_METRICS: Record<CaseStudy["logoId"], { value: string; label: string }> = {
  swan: { value: "2×", label: "pipeline in one quarter" },
  flex: { value: "3×", label: "reply rate on technical buyers" },
  happypal: { value: "10+", label: "qualified meetings / week" },
};

function isTodo(value: string) {
  return value.startsWith("[TODO");
}

function stripBold(text: string) {
  return text.replace(/\*\*/g, "");
}

function initialsFromName(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function buildProofShowcaseItems(): ProofShowcaseItem[] {
  return CASE_STUDIES.map((study) => {
    const hero = HERO_LOGO_ENTRIES.find((entry) => entry.id === study.slug);
    const fallback = hero?.testimonial;

    const quote = !isTodo(study.featuredQuote.text)
      ? study.featuredQuote.text
      : fallback
        ? stripBold(fallback.quote)
        : study.wallSnippet;

    const author = !isTodo(study.featuredQuote.author)
      ? study.featuredQuote.author
      : (fallback?.author ?? study.featuredQuote.author);

    const role = !isTodo(study.featuredQuote.role)
      ? study.featuredQuote.role
      : (fallback?.role ?? study.featuredQuote.role);

    const avatarSrc = study.featuredQuote.avatarSrc ?? fallback?.avatarSrc;
    const signatureSrc = study.featuredQuote.signatureSrc;
    const initials = fallback?.initials ?? initialsFromName(author);

    return {
      slug: study.slug,
      company: study.company,
      brandColor: study.brandColor,
      headline: study.indexCard.headline,
      quote,
      author,
      role,
      initials,
      avatarSrc,
      signatureSrc,
      metric: PROOF_METRICS[study.logoId],
      href: `/use-cases/${study.slug}`,
      logoId: study.logoId,
    };
  });
}
