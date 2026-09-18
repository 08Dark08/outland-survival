import { PlayNowButton } from "@/components/server/PlayNowButton";
import { DiscordButton } from "@/components/discord/DiscordButton";
import { HudCorner } from "@/components/effects/HudCorner";
import {
  Dna,
  Building2,
  ShieldCheck,
  Sunrise,
  Radio,
  Crosshair,
  Compass,
  Flame,
  Terminal,
} from "lucide-react";

export const metadata = {
  title: "A História de Outland | Lore Oficial",
  description: "A cronologia completa do colapso de Los Santos e o surgimento do Outland Survival.",
};

export default function SobrePage() {
  const chapters = [
    {
      id: "01",
      badge: "PROTOCOLO DE CONTENÇÃO ZERO",
      title: "A ORIGEM: LABORATÓRIOS HUMANE & YERSINIA-25",
      icon: Dna,
      date: "ANO ZERO // O INCIDENTE",
      image: "/images/lore/lore_1.jpg",
      paragraphs: [
        "A cidade de Los Santos, antes um centro de negócios e o reflexo do 'sonho americano', tornou-se o epicentro de uma catástrofe que alterou irrevogavelmente o destino da humanidade.",
        "Os Laboratórios Humane, operando sob sigilo absoluto e à margem de convenções bioéticas, alegavam conduzir pesquisas farmacêuticas de regeneração tecidual — um soro capaz de reparar lesões motoras severas e aprimorar as capacidades físicas humanas.",
        "Contudo, a verdade nos arquivos confidenciais apontava para experimentos ilícitos envolvendo patógenos selvagens e manipulações genéticas com cepas fúngicas desconhecidas, financiados por uma cúpula militar sedenta por superioridade biológica.",
        "O resultado foi o 'Yersinia-25': um patógeno instável que destrói o lobo frontal, despojando o hospedeiro de sua consciência e transformando-o em uma carcaça faminta guiada pelo instinto de predação. Quando o protocolo de segurança falhou em Sandy Shores, o vírus vazou. O mundo nunca mais foi o mesmo.",
      ],
    },
    {
      id: "02",
      badge: "COLAPSO E LEI MARCIAL",
      title: "O DECLÍNIO DA CIVILIZAÇÃO",
      icon: Building2,
      date: "MÊS 02 // O DIA EM QUE A CIDADE CAIU",
      image: "/images/lore/lore_2.jpg",
      paragraphs: [
        "A histeria coletiva tomou conta das avenidas. Enquanto os canais de imprensa tentavam camuflar o horror como 'incidentes isolados de histeria violenta', a realidade transformava Los Santos em um abatedouro urbano a céu aberto.",
        "O governo impôs lei marcial sumária. Bairros inteiros foram murados e postos sob quarentena forçada. Tropas militares abandonaram os civis nos distritos centrais enquanto helicópteros de combate sobrevoavam as torres executivas, executando qualquer silhueta em movimento.",
        "Com a falência da rede hospitalar e a interrupção no fornecimento de água potável e energia, o desespero ditou as regras. Incêndios purificadores consumiram quilômetros da metrópole, deixando apenas concreto calcinado e os passos erráticos de milhares de infectados.",
      ],
    },
    {
      id: "03",
      badge: "A ERA DOS FEUDOS ARMADOS",
      title: "O SURGIMENTO DOS SOBREVIVENTES",
      icon: ShieldCheck,
      date: "ANO 03 // ADAPTAÇÃO & GUERRA FRIA",
      image: "/images/lore/lore_3.jpg",
      paragraphs: [
        "Aqueles que se recusaram a perecer aprenderam a mais dura das lições: a ingenuidade é uma sentença de morte. Shoppings abandonados tornaram-se fortalezas muradas por grades industriais, bunkers da Guerra Fria foram reabertos e a escuridão dos esgotos virou refúgio.",
        "Neste novo ecossistema, os infectados deixaram de ser a única ameaça. Facções mercenárias, saqueadores e ex-soldados ergueram feudos próprios, cobrando pedágios em munição e comida. A confiança tornou-se uma moeda inexistente.",
        "A tecnologia moderna desmoronou. Velhos rádios analógicos e frequências militares cifradas tornaram-se o último elo entre comunidades isoladas. Sussurros pelo rádio dizem que cientistas dissidentes do Humane escaparam com matrizes de uma possível cura... mas na terra de ninguém, a esperança pode ser apenas uma armadilha.",
      ],
    },
    {
      id: "04",
      badge: "O PRESENTE // OUTLAND",
      title: "O NOVO MUNDO: DEZ ANOS DEPOIS",
      icon: Sunrise,
      date: "ATUALIDADE // A ERA DO OUTLAND",
      image: "/images/lore/lore_4.jpg",
      paragraphs: [
        "Dez anos se passaram desde a queda. A ilha de San Andreas agora é conhecida apenas como Outland: um território esquecido onde a natureza engoliu o asfalto e a escassez dita quem vive e quem morre.",
        "Após o desaparecimento da última expedição de batedores enviada ao norte, uma nova geração de operadores emerge dos refúgios. Não há governos, não há leis civis e não há resgates agendados.",
        "De dia, o sol ilumina um campo de caça disputado metro a metro por água, peças de fuzil e kits médicos. À noite, a escuridão pertence aos uivos e gritos dos mutantes e dos errantes que patrulham as rodovias desertas.",
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-20 font-sans">
      
      {/* CABEÇALHO DA LORE */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 border border-crimson/50 bg-crimson/10 px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest text-crimson-alert shadow-tactical">
          <Terminal className="w-3.5 h-3.5" />
          <span>ARQUIVOS CLASSIFICADOS // OUTLAND CHRONICLES</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight">
          A QUEDA DE <span className="text-crimson">LOS SANTOS</span>
        </h1>
        <p className="text-sm sm:text-base text-tactical-gray leading-relaxed font-sans">
          Descubra a verdade sobre o vazamento do patógeno Yersinia-25, o colapso militar de San Andreas e as circunstâncias que deram origem ao território selvagem de Outland.
        </p>
      </div>

      {/* LINHA DO TEMPO EM 4 CAPÍTULOS */}
      <div className="space-y-20">
        {chapters.map((chap, index) => {
          const Icon = chap.icon;
          const isEven = index % 2 === 1;

          return (
            <article
              key={chap.id}
              className="bg-background-panel border border-border overflow-hidden relative shadow-2xl transition-all duration-300 hover:border-zinc-500"
            >
              <HudCorner position="top-left" />
              <HudCorner position="bottom-right" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* IMAGEM CINEMATOGRÁFICA DO CAPÍTULO */}
                <div
                  className={`lg:col-span-6 relative min-h-[300px] sm:min-h-[400px] bg-black/60 overflow-hidden ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <img
                    src={chap.image}
                    alt={chap.title}
                    className="w-full h-full object-cover object-center filter brightness-90 contrast-110 hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-panel via-transparent to-transparent opacity-60 lg:hidden" />
                  <div className="absolute top-4 left-4 font-mono text-xs font-black bg-black/80 border border-border px-3 py-1 text-crimson-alert">
                    CAPÍTULO {chap.id}
                  </div>
                </div>

                {/* TEXTO E RELATÓRIO DO CAPÍTULO */}
                <div
                  className={`lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-[10px] font-bold px-2 py-0.5 border border-crimson/50 text-crimson-alert bg-crimson/10 uppercase tracking-wider">
                        {chap.badge}
                      </span>
                      <span className="font-mono text-[11px] text-tactical-gray flex items-center gap-1.5">
                        <Icon className="w-3.5 h-3.5 text-crimson" />
                        {chap.date}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-black font-mono uppercase tracking-wide text-white mb-6">
                      {chap.title}
                    </h2>

                    <div className="space-y-4 text-xs sm:text-sm text-tactical-gray font-sans leading-relaxed">
                      {chap.paragraphs.map((p, pIdx) => (
                        <p key={pIdx} className="text-zinc-300">
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/60 flex items-center gap-2 font-mono text-[11px] text-tactical-gray">
                    <Flame className="w-3.5 h-3.5 text-crimson" />
                    <span>REGISTRO DE CAMPO RECUPERADO DOS TERMINAIS DE SANDY SHORES</span>
                  </div>
                </div>

              </div>
            </article>
          );
        })}
      </div>

      {/* CHAMADO FINAL DO JOGADOR (CALL TO ACTION) */}
      <div className="bg-background-panel border border-crimson p-8 sm:p-14 relative text-center shadow-[0_0_40px_rgba(184,32,32,0.2)]">
        <HudCorner position="top-left" />
        <HudCorner position="bottom-right" />

        <div className="max-w-2xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-crimson-alert">
            <Radio className="w-4 h-4 animate-pulse" />
            <span>TRANSMISSÃO FINAL // ESCOLHA SEU DESTINO</span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
            QUAL CAMINHO VOCÊ ESCOLHERÁ?
          </h3>

          <p className="text-sm text-tactical-gray font-sans leading-relaxed">
            Será um guerreiro na linha de frente, um estrategista nas sombras focado em saques e extrações silenciosas, ou um líder que erguerá a próxima fortaleza de sobreviventes?
            <br />
            <strong className="text-white">O apocalipse não foi o fim. Foi apenas o começo.</strong>
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <PlayNowButton size="large" />
            <DiscordButton variant="primary" label="ENTRAR NO DISCORD" />
          </div>
        </div>
      </div>

    </div>
  );
}