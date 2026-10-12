import Link from "next/link";
import { site, mapaQuery } from "@/lib/site";
import { servicos } from "@/lib/servicos";
import { linkWhatsapp } from "@/lib/whatsapp";

const NAV = [
  { href: "/", texto: "Início" },
  { href: "/servicos", texto: "Serviços" },
  { href: "/estetica", texto: "Estética automotiva" },
  { href: "/galeria", texto: "Galeria" },
  { href: "/sobre", texto: "Sobre nós" },
  { href: "/contato", texto: "Contato e agendamento" },
  { href: "/privacidade", texto: "Política de privacidade" },
];

export function Rodape() {
  const ano = new Date().getFullYear();

  return (
    <footer className="border-t border-borda bg-preto-2">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-2xl tracking-[0.16em]">
              <span className="text-prata">CLEAN</span>
              <span className="text-azul-claro">DRIVE</span>
            </p>
            <p className="mt-1 text-[0.5rem] tracking-[0.46em] text-prata-3 uppercase">
              Car Wash
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed texto-suave">{site.slogan}</p>
            <p className="mt-5 text-sm texto-suave">{site.telefoneExibicao}</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-1 block text-sm texto-suave transition-colors hover:text-azul-claro"
            >
              {site.email}
            </a>
            <a
              href={linkWhatsapp(
                `Olá, ${site.nome}! Gostaria de falar com a equipe sobre os serviços.`,
              )}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-4 inline-flex items-center gap-2 text-sm text-azul-claro transition-colors hover:text-prata"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2a9.9 9.9 0 0 0-8.4 15.06L2 22l5.1-1.6A9.9 9.9 0 1 0 12.04 2Zm0 1.8a8.1 8.1 0 1 1-4.1 15.06l-.3-.18-2.6.8.83-2.53-.2-.31A8.1 8.1 0 0 1 12.04 3.8Z" />
              </svg>
              Falar no WhatsApp
            </a>
          </div>

          <nav aria-label="Serviços">
            <h2 className="text-sm tracking-[0.24em] text-prata">Serviços</h2>
            <ul className="mt-5 space-y-3">
              {servicos.map((servico) => (
                <li key={servico.slug}>
                  <Link
                    href={servico.grupo === "estetica" ? "/estetica" : "/servicos"}
                    className="text-sm texto-suave transition-colors hover:text-azul-claro"
                  >
                    {servico.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Navegação">
            <h2 className="text-sm tracking-[0.24em] text-prata">Navegação</h2>
            <ul className="mt-5 space-y-3">
              {NAV.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm texto-suave transition-colors hover:text-azul-claro"
                  >
                    {link.texto}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm tracking-[0.24em] text-prata">Onde estamos</h2>
            <address className="mt-5 text-sm leading-relaxed texto-suave not-italic">
              {site.endereco.logradouro}, {site.endereco.numero}
              <br />
              {site.endereco.complemento}
              <br />
              {site.endereco.cidade} - {site.endereco.uf} · CEP {site.endereco.cep}
            </address>

            <dl className="mt-5 space-y-2 text-sm">
              {site.horarios.map((h) => (
                <div key={h.dia} className="flex justify-between gap-3">
                  <dt className="texto-suave">{h.dia}</dt>
                  <dd className="text-prata">{h.horas}</dd>
                </div>
              ))}
            </dl>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapaQuery(site.endereco)}`}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-5 inline-block text-sm text-azul-claro transition-colors hover:text-prata"
            >
              Abrir no Google Maps
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-borda pt-8 text-xs text-prata-3 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {ano} {site.nomeCompleto}. Todos os direitos reservados.
          </p>
          <p>{site.descricao}</p>
        </div>
      </div>
    </footer>
  );
}
