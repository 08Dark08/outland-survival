import { SectionHeading } from "@/components/ui/SectionHeading";

export default function PvpPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-8">
      <SectionHeading badge="ENGAJAMENTO" title="PvP EM ZONAS VERMELHAS" description="Perímetros militares onde o combate armado é livre e com perda de inventário." />
      <div className="bg-background-panel border border-border p-6"><p className="text-sm text-tactical-gray">Respeite as áreas de trégua na safezone. Em zonas vermelhas, atire primeiro ou seja emboscado.</p></div>
    </div>
  );
}