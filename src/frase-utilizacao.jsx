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
    if (!visivel || !paginaVisivel || movimentoReduzido) return;
    let animacaoSaida;
    const intervalo = window.setInterval(() => {
      const avancar = () =>
        definirIndice((atual) => (atual + 1) % sugestoes.length);
      if (!termo.current?.animate) {
        avancar();
        return;
      }
      animacaoSaida = termo.current.animate(
        [
          { opacity: 1, transform: "translateY(0)" },
          { opacity: 0, transform: "translateY(-3px)" },
        ],
        { duration: 300, easing: "ease-in", fill: "forwards" },
      );
      animacaoSaida.finished
        .then(() => {
          animacaoSaida.cancel();
          avancar();
        })
        .catch(() => {});
    }, 4000);
    return () => {
      window.clearInterval(intervalo);
      animacaoSaida?.cancel();
    };
  }, [visivel, paginaVisivel, movimentoReduzido]);
  useEffect(() => {
    if (movimentoReduzido || !termo.current?.animate) return;
    const animacao = termo.current.animate(
      [
        { opacity: 0, transform: "translateY(3px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      { duration: 650, easing: "cubic-bezier(.22,1,.36,1)" },
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
    </span>
  );
}
