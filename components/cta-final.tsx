import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { linkWhatsapp } from "@/lib/whatsapp";

export function CtaFinal() {
  return (
    <section className="relative isolate overflow-hidden" aria-labelledby="titulo-cta-final">
      <Image
        src="/imagens/cta-final.jpg"
        alt="Carro recebendo jato de água durante a lavagem"
        fill
        sizes="100vw"
        className="object-cover object-[50%_45%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-preto via-preto/90 to-preto/40" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
        <div className="max-w-xl">
          <div className="linha-azul h-px w-24" />
          <p className="rotulo mt-6">Agendamento</p>
          <h2 id="titulo-cta-final" className="titulo-secao mt-4 text-prata">
            Seu carro merece
            <br />
            esse cuidado.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed texto-suave">
            {site.slogan} Escolha o serviço, informe o veículo e diga o melhor horário para
            você — a equipe confirma pelo WhatsApp.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/contato#agendamento" className="botao botao-azul">
              Agende sua próxima lavagem
            </Link>
            <a
              href={linkWhatsapp(
                `Olá, ${site.nome}! Gostaria de agendar uma lavagem.`,
              )}
              target="_blank"
              rel="noreferrer noopener"
              className="botao botao-contorno"
            >
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
