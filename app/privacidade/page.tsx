import { CabecalhoPagina } from "@/components/cabecalho-pagina";
import { site } from "@/lib/site";

export const metadata = {
  title: "Política de privacidade",
  description:
    "Como o Carlão Detail trata os dados enviados pelos visitantes no formulário de agendamento, em conformidade com a LGPD.",
  alternates: { canonical: "/privacidade" },
};

const SECOES = [
  {
    titulo: "Dados que são coletados",
    texto: [
      "O formulário de agendamento solicita nome, modelo do veículo, serviço desejado, data e horário pretendidos e, opcionalmente, observações.",
      "Esses dados não são armazenados em servidores deste site: ao enviar o formulário, as informações são montadas em uma mensagem do WhatsApp e encaminhadas para a conversa com a empresa.",
    ],
  },
  {
    titulo: "Finalidade do tratamento",
    texto: [
      "Os dados são usados exclusivamente para responder à solicitação de atendimento: confirmar disponibilidade, informar valor e organizar a fila de serviços.",
      "Nenhuma finalidade de marketing, revenda ou compartilhamento com terceiros é utilizada.",
    ],
  },
  {
    titulo: "Base legal (LGPD)",
    texto: [
      "O tratamento acontece mediante consentimento do titular, manifestado no momento do envio da solicitação, conforme a Lei nº 13.709/2018 (LGPD).",
      "O titular pode solicitar a exclusão das informações a qualquer momento pelos canais de contato indicados no rodapé.",
    ],
  },
  {
    titulo: "Serviços de terceiros",
    texto: [
      "O site usa o WhatsApp (Meta) para o envio da mensagem e o Google Maps para exibir a localização. Ao utilizar esses recursos, o visitante está sujeito às políticas de privacidade dos respectivos provedores.",
      "O site não emprega cookies de publicidade nem ferramentas de rastreamento de comportamento.",
    ],
  },
  {
    titulo: "Segurança",
    texto: [
      "O site é servido sobre HTTPS. Como não há cadastro, login ou armazenamento de cadastro de clientes nesta fase, não são mantidos bancos de dados pessoais no projeto.",
    ],
  },
  {
    titulo: "Contato do encarregado",
    texto: [
      `Dúvidas sobre privacidade podem ser enviadas para ${site.email} ou pelos canais de contato listados no rodapé desta página.`,
    ],
  },
];

export default function PaginaPrivacidade() {
  return (
    <>
      <CabecalhoPagina
        rotulo="Políticas"
        titulo={<>Política de privacidade</>}
        descricao="O que acontece com as informações enviadas no formulário de agendamento deste site."
        imagem="/imagens/sobre-detalhe.jpg"
        alt="Detalhe de veículo durante o acabamento"
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-sm leading-relaxed texto-suave">
          Documento em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
          Última atualização: {new Date().toLocaleDateString("pt-BR")}.
        </p>

        <div className="mt-10 space-y-10">
          {SECOES.map((secao, indice) => (
            <article key={secao.titulo}>
              <h2 className="text-xl tracking-[0.06em] text-prata">
                <span className="mr-3 text-azul-claro">0{indice + 1}</span>
                {secao.titulo}
              </h2>
              <div className="mt-4 space-y-3">
                {secao.texto.map((paragrafo) => (
                  <p key={paragrafo} className="text-sm leading-relaxed texto-suave">
                    {paragrafo}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
