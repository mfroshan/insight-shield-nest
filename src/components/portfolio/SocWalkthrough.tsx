import { ClientOnly } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const SocWalkthroughCanvas = lazy(() => import("./SocWalkthroughCanvas").then((module) => ({ default: module.SocWalkthroughCanvas })));

function WalkthroughFallback() {
  return <section id="soc-lab" className="border-y border-border/60 bg-card/20"><div className="mx-auto max-w-7xl px-6 py-24"><p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Interactive operations floor</p><h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Walk through the SOC.</h2><div className="mt-8 grid h-[480px] place-items-center rounded-lg border border-border bg-background font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">Initializing secure operations floor…</div></div></section>;
}

export function SocWalkthrough() {
  return <ClientOnly fallback={<WalkthroughFallback />}><Suspense fallback={<WalkthroughFallback />}><SocWalkthroughCanvas /></Suspense></ClientOnly>;
}
