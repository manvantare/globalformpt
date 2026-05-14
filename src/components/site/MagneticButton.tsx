import { useRef, type ReactNode, type MouseEvent as RM } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  strength?: number;
  as?: "a" | "button";
  type?: "button" | "submit";
};

export function MagneticButton({
  children,
  href,
  onClick,
  className,
  strength = 0.35,
  as,
  type,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  const move = (e: RM<HTMLElement>) => {
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

  const Tag = as ?? (href ? "a" : "button");
  const MotionTag = motion(Tag) as typeof motion.button;

  return (
    <MotionTag
      ref={ref as never}
      href={href as never}
      onClick={onClick}
      onMouseMove={move}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={className}
      type={type as never}
    >
      <motion.span style={{ x: sx, y: sy, display: "inline-flex", alignItems: "center", gap: 12 }}>
        {children}
      </motion.span>
    </MotionTag>
  );
}
