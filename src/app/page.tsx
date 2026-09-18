import Link from "next/link";
import { PlayNowButton } from "@/components/server/PlayNowButton";
import { DiscordButton } from "@/components/discord/DiscordButton";
import { ServerStatusCard } from "@/components/server/ServerStatusCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SystemCard } from "@/components/systems/SystemCard";
import { NewsCard } from "@/components/news/NewsCard";
import { HudCorner } from "@/components/effects/HudCorner";
import { Skull, Radio, PackageCheck, Swords, Compass, Cpu, ArrowRight, ShieldCheck } from "lucide-react";

export default function HomePage() {
  const news = [
    {
      slug: "patch-3-4-zona-contaminada",
      title: "Protocolo 3.4: Abertura da Zona Contaminada Norte",
      excerpt: "Nova incursão liberada. Infectados mutantes avistados nas redondezas da refinaria com loot militar multiplicado.",
      content: "",
      date: "Hoje",
      category: "Atualizações" as const,
      readTime: "3 min",
      author: "Comando Militar",
    },
  ];

  return (
    <div className="space-y-28">
      {/* ======================================================== */}
      {/* HERO SECTION COM VÍDEO CINEMATOGRÁFICO DE ZUMBIS         */}
      {/* ======================================================== */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-border">
        
        {/* 1. O VÍDEO DE FUNDO */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none filter brightness-50 contrast-125 saturate-75 scale-105"
        >
          {/* Vídeo local que você colocar na pasta public/videos/ */}
          <source src="/videos/hero-zombies.mp4" type="video/mp4" />

          {/* Vídeo online de demonstração imediata (carrega caso ainda não tenha o arquivo local) */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-silhouette-of-a-creepy-creature-in-the-mist-42416-large.mp4" type="video/mp4" />
        </video>

        {/* 2. CAMADAS DE CONTRASTE & VINHETA MILITAR (Deixa textos e botões 100% visíveis) */}
        {/* Gradiente escuro vertical */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40 pointer-events-none" />
        
        {/* Vinheta escura nas bordas da tela */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,#08090A_95%)] pointer-events-none" />
        
        {/* Brilho de alerta avermelhado militar no topo */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-crimson/20 blur-[160px] pointer-events-none rounded-full" />

        {/* 3. CONTEÚDO PRINCIPAL DO HERO */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 border border-crimson/50 bg-black/60 backdrop-blur-md px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest text-crimson-alert shadow-lg">
              <span className="w-2 h-2 bg-crimson-alert animate-ping rounded-full" />
              TRANSMISSÃO DE EMERGÊNCIA // OUTLAND NETWORK
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]">
              O MUNDO <span className="text-crimson">ACABOU.</span><br />A SOBREVIVÊNCIA COMEÇOU.
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 max-w-xl font-sans drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] leading-relaxed">
              Explore um território hostil tomado por infectados. Saqueie recursos escassos, conclua missões de alto risco e chegue à zona de extração.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <PlayNowButton size="large" />
              <DiscordButton variant="outline" label="JUNTE-SE À COMUNIDADE" />
            </div>

            <div className="pt-6 border-t border-border/60 flex items-center gap-6 text-xs font-mono text-tactical-silver backdrop-blur-sm bg-black/40 p-2 w-fit">
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-tactical-green" /> SEM WHITELIST</div>
              <div className="flex items-center gap-2"><Skull className="w-4 h-4 text-crimson" /> FULL-LOOT EM ZONA VERMELHA</div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <ServerStatusCard />
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SEÇÃO DIRETRIZES FUNDAMENTAIS                            */}
      {/* ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="DIRETRIZES" title="NÃO É APENAS SOBREVIVER. É DECIDIR O RISCO." description="Economia sob escassez real onde cada confronto pode custar seu inventário." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-background-panel border border-border p-6 relative">
            <HudCorner position="top-left" /><PackageCheck className="w-8 h-8 text-crimson mb-4" />
            <h3 className="text-lg font-bold uppercase text-white mb-2">EXTRAÇÃO & PERSISTÊNCIA</h3>
            <p className="text-sm text-tactical-gray">Garanta seu loot no cofre permanente antes que a área feche.</p>
          </div>
          <div className="bg-background-panel border border-border p-6 relative">
            <HudCorner position="top-left" /><Skull className="w-8 h-8 text-crimson mb-4" />
            <h3 className="text-lg font-bold uppercase text-white mb-2">INFECTADOS COM IA AVANÇADA</h3>
            <p className="text-sm text-tactical-gray">Zumbis reagem a disparos sem supressor, passos e lanternas.</p>
          </div>
          <div className="bg-background-panel border border-border p-6 relative">
            <HudCorner position="top-left" /><Radio className="w-8 h-8 text-crimson mb-4" />
            <h3 className="text-lg font-bold uppercase text-white mb-2">MISSÕES MILITARES</h3>
            <p className="text-sm text-tactical-gray">Resgate caixas-pretas e atenda chamados em frequências de rádio.</p>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SEÇÃO SISTEMAS PRINCIPAIS                                */}
      {/* ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div><span className="font-mono text-xs font-bold text-crimson uppercase tracking-widest">MECÂNICAS</span><h2 className="text-3xl font-extrabold uppercase text-white mt-1">SISTEMAS PRINCIPAIS</h2></div>
          <Link href="/sistemas" className="text-xs font-mono text-tactical-silver hover:text-white uppercase flex items-center gap-1.5"><span>TODOS</span> <ArrowRight className="w-4 h-4 text-crimson" /></Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SystemCard slug="extracao" subtitle="CICLO DE JOGO" title="SISTEMA DE EXTRAÇÃO" desc="Sua mochila só é sua se você alcançar o heliponto de extração vivo." threatLevel="ALTO" />
          <SystemCard slug="zumbis" subtitle="AMEAÇA BIOLÓGICA" title="INFECTADOS E HORDAS" desc="IA sensorial reativa a som de disparos e movimentos velozes." threatLevel="EXTREMO" />
          <SystemCard slug="missoes" subtitle="PROGRESSÃO" title="MISSÕES E CONTRATOS" desc="Contratos de risco dinâmicos gerados pelas forças mercenárias." threatLevel="MÉDIO" />
        </div>
      </section>

      {/* ======================================================== */}
      {/* SEÇÃO TRANSMISSÕES & NOTÍCIAS                            */}
      {/* ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div><span className="font-mono text-xs font-bold text-crimson uppercase tracking-widest">TRANSMISSÕES</span><h2 className="text-3xl font-extrabold uppercase text-white mt-1">ÚLTIMAS NOTÍCIAS</h2></div>
          <Link href="/noticias" className="text-xs font-mono text-tactical-silver hover:text-white uppercase flex items-center gap-1.5"><span>ARQUIVO</span> <ArrowRight className="w-4 h-4 text-crimson" /></Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {news.map((n) => (<NewsCard key={n.slug} post={n} />))}
        </div>
      </section>
    </div>
  );
}