"use client";

import { useEffect, useMemo, useState } from "react";
import { site } from "@/lib/site";
import { nomesDeServicos } from "@/lib/servicos";
import { linkWhatsapp, mensagemAgendamento } from "@/lib/whatsapp";

type Campos = {
  nome: string;
  veiculo: string;
  servico: string;
  data: string;
  horario: string;
  observacoes: string;
};

type Erros = Partial<Record<keyof Campos, string>>;

const VAZIO: Campos = {
  nome: "",
  veiculo: "",
  servico: "",
  data: "",
  horario: "",
  observacoes: "",
};

function hojeISO(): string {
  const agora = new Date();
  const mes = String(agora.getMonth() + 1).padStart(2, "0");
  const dia = String(agora.getDate()).padStart(2, "0");
  return `${agora.getFullYear()}-${mes}-${dia}`;
}

function formatarData(iso: string): string {
  const [ano, mes, dia] = iso.split("-");
  if (!ano || !mes || !dia) return iso;
  return `${dia}/${mes}/${ano}`;
}

function validar(campos: Campos): Erros {
  const erros: Erros = {};

  if (campos.nome.trim().length < 2) {
    erros.nome = "Informe seu nome completo.";
  }

  if (campos.veiculo.trim().length < 2) {
    erros.veiculo = "Informe o modelo do veículo (ex.: Honda Civic 2020).";
  }

  if (!campos.servico) {
    erros.servico = "Escolha o serviço desejado.";
  }

  if (!campos.data) {
    erros.data = "Informe a data pretendida.";
  } else if (campos.data < hojeISO()) {
    erros.data = "A data não pode ser no passado.";
  }

  if (!campos.horario) {
    erros.horario = "Informe o horário pretendido.";
  }

  return erros;
}

