"use client";
import { useEffect, useState } from "react";
import { ServerStatusData } from "@/types";
import { PlayNowButton } from "./PlayNowButton";
import { Activity, Users, ShieldAlert, Cpu } from "lucide-react";
import { HudCorner } from "../effects/HudCorner";

export function ServerStatusCard() {
  const [data, setData] = useState<ServerStatusData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchStatus = async () => {
    try {
      const res = await fetch("/api/server-status");
      if (res.ok) {
        const json = await res.json();
        setData(json);
      }
    } catch {} finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();
    const interval = setInterval(fetchStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  const isOnline = data?.online ?? false;
  const players = data?.players ?? 0;
  const maxPlayers = data?.maxPlayers ?? 128;
  const pct = Math.min(Math.round((players / maxPlayers) * 100), 100);

  return (
    <div className="relative bg-background-panel border border-border p-6 shadow-2xl">
      <HudCorner position="top-left" />
      <HudCorner position="top-right" />
      <HudCorner position="bottom-left" />
      <HudCorner position="bottom-right" />
      <div className="flex items-center justify-between border-b border-border pb-4 mb-5">
        <div className="flex items-center gap-2">
          <span className={"w-2.5 h-2.5 rounded-full " + (loading ? "bg-tactical-amber animate-ping" : isOnline ? "bg-tactical-green animate-pulse" : "bg-crimson-alert")} />
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-200">
            {loading ? "VERIFICANDO SINAL..." : isOnline ? "ONLINE // TRANSMITINDO" : "SINAL PERDIDO"}
          </span>
        </div>
        <span className="text-[11px] font-mono text-tactical-gray flex items-center gap-1">
          <Cpu className="w-3.5 h-3.5 text-tactical-gray" /> 64 TICK
        </span>
      </div>
      <div className="space-y-4 mb-6">
        <div>
          <div className="text-[11px] font-mono text-tactical-gray uppercase tracking-wider mb-1">DOMÍNIO TÁTICO</div>
          <div className="text-base font-bold text-white tracking-wide">OUTLAND SURVIVAL [BRASIL]</div>
        </div>
        <div>
          <div className="flex justify-between items-center text-xs font-mono mb-1.5">
            <span className="text-tactical-gray flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> SOBREVIVENTES</span>
            <span className="text-white font-bold">{players} <span className="text-tactical-gray">/ {maxPlayers}</span></span>
          </div>
          <div className="w-full bg-background-secondary h-1.5 border border-border/80 overflow-hidden">
            <div className="bg-crimson h-full" style={{ width: pct + "%" }} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono border-t border-border/60">
          <div className="bg-background-secondary/60 p-2.5 border border-border/40">
            <div className="text-tactical-gray text-[10px]">RESPOSTA API</div>
            <div className="text-white font-bold flex items-center gap-1">
              <Activity className="w-3 h-3 text-tactical-green" /> {data?.pingEstimateMs ? data.pingEstimateMs + "ms" : "OK"}
            </div>
          </div>
          <div className="bg-background-secondary/60 p-2.5 border border-border/40">
            <div className="text-tactical-gray text-[10px]">AMEAÇA DO MUNDO</div>
            <div className="text-crimson-alert font-bold flex items-center gap-1">
              <ShieldAlert className="w-3 h-3 text-crimson-alert" /> GRAU CRÍTICO
            </div>
          </div>
        </div>
      </div>
      <PlayNowButton size="default" className="w-full py-3" />
    </div>
  );
}