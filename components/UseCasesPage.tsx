import Link from "next/link";
import { CASE_STUDIES, CASE_STUDY_LOGOS } from "@/lib/caseStudies";
import { CaseStudyIndexCard } from "./CaseStudyIndexCard";
import { Drawer, TopNav } from "./Chrome";
import { DoubleArrows } from "./icons";
import { CustomersWallOfLove } from "./UseCasesIndexSections";
import { UseCasesNavTheme } from "./UseCasesNavTheme";

export function UseCasesPage() {
  const studies = CASE_STUDIES.filter((s) => !s.heroQuote.trim().startsWith("[TODO"));

  return (
    <div className="cs-shell">
      <div className="cs-shell__lines" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </div>

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

        <section className="cs-cta">
          <span className="eyebrow">
            <span className="sq" />
            YOUR USE CASE
          </span>
          <h2 className="cs-cta__title">
            Your situation is unique.
            <br />
            <em>Your GTM should be too.</em>
          </h2>
          <p className="cs-cta__sub">
            I build the system underneath your revenue — signals, data, and plays
            wired into your own tools, scoped to your market, not borrowed
            playbooks. The build costs a fraction of one SDR hire, and you keep it.
          </p>
          <Link className="btn btn-solid cs-cta__btn" href="/">
            Book a Strategy Call
            <DoubleArrows />
          </Link>
        </section>
      </div>
    </div>
  );
}
