import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import materials from "@/assets/materials.jpg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import { useI18n, type DictKey } from "@/lib/i18n";

type Item = {
  n: string;
  nameKey: DictKey;
  captionKey: DictKey;
  image: string;
};

const items: Item[] = [
  { n: "M / 01", nameKey: "mat_1_n", captionKey: "mat_1_c", image: materials },
  { n: "M / 02", nameKey: "mat_2_n", captionKey: "mat_2_c", image: p1 },
  { n: "M / 03", nameKey: "mat_3_n", captionKey: "mat_3_c", image: p2 },
  { n: "M / 04", nameKey: "mat_4_n", captionKey: "mat_4_c", image: p3 },
];

/** Sticky materials reveals — each pane stays as the next slides over it. */
export function Materials() {
  const { t } = useI18n();
  return (
    <section id="materials" className="relative bg-background text-foreground hairline-bottom">
      <div className="mx-auto max-w-[1600px] px-6 pt-24 md:px-10 md:pt-36">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">{t("mat_eyebrow")}</p>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-display text-[clamp(2rem,4.4vw,4rem)] leading-[1.04]">
              {t("mat_title")}
            </h2>
          </div>
        </div>
      </div>

      <div className="relative mt-16">
        {items.map((it, i) => (
          <Pane key={it.n} item={it} index={i} total={items.length} />
        ))}
      </div>
    </section>
  );
}

function Pane({ item, index, total }: { item: Item; index: number; total: number }) {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

  return (
    <div ref={ref} className="sticky top-0 h-screen w-full" style={{ zIndex: index + 1 }}>
      <div className="relative h-full w-full overflow-hidden">
        <motion.img
          src={item.image}
          alt={t(item.nameKey)}
          loading="lazy"
          width={1920}
          height={1280}
          style={{ scale, opacity }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-16 text-bone md:px-10 md:pb-24">
          <div className="flex items-baseline justify-between text-bone/70">
            <span className="eyebrow !text-bone/70">{item.n}</span>
            <span className="eyebrow !text-bone/70">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>
          <h3 className="mt-6 max-w-3xl font-display text-[clamp(2.2rem,5vw,4.8rem)] italic leading-[1]">
            {t(item.nameKey)}
          </h3>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-bone/75 md:text-base">
            {t(item.captionKey)}
          </p>
        </div>
      </div>
    </div>
  );
}
