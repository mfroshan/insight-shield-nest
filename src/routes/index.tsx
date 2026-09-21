import { createFileRoute } from "@tanstack/react-router";
import socHero from "@/assets/soc-hero.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Roshan Muttath Francis — IT Support & Systems Engineer",
      },
      {
        name: "description",
        content:
          "IT Support & Systems Engineer specialising in Microsoft Entra ID, Intune, Windows endpoint security. First Class Honours MSc Cyber Security. Based in Dublin, Ireland.",
      },
      {
        property: "og:title",
        content: "Roshan Muttath Francis — IT Support & Systems Engineer",
      },
      {
        property: "og:description",
        content:
          "IT Support & Systems Engineer — Microsoft Entra ID, Intune, Windows, Endpoint Security. MSc Cyber Security (First Class Honours). Dublin, Ireland.",
      },
      { property: "og:type", content: "website" },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "project", label: "Project" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

const SKILL_GROUPS = [
  {
    title: "Support & Service Desk",
    items: [
      "L1/L2 Support",
      "Incident Troubleshooting",
      "Root-Cause Analysis",
      "Remote Support (TeamViewer)",
      "Technical Documentation",
      "Escalation",
      "Customer Service",
    ],
  },
  {
    title: "Microsoft & Endpoint",
    items: [
      "Windows 10/11",
      "Microsoft 365",
      "Microsoft Entra ID (Azure AD)",
      "Microsoft Intune",
      "Device Enrolment & Compliance",
      "Account & Access Management",
      "Device Provisioning",
    ],
  },
  {
    title: "Networking",
    items: [
      "DNS",
      "Wi-Fi & Connectivity Troubleshooting",
      "WebTitan DNS Filtering",
      "Wireshark",
    ],
  },
  {
    title: "Security",
    items: [
      "Datto EDR",
      "Huntress",
      "Alert Investigation",
      "Log Analysis",
      "Wazuh",
      "Splunk",
      "ELK Stack",
      "DataDog",
      "Suricata",
      "Snort",
    ],
  },
  {
    title: "Scripting & Cloud",
    items: [
      "PowerShell",
      "Python",
      "Bash",
      "Linux",
      "AWS (IAM, EC2, CloudWatch)",
      "Docker",
      "Git",
    ],
  },
];

const EXPERIENCE_BULLETS = [
  "Provided L1/L2 service desk support to Windows users, resolving tickets per week across hardware, software, operating systems, applications, accounts and connectivity by phone, email and remote sessions (TeamViewer).",
  "Managed user accounts and access in Microsoft Entra ID (Azure AD): account creation, access management, device registration and authentication troubleshooting.",
  "Enrolled and supported devices in Microsoft Intune, applying configuration and compliance policies and troubleshooting enrolment failures.",
  "Provisioned and configured laptops for new starters, including user accounts, applications and required access.",
  "Monitored Datto EDR and Huntress alerts, investigated suspicious activity, and remediated or escalated confirmed issues to senior technical staff.",
  "Diagnosed Wi-Fi, DNS and connectivity faults using structured root-cause analysis; resolved website access issues under WebTitan DNS filtering by isolating policy, DNS, endpoint or network causes.",
  "Explained technical fixes clearly to users at all levels of technical knowledge and worked with the wider IT team to resolve complex issues.",
];

const CERTS = [
  "Certified Network Security Practitioner (CNSP), The SecOps Group (2025)",
  "Ethical Hacker, Cisco (2024)",
  "HackTheBox SOC Analyst Path (in progress)",
  "CompTIA PenTest+ (Udemy course completed)",
];

