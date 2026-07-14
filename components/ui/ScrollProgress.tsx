"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left"
    >
      <div
        className="h-full w-full"
        style={{
          background:
            "linear-gradient(90deg, var(--color-accent), var(--color-accent-2), var(--color-accent-3))",
        }}
      />
    </motion.div>
  );
}
