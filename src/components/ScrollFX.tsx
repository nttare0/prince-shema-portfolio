"use client";

/**
 * Scroll-driven motion primitives, styled after the keyframe-template
 * feel of animos.app/editor: cinematic, eased reveals tied to scroll
 * position rather than scroll-jacking. Built on framer-motion, which
 * ships with the project.
 *
 * - ScrollProgress: thin gradient bar pinned to the top that fills
 *   with page scroll (spring-smoothed, like a 16s timeline scrubber).
 * - Reveal: blur-fade-rise entrance the first time an element enters
 *   the viewport, with an expo-out easing curve.
 */
import React from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    mass: 0.35,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 right-0 h-[3px] z-[100] origin-left bg-gradient-to-r from-emerald-400 via-green-400 to-teal-300 shadow-[0_0_12px_rgba(52,211,153,0.45)]"
      style={{ scaleX }}
    />
  );
}

interface RevealProps {
  children: React.ReactNode;
  /** seconds */
  delay?: number;
  /** initial vertical offset in px */
  y?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, y = 56, className }: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(10px)", scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
      viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
