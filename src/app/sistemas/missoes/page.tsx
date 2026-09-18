import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlayNowButton } from "@/components/server/PlayNowButton";

export default function MissoesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-8">
      <SectionHeading badge="OPERAÇÕES" title="MISSÕES E CONTRATOS" description="Contratos dinâmicos para ganhar reputação e suprimentos raros." />
      <div className="bg-background-panel border border-border p-6"><p className="text-sm text-tactical-gray">Atenda chamados de rádio na safezone para obter coordenadas de caixas-pretas e amostras biológicas.</p></div>
      <div className="flex justify-center"><PlayNowButton size="large" /></div>
    </div>
  );
}