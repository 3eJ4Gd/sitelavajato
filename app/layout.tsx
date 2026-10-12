import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { Cabecalho } from "@/components/cabecalho";
import { Rodape } from "@/components/rodape";
import { BotaoWhatsapp } from "@/components/botao-whatsapp";
import { site } from "@/lib/site";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.dominio),
  title: {
    default: `${site.nomeCompleto} · Lavagem e estética veicular`,
    template: `%s · ${site.nomeCompleto}`,
  },
  description: site.descricao,
  keywords: [
    "lavagem automotiva",
    "estética veicular",
    "lavar carro",
    "polimento automotivo",
    "higienização interna",
    "detailing",
  ],
  applicationName: site.nomeCompleto,
  authors: [{ name: site.nomeCompleto }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.nomeCompleto,
    title: `${site.nomeCompleto} · Lavagem e estética veicular`,
    description: site.descricao,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.nomeCompleto} · Lavagem e estética veicular`,
    description: site.descricao,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#030A18",
  width: "device-width",
  initialScale: 1,
};

const dadosEstruturados = {
  "@context": "https://schema.org",
  "@type": "AutoWash",
  name: site.nomeCompleto,
  slogan: site.slogan,
  description: site.descricao,
  url: site.dominio,
  telephone: `+${site.telefoneLink}`,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.endereco.logradouro}, ${site.endereco.numero} — ${site.endereco.complemento}`,
    addressLocality: site.endereco.cidade,
    addressRegion: site.endereco.uf,
    postalCode: site.endereco.cep,
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "14:00",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${oswald.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Cabecalho />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <Rodape />
        <BotaoWhatsapp />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dadosEstruturados) }}
        />
      </body>
    </html>
  );
}
