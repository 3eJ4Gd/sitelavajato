/**
 * Catálogo de serviços — configurável.
 *
 * Edite nome, descrição, itens inclusos, preço e imagem para refletir
 * exatamente os serviços oferecidos pela Carlão Detail.
 *
 * - `preco: null`  → o card exibe "Sob consulta" e o botão vira "Consultar preço".
 * - `preco: "R$ 120"` → o valor aparece no card e no botão "Agendar este serviço".
 *
 * Nunca publique preços ou promessas que a empresa não confirme.
 */

export type GrupoServico = "lavagem" | "estetica";

export interface Servico {
  slug: string;
  nome: string;
  resumo: string;
  descricao: string;
  itens: string[];
  preco: string | null;
  grupo: GrupoServico;
  imagem: string;
  alt: string;
  /** Entra na vitrine de 4 cards da página inicial. */
  destaque: boolean;
}

export const servicos: Servico[] = [
  {
    slug: "lavagem-externa",
    nome: "Lavagem externa",
    resumo: "Limpeza e acabamento da parte externa.",
    descricao:
      "Pré-lavagem, lavagem com BMW e toalha de microfibra, secagem manual e acabamento nas peças externas.",
    itens: [
      "Pré-lavagem com desengraxe",
      "Lavagem com produto neutro",
      "Secagem manual sem marcas",
      "Acabamento em pneus e plásticos",
    ],
    preco: null,
    grupo: "lavagem",
    imagem: "/imagens/servico-externa.jpg",
    alt: "Carro coberto de espuma durante a lavagem externa",
    destaque: true,
  },
  {
    slug: "limpeza-interna",
    nome: "Limpeza interna",
    resumo: "Bancos, painel e superfícies internas.",
    descricao:
      "Aspiração completa, limpeza de painel, portas e carpetes, além de higienização dos pontos de toque.",
    itens: [
      "Aspiração de bancos e carpetes",
      "Limpeza de painel e portas",
      "Higienização de alavancas e volante",
      "Acabamento em couro e vinil",
    ],
    preco: null,
    grupo: "lavagem",
    imagem: "/imagens/servico-interna.jpg",
    alt: "Interior premium de carro com bancos de couro recém-limpos",
    destaque: true,
  },
  {
    slug: "lavagem-completa",
    nome: "Lavagem completa",
    resumo: "Pacote de cuidados internos e externos.",
    descricao:
      "A combinação dos dois cuidados em um só atendimento: exterior brilhante por fora, interior impecável por dentro.",
    itens: [
      "Lavagem externa completa",
      "Limpeza interna completa",
      "Acabamento em pneus",
      "Revisão final de detalhes",
    ],
    preco: null,
    grupo: "lavagem",
    imagem: "/imagens/servico-completa.jpg",
    alt: "Dois carros sendo lavados com espuma branca",
    destaque: true,
  },
  {
    slug: "polimento-automotivo",
    nome: "Polimento automotivo",
    resumo: "Tratamento estético da pintura, conforme avaliação.",
    descricao:
      "Correção leve da pintura para recuperar brilho e reduzir microarranhões. O serviço é avaliado veículo a veículo.",
    itens: [
      "Avaliação da condição da pintura",
      "Polimento de correção",
      "Brilho e uniformização do verniz",
      "Recomendação de proteção",
    ],
    preco: null,
    grupo: "estetica",
    imagem: "/imagens/servico-polimento.jpg",
    alt: "Profissional polindo o capô de um carro azul com roda orbital",
    destaque: true,
  },
  {
    slug: "higienizacao-interna",
    nome: "Higienização interna",
    resumo: "Limpeza profunda de estofados, carpetes e porta-malas.",
    descricao:
      "Tratamento detalhado das superfícies internas, com produtos adequados a cada tipo de material.",
    itens: [
      "Extração de sujeira dos estofados",
      "Limpeza de carpetes e porta-malas",
      "Tratamento de couro, quando aplicável",
      "Neutralização de odores",
    ],
    preco: null,
    grupo: "estetica",
    imagem: "/imagens/estetica-higienizacao.jpg",
    alt: "Detalhista limpando o painel de um carro clássico",
    destaque: false,
  },
  {
    slug: "protecao-da-pintura",
    nome: "Proteção da pintura",
    resumo: "Camada protetora para prolongar o brilho da pintura.",
    descricao:
      "Aplicação de cera ou proteção compatível com o estado da pintura, indicada após a avaliação do veículo.",
    itens: [
      "Preparação da superfície",
      "Aplicação de cera ou protetor",
      "Acabamento manual",
      "Orientação de conservação",
    ],
    preco: null,
    grupo: "estetica",
    imagem: "/imagens/estetica-protecao.jpg",
    alt: "Pano de microfibra sobre a pintura azul e brilhante de um carro",
    destaque: false,
  },
];

export const grupos: { valor: GrupoServico; nome: string; descricao: string }[] = [
  {
    valor: "lavagem",
    nome: "Lavagem",
    descricao: "Rotina de limpeza para manter o carro sempre em dia.",
  },
  {
    valor: "estetica",
    nome: "Estética automotiva",
    descricao: "Tratamentos que cuidam da pintura e dos internos.",
  },
];

export function servicosEmDestaque(): Servico[] {
  return servicos.filter((s) => s.destaque);
}

export function servicosDoGrupo(grupo: GrupoServico): Servico[] {
  return servicos.filter((s) => s.grupo === grupo);
}

export function acharServico(slug: string): Servico | undefined {
  return servicos.find((s) => s.slug === slug);
}

export const nomesDeServicos = servicos.map((s) => s.nome);
