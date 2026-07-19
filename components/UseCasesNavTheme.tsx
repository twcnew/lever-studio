"use client";

import { useEffect } from "react";

/**
 * The use-cases index has a light background and runs no hero intro, so the
 * shared TopNav would stay hidden (opacity 0) and white-on-light. Reveal it and
 * lock it to the dark (ink-on-paper) theme.
 */
export function UseCasesNavTheme() {
  useEffect(() => {
    const nav = document.querySelector(".topnav");
    if (!nav) return;

    nav.classList.add("play-nav", "nav-ready", "is-dark");
    nav.classList.remove("is-glass");

    return () => {
      nav.classList.remove("play-nav", "nav-ready", "is-dark");
    };
  }, []);

  return null;
}
