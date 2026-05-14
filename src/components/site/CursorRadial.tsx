import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/** Cursor-reactive radial gradient overlay. Place inside a relative parent. */
export function CursorRadial({
  color = "rgba(255,255,255,0.18)",
  size = 520,
}: {
  color?: string;
  size?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(-9999);
  const y = useMotionValue(-9999);
  const sx = useSpring(x, { stiffness: 120, damping: 22, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 120, damping: 22, mass: 0.6 });

  useEffect(() => {
    const el = ref.current?.parentElement;
    if (!el) return;
    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      x.set(e.clientX - r.left);
      y.set(e.clientY - r.top);
    };
    const leave = () => {
      x.set(-9999);
      y.set(-9999);
    };
    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[1]"
      style={{
        background: `radial-gradient(${size}px circle at var(--mx) var(--my), ${color}, transparent 60%)`,
        ["--mx" as string]: sx,
        ["--my" as string]: sy,
      }}
    />
  );
}
