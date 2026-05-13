import { useState, type FormEvent } from "react";
import closing from "@/assets/closing.jpg";
import { useI18n } from "@/lib/i18n";
import { useReveal } from "@/hooks/use-reveal";

export function Contact() {
  const { t } = useI18n();
  const ref = useReveal<HTMLElement>();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section ref={ref} id="contact" className="section-dark relative overflow-hidden bg-background text-foreground">
      <img
        src={closing}
        alt=""
        width={1920}
        height={1100}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-15"
      />
      <div className="relative mx-auto grid max-w-[1600px] gap-16 px-6 py-24 md:px-10 md:py-36 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow reveal">{t("contact_eyebrow")}</p>
          <h2 className="reveal mt-6 font-display text-[clamp(2.4rem,5vw,5rem)] leading-[1] italic">
            {t("contact_title")}
          </h2>
          <p className="reveal mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
            {t("contact_sub")}
          </p>

          <div className="reveal mt-14 space-y-6 text-sm">
            <div>
              <div className="eyebrow mb-2">Email</div>
              <a className="link-underline font-display text-xl" href="mailto:studio@globalform.pt">
                studio@globalform.pt
              </a>
            </div>
            <div>
              <div className="eyebrow mb-2">Tel</div>
              <a className="link-underline font-display text-xl" href="tel:+351000000000">
                +351 000 000 000
              </a>
            </div>
            <div>
              <div className="eyebrow mb-2">Atelier</div>
              <p className="font-display text-xl">Lisboa · Porto</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          {sent ? (
            <div className="reveal flex h-full min-h-[300px] items-center justify-center hairline-top hairline-bottom px-6 py-16 text-center">
              <p className="font-display text-2xl md:text-3xl">{t("c_sent")}</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="reveal grid gap-px">
              <Field label={t("c_name")} name="name" required />
              <Field label={t("c_email")} name="email" type="email" required />
              <Field label={t("c_company")} name="company" />
              <Field label={t("c_msg")} name="message" textarea required />
              <button
                type="submit"
                className="group mt-8 inline-flex items-center justify-between border border-foreground/80 px-8 py-5 text-[11px] font-medium uppercase tracking-[0.32em] transition hover:bg-foreground hover:text-background"
              >
                <span>{t("c_send")}</span>
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const cls =
    "peer w-full bg-transparent border-0 border-b border-border py-4 text-base text-foreground placeholder-transparent outline-none transition focus:border-foreground";
  return (
    <label className="group relative block pt-6">
      <span className="eyebrow absolute left-0 top-0 transition-colors">{label}{required && " *"}</span>
      {textarea ? (
        <textarea name={name} required={required} rows={4} className={cls} placeholder={label} />
      ) : (
        <input name={name} type={type} required={required} className={cls} placeholder={label} />
      )}
    </label>
  );
}
