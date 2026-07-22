import Link from "next/link";
import { CASE_STUDIES, CASE_STUDY_LOGOS } from "@/lib/caseStudies";
import { CaseStudyIndexCard } from "./CaseStudyIndexCard";
import { Drawer, TopNav } from "./Chrome";
import { SiteFooter } from "./lp/SiteFooter";
import { ClosingSection } from "./sections/ClosingSection";
import { CustomersWallOfLove } from "./UseCasesIndexSections";
import { UseCasesNavTheme } from "./UseCasesNavTheme";

export function UseCasesPage() {
  const studies = CASE_STUDIES.filter((s) => !s.heroQuote.trim().startsWith("[TODO"));

  return (
    <div className="cs-shell">
      <TopNav />
      <Drawer />
      <UseCasesNavTheme />

      <div className="cs-body">
        <header className="cs-index-hero cs-container">
          <span className="eyebrow cs-eyebrow">
            <span className="sq" />
            CUSTOMERS
          </span>
          <h1 className="cs-index-hero__title">
            Real GTM systems.
            <br />
            <em>Real results.</em>
          </h1>
          <p className="cs-index-hero__sub">
            Real buying moments, turned into booked meetings — the GTM systems I
            built inside these teams' own tools, and the pipeline that keeps
            running after handover.
          </p>
          <div className="cs-index-hero__logos" aria-label="Customer logos">
            {studies.map((study) => {
              const { Logo, markClass } = CASE_STUDY_LOGOS[study.logoId];
              return (
                <Link
                  className={`cs-index-hero__logo ${markClass}`}
                  href={`/use-cases/${study.slug}`}
                  key={study.slug}
                >
                  <Logo />
                </Link>
              );
            })}
          </div>
        </header>

        <section className="cs-index-main cs-container" aria-labelledby="cs-index-main-heading">
          <h2 id="cs-index-main-heading" className="cs-index-main__title">
            How teams like yours build with AI Native GTM
          </h2>
          <div className="cs-index-list">
            {studies.map((study) => (
              <CaseStudyIndexCard study={study} key={study.slug} />
            ))}
          </div>
        </section>

        <CustomersWallOfLove />
      </div>

      <div className="lp lp--clay cs-closing-band">
        <ClosingSection />
        <SiteFooter />
      </div>
    </div>
  );
}
