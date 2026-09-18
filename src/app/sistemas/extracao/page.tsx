import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlayNowButton } from "@/components/server/PlayNowButton";
import { HudCorner } from "@/components/effects/HudCorner";
import { Timer, AlertTriangle, ShieldCheck, Skull, Trophy, Radio } from "lucide-react";

export const metadata = {
  title: "Sistema de Incursão & Extração | Outland Survival",
  description: "Janelas diárias de extração às 19:09 e 23:00 em dimensão isolada com full-loot.",
};

export default function ExtracaoPage() {
  const schedules = [
    { time: "19:09", label: "Incursão Diária 1", days: "Segunda a Domingo" },
    { time: "23:00", label: "Incursão Noturna 2", days: "Segunda a Domingo" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 font-sans">
      <SectionHeading
        badge="EVENTO DE INCURSÃO PROGRAMADA"
        title="INCURSÃO TÁTICA & EXTRAÇÃO HARDCORE"
        description="O maior teste de coragem do Outland. O loot que você encontrar em campo só se torna permanente se você extrair vivo antes do encerramento da janela."
      />

      {/* HORÁRIOS DE RÁDIO */}
      <div className="bg-background-panel border border-crimson p-6 md:p-8 relative shadow-tactical">
        <HudCorner position="top-left" />
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-crimson uppercase tracking-wider mb-2">
          <Radio className="w-4 h-4 animate-pulse" />
          <span>CRONOGRAMA OFICIAL DE ABERTURA</span>
        </div>
        <h3 className="text-2xl font-bold font-mono uppercase text-white mb-4">
          JANELAS DIÁRIAS DE EXTRAÇÃO
        </h3>
        <p className="text-xs text-tactical-gray mb-6 leading-relaxed">
          Os participantes inscritos recebem um aviso geral no rádio 120 segundos antes do início e são transportados para a dimensão isolada do evento com uniforme militar tático:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono">
          {schedules.map((s, idx) => (
            <div key={idx} className="bg-background-secondary border border-border p-4 flex items-center justify-between">
              <div>
                <div className="text-[10px] text-tactical-gray uppercase">{s.label}</div>
                <div className="text-2xl font-black text-white">{s.time}</div>
              </div>
              <span className="text-[11px] text-tactical-green border border-tactical-green/40 px-2.5 py-1">
                {s.days}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* REGRAS CRÍTICAS DA EXTRAÇÃO */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
        <div className="bg-background-panel border border-border p-6 relative">
          <HudCorner position="top-left" />
          <Timer className="w-7 h-7 text-crimson mb-3" />
          <h4 className="text-white font-bold uppercase text-sm mb-2">60 MINUTOS LIMITE</h4>
          <p className="text-tactical-gray font-sans leading-relaxed">
            A incursão dura exatamente 1 hora. Faltando 10 minutos, o rádio soa o alerta de emergência.
          </p>
        </div>

        <div className="bg-background-panel border border-border p-6 relative">
          <HudCorner position="top-left" />
          <Skull className="w-7 h-7 text-crimson-alert mb-3" />
          <h4 className="text-white font-bold uppercase text-sm mb-2">MORTE NO TIMEOUT</h4>
          <p className="text-tactical-gray font-sans leading-relaxed">
            Se não alcançar a zona de extração antes do tempo zerar ou se desconectar, a morte é sumária com perda de mochila.
          </p>
        </div>

        <div className="bg-background-panel border border-border p-6 relative">
          <HudCorner position="top-left" />
          <Trophy className="w-7 h-7 text-tactical-amber mb-3" />
          <h4 className="text-white font-bold uppercase text-sm mb-2">RANKING TOP 10</h4>
          <p className="text-tactical-gray font-sans leading-relaxed">
            Os 10 sobreviventes com maior número de extrações bem-sucedidas são imortalizados no quadro de honra.
          </p>
        </div>
      </div>

      <div className="flex justify-center pt-4">
        <PlayNowButton size="large" />
      </div>
    </div>
  );
}