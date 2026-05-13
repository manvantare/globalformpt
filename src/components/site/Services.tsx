import { useI18n } from "@/lib/i18n";
import { useReveal } from "@/hooks/use-reveal";

export function Services() {
  const { t } = useI18n();
  const ref = useReveal<HTMLElement>();
  const items: Array<{ t: "s1_t" | "s2_t" | "s3_t" | "s4_t"; d: "s1_d" | "s2_d" | "s3_d" | "s4_d" }> = [
    { t: "s1_t", d: "s1_d" },
    { t: "s2_t", d: "s2_d" },
    { t: "s3_t", d: "s3_d" },
    { t: "s4_t", d: "s4_d" },
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
          {items.map((it, i) => (
            <article
              key={it.t}
              className="reveal flex flex-col gap-8 bg-background p-8 md:p-10"
            >
              <span className="font-display text-sm text-muted-foreground">/ 0{i + 1}</span>
              <h3 className="font-display text-3xl md:text-4xl">{t(it.t)}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                {t(it.d)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
