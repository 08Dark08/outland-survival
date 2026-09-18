import React from "react";
import { siteConfig } from "@/config/site";
import { MessageSquare } from "lucide-react";

interface Props {
  label?: string;
  variant?: "primary" | "outline" | "compact";
  className?: string;
}

export function DiscordButton({ label = "ENTRAR NO DISCORD", variant = "outline", className = "" }: Props) {
  const base = "inline-flex items-center justify-center gap-2 font-mono uppercase font-semibold text-xs tracking-wider transition-all select-none ";
  const variants = {
    primary: "bg-[#5865F2] hover:bg-[#4752C4] text-white px-5 py-3 border border-[#5865F2]/40 shadow-lg",
    outline: "border border-border bg-background-panel/60 hover:bg-background-panel text-tactical-silver hover:text-white px-5 py-3",
    compact: "border border-border bg-background-panel/80 hover:bg-background-panel text-tactical-silver hover:text-white px-3 py-1.5 text-[11px]",
  };
  return (
    <a
      href={siteConfig.discordUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={base + variants[variant] + " " + className}
    >
      <MessageSquare className="w-4 h-4 text-[#5865F2]" />
      <span>{label}</span>
    </a>
  );
}