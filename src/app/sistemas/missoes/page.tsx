import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlayNowButton } from "@/components/server/PlayNowButton";
import { HudCorner } from "@/components/effects/HudCorner";
import { Crosshair, HeartPulse } from "lucide-react";

export const metadata = {
  title: "Missões & Operações | Outland Survival",
  description: "Operação Resgate Pillbox e Missão 09 de Amostras Biológicas.",
};

export default function MissoesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 font-sans">
      <SectionHeading
        badge="CONTRATOS DE RISCO"
        title="OPERAÇÕES & MISSÕES DE CAMPO"
        description="Conclua operações cooperativas para resgatar sobreviventes feridos e desbloquear projetos médicos essenciais."
      />

      {/* OPERAÇÃO 1: RESGATE HOSPITAL PILLBOX */}
      <div className="bg-background-panel border border-border p-6 md:p-8 relative space-y-6">
        <HudCorner position="top-left" />
        <div className="flex items-center justify-between border-b border-border/60 pb-4">
          <div className="flex items-center gap-2 text-crimson font-mono text-xs font-bold uppercase">
            <HeartPulse className="w-4 h-4" />
            <span>OPERAÇÃO 01 // RESGATE DE SOBREVIVENTE</span>
          </div>
          <span className="font-mono text-xs text-tactical-green border border-tactical-green/40 px-2 py-0.5">
            +25% BÔNUS COM VIDA CHEIA
          </span>
        </div>

        <div>
          <h3 className="text-2xl font-black font-mono uppercase text-white">
            RESGATE NO HOSPITAL PILLBOX HILL
          </h3>
          <p className="text-xs sm:text-sm text-tactical-gray mt-2 leading-relaxed">
            Um operador ferido está encurralado na clínica médica com <strong className="text-white">tempo de sangramento de 180 segundos</strong>. Rompa o cerco externo de infectados, encontre 3 caixas de remédios e escolte a vítima até a extração sob ondas de inimigos por 60 segundos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
          <div className="bg-background-secondary p-4 border border-border">
            <div className="text-tactical-gray text-[10px]">TEMPO DE EXTRAÇÃO</div>
            <div className="text-base font-bold text-white mt-1">60s de Defesa</div>
            <div className="text-[10px] text-zinc-500">Ondas a cada 5 segundos</div>
          </div>
          <div className="bg-background-secondary p-4 border border-border">
            <div className="text-tactical-gray text-[10px]">EXPERIÊNCIA</div>
            <div className="text-base font-bold text-tactical-amber mt-1">+120 XP</div>
            <div className="text-[10px] text-zinc-500">Evolução de Operador</div>
          </div>
          <div className="bg-background-secondary p-4 border border-border">
            <div className="text-tactical-gray text-[10px]">RECOMPENSAS</div>
            <div className="text-base font-bold text-tactical-green mt-1">400 a 800 BioChips</div>
            <div className="text-[10px] text-zinc-500">100% Adrenalina & Bandagens</div>
          </div>
        </div>
      </div>

      {/* OPERAÇÃO 2: AMOSTRAS BIOLÓGICAS */}
      <div className="bg-background-panel border border-border p-6 md:p-8 relative space-y-6">
        <HudCorner position="top-left" />
        <div className="flex items-center justify-between border-b border-border/60 pb-4">
          <div className="flex items-center gap-2 text-crimson font-mono text-xs font-bold uppercase">
            <Crosshair className="w-4 h-4" />
            <span>OPERAÇÃO CIENTÍFICA 09 // AMOSTRAS BIOLÓGICAS</span>
          </div>
          <span className="font-mono text-xs text-tactical-amber border border-tactical-amber/40 px-2 py-0.5">
            35% CHANCE DE PROJETOS
          </span>
        </div>

        <div>
          <h3 className="text-2xl font-black font-mono uppercase text-white">
            COLETA DAS 4 VARIANTES ESPECIAIS
          </h3>
          <p className="text-xs sm:text-sm text-tactical-gray mt-2 leading-relaxed">
            O cientista do laboratório necessita de amostras dos 4 espécimes mais perigosos: o Corredor no Pátio Ferroviário, o Tóxico nos Esgotos, o Blindado no Terminal e o Mutante Colossal no Ferro Velho.
          </p>
        </div>

        <div className="space-y-2 border-t border-border/60 pt-4">
          <div className="font-mono text-xs font-bold uppercase text-white">PROJETOS MÉDICOS DESBLOQUEÁVEIS (BLUEPRINTS):</div>
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 bg-background-secondary border border-border text-zinc-300">Projeto: Bandagem Limpa</span>
            <span className="px-2.5 py-1 bg-background-secondary border border-border text-zinc-300">Projeto: Compressas de Gaze</span>
            <span className="px-2.5 py-1 bg-background-secondary border border-border text-zinc-300">Projeto: Kit Médico Avançado</span>
            <span className="px-2.5 py-1 bg-background-secondary border border-border text-tactical-green font-bold">Projeto: Injetor de Adrenalina</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-4">
        <PlayNowButton size="large" />
      </div>
    </div>
  );
}