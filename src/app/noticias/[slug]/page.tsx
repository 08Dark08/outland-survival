import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PlayNowButton } from "@/components/server/PlayNowButton";

export default function NoticiaPage({ params }: { params: { slug: string } }) {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12 space-y-6">
      <Link href="/noticias" className="inline-flex items-center gap-1 text-xs font-mono uppercase text-tactical-gray hover:text-white"><ArrowLeft className="w-4 h-4 text-crimson" /> Voltar</Link>
      <div className="bg-background-panel border border-border p-8 space-y-4">
        <span className="text-xs font-mono text-crimson uppercase font-bold">ATUALIZAÇÃO OFICIAL</span>
        <h1 className="text-3xl font-bold uppercase text-white">Relatório de Campo: {params.slug}</h1>
        <p className="text-sm text-tactical-gray leading-relaxed">Novas diretrizes táticas implementadas no servidor. Ajustes no balanceamento de armas, loot e hordas.</p>
        <div className="pt-4"><PlayNowButton /></div>
      </div>
    </article>
  );
}