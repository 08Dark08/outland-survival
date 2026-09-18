"use client";

import { useEffect, useState } from "react";
import { ServerStatusData } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlayNowButton } from "@/components/server/PlayNowButton";
import { DiscordButton } from "@/components/discord/DiscordButton";
import { HudCorner } from "@/components/effects/HudCorner";
import { siteConfig } from "@/config/site";
import {
  Users,
  Activity,
  ShieldCheck,
  RefreshCw,
  Terminal,
  Cpu,
  Wifi,
  Radio,
} from "lucide-react";

export default function StatusPage() {
  const [data, setData] = useState<ServerStatusData | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastCheck, setLastCheck] = useState<string>("Verificando...");

  const fetchStatus = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/server-status");
      if (res.ok) {
        const json = await res.json();
        setData(json);
        setLastCheck(new Date().toLocaleTimeString());
      }
    } catch {} finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();
    const timer = setInterval(fetchStatus, 30000);
    return () => clearInterval(timer);
  }, []);

  const isOnline = data?.online ?? false;
  const players = data?.players ?? 0;
  const maxPlayers = data?.maxPlayers ?? 128;
  const percentage = Math.min(Math.round((players / maxPlayers) * 100), 100);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 font-sans">
      <SectionHeading
        badge="TELEMETRIA EM TEMPO REAL"
        title="MONITOR DA REDE OUTLAND"
        description="Monitoramento operacional de conectividade, slots ocupados e nós de rede do servidor FiveM."
      />

      <div className="bg-background-panel border border-border p-6 md:p-8 relative space-y-8 shadow-2xl">
        <HudCorner position="top-left" />
        <HudCorner position="top-right" />
        <HudCorner position="bottom-left" />
        <HudCorner position="bottom-right" />

        {/* CABEÇALHO DO MONITOR */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/60 pb-6">
          <div>
            <div className="text-[10px] font-mono text-tactical-gray uppercase tracking-widest flex items-center gap-1.5">
              <Radio className="w-3.5 h-3.5 text-crimson animate-pulse" />
              <span>DOMÍNIO TÁTICO BRASIL</span>
            </div>
            <h2 className="text-2xl font-black uppercase text-white font-mono mt-1">
              OUTLAND SURVIVAL // PRODUÇÃO
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span
              className={`inline-flex items-center gap-2 font-mono text-xs uppercase px-3 py-1.5 border font-bold ${
                isOnline
                  ? "border-tactical-green/50 bg-tactical-green/10 text-tactical-green shadow-[0_0_15px_rgba(46,204,113,0.25)]"
                  : "border-crimson/50 bg-crimson/10 text-crimson-alert"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  isOnline ? "bg-tactical-green animate-pulse" : "bg-crimson-alert"
                }`}
              />
              {loading
                ? "SONDANDO SINAL..."
                : isOnline
                ? "SISTEMA ONLINE"
                : "SINAL OFFLINE"}
            </span>

            <button
              onClick={fetchStatus}
              disabled={loading}
              className="p-2 border border-border bg-background-secondary hover:bg-background text-tactical-gray hover:text-white transition-colors"
              title="Atualizar agora"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            </button>
          </div>
        </div>

        {/* MÉTRICAS PRINCIPAIS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 font-mono">
          
          {/* Card Jogadores */}
          <div className="bg-background-secondary p-5 border border-border">
            <div className="flex items-center justify-between text-xs text-tactical-gray mb-1">
              <span>SOBREVIVENTES</span>
              <Users className="w-4 h-4 text-zinc-400" />
            </div>
            <div className="text-3xl font-black text-white">
              {players} <span className="text-base text-tactical-gray font-normal">/ {maxPlayers}</span>
            </div>
            <div className="w-full bg-background-panel h-1.5 border border-border/80 mt-3 overflow-hidden">
              <div
                className="bg-crimson h-full transition-all duration-500"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>

          {/* Card Latência */}
          <div className="bg-background-secondary p-5 border border-border">
            <div className="flex items-center justify-between text-xs text-tactical-gray mb-1">
              <span>LATÊNCIA DA API</span>
              <Activity className="w-4 h-4 text-tactical-green" />
            </div>
            <div className="text-3xl font-black text-tactical-green">
              {data?.pingEstimateMs ? `${data.pingEstimateMs}ms` : "DISPONÍVEL"}
            </div>
            <div className="text-[10px] text-tactical-gray mt-3">
              Roteamento direto de baixa latência
            </div>
          </div>

          {/* Card Proteção */}
          <div className="bg-background-secondary p-5 border border-border">
            <div className="flex items-center justify-between text-xs text-tactical-gray mb-1">
              <span>SEGURANÇA</span>
              <ShieldCheck className="w-4 h-4 text-tactical-green" />
            </div>
            <div className="text-xl font-bold text-white mt-1">
              ANTI-DDOS ATIVO
            </div>
            <div className="text-[10px] text-tactical-gray mt-3 flex items-center gap-1">
              <Cpu className="w-3 h-3 text-tactical-gray" />
              <span>Otimização nativa 64-Tick</span>
            </div>
          </div>
        </div>

        {/* TERMINAL LOG */}
        <div className="bg-black/60 border border-border/80 p-4 font-mono text-xs space-y-1.5 text-zinc-400">
          <div className="text-crimson font-bold flex items-center gap-1.5 mb-2">
            <Terminal className="w-3.5 h-3.5" />
            <span>TERMINAL TELEMETRY LOG</span>
          </div>
          <div>&gt; Código Oficial Cfx.re: {siteConfig.cfxCode}</div>
          <div>&gt; Conexão Direta: {siteConfig.fivemEndpoint}</div>
          <div>&gt; Última sondagem do nó: {lastCheck}</div>
          <div>&gt; Resposta de integridade: {isOnline ? "Pacote recebido com sucesso (200 OK)" : "Aguardando sinal da VPS"}</div>
        </div>

        {/* BOTÕES DE AÇÃO */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <PlayNowButton size="large" />
          <DiscordButton variant="outline" label="SUPORTE NO DISCORD" />
        </div>
      </div>
    </div>
  );
}