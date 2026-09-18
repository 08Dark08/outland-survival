import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlayNowButton } from "@/components/server/PlayNowButton";
import { HudCorner } from "@/components/effects/HudCorner";
import {
  Skull,
  Flame,
  Zap,
  Biohazard,
  Activity,
  ShieldAlert,
  Brain,
  Crosshair,
  Crown,
} from "lucide-react";

export const metadata = {
  title: "Bestiário & Infectados | Outland Survival",
  description: "Variantes elementais de fogo, raio e veneno, sistema de sanidade mental e o Titã Boss Ômega.",
};

export default function ZumbisPage() {
  const elementals = [
    {
      name: "ZUMBIS DE FOGO (FIRE)",
      icon: Flame,
      color: "text-orange-500 border-orange-500/40 bg-orange-500/10",
      damage: "9 (Rua) | 15 (Horda) | 35 (Boss)",
      desc: "Corpos carbonizados em combustão constante. Seus ataques queimam sobreviventes e ignoram parte de coletes comuns.",
    },
    {
      name: "ZUMBIS ELÉTRICOS (ELECTRIC)",
      icon: Zap,
      color: "text-yellow-400 border-yellow-400/40 bg-yellow-400/10",
      damage: "9 (Rua) | 15 (Horda) | 35 (Boss)",
      desc: "Mutação que conduz descargas estáticas residuais. Causa lentidão e desorientação ao contato físico com o operador.",
    },
    {
      name: "ZUMBIS TÓXICOS (TOXIC)",
      icon: Biohazard,
      color: "text-green-500 border-green-500/40 bg-green-500/10",
      damage: "9 (Rua) | 15 (Horda) | 35 (Boss)",
      desc: "Portadores de cepas concentradas do Yersinia-25. Expelem nuvens de veneno em raio de 5 metros que causam dano por segundo.",
    },
    {
      name: "CORREDORES (RUNNERS / SCREAMERS)",
      icon: Activity,
      color: "text-crimson-alert border-crimson/40 bg-crimson/10",
      damage: "7 (Rua) | 15 (Horda) | 35 (Boss)",
      desc: "Velocidade máxima acelerada (10.0). Caçam em bando e fecham distâncias antes que você consiga recarregar seu fuzil.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 font-sans">
      
      <SectionHeading
        badge="AMEAÇA BIOLÓGICA CLASSIFICADA"
        title="ECOSSISTEMA DE INFECTADOS & SANIDADE"
        description="O patógeno Yersinia-25 gerou mutações agressivas com propriedades físicas e elementais em San Andreas."
      />

      {/* MECÂNICA DE SANIDADE */}
      <div className="bg-background-panel border border-border p-6 md:p-8 relative">
        <HudCorner position="top-left" />
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
          <div className="flex items-start gap-4">
            <div className="p-3 border border-crimson/50 bg-crimson/10 text-crimson-alert">
              <Brain className="w-8 h-8" />
            </div>
            <div>
              <div className="font-mono text-xs text-crimson-alert font-bold uppercase tracking-wider">
                MECÂNICA PSICOLÓGICA DE SOBREVIVÊNCIA
              </div>
              <h3 className="text-2xl font-black font-mono uppercase text-white mt-1">
                SISTEMA DE SANIDADE MENTAL
              </h3>
              <p className="text-xs sm:text-sm text-tactical-gray mt-2 max-w-2xl leading-relaxed">
                Permanecer isolado na névoa ou noites escuras drena a estabilidade mental do sobrevivente, causando alucinações e tremedeira na mira. Abater zumbis concede <strong className="text-white">35% de chance de restaurar sua sanidade</strong> em campo.
              </p>
            </div>
          </div>
          <div className="font-mono text-center border border-border bg-background-secondary p-4 shrink-0 w-full md:w-auto">
            <div className="text-[10px] text-tactical-gray uppercase">CHANCE DE RECUPERAÇÃO</div>
            <div className="text-3xl font-black text-tactical-green mt-0.5">35%</div>
            <div className="text-[9px] text-zinc-500">POR INFECCIOSO NEUTRALIZADO</div>
          </div>
        </div>
      </div>

      {/* O TITÃ BOSS ÔMEGA */}
      <div className="bg-background-panel border border-crimson p-8 relative shadow-tactical">
        <HudCorner position="top-left" />
        <HudCorner position="bottom-right" />

        <div className="flex items-center gap-2 text-crimson font-mono text-xs font-bold uppercase tracking-widest mb-3">
          <Crown className="w-4 h-4" />
          <span>EVENTO DE MUNDO // CHEFE COLOSSAL</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
          <div className="space-y-4 max-w-2xl">
            <h3 className="text-3xl font-black font-mono uppercase text-white">
              O TITÃ ALFA: BOSS ÔMEGA
            </h3>
            <p className="text-xs sm:text-sm text-tactical-gray leading-relaxed">
              O experimento mais aterrorizante que escapou da quarentena. Possui <strong className="text-white">10.000 a 25.000 HP</strong> e uma carapaça de <strong className="text-white">3.000 de Blindagem</strong> reforçada.
            </p>
            <div className="space-y-2 text-xs font-mono text-zinc-300">
              <div className="flex items-center gap-2">
                <span className="text-crimson font-bold">• Fases de Horda:</span> Invoca 10 corredores letais ao atingir 75%, 50% e 25% de vida.
              </div>
              <div className="flex items-center gap-2">
                <span className="text-crimson font-bold">• Perímetro PvP de 220m:</span> Área vermelha ativa de combate livre durante o evento de 30 minutos.
              </div>
              <div className="flex items-center gap-2">
                <span className="text-crimson font-bold">• Drops Lendários:</span> Peças de Sniper, Rifle, Kevlar, Molotovs e até 100x de Pólvora.
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 w-full lg:w-72 font-mono shrink-0">
            <div className="bg-background-secondary p-3 border border-border">
              <div className="text-[9px] text-tactical-gray uppercase">VIDA BASE</div>
              <div className="text-xl font-bold text-white">25.000 HP</div>
            </div>
            <div className="bg-background-secondary p-3 border border-border">
              <div className="text-[9px] text-tactical-gray uppercase">ARMADURA</div>
              <div className="text-xl font-bold text-white">3.000 ARM</div>
            </div>
            <div className="bg-background-secondary p-3 border border-border">
              <div className="text-[9px] text-tactical-gray uppercase">DANO GOLPE</div>
              <div className="text-xl font-bold text-crimson-alert">45 DANO</div>
            </div>
            <div className="bg-background-secondary p-3 border border-border">
              <div className="text-[9px] text-tactical-gray uppercase">EXP DO PASSE</div>
              <div className="text-xl font-bold text-tactical-amber">+150 EXP</div>
            </div>
          </div>
        </div>
      </div>

      {/* VARIANTES ELEMENTAIS */}
      <div className="space-y-6">
        <div>
          <span className="font-mono text-xs text-crimson font-bold uppercase tracking-widest">
            MUTAÇÕES BIOLÓGICAS
          </span>
          <h3 className="text-2xl font-black font-mono uppercase text-white mt-1">
            CLASSES ELEMENTAIS DE ZUMBIS
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {elementals.map((el) => {
            const Icon = el.icon;
            return (
              <div key={el.name} className="bg-background-panel border border-border p-6 space-y-3 relative">
                <HudCorner position="top-left" />
                <div className="flex items-center justify-between">
                  <div className={`p-2 border ${el.color} inline-flex items-center gap-2 font-mono text-xs font-bold uppercase`}>
                    <Icon className="w-4 h-4" />
                    <span>{el.name}</span>
                  </div>
                </div>
                <p className="text-xs text-tactical-gray leading-relaxed font-sans">
                  {el.desc}
                </p>
                <div className="text-[11px] font-mono text-tactical-silver border-t border-border/50 pt-3">
                  <span className="text-tactical-gray">ESCALA DE DANO: </span>
                  <span className="text-white font-bold">{el.damage}</span>
                </div>
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