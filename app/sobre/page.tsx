import Image from "next/image";
import Link from "next/link";
import { CabecalhoPagina, NavegacaoSecao } from "@/components/cabecalho-pagina";
import { CtaFinal } from "@/components/cta-final";
import { site } from "@/lib/site";

export const metadata = {
  title: "Sobre nós",
  description:
    "Conheça a forma de trabalhar da Clean Drive Car Wash: avaliação prévia, produtos adequados, processo organizado e confirmação de cada agendamento.",
  alternates: { canonical: "/sobre" },
};

const PILARES = [
  {
    titulo: "Avaliar antes de agir",
    texto:
      "Nenhum serviço começa sem olhar o veículo. Pintura, internos e acessórios definem qual procedimento é seguro executar.",
  },
  {
    titulo: "Produto certo para cada superfície",
    texto:
      "Pintura, couro, vinil e plástico não recebem o mesmo produto. A escolha é parte do trabalho, não um detalhe.",
  },
  {
    titulo: "Etapa por etapa, sem pressa",
    texto:
      "Pré-lavagem, lavagem, secagem e acabamento acontecem em sequência. Acelerar uma etapa é o que causa marca e re-trabalho.",
  },
  {
    titulo: "Revisão final sempre",
    texto:
      "Antes da entrega, percorremos cantos, frisos, rodas e internos — o carro só sai quando passa na checagem final.",
  },
];

const COMPROMISSOS = [
  "Combinar data, horário e valor antes do atendimento.",
  "Informar quando um serviço não resolve o problema apresentado.",
  "Não prometer prazo que a fila do dia não permite.",
  "Registrar as observações do cliente antes de começar.",
];

export default function PaginaSobre() {
  return (
    <>
      <CabecalhoPagina
        rotulo="Sobre nós"
        titulo={
          <>
            Cuidado com o veículo
            <span className="block text-azul-claro">é método, não sorte</span>
          </>
        }
        descricao={site.slogan}
        imagem="/imagens/sobre-trabalho.jpg"
        alt="Profissional trabalhando em um veículo dentro da garagem"
      />
      <NavegacaoSecao atual="sobre" />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20" aria-labelledby="titulo-historia">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <p className="rotulo">Quem somos</p>
            <h2 id="titulo-historia" className="titulo-secao mt-4 text-prata">
              Uma lavagem é o resultado de vários cuidados pequenos
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed texto-suave sm:text-base">
              <p>
                A {site.nomeCompleto} trabalha com lavagem automotiva e estética veicular. O
                trabalho é feito por etapas, com produtos adequados a cada material e revisão
                final antes da entrega.
              </p>
              <p>
                O atendimento é por agendamento: o cliente envia serviço, veículo, data e
                horário, e a equipe confirma pelo WhatsApp. Nada é tratado como reserva
                confirmada sem essa resposta.
              </p>
              <p>
                Este espaço reúne o catálogo de serviços, o portfólio de trabalhos e o processo
                de atendimento, para que o cliente saiba exatamente o que esperar antes de
                chegar.
              </p>
            </div>

            <div className="mt-8">
              <Link href="/contato#agendamento" className="botao botao-azul">
                Falar com a equipe
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden border border-borda">
            <Image
              src="/imagens/sobre-detalhe.jpg"
              alt="Detalhe de roda sobre piso molhado durante o acabamento"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(7,91,232,0.25)]" />
          </div>
        </div>
      </section>

      <section className="border-y border-borda bg-preto-2/60" aria-labelledby="titulo-pilares">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="rotulo">Metodologia de trabalho</p>
          <h2 id="titulo-pilares" className="titulo-secao mt-4 max-w-2xl text-prata">
            Quatro princípios que guiam o serviço
          </h2>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2">
            {PILARES.map((pilar, indice) => (
              <li key={pilar.titulo} className="cartao flex gap-5 p-7">
                <span className="font-display text-3xl text-azul-claro">
                  0{indice + 1}
                </span>
                <div>
                  <h3 className="text-lg tracking-[0.06em] text-prata">{pilar.titulo}</h3>
                  <p className="mt-3 text-sm leading-relaxed texto-suave">{pilar.texto}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20" aria-labelledby="titulo-compromissos">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="rotulo">Diferenciais reais</p>
            <h2 id="titulo-compromissos" className="titulo-secao mt-4 text-prata">
              O que você pode esperar de nós
            </h2>
            <p className="mt-4 text-sm leading-relaxed texto-suave sm:text-base">
              Estes são os compromissos que a equipe consegue manter em cada atendimento. Não
              trabalhamos com certificações, prêmios ou avaliações que ainda não foram
              verificadas publicamente.
            </p>
          </div>

          <ul className="space-y-4">
            {COMPROMISSOS.map((item) => (
              <li key={item} className="flex items-start gap-4 border-b border-borda pb-4">
                <svg
                  width="18"
                  height="18"
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
                <span className="text-sm leading-relaxed texto-suave">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaFinal />
    </>
  );
}
