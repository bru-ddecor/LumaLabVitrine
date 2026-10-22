import React, { useEffect, useRef, useState } from "react";
import "./orbita.css";

export function MovimentoOrbital({ children: artes }) {
  const sistema = useRef(null);
  const [pausado, definirPausado] = useState(false);
  const [movimentoReduzido, definirMovimentoReduzido] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [visivel, definirVisivel] = useState(true);
  const [paginaVisivel, definirPaginaVisivel] = useState(
    () => document.visibilityState !== "hidden",
  );
  useEffect(() => {
    const preferencia = window.matchMedia("(prefers-reduced-motion: reduce)");
    const acompanhar = () => definirMovimentoReduzido(preferencia.matches);
    const acompanharPagina = () =>
      definirPaginaVisivel(document.visibilityState !== "hidden");
    preferencia.addEventListener("change", acompanhar);
    document.addEventListener("visibilitychange", acompanharPagina);
    const observador =
      "IntersectionObserver" in window
        ? new IntersectionObserver((entradas) =>
            definirVisivel(entradas[0].isIntersecting),
          )
        : null;
    if (sistema.current) observador?.observe(sistema.current);
    return () => {
      preferencia.removeEventListener("change", acompanhar);
      document.removeEventListener("visibilitychange", acompanharPagina);
      observador?.disconnect();
    };
  }, []);
  const parado = pausado || movimentoReduzido || !visivel || !paginaVisivel;
  return (
    <>
      <div ref={sistema} className="sistema-orbital" data-pausado={parado}>
        {artes}
      </div>
      <button
        className="controle-orbita"
        disabled={movimentoReduzido}
        onClick={() => definirPausado((atual) => !atual)}
        aria-label={
          movimentoReduzido
            ? "Movimento reduzido pelo dispositivo"
            : pausado
              ? "Retomar decoração"
              : "Pausar decoração"
        }
        title={
          movimentoReduzido
            ? "Movimento reduzido pelo dispositivo"
            : pausado
              ? "Retomar decoração"
              : "Pausar decoração"
        }
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          {pausado || movimentoReduzido ? (
            <path d="m9 5 11 7-11 7Z" />
          ) : (
            <>
              <rect x="7" y="5" width="3" height="14" rx="1" />
              <rect x="14" y="5" width="3" height="14" rx="1" />
            </>
          )}
        </svg>
      </button>
    </>
  );
}
