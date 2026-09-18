import React from "react";

export function SectionHeading({ badge, title, description, center = false }: { badge: string; title: string; description?: string; center?: boolean }) {
  return (
    <div className={"mb-12 " + (center ? "text-center" : "text-left")}>
      <div className="inline-flex items-center gap-2 border border-border bg-background-secondary px-3 py-1 mb-3">
        <span className="w-1.5 h-1.5 bg-crimson" />
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-tactical-silver">{badge}</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-4">{title}</h2>
      {description && <p className="max-w-2xl text-tactical-gray text-base leading-relaxed">{description}</p>}
    </div>
  );
}