"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { CASE_STUDY_LOGOS } from "@/lib/caseStudies";
import { withBasePath } from "@/lib/basePath";
import { buildProofShowcaseItems, type ProofShowcaseItem } from "@/lib/proofShowcase";
import { ProofAttributionBand } from "./ProofAttributionBand";

type ProofCardProps = {
  item: ProofShowcaseItem;
};

function ProofCard({ item }: ProofCardProps) {
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

export function ProofShowcase() {
  const items = buildProofShowcaseItems();
  const viewportRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateNav = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const maxScroll = viewport.scrollWidth - viewport.clientWidth;
    setCanPrev(viewport.scrollLeft > 4);
    setCanNext(viewport.scrollLeft < maxScroll - 4);
  }, []);

  useEffect(() => {
    updateNav();
    const viewport = viewportRef.current;
    if (!viewport) return;
    viewport.addEventListener("scroll", updateNav, { passive: true });
    window.addEventListener("resize", updateNav);
    return () => {
      viewport.removeEventListener("scroll", updateNav);
      window.removeEventListener("resize", updateNav);
    };
  }, [updateNav]);

  const scrollByCard = useCallback((direction: 1 | -1) => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const cell = viewport.querySelector<HTMLElement>(".proof-board__cell");
    const step = cell ? cell.offsetWidth + 16 : viewport.clientWidth * 0.8;
    viewport.scrollBy({ left: direction * step, behavior: "smooth" });
  }, []);

  return (
    <figure className="proof-board" aria-label="Client case studies">
      <div className="proof-board__viewport" ref={viewportRef}>
        <div className="proof-board__track">
          {items.map((item) => (
            <ProofCard item={item} key={item.slug} />
          ))}
        </div>
      </div>
      <button
        type="button"
        className="proof-board__nav proof-board__nav--prev"
        onClick={() => scrollByCard(-1)}
        disabled={!canPrev}
        aria-label="Previous case studies"
      >
        ←
      </button>
      <button
        type="button"
        className="proof-board__nav proof-board__nav--next"
        onClick={() => scrollByCard(1)}
        disabled={!canNext}
        aria-label="Next case studies"
      >
        →
      </button>
    </figure>
  );
}
