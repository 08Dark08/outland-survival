import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";
import { ServerStatusData } from "@/types";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const startTime = Date.now();
  const cfxApiUrl = `https://servers-frontend.fivem.net/api/servers/single/${siteConfig.cfxCode}`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const res = await fetch(cfxApiUrl, {
      signal: controller.signal,
      cache: "no-store",
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    });

    clearTimeout(timeoutId);
    const latency = Date.now() - startTime;

    if (res.ok) {
      const data = await res.json();
      const serverData = data?.Data || {};

      const payload: ServerStatusData = {
        online: true,
        players: serverData.clients ?? 0,
        maxPlayers: serverData.sv_maxclients ?? siteConfig.serverSpecs.maxSlots,
        hostname: serverData.hostname ?? siteConfig.name,
        lastUpdated: new Date().toISOString(),
        connectUrl: siteConfig.fivemConnectUrl,
        pingEstimateMs: latency,
      };

      return NextResponse.json(payload, {
        headers: { "Cache-Control": "public, s-maxage=15, stale-while-revalidate=30" },
      });
    }

    throw new Error("Servidor não respondeu na Cfx.re");
  } catch {
    const fallback: ServerStatusData = {
      online: false,
      players: 0,
      maxPlayers: siteConfig.serverSpecs.maxSlots,
      hostname: siteConfig.name,
      lastUpdated: new Date().toISOString(),
      connectUrl: siteConfig.fivemConnectUrl,
      pingEstimateMs: 0,
    };

    return NextResponse.json(fallback, { status: 200 });
  }
}