"use client";

import { useState, useRef, useEffect } from "react";
import { Radio, Volume2, VolumeX, Activity } from "lucide-react";

export function TacticalAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.2); // Volume suave a 20%
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Bloqueio de autoplay do navegador tratado
          setIsPlaying(false);
        });
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 select-none">
      {/* Elemento de áudio com som ambiente de rádio apocalíptico */}
      <audio
        ref={audioRef}
        loop
        preload="none"
      >
        {/* Arquivo local na pasta public/audio/ */}
        <source src="/audio/ambient-radio.mp3" type="audio/mp3" />
        
        {/* Áudio de contingência online com chiado e atmosfera dark */}
        <source src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=horror-ambience-7042.mp3" type="audio/mp3" />
      </audio>

      {/* Botão Tático Flutuante */}
      <button
        onClick={toggleAudio}
        className={`group flex items-center gap-3 px-3.5 py-2.5 border transition-all duration-300 shadow-2xl backdrop-blur-md ${
          isPlaying
            ? "bg-background-panel/95 border-crimson shadow-[0_0_20px_rgba(184,32,32,0.35)]"
            : "bg-background-panel/85 border-border hover:border-zinc-500 hover:bg-background-panel"
        }`}
      >
        {/* Ícone de rádio com indicador pulsante */}
        <div className="relative flex items-center justify-center">
          <Radio
            className={`w-4 h-4 transition-colors ${
              isPlaying ? "text-crimson animate-pulse" : "text-tactical-gray"
            }`}
          />
          {isPlaying && (
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-crimson animate-ping" />
          )}
        </div>

        {/* Textos táticos da transmissão */}
        <div className="text-left font-mono">
          <div className="text-[9px] uppercase tracking-widest text-tactical-gray flex items-center gap-1.5 leading-none">
            <span>FREQ: 104.7 MHz</span>
            {isPlaying && (
              <span className="text-tactical-green font-bold flex items-center">
                ● AO VIVO
              </span>
            )}
          </div>
          <div className="text-[11px] font-bold text-white uppercase tracking-wider mt-0.5">
            {isPlaying ? "RÁDIO MILITAR ATIVO" : "LIGAR TRANSMISSÃO"}
          </div>
        </div>

        {/* Barras animadas de Equalizador */}
        <div className="flex items-end gap-0.5 h-4 px-1">
          <span
            className={`w-0.5 bg-crimson transition-all ${
              isPlaying ? "h-3.5 animate-pulse" : "h-1 bg-zinc-600"
            }`}
          />
          <span
            className={`w-0.5 bg-crimson transition-all delay-75 ${
              isPlaying ? "h-2 animate-pulse" : "h-1 bg-zinc-600"
            }`}
          />
          <span
            className={`w-0.5 bg-crimson transition-all delay-150 ${
              isPlaying ? "h-4 animate-pulse" : "h-1 bg-zinc-600"
            }`}
          />
        </div>

        {/* Ícone de Som */}
        <div className="pl-1 border-l border-border/60 text-tactical-gray group-hover:text-white">
          {isPlaying ? (
            <Volume2 className="w-3.5 h-3.5 text-crimson-alert" />
          ) : (
            <VolumeX className="w-3.5 h-3.5" />
          )}
        </div>
      </button>
    </div>
  );
}