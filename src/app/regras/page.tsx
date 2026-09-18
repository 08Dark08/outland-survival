"use client";

import { useState, useMemo } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DiscordButton } from "@/components/discord/DiscordButton";
import { HudCorner } from "@/components/effects/HudCorner";
import {
  ShieldAlert,
  Swords,
  AlertTriangle,
  Ban,
  Radio,
  FileText,
  ShieldCheck,
  Search,
  ExternalLink,
  BookOpen,
  EyeOff,
  Video,
} from "lucide-react";

export default function RegrasPage() {
  const [activeCategory, setActiveCategory] = useState("TODAS");
  const [searchQuery, setSearchQuery] = useState("");

  const gitbookUrl = "https://outland-survival.gitbook.io/outland-survival-docs";

  const categories = [
    { id: "TODAS", label: "TODAS AS DIRETRIZES" },
    { id: "SAFEZONE", label: "SAFEZONES & REFÚGIOS" },
    { id: "COMBATE", label: "COMBATE, PvP & EXTRAÇÃO" },
    { id: "INTEGRIDADE", label: "CHEATS & MODS ILÍCITOS" },
    { id: "COMUNIDADE", label: "COMUNIDADE & CONDUTA" },
    { id: "DENUNCIAS", label: "PROCESSO DE DENÚNCIA" },
  ];

  const ruleSections = [
    {
      categoryId: "SAFEZONE",
      title: "01. DIRETRIZES DE SAFEZONE (ÁREAS VERDES)",
      icon: ShieldCheck,
      color: "text-tactical-green border-tactical-green/40",
      description: "Áreas seguras, postos de negociadores e refúgios protegidos contra agressões.",
      rules: [
        {
          code: "SF-01",
          title: "IMUNIDADE CONTRA DANOS & DISPAROS",
          detail: "Qualquer agressão, disparo, dano proposital com veículos ou explosivos no perímetro da Safezone é expressamente proibido.",
        },
        {
          code: "SF-02",
          title: "SAFEZONE BAITING (FUGA ILÍCITA)",
          detail: "É terminantemente proibido correr para dentro de uma Safezone enquanto estiver sendo alvejado ou perseguido em combate na Zona Vermelha. Infratores perderão o loot da incursion e sofrerão sanção.",
        },
        {
          code: "SF-03",
          title: "SAFEZONE CAMPING",
          detail: "Ficar de guarda na borda imediata da Safezone com mira travada esperando jogadores desarmados saírem é considerado anti-jogo.",
        },
        {
          code: "SF-04",
          title: "BLOQUEIO DE ACESSO & VEÍCULOS",
          detail: "Estacionar intencionalmente veículos para trancar a porta de negociadores, garagens ou acessos da Safezone resultará na deleção do veículo sem reembolso.",
        },
      ],
    },
    {
      categoryId: "COMBATE",
      title: "02. COMBATE ARMADO, ZONAS VERMELHAS & EXTRAÇÃO",
      icon: Swords,
      color: "text-crimson-alert border-crimson/50",
      description: "Áreas de alto risco, refinarias, bunkers e helipontos de evacuação.",
      rules: [
        {
          code: "CB-01",
          title: "KILL ON SIGHT (KOS LIBERADO)",
          detail: "Em todas as Zonas Vermelhas e Áreas Contaminadas, o combate militar é livre e sem aviso prévio. Não há obrigação de diálogo antes do disparo.",
        },
        {
          code: "CB-02",
          title: "COMBAT LOGGING (DESCONEXÃO EM COMBATE)",
          detail: "Desconectar do jogo durante combate ativo, sangramento, render ou durante o acionamento de extração resultará em morte automática pelo script e banimento temporário de 72 horas.",
        },
        {
          code: "CB-03",
          title: "MECÂNICA DE EMBOSCADA DE EXTRAÇÃO",
          detail: "Contestar pontos de extração quando o sinalizador (flare) está aberto é parte legítima da gameplay. É proibido, porém, utilizar bugs de colisão para bloquear a zona de pouso.",
        },
        {
          code: "CB-04",
          title: "FULL-LOOT PERMANENTE",
          detail: "Ao morrer em áreas de conflito, todos os itens portados no inventário do personagem pertencem ao saqueador vencedor. Não há devolução de itens por mortes legítimas em combate.",
        },
      ],
    },
    {
      categoryId: "INTEGRIDADE",
      title: "03. INTEGRALIDADE TÉCNICA, CHEATS & MODS ILÍCITOS",
      icon: Ban,
      color: "text-crimson border-crimson",
      description: "Tolerância zero com qualquer manipulação externa que conceda vantagens injustas.",
      rules: [
        {
          code: "INT-01",
          title: "PROGRAMAS DE TERCEIROS (BAN HWID)",
          detail: "Uso de softwares maliciosos (Aimbot, ESP, Wallhack, Magic Bullet, No-Recoil ou disparadores externos) acarreta em BANIMENTO PERMANENTE por hardware e IP.",
        },
        {
          code: "INT-02",
          title: "MODIFICAÇÕES GRÁFICAS PROIBIDAS (NO-PROPS)",
          detail: "Cidadanias ou pacotes gráficos que removam vegetação (arbustos/árvores), retirem a água, retirem neblina climática ou clareiem artificialmente a escuridão da noite são considerados cheats.",
        },
        {
          code: "INT-03",
          title: "ABUSO DE BUGS & GLITCHES DE MAPA",
          detail: "Entrar em bunkers fechados usando animações/emotes, atirar através de frestas invisíveis de textura ou duplicar itens do inventário gerará reset completo da conta.",
        },
        {
          code: "INT-04",
          title: "CROSSHAIR EXTERNO NÃO PERMITIDO",
          detail: "Utilizar overlays com miras fixas na tela para ter mira perfeita sem que a arma esteja engatilhada ou em armas sem crosshair nativo é estritamente proibido.",
        },
      ],
    },
    {
      categoryId: "COMUNIDADE",
      title: "04. CONDUTA SOCIAL, RESPEITO & DISCORD",
      icon: Radio,
      color: "text-tactical-silver border-border",
      description: "Diretrizes de convivência mútua na rede Outland Survival.",
      rules: [
        {
          code: "SOC-01",
          title: "DISCURSO DE ÓDIO & TOXICIDADE",
          detail: "Racismo, homofobia, machismo, preconceito religioso ou qualquer ofensa contra a integridade pessoal resultará em banimento imediato sem advertência prévia.",
        },
        {
          code: "SOC-02",
          title: "STREAM SNIPING",
          detail: "Assistir a transmissões ao vivo de criadores de conteúdo do servidor para caçá-los ou roubar suas posições de extração é considerado infração gravíssima.",
        },
        {
          code: "SOC-03",
          title: "COMÉRCIO POR DINHEIRO REAL (RMT)",
          detail: "Vender itens in-game, veículos, armamentos ou contas por moeda real é proibido. Toda transação oficial é feita exclusivamente pelos canais autorizados da administração.",
        },
      ],
    },
    {
      categoryId: "DENUNCIAS",
      title: "05. DIRETRIZES PARA ABERTURA DE DENÚNCIAS",
      icon: Video,
      color: "text-blue-400 border-blue-500/40",
      description: "Critérios técnicos obrigatórios para que uma infração seja avaliada pela equipe.",
      rules: [
        {
          code: "DEN-01",
          title: "VÍDEO COMPLETO SEM CORTES",
          detail: "Denúncias sem vídeo legível e com áudio limpo não serão aceitas. O vídeo deve conter no mínimo 45 segundos da ação completa gravado por plataformas legítimas (Medal, Shadowplay ou OBS).",
        },
        {
          code: "DEN-02",
          title: "PRAZO MÁXIMO DE REPORTE",
          detail: "Incidentes devem ser reportados no sistema de tickets do Discord em até no máximo 24 horas após o ocorrido para viabilizar a análise dos logs do servidor.",
        },
        {
          code: "DEN-03",
          title: "FALSA ACUSAÇÃO & MÁ-FÉ",
          detail: "Cortar vídeos de forma tendenciosa para incriminar falsamente outro jogador acarreta na punição do próprio denunciante.",
        },
      ],
    },
  ];

  // Filtro inteligente por texto e categoria
  const filteredSections = useMemo(() => {
    return ruleSections
      .filter((sec) => activeCategory === "TODAS" || sec.categoryId === activeCategory)
      .map((sec) => {
        if (!searchQuery.trim()) return sec;
        const matchingRules = sec.rules.filter(
          (r) =>
            r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            r.detail.toLowerCase().includes(searchQuery.toLowerCase()) ||
            r.code.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return { ...sec, rules: matchingRules };
      })
      .filter((sec) => sec.rules.length > 0);
  }, [activeCategory, searchQuery]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 font-sans">
      
      {/* CABEÇALHO */}
      <SectionHeading
        badge="DIRETRIZ MILITAR DO OUTLAND"
        title="MANUAL OFICIAL DE REGRAS"
        description="Diretrizes de sobrevivência, engajamento armado e conduta técnica extraídas da documentação oficial de campo."
      />

      {/* BANNER COM LINK DIRETO PARA O GITBOOK OFICIAL */}
      <div className="bg-background-panel border border-border p-6 flex flex-col sm:flex-row items-center justify-between gap-4 relative">
        <HudCorner position="top-left" />
        <HudCorner position="bottom-right" />
        <div className="flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-crimson shrink-0" />
          <div>
            <div className="font-mono text-xs font-bold text-white uppercase tracking-wider">
              DOCUMENTAÇÃO COMPLETA NO GITBOOK
            </div>
            <p className="text-xs text-tactical-gray mt-0.5">
              Consulte os termos originais, detalhes de banimento e apelações no GitBook oficial do servidor.
            </p>
          </div>
        </div>
        <a
          href={gitbookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 font-mono text-xs uppercase px-4 py-2.5 border border-border bg-background-secondary hover:bg-background text-tactical-silver hover:text-white flex items-center gap-2 transition-all"
        >
          <span>ACESSAR GITBOOK</span>
          <ExternalLink className="w-3.5 h-3.5 text-crimson" />
        </a>
      </div>

      {/* BARRA DE PESQUISA & FILTROS */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-tactical-gray" />
          <input
            type="text"
            placeholder="Pesquisar regra (ex: combat log, safezone, vegetação, denúncia)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-background-panel border border-border pl-10 pr-4 py-3 text-xs font-mono text-white placeholder:text-zinc-500 focus:outline-none focus:border-crimson transition-colors"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`font-mono text-xs uppercase px-4 py-2 border transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-crimson text-white border-crimson-alert font-bold shadow-tactical"
                  : "bg-background-panel text-tactical-gray border-border hover:border-zinc-500 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* LISTA DAS SEÇÕES */}
      <div className="space-y-10">
        {filteredSections.length === 0 ? (
          <div className="bg-background-panel border border-border p-12 text-center text-tactical-gray font-mono text-xs">
            Nenhuma diretriz encontrada para o termo "{searchQuery}".
          </div>
        ) : (
          filteredSections.map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.title}
                className="bg-background-panel border border-border p-6 md:p-8 relative space-y-6"
              >
                <HudCorner position="top-left" />
                
                <div className="flex items-start gap-4 border-b border-border/60 pb-4">
                  <div className={`p-2.5 border bg-background-secondary ${section.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-mono text-white uppercase tracking-wide">
                      {section.title}
                    </h3>
                    <p className="text-xs text-tactical-gray mt-1">
                      {section.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {section.rules.map((rule) => (
                    <div
                      key={rule.code}
                      className="bg-background-secondary border border-border/70 p-5 space-y-2 hover:border-zinc-500 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] font-bold px-2 py-0.5 border border-crimson/40 text-crimson-alert bg-crimson/10">
                          {rule.code}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white uppercase font-mono tracking-wide">
                        {rule.title}
                      </h4>
                      <p className="text-xs text-tactical-gray leading-relaxed">
                        {rule.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* SUPORTE & ABERTURA DE TICKET */}
      <div className="bg-background-secondary border border-border p-8 text-center space-y-4">
        <h3 className="text-lg font-bold uppercase text-white font-mono flex items-center justify-center gap-2">
          <FileText className="w-5 h-5 text-crimson" />
          <span>PRECISA REPORTAR UM INCIDENTE OU INFRAÇÃO?</span>
        </h3>
        <p className="text-sm text-tactical-gray max-w-xl mx-auto font-sans leading-relaxed">
          Abra um chamado com seu clipe na sala de denúncias do Discord. Nossa equipe de inteligência militar analisará os logs da sessão.
        </p>
        <div className="flex justify-center pt-2">
          <DiscordButton variant="primary" label="ABRIR CHAMADO NO DISCORD" />
        </div>
      </div>

    </div>
  );
}