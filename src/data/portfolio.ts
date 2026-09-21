export const portfolioProfile = {
  name: "Roshan Muttath Francis",
  title: "IT Support & Systems Engineer",
  location: "Clondalkin, Dublin 22",
  summary:
    "Two years supporting Windows users across L1/L2 service desk, Microsoft Entra ID, Intune, device provisioning, and endpoint security alert triage. First Class Honours MSc in Cyber Security.",
  skills: [
    "L1/L2 Support", "Incident Troubleshooting", "Root-Cause Analysis", "TeamViewer",
    "Windows 10/11", "Microsoft 365", "Microsoft Entra ID", "Microsoft Intune",
    "Device Enrolment & Compliance", "Account & Access Management", "DNS", "Wi-Fi",
    "WebTitan", "Wireshark", "Datto EDR", "Huntress", "Wazuh", "Splunk", "ELK",
    "DataDog", "Suricata", "Snort", "PowerShell", "Python", "Bash", "Linux", "AWS",
    "Docker", "Git",
  ],
  experience: {
    company: "HexaMeta Technologies",
    role: "IT Support & Security Engineer",
    period: "May 2022 – May 2024",
    highlights: [
      "Delivered L1/L2 support for Windows hardware, software, accounts, applications, and connectivity.",
      "Managed Microsoft Entra ID accounts, access, device registration, and authentication troubleshooting.",
      "Supported Intune enrolment, configuration, compliance, and device provisioning.",
      "Triaged Datto EDR and Huntress alerts, remediating or escalating confirmed issues.",
      "Investigated Wi-Fi, DNS, WebTitan, and endpoint issues using structured root-cause analysis.",
    ],
  },
  project: {
    name: "Encrypted App Data Recovery Framework",
    type: "MSc thesis project",
    period: "May 2025 – Aug 2025",
    description:
      "A full-stack forensic analysis platform integrating Volatility, ALEAPP, and YARA into an automated evidence-processing workflow with PDF, CSV, and JSON reporting.",
    tools: ["Python", "FastAPI", "React", "Node.js", "MongoDB", "Docker", "PyTest", "Volatility", "ALEAPP", "YARA"],
  },
  education: [
    "MSc Cyber Security, First Class Honours — National College of Ireland (2024–2025)",
    "BCA — Rajagiri College of Management and Applied Sciences, India",
  ],
  certifications: [
    "Certified Network Security Practitioner — The SecOps Group (2025)",
    "Ethical Hacker — Cisco (2024)",
    "HackTheBox SOC Analyst Path (in progress)",
    "CompTIA PenTest+ — Udemy course completed",
  ],
} as const;

export const portfolioContext = JSON.stringify(portfolioProfile, null, 2);
