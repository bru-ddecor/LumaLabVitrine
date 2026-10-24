# LumaLab ✦ Vitrine de bottons

Uma vitrine digital para a LumaLab: arte e personalidade em bottons para usar, presentear e compartilhar. O projeto também é um espaço de estudo sobre o uso de agentes de inteligência artificial no desenvolvimento de software, aplicado às necessidades reais de um pequeno negócio.

## O objetivo para a LumaLab

Reunir os produtos em um catálogo visual, organizado e fácil de explorar no celular. A vitrine ajuda quem visita a conhecer as artes, comparar tamanhos, montar uma cesta e enviar o pedido pelo WhatsApp.

O catálogo reúne bottons individuais, kits, parzinhos, trios, coleções e opções personalizadas. Os temas refletem os universos da marca: anime, música, programação, cultura geek, cultura negra, entre outros. A categoria **Ubuntu — Raízes Negras** reúne uma seleção voltada à identidade, à representatividade e à valorização da cultura negra.

A compra é combinada pelo WhatsApp. O site não processa pagamentos nem confirma pedidos automaticamente; os personalizados e as coleções também permitem conversar sobre a encomenda antes de fechar os detalhes.

## O objetivo como estudo de agentes de IA

O projeto investiga, na prática, como trabalhar com um agente de IA ao longo da construção e manutenção de uma aplicação. O desenvolvimento acontece de forma incremental: uma necessidade da LumaLab vira uma tarefa, uma implementação e uma verificação antes de entrar no repositório.

Nesse processo, o agente auxilia em atividades como:

- Transformar solicitações em funcionalidades e ajustes na interface.
- Cadastrar produtos a partir das fotos fornecidas, sugerir nomes e organizar palavras-chave e categorias.
- Implementar a cesta, as galerias, a busca e a integração de curtidas.
- Executar a compilação e, quando necessário, verificar comportamentos no navegador.
- Documentar decisões e preparar alterações versionadas com Git.

As decisões sobre identidade da marca, nomes, preços, categorias e publicação continuam sob orientação da responsável pela LumaLab. As sugestões do agente passam por essa revisão: correções e preferências fazem parte do desenvolvimento.

O agente atua como ferramenta de desenvolvimento. **A vitrine não oferece um chatbot nem executa um agente de IA para os visitantes.** As imagens dos produtos são fornecidas para o catálogo, e não geradas durante a navegação.

## Funcionalidades

- Busca por nomes, temas, categorias e palavras-chave, com normalização de acentos.
- Carrosséis por categoria, sem corte na quantidade de produtos, e opção de visualizar todos em grade.
- Galerias com alternância automática de fotos e ampliação de imagens.
- Seleção de tamanho nos produtos compatíveis, com preço por variante.
- Cesta persistida no navegador e preparação da mensagem do pedido para o WhatsApp.
- Contato direto para produtos personalizados e coleções sob consulta.
- Curtidas públicas sem login, integradas ao Supabase quando configurado.
- Temas claro e escuro, animações e respeito à preferência por movimento reduzido.
- Produtos em mais de uma categoria compartilhando a mesma identidade e as mesmas curtidas.

## Tecnologias

| Tecnologia | Uso |
| --- | --- |
| React 19 | Componentes e estado da interface |
| Vite 7 | Desenvolvimento local e compilação |
| JavaScript e CSS | Lógica, estilos e animações |
| Supabase / PostgreSQL | Persistência das curtidas e funções de acesso |
| localStorage | Persistência local da cesta e identificação do navegador para curtidas |
| WhatsApp | Encaminhamento dos pedidos e consultas |
| Vercel | Publicação da aplicação estática |
| Git e GitHub | Histórico e organização das alterações |

## Rodar localmente

Requisitos: **Node.js 22.12 ou superior** e npm.

```bash
git clone https://github.com/bru-ddecor/LumaLabVitrine.git
cd LumaLabVitrine
npm ci
npm run dev
```

Abra o endereço informado pelo Vite no terminal. Para gerar e conferir a versão de produção:

```bash
npm run build
npm run preview
```

A compilação gera a pasta `dist/`.

### Configurar as curtidas

A vitrine funciona sem Supabase; nesse caso, os botões de curtida ficam ocultos.

Para ativá-los, configure o banco conforme [Configurar favoritos](docs/configurar-favoritos.md) e crie um arquivo `.env.local` na raiz:

```dotenv
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=sua-chave-publica
```

Use somente a chave pública `publishable` ou `anon`. Variáveis com prefixo `VITE_` ficam disponíveis no navegador; nunca coloque uma chave secreta ou `service_role` nelas. O arquivo `.env.local` não deve ser enviado ao Git.

Execute o [SQL de configuração](supabase/favoritos.sql) no projeto Supabase e reinicie o servidor de desenvolvimento após definir as variáveis. Na Vercel, configure as mesmas variáveis e faça um novo deploy.

As curtidas usam um identificador por navegador, sem cadastro. Isso não equivale a uma pessoa única e não impede manipulação por alguém que troque ou fabrique identificadores.

## Estrutura do projeto

```text
src/
  principal.jsx                # Interface e composição das seções
  produtos.js                  # Catálogo, variantes e funções de busca e preço
  categorias-individuais.js    # Nomes e ordem das categorias
  cesta.jsx                    # Cesta e encaminhamento ao WhatsApp
  favoritos.jsx                # Integração de curtidas
  fotos-automaticas.js          # Alternância das galerias
  estilos.css                  # Estilos principais
public/imagens/                # Fotos do catálogo e elementos visuais
docs/                          # Documentação de manutenção
supabase/                      # Configuração SQL e cadastro de produtos nas curtidas
```

## Manter o catálogo

Cada produto tem um identificador e uma referência permanente. Nomes e categorias podem mudar sem alterar essa identidade. Produtos com mais de uma categoria usam o campo `categoriasAdicionais`; não precisam ser duplicados no catálogo.

Para cadastrar um produto:

1. Adicione as fotos em `public/imagens/`, na pasta correspondente ao tipo e ao identificador do produto.
2. Registre os dados em `src/produtos.js`, incluindo referência, nome, tipo, palavras-chave, imagens e os preços e tamanhos aplicáveis.
3. Para produtos exibidos nos carrosséis temáticos, defina `categoria` e, se necessário, `categoriasAdicionais`.
4. Atualize o [catálogo interno](docs/catalogo-interno.md).
5. Inclua o identificador no SQL de favoritos e execute o cadastro correspondente no Supabase para habilitar as curtidas em produção.
6. Rode `npm run build` e confira as fotos, a busca, as categorias e o comportamento de compra aplicável ao produto.

O catálogo interno documenta as referências e as condições comerciais. A configuração do Supabase não é atualizada apenas pelo envio do código ao GitHub: os novos identificadores também precisam ser registrados no banco.

## Publicação e fluxo de trabalho

Na Vercel, a compilação usa `npm run build` e a pasta de saída é `dist`. As configurações de ambiente das curtidas devem estar disponíveis no momento da compilação.

O fluxo adotado para novos produtos agrupa o envio ao repositório em lotes de cinco. Os commits feitos pelo agente usam o prefixo `agent:`. Ajustes na interface e no catálogo são revisados ao longo da conversa, e as verificações são escolhidas conforme a mudança.

Este é um projeto em evolução, construído a partir do uso real da LumaLab e do aprendizado contínuo sobre colaboração entre pessoas e agentes de IA.
