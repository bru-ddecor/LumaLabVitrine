import React, { useState, useRef } from "react";
import { createRoot } from "react-dom/client";
import "./estilos.css";
import "./tema.css";
import { AlternarTema, ProvedorTema } from "./tema";
import { MenuLateral } from "./menu";
import { MovimentoOrbital } from "./orbita";
import { ProvedorFavoritos, FavoritarProduto } from "./favoritos";
import { FraseUtilizacao } from "./frase-utilizacao";
import {
  ProvedorCesta,
  AdicionarCesta,
  ImagemArrastavelProduto,
} from "./cesta";
import {
  produtos,
  buscarProdutos,
  tamanhosDisponiveis,
  precoProduto,
  medidaProduto,
} from "./produtos";
import {
  usarRevelacaoPagina,
  usarAnimacaoFoto,
  usarAnimacaoColecao,
  usarArrasteHorizontal,
} from "./animacoes";
const produtosDemonstrativos = Array.from(
  {
    length: 8,
  },
  (ignorado, indice) => ({
    id: indice,
    nome: [
      "Entre estrelas",
      "Pequenos universos",
      "Modo criativo",
      "Alma exploradora",
      "Pausa para florescer",
      "Conexões",
      "Dias de sol",
      "Um pouco de magia",
    ][indice],
    simbolo: ["✦", "☾", "✺", "↗︎", "❋", "♡", "☼", "✧"][indice],
    tom: indice % 4,
  }),
);
const formatarMoeda = (acumulado) =>
  acumulado.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
