import Image from "next/image";
import Link from "next/link";
import type { Servico } from "@/lib/servicos";

function Item({ texto }: { texto: string }) {
  return (
    <li className="flex items-start gap-2.5 text-sm texto-suave">
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
      <span>{texto}</span>
    </li>
  );
}

export function CardServico({ servico }: { servico: Servico }) {
  return (
    <article className="cartao group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={servico.imagem}
          alt={servico.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-preto-2 via-preto-2/25 to-transparent" />
        <span className="absolute top-3 left-3 border border-azul-claro/50 bg-preto/75 px-2.5 py-1 text-[0.6rem] tracking-[0.2em] text-azul-claro uppercase backdrop-blur">
          {servico.grupo === "estetica" ? "Estética" : "Lavagem"}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl tracking-[0.06em] text-prata">{servico.nome}</h3>
        <p className="mt-2 text-sm texto-suave">{servico.resumo}</p>

        <ul className="mt-5 space-y-2.5">
          {servico.itens.map((item) => (
            <Item key={item} texto={item} />
          ))}
        </ul>

        <div className="mt-auto flex items-end justify-between gap-4 border-t border-borda pt-6">
          <div>
            <p className="text-[0.6rem] tracking-[0.22em] text-prata-3 uppercase">Valor</p>
            <p className="mt-1 font-display text-lg text-prata">
              {servico.preco ?? "Sob consulta"}
            </p>
          </div>
          <Link
            href={`/contato?servico=${encodeURIComponent(servico.nome)}#agendamento`}
            className="botao botao-contorno px-4 py-3"
          >
            {servico.grupo === "estetica" ? "Solicitar avaliação" : "Consultar preço"}
          </Link>
        </div>
      </div>
    </article>
  );
}

export function GradeServicos({
  itens,
  colunas = "lg:grid-cols-4",
  className = "mt-12",
}: {
  itens: Servico[];
  colunas?: string;
  className?: string;
}) {
  return (
    <ul className={`grid gap-6 sm:grid-cols-2 ${colunas} ${className}`}>
      {itens.map((servico) => (
        <li key={servico.slug} className="h-full">
          <CardServico servico={servico} />
        </li>
      ))}
    </ul>
  );
}
