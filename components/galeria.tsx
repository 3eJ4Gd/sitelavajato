"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  avisoConteudoDemonstrativo,
  categoriasGaleria,
  comparacoes,
  fotos,
  type CategoriaGaleria,
} from "@/lib/galeria";
import { AntesDepois } from "@/components/antes-depois";

export function Galeria() {
  const [filtro, setFiltro] = useState<CategoriaGaleria>("todos");
  const [aberta, setAberta] = useState<number | null>(null);
  const gatilhoRef = useRef<HTMLElement | null>(null);

  const visiveis =
    filtro === "antes-depois"
      ? []
      : filtro === "todos"
        ? fotos
        : fotos.filter((f) => f.categoria === filtro);

  const fechar = useCallback(() => {
    setAberta(null);
    // Devolve o foco ao botão que abriu a foto (boa prática de acessibilidade).
    gatilhoRef.current?.focus();
  }, []);

  return (
    <div>
      <div
        className="mt-10 flex flex-wrap gap-2"
        role="group"
        aria-label="Filtrar galeria por categoria"
      >
        {categoriasGaleria.map((categoria) => {
          const ativa = filtro === categoria.valor;
          return (
            <button
              key={categoria.valor}
              type="button"
              onClick={() => {
                setFiltro(categoria.valor);
                setAberta(null);
              }}
              aria-pressed={ativa}
              className={`border px-4 py-2.5 text-[0.68rem] tracking-[0.2em] uppercase transition-colors ${
                ativa
                  ? "border-azul bg-azul text-white"
                  : "border-borda-2 text-prata-2 hover:border-azul-claro hover:text-prata"
              }`}
            >
              {categoria.nome}
            </button>
          );
        })}
      </div>

      <p className="mt-6 border-l-2 border-azul-claro/70 bg-preto-3/60 px-4 py-3 text-sm texto-suave">
        {avisoConteudoDemonstrativo}
      </p>

      {filtro === "antes-depois" ? (
        <AntesDepois comparacoes={comparacoes} />
      ) : (
        <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {visiveis.map((foto, indice) => (
            <li key={foto.id} className={indice % 5 === 0 ? "col-span-2 row-span-1" : ""}>
              <button
                type="button"
                onClick={(evento) => {
                  gatilhoRef.current = evento.currentTarget;
                  setAberta(indice);
                }}
                className="zoom-ativo group relative block w-full overflow-hidden border border-borda bg-preto-3 text-left"
                aria-label={`Ampliar: ${foto.legenda}`}
              >
                <div
                  className={`relative ${indice % 5 === 0 ? "aspect-[16/10]" : "aspect-[4/3]"}`}
                >
                  <Image
                    src={foto.src}
                    alt={foto.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <span className="absolute inset-0 bg-gradient-to-t from-preto/90 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
                <span className="absolute right-3 bottom-3 left-3 text-[0.65rem] tracking-[0.16em] text-prata uppercase">
                  {foto.legenda}
                </span>
                <span className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center border border-white/30 bg-preto/70 opacity-0 transition-opacity group-hover:opacity-100">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <path d="M4 9V4h5M20 15v5h-5M15 4h5v5M9 20H4v-5" />
                  </svg>
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}

      {filtro !== "antes-depois" && visiveis.length === 0 && (
        <p className="mt-8 text-sm texto-suave">Nenhuma foto nesta categoria.</p>
      )}

      {aberta !== null && visiveis[aberta] && (
        <Lightbox
          itens={visiveis}
          indice={aberta}
          onFechar={fechar}
          onNavegar={setAberta}
        />
      )}
    </div>
  );
}

function Lightbox({
  itens,
  indice,
  onFechar,
  onNavegar,
}: {
  itens: typeof fotos;
  indice: number;
  onFechar: () => void;
  onNavegar: (novo: number) => void;
}) {
  const fecharRef = useRef<HTMLButtonElement>(null);
  const foto = itens[indice];

  useEffect(() => {
    fecharRef.current?.focus();
    document.body.style.overflow = "hidden";

    function aoTeclar(evento: KeyboardEvent) {
      if (evento.key === "Escape") onFechar();
      if (evento.key === "ArrowRight") onNavegar((indice + 1) % itens.length);
      if (evento.key === "ArrowLeft") onNavegar((indice - 1 + itens.length) % itens.length);
    }

    window.addEventListener("keydown", aoTeclar);
    return () => {
      window.removeEventListener("keydown", aoTeclar);
      document.body.style.overflow = "";
    };
  }, [indice, itens.length, onFechar, onNavegar]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Visualização ampliada: ${foto.legenda}`}
      className="fixed inset-0 z-50 flex flex-col bg-preto/97 p-4 backdrop-blur-sm sm:p-6"
      onClick={(evento) => {
        if (evento.target === evento.currentTarget) onFechar();
      }}
    >
      <div className="flex items-center justify-between gap-4">
        <p className="text-[0.68rem] tracking-[0.2em] text-prata-2 uppercase">
          {foto.legenda} · {indice + 1}/{itens.length}
        </p>
        <button
          ref={fecharRef}
          type="button"
          onClick={onFechar}
          className="flex h-10 w-10 items-center justify-center border border-borda-2 text-prata transition-colors hover:border-azul-claro hover:text-azul-claro"
          aria-label="Fechar visualização"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
      </div>

      <div className="relative min-h-0 flex-1 py-4">
        <Image
          src={foto.src}
          alt={foto.alt}
          fill
          sizes="100vw"
          className="object-contain"
          priority
        />
      </div>

      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => onNavegar((indice - 1 + itens.length) % itens.length)}
          className="botao botao-contorno px-4 py-3"
        >
          Anterior
        </button>
        <p className="hidden text-sm texto-suave sm:block">{foto.alt}</p>
        <button
          type="button"
          onClick={() => onNavegar((indice + 1) % itens.length)}
          className="botao botao-contorno px-4 py-3"
        >
          Próxima
        </button>
      </div>
    </div>
  );
}
