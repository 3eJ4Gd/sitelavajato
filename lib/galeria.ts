/**
 * Galeria de trabalhos.
 *
 * As imagens atuais são fotografias de referência (Unsplash) usadas como
 * conteúdo demonstrativo. Substitua por fotos reais dos veículos atendidos
 * carregando os arquivos em `public/imagens` e apontando os caminhos aqui.
 *
 * `demonstrativo: true` faz a galeria exibir um aviso discreto de que as
 * fotos ainda não são do portfólio da empresa — remova a marcação quando
 * as fotos reais forem enviadas.
 */

export type CategoriaFoto = "lavagem" | "estetica";
export type CategoriaGaleria = "todos" | CategoriaFoto | "antes-depois";

export interface Foto {
  id: string;
  src: string;
  alt: string;
  legenda: string;
  categoria: CategoriaFoto;
}

export interface Comparacao {
  id: string;
  titulo: string;
  legenda: string;
  antes: { src: string; alt: string };
  depois: { src: string; alt: string };
}

export const categoriasGaleria: { valor: CategoriaGaleria; nome: string }[] = [
  { valor: "todos", nome: "Todos" },
  { valor: "lavagem", nome: "Lavagem" },
  { valor: "estetica", nome: "Estética" },
  { valor: "antes-depois", nome: "Antes e depois" },
];

export const fotos: Foto[] = [
  {
    id: "f01",
    src: "/imagens/galeria-01.jpg",
    alt: "Esporteiro sendo lavado com jato de alta pressão",
    legenda: "Lavagem externa · esportivo",
    categoria: "lavagem",
  },
  {
    id: "f02",
    src: "/imagens/galeria-02.jpg",
    alt: "Lavagem com jato em uma garagem",
    legenda: "Pré-lavagem · jato de água",
    categoria: "lavagem",
  },
  {
    id: "f03",
    src: "/imagens/galeria-03.jpg",
    alt: "Carro branco coberto de espuma durante a lavagem",
    legenda: "Espuma neutra · carro branco",
    categoria: "lavagem",
  },
  {
    id: "f04",
    src: "/imagens/galeria-04.jpg",
    alt: "Carro preto coberto de sabão durante a lavagem",
    legenda: "Lavagem completa · carro preto",
    categoria: "lavagem",
  },
  {
    id: "f05",
    src: "/imagens/galeria-05.jpg",
    alt: "Pessoa lavando um carro azul com pano",
    legenda: "Lavagem manual · microfibra",
    categoria: "lavagem",
  },
  {
    id: "f06",
    src: "/imagens/galeria-06.jpg",
    alt: "Pessoa limpando um carro com pano amarelo",
    legenda: "Acabamento · pintura",
    categoria: "estetica",
  },
  {
    id: "f07",
    src: "/imagens/galeria-07.jpg",
    alt: "Escova limpando a roda de um carro",
    legenda: "Rodas e pneus · detalhamento",
    categoria: "estetica",
  },
  {
    id: "f08",
    src: "/imagens/galeria-08.jpg",
    alt: "Ford Mustang branco fotografada de frente",
    legenda: "Acabamento final · Mustang",
    categoria: "estetica",
  },
  {
    id: "f09",
    src: "/imagens/galeria-09.jpg",
    alt: "BMW M3 branco em ambiente fechado",
    legenda: "Revisão de detalhes · BMW",
    categoria: "estetica",
  },
  {
    id: "f10",
    src: "/imagens/galeria-10.jpg",
    alt: "Carro preto estacionado com pintura brilhante",
    legenda: "Proteção da pintura · preto",
    categoria: "estetica",
  },
  {
    id: "f11",
    src: "/imagens/galeria-11.jpg",
    alt: "Sedan preto limpo em ambiente externo",
    legenda: "Lavagem completa · sedan",
    categoria: "lavagem",
  },
  {
    id: "f12",
    src: "/imagens/galeria-12.jpg",
    alt: "Homem lavando o carro com esponja",
    legenda: "Lavagem externa · esponja",
    categoria: "lavagem",
  },
];

/**
 * Pares de comparação. Enquanto a empresa não enviar fotos reais do mesmo
 * veículo antes e depois, estes pares são rotulados como demonstrativos
 * na interface — não devem ser apresentados como resultados reais.
 */
export const comparacoes: Comparacao[] = [
  {
    id: "c01",
    titulo: "Lavagem externa",
    legenda: "Do estado sujo ao acabamento com brilho",
    antes: {
      src: "/imagens/galeria-05.jpg",
      alt: "Carro azul durante a lavagem, com espuma na pintura",
    },
    depois: {
      src: "/imagens/estetica-protecao.jpg",
      alt: "Pintura azul limpa e brilhante com pano de microfibra",
    },
  },
  {
    id: "c02",
    titulo: "Acabamento da pintura",
    legenda: "Espuma removida e verniz uniformizado",
    antes: {
      src: "/imagens/servico-externa.jpg",
      alt: "Carro coberto de espuma durante a pré-lavagem",
    },
    depois: {
      src: "/imagens/estetica-cristalizacao.jpg",
      alt: "Frontal de carro limpo e com reflexo na pintura",
    },
  },
];

/** Avisos exibidos na interface enquanto o conteúdo for demonstrativo. */
export const avisoConteudoDemonstrativo =
  "Galeria demonstrativa — as fotos ainda não são do portfólio real da Clean Drive. Substitua por fotos dos veículos atendidos antes de publicar.";
