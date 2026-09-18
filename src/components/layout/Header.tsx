"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PlayNowButton } from "../server/PlayNowButton";
import { DiscordButton } from "../discord/DiscordButton";
import { Menu, X, ShieldAlert } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { label: "INÍCIO", href: "/" },
    { label: "O OUTLAND", href: "/sobre" },
    { label: "SISTEMAS", href: "/sistemas" },
    { label: "LOJA", href: "/loja" }, 
    { label: "COMO JOGAR", href: "/como-jogar" },
    { label: "NOTÍCIAS", href: "/noticias" },
    { label: "STATUS", href: "/status" },
    { label: "RANKING", href: "/ranking" },
    { label: "REGRAS", href: "/regras" },
  ];

  return (
    <header
      className={`w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/95 border-b border-border shadow-2xl backdrop-blur-md py-3"
          : "bg-background/85 border-b border-border/60 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* LOGO OFICIAL AO LADO DO NOME DO SERVIDOR */}
        <Link href="/" className="flex items-center gap-3 group select-none">
          
          {/* 1. Imagem da logo oficial substituindo o SVG antigo */}
          {!imgError ? (
            <img
              src="/images/branding/logo.png"
              alt="Logo Outland"
              onError={() => setImgError(true)}
              className="w-10 h-10 sm:w-11 sm:h-11 object-contain transition-transform group-hover:scale-105 drop-shadow-[0_0_10px_rgba(184,32,32,0.3)]"
            />
          ) : (
            <div className="w-10 h-10 bg-crimson border border-crimson-alert flex items-center justify-center text-white shadow-tactical">
              <ShieldAlert className="w-5 h-5" />
            </div>
          )}

          {/* 2. Nome do servidor preservado */}
          <div className="flex flex-col text-left">
            <span className="font-mono text-lg sm:text-xl font-black tracking-widest text-white uppercase leading-none group-hover:text-zinc-200 transition-colors">
              OUTLAND
            </span>
            <span className="font-mono text-[10px] tracking-[0.25em] text-crimson font-bold uppercase leading-tight mt-1">
              SURVIVAL
            </span>
          </div>
        </Link>

        {/* NAVEGAÇÃO DESKTOP */}
        <nav className="hidden xl:flex items-center gap-6">
          {nav.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-xs font-mono uppercase tracking-wider text-tactical-silver hover:text-white transition-colors hover:border-b-2 hover:border-crimson pb-0.5"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* BOTÕES DE AÇÃO */}
        <div className="hidden sm:flex items-center gap-3">
          <DiscordButton variant="compact" label="DISCORD" />
          <PlayNowButton size="default" />
        </div>

        {/* MENU MOBILE */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="xl:hidden text-tactical-gray hover:text-white p-2"
          aria-label="Abrir Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* DROPDOWN MOBILE */}
      {mobileOpen && (
        <div className="xl:hidden bg-background-panel border-b border-border px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {nav.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-mono uppercase text-tactical-silver hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="pt-4 border-t border-border flex flex-col gap-3">
            <DiscordButton variant="outline" label="ENTRAR NO DISCORD" />
            <PlayNowButton size="large" className="w-full py-3" />
          </div>
        </div>
      )}
    </header>
  );
}