"use client";

import { useRef, useState } from "react";
import { HERO_LOGO_ENTRIES } from "@/lib/heroLogoStrip";
import { withBasePath } from "@/lib/basePath";
import { LogoTestimonialPopover } from "./LogoTestimonialPopover";

const CLOSE_DELAY_MS = 120;

export function HeroLogoStrip() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = (id: string) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setActiveId(id);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setActiveId(null), CLOSE_DELAY_MS);
  };

  return (
    <div className="hero__logos" data-logos>
      <span className="hero__logos-eyebrow">Worked with</span>
      <div className="hero__logos-grid">
        {HERO_LOGO_ENTRIES.map(({ id, Logo, markClass, testimonial, caseStudyHref }) => {
          const isActive = activeId === id;
          const popoverId = `hero-logo-popover-${id}`;

          return (
            <div
              className={`hero__logo-cell${isActive ? " is-active" : ""}`}
              key={id}
              onMouseEnter={() => handleEnter(id)}
              onMouseLeave={handleLeave}
            >
              <LogoTestimonialPopover
                id={popoverId}
                testimonial={testimonial}
                visible={isActive}
              />
              <a
                className={`hero__logo-mark ${markClass}`}
                href={caseStudyHref ? withBasePath(caseStudyHref) : "#"}
                aria-describedby={isActive ? popoverId : undefined}
              >
                <Logo />
              </a>
              <span className="hero__logo-label">Case study</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
