/**
 * Dados comerciais da Carlão Detail.
 *
 * Este é o ÚNICO arquivo que precisa ser editado para alterar telefone,
 * WhatsApp, endereço, horários e redes sociais. Não há painel administrativo
 * nesta fase (Fase 3 do PRD) — a configuração é feita por aqui e o site é
 * recompilado.
 *
 * Os valores abaixo são PROVISÓRIOS e devem ser substituídos pelos dados
 * reais da empresa antes da publicação (ver README, seção "Configurar").
 */

const numeroWhatsapp = (
  process.env.NEXT_PUBLIC_WHATSAPP_NUMERO ?? ""
).replace(/\D/g, "");

/** Valor padrão provisório — troque pelo número real antes de publicar. */
const WHATSAPP_PADRAO = "5511999990000";

export type Horario = { dia: string; horas: string };
export type RedeSocial = { nome: string; url: string };

export interface Site {
  nome: string;
  nomeCompleto: string;
  nomeLegivel: string;
  slogan: string;
  descricao: string;
  dominio: string;
  whatsapp: string;
  whatsappNaoConfigurado: boolean;
  telefoneExibicao: string;
  telefoneLink: string;
  email: string;
  endereco: {
    logradouro: string;
    numero: string;
    complemento: string;
    cidade: string;
    uf: string;
    cep: string;
    completo: string;
  };
  horarios: Horario[];
  redes: RedeSocial[];
}

export const site: Site = {
  nome: "Carlão Detail",
  nomeCompleto: "Carlão Detail",
  nomeLegivel: "CARLÃO DETAIL",
  slogan: "Mais que uma lavagem, é um cuidado especial.",
  descricao:
    "Lavagem automotiva e estética veicular com cuidado, tecnologia e atenção aos detalhes. Agende sua lavagem pelo WhatsApp.",

  /** Domínio público usado em metadados, Open Graph e sitemap. */
  dominio: process.env.NEXT_PUBLIC_DOMINIO ?? "https://carlaodetail.com.br",

  /**
   * WhatsApp em formato internacional, apenas números.
   * Ex.: 5511987654321 (55 = Brasil, 11 = DDD, 987654321 = número).
   */
  whatsapp: numeroWhatsapp || WHATSAPP_PADRAO,
  whatsappNaoConfigurado: (numeroWhatsapp || WHATSAPP_PADRAO) === WHATSAPP_PADRAO,

  telefoneExibicao: "(11) 99999-0000",
  telefoneLink: "5511999990000",

  email: "contato@carlaodetail.com.br",

  endereco: {
    logradouro: "Av. Principal",
    numero: "1000",
    complemento: "Galpão 3 — Bairro Industrial",
    cidade: "São Paulo",
    uf: "SP",
    cep: "01000-000",
    completo:
      "Av. Principal, 1000 — Galpão 3, Bairro Industrial, São Paulo - SP, CEP 01000-000",
  },

  horarios: [
    { dia: "Segunda a sexta", horas: "08h às 18h" },
    { dia: "Sábado", horas: "08h às 14h" },
    { dia: "Domingo e feriados", horas: "Fechado" },
  ],

  redes: [],
};

/** Query usada no iframe do Google Maps e no link "Abrir no Google Maps". */
export function mapaQuery(endereco: Site["endereco"]): string {
  return encodeURIComponent(
    `${endereco.logradouro}, ${endereco.numero} - ${endereco.cidade}, ${endereco.uf}`,
  );
}
