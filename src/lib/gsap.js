import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);
gsap.defaults({ duration: 0.8, ease: "power3.out", overwrite: "auto" });

export { gsap, ScrollTrigger, SplitText };

const MOTION_SELECTOR = "[data-hero], [data-split], [data-appear], [data-marquee]";

export function needsMotion(root = document) {
  return Boolean(root.querySelector(MOTION_SELECTOR));
}

export function initPage(root = document.documentElement) {
  if (!needsMotion(root)) return () => {};

  const mm = gsap.matchMedia();

  mm.add(
    {
      isMotion: "(prefers-reduced-motion: no-preference)",
      reduceMotion: "(prefers-reduced-motion: reduce)",
    },
    (context) => {
      const { reduceMotion } = context.conditions;

      if (reduceMotion) {
        gsap.set("[data-hero-item], [data-appear], [data-split]", {
          autoAlpha: 1,
          y: 0,
          yPercent: 0,
        });
        return;
      }

      const hero = root.querySelector("[data-hero]");
      if (hero) {
        gsap.from("[data-hero-item]", {
          y: 28,
          autoAlpha: 0,
          stagger: 0.08,
        });
      }

      root.querySelectorAll("[data-split]").forEach((el) => {
        SplitText.create(el, {
          type: "chars",
          smartWrap: true,
          autoSplit: true,
          aria: "auto",
          onSplit(self) {
            return gsap.from(self.chars, {
              yPercent: 40,
              autoAlpha: 0,
              stagger: 0.02,
              duration: 0.7,
              ease: "power3.out",
            });
          },
        });
      });

      root.querySelectorAll("[data-marquee]").forEach((el) => {
        const track = el.querySelector("[data-marquee-track]");
        if (!track) return;
        gsap.to(track, {
          xPercent: -50,
          duration: 28,
          ease: "none",
          repeat: -1,
        });
      });

      gsap.utils.toArray("[data-appear]", root).forEach((el) => {
        gsap.from(el, {
          y: 32,
          autoAlpha: 0,
          duration: 0.85,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });
      });
    },
    root,
  );

  return () => mm.revert();
}
