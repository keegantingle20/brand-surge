"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const barGradient =
  "linear-gradient(90deg, #8deaff 0%, #25dee3 35%, #1dcfff 70%, #45beef 100%)";

export function ScrollProgressBar() {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 32,
    mass: 0.35,
  });
  const [pastHero, setPastHero] = useState(pathname !== "/");

  useEffect(() => {
    if (pathname !== "/") {
      setPastHero(true);
      return;
    }
    const update = () => {
      const hero = document.getElementById("hero");
      if (!hero) {
        setPastHero(true);
        return;
      }
      const r = hero.getBoundingClientRect();
      const heroIntersectsViewport =
        r.bottom > 0 && r.top < window.innerHeight;
      setPastHero(!heroIntersectsViewport);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  if (pathname === "/" && !pastHero) {
    return null;
  }

  return (
    <motion.div
      className="pointer-events-none fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left"
      style={{ scaleX, background: barGradient }}
      aria-hidden
    />
  );
}
