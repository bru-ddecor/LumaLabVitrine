import React, { useEffect, useRef, useState } from "react";
import "./frase-utilizacao.css";

const sugestoes = [
  { preposicao: "na", nome: "bolsa" },
  { preposicao: "no", nome: "crachá" },
  { preposicao: "na", nome: "mochila" },
  { preposicao: "na", nome: "ecobag" },
  { preposicao: "na", nome: "jaqueta" },
  { preposicao: "na", nome: "roupa" },
  { preposicao: "no", nome: "estojo" },
];

export function FraseUtilizacao() {
  const [indice, definirIndice] = useState(0);
  const [pausado, definirPausado] = useState(false);
  const [visivel, definirVisivel] = useState(false);
  const [paginaVisivel, definirPaginaVisivel] = useState(
    () => document.visibilityState !== "hidden",
  );
  const [movimentoReduzido, definirMovimentoReduzido] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const frase = useRef(null);
  const termo = useRef(null);
  useEffect(() => {
    const preferencia = window.matchMedia("(prefers-reduced-motion: reduce)");
    const acompanharPreferencia = () =>
      definirMovimentoReduzido(preferencia.matches);
    const acompanharPagina = () =>
      definirPaginaVisivel(document.visibilityState !== "hidden");
    preferencia.addEventListener("change", acompanharPreferencia);
    document.addEventListener("visibilitychange", acompanharPagina);
    const observador =
      "IntersectionObserver" in window
        ? new IntersectionObserver((entradas) =>
            definirVisivel(entradas[0].isIntersecting),
          )
        : null;
    if (observador && frase.current) observador.observe(frase.current);
    else definirVisivel(true);
    return () => {
      observador?.disconnect();
      preferencia.removeEventListener("change", acompanharPreferencia);
      document.removeEventListener("visibilitychange", acompanharPagina);
    };
  }, []);
  useEffect(() => {
    if (pausado || !visivel || !paginaVisivel || movimentoReduzido) return;
    const intervalo = window.setInterval(
      () => definirIndice((atual) => (atual + 1) % sugestoes.length),
      2800,
    );
    return () => window.clearInterval(intervalo);
  }, [pausado, visivel, paginaVisivel, movimentoReduzido]);
  useEffect(() => {
    if (movimentoReduzido || !termo.current?.animate) return;
    const animacao = termo.current.animate(
      [
        { opacity: 0, transform: "translateY(5px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      { duration: 350, easing: "ease-out" },
    );
    return () => animacao.cancel();
  }, [indice, movimentoReduzido]);
  const sugestao = sugestoes[indice];
  return (
    <span ref={frase} className="frase-utilizacao">
      <span className="apenas-leitor">
        Utilize seus bottons na bolsa, no crachá, na mochila, na ecobag, na
        jaqueta, na roupa ou no estojo.
      </span>
      <span aria-hidden="true">
        Utilize{" "}
        <span className="sugestao-utilizacao" ref={termo}>
          <span>{sugestao.preposicao}</span> <strong>{sugestao.nome}</strong>
        </span>
      </span>
      <button
        className="controle-sugestoes"
        disabled={movimentoReduzido}
        onClick={() => definirPausado((atual) => !atual)}
        aria-label={
          movimentoReduzido
            ? "Sugestões paradas por movimento reduzido"
            : pausado
              ? "Retomar sugestões de uso"
              : "Pausar sugestões de uso"
        }
        title={pausado ? "Retomar sugestões" : "Pausar sugestões"}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          {pausado || movimentoReduzido ? (
            <path d="m9 5 10 7-10 7Z" />
          ) : (
            <>
              <rect x="7" y="5" width="3" height="14" rx="1" />
              <rect x="14" y="5" width="3" height="14" rx="1" />
            </>
          )}
        </svg>
      </button>
    </span>
  );
}
