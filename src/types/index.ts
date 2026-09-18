export interface ServerStatusData {
  online: boolean;
  players: number;
  maxPlayers: number;
  hostname: string;
  lastUpdated: string;
  connectUrl: string;
  pingEstimateMs?: number;
}

export interface NewsPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: "Atualizações" | "Desenvolvimento" | "Eventos" | "Avisos" | "Devlog";
  readTime: string;
  author: string;
  pinned?: boolean;
}