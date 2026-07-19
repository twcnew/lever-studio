"use client";

import Link from "next/link";
import { CASE_STUDY_LOGOS } from "@/lib/caseStudies";
import { withBasePath } from "@/lib/basePath";
import { buildProofShowcaseItems, type ProofShowcaseItem } from "@/lib/proofShowcase";
import { ProofAttributionBand } from "./ProofAttributionBand";

type ProofCardProps = {
  item: ProofShowcaseItem;
  duplicate?: boolean;
};

function ProofCard({ item, duplicate = false }: ProofCardProps) {
  const { Logo } = CASE_STUDY_LOGOS[item.logoId];

  return (
    <Link
      className={`proof-board__cell${duplicate ? " proof-board__cell--duplicate" : ""}`}
      data-slug={item.slug}
      href={item.href}
      aria-hidden={duplicate || undefined}
      tabIndex={duplicate ? -1 : undefined}
    >
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

export function ProofShowcase() {
  const items = buildProofShowcaseItems();
  const marqueeItems = [...items, ...items];

  return (
    <figure className="proof-board" aria-label="Client case studies">
      <div className="proof-board__viewport">
        <div className="proof-board__track">
          {marqueeItems.map((item, index) => (
            <ProofCard
              item={item}
              duplicate={index >= items.length}
              key={`${item.slug}-${index}`}
            />
          ))}
        </div>
      </div>
    </figure>
  );
}
