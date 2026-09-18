export const siteConfig = {
  name: "OUTLAND SURVIVAL",
  tagline: "Sobreviver. Explorar. Extrair. Voltar vivo.",
  description: "Servidor FiveM survival pós-apocalíptico com zumbis, extração, missões militares e PvP demarcado.",
  websiteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://outlandsurvival.com.br",
  discordUrl: "https://discord.gg/6F5WzMf2p7",
  
  // SEU CÓDIGO OFICIAL CFX.RE
  cfxCode: "bqp7ad",
  cfxJoinUrl: "https://cfx.re/join/bqp7ad",

  // 👉 CORREÇÃO AQUI: Apenas o código puro no protocolo
  get fivemConnectUrl() {
    return `fivem://connect/${this.cfxCode}`;
  },

  maintenanceMode: process.env.MAINTENANCE_MODE === "true",

  serverSpecs: {
    tickrate: "64-Tick",
    targetFps: "60-120 FPS",
    protection: "DDoS Mitigation Layer 7",
    maxSlots: 128,
  }
};