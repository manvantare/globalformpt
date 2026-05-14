import type { ReactElement } from "react";
import { useI18n } from "@/lib/i18n";
import { useReveal } from "@/hooks/use-reveal";
import { motion } from "framer-motion";

/** Minimal architectural SVG glyphs — one per method pillar. */
function GlyphQuality() {
  // concentric precision target
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="0.75">
      <motion.circle
        cx="60" cy="60" r="48"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />
      <motion.circle
        cx="60" cy="60" r="32"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
        transition={{ duration: 1.4, delay: 0.15, ease: "easeOut" }}
      />
      <motion.circle
        cx="60" cy="60" r="16"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}
      />
      <circle cx="60" cy="60" r="2" fill="currentColor" />
      <line x1="60" y1="2" x2="60" y2="14" />
      <line x1="60" y1="106" x2="60" y2="118" />
      <line x1="2" y1="60" x2="14" y2="60" />
      <line x1="106" y1="60" x2="118" y2="60" />
    </svg>
  );
}

function GlyphSpeed() {
  // modular timeline bars
  const bars = [22, 38, 54, 70, 86];
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="0.75">
      <line x1="8" y1="100" x2="112" y2="100" />
      {bars.map((x, i) => (
        <motion.rect
          key={i} x={x} y={40} width="10" height="60"
          initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
          style={{ transformOrigin: "center bottom" }}
        />
      ))}
      <motion.line
        x1="8" y1="24" x2="112" y2="24"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
      />
      <polygon points="108,20 116,24 108,28" fill="currentColor" />
    </svg>
  );
}

function GlyphControl() {
  // single hub with four spokes — end-to-end
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="0.75">
      <motion.line x1="60" y1="60" x2="10" y2="10"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
      />
      <motion.line x1="60" y1="60" x2="110" y2="10"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.1 }}
      />
      <motion.line x1="60" y1="60" x2="10" y2="110"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.2 }}
      />
      <motion.line x1="60" y1="60" x2="110" y2="110"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.3 }}
      />
      <circle cx="10" cy="10" r="3" fill="currentColor" />
      <circle cx="110" cy="10" r="3" fill="currentColor" />
      <circle cx="10" cy="110" r="3" fill="currentColor" />
      <circle cx="110" cy="110" r="3" fill="currentColor" />
      <motion.circle cx="60" cy="60" r="10"
        initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
      />
      <circle cx="60" cy="60" r="2" fill="currentColor" />
    </svg>
  );
}

function GlyphExclusivity() {
  // unique signature mark — diamond with offset frame
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="0.75">
      <motion.rect x="20" y="20" width="80" height="80"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }}
      />
      <motion.polygon points="60,28 92,60 60,92 28,60"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.2 }}
      />
      <motion.line x1="60" y1="44" x2="60" y2="76"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }}
      />
      <motion.line x1="44" y1="60" x2="76" y2="60"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.7 }}
      />
      <circle cx="60" cy="60" r="2" fill="currentColor" />
    </svg>
  );
}

export function Services() {
  const { t } = useI18n();
  const ref = useReveal<HTMLElement>();
  const items: Array<{
    t: "s1_t" | "s2_t" | "s3_t" | "s4_t";
    d: "s1_d" | "s2_d" | "s3_d" | "s4_d";
    Glyph: () => JSX.Element;
  }> = [
    { t: "s1_t", d: "s1_d", Glyph: GlyphQuality },
    { t: "s2_t", d: "s2_d", Glyph: GlyphSpeed },
    { t: "s3_t", d: "s3_d", Glyph: GlyphControl },
    { t: "s4_t", d: "s4_d", Glyph: GlyphExclusivity },
  ];

  return (
    <section ref={ref} id="method" className="bg-background text-foreground hairline-bottom">
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-36">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow reveal">{t("services_eyebrow")}</p>
          </div>
          <div className="lg:col-span-8">
            <h2 className="reveal font-display text-[clamp(2rem,4.4vw,4rem)] leading-[1.04]">
              {t("services_title")}
            </h2>
          </div>
        </div>

        <div className="mt-20 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => {
            const G = it.Glyph;
            return (
              <article
                key={it.t}
                className="reveal group flex flex-col gap-8 bg-background p-8 md:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm text-muted-foreground">/ 0{i + 1}</span>
                  <span className="eyebrow">{t(it.t)}</span>
                </div>

                <div className="relative aspect-square w-full max-w-[200px] text-foreground/80 transition-colors duration-500 group-hover:text-foreground">
                  <G />
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                  {t(it.d)}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
