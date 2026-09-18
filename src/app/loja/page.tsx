"use client";

import { useState } from "react";
import { storeCatalog, storeCategories, storeConfig, StoreItem } from "@/config/store";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HudCorner } from "@/components/effects/HudCorner";
import {
  ShieldCheck,
  ExternalLink,
  CreditCard,
  X,
  Copy,
  Sparkles,
  Package,
} from "lucide-react";

export default function LojaPage() {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [selectedItem, setSelectedItem] = useState<StoreItem | null>(null);
  const [copiedPix, setCopiedPix] = useState(false);

  const filteredItems = storeCatalog.filter(
    (item) => selectedCategory === "todos" || item.category === selectedCategory
  );

  const handleCopyPix = () => {
    navigator.clipboard.writeText(storeConfig.pixKey);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 font-sans">
      
      {/* TÍTULO */}
      <SectionHeading
        badge="MERCADO DE SOBREVIVÊNCIA"
        title="LOJA OFICIAL // OUTLAND SURVIVAL"
        description="Adquira pacotes de sobrevivência, expansões de armazenamento e benefícios cosméticos para apoiar a infraestrutura do servidor."
      />

      {/* AVISO DE PROTEÇÃO DE DOAÇÃO */}
      <div className="bg-background-panel border border-border p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-8 h-8 text-tactical-green shrink-0" />
          <div>
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
              GARANTIA DE TEMPORADA & PROTEÇÃO CONTRA WIPE
            </h4>
            <p className="text-xs text-tactical-gray mt-0.5 max-w-3xl leading-relaxed">
              Em caso de wipe anunciado dentro do período de 30 dias de ativação de pacotes VIP, o operador receberá um pacote similar ou valor equivalente em moedas na temporada seguinte.
            </p>
          </div>
        </div>
        <div className="shrink-0 font-mono text-xs text-tactical-silver border border-border px-3 py-1.5 bg-background-secondary">
          ENTREGA: VIA DISCORD TICKET
        </div>
      </div>

      {/* FILTROS POR CATEGORIA */}
      <div className="flex flex-wrap gap-2 border-b border-border/80 pb-4">
        {storeCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`font-mono text-xs uppercase px-4 py-2 border transition-all duration-200 ${
              selectedCategory === cat.id
                ? "bg-crimson text-white border-crimson-alert font-bold shadow-tactical"
                : "bg-background-panel text-tactical-gray border-border hover:border-zinc-500 hover:text-white"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

     {/* GRID DE ITENS COM IMAGEM */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className={`group relative bg-background-panel border flex flex-col justify-between p-5 transition-all duration-300 hover:border-zinc-400 ${
              item.featured ? "border-crimson shadow-tactical bg-crimson/[0.03]" : "border-border"
            }`}
          >
            <HudCorner position="top-left" />
            <HudCorner position="bottom-right" />

            <div>
              {/* Badge Superior */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-[10px] uppercase tracking-wider text-tactical-gray">
                  ID: #{item.id}
                </span>
                {item.featured && (
                  <span className="font-mono text-[10px] font-bold px-2 py-0.5 border border-crimson/60 bg-crimson/20 text-crimson-alert flex items-center gap-1 uppercase">
                    <Sparkles className="w-3 h-3" /> DESTAQUE
                  </span>
                )}
              </div>

              {/* IMAGEM DO ITEM (PREENCHENDO 100% DO CONTAINER) */}
              <div className="relative w-full h-52 mb-4 bg-black/60 border border-border/70 overflow-hidden group-hover:border-crimson/50 transition-colors">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Package className="w-12 h-12 text-zinc-700" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background-panel via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

              {/* Nome */}
              <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wide mb-1 group-hover:text-crimson-alert transition-colors">
                {item.name}
              </h3>

              {/* Preço */}
              <div className="flex items-baseline gap-1 font-mono mb-4">
                {!item.isCoins && <span className="text-xs text-tactical-gray">R$</span>}
                <span className="text-2xl font-black text-white tracking-tight">
                  {item.price.toLocaleString("pt-BR")}
                </span>
                {item.isCoins && <span className="text-xs text-crimson-alert font-bold ml-1">COINS</span>}
              </div>

              {/* Descrição resumida */}
              <div
                className="text-xs text-tactical-gray font-sans line-clamp-3 leading-relaxed mb-6 border-t border-border/40 pt-3"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>

            {/* Botão Ver Detalhes */}
            <button
              onClick={() => setSelectedItem(item)}
              className={`w-full font-mono text-xs uppercase py-3 font-bold transition-all flex items-center justify-center gap-2 ${
                item.featured
                  ? "bg-crimson hover:bg-crimson-alert text-white shadow-tactical"
                  : "bg-background-secondary hover:bg-background text-tactical-silver hover:text-white border border-border"
              }`}
            >
              <span>VER DETALHES & ADQUIRIR</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>

      {/* MODAL DETALHADO COM IMAGEM AMPLIADA */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-background-panel border border-border p-6 md:p-8 shadow-2xl text-left my-8 max-h-[92vh] flex flex-col justify-between overflow-hidden">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 text-tactical-gray hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <div className="flex items-center gap-2 text-crimson font-mono text-xs font-bold uppercase mb-1">
                <CreditCard className="w-4 h-4" />
                <span>MANIFESTO DE CARGA // {selectedItem.category.toUpperCase()}</span>
              </div>

              {/* Cabeçalho do Modal: Imagem e Dados */}
              <div className="flex flex-col sm:flex-row items-center gap-4 border-b border-border/60 pb-4 mb-4">
                {selectedItem.image && (
                  <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 bg-black/40 border border-border p-2 flex items-center justify-center">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.name}
                      className="w-full h-full object-contain drop-shadow-md"
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-mono uppercase text-white">
                    {selectedItem.name}
                  </h3>
                  <div className="text-2xl font-black text-crimson-alert font-mono mt-1">
                    {!selectedItem.isCoins && "R$ "}
                    {selectedItem.price.toLocaleString("pt-BR")}
                    {selectedItem.isCoins && " COINS"}
                  </div>
                </div>
              </div>

              {/* Descrição Longa do Pacote com Rolagem */}
              <div className="overflow-y-auto max-h-[36vh] pr-2 space-y-2 text-xs text-zinc-300 font-sans leading-relaxed py-2 mb-4">
                <div dangerouslySetInnerHTML={{ __html: selectedItem.description }} />
              </div>
            </div>

            {/* Ações de Pagamento / Resgate */}
            <div className="space-y-3 pt-2 border-t border-border/60">
              <div className="bg-background-secondary border border-border p-3 flex items-center justify-between gap-3 text-xs">
                <div className="truncate">
                  <div className="text-[10px] font-mono text-tactical-gray uppercase">CHAVE PIX:</div>
                  <code className="font-mono text-white select-all">{storeConfig.pixKey}</code>
                </div>
                <button
                  onClick={handleCopyPix}
                  className="shrink-0 flex items-center gap-1 font-mono bg-background-panel border border-border px-3 py-1.5 text-white hover:border-zinc-500"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedPix ? "COPIADO!" : "COPIAR PIX"}</span>
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={storeConfig.discordTicketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center text-xs font-mono font-bold uppercase bg-crimson hover:bg-crimson-alert text-white py-3.5 shadow-tactical flex items-center justify-center gap-2"
                >
                  <span>RESGATAR NO DISCORD (TICKET)</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="w-full sm:w-1/3 text-center text-xs font-mono uppercase border border-border py-3.5 text-tactical-silver hover:text-white"
                >
                  FECHAR
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}