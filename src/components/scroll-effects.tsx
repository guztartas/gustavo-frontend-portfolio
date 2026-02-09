"use client";

import { useEffect } from "react";

const REVEAL_SELECTOR = "[data-reveal]";
const VISIBLE_CLASS = "is-visible";
const ROOT_MARGIN = "0px 0px -12% 0px";
const THRESHOLD = 0.18;

export function ScrollEffects() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add(VISIBLE_CLASS);
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: ROOT_MARGIN,
        threshold: THRESHOLD,
      },
    );

    const updateScrollVariable = () => {
      document.documentElement.style.setProperty("--scroll-y", `${window.scrollY}`);
    };

    elements.forEach((element) => {
      observer.observe(element);
    });

    updateScrollVariable();

    window.addEventListener("scroll", updateScrollVariable, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateScrollVariable);
    };
  }, []);

  return null;
}
