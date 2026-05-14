import { useRef, type ReactNode, type MouseEvent as RM } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

/** Wrap any anchor/button in a magnetic motion shell. */
export function Magnetic({ children, className, strength = 0.3 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const move = (e: RM<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={reset}
      style={{ x: sx, y: sy, display: "inline-block" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
