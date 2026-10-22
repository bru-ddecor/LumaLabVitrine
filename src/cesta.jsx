import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { produtos } from "./produtos";
import "./cesta.css";
const ContextoCesta = createContext(null);
const CHAVE_ARMAZENAMENTO = "lumalab-cart-v1";
const imagemCesta = (produto) =>
  produto.imagemCesta || produto.imagens[2] || produto.imagens[0];
const preco = (produto) => (produto.tipo === "kit" ? 2350 : 750);
const formatarValor = (centavos) =>
  (centavos / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
const titulo = (produto) =>
  `${produto.tipo === "kit" ? "Kit " : ""}${produto.nome}`;
function lerCesta() {
  try {
    const salvos = JSON.parse(localStorage.getItem(CHAVE_ARMAZENAMENTO));
    if (!salvos || typeof salvos !== "object") return {};
    return Object.fromEntries(
      produtos
        .filter(
          (produto) =>
            Number.isInteger(salvos[produto.id]) &&
            salvos[produto.id] > 0 &&
            salvos[produto.id] <= 99,
        )
        .map((produto) => [produto.id, salvos[produto.id]]),
    );
  } catch {
    return {};
  }
}
function IconeCesta() {
  return (
    <svg viewBox="0 0 120 100" fill="none" aria-hidden="true">
      <path d="M33 35 49 10M87 35 71 10" />
      <path d="M12 36h96l-12 54H24L12 36Z" />
      <path d="M8 35h104M43 48l4 29m30-29-4 29M60 48v29" />
    </svg>
  );
}
function AdicionarCesta({ produto: produto }) {
  const { adicionar: adicionar, itensCesta: itensCesta } =
    useContext(ContextoCesta);
  const limiteAtingido = (itensCesta[produto.id] || 0) >= 99;
  return (
    <button
      className="adicionar-cesta"
      disabled={limiteAtingido}
      aria-label={`Adicionar ${titulo(produto)} à cesta`}
      title={limiteAtingido ? "Limite de 99 por produto" : "Adicionar à cesta"}
      onClick={(evento) =>
        adicionar(
          produto,
          evento.currentTarget
            .closest("article")
            .querySelector(".foto-produto"),
        )
      }
    >
      +
    </button>
  );
}
export { AdicionarCesta };
function ImagemArrastavelProduto({ produto: produto, ...propriedades }) {
  const {
    iniciarArraste: iniciarArraste,
    finalizarArraste: finalizarArraste,
    soltarProduto: soltarProduto,
  } = useContext(ContextoCesta);
  const gesto = useRef(null);
  const limpar = () => {
    const atual = gesto.current;
    atual?.miniatura?.remove();
    atual?.faixa?.classList.remove("rolando");
    gesto.current = null;
    finalizarArraste();
  };
  useEffect(
    () => () => {
      gesto.current?.miniatura?.remove();
      gesto.current?.faixa?.classList.remove("rolando");
    },
    [],
  );
  function iniciar(evento) {
    // No toque, o navegador mantém a rolagem nativa; o + continua disponível.
    if (evento.pointerType !== "mouse" || evento.button !== 0) return;
    const faixa = evento.currentTarget.closest(".faixa-produtos");
    gesto.current = {
      horizontal: evento.clientX,
      vertical: evento.clientY,
      esquerda: faixa?.scrollLeft || 0,
      faixa: faixa,
    };
    evento.currentTarget.setPointerCapture(evento.pointerId);
  }
  function mover(evento) {
    const atual = gesto.current;
    if (!atual) return;
    const deslocamentoHorizontal = evento.clientX - atual.horizontal,
      deslocamentoVertical = evento.clientY - atual.vertical;
    if (
      !atual.modo &&
      Math.hypot(deslocamentoHorizontal, deslocamentoVertical) > 8
    ) {
      atual.modo =
        atual.faixa &&
        Math.abs(deslocamentoHorizontal) > Math.abs(deslocamentoVertical)
          ? "rolagem"
          : "cesta";
      if (atual.modo === "rolagem") atual.faixa.classList.add("rolando");
      else {
        if (!iniciarArraste(produto)) {
          limpar();
          return;
        }
        const miniatura = document.createElement("img");
        miniatura.src = imagemCesta(produto);
        miniatura.alt = "";
        miniatura.className = "produto-arrastado";
        document.body.append(miniatura);
        atual.miniatura = miniatura;
      }
    }
    if (atual.modo === "rolagem")
      atual.faixa.scrollLeft = atual.esquerda - deslocamentoHorizontal;
    if (atual.miniatura) {
      atual.miniatura.style.left = `${evento.clientX - 44}px`;
      atual.miniatura.style.top = `${evento.clientY - 55}px`;
    }
  }
  function encerrar(evento) {
    if (gesto.current?.modo === "cesta")
      soltarProduto(produto, evento.clientX, evento.clientY);
    limpar();
  }
  return (
    <img
      {...propriedades}
      draggable={false}
      onPointerDown={iniciar}
      onPointerMove={mover}
      onPointerUp={encerrar}
      onPointerCancel={limpar}
      onLostPointerCapture={limpar}
      title="Arraste para os lados para explorar; arraste para baixo até a cesta para adicionar"
    />
  );
}
export { ImagemArrastavelProduto };
function ProvedorCesta({ children: filhos }) {
  const [itensCesta, definirItensCesta] = useState(lerCesta);
  const [aviso, definirAviso] = useState("");
  const [arrastando, definirArrastando] = useState(false);
  const produtoArrastado = useRef(null);
  const cesta = useRef(null);
  const painel = useRef(null);
  const imagensEmVoo = useRef(new Set());
  const ultimoFoco = useRef(null);
  const rolagemAnterior = useRef("");
  const entradas = produtos
    .filter((produto) => itensCesta[produto.id])
    .map((produto) => ({
      produto: produto,
      quantidade: itensCesta[produto.id],
    }));
  const quantidadeTotal = entradas.reduce(
    (acumulado, entrada) => acumulado + entrada.quantidade,
    0,
  );
  const total = entradas.reduce(
    (acumulado, entrada) =>
      acumulado + preco(entrada.produto) * entrada.quantidade,
    0,
  );
  useEffect(() => {
    try {
      localStorage.setItem(CHAVE_ARMAZENAMENTO, JSON.stringify(itensCesta));
    } catch {
      /* A cesta continua utilizável se o armazenamento estiver indisponível. */
    }
  }, [itensCesta]);
  useEffect(
    () => () => {
      imagensEmVoo.current.forEach((elemento) => elemento.remove());
      document.body.style.overflow = rolagemAnterior.current;
    },
    [],
  );
  function animarAteCesta(produto, imagem) {
    if (
      !imagem ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !imagem.animate
    )
      return;
    const origem = imagem.getBoundingClientRect(),
      destino = cesta.current.getBoundingClientRect();
    const copia = document.createElement("img");
    copia.src = imagemCesta(produto);
    copia.alt = "";
    copia.className = "produto-em-voo";
    copia.style.cssText = `left:${origem.left}px;top:${origem.top}px;width:${origem.width}px;height:${origem.height}px`;
    document.body.append(copia);
    imagensEmVoo.current.add(copia);
    const preferenciaMovimento = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const animacao = copia.animate(
      [
        {
          transform: "translate(0,0) scale(1)",
          opacity: 0.85,
        },
        {
          transform: `translate(${destino.left + destino.width / 2 - origem.left - origem.width / 2}px,${destino.top + destino.height / 2 - origem.top - origem.height / 2}px) scale(.14) rotate(12deg)`,
          opacity: 0.25,
        },
      ],
      {
        duration: 650,
        easing: "cubic-bezier(.4,0,.2,1)",
      },
    );
    const limpar = () => {
      copia.remove();
      imagensEmVoo.current.delete(copia);
      preferenciaMovimento.removeEventListener("change", cancelar);
    };
    const cancelar = () => animacao.cancel();
    preferenciaMovimento.addEventListener("change", cancelar, {
      once: true,
    });
    animacao.addEventListener("finish", limpar, {
      once: true,
    });
    animacao.addEventListener("cancel", limpar, {
      once: true,
    });
  }
  function adicionar(produto, imagem) {
    definirItensCesta((atual) => ({
      ...atual,
      [produto.id]: Math.min(99, (atual[produto.id] || 0) + 1),
    }));
    definirAviso(`${titulo(produto)} adicionado à cesta.`);
    animarAteCesta(produto, imagem);
  }
  function iniciarArraste(produto) {
    if ((itensCesta[produto.id] || 0) >= 99) return false;
    produtoArrastado.current = produto.id;
    definirArrastando(true);
    return true;
  }
  function finalizarArraste() {
    produtoArrastado.current = null;
    definirArrastando(false);
  }
  function soltarProduto(produto, horizontal, vertical) {
    const retangulo = cesta.current.getBoundingClientRect();
    if (
      produto.id === produtoArrastado.current &&
      horizontal >= retangulo.left &&
      horizontal <= retangulo.right &&
      vertical >= retangulo.top &&
      vertical <= retangulo.bottom &&
      (itensCesta[produto.id] || 0) < 99
    )
      adicionar(produto);
    finalizarArraste();
  }
  function alterarQuantidade(id, diferenca) {
    definirItensCesta((atual) => {
      const proximos = {
          ...atual,
        },
        valor = Math.min(99, (proximos[id] || 0) + diferenca);
      if (valor <= 0) delete proximos[id];
      else proximos[id] = valor;
      return proximos;
    });
  }
  function abrir() {
    ultimoFoco.current = document.activeElement;
    rolagemAnterior.current = document.body.style.overflow;
    painel.current.showModal();
    document.body.style.overflow = "hidden";
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      painel.current.animate(
        [
          {
            transform: "translateX(100%)",
          },
          {
            transform: "translateX(0)",
          },
        ],
        {
          duration: 300,
          easing: "ease-out",
        },
      );
  }
  function fechar() {
    painel.current.close();
  }
  const texto = [
    "Olá! Gostaria de pedir estes produtos da LumaLab:",
    "",
    ...entradas.map(
      ({ produto: produto, quantidade: quantidade }) =>
        `${quantidade} × ${titulo(produto)} — ${produto.tipo === "kit" ? "kit com 4 bottons" : "1 botton"} de 44 mm — ${formatarValor(preco(produto) * quantidade)}`,
    ),
    "",
    `Total dos produtos: ${formatarValor(total)}`,
    "Podemos combinar a disponibilidade, o pagamento e a entrega?",
  ].join("\n");
  return (
    <ContextoCesta.Provider
      value={{
        adicionar: adicionar,
        itensCesta: itensCesta,
        iniciarArraste: iniciarArraste,
        finalizarArraste: finalizarArraste,
        soltarProduto: soltarProduto,
      }}
    >
      {filhos}
      <div className="apenas-leitor" role="status">
        {aviso}
      </div>
      <button
        ref={cesta}
        className={`cesta-visual ${arrastando ? "arrastando" : ""}`}
        onClick={abrir}
        aria-label={`Abrir cesta, ${quantidadeTotal} ${quantidadeTotal === 1 ? "produto" : "produtos"}`}
      >
        <span className="miniaturas-cesta" aria-hidden="true">
          {entradas
            .flatMap(({ produto: produto, quantidade: quantidade }) =>
              Array.from(
                {
                  length: Math.min(quantidade, 4),
                },
                (ignorado, indice) => ({
                  produto: produto,
                  chave: `${produto.id}-${indice}`,
                }),
              ),
            )
            .slice(-6)
            .map(({ produto: produto, chave }, indice) => (
              <img
                key={chave}
                src={imagemCesta(produto)}
                draggable={false}
                alt=""
                style={{
                  left: `${18 + (indice % 3) * 20}px`,
                  bottom: `${25 + Math.floor(indice / 3) * 15}px`,
                  transform: `rotate(${((indice % 3) - 1) * 17}deg)`,
                }}
              />
            ))}
        </span>
        <IconeCesta />
        <span className="contador-cesta">{quantidadeTotal}</span>
        <span className="rotulo-cesta">
          {arrastando ? "Solte aqui" : "Sua cesta"}
        </span>
      </button>
      <dialog
        ref={painel}
        className="painel-cesta"
        aria-labelledby="cart-title"
        onClose={() => {
          document.body.style.overflow = rolagemAnterior.current;
          ultimoFoco.current?.focus();
        }}
        onClick={(evento) => {
          const retangulo = evento.currentTarget.getBoundingClientRect();
          if (
            evento.target === evento.currentTarget &&
            (evento.clientX < retangulo.left ||
              evento.clientX > retangulo.right ||
              evento.clientY < retangulo.top ||
              evento.clientY > retangulo.bottom)
          )
            fechar();
        }}
      >
        <div className="cabecalho-cesta">
          <div>
            <span className="sobretitulo">SEUS PEQUENOS FAVORITOS</span>
            <h2 id="cart-title">
              Sua cesta <span>({quantidadeTotal})</span>
            </h2>
          </div>
          <button
            className="fechar-cesta"
            onClick={fechar}
            aria-label="Fechar cesta"
            autoFocus
          >
            ×
          </button>
        </div>
        <div className="itens-cesta">
          {entradas.length ? (
            entradas.map(({ produto: produto, quantidade: quantidade }) => (
              <article className="linha-cesta" key={produto.id}>
                <img
                  src={imagemCesta(produto)}
                  draggable={false}
                  alt={titulo(produto)}
                />
                <div>
                  <h3>{titulo(produto)}</h3>
                  <p>
                    {produto.tipo === "kit" ? "4 bottons" : "1 botton"} · 44 mm
                    · {formatarValor(preco(produto))}
                  </p>
                  <div className="controles-quantidade">
                    <button
                      aria-label={`Diminuir quantidade de ${titulo(produto)}`}
                      onClick={() => alterarQuantidade(produto.id, -1)}
                    >
                      −
                    </button>
                    <span aria-label={`Quantidade de ${titulo(produto)}`}>
                      {quantidade}
                    </span>
                    <button
                      disabled={quantidade >= 99}
                      aria-label={`Aumentar quantidade de ${titulo(produto)}`}
                      onClick={() => alterarQuantidade(produto.id, 1)}
                    >
                      +
                    </button>
                    <button
                      className="remover-produto"
                      onClick={() =>
                        definirItensCesta((atual) => {
                          const proximos = {
                            ...atual,
                          };
                          delete proximos[produto.id];
                          return proximos;
                        })
                      }
                      aria-label={`Remover ${titulo(produto)}`}
                    >
                      Remover
                    </button>
                  </div>
                  <strong>{formatarValor(preco(produto) * quantidade)}</strong>
                </div>
              </article>
            ))
          ) : (
            <div className="cesta-vazia">
              <IconeCesta />
              <h3>Sua cesta espera por você.</h3>
              <p>Toque no + dos seus kits favoritos para começar.</p>
              <button onClick={fechar}>Explorar os kits →</button>
            </div>
          )}
        </div>
        <div className="resumo-cesta">
          <div>
            <span>Total dos produtos</span>
            <strong>{formatarValor(total)}</strong>
          </div>
          <p>Disponibilidade, pagamento e entrega combinados pelo WhatsApp.</p>
          {entradas.length ? (
            <a
              className="pedido-whatsapp"
              href={`https://wa.me/5532999240859?text=${encodeURIComponent(texto)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Pedir pelo WhatsApp ↗
            </a>
          ) : (
            <button className="pedido-whatsapp" disabled>
              Adicione um produto para pedir
            </button>
          )}
          <small>
            A mensagem abre preenchida. Você confirma o envio no WhatsApp.
          </small>
        </div>
      </dialog>
    </ContextoCesta.Provider>
  );
}
export { ProvedorCesta };
