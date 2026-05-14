import heroImg from "@/assets/hero.jpg";
import { useI18n } from "@/lib/i18n";
import { CursorRadial } from "./CursorRadial";
import { Magnetic } from "./MagneticButton";

export function Hero() {
  const { t } = useI18n();
  return (
    <section id="top" className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-ink text-bone">
      <img
        src={heroImg}
        alt="Bespoke architectural interior in concrete and oak"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/75" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col px-6 pb-14 pt-32 md:px-10 md:pb-20 md:pt-40">
        <div className="mt-auto max-w-5xl">
          <div className="mb-10 flex items-center gap-4 text-bone/70">
            <span className="h-px w-10 bg-bone/40" />
            <span className="eyebrow !text-bone/70">{t("hero_eyebrow")}</span>
          </div>
          <h1 className="font-display text-[clamp(2.6rem,7.5vw,7.5rem)] leading-[0.98]">
            <span className="block">{t("hero_title_a")}</span>
            <span className="block italic opacity-90">{t("hero_title_b")}</span>
            <span className="block">{t("hero_title_c")}</span>
          </h1>
          <div className="mt-10 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-xl text-base text-bone/70 md:text-lg">{t("hero_sub")}</p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 border border-bone/80 px-7 py-4 text-[11px] font-medium uppercase tracking-[0.32em] text-bone transition hover:bg-bone hover:text-ink"
              >
                {t("hero_cta")}
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#contact"
                className="link-underline text-[11px] font-medium uppercase tracking-[0.32em] text-bone/80"
              >
                {t("hero_cta_2")}
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 hidden flex-col items-center gap-3 text-bone/60 md:right-10 md:flex">
          <span className="rotate-180 text-[10px] font-medium uppercase tracking-[0.32em] [writing-mode:vertical-rl]">
            {t("hero_scroll")}
          </span>
          <span className="h-16 w-px animate-pulse bg-bone/40" />
        </div>
      </div>
    </section>
  );
}
