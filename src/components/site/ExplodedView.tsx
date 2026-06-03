import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useI18n } from "@/lib/i18n";

/** Scroll-driven horizontal assembly of a bespoke joinery stack. */
export function ExplodedView() {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const assembly = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const labels = [t("exp_l1"), t("exp_l2"), t("exp_l3"), t("exp_l4"), t("exp_l5")];

  // Each layer slides in from alternating sides and settles into a stacked column.
  const layers = labels.map((label, i) => ({
    label,
    from: i % 2 === 0 ? -1 : 1, // -1 = from left, 1 = from right
    delay: i * 0.08,
  }));

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

          <div className="mt-10 hidden lg:flex items-center gap-4">
            <div className="relative h-px w-40 bg-foreground/15">
              <motion.div style={{ width: progress }} className="absolute inset-y-0 left-0 h-px bg-foreground" />
            </div>
            <span className="eyebrow !text-foreground/50">Assembly</span>
          </div>
        </div>

        <div className="relative lg:col-span-8">
          <div className="relative mx-auto flex h-[560px] w-full max-w-[560px] flex-col justify-center gap-3 md:h-[680px] md:gap-4">
            {layers.map((l, i) => (
              <Plank
                key={i}
                assembly={assembly}
                from={l.from}
                label={l.label}
                index={i}
                total={layers.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Plank({
  assembly,
  from,
  label,
  index,
  total,
}: {
  assembly: MotionValue<number>;
  from: number;
  label: string;
  index: number;
  total: number;
}) {
  // Each plank slides in from off-screen to its resting position.
  const x = useTransform(assembly, (v) => from * (1 - v) * 420);
  const opacity = useTransform(assembly, [0, 0.15, 1], [0, 1, 1]);
  // Width tapers slightly toward the edges to feel like a composed stack.
  const widthPct = 100 - Math.abs(index - (total - 1) / 2) * 6;
  const labelOnRight = from < 0;

  return (
    <motion.div
      style={{ x, opacity, width: `${widthPct}%` }}
      className="relative mx-auto h-12 border border-foreground/25 bg-foreground/[0.04] md:h-14"
    >
      {/* internal hairline detail */}
      <div className="absolute inset-y-2 left-3 w-px bg-foreground/15" />
      <div className="absolute inset-y-2 right-3 w-px bg-foreground/15" />
      <div className="absolute inset-x-6 top-1/2 h-px -translate-y-1/2 bg-foreground/10" />

      {/* index marker */}
      <span className="absolute left-3 top-1/2 -translate-y-1/2 font-display text-[10px] tracking-[0.25em] text-foreground/40">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* label callout */}
      <div
        className={`absolute top-1/2 hidden -translate-y-1/2 items-center gap-3 md:flex ${
          labelOnRight ? "left-full ml-4" : "right-full mr-4 flex-row-reverse"
        }`}
      >
        <span className="h-px w-8 bg-foreground/40" />
        <span className="eyebrow whitespace-nowrap">{label}</span>
      </div>
    </motion.div>
  );
}
