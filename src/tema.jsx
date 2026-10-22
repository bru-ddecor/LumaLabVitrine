import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const CHAVE_TEMA = "lumalab-tema";
function preferenciaSalva() {
  try {
    const valor = localStorage.getItem(CHAVE_TEMA);
    return ["claro", "escuro"].includes(valor) ? valor : null;
  } catch {
    return null;
  }
}
function temaDoSistema() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "escuro"
    : "claro";
}

export function AlternarTema() {
  const [tema, definirTema] = useState(
    () => preferenciaSalva() || temaDoSistema(),
  );
  const escolhaManual = useRef(preferenciaSalva());
  const temaAplicado = useRef(document.documentElement.dataset.tema);
  const transicao = useRef(null);
  useLayoutEffect(() => {
    const aplicar = () => {
      document.documentElement.dataset.tema = tema;
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", tema === "escuro" ? "#0d1422" : "#7a2e3a");
    };
    const mudou = temaAplicado.current !== tema;
    temaAplicado.current = tema;
    transicao.current?.skipTransition();
    const movimentoReduzido = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!mudou || movimentoReduzido) {
      aplicar();
      return;
    }
    if (typeof document.startViewTransition === "function") {
      // Revelar o novo tema verticalmente também inclui gradientes e as artes.
      delete document.documentElement.dataset.transicaoTema;
      transicao.current = document.startViewTransition(aplicar);
      transicao.current.ready.catch(() => {});
      transicao.current.finished.catch(() => {});
    } else {
      document.documentElement.dataset.transicaoTema = "cores";
      aplicar();
    }
  }, [tema]);
  useEffect(
    () => () => {
      transicao.current?.skipTransition();
    },
    [],
  );
  useEffect(() => {
    const sistema = window.matchMedia("(prefers-color-scheme: dark)");
    const acompanhar = () => {
      if (!escolhaManual.current) definirTema(temaDoSistema());
    };
    sistema.addEventListener("change", acompanhar);
    return () => sistema.removeEventListener("change", acompanhar);
  }, []);
  function alternar() {
    const proximo = tema === "escuro" ? "claro" : "escuro";
    escolhaManual.current = proximo;
    definirTema(proximo);
    try {
      localStorage.setItem(CHAVE_TEMA, proximo);
    } catch {}
  }
  return (
    <button
      className="alternar-tema"
      onClick={alternar}
      aria-pressed={tema === "escuro"}
      aria-label={
        tema === "escuro" ? "Ativar modo claro" : "Ativar modo escuro"
      }
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        aria-hidden="true"
      >
        {tema === "escuro" ? (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
          </>
        ) : (
          <path d="M20 14.3A8.5 8.5 0 0 1 9.7 4 8.5 8.5 0 1 0 20 14.3Z" />
        )}
      </svg>
      <span>{tema === "escuro" ? "Modo claro" : "Modo escuro"}</span>
    </button>
  );
}