function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight text-foreground"
        >
          Roshan<span className="text-accent">.</span>
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-24"
    >
      <img
        src={socHero}
        alt="Security operations centre with threat monitoring dashboards"
        width={1920}
        height={1088}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--color-background)_5%,color-mix(in_oklab,var(--color-background)_80%,transparent)_45%,color-mix(in_oklab,var(--color-background)_35%,transparent)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(to_bottom,transparent,var(--color-background))]" />
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-40" />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--color-primary) 60%, transparent), transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Open to IT Support roles · Dublin, Ireland
        </span>
        <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-7xl lg:text-8xl">
          Roshan Muttath
          <br />
          <span className="text-primary">Francis</span>
        </h1>
        <p className="mt-6 max-w-2xl font-display text-lg font-medium text-muted-foreground sm:text-2xl">
          IT Support & Systems Engineer —{" "}
          <span className="text-foreground">
            Microsoft Entra ID · Intune · Windows · Endpoint Security
          </span>
        </p>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Two years supporting Windows users at HexaMeta Technologies across
          service desk, account & access management, Intune enrolment and
          endpoint alert triage. First Class Honours MSc in Cyber Security.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#project"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border bg-card/50 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Contact me
          </a>
        </div>
        <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <a
            href="mailto:mfroshan@outlook.com"
            className="transition-colors hover:text-accent"
          >
            mfroshan@outlook.com
          </a>
          <span className="text-border">·</span>
          <span>+353 89 409 4677</span>
          <span className="text-border">·</span>
          <a
            href="https://linkedin.com/in/connectwithroshan"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            linkedin.com/in/connectwithroshan
          </a>
          <span className="text-border">·</span>
          <a
            href="https://iroshan.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            iroshan.netlify.app
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ children }: { children: string }) {
  return (
    <div className="section-rule mb-10">
      <h2 className="font-display text-2xl font-bold uppercase tracking-[0.04em] text-primary sm:text-3xl">
        {children}
      </h2>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading>About</SectionHeading>
      <div className="grid gap-10 md:grid-cols-[1.6fr_1fr]">
        <p className="text-lg leading-relaxed text-foreground/90">
          IT support and systems professional with{" "}
          <span className="text-accent">2 years' experience</span> supporting
          Windows users at HexaMeta Technologies: first- and second-line service
          desk support, Microsoft Entra ID (Azure AD) account and access
          management, Intune device enrolment and compliance, and device
          provisioning. Triaged Datto EDR and Huntress endpoint alerts and
          escalated confirmed issues.{" "}
          <span className="text-accent">
            First Class Honours MSc in Cyber Security.
          </span>{" "}
          Eligible to work full-time in Ireland.
        </p>
        <div className="rounded-2xl border border-border bg-card/50 p-6">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Location
          </p>
          <p className="mt-1 font-medium text-foreground">Clondalkin, Dublin 22</p>
          <p className="mt-5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Focus
          </p>
          <p className="mt-1 font-medium text-foreground">
            Endpoint & Identity
          </p>
          <p className="mt-5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Education
          </p>
          <p className="mt-1 font-medium text-foreground">
            MSc Cyber Security — 1.1
          </p>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="border-y border-border/60 bg-card/20">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading>Skills</SectionHeading>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-border bg-background/40 p-6 transition-colors hover:border-primary/60"
            >
              <h3 className="font-display text-base font-semibold text-foreground">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading>Experience</SectionHeading>
      <div className="relative border-l-2 border-primary/30 pl-8">
        <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-accent" />
        <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-display text-xl font-semibold text-foreground">
            IT Support & Security Engineer
          </h3>
          <span className="text-sm font-medium text-muted-foreground">
            May 2022 – May 2024
          </span>
        </div>
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.12em] text-primary">
          HexaMeta Technologies
        </p>
        <ul className="space-y-4">
          {EXPERIENCE_BULLETS.map((bullet, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span className="leading-relaxed text-foreground/90">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Project() {
  return (
    <section id="project" className="border-y border-border/60 bg-card/20">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading>Project</SectionHeading>
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-2xl border border-border bg-background/40 p-8">
            <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
              MSc Thesis
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold text-foreground">
              Encrypted App Data Recovery Framework
            </h3>
            <p className="mt-1 text-sm font-medium text-muted-foreground">
              Forensic Analysis Platform · May 2025 – Aug 2025
            </p>
            <p className="mt-5 leading-relaxed text-foreground/90">
              Designed and built a full-stack platform that automates forensic
              evidence processing, integrating Volatility, ALEAPP and YARA into
              one analysis workflow.
            </p>
            <ul className="mt-5 space-y-3">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span className="leading-relaxed text-foreground/90">
                  Built FastAPI REST APIs with authentication and role-based
                  access control, a React front end and MongoDB storage;
                  containerised with Docker and tested with PyTest.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span className="leading-relaxed text-foreground/90">
                  Generated automated PDF, CSV and JSON reports to communicate
                  investigation results.
                </span>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-background/40 p-8">
            <h4 className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Tech Stack
            </h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Python",
                "FastAPI",
                "React",
                "Node.js",
                "MongoDB",
                "Docker",
                "PyTest",
                "Volatility",
                "ALEAPP",
                "YARA",
              ].map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading>Education & Certifications</SectionHeading>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card/40 p-6">
          <p className="text-sm font-medium text-primary">
            Sep 2024 – Nov 2025
          </p>
          <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
            MSc Cyber Security
          </h3>
          <p className="text-sm text-muted-foreground">
            National College of Ireland, Dublin
          </p>
          <p className="mt-3 inline-block rounded-full bg-accent/15 px-3 py-1 text-sm font-semibold text-accent">
            First Class Honours (1.1)
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-card/40 p-6">
          <p className="text-sm font-medium text-primary">
            Aug 2020 – May 2023
          </p>
          <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
            BCA (Computer Applications)
          </h3>
          <p className="text-sm text-muted-foreground">
            Rajagiri College of Management and Applied Sciences, India
          </p>
          <p className="mt-3 inline-block rounded-full bg-accent/15 px-3 py-1 text-sm font-semibold text-accent">
            First Class Honours (1.1)
          </p>
        </div>
      </div>
      <div className="mt-8 rounded-2xl border border-border bg-background/40 p-6">
        <h3 className="font-display text-base font-semibold uppercase tracking-[0.04em] text-primary">
          Certifications & Training
        </h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {CERTS.map((cert) => (
            <li key={cert} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span className="text-sm leading-relaxed text-foreground/90">
                {cert}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-border/60 bg-card/20">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading>Contact</SectionHeading>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Let's connect.
            </p>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
              Open to IT support and systems engineering opportunities in
              Ireland. Reach out by email, phone, or LinkedIn — I'd be glad to
              talk.
            </p>
            <a
              href="mailto:mfroshan@outlook.com"
              className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Email me
            </a>
          </div>
          <div className="grid gap-3">
            {[
              {
                label: "Email",
                value: "mfroshan@outlook.com",
                href: "mailto:mfroshan@outlook.com",
              },
              { label: "Phone", value: "+353 89 409 4677", href: "tel:+353894094677" },
              {
                label: "LinkedIn",
                value: "linkedin.com/in/connectwithroshan",
                href: "https://linkedin.com/in/connectwithroshan",
              },
              {
                label: "Website",
                value: "iroshan.netlify.app",
                href: "https://iroshan.netlify.app",
              },
              {
                label: "Location",
                value: "Clondalkin, Dublin 22",
                href: null,
              },
            ].map((row) => (
              <a
                key={row.label}
                href={row.href ?? "#"}
                className="flex items-center justify-between rounded-xl border border-border bg-background/40 px-5 py-4 transition-colors hover:border-primary/60"
                {...(row.href ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {row.label}
                </span>
                <span className="font-medium text-foreground">{row.value}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Roshan Muttath Francis
        </p>
        <p className="text-sm text-muted-foreground">
          IT Support & Systems Engineer · Dublin, Ireland
        </p>
      </div>
    </footer>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Project />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Portfolio;
