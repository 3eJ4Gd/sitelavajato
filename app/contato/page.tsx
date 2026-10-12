import { CabecalhoPagina, NavegacaoSecao } from "@/components/cabecalho-pagina";
import { FormAgendamento } from "@/components/form-agendamento";
import { site, mapaQuery } from "@/lib/site";
import { linkWhatsapp } from "@/lib/whatsapp";

export const metadata = {
  title: "Contato e agendamento",
  description:
    "Solicite seu agendamento no Carlão Detail: nome, veículo, serviço, data e horário enviados pelo WhatsApp. Veja endereço, horários e mapa.",
  alternates: { canonical: "/contato" },
};

export default async function PaginaContato({
  searchParams,
}: {
  searchParams: Promise<{ [chave: string]: string | string[] | undefined }>;
}) {
  const parametros = await searchParams;
  const servicoInicial =
    typeof parametros.servico === "string" ? parametros.servico : "";

  return (
    <>
      <CabecalhoPagina
        rotulo="Contato e agendamento"
        titulo={
          <>
            Agende sua lavagem
            <span className="block text-azul-claro">em poucos passos</span>
          </>
        }
        descricao="Preencha os dados abaixo. Ao enviar, o WhatsApp da empresa abre com a mensagem pronta — a equipe confirma disponibilidade e valor."
        imagem="/imagens/estetica-cristalizacao.jpg"
        alt="Frontal de carro limpo com pintura refletindo a luz"
      />
      <NavegacaoSecao atual="contato" />

      <section
        id="agendamento"
        className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20"
        aria-labelledby="titulo-formulario"
      >
        <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
          <div className="cartao p-6 sm:p-9">
            <p className="rotulo">Solicitação de atendimento</p>
            <h2 id="titulo-formulario" className="titulo-secao mt-4 text-prata">
              Formulário de agendamento
            </h2>
            <p className="mt-4 text-sm leading-relaxed texto-suave">
              Campos com <strong className="text-prata">*</strong> são obrigatórios. Nenhum dado
              é enviado para um servidor: o conteúdo vai direto para a conversa do WhatsApp.
            </p>

            <div className="mt-8">
              <FormAgendamento servicoInicial={servicoInicial} />
            </div>
          </div>

          <div className="space-y-6">
            <div className="cartao p-6 sm:p-7">
              <h3 className="text-lg tracking-[0.08em] text-prata">Fale direto</h3>

              <a
                href={linkWhatsapp(
                  `Olá, ${site.nome}! Gostaria de agendar um horário.`,
                )}
                target="_blank"
                rel="noreferrer noopener"
                className="botao botao-azul mt-5 w-full"
              >
                Chamar no WhatsApp
              </a>

              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="text-[0.62rem] tracking-[0.2em] text-prata-3 uppercase">
                    Telefone
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`tel:+${site.telefoneLink}`}
                      className="text-prata transition-colors hover:text-azul-claro"
                    >
                      {site.telefoneExibicao}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="text-[0.62rem] tracking-[0.2em] text-prata-3 uppercase">
                    E-mail
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${site.email}`}
                      className="break-all text-prata transition-colors hover:text-azul-claro"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="text-[0.62rem] tracking-[0.2em] text-prata-3 uppercase">
                    Endereço
                  </dt>
                  <dd className="mt-1 leading-relaxed texto-suave">
                    {site.endereco.completo}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="cartao p-6 sm:p-7">
              <h3 className="text-lg tracking-[0.08em] text-prata">Horários</h3>
              <dl className="mt-5 divide-y divide-borda">
                {site.horarios.map((h) => (
                  <div key={h.dia} className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-sm texto-suave">{h.dia}</dt>
                    <dd className="font-display text-sm tracking-[0.1em] text-prata">
                      {h.horas}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="mt-5 border-l-2 border-azul-claro/70 bg-preto-3/60 px-4 py-3 text-xs leading-relaxed texto-suave">
                Solicitações feitas fora do horário de expediente são respondidas na próxima
                abertura.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-borda bg-preto-2/60" aria-labelledby="titulo-mapa">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="rotulo">Localização</p>
              <h2 id="titulo-mapa" className="titulo-secao mt-4 text-prata">
                Como chegar
              </h2>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapaQuery(site.endereco)}`}
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm tracking-[0.16em] text-azul-claro uppercase transition-colors hover:text-prata"
            >
              Abrir no Google Maps →
            </a>
          </div>

          <div className="mt-8 h-[380px] overflow-hidden border border-borda">
            <iframe
              title={`Mapa do ${site.nomeCompleto} — ${site.endereco.completo}`}
              src={`https://www.google.com/maps?q=${mapaQuery(site.endereco)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full grayscale-[35%] contrast-[1.05]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
