import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "en" | "pt";

type Dict = Record<string, { en: string; pt: string }>;

export const dict = {
  nav_about: { en: "Studio", pt: "Estúdio" },
  nav_brands: { en: "Brands", pt: "Marcas" },
  nav_services: { en: "Method", pt: "Método" },
  nav_projects: { en: "Projects", pt: "Projetos" },
  nav_sustain: { en: "Sustainability", pt: "Sustentabilidade" },
  nav_contact: { en: "Contact", pt: "Contacto" },

  hero_eyebrow: { en: "Est. — Bespoke Industrial", pt: "Est. — Indústria à Medida" },
  hero_title_a: { en: "Bespoke industrial", pt: "Soluções industriais" },
  hero_title_b: { en: "solutions for", pt: "à medida para" },
  hero_title_c: { en: "architecture & interior design.", pt: "arquitetura e design de interiores." },
  hero_sub: {
    en: "Precision, quality, reliability and speed — engineered for architects, developers and consultants who demand a signature finish.",
    pt: "Precisão, qualidade, confiança e rapidez — para arquitetos, promotores e consultores que exigem um acabamento de assinatura.",
  },
  hero_cta: { en: "Discover Projects", pt: "Ver Projetos" },
  hero_cta_2: { en: "Speak with the studio", pt: "Falar com o estúdio" },
  hero_scroll: { en: "Scroll", pt: "Descer" },

  about_eyebrow: { en: "01 — Who we are", pt: "01 — Quem somos" },
  about_title: {
    en: "An atelier of industrial precision and architectural intent.",
    pt: "Um atelier de precisão industrial e intenção arquitetónica.",
  },
  about_p1: {
    en: "Globalform partners with architects, developers, promoters and consultants to deliver interiors that read as one continuous gesture. We operate as a hybrid: the discipline of an industrial workshop with the curiosity of a bespoke studio.",
    pt: "A Globalform colabora com arquitetos, promotores, consultores e investidores para entregar interiores que se leem como um único gesto. Operamos como um híbrido: a disciplina de uma oficina industrial com a curiosidade de um estúdio à medida.",
  },
  about_p2: {
    en: "Each project preserves its own identity. We bring modular excellence, cost predictability and a calendar you can trust — without diluting the design intent that defines the work.",
    pt: "Cada projeto preserva a sua identidade. Trazemos excelência modular, previsibilidade de custos e um calendário em que se pode confiar — sem diluir a intenção de design que define cada obra.",
  },
  about_kw_1: { en: "Bespoke industrial", pt: "Indústria à medida" },
  about_kw_2: { en: "Modular excellence", pt: "Excelência modular" },
  about_kw_3: { en: "Signature solutions", pt: "Soluções de assinatura" },
  about_kw_4: { en: "Precision execution", pt: "Execução precisa" },

  brands_eyebrow: { en: "02 — Branding by association", pt: "02 — Marcas associadas" },
  brands_title: {
    en: "We work with the houses that define the category.",
    pt: "Trabalhamos com as casas que definem a categoria.",
  },
  brands_appliances: { en: "Appliances", pt: "Eletrodomésticos" },
  brands_materials: { en: "Materials", pt: "Materiais" },

  services_eyebrow: { en: "03 — Method", pt: "03 — Método" },
  services_title: {
    en: "Modular industrial production. Signature design outcomes.",
    pt: "Produção industrial modular. Resultados de design de assinatura.",
  },
  s1_t: { en: "Quality", pt: "Qualidade" },
  s1_d: { en: "Industrial standards applied to bespoke detailing — joinery, stone, metalwork, integrated appliances.", pt: "Padrões industriais aplicados a detalhes únicos — marcenaria, pedra, metalomecânica e eletrodomésticos integrados." },
  s2_t: { en: "Speed", pt: "Velocidade" },
  s2_d: { en: "Predictable lead times. Modular production compresses the schedule without compromise.", pt: "Prazos previsíveis. A produção modular comprime o cronograma sem ceder em qualidade." },
  s3_t: { en: "Control", pt: "Controlo" },
  s3_d: { en: "One studio, end-to-end: design assistance, fabrication, install and direct after-sales — no intermediaries.", pt: "Um único estúdio, do início ao fim: apoio ao desenho, fabrico, instalação e pós-venda direto — sem intermediários." },
  s4_t: { en: "Exclusivity", pt: "Exclusividade" },
  s4_d: { en: "Signature solutions tailored to each address — never the same room twice.", pt: "Soluções de assinatura desenhadas para cada morada — nunca a mesma sala duas vezes." },

  projects_eyebrow: { en: "04 — Selected works", pt: "04 — Obras selecionadas" },
  projects_title: { en: "Current portfolio.", pt: "Portfólio atual." },
  projects_caption: { en: "In progress & recently delivered, 2024 — 2026.", pt: "Em curso e recentemente entregues, 2024 — 2026." },

  sustain_eyebrow: { en: "05 — Sustainability", pt: "05 — Sustentabilidade" },
  sustain_title: { en: "Responsibility, quietly engineered.", pt: "Responsabilidade, silenciosamente projetada." },
  sustain_body: {
    en: "FSC and PEFC certified supply chains. Materials sourced with traceability and longevity in mind. Sustainability as a discipline, not a slogan.",
    pt: "Cadeias de abastecimento certificadas FSC e PEFC. Materiais selecionados com rastreabilidade e durabilidade em mente. Sustentabilidade como disciplina, não como discurso.",
  },

  private_eyebrow: { en: "06 — Private clients", pt: "06 — Clientes privados" },
  private_title: { en: "A standard reserved for residences of consequence.", pt: "Um padrão reservado para residências de exceção." },
  private_1_t: { en: "5-year warranty", pt: "Garantia 5 anos" },
  private_1_d: { en: "Underwritten by the studio. Direct after-sales, no intermediaries.", pt: "Assinada pelo estúdio. Pós-venda direto, sem intermediários." },
  private_2_t: { en: "Fully bespoke", pt: "Totalmente à medida" },
  private_2_d: { en: "Every dimension, finish and joint specified for the home in question.", pt: "Cada dimensão, acabamento e junta especificados para a casa em questão." },
  private_3_t: { en: "Premium execution", pt: "Execução premium" },
  private_3_d: { en: "A single, uncompromising standard — applied across every surface.", pt: "Um único padrão, sem compromissos — aplicado em todas as superfícies." },

  digital_eyebrow: { en: "07 — Digital presence", pt: "07 — Presença digital" },
  digital_title: { en: "Quietly published. Internationally read.", pt: "Publicado com discrição. Lido internacionalmente." },
  digital_body: { en: "Two editorial posts a week on LinkedIn and Instagram. A continuous record of the work and the thinking behind it.", pt: "Duas publicações editoriais por semana no LinkedIn e Instagram. Um registo contínuo do trabalho e do pensamento que o sustenta." },

  contact_eyebrow: { en: "08 — Contact", pt: "08 — Contacto" },
  contact_title: { en: "Let's build with precision.", pt: "Vamos construir com precisão." },
  contact_sub: { en: "Briefs welcome from architects, developers, promoters and private clients.", pt: "Aceitamos briefings de arquitetos, promotores, consultores e clientes privados." },
  c_name: { en: "Name", pt: "Nome" },
  c_email: { en: "Email", pt: "Email" },
  c_company: { en: "Practice / Company", pt: "Atelier / Empresa" },
  c_msg: { en: "Tell us about the project", pt: "Conte-nos sobre o projeto" },
  c_send: { en: "Send enquiry", pt: "Enviar pedido" },
  c_sent: { en: "Thank you. We'll be in touch within 48 hours.", pt: "Obrigado. Responderemos em 48 horas." },
  c_atelier: { en: "Atelier", pt: "Atelier" },
  c_tel: { en: "Tel", pt: "Telefone" },

  mat_eyebrow: { en: "— Materials", pt: "— Materiais" },
  mat_title: { en: "A library of materials, tested for permanence.", pt: "Uma biblioteca de materiais, testada para a permanência." },
  mat_1_n: { en: "Smoked European Oak", pt: "Carvalho Europeu Fumado" },
  mat_1_c: { en: "Quarter-sawn, hand-finished. Open grain, low sheen.", pt: "Corte radial, acabamento manual. Veio aberto, brilho discreto." },
  mat_2_n: { en: "Brushed Brass", pt: "Latão Escovado" },
  mat_2_c: { en: "Solid brass with directional brushing. Ages with intention.", pt: "Latão maciço com escovagem direcional. Envelhece com intenção." },
  mat_3_n: { en: "Honed Travertine", pt: "Travertino Amaciado" },
  mat_3_c: { en: "Vein-cut Italian travertine. Matte, soft to the hand.", pt: "Travertino italiano em corte veio. Mate, suave ao toque." },
  mat_4_n: { en: "Patinated Steel", pt: "Aço Patinado" },
  mat_4_c: { en: "Cold-rolled steel, hot-blackened. Architectural permanence.", pt: "Aço laminado a frio, enegrecido a quente. Permanência arquitetónica." },

  exp_title: { en: "Engineered in layers.", pt: "Engenhado em camadas." },
  exp_body: { en: "Scroll to disassemble a bespoke wall-system — every millimetre is drawn, sourced and finished in-house.", pt: "Desça para desmontar um sistema de parede à medida — cada milímetro é desenhado, selecionado e acabado em casa." },
  exp_l1: { en: "01 — Brushed brass inlay", pt: "01 — Embutido em latão escovado" },
  exp_l2: { en: "02 — Smoked oak veneer", pt: "02 — Folha de carvalho fumado" },
  exp_l3: { en: "03 — CNC core panel", pt: "03 — Painel central CNC" },
  exp_l4: { en: "04 — Acoustic substrate", pt: "04 — Substrato acústico" },
  exp_l5: { en: "05 — Steel frame", pt: "05 — Estrutura em aço" },

  proj_client_hospitality: { en: "Hospitality", pt: "Hotelaria" },
  proj_client_18apt: { en: "18 Apartments", pt: "18 Apartamentos" },

  alt_hero: { en: "Bespoke architectural interior in concrete and oak", pt: "Interior arquitetónico à medida em betão e carvalho" },
  alt_sustain: { en: "Premium responsibly sourced materials", pt: "Materiais premium de origem responsável" },

  footer_tag: { en: "Bespoke Industrial Solutions", pt: "Soluções Industriais à Medida" },
  footer_rights: { en: "All rights reserved.", pt: "Todos os direitos reservados." },
} satisfies Dict;

export type DictKey = keyof typeof dict;

const I18nCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (k: DictKey) => string }>({
  lang: "en",
  setLang: () => {},
  t: (k) => dict[k].en,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const t = (k: DictKey) => dict[k][lang];
  return <I18nCtx.Provider value={{ lang, setLang, t }}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  return useContext(I18nCtx);
}
