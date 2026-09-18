import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlayNowButton } from "@/components/server/PlayNowButton";
import { DiscordButton } from "@/components/discord/DiscordButton";
import { siteConfig } from "@/config/site";
import { Terminal, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Como Jogar no Outland Survival",
  description: "Guia passo a passo para conectar no Outland Survival via FiveM.",
};

export default function ComoJogarPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 font-sans">
      <SectionHeading
        badge="DIRETRIZ DE INGRESSO"
        title="COMO JOGAR NO OUTLAND SURVIVAL"
        description="Conexão direta sem necessidade de whitelist por formulário."
      />

      <div className="space-y-4">
        <div className="bg-background-panel border border-border p-6">
          <span className="font-mono text-crimson font-bold text-lg">01. </span>
          <span className="text-white font-bold uppercase font-mono">TENHA O GTA V E O FIVEM INSTALADOS</span>
          <p className="text-sm text-tactical-gray mt-2">
            Certifique-se de ter uma cópia original do GTA V e o FiveM atualizado no seu computador.
          </p>
        </div>

        <div className="bg-background-panel border border-border p-6">
          <span className="font-mono text-crimson font-bold text-lg">02. </span>
          <span className="text-white font-bold uppercase font-mono">ENTRE NO DISCORD DA COMUNIDADE</span>
          <p className="text-sm text-tactical-gray mt-2">
            Acompanhe avisos de wipes, atualizações e encontre outros sobreviventes para formar esquadrão.
          </p>
        </div>

        <div className="bg-background-panel border border-border p-6">
          <span className="font-mono text-crimson font-bold text-lg">03. </span>
          <span className="text-white font-bold uppercase font-mono">CONECTE NO SERVIDOR</span>
          <p className="text-sm text-tactical-gray mt-2 mb-3">
            Clique no botão <strong>JOGAR AGORA</strong> no topo do site ou abra o console do FiveM (tecla F8) e cole:
          </p>
          <div className="bg-background-secondary border border-border p-2.5 inline-flex items-center gap-2 font-mono text-xs text-crimson-alert">
            <Terminal className="w-3.5 h-3.5" />
            <code>connect {siteConfig.cfxCode}</code>
          </div>
        </div>
      </div>

      <div className="bg-background-secondary border border-border p-6">
        <h3 className="font-mono text-sm font-bold text-white uppercase mb-3">REQUISITOS RECOMENDADOS</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-tactical-gray">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-tactical-green" />
            <span>16 GB de Memória RAM</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-tactical-green" />
            <span>Instalação em SSD Obrigatória</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 pt-4">
        <PlayNowButton size="large" />
        <DiscordButton variant="primary" label="ENTRAR NO DISCORD" />
      </div>
    </div>
  );
}