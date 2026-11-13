"use client";

import { useEffect } from "react";

/**
 * Turns on scroll reveals for every [data-reveal] element on the page.
 * Without JavaScript, or with reduced motion, nothing is hidden.
 */
export function RevealObserver() {
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" },
    );

    // Anything already on screen is shown straight away, so it never flashes.
    document.querySelectorAll("[data-reveal]").forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("is-in");
      } else {
        observer.observe(el);
      }
    });

    document.documentElement.classList.add("reveal-on");
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("reveal-on");
    };
  }, []);

  return null;
}
