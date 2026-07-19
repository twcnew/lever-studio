import { CaseStudyCard } from "./CaseStudyCard";
import { getRelatedCaseStudies } from "@/lib/caseStudies";
import type { CaseStudy } from "@/lib/caseStudies/types";

type CaseStudyRelatedProps = {
  study: CaseStudy;
};

export function CaseStudyRelated({ study }: CaseStudyRelatedProps) {
  const related = getRelatedCaseStudies(study);

  if (related.length === 0) {
    return null;
  }

  return (
    <section className="cs-related cs-container" aria-labelledby="cs-related-heading">
      <h2 id="cs-related-heading" className="cs-related__title">
        Explore more customers
      </h2>
      <p className="cs-related__sub">
        {study.relatedSubtitle ??
          "Discover how teams build GTM systems tailored to complex products."}
      </p>
      <div className="cs-related__grid">
        {related.map((item) => (
          <CaseStudyCard study={item} variant="related" key={item.slug} />
        ))}
      </div>
    </section>
  );
}
