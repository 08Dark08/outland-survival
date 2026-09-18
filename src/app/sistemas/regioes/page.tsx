import { SectionHeading } from "@/components/ui/SectionHeading";
import { HudCorner } from "@/components/effects/HudCorner";
import { MapPin, Target, Sparkles } from "lucide-react";

export const metadata = {
  title: "Zonas de Loot & Biomas | Outland Survival",
  description: "Zonas exclusivas de peças de armas: Fort Zancudo de Sniper e Cayo Perico de Escopetas.",
};

export default function RegioesPage() {
  const exclusiveZones = [
    {
      code: "SETOR MILITAR",
      name: "FORT ZANCUDO (BASE MILITAR)",
      exclusive: "PEÇAS DE SNIPER EXCLUSIVAS",
      density: "8 Zumbis por Operador",
      desc: "O perímetro mais fortificado de San Andreas. É o ÚNICO local do mapa com drop de Peças de Rifle de Precisão em Chefes.",
      loot: ["Corpo de Sniper (Exclusivo)", "Cano de Sniper (Exclusivo)", "Corpo de Fuzil", "Molas de Armamento", "Placas de Kevlar", "Pólvora"],
    },
    {
      code: "SETOR INSULAR",
      name: "ILHA DE CAYO PERICO",
      exclusive: "PEÇAS DE ESCOPETA EXCLUSIVAS",
      density: "8 Zumbis por Operador",
      desc: "Complexo insular isolado por mar hostil. É o ÚNICO local do mapa onde é possível recuperar Peças de Escopeta Pesada.",
      loot: ["Corpo de Escopeta (Exclusivo)", "Cano de Escopeta (Exclusivo)", "Metal de Alta Qualidade", "Coquetéis Molotov", "Placas de Kevlar"],
    },
    {
      code: "SETOR INDUSTRIAL",
      name: "AEROPORTO & USINA PALMER-TAYLOR",
      exclusive: "PEÇAS DE FUZIL & SUBMETRALHADORA",
      density: "6 Zumbis por Operador",
      desc: "Grandes instalações urbanas com alta densidade de infectados. Fontes essenciais para fabricação de armamento automático.",
      loot: ["Corpo de Fuzil", "Cano de Fuzil", "Corpo de Submetralhadora", "Cano de Submetralhadora", "Corpo de Pistola"],
    },
  ];

  const bossSpawns = [
    "Pista de Pouso de Sandy Shores",
    "Parque Eólico de Ron Alternates",
    "Pedreira Davis Quartz",
    "Floresta de Paleto",
    "Ferro Velho de El Burro",
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 font-sans">
      <SectionHeading
        badge="CARTOGRAFIA DE RISCO"
        title="ZONAS DE LOOT EXCLUSIVO & SPAWNS DO CHEFE"
        description="Em Outland o armamento pesado depende da sua rota de infiltração. Conheça as regiões exclusivas para montagem de rifles e escopetas."
      />

      <div className="space-y-6">
        {exclusiveZones.map((zone) => (
          <div key={zone.name} className="bg-background-panel border border-border p-6 md:p-8 relative space-y-4">
            <HudCorner position="top-left" />
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 pb-3">
              <div className="flex items-center gap-2 font-mono">
                <span className="text-xs px-2 py-0.5 border border-crimson/50 text-crimson-alert bg-crimson/10 font-bold">
                  {zone.code}
                </span>
                <span className="text-xs text-tactical-gray font-bold">DENSIDADE: {zone.density}</span>
              </div>
              <span className="font-mono text-xs font-bold text-crimson-alert uppercase flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> {zone.exclusive}
              </span>
            </div>

            <h3 className="text-2xl font-black font-mono uppercase text-white">
              {zone.name}
            </h3>
            <p className="text-xs sm:text-sm text-tactical-gray leading-relaxed max-w-3xl">
              {zone.desc}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {zone.loot.map((item, idx) => (
                <span key={idx} className="font-mono text-[10px] px-2.5 py-1 bg-background-secondary border border-border text-zinc-300">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* SPAWNS DO BOSS ÔMEGA */}
      <div className="bg-background-panel border border-crimson/60 p-6 md:p-8 relative">
        <HudCorner position="top-left" />
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-crimson uppercase tracking-wider mb-2">
          <Target className="w-4 h-4" />
          <span>ROTA DE CONTAMINAÇÃO DO TITÃ ÔMEGA</span>
        </div>
        <h3 className="text-xl font-bold font-mono uppercase text-white mb-4">
          PONTOS DE APARIÇÃO DO CHEFE MUNDIAL
        </h3>
        <p className="text-xs text-tactical-gray mb-6">
          Ao soar o sinal de rádio, o Titã Ômega surge em um destes 5 pontos com perímetro PvP ativo de 220 metros:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 font-mono text-xs">
          {bossSpawns.map((spawn, idx) => (
            <div key={idx} className="bg-background-secondary border border-border p-3 flex items-center gap-2.5 text-white">
              <MapPin className="w-4 h-4 text-crimson shrink-0" />
              <span>{spawn}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}