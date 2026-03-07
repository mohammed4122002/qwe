import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealDirection = "up" | "down" | "left" | "right";

interface SectionRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: RevealDirection;
  className?: string;
}

const getOffset = (direction: RevealDirection, amount: number) => {
  switch (direction) {
    case "down":
      return { x: 0, y: -amount };
    case "left":
      return { x: amount, y: 0 };
    case "right":
      return { x: -amount, y: 0 };
    case "up":
    default:
      return { x: 0, y: amount };
  }
};

export function SectionReveal({
  children,
  delay = 0,
  duration = 0.85,
  direction = "up",
  className,
}: SectionRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const offset = getOffset(direction, 42);
  const containerClassName = ["relative z-10", className]
    .filter(Boolean)
    .join(" ");

  if (prefersReducedMotion) {
    return <div className={containerClassName}>{children}</div>;
  }

  return (
    <motion.div
      className={containerClassName}
      initial={{ opacity: 0, ...offset, scale: 0.985 }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        delay,
        duration,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
