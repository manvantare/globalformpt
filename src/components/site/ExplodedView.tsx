import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useI18n } from "@/lib/i18n";

/** Scroll-driven vertical exploded view of a bespoke joinery stack. */
export function ExplodedView() {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Vertical separation: layers fan apart on the Y axis with alternating x drift.
  const sep = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const scanY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const labelsOpacity = useTransform(scrollYProgress, [0.15, 0.4, 0.85, 1], [0, 1, 1, 0]);
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const labels = [t("exp_l1"), t("exp_l2"), t("exp_l3"), t("exp_l4"), t("exp_l5")];
  // baseline spacing then explosion offset (px) — alternating left/right drift
  const layers = labels.map((label, i) => {
    const n = labels.length;
    const center = (n - 1) / 2;
    const delta = i - center; // -2..2
    return {
      label,
      // expanded Y offset relative to stack center
      offsetY: delta * 110,
      // alternating x drift to feel exploded, not stacked
      offsetX: delta % 2 === 0 ? -delta * 28 : delta * 36,
      rotate: delta * 1.2,
      width: 78 - Math.abs(delta) * 6, // narrower at edges
    };
  });

  return (
    <section
      ref={ref}
      id="engineering"
      className="relative bg-background text-foreground hairline-bottom"
    >
      <div className="mx-auto grid max-w-[1600px] gap-12 px-6 py-24 md:px-10 md:py-36 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="eyebrow">{t("services_eyebrow")}</p>
          <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3.6rem)] italic leading-[1]">
            {t("exp_title")}
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {t("exp_body")}
          </p>

          {/* vertical scroll progress indicator */}
          <div className="mt-10 hidden lg:flex items-center gap-4">
            <div className="relative h-40 w-px bg-foreground/15">
              <motion.div style={{ height: progress }} className="absolute inset-x-0 top-0 w-px bg-foreground" />
            </div>
            <span className="eyebrow !text-foreground/50">Assembly</span>
          </div>
        </div>

        <div className="relative lg:col-span-8 overflow-hidden">
          <div className="relative mx-auto h-[640px] w-full max-w-[520px] md:h-[820px]">
            {/* vertical guide axis */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-foreground/10" />

            {/* scanning horizontal line synced to scroll */}
            <motion.div
              style={{ top: scanY }}
              className="pointer-events-none absolute left-0 right-0 h-px bg-foreground/30"
            />

            {layers.map((l, i) => (
              <Slab key={i} sep={sep} labelsOpacity={labelsOpacity} {...l} index={i} total={layers.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Slab({
  sep,
  labelsOpacity,
  offsetY,
  offsetX,
  rotate,
  width,
  label,
  index,
  total,
}: {
  sep: MotionValue<number>;
  labelsOpacity: MotionValue<number>;
  offsetY: number;
  offsetX: number;
  rotate: number;
  width: number;
  label: string;
  index: number;
  total: number;
}) {
  const y = useTransform(sep, (v) => offsetY * v);
  const x = useTransform(sep, (v) => offsetX * v);
  const r = useTransform(sep, (v) => rotate * v);
  const labelOnLeft = index % 2 === 0;

  return (
    <motion.div
      style={{ y, x, rotate: r, width: `${width}%` }}
      className="absolute left-1/2 top-1/2 h-14 -translate-x-1/2 -translate-y-1/2 border border-foreground/25 bg-foreground/[0.04] backdrop-blur-[1px]"
    >
      {/* internal hairline detail */}
      <div className="absolute inset-y-0 left-4 w-px bg-foreground/15" />
      <div className="absolute inset-y-0 right-4 w-px bg-foreground/15" />
      <div className="absolute inset-x-6 top-1/2 h-px -translate-y-1/2 bg-foreground/10" />

      {/* label callout */}
      <motion.div
        style={{ opacity: labelsOpacity }}
        className={`absolute top-1/2 flex -translate-y-1/2 items-center gap-3 ${
          labelOnLeft ? "right-full mr-4 flex-row-reverse" : "left-full ml-4"
        }`}
      >
        <span className="h-px w-10 bg-foreground/40" />
        <span className="eyebrow whitespace-nowrap">
          {String(index + 1).padStart(2, "0")} · {label}
        </span>
      </motion.div>
    </motion.div>
  );
}
