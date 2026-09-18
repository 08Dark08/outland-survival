import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlayNowButton } from "@/components/server/PlayNowButton";

export default function ExtracaoPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-8">
      <SectionHeading badge="RETIRADA" title="SISTEMA DE EXTRAÇÃO" description="Somente itens extraídos em helipontos sinalizados persistem após a incursion." />
      <div className="bg-background-panel border border-border p-6 space-y-4">
        <h3 className="font-bold text-white uppercase">COMO FUNCIONA</h3>
        <p className="text-sm text-tactical-gray">Ao iniciar o ponto de extração, um sinalizador de fumaça é disparado na área. Sobreviva aos 30 segundos de contagem para consolidar seus suprimentos.</p>
      </div>
      <div className="flex justify-center"><PlayNowButton size="large" /></div>
    </div>
  );
}