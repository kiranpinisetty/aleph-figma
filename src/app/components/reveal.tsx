import { motion } from "motion/react";

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  as: Tag = "div" as any,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: any;
}) {
  const M = (motion as any)[typeof Tag === "string" ? Tag : "div"] || motion.div;
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </M>
  );
}
