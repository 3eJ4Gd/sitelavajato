import Image from "next/image";
import Link from "next/link";
import { GradeServicos } from "@/components/card-servico";
import { AntesDepois } from "@/components/antes-depois";
import { CtaFinal } from "@/components/cta-final";
import { servicosEmDestaque } from "@/lib/servicos";
import { avisoConteudoDemonstrativo, comparacoes } from "@/lib/galeria";
import { site, mapaQuery } from "@/lib/site";
import { linkWhatsapp } from "@/lib/whatsapp";

export const metadata = {
  title: `${site.nomeCompleto} · Lavagem e estética veicular`,
  alternates: { canonical: "/" },
};

const DIFERENCIAIS = [
  {
    titulo: "Produtos adequados",
    texto:
      "Produtos escolhidos conforme o tipo de pintura, couro e plástico de cada veículo, sem solução genérica para tudo.",
    icone: (
      <>
        <path d="M9 3h6l1 4a5 5 0 1 1-8 0l1-4Z" />
        <path d="M12 14v7" />
      </>
    ),
  },
  {
    titulo: "Atenção aos detalhes",
    texto:
      "Revisão final de emendas, frisos, rodas e cantos — os pontos que mais aparecem quando o serviço é apressado.",
    icone: (
      <>
        <circle cx="11" cy="11" r="6" />
        <path d="m20 20-3.5-3.5M11 8v6M8 11h6" />
      </>
    ),
  },
  {
    titulo: "Técnicas e equipamentos",
    texto:
      "Equipe treinada, pano de microfibra, secagem controlada e equipamentos próprios para cada etapa do processo.",
    icone: (
      <>
        <path d="M4 19h16M6 19V9l6-4 6 4v10" />
        <path d="M10 19v-5h4v5" />
      </>
    ),
  },
  {
    titulo: "Agendamento prático",
    texto:
      "Você escolhe serviço, veículo, data e horário em um formulário simples e fala com a gente pelo WhatsApp.",
    icone: (
      <>
        <path d="M4 6h16v12H4z" />
        <path d="M4 8l8 5 8-5" />
      </>
    ),
  },
];

const ETAPAS = [
  {
    numero: "01",
    titulo: "Você envia a solicitação",
    texto: "Preencha o formulário ou chame no WhatsApp com serviço, veículo, data e horário.",
  },
  {
    numero: "02",
    titulo: "A equipe confirma",
    texto: "Respondemos confirmando disponibilidade, valor e tempo estimado do atendimento.",
  },
  {
    numero: "03",
    titulo: "Executamos o serviço",
    texto: "O veículo é avaliado e o serviço é feito na sequência, com revisão de detalhes.",
  },
  {
    numero: "04",
    titulo: "Entrega e orientação",
    texto: "Você recebe o carro revisado e orientações simples de conservação.",
  },
];

