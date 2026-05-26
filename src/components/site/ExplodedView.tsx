import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useI18n } from "@/lib/i18n";

/** Scroll-driven exploded engineering view of a bespoke joinery assembly. */
export function ExplodedView() {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Each layer separates as the section scrolls through the viewport.
  const yA = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const yB = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const yC = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const yD = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const yE = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const rot = useTransform(scrollYProgress, [0, 1], [-2, 4]);
  const labelsOpacity = useTransform(scrollYProgress, [0.15, 0.4, 0.85, 1], [0, 1, 1, 0]);

  const layers: Array<{ y: typeof yA; w: string; tone: string; label: string }> = [
    { y: yA, w: "52%", tone: "bg-foreground/[0.06] border-foreground/30", label: t("exp_l1") },
    { y: yB, w: "60%", tone: "bg-foreground/[0.05] border-foreground/25", label: t("exp_l2") },
    { y: yC, w: "68%", tone: "bg-foreground/[0.04] border-foreground/20", label: t("exp_l3") },
    { y: yD, w: "62%", tone: "bg-foreground/[0.05] border-foreground/25", label: t("exp_l4") },
    { y: yE, w: "54%", tone: "bg-foreground/[0.06] border-foreground/30", label: t("exp_l5") },
  ];

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
        </div>

        <div className="relative lg:col-span-8 overflow-hidden">
          <div className="relative mx-auto h-[520px] w-full max-w-[560px] md:h-[640px]">
            {layers.map((l, i) => (
              <motion.div
                key={i}
                style={{ y: l.y, rotate: i === 2 ? rot : 0, width: l.w }}
                className={`absolute left-1/2 top-1/2 h-16 -translate-x-1/2 -translate-y-1/2 border ${l.tone} backdrop-blur-[1px]`}
              >
                <div
                  style={{ top: `calc(50% + ${(i - 2) * 64}px)` }}
                  className="absolute inset-x-0 top-1/2 -translate-y-1/2"
                />
                <motion.span
                  style={{ opacity: labelsOpacity }}
                  className="eyebrow absolute left-full ml-6 top-1/2 -translate-y-1/2 whitespace-nowrap"
                >
                  {l.label}
                </motion.span>
                <motion.span
                  style={{ opacity: labelsOpacity }}
                  className="absolute right-full mr-6 top-1/2 h-px w-12 -translate-y-1/2 bg-foreground/40"
                />
              </motion.div>
            ))}
            {/* center axis */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-foreground/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
