import type { CaseStudyMetric, CaseStudyQuote } from "@/lib/caseStudies/types";
import { withBasePath } from "@/lib/basePath";

function CaseStudyEyebrowPill({
  label,
  variant = "default",
}: {
  label: string;
  variant?: "default" | "brand";
}) {
  return (
    <span
      className={`cs-eyebrow-pill${variant === "brand" ? " cs-eyebrow-pill--brand" : ""}`}
    >
      {label}
    </span>
  );
}

function CaseStudyEyebrow({ label }: { label: string }) {
  return (
    <span className="eyebrow cs-eyebrow">
      <span className="sq" />
      {label}
    </span>
  );
}

function CaseStudyQuoteBlock({ quote }: { quote: CaseStudyQuote }) {
  return (
    <figure className="cs-quote">
      <blockquote className="cs-quote__text">&ldquo;{quote.text}&rdquo;</blockquote>
      <figcaption className="cs-quote__author">
        {quote.avatarSrc ? (
          <img className="cs-quote__avatar" src={withBasePath(quote.avatarSrc)} alt="" />
        ) : (
          <span className="cs-quote__avatar cs-quote__avatar--initials" aria-hidden="true">
            {quote.author
              .split(" ")
              .map((part) => part[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()}
          </span>
        )}
        <span className="cs-quote__meta">
          <span className="cs-quote__role">{quote.role}</span>
          <span className="cs-quote__name">{quote.author}</span>
        </span>
      </figcaption>
    </figure>
  );
}

function CaseStudyImpactStats({ metrics }: { metrics: CaseStudyMetric[] }) {
  return (
    <div className="cs-impact-stats">
      {metrics.map((metric, index) => {
        const variant =
          metric.variant ?? (index % 2 === 0 ? "violet" : "blue");

        return (
          <div className={`stat ${variant}`} key={index}>
            <div className="v">{metric.value}</div>
            <div className="l">{metric.label}</div>
          </div>
        );
      })}
    </div>
  );
}

function ProseSection({
  id,
  eyebrowLabel,
  title,
  body,
}: {
  id: string;
  eyebrowLabel?: string;
  title: string;
  body: string[];
}) {
  return (
    <section className="cs-section cs-prose" id={id}>
      {eyebrowLabel && <CaseStudyEyebrow label={eyebrowLabel} />}
      <h2 className="cs-section__title">
        <span className="cs-section__title-main">{title}</span>
      </h2>
      {body.map((paragraph, index) => (
        <p className="cs-section__body" key={index}>
          {paragraph}
        </p>
      ))}
    </section>
  );
}

export {
  CaseStudyEyebrow,
  CaseStudyEyebrowPill,
  CaseStudyImpactStats,
  CaseStudyQuoteBlock,
  ProseSection,
};
