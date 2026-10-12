# Clean Drive Car Wash · Site institucional

Site premium da **Clean Drive Car Wash** (lavagem automotiva e estética veicular),
construído em **Next.js 16 + TypeScript + Tailwind CSS 4**, com identidade visual
preto azulado `#030A18`, azul elétrico `#075BE8`, azul brilhante `#3B82F6` e prata
metálico `#E8EDF5`, títulos em **Oswald** e textos em **Inter**.

## Como rodar

```bash
npm install
npm run dev      # desenvolvimento em http://localhost:3000
npm run build    # build de produção
npm start        # servidor de produção
npm run lint     # ESLint
```

## O que já está implementado

| RF | Funcionalidade | Situação |
| --- | --- | --- |
| RF01 | Site responsivo (mobile-first) | Implementado |
| RF02 | Catálogo de serviços | Implementado (`lib/servicos.ts`) |
| RF03 | Botões de WhatsApp funcionais | Implementado (flutuante, rodapé, hero, CTA) |
| RF04 | Formulário de agendamento validado | Implementado, com abertura do WhatsApp |
| RF05 | Endereço, horários e mapa | Implementado (iframe + link Google Maps) |
| RF06 | Galeria de trabalhos | Implementado (filtros, ampliação, antes/depois) |
| RF07 | Edição de serviços e preços | Configurável por arquivo (sem painel — Fase 3) |
| RF08 | Registro e gestão de reservas | Não implementado (Fase 3) |
| RF09 | Confirmação automatizada | Não implementado (Fase 3) |
| RF10 | Relatórios e histórico | Não implementado (Fase 3) |

### Páginas

| Rota | Conteúdo |
| --- | --- |
| `/` | Hero, serviços, diferenciais, antes e depois, processo de atendimento, localização, CTA final |
| `/servicos` | Lavagem externa, interna e completa + ponte para estética |
| `/estetica` | Polimento, higienização interna, proteção da pintura e metodologia |
| `/galeria` | Filtros por categoria, visualização ampliada, antes e depois |
| `/sobre` | Manifesto, metodologia de trabalho e compromissos |
| `/contato` | Formulário de agendamento, dados de contato, horários e mapa |
| `/privacidade` | Política de privacidade (LGPD) |
| `sitemap.xml` · `robots.txt` · `404` | SEO e navegação |

## ⚠️ Configurar antes de publicar

O site está tecnicamente pronto, mas os **dados comerciais abaixo são
provisórios** e precisam ser trocados pelos reais:

1. **WhatsApp** — `lib/site.ts` → `whatsapp` (ou variável `NEXT_PUBLIC_WHATSAPP_NUMERO`
   em `.env.local`). O valor padrão `5511999990000` é um placeholder: enquanto não for
   trocado, o botão abre uma conversa com um número inexistente.
2. **Telefone, e-mail e endereço** — `lib/site.ts` → `telefoneExibicao`,
   `telefoneLink`, `email`, `endereco`.
3. **Horários de funcionamento** — `lib/site.ts` → `horarios`.
4. **Preços** — `lib/servicos.ts` → campo `preco`. Hoje todos são `null`, e o card
   exibe "sob consulta" com botão "Consultar preço". Preencha com os valores reais
   (ex.: `preco: "R$ 120"`) para o card passar a exibir o preço.
5. **Domínio** — `NEXT_PUBLIC_DOMINIO` (aparece em metadados, Open Graph e sitemap).
6. **Fotos** — `public/imagens/*.jpg` são fotografias de referência (Unsplash) usadas
   como conteúdo demonstrativo. Substitua pelos trabalhos reais da empresa e remova a
   marcação `demonstrativo`/aviso em `lib/galeria.ts`.
7. **Avaliações** — não há depoimentos inventados. Enquanto não existirem avaliações
   verificáveis, a seção exibe o processo de atendimento (como prevê o PRD).

Depois de alterar qualquer um desses arquivos, reinicie o servidor (`npm run dev`
ou refaça o build).

## O que depende de credencial externa

- **Nenhuma é obrigatória para o site funcionar.** Não há backend, banco de dados,
  painel administrativo ou integração de pagamento nesta fase.
- **Google Maps** — o mapa usa o modo embutido público (`output=embed`), sem chave de
  API. Se o endereço real estiver em um local que queira privacidade, troque por um
  link manual.
- **WhatsApp** — a abertura da conversa é via `wa.me`, que não exige token. O número
  precisa ser real e com DDI/DDD.
- **Fase 3 (opcional)** — painel de serviços/preços e registro de reservas exigirá
  backend, banco de dados e autenticação.

## Fluxo de agendamento

1. Cliente preenche nome, veículo, serviço, data, horário e observações.
2. O formulário valida os campos (inclusive data no passado) e monta a mensagem.
3. `window.open` leva ao WhatsApp com a mensagem já preenchida, com *fallback* de
   link caso o navegador bloqueie a nova janela.
4. A interface deixa explícito que **a solicitação não é uma reserva confirmada** —
   a confirmação depende da resposta da equipe.

Mensagem enviada:

```
Olá, Clean Drive! Gostaria de solicitar um agendamento.

Nome: [nome]
Veículo: [modelo]
Serviço: [serviço]
Data desejada: [data]
Horário desejado: [horário]

Poderiam confirmar a disponibilidade e o valor, por favor?
```

## Acessibilidade e SEO

- Navegação por teclado, foco visível, *skip link* e rótulos em todos os campos.
- `aria-invalid`, `role="alert"` e mensagens de erro por campo.
- Lightbox acessível (Esc, setas, `aria-modal`), `prefers-reduced-motion` respeitado.
- Metadados por página, canonical, Open Graph, JSON-LD `AutoWash`, sitemap e robots.
- Imagens com `alt` descritivo e carregadas otimizadas via `next/image`.

## Estrutura

```
app/            páginas (App Router), layout global, sitemap e robots
components/     cabeçalho, rodapé, cards, galeria, antes/depois, formulário, CTA
lib/            site.ts (dados comerciais), servicos.ts, galeria.ts, whatsapp.ts
public/imagens/ fotografias do site (substitua pelas reais)
.env.example    exemplo das variáveis de ambiente
```

## Próximos passos (Fase 3 do PRD)

- Painel administrativo protegido para editar serviços, preços e horários.
- Registro de reservas em banco de dados com confirmação automatizada.
- Relatórios e histórico de clientes.
