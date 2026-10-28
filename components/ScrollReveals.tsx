"use client";

import { useEffect } from "react";

const REVEAL_TARGETS = [
  "main > section:not(#hero) .container > *",
  ".project-card",
  ".archive-project-card",
  "#skills .panel-secondary",
  ".achievement-item",
  ".cert-item",
  "#contact .contact-row",
  "footer[role='contentinfo']",
].join(", ");

export default function ScrollReveals() {
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const targets = document.querySelectorAll<HTMLElement>(REVEAL_TARGETS);
    const siblingIndexes = new Map<Element, number>();
    targets.forEach((target) => {
      const parent = target.parentElement;
      const index = parent ? siblingIndexes.get(parent) ?? 0 : 0;
      if (parent) siblingIndexes.set(parent, index + 1);
      target.style.setProperty(
        "--reveal-delay",
        `${Math.min(index, 4) * 70}ms`,
      );
      target.classList.add("scroll-reveal");
    });

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          currentObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );

    targets.forEach((target) => observer.observe(target));
    document.documentElement.classList.add("has-scroll-reveals");

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("has-scroll-reveals");
      targets.forEach((target) => {
        target.classList.remove("scroll-reveal", "is-revealed");
        target.style.removeProperty("--reveal-delay");
      });
    };
  }, []);

  return null;
}
