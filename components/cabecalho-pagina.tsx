import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function CabecalhoPagina({
  rotulo,
  titulo,
  descricao,
  imagem,
  alt,
}: {
  rotulo: string;
  titulo: ReactNode;
  descricao: string;
  imagem: string;
  alt: string;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-borda">
      <Image
        src={imagem}
        alt={alt}
        fill
        sizes="100vw"
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-preto via-preto/92 to-preto/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-preto via-transparent to-preto/60" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="max-w-2xl">
          <p className="rotulo">{rotulo}</p>
          <h1 className="anim-sobe titulo-secao mt-4 text-prata">{titulo}</h1>
          <p className="anim-sobe anim-delay-1 mt-5 max-w-xl text-base leading-relaxed texto-suave sm:text-lg">
            {descricao}
          </p>
        </div>
      </div>
    </section>
  );
}

export function NavegacaoSecao({
  atual,
}: {
  atual: "servicos" | "estetica" | "galeria" | "sobre" | "contato";
}) {
  const abas = [
    { id: "servicos", href: "/servicos", texto: "Serviços" },
    { id: "estetica", href: "/estetica", texto: "Estética automotiva" },
    { id: "galeria", href: "/galeria", texto: "Galeria" },
    { id: "sobre", href: "/sobre", texto: "Sobre nós" },
    { id: "contato", href: "/contato", texto: "Contato" },
  ] as const;

  return (
    <nav
      aria-label="Seções do site"
      className="border-b border-borda bg-preto-2/70"
    >
      <ul className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-4 sm:px-6">
        {abas.map((aba) => {
          const ativa = aba.id === atual;
          return (
            <li key={aba.id} className="shrink-0">
              <Link
                href={aba.href}
                aria-current={ativa ? "page" : undefined}
                className={`block border-b-2 py-4 text-[0.68rem] tracking-[0.2em] uppercase transition-colors ${
                  ativa
                    ? "border-azul-claro text-azul-claro"
                    : "border-transparent text-prata-2 hover:text-prata"
                }`}
              >
                {aba.texto}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
