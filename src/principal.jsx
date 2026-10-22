import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./estilos.css";
import "./tema.css";
import { MenuLateral } from "./menu";
import { MovimentoOrbital } from "./orbita";
import { FraseUtilizacao } from "./frase-utilizacao";
import {
  ProvedorCesta,
  AdicionarCesta,
  ImagemArrastavelProduto,
} from "./cesta";
import { produtos, buscarProdutos } from "./produtos";
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
  const nome = `${produto.tipo === "kit" ? "Kit " : ""}${produto.nome}`;
  // Cada produto do catálogo fornece suas três fotos.
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
        role="group"
        aria-roledescription="slide"
        aria-label={`Imagem ${ativa + 1} de ${fotos.length}`}
      >
        {fotos[ativa] ? (
          <ImagemArrastavelProduto
            produto={produto}
            className="foto-produto"
            src={fotos[ativa]}
            alt={`${nome} — foto ${ativa + 1}`}
            loading="lazy"
          />
        ) : (
          <ArteProvisoria produto={produto} kit={kit} visualizacao={ativa} />
        )}
      </div>
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
      <span className="apenas-leitor" aria-live="polite">
        Foto {ativa + 1} de {fotos.length}
      </span>
    </div>
  );
}
function Colecao({
  titulo: titulo,
  subtitulo: subtitulo,
  kit = false,
  produtosDaColecao = produtos,
}) {
  const [expandida, definirExpandida] = useState(false);
  const faixa = usarAnimacaoColecao(expandida, produtosDaColecao);
  const gestos = usarArrasteHorizontal(faixa, expandida);
  return (
    <section className="colecao" id={kit ? "kits" : "destaques"}>
      <div className="cabecalho-secao">
        <div>
          {kit ? (
            <FraseUtilizacao />
          ) : (
            <span className="sobretitulo">ESCOLHAS DO LAB</span>
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
        tabIndex={expandida ? undefined : 0}
        role="region"
        aria-label={`Produtos de ${titulo}: arraste para os lados ou use as teclas de seta`}
        className={expandida ? "grade-produtos" : "faixa-produtos"}
      >
        {(expandida ? produtosDaColecao : produtosDaColecao.slice(0, 5)).map(
          (produto) => (
            <article className="produto" key={produto.id}>
              <AdicionarCesta produto={produto} />
              <GaleriaProduto produto={produto} kit={kit} />
              <div className="informacoes-produto">
                <span>
                  {produto.tipo === "kit"
                    ? "KIT COM 4 BOTTONS · 44 MM • 4,4 CM"
                    : "BOTTON · 44 MM"}
                </span>
                {produto.tipo === "kit" && <b>ECONOMIZE R$ 6,50</b>}
              </div>
              <h3>
                {produto.tipo === "kit" ? "Kit " : ""}
                {produto.nome}
              </h3>
              <div className="preco">
                {produto.tipo === "kit" && <del>R$ 30,00</del>}
                <strong>
                  {formatarMoeda(produto.tipo === "kit" ? 23.5 : 7.5)}
                </strong>
                <span>{produto.tipo === "kit" ? " / kit" : " / unidade"}</span>
              </div>
            </article>
          ),
        )}
      </div>
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
    </section>
  );
}
function Aplicacao() {
  const [busca, definirBusca] = useState("");
  usarRevelacaoPagina(busca);
  const filtrados = buscarProdutos(busca);
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
        <nav>
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
        {filtrados.length ? (
          <>
            <Colecao
              titulo="Em destaque"
              subtitulo="Arraste para os lados e encontre seus favoritos."
              produtosDaColecao={filtrados}
            />
            <aside className="promocao">
              <span className="promocao-estrela">✺</span>
              <div>
                <span className="sobretitulo">
                  MAIS PERSONALIDADE, POR MENOS
                </span>
                <h2>Quatro bottons. Muitas combinações.</h2>
                <p>
                  Escolha um kit com 4 unidades de 44 mm • 4,4 cm e economize R$
                  6,50.
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
              produtosDaColecao={filtrados}
            />
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
  <ProvedorCesta>
    <Aplicacao />
  </ProvedorCesta>,
);