export default function PaginaInicial() {
  const destaques = servicosEmDestaque();

  return (
    <>
      {/* 1 · Hero */}
      <section className="relative overflow-hidden border-b border-borda">
        <div className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-azul/25 blur-[130px]" />
        <div className="pointer-events-none absolute -bottom-56 -left-32 h-[420px] w-[420px] rounded-full bg-azul-claro/12 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:py-24">
          <div>
            <p className="rotulo anim-sobe">{site.nomeLegivel}</p>

            <h1 className="anim-sobe anim-delay-1 mt-5 text-[clamp(2.2rem,5.4vw,4rem)] leading-[0.98] text-prata">
              Lavagem automotiva com{" "}
              <span className="bg-gradient-to-r from-azul-claro to-azul bg-clip-text text-transparent">
                brilho
              </span>{" "}
              de outro nível.
            </h1>

            <p className="anim-sobe anim-delay-2 mt-6 max-w-lg text-base leading-relaxed texto-suave sm:text-lg">
              Cuidado, tecnologia e atenção aos detalhes para deixar seu veículo impecável.
            </p>

            <div className="anim-sobe anim-delay-3 mt-9 flex flex-wrap gap-3">
              <Link href="/contato#agendamento" className="botao botao-azul">
                Agendar lavagem
              </Link>
              <Link href="/servicos" className="botao botao-contorno">
                Ver serviços
              </Link>
            </div>

            <dl className="anim-sobe anim-delay-4 mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-borda pt-7">
              <div>
                <dt className="text-[0.6rem] tracking-[0.2em] text-prata-3 uppercase">
                  Atendimento
                </dt>
                <dd className="mt-1.5 font-display text-lg text-prata">Com agendamento</dd>
              </div>
              <div>
                <dt className="text-[0.6rem] tracking-[0.2em] text-prata-3 uppercase">
                  Confirmação
                </dt>
                <dd className="mt-1.5 font-display text-lg text-prata">Pelo WhatsApp</dd>
              </div>
              <div>
                <dt className="text-[0.6rem] tracking-[0.2em] text-prata-3 uppercase">
                  Serviços
                </dt>
                <dd className="mt-1.5 font-display text-lg text-prata">Lavagem e estética</dd>
              </div>
            </dl>
          </div>

          <div className="anim-sobe anim-delay-2 relative">
            <div className="relative aspect-[4/5] overflow-hidden border border-borda-2 sm:aspect-[4/3] lg:aspect-[4/5]">
              <Image
                src="/imagens/hero.jpg"
                alt="Carro preto recebendo espuma durante a lavagem em ambiente fechado"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-[55%_50%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-preto/75 via-transparent to-transparent" />
              <div className="absolute inset-0 shadow-[inset_0_0_90px_rgba(7,91,232,0.28)]" />
            </div>

            <div className="absolute -bottom-5 left-4 border border-borda-2 bg-preto-3/95 px-5 py-3 backdrop-blur sm:left-6">
              <p className="text-[0.6rem] tracking-[0.24em] text-azul-claro uppercase">
                {site.slogan}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2 · Serviços */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24" aria-labelledby="titulo-servicos">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="rotulo">O que fazemos</p>
            <h2 id="titulo-servicos" className="titulo-secao mt-4 text-prata">
              Serviços para cada tipo de cuidado
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed texto-suave sm:text-base">
              Catálogo configurável: valores exibidos conforme a tabela da empresa. Sem tabela
              publicada, o card mostra &quot;sob consulta&quot;.
            </p>
          </div>
          <Link
            href="/servicos"
            className="text-sm tracking-[0.16em] text-azul-claro uppercase transition-colors hover:text-prata"
          >
            Ver todos os serviços →
          </Link>
        </div>

        <GradeServicos itens={destaques} />
      </section>

      {/* 3 · Diferenciais */}
      <section
        id="diferenciais"
        className="border-y border-borda bg-preto-2/60"
        aria-labelledby="titulo-diferenciais"
      >
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24">
          <p className="rotulo">Por que escolher a Clean Drive</p>
          <h2 id="titulo-diferenciais" className="titulo-secao mt-4 max-w-2xl text-prata">
            Processo organizado, resultado consistente
          </h2>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DIFERENCIAIS.map((item) => (
              <li key={item.titulo} className="cartao p-6">
                <span className="flex h-12 w-12 items-center justify-center border border-azul/45 bg-azul/12 text-azul-claro">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {item.icone}
                  </svg>
                </span>
                <h3 className="mt-5 text-lg tracking-[0.06em] text-prata">{item.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed texto-suave">{item.texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4 · Antes e depois */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24" aria-labelledby="titulo-antes-depois">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="rotulo">Resultados</p>
            <h2 id="titulo-antes-depois" className="titulo-secao mt-4 text-prata">
              Antes e depois
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed texto-suave sm:text-base">
              Arraste o cursor para comparar. As comparações reais do portfólio entram aqui
              quando as fotos dos veículos atendidos forem enviadas.
            </p>
          </div>
          <Link
            href="/galeria"
            className="text-sm tracking-[0.16em] text-azul-claro uppercase transition-colors hover:text-prata"
          >
            Abrir galeria →
          </Link>
        </div>

        <p className="mt-8 border-l-2 border-azul-claro/70 bg-preto-3/60 px-4 py-3 text-sm texto-suave">
          {avisoConteudoDemonstrativo}
        </p>

        <AntesDepois comparacoes={comparacoes} />
      </section>

      {/* 5 · Processo de atendimento (no lugar de avaliações, enquanto não houver depoimentos reais) */}
      <section
        className="border-y border-borda bg-preto-2/60"
        aria-labelledby="titulo-processo"
      >
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24">
          <p className="rotulo">Como funciona</p>
          <h2 id="titulo-processo" className="titulo-secao mt-4 max-w-2xl text-prata">
            Do primeiro contato à entrega do veículo
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed texto-suave sm:text-base">
            Enquanto não há avaliações públicas verificáveis desta empresa, mostramos o
            processo real de atendimento em vez de depoimentos.
          </p>

          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ETAPAS.map((etapa) => (
              <li key={etapa.numero} className="cartao p-6">
                <p className="font-display text-3xl text-azul-claro">{etapa.numero}</p>
                <h3 className="mt-4 text-base tracking-[0.08em] text-prata">{etapa.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed texto-suave">{etapa.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 6 · Localização */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24" aria-labelledby="titulo-local">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="rotulo">Onde estamos</p>
            <h2 id="titulo-local" className="titulo-secao mt-4 text-prata">
              Visite a Clean Drive
            </h2>

            <address className="mt-6 text-base leading-relaxed texto-suave not-italic">
              {site.endereco.logradouro}, {site.endereco.numero}
              <br />
              {site.endereco.complemento}
              <br />
              {site.endereco.cidade} - {site.endereco.uf} · CEP {site.endereco.cep}
            </address>

            <dl className="mt-7 divide-y divide-borda border-y border-borda">
              {site.horarios.map((h) => (
                <div key={h.dia} className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-sm texto-suave">{h.dia}</dt>
                  <dd className="font-display text-sm tracking-[0.1em] text-prata">{h.horas}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contato#agendamento" className="botao botao-azul">
                Agendar lavagem
              </Link>
              <a
                href={linkWhatsapp(
                  `Olá, ${site.nome}! Gostaria de confirmar horários e valores.`,
                )}
                target="_blank"
                rel="noreferrer noopener"
                className="botao botao-contorno"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>

          <div className="min-h-[320px] overflow-hidden border border-borda">
            <iframe
              title={`Mapa da ${site.nomeCompleto} — ${site.endereco.completo}`}
              src={`https://www.google.com/maps?q=${mapaQuery(site.endereco)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[320px] w-full grayscale-[35%] contrast-[1.05]"
            />
          </div>
        </div>
      </section>

      <CtaFinal />
    </>
  );
}
