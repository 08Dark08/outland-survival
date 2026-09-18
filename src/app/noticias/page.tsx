import { SectionHeading } from "@/components/ui/SectionHeading";
import { NewsCard } from "@/components/news/NewsCard";

export default function NoticiasPage() {
  const news = [
    {
      slug: "patch-3-4-zona-contaminada",
      title: "Protocolo 3.4: Abertura da Zona Contaminada Norte",
      excerpt: "Incursão liberada com mutantes na refinaria e loot militar triplicado.",
      content: "",
      date: "Hoje",
      category: "Atualizações" as const,
      readTime: "3 min",
      author: "Comando Militar",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
      <SectionHeading badge="COMUNICADOS" title="NOTAS DE ATUALIZAÇÃO" description="Boletins oficiais da equipe de desenvolvimento." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">{news.map((n) => (<NewsCard key={n.slug} post={n} />))}</div>
    </div>
  );
}