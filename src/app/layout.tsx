import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TelemetryBar } from "@/components/server/TelemetryBar";
import { TransmissionTicker } from "@/components/effects/TransmissionTicker";
import { TacticalAudioPlayer } from "@/components/effects/TacticalAudioPlayer";

export const metadata: Metadata = {
  title: "Outland Survival | Servidor FiveM Survival Zumbi",
  description: siteConfig.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-background text-tactical-silver antialiased min-h-screen flex flex-col font-sans selection:bg-crimson selection:text-white">
        
        {/* BARRA FIXA SUPERIOR COMPLETA */}
        <div className="sticky top-0 z-50 w-full bg-background">
          <TelemetryBar />
          <Header />
          <TransmissionTicker />
        </div>

        {/* CONTEÚDO DA PÁGINA */}
        <main className="flex-1">{children}</main>

        {/* WIDGET DO RÁDIO MILITAR FLUTUANTE (CANTO INFERIOR ESQUERDO) */}
        <TacticalAudioPlayer />

        <Footer />
      </body>
    </html>
  );
}