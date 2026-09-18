import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Terminal, MessageSquare } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background-secondary border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* COLUNA 1: LOGO OFICIAL E APRESENTAÇÃO */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              {/* Imagem da Logo Oficial */}
              <img
                src="/images/branding/logo.png"
                alt="Logo Outland Survival"
                className="w-9 h-9 object-contain drop-shadow-[0_0_8px_rgba(184,32,32,0.4)]"
              />
              <div className="flex flex-col text-left">
                <span className="font-mono text-base font-black tracking-widest text-white uppercase leading-none">
                  OUTLAND
                </span>
                <span className="font-mono text-[9px] tracking-[0.25em] text-crimson font-bold uppercase leading-tight mt-0.5">
                  SURVIVAL
                </span>
              </div>
            </div>

            <p className="text-sm text-tactical-gray max-w-md font-sans leading-relaxed">
              Experiência hardcore de sobrevivência zumbi no FiveM. Extraia suprimentos,
              enfrente mutantes e sobreviva em um ambiente brutalmente realista e hostil.
            </p>

            <div className="text-xs font-mono text-tactical-gray flex items-center gap-2 pt-1">
              <Terminal className="w-3.5 h-3.5 text-crimson" />
              <span>DIRETRIZ MILITAR // SERVIDOR FIVEM</span>
            </div>
          </div>

          {/* COLUNA 2: NAVEGAÇÃO DO SERVIDOR */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white font-bold mb-4">
              NAVEGAÇÃO
            </h4>
            <ul className="space-y-2 text-xs font-mono text-tactical-gray">
              <li><Link href="/" className="hover:text-white transition-colors">Início</Link></li>
              <li><Link href="/sobre" className="hover:text-white transition-colors">O Outland (Lore)</Link></li>
              <li><Link href="/sistemas" className="hover:text-white transition-colors">Sistemas de Jogo</Link></li>
              <li><Link href="/loja" className="hover:text-crimson-alert transition-colors font-bold text-zinc-300">Loja VIP</Link></li>
              <li><Link href="/como-jogar" className="hover:text-white transition-colors">Como Jogar</Link></li>
              <li><Link href="/status" className="hover:text-white transition-colors">Monitor de Status</Link></li>
              <li><Link href="/ranking" className="hover:text-white transition-colors">Quadro de Honra</Link></li>
            </ul>
          </div>

          {/* COLUNA 3: DIRETRIZES & SUPORTE */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white font-bold mb-4">
              DIRETRIZES
            </h4>
            <ul className="space-y-2 text-xs font-mono text-tactical-gray">
              <li><Link href="/regras" className="hover:text-white transition-colors">Regras Oficiais</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">Dúvidas Frequentes (FAQ)</Link></li>
              <li><Link href="/contato" className="hover:text-white transition-colors">Central de Atendimento</Link></li>
              <li>
                <a
                  href={siteConfig.discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-tactical-silver"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#5865F2]" />
                  <span>Discord Oficial</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* COPYRIGHT E AVISOS LEGAIS */}
        <div className="pt-8 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-tactical-gray">
          <p>© {new Date().getFullYear()} OUTLAND SURVIVAL. Todos os direitos reservados.</p>
          <p className="text-[11px] text-zinc-500">
            OUTLAND SURVIVAL não é afiliado à Rockstar Games, Take-Two Interactive ou Cfx.re.
          </p>
        </div>
      </div>
    </footer>
  );
}