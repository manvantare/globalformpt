import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Logo } from "./Logo";

const links: Array<{ id: string; key: "nav_about" | "nav_brands" | "nav_services" | "nav_projects" | "nav_sustain" | "nav_contact" }> = [
  { id: "studio", key: "nav_about" },
  { id: "brands", key: "nav_brands" },
  { id: "method", key: "nav_services" },
  { id: "projects", key: "nav_projects" },
  { id: "sustainability", key: "nav_sustain" },
  { id: "contact", key: "nav_contact" },
];

export function SiteNav() {
  const { lang, setLang, t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color,color] duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md text-foreground hairline-bottom"
          : "bg-transparent text-bone"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10 md:py-6">
        <a href="#top" className="font-display text-xl tracking-tight md:text-2xl">
          <span className="font-medium">GLOBAL</span>
          <span className="opacity-60">FORM</span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="link-underline text-[11px] font-medium uppercase tracking-[0.32em]"
            >
              {t(l.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.32em]">
            <button
              onClick={() => setLang("en")}
              className={lang === "en" ? "opacity-100" : "opacity-40 hover:opacity-80"}
              aria-label="English"
            >
              EN
            </button>
            <span className="opacity-30">/</span>
            <button
              onClick={() => setLang("pt")}
              className={lang === "pt" ? "opacity-100" : "opacity-40 hover:opacity-80"}
              aria-label="Português"
            >
              PT
            </button>
          </div>
          <button
            className="lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            <div className="flex h-5 w-7 flex-col justify-between">
              <span className={`h-px w-full bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`h-px w-full bg-current transition ${open ? "opacity-0" : ""}`} />
              <span className={`h-px w-full bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background text-foreground hairline-top">
          <nav className="mx-auto flex max-w-[1600px] flex-col gap-5 px-6 py-8">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="font-display text-3xl"
              >
                {t(l.key)}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
