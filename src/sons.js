import { useEffect, useRef, useState } from "react";

const CHAVE_SOM = "lumalab-som-cesta";

export function usarSomCesta() {
  const [somAtivo, definirSomAtivo] = useState(() => {
    try {
      return localStorage.getItem(CHAVE_SOM) !== "desativado";
    } catch {
      return true;
    }
  });
  const permitido = useRef(somAtivo);
  permitido.current = somAtivo;
  const contexto = useRef(null);
  const notasAtivas = useRef(new Set());

  useEffect(() => {
    try {
      localStorage.setItem(CHAVE_SOM, somAtivo ? "ativado" : "desativado");
    } catch {}
    if (!somAtivo) {
      notasAtivas.current.forEach((nota) => {
        try {
          nota.stop();
        } catch {}
      });
      notasAtivas.current.clear();
    }
  }, [somAtivo]);
  useEffect(
    () => () => {
      if (contexto.current && contexto.current.state !== "closed")
        contexto.current.close().catch(() => {});
    },
    [],
  );

  async function reproduzirBrilho() {
    if (!somAtivo) return;
    try {
      const ContextoAudio = window.AudioContext || window.webkitAudioContext;
      if (!ContextoAudio) return;
      contexto.current ??= new ContextoAudio();
      const audio = contexto.current;
      if (audio.state === "suspended") await audio.resume();
      if (audio.state !== "running" || !permitido.current) return;
      // Três notas agudas e leves, com decaimento rápido, lembram um cintilar.
      [1046.5, 1567.98, 2093].forEach((frequencia, indice) => {
        const nota = audio.createOscillator();
        const volume = audio.createGain();
        const inicio = audio.currentTime + indice * 0.055;
        nota.type = "sine";
        nota.frequency.value = frequencia;
        volume.gain.setValueAtTime(0, inicio);
        volume.gain.linearRampToValueAtTime(0.022, inicio + 0.008);
        volume.gain.exponentialRampToValueAtTime(0.0001, inicio + 0.22);
        nota.connect(volume);
        volume.connect(audio.destination);
        notasAtivas.current.add(nota);
        nota.onended = () => {
          nota.disconnect();
          volume.disconnect();
          notasAtivas.current.delete(nota);
        };
        nota.start(inicio);
        nota.stop(inicio + 0.24);
      });
    } catch {
      // O bloqueio de áudio pelo navegador não impede adicionar produtos.
    }
  }
  return {
    somAtivo,
    alternarSom: () => definirSomAtivo((atual) => !atual),
    reproduzirBrilho,
  };
}
