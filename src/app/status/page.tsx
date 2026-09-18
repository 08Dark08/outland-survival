"use client";
import { useEffect, useState } from "react";
import { ServerStatusData } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlayNowButton } from "@/components/server/PlayNowButton";
import { RefreshCw } from "lucide-react";

export default function StatusPage() {
  const [data, setData] = useState<ServerStatusData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchStatus = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/server-status");
      if (res.ok) setData(await res.json());
    } catch {} finally { setLoading(false); }
  };

  useEffect(() => {
    fetchStatus();
    const timer = setInterval(fetchStatus, 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-8">
      <SectionHeading badge="TELEMETRIA" title="STATUS DO SERVIDOR" description="Monitoramento em tempo real da infraestrutura FiveM." />
      <div className="bg-background-panel border border-border p-8 space-y-6">
        <div className="flex justify-between items-center border-b border-border pb-4">
          <span className="text-white font-bold font-mono">OUTLAND BRASIL // PRODUÇÃO</span>
          <button onClick={fetchStatus} className="p-2 border border-border text-tactical-gray hover:text-white"><RefreshCw className={"w-4 h-4 " + (loading ? "animate-spin" : "")} /></button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono">
          <div className="bg-background-secondary p-4 border border-border"><div className="text-xs text-tactical-gray">JOGADORES</div><div className="text-2xl font-bold text-white mt-1">{data?.players || 0} / {data?.maxPlayers || 128}</div></div>
          <div className="bg-background-secondary p-4 border border-border"><div className="text-xs text-tactical-gray">LATÊNCIA API</div><div className="text-2xl font-bold text-tactical-green mt-1">{data?.pingEstimateMs ? data.pingEstimateMs + "ms" : "OK"}</div></div>
          <div className="bg-background-secondary p-4 border border-border"><div className="text-xs text-tactical-gray">SITUAÇÃO</div><div className="text-2xl font-bold text-white mt-1">{data?.online ? "ONLINE" : "OFFLINE"}</div></div>
        </div>
        <div className="pt-4"><PlayNowButton size="large" /></div>
      </div>
    </div>
  );
}