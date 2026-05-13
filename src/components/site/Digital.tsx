import { useI18n } from "@/lib/i18n";
import { useReveal } from "@/hooks/use-reveal";

export function Digital() {
  const { t } = useI18n();
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="bg-background text-foreground hairline-bottom">
      <div className="mx-auto grid max-w-[1600px] gap-10 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="eyebrow reveal">{t("digital_eyebrow")}</p>
        </div>
        <div className="lg:col-span-8">
          <h2 className="reveal font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.04]">
            {t("digital_title")}
          </h2>
          <p className="reveal mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-[17px]">
            {t("digital_body")}
          </p>
          <div className="reveal mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
            <a href="#" className="link-underline text-[11px] font-medium uppercase tracking-[0.32em]">
              LinkedIn ↗
            </a>
            <a href="#" className="link-underline text-[11px] font-medium uppercase tracking-[0.32em]">
              Instagram ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
