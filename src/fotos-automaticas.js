import { useEffect, useRef } from "react";

const ouvintes = new Set();
let intervalo = null;
function acompanhar(ouvinte) {
  ouvintes.add(ouvinte);
  if (!intervalo)
    intervalo = setInterval(() => {
      if (!document.hidden) ouvintes.forEach((executar) => executar());
    }, 4500);
  return () => {
    ouvintes.delete(ouvinte);
    if (!ouvintes.size) {
      clearInterval(intervalo);
      intervalo = null;
    }
  };
}

export function usarFotosAutomaticas(
  referencia,
  quantidade,
  definirAtiva,
  dialogo,
) {
  const retomarEm = useRef(0);
  function aguardarInteracao() {
    retomarEm.current = Date.now() + 9000;
  }
  useEffect(() => {
    const elemento = referencia.current;
    if (!elemento || quantidade < 2) return;
    let visivel = false;
    const movimento = matchMedia("(prefers-reduced-motion: reduce)");
    const observador = new IntersectionObserver(
      ([entrada]) => {
        visivel = entrada.isIntersecting && entrada.intersectionRatio >= 0.35;
      },
      { rootMargin: "-15% 0px -15% 0px", threshold: [0, 0.35] },
    );
    observador.observe(elemento);
    const parar = acompanhar(() => {
      if (
        !visivel ||
        movimento.matches ||
        dialogo.current?.open ||
        Date.now() < retomarEm.current ||
        elemento.closest("article")?.contains(document.activeElement)
      )
        return;
      definirAtiva((anterior) => (anterior + 1) % quantidade);
    });
    return () => {
      observador.disconnect();
      parar();
    };
  }, [referencia, quantidade, definirAtiva, dialogo]);
  return {
    aguardarInteracao,
  };
}
