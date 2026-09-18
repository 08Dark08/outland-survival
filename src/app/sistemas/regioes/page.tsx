import { SectionHeading } from "@/components/ui/SectionHeading";

export default function RegioesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-8">
      <SectionHeading badge="CARTOGRAFIA" title="REGIÕES E BIOMAS" description="Diferentes graus de radiação e loot militar distribuídos pelo mapa." />
      <div className="bg-background-panel border border-border p-6"><p className="text-sm text-tactical-gray">Quanto mais ao norte você viaja, maior a densidade de mutantes e o valor do loot recuperado.</p></div>
    </div>
  );
}