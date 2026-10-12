"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "/", texto: "Início" },
  { href: "/servicos", texto: "Serviços" },
  { href: "/estetica", texto: "Estética" },
  { href: "/#diferenciais", texto: "Diferenciais" },
  { href: "/galeria", texto: "Galeria" },
  { href: "/sobre", texto: "Sobre" },
  { href: "/contato", texto: "Contato" },
];

function Selo() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M20 3.5c6.2 6.7 11 12.1 11 18.3A11 11 0 0 1 20 32.8a11 11 0 0 1-11-11C9 15.6 13.8 10.2 20 3.5Z"
        stroke="#E8EDF5"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M20 12.2c3.1 3.6 5.2 6.4 5.2 9.4a5.2 5.2 0 1 1-10.4 0c0-3 2.1-5.8 5.2-9.4Z"
        fill="#075BE8"
        fillOpacity="0.85"
      />
      <path d="M31.5 8.5l1.1 2.6 2.6 1.1-2.6 1.1-1.1 2.6-1.1-2.6-2.6-1.1 2.6-1.1 1.1-2.6Z" fill="#E8EDF5" />
    </svg>
  );
}

function IconeMenu({ aberto }: { aberto: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {aberto ? (
        <path d="M6 6l12 12M18 6 6 18" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" />
      )}
    </svg>
  );
}

export function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false);
  const caminho = usePathname();

  // Fecha o menu ao trocar de rolagem de página (padrão "ajuste de estado
  // durante a renderização", sem efeito colateral).
  const [caminhoAnterior, setCaminhoAnterior] = useState(caminho);
  if (caminhoAnterior !== caminho) {
    setCaminhoAnterior(caminho);
    setMenuAberto(false);
  }

  useEffect(() => {
    document.body.style.overflow = menuAberto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuAberto]);

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-azul focus:px-4 focus:py-2 focus:text-white"
      >
        Pular para o conteúdo
      </a>

      <header className="sticky top-0 z-40 border-b border-borda bg-preto/92 backdrop-blur-md">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
          <button
            type="button"
            className="-ml-2 p-2 text-prata transition-colors hover:text-azul-claro xl:hidden"
            onClick={() => setMenuAberto((a) => !a)}
            aria-expanded={menuAberto}
            aria-controls="menu-mobile"
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          >
            <IconeMenu aberto={menuAberto} />
          </button>

          <Link href="/" className="group flex items-center gap-3">
            <Selo />
            <span className="flex flex-col leading-none">
              <span className="font-display text-xl tracking-[0.16em] sm:text-2xl">
                <span className="text-prata">CLEAN</span>
                <span> </span>
                <span className="text-azul-claro">DRIVE</span>
              </span>
              <span className="mt-1 text-[0.5rem] tracking-[0.46em] text-prata-3 uppercase">
                Car Wash
                <span> </span>
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 xl:flex" aria-label="Menu principal">
            {LINKS.map((link) => {
              const ativo =
                link.href !== "/#diferenciais" &&
                (link.href === "/" ? caminho === "/" : caminho.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={ativo ? "page" : undefined}
                  className={`text-[0.7rem] font-medium tracking-[0.18em] uppercase transition-colors ${
                    ativo ? "text-azul-claro" : "text-prata-2 hover:text-prata"
                  }`}
                >
                  {link.texto}
                </Link>
              );
            })}
          </nav>

          <Link href="/contato#agendamento" className="botao botao-azul shrink-0 px-4 py-3 sm:px-6">
            Agendar agora
          </Link>
        </div>

        {menuAberto && (
          <nav
            id="menu-mobile"
            aria-label="Menu principal"
            className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-borda bg-preto xl:hidden"
          >
            <ul className="mx-auto max-w-7xl px-4 py-2 sm:px-6">
              {LINKS.map((link) => (
                <li key={link.href} className="border-b border-borda/70 last:border-0">
                  <Link
                    href={link.href}
                    className="block py-4 text-[0.78rem] tracking-[0.2em] text-prata-2 uppercase transition-colors hover:text-azul-claro"
                  >
                    {link.texto}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
