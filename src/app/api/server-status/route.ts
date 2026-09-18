import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";
import { ServerStatusData } from "@/types";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const startTime = Date.now();
  const serverIp = process.env.FIVEM_SERVER_IP || "189.127.164.161";
  const serverPort = process.env.FIVEM_SERVER_PORT || "30120";

  // 1. TENTATIVA VIA IP DIRETO DA VPS (Mais rápida e sem bloqueios da Cloudflare)
  if (serverIp && serverIp !== "127.0.0.1" && serverIp !== "SEU_IP_AQUI") {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3500);

      const [dynRes, playersRes] = await Promise.allSettled([
        fetch(`http://${serverIp}:${serverPort}/dynamic.json`, { signal: controller.signal, cache: "no-store" }),
        fetch(`http://${serverIp}:${serverPort}/players.json`, { signal: controller.signal, cache: "no-store" }),
      ]);

      clearTimeout(timeoutId);
      const latency = Date.now() - startTime;

      if (dynRes.status === "fulfilled" && dynRes.value.ok) {
        const dynData = await dynRes.value.json();
        let count = 0;

        if (playersRes.status === "fulfilled" && playersRes.value.ok) {
          const pList = await playersRes.value.json();
          count = Array.isArray(pList) ? pList.length : (dynData.clients || 0);
        } else {
          count = dynData.clients || 0;
        }

        return NextResponse.json({
          online: true,
          players: count,
          maxPlayers: dynData.sv_maxclients ? parseInt(dynData.sv_maxclients, 10) : 128,
          hostname: dynData.hostname || "Outland Survival",
          lastUpdated: new Date().toISOString(),
          connectUrl: siteConfig.fivemConnectUrl,
          pingEstimateMs: latency,
        });
      }
    } catch {
      // Continua para o fallback da Cfx abaixo
    }
  }

  // 2. TENTATIVA VIA API DA CFX.RE COM HEADERS AUTORIZADOS
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4500);

    const cfxRes = await fetch(`https://servers-frontend.fivem.net/api/servers/single/${siteConfig.cfxCode}`, {
      signal: controller.signal,
      cache: "no-store",
      headers: {
        "User-Agent": "CitizenFX/1",
        "Accept": "application/json",
      },
    });

    clearTimeout(timeoutId);
    const latency = Date.now() - startTime;

    if (cfxRes.ok) {
      const json = await cfxRes.json();
      const sData = json?.Data || {};

      return NextResponse.json({
        online: true,
        players: sData.clients ?? 0,
        maxPlayers: sData.sv_maxclients ?? 128,
        hostname: sData.hostname ?? "Outland Survival",
        lastUpdated: new Date().toISOString(),
        connectUrl: siteConfig.fivemConnectUrl,
        pingEstimateMs: latency,
      });
    }
  } catch {
    // Falha silenciosa
  }

  // CONTINGÊNCIA SE O SERVIDOR ESTIVER DESLIGADO OU INACESSÍVEL
  return NextResponse.json({
    online: false,
    players: 0,
    maxPlayers: 128,
    hostname: siteConfig.name,
    lastUpdated: new Date().toISOString(),
    connectUrl: siteConfig.fivemConnectUrl,
    pingEstimateMs: 0,
  });
}