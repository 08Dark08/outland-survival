import React from "react";

export function HudCorner({ position }: { position: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) {
  const styles: Record<string, string> = {
    "top-left": "top-0 left-0 border-t-2 border-l-2",
    "top-right": "top-0 right-0 border-t-2 border-r-2",
    "bottom-left": "bottom-0 left-0 border-b-2 border-l-2",
    "bottom-right": "bottom-0 right-0 border-b-2 border-r-2",
  };
  return <div aria-hidden="true" className={"absolute w-3 h-3 pointer-events-none border-crimson/70 " + styles[position]} />;
}