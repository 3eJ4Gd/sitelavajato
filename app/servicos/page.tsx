import Link from "next/link";
import { CabecalhoPagina, NavegacaoSecao } from "@/components/cabecalho-pagina";
import { GradeServicos } from "@/components/card-servico";
import { CtaFinal } from "@/components/cta-final";
import { servicos, servicosDoGrupo } from "@/lib/servicos";
import { site } from "@/lib/site";

export const metadata = {
  title: "Serviços de lavagem",
  description:
    "Lavagem externa, limpeza interna e lavagem completa: veja o que entra em cada serviço do Carlão Detail e consulte o valor.",
  alternates: { canonical: "/servicos" },
};

const LAVAGEM = servicosDoGrupo("lavagem");

export default function PaginaServicos() {
  return (
    <>
      <CabecalhoPagina
        rotulo="Catálogo"
        titulo={
          <>
            Serviços de lavagem
            <span className="block text-azul-claro">para manter o carro em dia</span>
          </>
        }
        descricao="Três formatos de atendimento para diferentes rotinas. O valor é confirmado pelo WhatsApp antes do agendamento."
        imagem="/imagens/servico-externa.jpg"
        alt="Carro coberto de espuma durante a lavagem externa"
      />
      <NavegacaoSecao atual="servicos" />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20" aria-labelledby="titulo-lavagem">
        <p className="rotulo">Lavagem</p>
        <h2 id="titulo-lavagem" className="titulo-secao mt-4 text-prata">
          Lavagem externa, interna ou completa
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed texto-suave sm:text-base">
          Cada card lista o que normalmente entra no serviço. Se o seu veículo precisa de algo
          além disso, descreva no formulário de contato que a equipe avalia antes de confirmar.
        </p>

        <GradeServicos
          itens={LAVAGEM}
          colunas="lg:grid-cols-3"
          className="mt-12"
        />

        <div className="mt-14 grid gap-6 border-t border-borda pt-12 sm:grid-cols-3">
          <div>
            <h3 className="text-base tracking-[0.1em] text-prata">Como escolher</h3>
            <p className="mt-3 text-sm leading-relaxed texto-suave">
              Se o foco é o exterior, escolha a lavagem externa. Se o interior está pesado, a
              limpeza interna. Para a rotina completa, a lavagem completa.
            </p>
          </div>
          <div>
            <h3 className="text-base tracking-[0.1em] text-prata">Tempo de atendimento</h3>
            <p className="mt-3 text-sm leading-relaxed texto-suave">
              O tempo varia conforme o estado do veículo e a fila do dia. Ele é informado na
              confirmação do agendamento.
            </p>
          </div>
          <div>
            <h3 className="text-base tracking-[0.1em] text-prata">Valores</h3>
            <p className="mt-3 text-sm leading-relaxed texto-suave">
              {servicos.some((s) => s.preco)
                ? "Os valores estão publicados em cada card."
                : "Sem tabela publicada, o valor é combinado por WhatsApp para não cobrar serviço demais ou de menos."}
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-borda bg-preto-2/60" aria-labelledby="titulo-estetica-promo">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="rotulo">Também fazemos</p>
            <h2 id="titulo-estetica-promo" className="titulo-secao mt-4 text-prata">
              Estética automotiva
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed texto-suave sm:text-base">
              Polimento, higienização interna e proteção da pintura — serviços que exigem
              avaliação préria do veículo para definir o procedimento correto.
            </p>
            <div className="mt-8">
              <Link href="/estetica" className="botao botao-azul">
                Conhecer a estética automotiva
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {servicosDoGrupo("estetica").map((servico) => (
              <div key={servico.slug} className="cartao p-5">
                <h3 className="text-base tracking-[0.08em] text-prata">{servico.nome}</h3>
                <p className="mt-2 text-sm texto-suave">{servico.resumo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6" aria-labelledby="titulo-agendar-servico">
        <div className="cartao p-8 sm:p-10">
          <h2 id="titulo-agendar-servico" className="text-2xl text-prata">
            Já sabe o que precisa?
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed texto-suave">
            Informe nome, veículo, serviço, data e horário. O {site.nome} responde pelo WhatsApp
            confirmando disponibilidade e valor — a solicitação ainda não é uma reserva
            confirmada.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contato#agendamento" className="botao botao-azul">
              Solicitar agendamento
            </Link>
            <Link href="/galeria" className="botao botao-contorno">
              Ver trabalhos realizados
            </Link>
          </div>
        </div>
      </section>

      <CtaFinal />
    </>
  );
}
