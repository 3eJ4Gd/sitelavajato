import { CabecalhoPagina, NavegacaoSecao } from "@/components/cabecalho-pagina";
import { Galeria } from "@/components/galeria";
import { CtaFinal } from "@/components/cta-final";

export const metadata = {
  title: "Galeria de trabalhos",
  description:
    "Fotos dos veículos atendidos pelo Carlão Detail, com filtros por serviço, comparação de antes e depois e visualização ampliada.",
  alternates: { canonical: "/galeria" },
};

export default function PaginaGaleria() {
  return (
    <>
      <CabecalhoPagina
        rotulo="Portfólio"
        titulo={
          <>
            Galeria de
            <span className="block text-azul-claro">trabalhos realizados</span>
          </>
        }
        descricao="Filtre por serviço, abra as fotos em tela ampliada e compare antes e depois arrastando o cursor sobre a imagem."
        imagem="/imagens/galeria-01.jpg"
        alt="Carro esportivo sendo lavado com jato de alta pressão"
      />
      <NavegacaoSecao atual="galeria" />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20" aria-labelledby="titulo-galeria">
        <h2 id="titulo-galeria" className="sr-only">
          Fotos dos veículos atendidos
        </h2>
        <Galeria />
      </section>

      <CtaFinal />
    </>
  );
}
