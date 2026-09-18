"use client";
import { useEffect, useState } from "react";
import { Radio } from "lucide-react";

const broadcasts = [
  "TRANSMISSÃO TÁTICA: ZONA INDUSTRIAL COM ALTA CONCENTRAÇÃO DE INFECTADOS",
  "PONTO DE EXTRAÇÃO DELTA ABERTO POR TEMPO LIMITADO",
  "RADIAÇÃO AMBIENTAL ELEVADA NO NORTE DE LOS SANTOS",
  "ALERTA: ATIVIDADE HOSTIL DETECTADA NAS ÁREAS SEM REGULAÇÃO MILITAR",
];

export function TransmissionTicker() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % broadcasts.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-background-secondary border-y border-border py-2 px-4 flex items-center text-xs text-tactical-gray overflow-hidden">
      <div className="flex items-center gap-2 text-crimson font-mono font-bold tracking-widest shrink-0 mr-4">
        <Radio className="w-3.5 h-3.5 animate-pulse" />
        <span>REDE OUTLAND //</span>
      </div>
      <p className="truncate font-mono tracking-wide text-zinc-300">
        {broadcasts[index]}
      </p>
    </div>
  );
}