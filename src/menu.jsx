import React, { useEffect, useRef, useState } from "react";
import { AlternarTema } from "./tema";
import "./menu.css";

function Cadeado() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <rect x="5" y="10" width="14" height="11" rx="3" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      <circle cx="12" cy="15" r="1" />
    </svg>
  );
}

export function MenuLateral() {
  const painel = useRef(null);
  const gatilho = useRef(null);
  const rolagemAnterior = useRef("");
  const [aberto, definirAberto] = useState(false);
  useEffect(
    () => () => {
      if (painel.current?.open)
        document.body.style.overflow = rolagemAnterior.current;
    },
    [],
  );
  function abrir() {
    rolagemAnterior.current = document.body.style.overflow;
    painel.current.showModal();
    definirAberto(true);
    document.body.style.overflow = "hidden";
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      painel.current.animate(
        [{ transform: "translateX(-100%)" }, { transform: "translateX(0)" }],
        { duration: 280, easing: "ease-out" },
      );
  }
  function fechar() {
    painel.current.close();
  }
  return (
    <>
      <button
        ref={gatilho}
        className="abrir-menu"
        onClick={abrir}
        aria-label="Abrir menu"
        aria-haspopup="dialog"
        aria-expanded={aberto}
        aria-controls="menu-lateral"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <circle cx="5" cy="12" r="1.8" />
          <circle cx="12" cy="12" r="1.8" />
          <circle cx="19" cy="12" r="1.8" />
        </svg>
      </button>
      <dialog
        ref={painel}
        id="menu-lateral"
        className="painel-menu"
        aria-labelledby="titulo-menu"
        onClose={() => {
          definirAberto(false);
          document.body.style.overflow = rolagemAnterior.current;
          gatilho.current?.focus({ preventScroll: true });
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
        <div className="cabecalho-menu">
          <div>
            <span className="sobretitulo">SEU UNIVERSO LUMALAB</span>
            <h2 id="titulo-menu">
              Explore o Lab<span>✦</span>
            </h2>
          </div>
          <button
            className="fechar-menu"
            onClick={fechar}
            aria-label="Fechar menu"
            autoFocus
          >
            ×
          </button>
        </div>
        <div className="conteudo-menu">
          <section aria-labelledby="titulo-preferencias">
            <h3 id="titulo-preferencias">Do seu jeito</h3>
            <div className="preferencia-menu">
              <span>Tema da vitrine</span>
              <AlternarTema />
            </div>
          </section>
          <nav className="menu-categorias" aria-labelledby="titulo-categorias">
            <h3 id="titulo-categorias">Categorias</h3>
            <a href="#kits" onClick={fechar}>
              Bottons <span aria-hidden="true">↗</span>
            </a>
            <a href="#unitarios" onClick={fechar}>
              Bottons individuais <span aria-hidden="true">↗</span>
            </a>
            <a href="#parzinhos" onClick={fechar}>
              Parzinhos
            </a>
            <a href="#trios" onClick={fechar}>
              Trios
            </a>
            <a href="#personalizados" onClick={fechar}>
              Personalizados <span aria-hidden="true">↗</span>
            </a>
            <button disabled>
              <span>
                Camisetas <Cadeado />
              </span>
              <small>Em breve</small>
            </button>
            <button disabled>
              <span>
                Ecobags <Cadeado />
              </span>
              <small>Em breve</small>
            </button>
          </nav>
        </div>
        <div className="rodape-menu">
          <span>✦</span>
          <p>
            Pequenas peças.
            <br />
            Muita personalidade.
          </p>
        </div>
      </dialog>
    </>
  );
}
