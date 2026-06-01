import { useI18n } from "@/lib/i18n";
import { useReveal } from "@/hooks/use-reveal";
import gaggenau from "@/assets/brands/gaggenau.png.asset.json";
import miele from "@/assets/brands/miele.png.asset.json";
import siemens from "@/assets/brands/siemens.png.asset.json";
import bosch from "@/assets/brands/bosch.png.asset.json";
import aeg from "@/assets/brands/aeg.png.asset.json";
import electrolux from "@/assets/brands/electrolux.png.asset.json";
import lg from "@/assets/brands/lg.png.asset.json";

const appliances = [
  { name: "Gaggenau", logo: gaggenau.url },
  { name: "Miele", logo: miele.url },
  { name: "Siemens", logo: siemens.url },
  { name: "Bosch", logo: bosch.url },
  { name: "AEG", logo: aeg.url },
  { name: "Electrolux", logo: electrolux.url },
  { name: "LG", logo: lg.url },
];
const materials = ["Dekton", "Sensa", "Neolith", "Florim", "Compac"];

export function Brands() {
  const { t } = useI18n();
  const ref = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="brands"
      className="section-dark bg-background text-foreground hairline-bottom"
    >
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-36">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow reveal">{t("brands_eyebrow")}</p>
          </div>
          <div className="lg:col-span-8">
            <h2 className="reveal font-display text-[clamp(2rem,4.4vw,4rem)] leading-[1.04]">
              {t("brands_title")}
            </h2>
          </div>
        </div>

        <div className="mt-20 space-y-16">
          <div className="reveal">
            <div className="mb-6 flex items-center gap-4">
              <span className="eyebrow">{t("brands_appliances")}</span>
              <span className="h-px flex-1 bg-border" />
            </div>
            <div className="grid grid-cols-2 items-center gap-x-8 gap-y-10 md:grid-cols-4 lg:grid-cols-7">
              {appliances.map((b) => (
                <div
                  key={b.name}
                  className="group flex items-center justify-center border border-transparent px-4 py-6 transition hover:border-border"
                >
                  <img
                    src={b.logo}
                    alt={b.name}
                    loading="lazy"
                    className="h-10 w-auto max-w-full object-contain opacity-60 grayscale brightness-0 invert-[0.55] transition group-hover:opacity-90 md:h-14"
                  />
                </div>
              ))}
            </div>
          </div>

          <BrandRow label={t("brands_materials")} items={materials} />
        </div>
      </div>
    </section>
  );
}

function BrandRow({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="reveal">
      <div className="mb-6 flex items-center gap-4">
        <span className="eyebrow">{label}</span>
        <span className="h-px flex-1 bg-border" />
      </div>
      <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4 lg:grid-cols-7">
        {items.map((name) => (
          <div
            key={name}
            className="group flex items-center justify-center border border-transparent py-6 transition hover:border-border"
          >
            <span className="font-display text-2xl tracking-tight text-foreground/70 transition group-hover:text-foreground md:text-[28px]">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
