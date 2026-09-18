"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function Accordion({ items }: { items: { id: string; title: string; content: string }[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);
  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="border border-border bg-background-panel">
            <button onClick={() => setOpenId(isOpen ? null : item.id)} className="w-full flex items-center justify-between p-5 text-left text-white font-medium hover:text-crimson-alert">
              <span className="font-mono text-sm tracking-wide">{item.title}</span>
              <ChevronDown className={"w-4 h-4 transition-transform " + (isOpen ? "rotate-180 text-crimson" : "text-tactical-gray")} />
            </button>
            {isOpen && <div className="px-5 pb-5 text-tactical-gray text-sm leading-relaxed border-t border-border/40 pt-4 font-sans">{item.content}</div>}
          </div>
        );
      })}
    </div>
  );
}