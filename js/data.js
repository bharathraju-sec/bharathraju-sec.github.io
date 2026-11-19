/**
 * PORTFOLIO DATA — the only file you need to edit to update the site.
 *
 * - Text wrapped in **double asterisks** is shown in bold / highlighted.
 * - In tag lists, start a tag with "*" to mark it as a core skill (green outline),
 *   e.g. "*Python".
 * - Icons are names from the ICONS list in js/render.js:
 *   network, search, shield, shieldCheck, terminal, alert, chip, tool, code, mic, pin.
 * - Order in each array = order on the page (most recent first).
 */
window.PORTFOLIO = {

  /* ── Identity & links ─────────────────────────── */
  person: {
    firstLine: "Bharath Raju",
    secondLine: "Subramani",
    fullName: "Bharath Raju Subramani",
    roles: ["Cybersecurity", "Network Engineering", "AI Security"],
    status: "Sydney, NSW · Open to security roles",   // set to "" to hide the badge
    tagline: "From routers to AI agents — I secure the infrastructure businesses actually run on.",
    taglineStrong: "Three years in enterprise networks, now focused on security.",
    location: "Sydney, NSW",
    email: "bharathrarazu14396@gmail.com",
    linkedin: "https://linkedin.com/in/rajubha",
    github: "https://github.com/bharathraju-sec",
    resume: "resume.pdf",
    terminalUser: "bharath@sec:~$",
  },

  /* ── Hero terminal (typed out line by line) ───── */
  terminal: [
    { cmd: "whoami",          out: "Bharath Raju Subramani" },
    { cmd: "cat role.txt",    out: "Field Network Engineer @ ENbridge IT\nM.IT Cyber Security — Macquarie Uni" },
    { cmd: "ls focus/",       out: "network-security/   incident-response/\nthreat-intel/       agentic-ai-security/" },
    { cmd: "cat certs.txt",   out: "CEH · CCNA · Google Cybersecurity", warn: true },
    { cmd: "echo $LOCATION",  out: "Sydney, NSW" },
  ],

  /* ── Stats row (numbers count up) ─────────────── */
  stats: [
    { value: 3,   suffix: "+", label: "Years in network engineering" },
    { value: 20,  suffix: "+", label: "Enterprise assignments" },
    { value: 150, suffix: "",  label: "Computers kept running" },
    { value: 6,   suffix: "",  label: "Certifications & training" },
  ],

  /* ── What I do ────────────────────────────────── */
  focus: {
    label: "What I do",
    title: "Three areas,", titleEm: "one goal",
    lede: "Keep the network trustworthy — whether the threat is a misconfigured edge router, a compromised account or a manipulated AI agent.",
    items: [
      { icon: "network", title: "Network Security",
        text: "Deploying, migrating and hardening enterprise networks — SD-WAN, firewalls, segmentation and secure decommissioning.",
        proof: "**20+** enterprise assignments across banking, government & retail" },
      { icon: "search", title: "Incident Response & Threat Intel",
        text: "Reconstructing attacker activity from logs and evidence, then planning containment, recovery and regulatory response.",
        proof: "Aligned to **NIST SP 800-61** · **MITRE ATT&CK**" },
      { icon: "shieldCheck", title: "Agentic AI Security",
        text: "Guardrails for AI agents that use tools — policy enforcement, tool authorisation and defences against indirect prompt injection.",
        proof: "Major project: **AgentOne** · Macquarie University" },
    ],
  },

  /* ── About ────────────────────────────────────── */
  about: {
    title: "Hands-on with the network.", titleEm: "Focused on security.",
    paragraphs: [
      "I'm a **Cybersecurity postgraduate from Macquarie University** with over three years of professional experience in enterprise network engineering and network security across India and Australia.",
      "Today I work onsite as a field network engineer in Sydney, delivering SD-WAN migrations, deployments and circuit upgrades for banking, government, retail and corporate clients — often as the only engineer in the room, coordinating with remote teams and carriers.",
      "I started in customer-facing sales before moving into engineering, so I pair technical depth with **commercial awareness, risk thinking and clear stakeholder communication**.",
    ],
    facts: [
      ["Now",   "Field Network Engineer, ENbridge IT"],
      ["Study", "M.IT Cyber Security, Macquarie"],
      ["Base",  "Sydney, NSW 🇦🇺"],
      ["Certs", "CEH · CCNA · Google Cybersecurity"],
      ["Stack", "Cisco · Aruba · VeloCloud · Kali · Python"],
      ["Into",  "CTFs, IR, LLM & agent security"],
    ],
  },

  /* ── Experience (set compact: true for a one-line entry) ── */
  experience: [
    {
      role: "Field Network Engineer", company: "ENbridge IT Services",
      period: "05/2026 — Present", location: "Sydney, NSW", current: true,
      highlight: { label: "IMPACT", text: "Caught an asset-identification discrepancy during decommissioning, preventing removal of the wrong network equipment." },
      bullets: [
        "Delivered 20+ enterprise infrastructure assignments across banking, government, retail and corporate environments — SD-WAN migrations, network deployments and circuit upgrades.",
        "Installed, migrated and troubleshot Cisco ISR, HPE Aruba EdgeConnect and VMware VeloCloud for secure connectivity and service continuity.",
        "Worked independently onsite, coordinating with remote engineering teams, AT&T DTAC and client stakeholders to close out deliverables.",
      ],
      tags: ["SD-WAN", "Cisco ISR", "Aruba EdgeConnect", "VMware VeloCloud", "Secure decommissioning"],
    },
    {
      role: "Network Engineer", company: "VNews24 Kannada",
      period: "09/2021 — 06/2024", location: "Bengaluru, India",
      highlight: { label: "SCALE", text: "Kept a live broadcast newsroom online — ~100 staff, 150 computers and eight Windows Servers — with a two-person team." },
      bullets: [
        "Administered Cisco firewalls, routers, switches and load balancers to support network security and availability.",
        "Resolved connectivity issues, hardware faults and performance problems to minimise disruption to broadcast operations.",
        "Ran hardware replacements, firmware upgrades and infrastructure improvements to strengthen security and business continuity.",
      ],
      tags: ["Cisco firewalls", "Routing & switching", "Load balancing", "Windows Server", "Firmware patching"],
    },
    {
      role: "Sales Executive", company: "TVS – Prakruthi Mobikes",
      period: "08/2014 — 04/2017", location: "Bengaluru", compact: true,
      summary: "Hit monthly targets in an eight-person team and built lasting customer relationships — where I learned to explain things clearly and own outcomes.",
    },
  ],

  /* ── Projects (the first one with featured: true gets the big card + diagram) ── */
  projects: [
    {
      featured: true,
      kind: "AI Security · Major Project · 2026",
      title: "AgentOne",
      meta: "Agentic AI Penetration Testing · Macquarie University",
      story: [
        ["Problem",    "AI agents that read untrusted content and call tools can be hijacked by instructions hidden in that content."],
        ["What I did", "Co-developed a prototype with policy enforcement, tool authorisation and runtime safeguards against indirect prompt injection."],
        ["Result",     "Tested through controlled attack simulations, documenting blocked attacks, legitimate task outcomes and system limitations."],
      ],
      tags: ["*Prompt injection", "*Tool authorisation", "LLM security", "Guardrails", "Python"],
      diagram: {
        label: "Diagram: untrusted content enters the agent; a policy and tool-authorisation gate allows legitimate tool calls and blocks injected ones.",
        steps: [
          { text: "Untrusted web page / doc", tag: "input" },
          { text: "LLM agent plans a tool call", tag: "agent" },
          { text: "Policy + tool authorisation", tag: "guardrail", gate: true },
        ],
        allow: { text: "✓ Allowed task", tag: "run" },
        block: { text: "✕ Injected action", tag: "block" },
        caption: "// every tool call is checked against policy before it runs",
      },
    },
    {
      kind: "DFIR · Simulated Investigation · 2026",
      title: "Cyber Incident Investigation & Response",
      meta: "Macquarie University",
      flow: ["Infostealer", "Stolen creds", "Account takeover", "Contain & recover"],
      story: [
        ["What I did", "Analysed authentication logs, audit records and digital evidence to reconstruct attacker activity and assess data exposure."],
        ["Result",     "An incident response plan covering containment, recovery, evidence preservation and Australian regulatory obligations."],
      ],
      tags: ["*Incident response", "Log analysis", "NIST SP 800-61", "MITRE ATT&CK"],
    },
    {
      kind: "Network Security · Independent · 2026 –",
      title: "EdgeClosure", badge: "In progress",
      meta: "B2B network security platform · planning & architecture",
      flow: ["Read-only collect", "Signed evidence", "Validate controls", "Verify fix"],
      story: [
        ["Goal",   "Evidence-based security assessment for enterprise networks: validate controls, then prove remediation actually happened."],
        ["Design", "Read-only data collection, cryptographic evidence verification, secure access control and auditable workflows."],
      ],
      tags: ["*Architecture", "Cryptography", "Access control", "Audit trails"],
    },
    {
      kind: "AppSec Tool · Open source",
      title: "Password Strength Analyser",
      meta: "Client-side web app · JavaScript",
      flow: ["Keystroke", "Regex rules", "Score + entropy", "Crack-time estimate"],
      story: [
        ["What it does", "Scores a password live as you type — rewarding length and variety, penalising repeats, sequences, years and common or leetspeak passwords."],
        ["Detail",       "Calculates entropy and keyspace, estimates crack time across four attack scenarios (online throttled to offline GPU), and shows the exact rule behind every point. Nothing leaves the browser."],
      ],
      tags: ["*JavaScript", "Regex", "Entropy", "Jest tests"],
      link: { url: "https://github.com/bharathraju-sec/password-strength-analyser", text: "View source on GitHub ↗" },
    },
  ],

  earlierProjects: [
    { icon: "mic", title: "Speech Emotion Detection",
      text: "ML system that classifies emotion from speech — MFCC and spectral features with Librosa, a deep-learning classifier, and a Flask interface for real-time prediction.",
      tags: ["Python", "Librosa", "Deep learning", "Flask"] },
    { icon: "pin", title: "Smart Campus Navigation",
      text: "Mobile app for finding buildings and facilities on campus, with GPS routing, Google Maps search and a Firebase real-time backend.",
      tags: ["Mobile", "Google Maps API", "Firebase", "GPS"] },
  ],

  /* ── Skills ("*" = core) ──────────────────────── */
  skills: [
    { icon: "network",  name: "Networking",          tags: ["*SD-WAN", "*Routing & Switching", "*LAN/WAN", "*Network Troubleshooting", "TCP/IP", "VLANs", "Subnetting", "DNS", "DHCP", "VPNs", "Load Balancing"] },
    { icon: "terminal", name: "Enterprise tech",     tags: ["*Cisco ISR", "*Cisco Firewalls", "*HPE Aruba EdgeConnect", "*VMware VeloCloud", "Cisco Switches", "Windows Server"] },
    { icon: "shield",   name: "Network security",    tags: ["*Firewall Administration", "*Secure Decommissioning", "Access Control", "Network Segmentation", "Security Patching"] },
    { icon: "alert",    name: "Cybersecurity",       tags: ["*Incident Response", "*Vulnerability Assessment", "Penetration Testing", "Threat Modelling", "Security Risk Assessment", "Cryptography"] },
    { icon: "search",   name: "Security operations", tags: ["*Log Analysis", "Threat Intelligence", "Threat Analysis", "Security Monitoring", "SIEM Fundamentals"] },
    { icon: "chip",     name: "AI security",         tags: ["*Agentic AI Security", "*Prompt Injection", "*Tool Authorisation", "LLM Security", "Security Guardrails"] },
    { icon: "tool",     name: "Tools & frameworks",  tags: ["*Wireshark", "*Kali Linux", "Nmap", "Nessus", "Burp Suite", "Metasploit", "*MITRE ATT&CK", "NIST CSF 2.0", "NIST SP 800-61"] },
    { icon: "code",     name: "Code & platforms",    tags: ["*Python", "*Linux", "Java", "JavaScript", "SQL", "Git", "Docker", "VMware", "PostgreSQL", "REST APIs"] },
  ],

  /* ── Credentials ──────────────────────────────── */
  certifications: [
    { abbr: "CEH",  name: "Certified Ethical Hacker",                    issuer: "EC-Council",      key: true },
    { abbr: "CCNA", name: "Cisco Certified Network Associate",           issuer: "Cisco",           key: true },
    { abbr: "GCP",  name: "Google Cybersecurity Professional Certificate", issuer: "Google",        key: true },
    { abbr: "PY",   name: "Python Pro Bootcamp",                         issuer: "Programming" },
    { abbr: "FS",   name: "Full-Stack Web Development Bootcamp",         issuer: "Web development" },
    { abbr: "JV",   name: "Java Programming",                            issuer: "Programming" },
  ],
  education: [
    { period: "2025 — 2026", degree: "Master of Information Technology — Cyber Security", school: "Macquarie University · Sydney, Australia" },
  ],
  activities: [
    "Capture the Flag challenges, cybersecurity research and technical presentations.",
    "Coordinated academic and technical events — team roles, schedules, logistics and stakeholders.",
  ],

  /* ── Contact ──────────────────────────────────── */
  contact: {
    lede: "Hiring for a security, SOC or network security role in Australia — or want to talk agentic AI security? My inbox is open.",
  },
};
