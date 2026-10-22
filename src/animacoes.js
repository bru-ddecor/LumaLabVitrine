import { useEffect, useLayoutEffect, useRef } from "react";
const preferencia = () => window.matchMedia("(prefers-reduced-motion: reduce)");
function animar(elemento, quadros, opcoes) {
  if (!elemento?.animate || preferencia().matches) return () => {};
  const preferenciaMovimento = preferencia();
  const animacao = elemento.animate(quadros, {
    duration: 420,
    easing: "cubic-bezier(.22,1,.36,1)",
    ...opcoes,
  });
  const cancelar = () => animacao.cancel();
  preferenciaMovimento.addEventListener("change", cancelar, {
    once: true,
  });
  const removerOuvinte = () =>
    preferenciaMovimento.removeEventListener("change", cancelar);
  animacao.addEventListener("finish", removerOuvinte, {
    once: true,
  });
  animacao.addEventListener("cancel", removerOuvinte, {
    once: true,
  });
  return () => {
    removerOuvinte();
    cancelar();
  };
}
function usarRevelacaoPagina(dependencia) {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const limpezas = [];
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (!entrada.isIntersecting) return;
          observador.unobserve(entrada.target);
          if (entrada.target.dataset.revelado) return;
          entrada.target.dataset.revelado = "true";
          limpezas.push(
            animar(
              entrada.target,
              [
                {
                  opacity: 0,
                  transform: "translateY(22px)",
                },
                {
                  opacity: 1,
                  transform: "translateY(0)",
                },
              ],
              {
                duration: 650,
              },
            ),
          );
        });
      },
      {
        threshold: 0.08,
      },
    );
    document
      .querySelectorAll(
        ".apresentacao-texto, .apresentacao-arte, .colecao, .promocao, .encerramento-marca",
      )
      .forEach((elemento) => observador.observe(elemento));
    return () => {
      observador.disconnect();
      limpezas.forEach((cancelar) => cancelar());
    };
  }, [dependencia]);
}
export { usarRevelacaoPagina };
function usarAnimacaoFoto(ativa) {
  const referencia = useRef(null);
  const anterior = useRef(ativa);
  useLayoutEffect(() => {
    if (anterior.current === ativa) return;
    anterior.current = ativa;
    return animar(
      referencia.current,
      [
        {
          opacity: 0.3,
          transform: "scale(.97)",
        },
        {
          opacity: 1,
          transform: "scale(1)",
        },
      ],
      {
        duration: 320,
      },
    );
  }, [ativa]);
  return referencia;
}
export { usarAnimacaoFoto };
function usarAnimacaoColecao(expandida, produtosDaColecao) {
  const referencia = useRef(null);
  const referenciaAnterior = useRef(null);
  useLayoutEffect(() => {
    const elemento = referencia.current;
    const altura = elemento.getBoundingClientRect().height;
    const anterior = referenciaAnterior.current;
    referenciaAnterior.current = {
      altura: altura,
      expandida: expandida,
    };
    if (!anterior) return;
    const limpezas = [];
    if (anterior.expandida !== expandida) {
      limpezas.push(
        animar(elemento, [
          {
            height: `${anterior.altura}px`,
            overflow: "hidden",
          },
          {
            height: `${altura}px`,
            overflow: "hidden",
          },
        ]),
      );
    }
    Array.from(elemento.children).forEach((cartao, indice) => {
      limpezas.push(
        animar(
          cartao,
          [
            {
              opacity: 0.2,
              transform: "translateY(12px)",
            },
            {
              opacity: 1,
              transform: "translateY(0)",
            },
          ],
          {
            delay: Math.min(indice * 35, 175),
          },
        ),
      );
    });
    return () => limpezas.forEach((cancelar) => cancelar());
  }, [expandida, produtosDaColecao]);
  return referencia;
}
export { usarAnimacaoColecao };
function usarArrasteHorizontal(referencia, expandida) {
  const gesto = useRef(null);
  const finalizar = () => {
    referencia.current?.classList.remove("rolando");
    gesto.current = null;
  };
  useEffect(() => {
    finalizar();
  }, [expandida]);
  return {
    onPointerDown(evento) {
      if (
        expandida ||
        evento.pointerType !== "mouse" ||
        evento.button !== 0 ||
        evento.target.closest("button, a, input, img")
      )
        return;
      gesto.current = {
        horizontal: evento.clientX,
        esquerda: referencia.current.scrollLeft,
      };
      evento.currentTarget.setPointerCapture(evento.pointerId);
    },
    onPointerMove(evento) {
      if (!gesto.current) return;
      if (Math.abs(evento.clientX - gesto.current.horizontal) < 6) return;
      referencia.current.classList.add("rolando");
      referencia.current.scrollLeft =
        gesto.current.esquerda - (evento.clientX - gesto.current.horizontal);
    },
    onPointerUp: finalizar,
    onPointerCancel: finalizar,
    onLostPointerCapture: finalizar,
    onKeyDown(evento) {
      if (
        expandida ||
        evento.target !== evento.currentTarget ||
        !["ArrowLeft", "ArrowRight"].includes(evento.key)
      )
        return;
      evento.preventDefault();
      referencia.current.scrollBy({
        left:
          (evento.key === "ArrowLeft" ? -1 : 1) *
          referencia.current.clientWidth *
          0.75,
        behavior: preferencia().matches ? "instant" : "smooth",
      });
    },
  };
}
export { usarArrasteHorizontal };
