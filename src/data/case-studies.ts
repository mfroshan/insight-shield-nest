export type TimelineItem = { time: string; title: string; detail: string; kind: "signal" | "action" | "finding" | "outcome" };

export const recoveryCaseStudy = {
  eyebrow: "MSc Thesis · Forensic Engineering",
  title: "Encrypted App Data Recovery Framework",
  summary: "A forensic analysis platform that unifies evidence intake, memory and mobile-artifact analysis, rule-based detection, and multi-format reporting into a repeatable workflow.",
  notice: "This page documents the verified thesis architecture and a representative workflow. It does not expose real personal or client evidence.",
  tools: ["Python", "FastAPI", "React", "Node.js", "MongoDB", "Docker", "PyTest", "Volatility", "ALEAPP", "YARA"],
  findings: [
    { label: "Workflow", value: "Evidence intake → validation → analysis → reporting" },
    { label: "Analysis", value: "Memory, Android artifacts, and YARA detections" },
    { label: "Outputs", value: "PDF, CSV, and JSON reports" },
    { label: "Quality", value: "Containerised services with automated tests" },
  ],
  timeline: [
    { time: "00:00", title: "Evidence registered", detail: "The workflow records case context and prepares submitted evidence for controlled processing.", kind: "signal" },
    { time: "00:04", title: "Integrity and format checks", detail: "Input is validated before analysis begins, preserving a clear processing record.", kind: "action" },
    { time: "00:11", title: "Analysis pipeline dispatched", detail: "Volatility, ALEAPP, and YARA are applied according to the submitted evidence type.", kind: "action" },
    { time: "00:26", title: "Artifacts correlated", detail: "Parsed findings are normalized so investigators can review related activity together.", kind: "finding" },
    { time: "00:34", title: "Reports generated", detail: "The platform produces consistent PDF, CSV, and JSON outputs for technical and non-technical review.", kind: "outcome" },
  ] satisfies TimelineItem[],
  outcome: "The result is a repeatable framework that reduces tool-switching, standardizes forensic outputs, and makes evidence findings easier to review and communicate.",
};

export const socCaseStudy = {
  eyebrow: "Anonymized Demonstration · SOC Workflow",
  title: "Endpoint Alert to Containment Decision",
  summary: "A realistic, anonymized investigation walkthrough showing how endpoint telemetry, identity context, DNS activity, and process evidence can be combined to reach a defensible triage decision.",
  notice: "Demonstration scenario based on Roshan’s stated responsibilities and tools. Names, times, indicators, and evidence are fictional and do not represent a client incident.",
  tools: ["Datto EDR", "Huntress", "Microsoft Entra ID", "Intune", "Windows Event Logs", "WebTitan", "Wireshark", "PowerShell"],
  findings: [
    { label: "Initial signal", value: "Suspicious encoded PowerShell activity" },
    { label: "Scope", value: "Single managed Windows endpoint" },
    { label: "Corroboration", value: "Process tree, DNS request, identity context" },
    { label: "Decision", value: "Contain, preserve evidence, escalate" },
  ],
  timeline: [
    { time: "09:14", title: "Endpoint alert received", detail: "EDR flags an encoded PowerShell command launched by an unexpected parent process.", kind: "signal" },
    { time: "09:18", title: "Identity context checked", detail: "Account activity and device registration are reviewed to establish expected user and endpoint context.", kind: "action" },
    { time: "09:24", title: "Process chain confirmed", detail: "The process tree and command-line evidence indicate activity inconsistent with the user’s normal workflow.", kind: "finding" },
    { time: "09:31", title: "Network evidence correlated", detail: "DNS and endpoint telemetry identify a related external lookup and narrow the affected scope.", kind: "finding" },
    { time: "09:38", title: "Containment recommended", detail: "The endpoint is isolated, volatile evidence is preserved, and the case is escalated with a concise evidence summary.", kind: "outcome" },
  ] satisfies TimelineItem[],
  outcome: "The scenario demonstrates evidence-led escalation: validate the alert, establish identity and device context, correlate endpoint and network signals, then contain without overstating certainty.",
};
