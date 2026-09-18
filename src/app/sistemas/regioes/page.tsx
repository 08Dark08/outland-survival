import { SectionHeading } from "@/components/ui/SectionHeading";
import { HudCorner } from "@/components/effects/HudCorner";
import { ShieldAlert, Crosshair, Skull, MapPin, Target, Sparkles } from "lucide-react";

export const metadata = {
  title: "Zonas Militares & Biomas | Outland Survival",
  description: "Zonas exclusivas de armamento: Fort Zancudo de Sniper e Cayo Perico de Shotgun.",
};

export default function RegioesPage() {
  const exclusiveZones = [
    {
      code: "ARMYB",
      name: "FORT ZANCUDO (BASE MILITAR)",
      exclusive: "PEÇAS DE SNIPER EXCLUSIVAS",
      density: "8 Zumbis / Operador",
      desc: "O perímetro militar mais protegido de San Andreas. É o ÚNICO local do mapa com drop de Peças de Rifle de Precisão (SNIPER_BODY e SNIPER_BAREL) em Bosses.",
      loot: ["SNIPER_BODY (Exclusivo)", "SNIPER_BAREL (Exclusivo)", "Molas de Armas", "Kevlar Militar", "Pólvora"],
      danger: "LETAL",
    },
    {
      code: "ISHEIST",
      name: "ILHA DE CAYO PERICO",
      exclusive: "PEÇAS DE SHOTGUN EXCLUSIVAS",
      density: "8 Zumbis / Operador",
      desc: "Complexo insular isolado com vegetação densa. É o ÚNICO local com drop garantido de Peças de Escopetas Pesadas (SHOT_BODY e SHOT_BAREL).",
      loot: ["SHOT_BODY (Exclusivo)", "SHOT_BAREL (Exclusivo)", "Metal HQ", "Molotovs", "Kevlar Militar"],
      danger: "LETAL",
    },
    {
      code: "AIRP & PALMPOW",
      name: "AEROPORTO & USINA PALMER-TAYLOR",
      exclusive: "PEÇAS DE RIFLE & SUBMETRALHADORA",
      density: "6 Zumbis / Operador",
      desc: "Zonas industriais e pistas amplas com densidade de 6 infectados por operador. Peças balanceadas de Fuzil e SMGs.",
      loot: ["RIFLE_BODY", "SMG_BODY", "PISTOL_BODY", "Molas", "Pólvora"],
      danger: "ALTO",
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
        title="ZONAS DE LOOT MILITAR & SPAWNS DE BOSS"
        description="Em Outland o armamento pesado não nasce em qualquer lugar. Saiba onde incursionar para fabricar snipers e escopetas."
      />

      {/* ZONAS EXCLUSIVAS */}
      <div className="space-y-6">
        {exclusiveZones.map((zone) => (
          <div key={zone.code} className="bg-background-panel border border-border p-6 md:p-8 relative space-y-4">
            <HudCorner position="top-left" />
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 pb-3">
              <div className="flex items-center gap-2 font-mono">
                <span className="text-xs px-2 py-0.5 border border-crimson/50 text-crimson-alert bg-crimson/10 font-bold">
                  ZONA {zone.code}
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

      {/* PONTOS DE SPAWN DO BOSS ÔMEGA */}
      <div className="bg-background-panel border border-crimson/60 p-6 md:p-8 relative">
        <HudCorner position="top-left" />
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-crimson uppercase tracking-wider mb-2">
          <Target className="w-4 h-4" />
          <span>ROTA DE CONTAMINAÇÃO DO TITÃ ÔMEGA</span>
        </div>
        <h3 className="text-xl font-bold font-mono uppercase text-white mb-4">
          LOCAIS DE APARIÇÃO DO BOSS MUNDIAL
        </h3>
        <p className="text-xs text-tactical-gray mb-6">
          Ao soar a sirene de rádio, o Boss Ômega surge aleatoriamente em um destes 5 pontos de San Andreas com perímetro de guerra de 220 metros:
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