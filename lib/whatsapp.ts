import { site } from "./site";

/** Monta o link wa.me com a mensagem já preenchida. */
export function linkWhatsapp(mensagem: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

export interface SolicitacaoAgendamento {
  nome: string;
  veiculo: string;
  servico: string;
  data: string;
  horario: string;
  observacoes?: string;
}

/**
 * Mensagem enviada ao WhatsApp da empresa.
 * A solicitação NÃO é uma reserva confirmada: a confirmação depende da
 * resposta da equipe (ou de um sistema real de reservas, Fase 3).
 */
export function mensagemAgendamento(s: SolicitacaoAgendamento): string {
  const linhas = [
    `Olá, ${site.nome}! Gostaria de solicitar um agendamento.`,
    "",
    `Nome: ${s.nome}`,
    `Veículo: ${s.veiculo}`,
    `Serviço: ${s.servico}`,
    `Data desejada: ${s.data}`,
    `Horário desejado: ${s.horario}`,
  ];

  const obs = s.observacoes?.trim();
  if (obs) linhas.push(`Observações: ${obs}`);

  linhas.push("", "Poderiam confirmar a disponibilidade e o valor, por favor?");

  return linhas.join("\n");
}

export function mensagemSimples(texto: string): string {
  return texto;
}
