import Image from "next/image";
import Link from "next/link";
import { CabecalhoPagina, NavegacaoSecao } from "@/components/cabecalho-pagina";
import { CtaFinal } from "@/components/cta-final";
import { servicosDoGrupo } from "@/lib/servicos";
import { site } from "@/lib/site";

export const metadata = {
  title: "Estética automotiva",
  description:
    "Polimento automotivo, higienização interna e proteção da pintura com avaliação prévia do veículo. Conheça os tratamentos da Clean Drive Car Wash.",
  alternates: { canonical: "/estetica" },
};

const ESTETICA = servicosDoGrupo("estetica");

const IMAGENS: Record<string, string> = {
  "polimento-automotivo": "/imagens/estetica-polimento.jpg",
  "higienizacao-interna": "/imagens/estetica-higienizacao.jpg",
  "protecao-da-pintura": "/imagens/estetica-protecao.jpg",
};

const METODO = [
  {
    passo: "Avaliação",
    texto:
      "Antes de qualquer produto, avaliamos pintura, plásticos e internos para definir o que é seguro fazer no seu veículo.",
  },
  {
    passo: "Preparação",
    texto:
      "Lavagem e descontaminação da superfície para que o tratamento adira corretamente, sem sujeira embaixo do acabamento.",
  },
  {
    passo: "Execução",
    texto:
      "Polimento, higienização ou proteção aplicados por etapas, com verificação de resultado entre elas.",
  },
  {
    passo: "Recomendação",
    texto:
      "Orientação de cuidados para manter o resultado por mais tempo e o que fazer na próxima manutenção.",
  },
];

export default function PaginaEstetica() {
  return (
    <>
      <CabecalhoPagina
        rotulo="Estética automotiva"
        titulo={
          <>
            Tratamentos que devolvem
            <span className="block text-azul-claro">vida à pintura e aos internos</span>
          </>
        }
        descricao="Polimento, higienização e proteção executados após avaliação do veículo — cada carro recebe o procedimento que a condição dele permite."
        imagem="/imagens/estetica-polimento.jpg"
        alt="Profissional polindo o carro em ambiente de trabalho"
      />
      <NavegacaoSecao atual="estetica" />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20" aria-labelledby="titulo-tratamentos">
        <p className="rotulo">Tratamentos disponíveis</p>
        <h2 id="titulo-tratamentos" className="titulo-secao mt-4 text-prata">
          O que fazemos na estética
        </h2>

        <div className="mt-12 space-y-16">
          {ESTETICA.map((servico, indice) => (
            <article
              key={servico.slug}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
            >
              <div
                className={`relative aspect-[4/3] overflow-hidden border border-borda ${
                  indice % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={IMAGENS[servico.slug] ?? servico.imagem}
                  alt={servico.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 shadow-[inset_0_0_70px_rgba(7,91,232,0.22)]" />
              </div>

              <div className={indice % 2 === 1 ? "lg:order-1" : ""}>
                <p className="rotulo">0{indice + 1}</p>
                <h3 className="mt-3 text-2xl text-prata sm:text-3xl">{servico.nome}</h3>
                <p className="mt-4 text-sm leading-relaxed texto-suave sm:text-base">
                  {servico.descricao}
                </p>

                <ul className="mt-6 space-y-3">
                  {servico.itens.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm texto-suave">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className="mt-1 shrink-0"
                      >
                        <path d="m4.5 12.5 5 5 10-11" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href={`/contato?servico=${encodeURIComponent(servico.nome)}#agendamento`}
                    className="botao botao-azul"
                  >
                    Solicitar avaliação
                  </Link>
                  <span className="text-sm text-prata-3">
                    Valor: <span className="text-prata">{servico.preco ?? "sob consulta"}</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-borda bg-preto-2/60" aria-labelledby="titulo-metodo">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="rotulo">Metodologia</p>
          <h2 id="titulo-metodo" className="titulo-secao mt-4 text-prata">
            Como conduzimos um tratamento
          </h2>

          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {METODO.map((item, indice) => (
              <li key={item.passo} className="cartao p-6">
                <p className="font-display text-3xl text-azul-claro">
                  0{indice + 1}
                </p>
                <h3 className="mt-4 text-base tracking-[0.08em] text-prata">{item.passo}</h3>
                <p className="mt-3 text-sm leading-relaxed texto-suave">{item.texto}</p>
              </li>
            ))}
          </ol>

          <p className="mt-10 max-w-3xl border-l-2 border-azul-claro/70 bg-preto-3/60 px-5 py-4 text-sm leading-relaxed texto-suave">
            Não prometemos resultados que dependam do estado anterior da pintura. Se o veículo
            precisa de correção mais profunda, isso é avaliado e informado antes de qualquer
            cobrança.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6" aria-labelledby="titulo-avaliacao">
        <div className="cartao p-8 sm:p-10">
          <h2 id="titulo-avaliacao" className="text-2xl text-prata">
            Peça uma avaliação do seu veículo
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed texto-suave">
            Envie modelo, ano e fotos pelo WhatsApp ou preencha o formulário. A {site.nome}{" "}
            responde com o procedimento indicado e o valor correspondente.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contato#agendamento" className="botao botao-azul">
              Solicitar avaliação
            </Link>
            <Link href="/servicos" className="botao botao-contorno">
              Ver serviços de lavagem
            </Link>
          </div>
        </div>
      </section>

      <CtaFinal />
    </>
  );
}
