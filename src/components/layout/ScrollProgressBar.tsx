"use client";

import { motion, useScroll, useSpring } from "framer-motion";

const barGradient =
  "linear-gradient(90deg, #8deaff 0%, #25dee3 35%, #1dcfff 70%, #45beef 100%)";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 32,
    mass: 0.35,
  });

  return (
    <motion.div
      className="pointer-events-none fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left"
      style={{ scaleX, background: barGradient }}
      aria-hidden
    />
  );
}
