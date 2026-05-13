import { useI18n } from "@/lib/i18n";
import { useReveal } from "@/hooks/use-reveal";

export function PrivateClients() {
  const { t } = useI18n();
  const ref = useReveal<HTMLElement>();
  const items: Array<{ t: "private_1_t" | "private_2_t" | "private_3_t"; d: "private_1_d" | "private_2_d" | "private_3_d" }> = [
    { t: "private_1_t", d: "private_1_d" },
    { t: "private_2_t", d: "private_2_d" },
    { t: "private_3_t", d: "private_3_d" },
  ];
  return (
    <section ref={ref} className="section-dark bg-background text-foreground hairline-bottom">
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow reveal">{t("private_eyebrow")}</p>
          </div>
          <div className="lg:col-span-8">
            <h2 className="reveal font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.04]">
              {t("private_title")}
            </h2>
          </div>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {items.map((it, i) => (
            <div key={it.t} className="reveal hairline-top pt-8">
              <span className="font-display text-sm text-muted-foreground">0{i + 1}</span>
              <h3 className="mt-4 font-display text-2xl md:text-3xl">{t(it.t)}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                {t(it.d)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
