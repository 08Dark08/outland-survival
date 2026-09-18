"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import { Play, Copy, Check, Terminal, ExternalLink, X } from "lucide-react";

export function PlayNowButton({ className = "", size = "default" }: { className?: string; size?: "default" | "large" }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleLaunch = () => {
    window.location.href = siteConfig.fivemConnectUrl;
    setTimeout(() => setModalOpen(true), 1200);
  };

  const copyDirectCommand = () => {
    navigator.clipboard.writeText(`connect ${siteConfig.cfxCode}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      <button
        onClick={handleLaunch}
        className={`group relative overflow-hidden bg-crimson hover:bg-crimson-alert text-white font-mono uppercase tracking-widest font-bold transition-all shadow-tactical inline-flex items-center justify-center gap-3 ${
          size === "large" ? "px-8 py-4 text-sm" : "px-5 py-2.5 text-xs"
        } ${className}`}
      >
        <Play className="w-4 h-4 fill-white" />
        <span>JOGAR AGORA</span>
      </button>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-background-panel border border-border p-6 shadow-2xl text-left">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-tactical-gray hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 text-crimson font-mono text-xs font-bold uppercase mb-2">
              <Terminal className="w-4 h-4" />
              <span>ROTEAMENTO FIVEM // PROTOCOLO DISPARADO</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 uppercase">Conectando ao Outland Survival</h3>
            <p className="text-sm text-tactical-gray mb-6">
              Caso seu FiveM não abra sozinho, pressione <strong className="text-white">F8</strong> dentro dele e cole:
            </p>
            <div className="bg-background-secondary border border-border p-3 flex items-center justify-between gap-3 mb-6">
              <code className="text-xs font-mono text-crimson-alert truncate">
                connect {siteConfig.cfxCode}
              </code>
              <button
                onClick={copyDirectCommand}
                className="shrink-0 flex items-center gap-1 text-xs font-mono bg-background-panel border border-border px-3 py-1.5 text-white hover:border-zinc-500"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-tactical-green" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "COPIADO" : "COPIAR"}</span>
              </button>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={siteConfig.cfxJoinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center text-xs font-mono border border-border py-2.5 text-tactical-silver hover:text-white flex items-center justify-center gap-1.5"
              >
                <span>LINK DIRETO CFX.RE</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <button
                onClick={() => setModalOpen(false)}
                className="w-full text-center text-xs font-mono bg-border/60 hover:bg-border py-2.5 text-white"
              >
                FECHAR
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}