export function FormAgendamento({ servicoInicial = "" }: { servicoInicial?: string }) {
  const [campos, setCampos] = useState<Campos>({
    ...VAZIO,
    servico: nomesDeServicos.includes(servicoInicial) ? servicoInicial : "",
  });
  const [erros, setErros] = useState<Erros>({});
  const [enviado, setEnviado] = useState<string | null>(null);
  const [tentativaDeEnvio, setTentativaDeEnvio] = useState(0);

  // Após cada tentativa inválida, move o foco para o primeiro campo com erro.
  useEffect(() => {
    if (tentativaDeEnvio === 0) return;
    const primeiro = document.querySelector<HTMLElement>('[aria-invalid="true"]');
    primeiro?.focus();
  }, [tentativaDeEnvio]);

  const hoje = useMemo(() => hojeISO(), []);

  function atualizar(campo: keyof Campos, valor: string) {
    setCampos((atual) => ({ ...atual, [campo]: valor }));
    setErros((atual) => ({ ...atual, [campo]: undefined }));
    setEnviado(null);
  }

  function enviar(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();

    const encontrados = validar(campos);
    setErros(encontrados);

    if (Object.keys(encontrados).length > 0) {
      // O React ainda não re-renderizou neste ponto; o efeito foca o primeiro
      // campo inválido logo após o commit.
      setTentativaDeEnvio((n) => n + 1);
      return;
    }

    const url = linkWhatsapp(
      mensagemAgendamento({
        nome: campos.nome.trim(),
        veiculo: campos.veiculo.trim(),
        servico: campos.servico,
        data: formatarData(campos.data),
        horario: campos.horario,
        observacoes: campos.observacoes.trim(),
      }),
    );

    window.open(url, "_blank", "noopener,noreferrer");
    setEnviado(url);
  }

  const rotulo = "mb-2 block text-[0.66rem] tracking-[0.2em] text-prata-2 uppercase";
  const erro = "mt-1.5 block text-xs text-red-400";

  return (
    <form onSubmit={enviar} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={rotulo} htmlFor="ag-nome">
            Nome completo *
          </label>
          <input
            id="ag-nome"
            name="nome"
            type="text"
            autoComplete="name"
            className="campo"
            placeholder="Como devemos chamar você"
            value={campos.nome}
            onChange={(e) => atualizar("nome", e.target.value)}
            aria-invalid={erros.nome ? "true" : undefined}
            aria-describedby={erros.nome ? "ag-nome-erro" : undefined}
          />
          {erros.nome && (
            <span id="ag-nome-erro" className={erro} role="alert">
              {erros.nome}
            </span>
          )}
        </div>

        <div>
          <label className={rotulo} htmlFor="ag-veiculo">
            Modelo do veículo *
          </label>
          <input
            id="ag-veiculo"
            name="veiculo"
            type="text"
            autoComplete="off"
            className="campo"
            placeholder="Ex.: Honda Civic 2020"
            value={campos.veiculo}
            onChange={(e) => atualizar("veiculo", e.target.value)}
            aria-invalid={erros.veiculo ? "true" : undefined}
            aria-describedby={erros.veiculo ? "ag-veiculo-erro" : undefined}
          />
          {erros.veiculo && (
            <span id="ag-veiculo-erro" className={erro} role="alert">
              {erros.veiculo}
            </span>
          )}
        </div>

        <div className="sm:col-span-2">
          <label className={rotulo} htmlFor="ag-servico">
            Serviço desejado *
          </label>
          <select
            id="ag-servico"
            name="servico"
            className="campo"
            value={campos.servico}
            onChange={(e) => atualizar("servico", e.target.value)}
            aria-invalid={erros.servico ? "true" : undefined}
            aria-describedby={erros.servico ? "ag-servico-erro" : undefined}
          >
            <option value="">Selecione um serviço</option>
            {nomesDeServicos.map((nome) => (
              <option key={nome} value={nome}>
                {nome}
              </option>
            ))}
          </select>
          {erros.servico && (
            <span id="ag-servico-erro" className={erro} role="alert">
              {erros.servico}
            </span>
          )}
        </div>

        <div>
          <label className={rotulo} htmlFor="ag-data">
            Data pretendida *
          </label>
          <input
            id="ag-data"
            name="data"
            type="date"
            className="campo"
            min={hoje}
            value={campos.data}
            onChange={(e) => atualizar("data", e.target.value)}
            aria-invalid={erros.data ? "true" : undefined}
            aria-describedby={erros.data ? "ag-data-erro" : undefined}
          />
          {erros.data && (
            <span id="ag-data-erro" className={erro} role="alert">
              {erros.data}
            </span>
          )}
        </div>

        <div>
          <label className={rotulo} htmlFor="ag-horario">
            Horário pretendido *
          </label>
          <input
            id="ag-horario"
            name="horario"
            type="time"
            step={1800}
            className="campo"
            value={campos.horario}
            onChange={(e) => atualizar("horario", e.target.value)}
            aria-invalid={erros.horario ? "true" : undefined}
            aria-describedby={erros.horario ? "ag-horario-erro" : undefined}
          />
          {erros.horario && (
            <span id="ag-horario-erro" className={erro} role="alert">
              {erros.horario}
            </span>
          )}
        </div>

        <div className="sm:col-span-2">
          <label className={rotulo} htmlFor="ag-observacoes">
            Observações (opcional)
          </label>
          <textarea
            id="ag-observacoes"
            name="observacoes"
            rows={3}
            className="campo resize-y"
            placeholder="Ex.: carro com banco de couro, manchas no bancos, preferência por atendimento pela manhã..."
            value={campos.observacoes}
            onChange={(e) => atualizar("observacoes", e.target.value)}
          />
        </div>
      </div>

      <div className="border-t border-borda pt-5">
        <button type="submit" className="botao botao-azul w-full sm:w-auto">
          Enviar solicitação pelo WhatsApp
        </button>

        <p className="mt-4 text-xs leading-relaxed text-prata-3">
          Ao enviar, o WhatsApp da {site.nome} abre com a mensagem preenchida.{" "}
          <strong className="text-prata-2">
            A solicitação só é considerada confirmada após a resposta da equipe.
          </strong>
        </p>

        {enviado && (
          <div
            role="status"
            className="mt-5 border-l-2 border-azul-claro bg-azul/10 px-4 py-4 text-sm text-prata"
          >
            <p className="font-medium">
              Mensagem pronta — verifique se a conversa foi aberta no WhatsApp.
            </p>
            <p className="mt-1 texto-suave">
              Se nada abriu, seu navegador pode ter bloqueado a nova janela:
            </p>
            <a
              href={enviado}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-2 inline-block text-azul-claro underline underline-offset-4 hover:text-prata"
            >
              Abrir a conversa no WhatsApp
            </a>
          </div>
        )}
      </div>
    </form>
  );
}
