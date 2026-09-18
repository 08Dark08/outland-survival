import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ShieldAlert, Terminal, MessageSquare } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background-secondary border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-crimson flex items-center justify-center text-white"><ShieldAlert className="w-4 h-4" /></div>
              <span className="font-mono text-base font-black tracking-widest text-white">OUTLAND SURVIVAL</span>
            </div>
            <p className="text-sm text-tactical-gray max-w-md font-sans">
              Experiência hardcore de sobrevivência zumbi no FiveM. Extraia suprimentos e enfrente sobreviventes em um ambiente brutalmente realista.
            </p>
            <div className="text-xs font-mono text-tactical-gray flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-crimson" /><span>DIRETRIZ MILITAR // SERVIDOR FIVEM</span>
            </div>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white font-bold mb-4">NAVEGAÇÃO</h4>
            <ul className="space-y-2 text-xs font-mono text-tactical-gray">
              <li><Link href="/sobre">O Outland</Link></li>
              <li><Link href="/sistemas">Sistemas</Link></li>
              <li><Link href="/como-jogar">Como Jogar</Link></li>
              <li><Link href="/status">Status</Link></li>
              <li><Link href="/ranking">Ranking</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white font-bold mb-4">DIRETRIZES</h4>
            <ul className="space-y-2 text-xs font-mono text-tactical-gray">
              <li><Link href="/regras">Regras</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/contato">Suporte</Link></li>
              <li><a href={siteConfig.discordUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1"><MessageSquare className="w-3 h-3 text-[#5865F2]" /> Discord</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-tactical-gray">
          <p>© 2026 OUTLAND SURVIVAL. Todos os direitos reservados.</p>
          <p className="text-[11px] text-zinc-500">Não afiliado à Rockstar Games ou Cfx.re.</p>
        </div>
      </div>
    </footer>
  );
}