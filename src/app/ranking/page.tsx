import { SectionHeading } from "@/components/ui/SectionHeading";
import { Trophy, RefreshCcw } from "lucide-react";

export default function RankingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <SectionHeading badge="QUADRO DE HONRA" title="RANKING DE SOBREVIVÊNCIA" description="Operadores mais letais da temporada." />
      <div className="bg-background-panel border border-border p-8 text-center space-y-4">
        <Trophy className="w-10 h-10 text-tactical-amber mx-auto" />
        <div className="font-mono text-xs text-crimson uppercase font-bold flex items-center justify-center gap-2"><RefreshCcw className="w-3.5 h-3.5 animate-spin" /> SINCRONIZAÇÃO EM ANDAMENTO</div>
        <h3 className="text-xl font-bold uppercase text-white">TEMPORADA 01 EM AVALIAÇÃO</h3>
      </div>
    </div>
  );
}