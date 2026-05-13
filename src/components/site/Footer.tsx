import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-ink text-bone">
      <div className="mx-auto grid max-w-[1600px] gap-10 px-6 py-14 md:grid-cols-3 md:px-10">
        <div>
          <p className="font-display text-2xl">
            <span className="font-medium">GLOBAL</span>
            <span className="opacity-60">FORM</span>
          </p>
          <p className="mt-3 text-[11px] uppercase tracking-[0.32em] text-bone/60">
            {t("footer_tag")}
          </p>
        </div>
        <div className="text-sm text-bone/70">
          <p>Lisboa · Porto</p>
          <p>studio@globalform.pt</p>
        </div>
        <div className="md:text-right">
          <p className="text-[11px] uppercase tracking-[0.32em] text-bone/60">
            © {new Date().getFullYear()} Globalform — {t("footer_rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
