import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyPage } from "@/components/portfolio/CaseStudyPage";
import { recoveryCaseStudy } from "@/data/case-studies";

export const Route = createFileRoute("/case-studies/encrypted-recovery")({
  head: () => ({ meta: [
    { title: "Encrypted App Data Recovery Framework — Roshan Muttath Francis" },
    { name: "description", content: "Case study of a forensic analysis platform integrating Volatility, ALEAPP, YARA, automated workflows, and multi-format reporting." },
    { property: "og:title", content: "Encrypted App Data Recovery Framework — Case Study" },
    { property: "og:description", content: "A forensic engineering case study covering evidence processing, memory and mobile analysis, detections, and reporting." },
    { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: () => <CaseStudyPage study={recoveryCaseStudy} next={{ label: "View SOC investigation", to: "/case-studies/soc-investigation" }} />,
});
