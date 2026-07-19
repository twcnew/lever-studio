"use client";

import Link from "next/link";
import { useEffect, useState, type CSSProperties } from "react";
import { prefersReducedMotion } from "@/lib/prefersReducedMotion";
import { CASE_STUDY_LOGOS } from "@/lib/caseStudies";
import type { CaseStudy } from "@/lib/caseStudies/types";
import { withBasePath } from "@/lib/basePath";

const CAROUSEL_INTERVAL_MS = 4500;

type CaseStudyHeroProps = {
  study: CaseStudy;
};

export function CaseStudyHero({ study }: CaseStudyHeroProps) {
  const { Logo, markClass } = CASE_STUDY_LOGOS[study.logoId];
  const metrics = study.heroMetrics;
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (metrics.length <= 1 || paused || prefersReducedMotion()) {
      return;
    }

    const id = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % metrics.length);
    }, CAROUSEL_INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [metrics.length, paused]);

  return (
    <header
      className="cs-hero"
      style={{ "--cs-hero-accent": study.brandColor } as CSSProperties}
    >
      <div className="cs-hero__inner">
        <div className="cs-hero__frame">
          <div className="cs-hero__row cs-hero__row--crumbs">
            <nav className="cs-hero__crumbs" aria-label="Breadcrumb">
              <Link href="/use-cases">All case studies</Link>
              <span aria-hidden="true">/</span>
              <span>{study.company.toUpperCase()}</span>
            </nav>
          </div>

          <div className="cs-hero__row cs-hero__row--title">
            <h1 className="cs-hero__title">{study.company}</h1>
          </div>

          <div className="cs-hero__row cs-hero__row--split">
            <div className="cs-hero__cell cs-hero__cell--visual">
              <div
                className={`cs-hero__visual${study.heroImage ? " cs-hero__visual--image" : ""}`}
              >
                {study.heroImage ? (
                  <img
                    className="cs-hero__visual-img"
                    src={withBasePath(study.heroImage.src!)}
                    alt={study.heroImage.alt}
                  />
                ) : (
                  <div className={`cs-hero__logo cs-company-logo ${markClass}`}>
                    <Logo />
                  </div>
                )}
              </div>
            </div>

            <div className="cs-hero__cell cs-hero__cell--content">
              <p className="cs-hero__headline">{study.heroHeadline}</p>

              {metrics.length > 0 && (
                <div
                  className="cs-hero__metric-panel"
                  onMouseEnter={() => setPaused(true)}
                  onMouseLeave={() => setPaused(false)}
                >
                  <span className="cs-hero__impact-tag">Impact</span>
                  <div className="cs-hero__metric-viewport">
                    <div
                      className="cs-hero__metric-track"
                      style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                    >
                      {metrics.map((metric) => (
                        <div
                          key={`${metric.value}-${metric.label}`}
                          className="cs-hero__metric"
                        >
                          <p className="cs-hero__metric-value">{metric.value}</p>
                          <p className="cs-hero__metric-label">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  {metrics.length > 1 && (
                    <div className="cs-hero__dots" role="tablist" aria-label="Impact metrics">
                      {metrics.map((metric, index) => (
                        <button
                          key={`${metric.value}-dot`}
                          type="button"
                          role="tab"
                          className={`cs-hero__dot${index === activeIndex ? " is-active" : ""}`}
                          aria-selected={index === activeIndex}
                          aria-label={`${metric.value}, ${metric.label}`}
                          onClick={() => setActiveIndex(index)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
