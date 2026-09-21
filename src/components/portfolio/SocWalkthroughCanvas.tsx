import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Html, OrbitControls, RoundedBox } from "@react-three/drei";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Crosshair, Fingerprint, Radar, ShieldCheck } from "lucide-react";
import { Suspense, useRef, useState } from "react";
import type { Group } from "three";
import { Button } from "@/components/ui/button";

const stations = [
  { id: "incident", label: "Incident Response", short: "Validate, scope, contain", tools: "Datto EDR · Huntress · Windows logs", position: [-3.4, 0.35, -1.4] as [number, number, number], color: "#42a5ff", icon: ShieldCheck, to: "/case-studies/soc-investigation" as const },
  { id: "forensics", label: "Digital Forensics", short: "Preserve, parse, correlate", tools: "Volatility · ALEAPP · YARA", position: [-1.15, 0.35, -2.3] as [number, number, number], color: "#f4df45", icon: Fingerprint, to: "/case-studies/encrypted-recovery" as const },
  { id: "hunting", label: "Threat Hunting", short: "Query, pivot, validate", tools: "Splunk · Wazuh · ELK · Suricata", position: [1.25, 0.35, -2.3] as [number, number, number], color: "#3dd9c5", icon: Radar, to: "/case-studies/soc-investigation" as const },
  { id: "endpoint", label: "Endpoint Security", short: "Enroll, assess, remediate", tools: "Intune · Entra ID · PowerShell", position: [3.45, 0.35, -1.4] as [number, number, number], color: "#ffb454", icon: Crosshair, to: "/case-studies/soc-investigation" as const },
];

function Workstation({ station, selected, onSelect }: { station: typeof stations[number]; selected: boolean; onSelect: () => void }) {
  const group = useRef<Group>(null);
  useFrame((state) => { if (group.current) group.current.position.y = station.position[1] + Math.sin(state.clock.elapsedTime * 1.2 + station.position[0]) * 0.025; });
  return <group ref={group} position={station.position}>
    <RoundedBox args={[1.45, 0.12, 0.7]} radius={0.05} smoothness={3} position={[0, -0.1, 0]}><meshStandardMaterial color="#101a2a" metalness={0.7} roughness={0.35} /></RoundedBox>
    <RoundedBox args={[1.12, 0.65, 0.07]} radius={0.04} smoothness={3} position={[0, 0.4, -0.18]} rotation={[-0.08, 0, 0]} onClick={(event) => { event.stopPropagation(); onSelect(); }} onPointerOver={() => { document.body.style.cursor = "pointer"; }} onPointerOut={() => { document.body.style.cursor = "default"; }}>
      <meshStandardMaterial color={selected ? station.color : "#172338"} emissive={station.color} emissiveIntensity={selected ? 1.8 : 0.45} metalness={0.4} roughness={0.25} />
    </RoundedBox>
    <mesh position={[0, 0.03, -0.13]}><boxGeometry args={[0.08, 0.7, 0.08]} /><meshStandardMaterial color="#24344d" metalness={0.9} /></mesh>
    <pointLight color={station.color} intensity={selected ? 5 : 1.5} distance={3} position={[0, 0.6, 0.2]} />
    <Html center position={[0, 1.1, 0]} distanceFactor={7} occlude={false}><button type="button" onClick={onSelect} className={`soc-label ${selected ? "soc-label-active" : ""}`}>{station.label}</button></Html>
  </group>;
}

function Room({ active, setActive }: { active: string; setActive: (id: string) => void }) {
  return <>
    <color attach="background" args={["#070c16"]} />
    <fog attach="fog" args={["#070c16", 7, 16]} />
    <ambientLight intensity={0.35} />
    <directionalLight position={[0, 6, 4]} intensity={1.5} color="#a7c9ff" />
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}><planeGeometry args={[18, 14]} /><meshStandardMaterial color="#0b1220" metalness={0.25} roughness={0.75} /></mesh>
    <gridHelper args={[18, 24, "#235d99", "#13233b"]} position={[0, -0.08, 0]} />
    <RoundedBox args={[9.5, 3.2, 0.18]} radius={0.08} position={[0, 1.5, -3.25]}><meshStandardMaterial color="#0c1525" metalness={0.45} roughness={0.5} /></RoundedBox>
    {[-3, -1.5, 0, 1.5, 3].map((x, index) => <RoundedBox key={x} args={[1.25, 1.45, 0.05]} radius={0.04} position={[x, 1.55, -3.13]}><meshStandardMaterial color="#10233a" emissive={index % 2 ? "#2e91ff" : "#1762a8"} emissiveIntensity={0.65} /></RoundedBox>)}
    {stations.map((station) => <Workstation key={station.id} station={station} selected={active === station.id} onSelect={() => setActive(station.id)} />)}
    <Environment preset="night" />
    <OrbitControls enablePan={false} minDistance={5.5} maxDistance={9} minPolarAngle={0.8} maxPolarAngle={1.35} minAzimuthAngle={-0.55} maxAzimuthAngle={0.55} target={[0, 0.6, -1.5]} />
  </>;
}

export function SocWalkthroughCanvas() {
  const [active, setActive] = useState("incident");
  const selected = stations.find((station) => station.id === active) ?? stations[0];
  const Icon = selected.icon;
  return <section id="soc-lab" className="border-y border-border/60 bg-card/20"><div className="mx-auto max-w-7xl px-6 py-24"><div className="mb-8 flex flex-wrap items-end justify-between gap-5"><div><p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Interactive operations floor</p><h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Walk through the SOC.</h2></div><p className="max-w-md text-sm leading-relaxed text-muted-foreground">Select a workstation or drag the scene to inspect four investigation disciplines.</p></div><div className="overflow-hidden rounded-lg border border-border bg-background shadow-2xl shadow-primary/10"><div className="grid lg:grid-cols-[1fr_320px]"><div className="relative h-[480px] min-h-[420px]"><Suspense fallback={<div className="grid h-full place-items-center font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">Initializing secure operations floor…</div>}><Canvas dpr={[1, 1.5]} camera={{ position: [0, 4.2, 7.2], fov: 48 }}><Room active={active} setActive={setActive} /></Canvas></Suspense><div className="pointer-events-none absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Drag to inspect · Scroll to zoom · Select a station</div></div><aside className="border-t border-border bg-card/55 p-6 lg:border-l lg:border-t-0"><div className="flex size-11 items-center justify-center rounded-md border border-primary/40 bg-primary/10 text-primary"><Icon className="size-5" /></div><p className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-accent">Station {stations.indexOf(selected) + 1} / 4</p><h3 className="mt-2 font-display text-2xl font-bold">{selected.label}</h3><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{selected.short}. Follow the evidence path from initial signal to a documented decision.</p><p className="mt-6 font-mono text-xs uppercase tracking-[0.13em] text-primary">Tools in view</p><p className="mt-2 text-sm leading-relaxed text-foreground/85">{selected.tools}</p><Button asChild className="mt-8 w-full bg-accent text-accent-foreground hover:bg-accent/90"><Link to={selected.to}>Open case study<ArrowRight /></Link></Button><div className="mt-7 grid grid-cols-4 gap-2" aria-label="Choose SOC station">{stations.map((station) => <Button key={station.id} type="button" variant="ghost" size="sm" aria-label={station.label} aria-pressed={active === station.id} onClick={() => setActive(station.id)} className={`h-2 min-w-0 flex-1 rounded-full p-0 transition-colors ${active === station.id ? "bg-accent" : "bg-border hover:bg-primary"}`} />)}</div></aside></div></div></div></section>;
}
