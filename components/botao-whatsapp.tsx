"use client";

import { site } from "@/lib/site";
import { linkWhatsapp } from "@/lib/whatsapp";

export function BotaoWhatsapp() {
  const mensagem = linkWhatsapp(
    `Olá, ${site.nome}! Vim pelo site e gostaria de tirar uma dúvida sobre os serviços.`,
  );

  return (
    <a
      href={mensagem}
      target="_blank"
      rel="noreferrer noopener"
      className="fixed right-4 bottom-4 z-40 flex items-center gap-3 rounded-full border border-azul/60 bg-azul px-5 py-3 text-white shadow-[0_16px_40px_-14px_rgba(7,91,232,0.9)] transition-colors hover:bg-azul-claro sm:right-6 sm:bottom-6"
      aria-label="Atendimento — falar com o Carlão Detail pelo WhatsApp"
    >
      <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2a9.9 9.9 0 0 0-8.4 15.06L2 22l5.1-1.6A9.9 9.9 0 1 0 12.04 2Zm0 1.8a8.1 8.1 0 1 1-4.1 15.06l-.3-.18-2.6.8.83-2.53-.2-.31A8.1 8.1 0 0 1 12.04 3.8Zm-3.1 4c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02 0 1.19.87 2.34.99 2.5.12.16 1.7 2.7 4.2 3.68 2.08.82 2.5.66 2.96.62.45-.04 1.45-.59 1.66-1.17.2-.58.2-1.07.14-1.17-.06-.1-.22-.16-.46-.28-.24-.12-1.45-.72-1.67-.8-.22-.08-.39-.12-.55.12-.16.24-.63.8-.77.96-.14.16-.28.18-.52.06-.24-.12-1.03-.38-1.96-1.21-.72-.65-1.21-1.44-1.35-1.68-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.47-.39-.4-.54-.41h-.26Z" />
      </svg>
      <span className="text-[0.68rem] font-medium tracking-[0.2em] uppercase">Atendimento</span>
    </a>
  );
}
