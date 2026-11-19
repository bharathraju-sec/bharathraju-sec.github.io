/**
 * PORTFOLIO DATA — the only file you need to edit to update the site.
 *
 * - Text wrapped in **double asterisks** is shown in bold / highlighted.
 * - In tag lists, start a tag with "*" to mark it as a core skill (amber outline),
 *   e.g. "*Python".
 * - Icons are names from the ICONS list in js/render.js:
 *   network, search, shield, shieldCheck, terminal, alert, chip, tool, code, mic, pin, people.
 * - Journey icons (career path graphic): sales, router, cap, field, target.
 * - Project header art: art: "chain" | "verify" | "meter" | "identity" (drawn in js/graphics.js).
 * - Project `status` shows as a small badge. Keep documented results separate from plans.
 * - Tool logos: keys from js/logos.js (wireshark, kalilinux, cisco, python, …).
 * - Order in each array = order on the page (most recent first).
 */
window.PORTFOLIO = {

  /* ── Identity & links ─────────────────────────── */
  person: {
    firstLine: "Bharath Raju",
    secondLine: "Subramani",
    fullName: "Bharath Raju Subramani",
    roles: ["Cybersecurity", "Network Engineering", "AI Security"],
    status: "Sydney, NSW, Australia · Open to security roles",   // set to "" to hide the badge
    tagline: "From routers to AI agents — combining over three years of enterprise network engineering experience with cybersecurity, incident response and emerging AI security research.",
    taglineStrong: "",
    location: "Sydney, NSW, Australia",
    email: "bharathrarazu14396@gmail.com",
    linkedin: "https://www.linkedin.com/in/bharathrajusubramani/",
    github: "https://github.com/bharathraju-sec",
    resume: "resume.pdf",
    terminalUser: "bharath@sec:~$",
  },

  /* ── Terminal (types out in the About section) ── */
  terminal: [
    { cmd: "whoami",          out: "Bharath Raju Subramani" },
    { cmd: "cat role.txt",    out: "Field Network Engineer @ ENbridge IT\nM.IT Cyber Security — Macquarie Uni" },
    { cmd: "ls focus/",       out: "network-security/   incident-response/\nthreat-intel/       agentic-ai-security/" },
    { cmd: "cat certs.txt",   out: "CEH · CCNA · Google Cybersecurity", warn: true },
    { cmd: "cat stack.txt",   out: "Cisco · Aruba · VeloCloud · Kali · Python" },
    { cmd: "echo $LOCATION",  out: "Sydney, NSW" },
  ],

  /* ── Career path graphic (left → right). icon: sales, router, cap, field, target ── */
  journey: [
    { year: "2014–2017", title: "Sales Executive",        org: "TVS – Prakruthi Mobikes", icon: "sales" },
    { year: "2017–2021", title: "B.Tech Computer Science", org: "Himalayan University",   icon: "cap" },
    { year: "2021–2024", title: "Network Engineer",       org: "VNews24 Kannada",         icon: "router" },
    { year: "2025–2026", title: "M.IT Cyber Security",    org: "Macquarie University",    icon: "cap" },
    { year: "2026–now",  title: "Field Network Engineer", org: "ENbridge IT Services",    icon: "field", current: true },
    { year: "Interest",  title: "Security roles",         org: "SOC · NetSec · AI security", icon: "target", next: true },
  ],

  /* ── Logo wall in the Skills section. logo = a key in js/logos.js (leave out for a text tile) ── */
  tools: [
    { logo: "wireshark",  name: "Wireshark" },
    { logo: "kalilinux",  name: "Kali Linux" },
    { logo: "cisco",      name: "Cisco" },
    { logo: "burpsuite",  name: "Burp Suite" },
    { logo: "metasploit", name: "Metasploit" },
    { name: "Nmap", mono: "NM" },
    { name: "Nessus", mono: "NS" },
    { name: "Aruba EdgeConnect", mono: "AR" },
    { name: "VeloCloud", mono: "VC" },
    { logo: "python",     name: "Python" },
    { logo: "linux",      name: "Linux" },
    { logo: "docker",     name: "Docker" },
    { logo: "git",        name: "Git" },
    { logo: "vmware",     name: "VMware" },
    { logo: "postgresql", name: "PostgreSQL" },
    { name: "SQL", mono: "SQ" },
  ],

  /* ── Stats row (shows final values; counts up when scrolled into view) ── */
  stats: [
    { value: 3,   suffix: "+", label: "Years of professional experience" },
    { value: 20,  suffix: "+", label: "Enterprise assignments delivered" },
    { value: 150, suffix: "",  label: "Computers supported" },
    { value: 6,   suffix: "",  label: "Certifications & training" },
  ],

  /* ── What I do ────────────────────────────────── */
  focus: {
    label: "What I do",
    title: "Three areas,", titleEm: "one goal",
    lede: "Keep the network trustworthy — whether the threat is a misconfigured edge router, a compromised account or a manipulated AI agent.",
    items: [
      { icon: "network", title: "Enterprise Network Security",
        text: "Secure infrastructure deployment, SD-WAN, firewall administration, network segmentation, network troubleshooting and secure decommissioning.",
        proof: "**20+** infrastructure assignments across banking, government, retail and corporate environments" },
      { icon: "search", title: "Incident Response & Threat Intelligence",
        text: "Evidence-based incident investigation, log analysis, adversary behaviour analysis, security monitoring and coordinated incident response.",
        proof: "Academic work aligned with **MITRE ATT&CK** and **NIST SP 800-61**" },
      { icon: "shieldCheck", title: "Agentic AI Security",
        text: "Security controls for LLM-powered agents, including policy enforcement, tool authorisation and safeguards against indirect prompt injection.",
        proof: "**AgentOne** · Macquarie University major project" },
    ],
  },

  /* ── About ────────────────────────────────────── */
  about: {
    title: "Hands-on with the network.", titleEm: "Focused on security.",
    paragraphs: [
      "I'm a **cybersecurity postgraduate from Macquarie University** with over three years of professional experience in enterprise network engineering across Australia and India.",
      "Currently a Field Network Engineer at ENbridge IT Services, I've delivered 20+ enterprise infrastructure assignments involving SD-WAN, network deployments and secure infrastructure operations.",
      "My technical focus spans **network security, incident response, threat intelligence and agentic AI security**, combining hands-on engineering experience with security research, commercial awareness and independent project development.",
    ],
  },

  /* ── Experience (set compact: true for a one-line entry) ── */
  experience: [
    {
      role: "Field Network Engineer", company: "ENbridge IT Services",
      period: "05/2026 — Present", location: "Sydney, NSW", current: true,
      highlight: { label: "IMPACT", text: "Identified and resolved an asset serial number discrepancy during infrastructure decommissioning, preventing the potential removal of incorrect network equipment." },
      bullets: [
        "Delivered 20+ enterprise infrastructure assignments across banking, government, retail and corporate environments, including SD-WAN migrations, network deployments and circuit upgrades.",
        "Installed, migrated and troubleshot Cisco ISR, HPE Aruba EdgeConnect and VMware VeloCloud infrastructure, supporting secure connectivity and service continuity.",
        "Coordinated independently with remote engineering teams, AT&T DTAC and client stakeholders to resolve technical issues, perform secure device resets and complete project deliverables.",
      ],
      tags: ["SD-WAN", "Cisco ISR", "HPE Aruba EdgeConnect", "VMware VeloCloud", "Network Troubleshooting", "Secure Device Decommissioning"],
    },
    {
      role: "Network Engineer", company: "VNews24 Kannada",
      period: "09/2021 — 06/2024", location: "Bengaluru, India",
      highlight: { label: "SCALE", text: "Maintained network and server infrastructure supporting approximately 100 employees, 150 computers and 8 Windows Servers, ensuring reliable broadcast operations." },
      bullets: [
        "Administered Cisco firewalls, routers, switches and load balancer infrastructure, supporting network security and service availability.",
        "Resolved connectivity issues, hardware faults and network performance problems, minimising operational disruptions.",
        "Collaborated within a 2-member technical team to deliver hardware replacements, firmware upgrades and infrastructure improvements, strengthening security and business continuity.",
      ],
      tags: ["Cisco Firewalls", "Routing & Switching", "Windows Server", "Load Balancing", "Firmware Upgrades", "Network Security"],
    },
    {
      role: "Sales Executive", company: "TVS – Prakruthi Mobikes",
      period: "08/2014 — 04/2017", location: "Bengaluru", compact: true,
      // "100% of monthly targets" is on the résumé; kept out here until confirmed (see handover brief §4)
      summary: "Consistently achieved monthly sales targets while acquiring new customers through product consultations, and collaborated within an 8-member team to resolve customer enquiries and improve service delivery.",
    },
  ],

  /* ── Featured cybersecurity projects (first featured: true gets the big card + diagram) ── */
  projects: [
    {
      featured: true,
      kind: "AI Security · Macquarie University major project · 2026",
      title: "AgentOne", badge: "Research prototype",
      meta: "Agentic AI Penetration Testing · collaborative academic research prototype",
      story: [
        ["Summary",     "An agentic AI security research prototype investigating indirect prompt injection and unauthorised tool execution in LLM-powered autonomous systems."],
        ["Contribution", "Collaborated on policy enforcement, tool authorisation and runtime security safeguards, separating task planning from policy enforcement."],
        ["Documented results", "Two demonstrations: a baseline run, and an adversarial run where the unauthorised action was blocked but the legitimate summary task failed."],
        ["Limitations", "A research prototype — not a comprehensive prompt-injection defence, production-ready or statistically validated."],
      ],
      tags: ["*Agentic AI Security", "*Prompt Injection", "*Tool Authorisation", "LLM Security", "Policy Enforcement", "Python"],
      diagram: {
        label: "Conceptual diagram: untrusted content enters the agent; a policy and tool-authorisation gate allows authorised actions and denies unauthorised ones.",
        steps: [
          { text: "Untrusted email / documents", tag: "input" },
          { text: "LLM agent / planner", tag: "agent" },
          { text: "Policy + tool authorisation", tag: "guardrail", gate: true },
        ],
        allow: { text: "✓ Authorised action", tag: "allow" },
        block: { text: "✕ Unauthorised action", tag: "deny" },
        caption: "// conceptual flow · tool calls are checked against policy before they run",
      },
    },
    {
      kind: "DFIR · Simulated academic investigation · 2026",
      title: "Cyber Incident Investigation & Response", badge: "Academic case study",
      meta: "Macquarie University · simulated scenario, not a real client engagement",
      art: "chain",
      flow: ["Infostealer", "Stolen creds", "Account takeover", "Contain & recover"],
      story: [
        ["What I did", "Investigated a simulated infostealer-driven account takeover, using authentication logs and audit records to reconstruct attacker activity."],
        ["Finding", "Audit records showed 412 export calls — potential exposure of approximately 41,200 candidate profiles."],
        ["Deliverable", "An incident response plan covering containment, recovery, evidence preservation, coordination and Australian regulatory obligations."],
      ],
      tags: ["*Incident Response", "Log Analysis", "Threat Intelligence", "MITRE ATT&CK", "NIST SP 800-61"],
    },
    {
      kind: "Network Security · Independent B2B product · 2026 –",
      title: "EdgeClosure", badge: "Planning & architecture",
      meta: "Evidence-based network security assessment · not yet implemented",
      art: "verify",
      flow: ["Read-only collect", "Evaluate", "Track fix", "Verify closure"],
      story: [
        ["Problem", "Closing a remediation ticket doesn't prove the underlying issue has been resolved."],
        ["Planned approach", "Authorised read-only evidence collection, vulnerability applicability analysis, deterministic decisions, cryptographically verifiable evidence and auditable closure."],
        ["Current stage", "Architecture, security requirements, threat modelling and MVP planning — planned capabilities are not implemented features."],
      ],
      tags: ["*Network Security", "Security Architecture", "Remediation Verification", "Cryptography", "Auditability"],
    },
    {
      kind: "Identity Security · Independent collaborative project · 2026 –",
      title: "DeceptID", badge: "Early development",
      meta: "AI-powered identity security platform · SecureFace-AI engineering project",
      art: "identity",
      flow: ["Consented camera", "Face + PAD", "Policy decision", "Audit"],
      story: [
        ["Summary", "Explores consent-aware biometric identification, presentation attack detection, deterministic access decisions and security auditing — keeping biometric evidence processing separate from authorisation."],
        ["Current stage", "Architecture definition and foundational synthetic camera testing have begun; full biometric functionality remains under development."],
        ["Target stack", "Python, FastAPI, SCRFD, ArcFace, PostgreSQL/pgvector, Ollama and Docker (planned, not all implemented)."],
      ],
      tags: ["*Identity Security", "Security Architecture", "Computer Vision", "Authentication", "AI Security", "PAD"],
    },
  ],

  /* ── Earlier and other software projects ── */
  earlierProjects: [
    { icon: "shield", title: "Password Strength Analyser", art: "meter", wide: true,
      text: "Client-side password security tool with real-time strength scoring, entropy calculation, pattern detection and estimated cracking times — nothing is sent to a server. Crack times are estimates based on stated assumptions, not guarantees.",
      tags: ["JavaScript", "HTML", "CSS", "Regex", "Jest"],
      link: { url: "https://github.com/bharathraju-sec/password-strength-analyser", text: "View source on GitHub ↗" } },
    { icon: "mic", title: "Speech Emotion Detection", art: "speech",
      text: "Machine learning project classifying emotion from speech audio using MFCC and spectral feature extraction, a deep-learning classifier and a Flask-based interface.",
      tags: ["Python", "Librosa", "Deep learning", "Flask"] },
    { icon: "pin", title: "Smart Campus Navigation", art: "campus",
      text: "Mobile campus navigation app helping users locate buildings and facilities through GPS location services, map search and campus routing, with a Firebase backend.",
      tags: ["Mobile", "Google Maps API", "GPS", "Firebase"] },
  ],

  /* ── Skills ("*" = core) ──────────────────────── */
  skills: [
    { icon: "network",  name: "Networking",          tags: ["*SD-WAN", "*Routing & Switching", "*LAN/WAN", "*Network Troubleshooting", "TCP/IP", "VLANs", "Subnetting", "DNS", "DHCP", "VPNs", "Load Balancing"] },
    { icon: "terminal", name: "Enterprise tech",     tags: ["*Cisco ISR", "*Cisco Firewalls", "*HPE Aruba EdgeConnect", "*VMware VeloCloud", "Cisco Switches", "Windows Server"] },
    { icon: "shield",   name: "Network security",    tags: ["*Firewall Administration", "*Secure Device Decommissioning", "Access Control", "Network Segmentation", "Security Patching"] },
    { icon: "alert",    name: "Cybersecurity",       tags: ["*Incident Response", "*Vulnerability Assessment", "Penetration Testing", "Threat Modelling", "Risk Assessment", "Cryptography", "Security Architecture"] },
    { icon: "search",   name: "Security operations", tags: ["*Log Analysis", "*MITRE ATT&CK", "Threat Intelligence", "Security Monitoring", "SIEM Fundamentals", "NIST CSF 2.0", "NIST SP 800-61"] },
    { icon: "chip",     name: "AI security",         tags: ["*Agentic AI Security", "*Prompt Injection", "*Tool Authorisation", "LLM Security", "Security Guardrails"] },
    { icon: "tool",     name: "Tools & platforms",   tags: ["*Wireshark", "*Kali Linux", "*Python", "*Linux", "Nessus", "Nmap", "Burp Suite", "Metasploit", "SQL", "Git", "Docker", "VMware", "PostgreSQL", "REST APIs"] },
    { icon: "people",   name: "Professional",        tags: ["Team Collaboration", "Project Delivery", "Client Relationship Management", "Stakeholder Communication", "Risk Awareness", "Issue Escalation", "Problem-Solving", "Technical Documentation"] },
  ],

  /* ── Credentials (training: true = course, shown separately from certifications) ── */
  certifications: [
    { abbr: "CEH",  name: "Certified Ethical Hacker",                      issuer: "EC-Council", key: true },
    { abbr: "CCNA", name: "Cisco Certified Network Associate",             issuer: "Cisco",      key: true },
    { abbr: "G",    name: "Google Cybersecurity Professional Certificate", issuer: "Google",     key: true },
    { abbr: "PY",   name: "Python Pro Bootcamp",                           issuer: "Training", training: true },
    { abbr: "FS",   name: "Full-Stack Web Development Bootcamp",           issuer: "Training", training: true },
    { abbr: "JV",   name: "Java Programming",                              issuer: "Training", training: true },
  ],
  education: [
    { period: "2025 — 2026", degree: "Master of Information Technology — Cyber Security", school: "Macquarie University · Sydney, Australia" },
    { period: "2017 — 2021", degree: "Bachelor of Technology — Computer Science", school: "Himalayan University · India" },
  ],
  activities: [
    "Participated in Capture the Flag challenges, cybersecurity research, technical presentations and collaborative security projects.",
    "Coordinated academic and technical events, managing team responsibilities, schedules, logistics and stakeholder communication.",
  ],

  /* ── Contact ──────────────────────────────────── */
  contact: {
    lede: "Hiring for a security, SOC or network security role in Australia — or want to talk agentic AI security? My inbox is open.",
    subject: "Hello Bharath — via your portfolio",   // pre-filled subject for Send email
  },
};
