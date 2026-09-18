import { SectionHeading } from "@/components/ui/SectionHeading";
import { SystemCard } from "@/components/systems/SystemCard";

export default function SistemasPage() {
  const systems = [
    { slug: "extracao", subtitle: "CICLO PRINCIPAL", title: "SISTEMA DE EXTRAÇÃO", desc: "Incursione, sobreviva e acione a extração tática para salvar seus itens.", threatLevel: "ALTO" },
    { slug: "zumbis", subtitle: "INFECTADOS", title: "ECOSSISTEMA DE ZUMBIS", desc: "Hordas responsivas a som e luz com mutantes resistentes.", threatLevel: "EXTREMO" },
    { slug: "missoes", subtitle: "CONTRATOS", title: "MISSÕES OPERACIONAIS", desc: "Cumpra objetivos de facções no mapa para desbloquear armamentos.", threatLevel: "MÉDIO" },
    { slug: "pvp", subtitle: "COMBATE", title: "PvP EM ZONAS VERMELHAS", desc: "Zonas de combate militar livre com full-loot ativo.", threatLevel: "LETAL" },
    { slug: "regioes", subtitle: "GEOGRAFIA", title: "BIOMAS & RADIAÇÃO", desc: "Regiões com loot de classes distintas e perigo progressivo.", threatLevel: "ALTO" },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <SectionHeading badge="MECÂNICAS" title="SISTEMAS OPERACIONAIS" description="Diretrizes das mecânicas ativas no servidor." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {systems.map((s) => (<SystemCard key={s.slug} {...s} />))}
      </div>
    </div>
  );
}