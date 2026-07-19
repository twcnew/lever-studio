"use client";

import { ImageDithering } from "@paper-design/shaders-react";
import { useSyncExternalStore } from "react";
import { withBasePath } from "@/lib/basePath";

function subscribeReducedMotion(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onStoreChange);
  return () => media.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function HeroBackdrop() {
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  return (
    <div className="stage__glass" aria-hidden="true">
      {reducedMotion ? (
        <img
          className="stage__glass-painting"
          src={withBasePath("/hero-painting-dither.png")}
          alt=""
        />
      ) : (
        <ImageDithering
          className="stage__glass-painting"
          width="100%"
          height="100%"
          image={withBasePath("/hero-painting-dither.png")}
          fit="cover"
          type="8x8"
          size={2}
          colorSteps={5}
          originalColors
          colorBack="#fefefe"
          colorFront="#0e0a07"
          colorHighlight="#5A8BE4"
        />
      )}
    </div>
  );
}
