import { useEffect, useRef } from "react";

/**
 * Adds the `is-visible` class to the returned ref's element the first time it
 * scrolls into view. Pairs with the `.reveal` CSS class defined in index.css.
 * Respects prefers-reduced-motion by revealing immediately when needed
 * (handled purely in CSS, so no JS branching is required here).
 */
export default function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return ref;
}
