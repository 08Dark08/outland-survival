import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlayNowButton } from "@/components/server/PlayNowButton";
import { DiscordButton } from "@/components/discord/DiscordButton";

export default function SobrePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
      <SectionHeading badge="HISTÓRICO" title="O SURVIVAL REDEFINIDO NO FIVEM" description="Um ecossistema criado para recompensar cautela, cooperação e disciplina tática." />
      <div className="bg-background-panel border border-border p-8 space-y-4">
        <h3 className="text-xl font-bold uppercase text-white font-mono">FILOSOFIA DE JOGO</h3>
        <p className="text-sm text-tactical-gray leading-relaxed">Em Outland Survival, cada projétil e curativo têm valor inestimável. Atirar sem silenciador alerta hordas em centenas de metros e atrai saqueadores rivais.</p>
      </div>
      <div className="flex justify-center gap-4"><PlayNowButton /><DiscordButton variant="outline" /></div>
    </div>
  );
}