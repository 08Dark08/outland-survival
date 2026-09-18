import { SectionHeading } from "@/components/ui/SectionHeading";
import { SystemCard } from "@/components/systems/SystemCard";

export const metadata = {
  title: "Sistemas Operacionais | Outland Survival",
  description: "Conheça a inteligência biológica, mecânicas de sanidade, boss mundial e zonas exclusivas de San Andreas.",
};

export default function SistemasPage() {
  const systems = [
    {
      slug: "zumbis",
      subtitle: "BESTIÁRIO & ELEMENTAIS",
      title: "INFECTADOS & SANIDADE",
      desc: "Zumbis com mutações de Fogo, Eletricidade e Tóxicos. Mecânica de sanidade mental restaurada a cada abate.",
      threatLevel: "EXTREMO",
    },
    {
      slug: "missoes",
      subtitle: "OPERAÇÕES COOPERATIVAS",
      title: "MISSÕES & CONTRATOS",
      desc: "Infiltre-se no Hospital Pillbox para resgatar sobreviventes em 180s ou colete amostras biológicas para cientistas.",
      threatLevel: "MÉDIO",
    },
    {
      slug: "regioes",
      subtitle: "LOOT EXCLUSIVO & BIOMAS",
      title: "ZONAS DE ARMAS MILITARES",
      desc: "Fort Zancudo guarda as peças de Sniper e Cayo Perico as peças de Shotgun. Densidade extrema de 8 zumbis por operador.",
      threatLevel: "ALTO",
    },
    {
      slug: "pvp",
      subtitle: "CONFLITO ARMADO TOTAL",
      title: "ARENAS DE BOSS & FULL-LOOT",
      desc: "Raio PvP de 220 metros ao redor do Boss Mundial Ômega. Combate de facções liberado pelo loot de armamento pesado.",
      threatLevel: "LETAL",
    },
    {
      slug: "extracao",
      subtitle: "CICLO DE PERSISTÊNCIA",
      title: "SISTEMA DE EXTRAÇÃO",
      desc: "Incursione, colete materiais bélicos e chame a extração via flare. O cofre permanente só salva o que você extrair vivo.",
      threatLevel: "ALTO",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 font-sans">
      <SectionHeading
        badge="DIRETRIZES DO SERVIDOR"
        title="SISTEMAS OPERACIONAIS DO OUTLAND"
        description="Arquitetura de sobrevivência hardcore construída com base em inteligência biológica, loot regionalizado e combates de alto risco."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {systems.map((s) => (
          <SystemCard key={s.slug} {...s} />
        ))}
      </div>
    </div>
  );
}