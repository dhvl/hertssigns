"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ClientEffects() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Page-load hero sequence
    document.body.setAttribute("data-loaded", "true");

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 2. Scroll-triggered reveals
    if (!reduceMotion && "IntersectionObserver" in window) {
      const revealEls = document.querySelectorAll("section .reveal-up, section .reveal-fade, .reveal-up, .reveal-fade, .reveal-slide-right");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
      );

      revealEls.forEach((el) => observer.observe(el));
    } else {
      document.querySelectorAll(".reveal-up, .reveal-fade, .reveal-slide-right").forEach((el) => {
        el.classList.add("is-visible");
      });
    }

    // 3. Subtle parallax
    let ticking = false;
    const parallaxEls = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    if (!reduceMotion && parallaxEls.length) {
      const updateParallax = () => {
        const viewportH = window.innerHeight;
        parallaxEls.forEach((el) => {
          const strength = parseFloat(el.getAttribute("data-parallax") || "0.1");
          const rect = el.getBoundingClientRect();
          const centerOffset = rect.top + rect.height / 2 - viewportH / 2;
          el.style.transform = `translateY(${centerOffset * -strength * 0.1}px)`;
        });
        ticking = false;
      };

      const handleScroll = () => {
        if (!ticking) {
          requestAnimationFrame(updateParallax);
          ticking = true;
        }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      updateParallax();

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [pathname]);

  return null;
}
