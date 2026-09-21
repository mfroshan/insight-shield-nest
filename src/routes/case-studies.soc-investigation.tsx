import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyPage } from "@/components/portfolio/CaseStudyPage";
import { socCaseStudy } from "@/data/case-studies";

export const Route = createFileRoute("/case-studies/soc-investigation")({
  head: () => ({ meta: [
    { title: "SOC Investigation Walkthrough — Roshan Muttath Francis" },
    { name: "description", content: "An anonymized SOC investigation case study covering endpoint, identity, DNS, process evidence, containment, and escalation." },
    { property: "og:title", content: "SOC Investigation Walkthrough — Case Study" },
    { property: "og:description", content: "A realistic, anonymized endpoint investigation from initial signal through containment decision." },
    { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: () => <CaseStudyPage study={socCaseStudy} next={{ label: "View forensic framework", to: "/case-studies/encrypted-recovery" }} />,
});
