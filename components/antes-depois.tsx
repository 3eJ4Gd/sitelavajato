"use client";

import Image from "next/image";
import { useState } from "react";
import type { Comparacao } from "@/lib/galeria";

export function AntesDepois({ comparacoes }: { comparacoes: Comparacao[] }) {
  if (!comparacoes.length) return null;

  return (
    <ul className="mt-12 grid gap-6 md:grid-cols-2">
      {comparacoes.map((par) => (
        <li key={par.id}>
          <Slider par={par} />
        </li>
      ))}
    </ul>
  );
}

function Slider({ par }: { par: Comparacao }) {
  const [posicao, setPosicao] = useState(50);

  return (
    <figure className="cartao overflow-hidden">
      <div className="relative aspect-[16/10] touch-none overflow-hidden bg-preto-3 select-none">
        <Image
          src={par.depois.src}
          alt={par.depois.alt}
          fill
          sizes="(max-width: 768px) 100vw, 45vw"
          className="object-cover"
        />

        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - posicao}% 0 0)` }}
          aria-hidden="true"
        >
          <Image
            src={par.antes.src}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover"
          />
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 w-px bg-white/85 shadow-[0_0_14px_rgba(59,130,246,0.9)]"
          style={{ left: `${posicao}%` }}
        >
          <span className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-preto/70 backdrop-blur">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 6 3 12l6 6M15 6l6 6-6 6" />
            </svg>
          </span>
        </div>

        <span className="absolute bottom-3 left-3 border border-white/25 bg-preto/75 px-2.5 py-1 text-[0.6rem] tracking-[0.2em] text-prata uppercase backdrop-blur">
          Antes
        </span>
        <span className="absolute right-3 bottom-3 border border-azul-claro/50 bg-preto/75 px-2.5 py-1 text-[0.6rem] tracking-[0.2em] text-azul-claro uppercase backdrop-blur">
          Depois
        </span>

        <input
          type="range"
          min={0}
          max={100}
          step={1}
          value={posicao}
          onChange={(evento) => setPosicao(Number(evento.target.value))}
          aria-label={`Comparar antes e depois — ${par.titulo}`}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>

      <figcaption className="flex items-start justify-between gap-4 p-5">
        <div>
          <p className="font-display text-base tracking-[0.1em] text-prata">{par.titulo}</p>
          <p className="mt-1 text-sm texto-suave">{par.legenda}</p>
        </div>
        <span className="shrink-0 border border-borda-2 px-2 py-1 text-[0.58rem] tracking-[0.18em] text-prata-3 uppercase">
          Demonstrativo
        </span>
      </figcaption>
    </figure>
  );
}
