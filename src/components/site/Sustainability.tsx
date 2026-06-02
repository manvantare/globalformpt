import materialsImg from "@/assets/materials.jpg";
import { useI18n } from "@/lib/i18n";
import { useReveal } from "@/hooks/use-reveal";

const certs = [
  { k: "FSC", logo: "/certs/fsc.png" },
  { k: "PEFC", logo: "/certs/pefc.png" },
  { k: "ISO 14001", logo: "/certs/iso14001.png" },
];

export function Sustainability() {
  const { t } = useI18n();
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="sustainability" className="bg-background text-foreground hairline-bottom">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-6 py-24 md:px-10 md:py-36 lg:grid-cols-12 lg:gap-16">
        <div className="reveal lg:col-span-6">
          <div className="aspect-[4/3] w-full overflow-hidden">
            <img
              src={materialsImg}
              alt={t("alt_sustain")}
              width={1600}
              height={1100}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-6 lg:pt-12">
          <p className="eyebrow reveal">{t("sustain_eyebrow")}</p>
          <h2 className="reveal mt-6 font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.04]">
            {t("sustain_title")}
          </h2>
          <p className="reveal mt-8 max-w-lg text-base leading-relaxed text-muted-foreground md:text-[17px]">
            {t("sustain_body")}
          </p>
          <div className="reveal mt-12 flex flex-wrap items-center gap-x-12 gap-y-6">
            {certs.map((c) => (
              <img
                key={c.k}
                src={c.logo}
                alt={c.k}
                loading="lazy"
                className="h-16 w-auto object-contain opacity-70 grayscale brightness-0 invert-[0.55] transition hover:opacity-100 md:h-20"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
