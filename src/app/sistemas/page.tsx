import { SectionHeading } from "@/components/ui/SectionHeading";
import { SystemCard } from "@/components/systems/SystemCard";
import { PlayNowButton } from "@/components/server/PlayNowButton";
import { HudCorner } from "@/components/effects/HudCorner";
import {
  Skull,
  Timer,
  Crown,
  Crosshair,
  Brain,
  Thermometer,
  Package,
  Scale,
  Dog,
  Wind,
  Zap,
  ShieldAlert,
} from "lucide-react";

export const metadata = {
  title: "Sistemas Operacionais | Outland Survival",
  description: "Diretrizes e funcionamento de todos os sistemas de jogo do Outland Survival.",
};

export default function SistemasPage() {
  const systems = [
    {
      slug: "extracao",
      subtitle: "EVENTO PROGRAMADO",
      title: "INCURSÃO & EXTRAÇÃO",
      desc: "Janelas diárias às 19:09 e 23:00 em dimensão tática isolada. Se o tempo acabar ou você desconectar, é morte e perda total da mochila.",
      threatLevel: "LETAL",
    },
    {
      slug: "zumbis",
      subtitle: "BESTIÁRIO & MUTAÇÕES",
      title: "INFECTADOS, BOSSES & SANIDADE",
      desc: "Zumbis de Fogo, Choque e Veneno, além do Titã Boss Ômega com raio PvP de 220m. Abater infectados restaura sua sanidade mental.",
      threatLevel: "EXTREMO",
    },
    {
      slug: "regioes",
      subtitle: "LOOT MILITAR REGIONAL",
      title: "BIOMAS & PEÇAS DE ARMAS",
      desc: "Fort Zancudo é o único local com peças de Sniper; Cayo Perico guarda as peças de Escopeta. Densidade de até 8 zumbis por operador.",
      threatLevel: "ALTO",
    },
    {
      slug: "missoes",
      subtitle: "CONTRATOS COOPERATIVOS",
      title: "OPERAÇÕES & RESGATE",
      desc: "Resgate sobreviventes no Hospital Pillbox contra o tempo de sangramento de 180s ou cace espécimes para o cientista do laboratório.",
      threatLevel: "MÉDIO",
    },
    {
      slug: "pvp",
      subtitle: "CONFLITO ARMADO",
      title: "ZONAS VERMELHAS & ARENAS",
      desc: "Full-Loot ativo em áreas militares e durante eventos de Chefes Mundiais. Proibido Safezone Baiting sob pena de sanção.",
      threatLevel: "LETAL",
    },
  ];

  const secondaryFeatures = [
    {
      icon: Dog,
      title: "COMPANHEIROS TÁTICOS (PETS)",
      desc: "Treine Rottweilers, Huskies, Direwolves e Chupacabras na Safezone com comandos de tecla para atacar alvos num raio de 25 metros.",
    },
    {
      icon: Zap,
      title: "ÁRVORE DE HABILIDADES RPG",
      desc: "Evolua atributos correndo, nadando, atirando e lutando. Desbloqueie regeneração de vida a cada 5 segundos e mais estamina.",
    },
    {
      icon: Thermometer,
      title: "CLIMA & TEMPERATURA BI-REGIONAL",
      desc: "O Sul ensolarado atinge até 33°C, enquanto o Norte montanhoso sofre com nevascas e temperaturas congelantes de até -5°C.",
    },
    {
      icon: Scale,
      title: "MERCADO DE ESCAMBO & BIOCHIPS",
      desc: "Sem dinheiro comum de papel: negocie usando Sucata como moeda base, BioChips para alta tecnologia e 14 matérias-primas de escambo.",
    },
    {
      icon: Package,
      title: "EXPEDIÇÕES & FARM PASSIVO",
      desc: "12 níveis de expedições automáticas para coletar madeira, enxofre para pólvora, componentes químicos e peças raras enquanto joga.",
    },
    {
      icon: Wind,
      title: "INFILTRAÇÃO COM WINGSUIT",
      desc: "Três plataformas de salto a até 1.500 metros de altitude para planar velozmente sobre San Andreas sem chamar atenção de hordas.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 font-sans">
      
      <SectionHeading
        badge="DIRETÓRIO TÁTICO"
        title="SISTEMAS OPERACIONAIS DO OUTLAND"
        description="Uma estrutura profunda de sobrevivência onde cada mecânica foi desenhada para valorizar o risco, o esforço e a persistência do operador."
      />

      {/* CARDS PRINCIPAIS COM PÁGINAS DEDICADAS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {systems.map((s) => (
          <SystemCard key={s.slug} {...s} />
        ))}
      </div>

      {/* MECÂNICAS INTEGRADAS DO SERVIDOR */}
      <div className="space-y-6 pt-4">
        <div>
          <span className="font-mono text-xs text-crimson font-bold uppercase tracking-widest">
            RECURSOS ADICIONAIS DE SOBREVIVÊNCIA
          </span>
          <h3 className="text-2xl font-black font-mono uppercase text-white mt-1">
            ENGENHARIA & ECOSSISTEMA DO JOGO
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondaryFeatures.map((f, idx) => {
            const Icon = f.icon;
            return (
              <div
                key={idx}
                className="bg-background-panel border border-border p-6 relative space-y-3 hover:border-zinc-500 transition-colors"
              >
                <HudCorner position="top-left" />
                <div className="flex items-center gap-2.5 text-crimson font-mono font-bold text-xs uppercase">
                  <Icon className="w-5 h-5 text-crimson" />
                  <span>{f.title}</span>
                </div>
                <p className="text-xs text-tactical-gray leading-relaxed font-sans">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center pt-4">
        <PlayNowButton size="large" />
      </div>

    </div>
  );
}