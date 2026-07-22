import Link from "next/link";
import { CASE_STUDY_LOGOS } from "@/lib/caseStudies";
import { withBasePath } from "@/lib/basePath";
import type { ProofShowcaseItem } from "@/lib/proofShowcase";
import { ProofAttributionBand } from "./ProofAttributionBand";

type ProofCardProps = {
  item: ProofShowcaseItem;
};

export function ProofCard({ item }: ProofCardProps) {
  const { Logo } = CASE_STUDY_LOGOS[item.logoId];

  return (
    <Link className="proof-board__cell" data-slug={item.slug} href={item.href}>
      <blockquote className="proof-board__quote">
        &ldquo;{item.quote}&rdquo;
      </blockquote>

      <div className="proof-board__rule" aria-hidden="true" />

      <ProofAttributionBand
        author={item.author}
        role={item.role}
        initials={item.initials}
        avatarSrc={item.avatarSrc}
        signatureSrc={item.signatureSrc}
        Logo={Logo}
      />

      {(item.avatarSrc || item.initials) && (
        <div className="proof-board__portrait" aria-hidden="true">
          {item.avatarSrc ? (
            <img src={withBasePath(item.avatarSrc)} alt="" decoding="async" />
          ) : (
            <span className="proof-board__portrait-fallback">{item.initials}</span>
          )}
        </div>
      )}

      <span className="proof-board__go">Read case →</span>
    </Link>
  );
}
