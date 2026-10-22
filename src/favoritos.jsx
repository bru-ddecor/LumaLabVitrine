import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import "./favoritos.css";

const ContextoFavoritos = createContext(null);
const endereco = import.meta.env.VITE_SUPABASE_URL;
const chavePublica = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
const configurado = Boolean(endereco && chavePublica);

async function chamarFuncao(nome, parametros, sinal) {
  const resposta = await fetch(
    `${endereco.replace(/\/$/, "")}/rest/v1/rpc/${nome}`,
    {
      method: "POST",
      headers: { apikey: chavePublica, "Content-Type": "application/json" },
      body: JSON.stringify(parametros),
      signal: sinal,
    },
  );
  if (!resposta.ok)
    throw new Error("Não foi possível atualizar as curtidas. Tente novamente.");
  return resposta.json();
}

export function ProvedorFavoritos({ children }) {
  const [navegador, definirNavegador] = useState(null);
  const [registros, definirRegistros] = useState({});
  const [carregado, definirCarregado] = useState(false);
  const [erro, definirErro] = useState("");
  const [ocupados, definirOcupados] = useState({});
  const pendentes = useRef(new Set());
  useEffect(() => {
    if (!configurado) return;
    try {
      const chave = "lumalab-navegador-favoritos-v1";
      const salvo = localStorage.getItem(chave);
      const identificador =
        salvo && /^[0-9a-f-]{36}$/i.test(salvo) ? salvo : crypto.randomUUID();
      localStorage.setItem(chave, identificador);
      definirNavegador(identificador);
    } catch {
      definirErro("Permita o armazenamento deste navegador para curtir.");
    }
  }, []);
  useEffect(() => {
    if (!navegador) return;
    const controle = new AbortController();
    let ativo = true;
    async function atualizar() {
      if (document.hidden || pendentes.current.size) return;
      try {
        const dados = await chamarFuncao(
          "consultar_favoritos",
          { navegador },
          controle.signal,
        );
        if (!ativo || pendentes.current.size) return;
        definirRegistros(
          Object.fromEntries(
            dados.map((registro) => [registro.produto, registro]),
          ),
        );
        definirCarregado(true);
        definirErro("");
      } catch (falha) {
        if (ativo && falha.name !== "AbortError")
          definirErro(
            "Curtidas indisponíveis no momento. Tente novamente em instantes.",
          );
      }
    }
    atualizar();
    const intervalo = setInterval(atualizar, 30000);
    window.addEventListener("focus", atualizar);
    return () => {
      ativo = false;
      controle.abort();
      clearInterval(intervalo);
      window.removeEventListener("focus", atualizar);
    };
  }, [navegador]);
  async function alternar(produto) {
    if (!carregado || !navegador || pendentes.current.has(produto)) return;
    pendentes.current.add(produto);
    definirOcupados((anteriores) => ({ ...anteriores, [produto]: true }));
    try {
      const [registro] = await chamarFuncao("definir_favorito", {
        navegador,
        produto_escolhido: produto,
        curtir: !registros[produto]?.curtido,
      });
      definirRegistros((anteriores) => ({
        ...anteriores,
        [produto]: registro,
      }));
      definirErro("");
    } catch (falha) {
      definirErro(falha.message);
    } finally {
      pendentes.current.delete(produto);
      definirOcupados((anteriores) => ({ ...anteriores, [produto]: false }));
    }
  }
  return (
    <ContextoFavoritos.Provider
      value={{ registros, carregado, ocupados, erro, alternar }}
    >
      {children}
    </ContextoFavoritos.Provider>
  );
}

export function FavoritarProduto({ produto }) {
  const contexto = useContext(ContextoFavoritos);
  if (!configurado) return null;
  const registro = contexto.registros[produto.id];
  const curtido = Boolean(registro?.curtido);
  return (
    <div className="favorito-produto">
      <button
        type="button"
        aria-label={`${curtido ? "Descurtir" : "Curtir"} ${produto.nome}`}
        aria-pressed={curtido}
        disabled={!contexto.carregado || contexto.ocupados[produto.id]}
        onClick={() => contexto.alternar(produto.id)}
        title={contexto.erro || "Curtir este produto"}
      >
        <span aria-hidden="true">{curtido ? "♥" : "♡"}</span>
        <span>{contexto.carregado ? (registro?.total ?? 0) : "…"}</span>
      </button>
      {contexto.erro && <small role="status">{contexto.erro}</small>}
    </div>
  );
}
