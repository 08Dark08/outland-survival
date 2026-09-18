import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlayNowButton } from "@/components/server/PlayNowButton";

export default function ZumbisPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-8">
      <SectionHeading badge="AMEAÇA BIOLÓGICA" title="INFECTADOS E HORDAS" description="IA adaptativa com detecção sonora, visual e hordas migratórias." />
      <div className="bg-background-panel border border-border p-6 space-y-4">
        <h3 className="font-bold text-white uppercase">DETECÇÃO AUDITIVA</h3>
        <p className="text-sm text-tactical-gray">Tiros sem silenciador chamam a atenção de infectados num raio amplo. Priorize combate corpo a corpo silencioso ou armamento suprimido.</p>
      </div>
      <div className="flex justify-center"><PlayNowButton size="large" /></div>
    </div>
  );
}