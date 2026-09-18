import { siteConfig } from "@/config/site";
import { Wifi, ShieldCheck, Activity, Terminal } from "lucide-react";

export function TelemetryBar() {
  return (
    <div className="w-full bg-background-secondary border-b border-border/70 py-1.5 px-4 text-[11px] font-mono text-tactical-gray hidden md:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-zinc-300">
            <Terminal className="w-3.5 h-3.5 text-crimson" />
            <span>SYS.VER: 3.4.1-APOCALYPSE</span>
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-tactical-green" />
            <span>{siteConfig.serverSpecs.protection}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-tactical-silver" />
            <span>OTIMIZAÇÃO NATIVA {siteConfig.serverSpecs.targetFps}</span>
          </span>
        </div>
        <div className="flex items-center gap-4 text-zinc-400">
          <span className="flex items-center gap-1"><Wifi className="w-3 h-3 text-tactical-green" /> LATÊNCIA GLOBAL</span>
          <span className="text-border">|</span>
          <span className="text-crimson font-semibold">SAOPAULO_DC_01</span>
        </div>
      </div>
    </div>
  );
}