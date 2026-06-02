import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./styles.css";
import { I18nProvider } from "@/lib/i18n";
import { SiteNav } from "@/components/site/SiteNav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Brands } from "@/components/site/Brands";
import { Services } from "@/components/site/Services";
import { ExplodedView } from "@/components/site/ExplodedView";
import { Materials } from "@/components/site/Materials";
import { Projects } from "@/components/site/Projects";
import { Sustainability } from "@/components/site/Sustainability";
import { PrivateClients } from "@/components/site/PrivateClients";
import { Digital } from "@/components/site/Digital";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { SmoothScroll } from "@/components/site/SmoothScroll";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <SmoothScroll />
        <div className="min-h-screen bg-background text-foreground">
          <SiteNav />
          <main>
            <Hero />
            <About />
            <Brands />
            <Services />
            <ExplodedView />
            <Materials />
            <Projects />
            <Sustainability />
            <PrivateClients />
            <Digital />
            <Contact />
          </main>
          <Footer />
        </div>
      </I18nProvider>
    </QueryClientProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
