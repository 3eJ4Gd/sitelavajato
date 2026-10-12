import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const agora = new Date();

  const rotas = [
    { caminho: "/", prioridade: 1 },
    { caminho: "/servicos", prioridade: 0.9 },
    { caminho: "/estetica", prioridade: 0.8 },
    { caminho: "/contato", prioridade: 0.9 },
    { caminho: "/galeria", prioridade: 0.7 },
    { caminho: "/sobre", prioridade: 0.6 },
    { caminho: "/privacidade", prioridade: 0.3 },
  ];

  return rotas.map((rota) => ({
    url: `${site.dominio}${rota.caminho}`,
    lastModified: agora,
    changeFrequency: "monthly" as const,
    priority: rota.prioridade,
  }));
}