function Botton({ produto: produto, pequeno = false }) {
  return (
    <span
      className={`botton tom-${produto.tom} ${pequeno ? "pequeno" : ""}`}
      aria-hidden="true"
    >
      <span>{produto.simbolo}</span>
      <i>Luma Lab</i>
    </span>
  );
}
function ArteProvisoria({ produto: produto, kit = false, visualizacao = 0 }) {
  return (
    <div
      className={`arte-provisoria arte-${produto.tom} vista-${visualizacao}`}
    >
      <span className="aviso-amostra">
        IMAGEM PROVISÓRIA ·{" "}
        {["COMPOSIÇÃO", "DETALHE", "OUTRO ÂNGULO"][visualizacao]}
      </span>
      {kit ? (
        <div className="arte-kit">
          {[0, 1, 2, 3].map((horizontal) => (
            <Botton
              key={horizontal}
              pequeno
              produto={
                produtosDemonstrativos[
                  (produto.id + horizontal) % produtosDemonstrativos.length
                ]
              }
            />
          ))}
        </div>
      ) : (
        <Botton produto={produto} />
      )}
      <span className="assinatura-arte">LumaLab ✦</span>
    </div>
  );
}
function GaleriaProduto({ produto: produto, kit = false }) {
  const [ativa, definirAtiva] = useState(0);
  const referenciaFoto = usarAnimacaoFoto(ativa);
  const dialogoFoto = useRef(null);
  const ultimoToque = useRef(0);
  const inicioToque = useRef(null);
  function ampliarFoto() {
    if (!produto.imagens?.[ativa] || dialogoFoto.current.open) return;
    dialogoFoto.current.showModal();
  }
  function iniciarToque(evento) {
    if (evento.pointerType === "touch")
      inicioToque.current = { x: evento.clientX, y: evento.clientY };
  }
  function terminarToque(evento) {
    if (evento.pointerType !== "touch" || !inicioToque.current) return;
    const inicio = inicioToque.current;
    inicioToque.current = null;
    if (Math.hypot(evento.clientX - inicio.x, evento.clientY - inicio.y) > 12) {
      ultimoToque.current = 0;
      return;
    }
    const agora = Date.now();
    if (agora - ultimoToque.current < 350) {
      ampliarFoto();
      ultimoToque.current = 0;
    } else ultimoToque.current = agora;
  }
  const nome = `${produto.tipo === "kit" ? "Kit " : ""}${produto.nome}`;
  // A galeria aceita uma ou mais fotos por produto.
  const fotos = produto.imagens ?? [null, null, null];
  return (
    <div
      className="galeria-produto"
      role="region"
      aria-roledescription="carrossel"
      aria-label={`Fotos de ${nome}`}
    >
      <div
        ref={referenciaFoto}
        onDoubleClick={ampliarFoto}
        onPointerDownCapture={iniciarToque}
        onPointerUpCapture={terminarToque}
        role="group"
        aria-roledescription="slide"
        aria-label={`Imagem ${ativa + 1} de ${fotos.length}`}
      >
        {fotos[ativa] ? (
          produto.tipo === "personalizado" ? (
            <img
              className="foto-produto"
              src={fotos[ativa]}
              alt={`${nome} — foto ${ativa + 1}`}
              loading="lazy"
              draggable={false}
            />
          ) : (
            <ImagemArrastavelProduto
              produto={produto}
              className="foto-produto"
              src={fotos[ativa]}
              alt={`${nome} — foto ${ativa + 1}`}
              loading="lazy"
            />
          )
        ) : (
          <ArteProvisoria produto={produto} kit={kit} visualizacao={ativa} />
        )}
      </div>
      {fotos[ativa] && (
        <>
          <button
            className="ampliar-foto"
            onClick={ampliarFoto}
            aria-label={`Ampliar foto de ${nome}`}
            title="Ampliar foto (ou dê dois cliques)"
          >
            ⤢
          </button>
          <dialog
            className="visualizacao-foto"
            ref={dialogoFoto}
            aria-label={`Foto ampliada de ${nome}`}
            onClick={(evento) => {
              if (evento.target === evento.currentTarget)
                dialogoFoto.current.close();
            }}
          >
            <button
              className="fechar-foto"
              onClick={() => dialogoFoto.current.close()}
              aria-label="Fechar foto ampliada"
              autoFocus
            >
              ×
            </button>
            <img
              src={fotos[ativa]}
              alt={`${nome} — foto ${ativa + 1} ampliada`}
              draggable={false}
            />
          </dialog>
        </>
      )}
      {fotos.length > 1 && (
        <div className="indicadores-fotos" aria-label="Escolher foto">
          {fotos.map((ignorado, indice) => (
            <button
              key={indice}
              aria-label={`Ver foto ${indice + 1} de ${nome}`}
              aria-pressed={indice === ativa}
              onClick={() => definirAtiva(indice)}
            >
              <span />
            </button>
          ))}
        </div>
      )}
      <span className="apenas-leitor" aria-live="polite">
        Foto {ativa + 1} de {fotos.length}
      </span>
    </div>
  );
}
function CartaoProduto({ produto, kit = false }) {
  const [tamanhoSelecionado, definirTamanhoSelecionado] = useState(null);
  const produtoSelecionado = ["unitario", "parzinho", "trio"].includes(
    produto.tipo,
  )
    ? { ...produto, tamanhoSelecionado }
    : produto;
  const valor = precoProduto(produtoSelecionado);
  return (
    <article className="produto">
      {produto.tipo !== "personalizado" && (
        <AdicionarCesta produto={produtoSelecionado} />
      )}
      <GaleriaProduto produto={produtoSelecionado} kit={kit} />
      <div className="informacoes-produto">
        <span>
          {produto.tipo === "kit"
            ? "KIT COM 4 BOTTONS · 44 MM • 4,4 CM"
            : produto.tipo === "personalizado"
              ? "BOTTON PERSONALIZADO · 1 UNIDADE"
              : produto.tipo === "parzinho"
                ? "PAR COM 2 BOTTONS"
                : produto.tipo === "trio"
                  ? "TRIO COM 3 BOTTONS"
                  : "BOTTON INDIVIDUAL"}
        </span>
        {produto.tipo === "kit" && <b>ECONOMIZE R$ 6,50</b>}
      </div>
      <h3>
        {produto.tipo === "kit" ? "Kit " : ""}
        {produto.nome}
      </h3>
      <FavoritarProduto produto={produto} />
      {["unitario", "parzinho", "trio"].includes(produto.tipo) && (
        <fieldset className="seletor-tamanho">
          <legend>Escolha o tamanho</legend>
          <div>
            {tamanhosDisponiveis.map((tamanho) => (
              <button
                key={tamanho.valor}
                type="button"
                aria-pressed={tamanhoSelecionado === tamanho.valor}
                aria-label={`Selecionar ${tamanho.medida}`}
                onClick={() => definirTamanhoSelecionado(tamanho.valor)}
              >
                {tamanho.rotulo}
              </button>
            ))}
          </div>
          <small>
            {tamanhoSelecionado
              ? medidaProduto(produtoSelecionado)
              : "Selecione antes de adicionar à cesta"}
          </small>
        </fieldset>
      )}
      {produto.descricao && (
        <p className="descricao-produto">{produto.descricao}</p>
      )}
      {produto.tipo === "personalizado" ? (
        <div className="compra-personalizado">
          <div className="oferta-personalizados">
            <strong>
              Oferta por tempo limitado · A partir de 100 unidades: R$ 6,90 cada
            </strong>
            <p>
              100 lembranças por R$ 690,00 em vez de R$ 720,00. Economize R$
              30,00 (4,17%).
            </p>
          </div>
          <div className="preco">
            <strong>
              {produto.precoCentavos != null
                ? formatarMoeda(produto.precoCentavos / 100)
                : "Sob consulta"}
            </strong>
            {produto.precoCentavos != null && <span> / unidade</span>}
          </div>
          <a
            className="personalizar-produto"
            href={`https://wa.me/5532999240859?text=${encodeURIComponent(produto.mensagemPersonalizacao || `Olá! Gostaria de um botton personalizado de ${formatarMoeda(produto.precoCentavos / 100)}, com meu artista favorito e uma música na embalagem. Podemos combinar a personalização e o tamanho?`)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Personalizar pelo WhatsApp ↗
          </a>
        </div>
      ) : (
        <div className="preco">
          {produto.tipo === "kit" && <del>R$ 30,00</del>}
          <strong>
            {valor !== null
              ? formatarMoeda(valor / 100)
              : tamanhoSelecionado
                ? "Valor a confirmar"
                : `A partir de ${formatarMoeda(Math.min(...Object.values(produto.precosPorTamanho)) / 100)}`}
          </strong>
          <span>
            {produto.tipo === "kit"
              ? " / kit"
              : produto.tipo === "parzinho"
                ? " / par"
                : produto.tipo === "trio"
                  ? " / trio"
                  : " / unidade"}
          </span>
        </div>
      )}
    </article>
  );
}
function Colecao({
  titulo: titulo,
  subtitulo: subtitulo,
  kit = false,
  produtosDaColecao = produtos,
  identificador = kit ? "kits" : "destaques",
  mostrarTodos = false,
}) {
  const [expandida, definirExpandida] = useState(false);
  const exibirGrade = mostrarTodos || expandida;
  const faixa = usarAnimacaoColecao(exibirGrade, produtosDaColecao);
  const gestos = usarArrasteHorizontal(faixa, exibirGrade);
  return (
    <section
      className={`colecao ${["personalizados", "unitarios"].includes(identificador) ? "colecao-produtos-avulsos" : ""}`}
      id={identificador}
    >
      <div className="cabecalho-secao">
        <div>
          {kit ? (
            <FraseUtilizacao />
          ) : (
            <span className="sobretitulo">
              {identificador === "personalizados"
                ? "FEITO PARA TER A SUA CARA"
                : identificador === "unitarios"
                  ? "UM DETALHE, MUITA PERSONALIDADE"
                  : "ESCOLHAS DO LAB"}
            </span>
          )}
          <h2>
            {titulo}
            <span>✦</span>
          </h2>
          <p>{subtitulo}</p>
        </div>
      </div>
      <div
        ref={faixa}
        {...gestos}
        tabIndex={exibirGrade ? undefined : 0}
        role="region"
        aria-label={`Produtos de ${titulo}: arraste para os lados ou use as teclas de seta`}
        className={exibirGrade ? "grade-produtos" : "faixa-produtos"}
      >
        {(exibirGrade ? produtosDaColecao : produtosDaColecao.slice(0, 5)).map(
          (produto) => (
            <CartaoProduto key={produto.id} produto={produto} kit={kit} />
          ),
        )}
      </div>
      {!mostrarTodos && produtosDaColecao.length > 5 && (
        <div className="ver-mais">
          <button onClick={() => definirExpandida(!expandida)}>
            {expandida ? "Ver menos" : "Ver mais " + (kit ? "kits" : "bottons")}{" "}
            <span>{expandida ? "−" : "+"}</span>
          </button>
          <small>
            {expandida
              ? produtosDaColecao.length
              : Math.min(5, produtosDaColecao.length)}{" "}
            de {produtosDaColecao.length} {kit ? "kits" : "bottons"}
          </small>
        </div>
      )}
      {identificador === "unitarios" && (
        <p className="convite-personalizado">
          <a href="#personalizados">
            Não achou a arte que estava procurando?{" "}
            <span aria-hidden="true">↓</span>
          </a>
        </p>
      )}
      {identificador === "personalizados" && (
        <article className="cartao-arte-personalizada">
          <span className="sobretitulo">SUA IDEIA VIRA BOTTON</span>
          <h3>Unitários personalizados</h3>
          <p>
            Quer uma arte que ainda não está na vitrine? Conte sua ideia ou
            envie uma referência. Vamos combinar a arte, o tamanho e o valor do
            seu botton pelo WhatsApp.
          </p>
          <a
            className="personalizar-produto"
            href={`https://wa.me/5532999240859?text=${encodeURIComponent("Olá! Não encontrei a arte que procuro na vitrine e gostaria de um botton unitário personalizado. Podemos combinar a arte, o tamanho e o valor?")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Quero personalizar meu botton ↗
          </a>
        </article>
      )}
    </section>
  );
}
function Aplicacao() {
  const [busca, definirBusca] = useState("");
  usarRevelacaoPagina(busca);
  const filtrados = buscarProdutos(busca);
  const kitsFiltrados = filtrados.filter((produto) => produto.tipo === "kit");
  const unitariosFiltrados = filtrados.filter(
    (produto) => produto.tipo === "unitario",
  );
  const personalizadosFiltrados = filtrados.filter(
    (produto) => produto.tipo === "personalizado",
  );
  return (
    <>
      <div className="aviso-topo">
        PEQUENOS DETALHES. GRANDES FORMAS DE SER. <span>✦</span> BOTTONS PARA
        EXPRESSAR VOCÊ
      </div>
      <header>
        <div className="inicio-cabecalho">
          <MenuLateral />
          <a className="logo" href="#" aria-label="LumaLab início">
            Luma
            <span>
              Lab<i>✦</i>
            </span>
          </a>
        </div>
        <nav className="navegacao-principal" aria-label="Navegação principal">
          <AlternarTema compacto />
          <a href="#destaques">Destaques</a>
          <a href="#kits">Kits de bottons</a>
        </nav>
        <div className="acoes-cabecalho">
          <span className="nota-cabecalho">Feitos para expressar você ↗︎</span>
        </div>
      </header>
      <main>
        <section className="apresentacao">
          <div className="apresentacao-texto">
            <span className="sobretitulo">PERSONALIDADE EM CADA DETALHE</span>
            <h1>
              Seu universo.
              <br />
              Do seu <em>jeito.</em>
              <sup>✦</sup>
            </h1>
            <p>
              Um toque de arte, um pouco de você.
              <br />
              Bottons para levar suas paixões por onde for.
            </p>
            <a className="botao-principal" href="#destaques">
              Explore a vitrine <span>↗︎</span>
            </a>
            <div className="apresentacao-rodape">
              <span>Infinitas possibilidades</span>
            </div>
          </div>
          <div className="apresentacao-arte">
            <div className="ceu-estrelado" aria-hidden="true">
              {Array.from({ length: 15 }, (ignorado, indice) => (
                <span
                  key={indice}
                  style={{
                    left: `${8 + ((indice * 23) % 86)}%`,
                    top: `${8 + ((indice * 31) % 79)}%`,
                  }}
                >
                  {indice % 4 === 0 ? "✦" : "·"}
                </span>
              ))}
            </div>
            <div className="orbita" />
            <span className="legenda-arte">
              PEQUENAS PEÇAS,
              <br />
              MUITA PERSONALIDADE.
            </span>
            <MovimentoOrbital>
              <div className="apresentacao-botton primeiro">
                <div className="face-orbital">
                  <div
                    className="botton botton-logotipo"
                    role="img"
                    aria-label="Botton com a marca LumaLab"
                  >
                    <span className="marca-botton">
                      Luma
                      <span>
                        Lab<b>✦</b>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="apresentacao-botton segundo">
                <div className="face-orbital">
                  <div
                    className="botton botton-slogan"
                    role="img"
                    aria-label="Personalidade para usar, vestir e compartilhar"
                  >
                    <span>
                      Personalidade
                      <br />
                      para usar, vestir
                      <br />e compartilhar
                    </span>
                  </div>
                </div>
              </div>
              <div className="apresentacao-botton terceiro">
                <div className="face-orbital">
                  <div
                    className="botton lua-noturna"
                    role="img"
                    aria-label="Botton azul com uma lua cheia brilhante e estrelas"
                  >
                    <svg viewBox="0 0 170 170" aria-hidden="true">
                      <defs>
                        <radialGradient id="brilho-lua-cheia">
                          <stop offset="0%" stopColor="#fffef4" />
                          <stop offset="75%" stopColor="#e6f1ff" />
                          <stop offset="100%" stopColor="#b5cce7" />
                        </radialGradient>
                      </defs>
                      <circle
                        cx="83"
                        cy="87"
                        r="57"
                        fill="#b8d8ff"
                        opacity=".06"
                      />
                      <circle
                        cx="83"
                        cy="87"
                        r="51"
                        fill="#dbeaff"
                        opacity=".1"
                      />
                      <circle
                        cx="83"
                        cy="87"
                        r="44"
                        fill="url(#brilho-lua-cheia)"
                      />
                      <g fill="#809cbd" opacity=".15">
                        <ellipse cx="65" cy="66" rx="10" ry="14" />
                        <circle cx="96" cy="98" r="14" />
                        <circle cx="69" cy="109" r="8" />
                        <circle cx="101" cy="61" r="6" />
                        <circle cx="55" cy="92" r="5" />
                      </g>
                      <path
                        d="m128 22 3 9 9 3-9 3-3 9-3-9-9-3 9-3Zm22 35 2 6 6 2-6 2-2 6-2-6-6-2 6-2Z"
                        fill="#a7c7f7"
                      />
                      <circle cx="49" cy="29" r="2" fill="#a7c7f7" />
                      <circle cx="141" cy="113" r="2" fill="#a7c7f7" />
                    </svg>
                  </div>
                  <img
                    className="decoracao-cerejeira"
                    src="/imagens/decoracao/botton-cerejeira.png"
                    alt="Botton bege com flores de cerejeira em vinho que ultrapassam a borda"
                    width="1280"
                    height="1200"
                  />
                </div>
              </div>
            </MovimentoOrbital>
            <span className="apresentacao-selo">
              crie • expresse • seja você •
            </span>
            <span className="apresentacao-nota">COMPOSIÇÃO ILUSTRATIVA</span>
          </div>
        </section>
        <div className="introducao">
          <p>
            Sua próxima pequena obsessão <span>↓</span>
          </p>
          <label className="pesquisa">
            <span aria-hidden="true">⌕</span>
            <input
              aria-label="Pesquisar bottons"
              placeholder="Encontre seu universo…"
              value={busca}
              onChange={(evento) => definirBusca(evento.target.value)}
            />
            {busca && (
              <button
                onClick={() => definirBusca("")}
                aria-label="Limpar pesquisa"
              >
                ×
              </button>
            )}
          </label>
        </div>
        <div className="nota-catalogo">
          Kits com 4 bottons de 44 mm • 4,4 cm. Explore as três fotos de cada
          kit e encontre o seu favorito.
        </div>
        {busca.trim() && filtrados.length ? (
          <Colecao
            identificador="resultados"
            titulo="Resultados da busca"
            subtitulo={`${filtrados.length} produto${filtrados.length === 1 ? " encontrado" : "s encontrados"} para “${busca.trim()}”.`}
            produtosDaColecao={filtrados}
            mostrarTodos
          />
        ) : filtrados.length ? (
          <>
            <Colecao
              titulo="Em destaque"
              subtitulo="Arraste para os lados e encontre seus favoritos."
              produtosDaColecao={[
                ...filtrados.filter((produto) => produto.destaque),
                ...kitsFiltrados.filter((produto) => !produto.destaque),
              ]}
            />
            {kitsFiltrados.length > 0 && (
              <>
                <aside className="promocao">
                  <span className="promocao-estrela">✺</span>
                  <div>
                    <span className="sobretitulo">
                      MAIS PERSONALIDADE, POR MENOS
                    </span>
                    <h2>Quatro bottons. Muitas combinações.</h2>
                    <p>
                      Escolha um kit com 4 unidades de 44 mm • 4,4 cm e
                      economize R$ 6,50.
                    </p>
                  </div>
                  <div className="promocao-preco">
                    <del>R$ 30,00</del>
                    <strong>R$ 23,50</strong>
                    <a href="#kits">Conheça os kits ↗︎</a>
                  </div>
                </aside>
                <Colecao
                  titulo="Kits de bottons"
                  subtitulo="Arraste para os lados para explorar os kits."
                  kit
                  produtosDaColecao={kitsFiltrados}
                />
              </>
            )}
            {unitariosFiltrados.length > 0 && (
              <Colecao
                identificador="unitarios"
                titulo="Bottons individuais"
                subtitulo="Escolha sua arte e o tamanho que combina com você."
                produtosDaColecao={unitariosFiltrados}
              />
            )}
            {filtrados.some((produto) => produto.tipo === "parzinho") && (
              <Colecao
                identificador="parzinhos"
                titulo="Parzinhos"
                subtitulo="Duplas para usar juntas ou dividir com alguém especial."
                produtosDaColecao={filtrados.filter(
                  (produto) => produto.tipo === "parzinho",
                )}
              />
            )}
            {filtrados.some((produto) => produto.tipo === "trio") && (
              <Colecao
                identificador="trios"
                titulo="Trios"
                subtitulo="Três bottons, uma combinação cheia de personalidade."
                produtosDaColecao={filtrados.filter(
                  (produto) => produto.tipo === "trio",
                )}
              />
            )}
            {personalizadosFiltrados.length > 0 && (
              <Colecao
                identificador="personalizados"
                titulo="Personalizados"
                subtitulo="Uma música, um artista e uma lembrança só sua."
                produtosDaColecao={personalizadosFiltrados}
              />
            )}
          </>
        ) : (
          <p className="sem-resultados">
            Nenhum botton encontrado para “{busca}”. Tente outra palavra.
          </p>
        )}
        <section className="encerramento-marca">
          <span>✦</span>
          <h2>
            Mais que um detalhe.
            <br />
            Um pedacinho de quem você é.
          </h2>
          <p>Arte para usar, expressar e compartilhar.</p>
        </section>
      </main>
      <footer>
        <a className="logo-rodape" href="#">
          LumaLab ✦
        </a>
        <span>PERSONALIDADE PARA LEVAR COM VOCÊ.</span>
        <span>© {new Date().getFullYear()} LumaLab</span>
      </footer>
    </>
  );
}
createRoot(document.getElementById("raiz")).render(
  <ProvedorTema>
    <ProvedorCesta>
      <ProvedorFavoritos>
        <Aplicacao />
      </ProvedorFavoritos>
    </ProvedorCesta>
  </ProvedorTema>,
);
