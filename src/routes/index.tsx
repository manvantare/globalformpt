import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { SiteNav } from "@/components/site/SiteNav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Brands } from "@/components/site/Brands";
import { Services } from "@/components/site/Services";
import { Projects } from "@/components/site/Projects";
import { Sustainability } from "@/components/site/Sustainability";
import { PrivateClients } from "@/components/site/PrivateClients";
import { Digital } from "@/components/site/Digital";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Globalform — Bespoke Industrial Solutions for Architecture & Interior Design" },
      {
        name: "description",
        content:
          "Globalform partners with architects, developers and consultants to deliver bespoke industrial interiors — precision, quality, reliability and speed.",
      },
      { property: "og:title", content: "Globalform — Bespoke Industrial Solutions" },
      { property: "og:description", content: "Architectural interiors, modular excellence, signature solutions." },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Globalform",
          description: "Bespoke industrial solutions for architecture and interior design.",
          url: "/",
          areaServed: "International",
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-background text-foreground">
        <SiteNav />
        <main>
          <Hero />
          <About />
          <Brands />
          <Services />
          <Projects />
          <Sustainability />
          <PrivateClients />
          <Digital />
          <Contact />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
