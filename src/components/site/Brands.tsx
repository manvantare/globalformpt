import { useI18n } from "@/lib/i18n";
import { useReveal } from "@/hooks/use-reveal";

const appliances = ["Gaggenau", "Miele", "Siemens", "Bosch", "AEG", "Electrolux", "LG"];
const materials = ["Cosentino", "Dekton", "Sensa", "Neolith", "Florim", "Compac"];

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
          <BrandRow label={t("brands_appliances")} items={appliances} />
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
