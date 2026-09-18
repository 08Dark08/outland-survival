import Link from "next/link";
import { NewsPost } from "@/types";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export function NewsCard({ post }: { post: NewsPost }) {
  return (
    <article className="bg-background-panel border border-border flex flex-col justify-between p-6 hover:border-zinc-500 transition-all group">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[10px] font-mono uppercase px-2 py-0.5 border border-crimson text-crimson">{post.category}</span>
          <div className="flex items-center gap-3 text-[11px] font-mono text-tactical-gray">
            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
          </div>
        </div>
        <h3 className="text-lg font-bold text-white uppercase tracking-wide mb-2 group-hover:text-crimson-alert">
          <Link href={"/noticias/" + post.slug}>{post.title}</Link>
        </h3>
        <p className="text-sm text-tactical-gray font-sans line-clamp-3 leading-relaxed mb-6">{post.excerpt}</p>
      </div>
      <div className="pt-4 border-t border-border/40 flex items-center justify-between">
        <span className="text-[11px] font-mono text-tactical-gray">OPERADOR: {post.author}</span>
        <Link href={"/noticias/" + post.slug} className="text-xs font-mono text-tactical-silver hover:text-white uppercase flex items-center gap-1">
          <span>LER RELATÓRIO</span> <ArrowRight className="w-3.5 h-3.5 text-crimson" />
        </Link>
      </div>
    </article>
  );
}