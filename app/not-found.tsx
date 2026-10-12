import Link from "next/link";
import { site } from "@/lib/site";

export default function NaoEncontrado() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col justify-center px-4 py-24 text-center sm:px-6">
      <p className="rotulo">Erro 404</p>
      <h1 className="titulo-secao mt-4 text-prata">Página não encontrada</h1>
      <p className="mt-5 text-sm leading-relaxed texto-suave sm:text-base">
        O endereço que você acessou não existe ou foi movido. Que tal voltar para o início ou
        ver os serviços do {site.nome}?
      </p>

      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <Link href="/" className="botao botao-azul">
          Ir para o início
        </Link>
        <Link href="/servicos" className="botao botao-contorno">
          Ver serviços
        </Link>
      </div>
    </section>
  );
}
