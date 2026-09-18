import { SectionHeading } from "@/components/ui/SectionHeading";
import { DiscordButton } from "@/components/discord/DiscordButton";

export default function ContatoPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <SectionHeading badge="COMUNICAÇÃO" title="CENTRAL DE SUPORTE" description="Atendimento oficial através de tickets." />
      <div className="bg-background-panel border border-border p-8 text-center space-y-4">
        <h3 className="text-xl font-bold uppercase text-white">ATENDIMENTO VIA DISCORD</h3>
        <p className="text-sm text-tactical-gray">Nossa equipe atende 24/7 pelo sistema de tickets do servidor oficial.</p>
        <div className="flex justify-center"><DiscordButton variant="primary" label="ABRIR TICKET" /></div>
      </div>
    </div>
  );
}