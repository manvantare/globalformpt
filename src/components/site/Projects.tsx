import { useI18n, type DictKey } from "@/lib/i18n";
import { useReveal } from "@/hooks/use-reveal";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

type Project = {
  n: string;
  name: string;
  client: string;
  clientKey?: DictKey;
  location: string;
  year: string;
  image?: string;
};

const projects: Project[] = [
  { n: "01", name: "Platanos 422", client: "Habitat Invest", location: "Lisboa, PT", year: "2025", image: p1 },
  { n: "02", name: "Fernão Magalhães 127", client: "Avenue Porto", location: "Porto, PT", year: "2025", image: p2 },
  { n: "03", name: "Tomás Ribeiro 79", client: "Vanguard Properties", location: "Lisboa, PT", year: "2025" },
  { n: "04", name: "Legacy by the Sea", client: "Reformosa", location: "Sesimbra, PT", year: "2026", image: p3 },
  { n: "05", name: "RCC Alvalade", client: "RCC", location: "Lisboa, PT", year: "2025" },
  { n: "06", name: "Marvilla Collection", client: "RE Capital", location: "Lisboa, PT", year: "2026" },
  { n: "07", name: "Funchal / Ponta Delgada", client: "", clientKey: "proj_client_18apt", location: "Açores & Madeira, PT", year: "2026" },
  { n: "08", name: "Hilton", client: "", clientKey: "proj_client_hospitality", location: "PT", year: "2026" },
];

export function Projects() {
  const { t } = useI18n();
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="projects" className="section-dark bg-background text-foreground hairline-bottom">
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-36">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow reveal">{t("projects_eyebrow")}</p>
          </div>
          <div className="lg:col-span-8">
            <h2 className="reveal font-display text-[clamp(2rem,4.4vw,4rem)] leading-[1.04]">
              {t("projects_title")}
            </h2>
            <p className="reveal mt-4 text-sm text-muted-foreground">{t("projects_caption")}</p>
          </div>
        </div>

        <ul className="reveal mt-16 hairline-top">
          {projects.map((p) => (
            <li
              key={p.n}
              className="group relative grid grid-cols-12 items-center gap-4 hairline-bottom py-7 transition-colors hover:bg-foreground/[0.03] md:py-9"
            >
              <span className="col-span-2 font-display text-sm text-muted-foreground md:col-span-1 md:text-base">
                {p.n}
              </span>
              <span className="col-span-10 font-display text-2xl md:col-span-5 md:text-4xl">
                {p.name}
              </span>
              <span className="col-span-6 col-start-3 text-xs uppercase tracking-[0.24em] text-muted-foreground md:col-span-3 md:col-start-auto md:text-[11px]">
                {p.clientKey ? t(p.clientKey) : p.client}
              </span>
              <span className="col-span-4 hidden text-xs uppercase tracking-[0.24em] text-muted-foreground md:col-span-2 md:block md:text-[11px]">
                {p.location}
              </span>
              <span className="col-span-2 text-right font-display text-sm text-muted-foreground md:col-span-1 md:text-base">
                {p.year}
              </span>

              {p.image && (
                <div className="pointer-events-none absolute right-6 top-1/2 z-10 hidden h-72 w-56 -translate-y-1/2 overflow-hidden opacity-0 transition-all duration-500 group-hover:opacity-100 lg:block">
                  <img
                    src={p.image}
                    alt={p.name}
                    width={1280}
                    height={1600}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
