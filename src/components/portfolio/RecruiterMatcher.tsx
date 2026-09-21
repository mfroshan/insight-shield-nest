import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { BrainCircuit, CheckCircle2, LoaderCircle, Search, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { matchRecruiterRole, type RecruiterMatch } from "@/lib/recruiter-match.functions";

const SAMPLE = "We are hiring a Junior SOC Analyst to triage endpoint alerts, investigate Windows events, review identity and network telemetry, document findings, and escalate confirmed incidents. Experience with EDR, Microsoft Entra ID, Intune, Splunk, PowerShell, and clear user communication is valued.";

export function RecruiterMatcher() {
  const matchRole = useServerFn(matchRecruiterRole);
  const [role, setRole] = useState("");
  const [result, setResult] = useState<RecruiterMatch | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function analyze() {
    if (role.trim().length < 40) { setError("Please add at least a short paragraph from the role description."); return; }
    setLoading(true); setError(""); setResult(null);
    try {
      const response = await matchRole({ data: { roleDescription: role } });
      if (!response.ok) setError(response.error);
      else setResult(response.data);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "The role match could not be completed.");
    } finally { setLoading(false); }
  }

  return (
    <section id="role-match" className="border-y border-border/60 bg-card/20">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Recruiter tool · AI grounded</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">Match an open role to my portfolio.</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">Paste a job description to surface the most relevant verified skills, projects, and experience—plus honest gaps worth discussing.</p>
            <div className="mt-6 flex items-start gap-3 border-l-2 border-primary/60 pl-4 text-sm text-muted-foreground">
              <ShieldAlert className="mt-0.5 size-4 shrink-0 text-primary" />
              <p>Your role description is analyzed for this request only and is not saved.</p>
            </div>
          </div>
          <div className="rounded-lg border border-border bg-background/60 p-5 shadow-2xl shadow-primary/5">
            <label htmlFor="role-description" className="text-sm font-semibold text-foreground">Open role description</label>
            <Textarea id="role-description" value={role} onChange={(event) => setRole(event.target.value)} maxLength={8000} placeholder="Paste responsibilities, requirements, and preferred tools…" className="mt-3 min-h-40 resize-y bg-card/60 leading-relaxed" />
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
              <Button type="button" variant="ghost" size="sm" onClick={() => setRole(SAMPLE)}>Use SOC analyst example</Button>
              <Button type="button" onClick={analyze} disabled={loading} className="bg-accent text-accent-foreground hover:bg-accent/90">
                {loading ? <LoaderCircle className="animate-spin" /> : <Search />}{loading ? "Analyzing role…" : "Find strongest match"}
              </Button>
            </div>
            {loading && <div className="mt-5 border-t border-border pt-5 text-sm text-muted-foreground"><span className="inline-flex items-center gap-2"><BrainCircuit className="size-4 text-primary" /> Comparing the role with verified portfolio evidence…</span></div>}
            {error && <p role="alert" className="mt-5 rounded-md border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive-foreground">{error}</p>}
            {result && (
              <div className="mt-6 space-y-6 border-t border-border pt-6" aria-live="polite">
                <div><p className="font-mono text-xs uppercase tracking-[0.14em] text-primary">Match brief</p><p className="mt-2 leading-relaxed text-foreground/90">{result.matchSummary}</p></div>
                <div className="grid gap-3 sm:grid-cols-2">{result.strongestMatches.map((item) => <div key={item.area} className="rounded-md border border-border bg-card/50 p-4"><h3 className="flex items-center gap-2 font-display font-semibold text-foreground"><CheckCircle2 className="size-4 text-accent" />{item.area}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.evidence}</p></div>)}</div>
                <div><p className="font-mono text-xs uppercase tracking-[0.14em] text-primary">Most relevant project</p><p className="mt-2 font-semibold text-foreground">{result.relevantProject.name}</p><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{result.relevantProject.relevance}</p></div>
                <div className="grid gap-5 sm:grid-cols-2"><ResultList title="Gaps to discuss" items={result.gapsToDiscuss} /><ResultList title="Interview topics" items={result.interviewTopics} /></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ResultList({ title, items }: { title: string; items: string[] }) {
  return <div><p className="font-mono text-xs uppercase tracking-[0.14em] text-primary">{title}</p><ul className="mt-3 space-y-2">{items.map((item) => <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted-foreground"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />{item}</li>)}</ul></div>;
}
