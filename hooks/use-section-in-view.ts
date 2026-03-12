"use client";

import { useEffect, useRef, useState } from "react";

interface UseSectionInViewOptions {
  threshold?: number;
  rootMargin?: string;
}

/**
 * Custom hook that detects when a section enters the viewport.
 * Returns a ref to attach to the element and a boolean for visibility.
 */
export function useSectionInView(options: UseSectionInViewOptions = {}) {
  const { threshold = 0.15, rootMargin = "0px" } = options;
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Once visible, stay visible (no re-triggering)
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isInView };
}