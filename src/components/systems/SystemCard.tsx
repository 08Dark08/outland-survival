import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HudCorner } from "../effects/HudCorner";

export function SystemCard({ slug, title, subtitle, desc, threatLevel }: { slug: string; title: string; subtitle: string; desc: string; threatLevel: string }) {
  return (
    <Link href={"/sistemas/" + slug} className="group relative block bg-background-panel border border-border p-6 hover:border-zinc-500 transition-all">
      <HudCorner position="top-right" />
      <div className="flex justify-between items-start mb-4">
        <span className="font-mono text-[11px] uppercase tracking-wider text-crimson font-bold">RISCO: {threatLevel}</span>
        <ArrowUpRight className="w-5 h-5 text-tactical-gray group-hover:text-crimson" />
      </div>
      <div className="text-xs font-mono text-tactical-gray uppercase mb-1">{subtitle}</div>
      <h3 className="text-xl font-bold uppercase tracking-wide text-white mb-3">{title}</h3>
      <p className="text-sm text-tactical-gray leading-relaxed mb-6 font-sans">{desc}</p>
      <div className="flex items-center text-xs font-mono text-tactical-silver group-hover:text-white uppercase tracking-wider">
        <span>ACESSAR DIRETRIZ</span> <span className="ml-2">→</span>
      </div>
    </Link>
  );
}