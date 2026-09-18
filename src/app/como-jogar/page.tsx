import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlayNowButton } from "@/components/server/PlayNowButton";
import { DiscordButton } from "@/components/discord/DiscordButton";
import { siteConfig } from "@/config/site";

export default function ComoJogarPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-8">
      <SectionHeading badge="GUIA RÁPIDO" title="COMO JOGAR NO OUTLAND SURVIVAL" description="Sem formulários de whitelist: conexão direta para todos os operadores." />
      <div className="space-y-4">
        <div className="bg-background-panel border border-border p-6">
          <h3 className="text-white font-bold font-mono uppercase mb-2">01. TENHA GTA V E FIVEM INSTALADOS</h3>
          <p className="text-sm text-tactical-gray">Certifique-se de que o FiveM abre perfeitamente.</p>
        </div>
        <div className="bg-background-panel border border-border p-6">
          <h3 className="text-white font-bold font-mono uppercase mb-2">02. CLIQUE EM JOGAR AGORA</h3>
          <p className="text-sm text-tactical-gray">Ou digite no console F8 do FiveM: <code>{"connect " + siteConfig.fivemEndpoint}</code></p>
        </div>
      </div>
      <div className="flex justify-center gap-4"><PlayNowButton size="large" /><DiscordButton variant="primary" /></div>
    </div>
  );
}