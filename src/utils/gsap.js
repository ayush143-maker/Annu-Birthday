import { gsap } from "gsap";

export { gsap };

export function createPageTimeline(options = {}) {
  return gsap.timeline({
    defaults: {
      ease: "power2.out",
      duration: 0.65,
    },
    ...options,
  });
}

export function revealElement(element, vars = {}) {
  return gsap.fromTo(
    element,
    {
      autoAlpha: 0,
      y: 22,
    },
    {
      autoAlpha: 1,
      y: 0,
      ...vars,
    }
  );
}
