import { useI18n } from "@/lib/i18n";
import { useReveal } from "@/hooks/use-reveal";

export function About() {
  const { t } = useI18n();
  const ref = useReveal<HTMLElement>();
  const kw: Array<"about_kw_1" | "about_kw_2" | "about_kw_3" | "about_kw_4"> = [
    "about_kw_1",
    "about_kw_2",
    "about_kw_3",
    "about_kw_4",
  ];

  return (
    <section ref={ref} id="studio" className="bg-background text-foreground hairline-bottom">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-6 py-24 md:px-10 md:py-36 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <p className="eyebrow reveal">{t("about_eyebrow")}</p>
        </div>
        <div className="lg:col-span-8">
          <h2 className="reveal font-display text-[clamp(2rem,4.4vw,4rem)] leading-[1.04]">
            {t("about_title")}
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <p className="reveal text-base leading-relaxed text-muted-foreground md:text-[17px]">
              {t("about_p1")}
            </p>
            <p className="reveal text-base leading-relaxed text-muted-foreground md:text-[17px]">
              {t("about_p2")}
            </p>
          </div>

          <ul className="reveal mt-16 grid grid-cols-2 gap-x-6 gap-y-4 md:grid-cols-4">
            {kw.map((k, i) => (
              <li key={k} className="flex items-baseline gap-3">
                <span className="font-display text-sm text-muted-foreground">0{i + 1}</span>
                <span className="font-display text-lg md:text-xl">{t(k)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
