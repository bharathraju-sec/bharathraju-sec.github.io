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
    roles: ["Cybersecurity Engineering", "Network Security", "Infrastructure & AI Security"],
    status: "Sydney, NSW, Australia · Open to security roles",   // set to "" to hide the badge
    tagline: "From enterprise networks to AI systems — combining over three years of hands-on network engineering experience with security architecture, secure infrastructure deployment, technical security testing and agentic AI security research.",
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
    { cmd: "ls focus/",       out: "network-security/          security-engineering/\nvulnerability-assessment/  agentic-ai-security/" },
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
    { year: "Interest",  title: "Security roles",         org: "NetSec · Security engineering · AI security", icon: "target", next: true },
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

  /* ── Stats row (static values; cards fade in, numbers never animate) ── */
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
    lede: "Secure the infrastructure, validate security controls and defend emerging AI-enabled systems.",
    items: [
      { icon: "network", title: "Enterprise Network Security",
        text: "Secure infrastructure deployment, SD-WAN, firewall administration, network segmentation, network troubleshooting and secure decommissioning.",
        proof: "**20+** infrastructure assignments across banking, government, retail and corporate environments" },
      { icon: "search", title: "Security Engineering & Testing",
        text: "Security architecture, vulnerability assessment, penetration testing, security control validation and technical problem-solving, supported by hands-on academic security testing and independent architecture work.",
        proof: "**EdgeClosure** · network security planning & architecture; vulnerability assessment and penetration testing coursework" },
      { icon: "shieldCheck", title: "Agentic AI & Identity Security",
        text: "Exploring security safeguards for LLM-powered agents and identity systems, including tool authorisation, prompt injection, deterministic access decisions and presentation attack detection research.",
        proof: "**AgentOne** · academic prototype; **DeceptID** · early development (PAD is planned, not yet demonstrated)" },
    ],
  },

  /* ── About ────────────────────────────────────── */
  about: {
    title: "Hands-on with the network.", titleEm: "Focused on security.",
    paragraphs: [
      "I'm a **cybersecurity postgraduate from Macquarie University** with over three years of professional experience in enterprise network engineering and security across Australia and India.",
      "Currently a Field Network Engineer at ENbridge IT Services, I've delivered 20+ enterprise infrastructure assignments involving SD-WAN, network deployments and secure infrastructure operations.",
      "My technical focus is **network security, security architecture, vulnerability assessment, penetration testing and agentic AI security**, combining hands-on engineering experience with security research and independent product development.",
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
      kind: "Network Security · Independent B2B product · 2026 –",
      title: "EdgeClosure", badge: "Planning & architecture",
      meta: "Evidence-based network security assessment · not yet implemented",
      flow: ["Read-only collect", "Evaluate", "Track fix", "Verify closure"],
      story: [
        ["Problem", "Closing a remediation ticket doesn't prove the underlying issue has been resolved."],
        ["Planned approach", "Authorised read-only evidence collection, vulnerability applicability analysis, deterministic decisions, cryptographically verifiable evidence and auditable closure."],
        ["Current stage", "Architecture, security requirements, threat modelling and MVP planning — planned capabilities are not implemented features."],
      ],
      tags: ["*Network Security", "*Security Architecture", "Remediation Verification", "Cryptography", "Auditability"],
      diagram: {
        label: "Planned architecture: read-only evidence is collected and evaluated deterministically; a remediation closes only when fresh evidence verifies it, otherwise it stays open.",
        steps: [
          { text: "Authorised read-only collection", tag: "evidence" },
          { text: "Deterministic security evaluation", tag: "decision" },
          { text: "Re-check after remediation", tag: "verify", gate: true },
        ],
        allow: { text: "✓ Closure verified", tag: "signed evidence" },
        block: { text: "✕ Issue persists", tag: "stays open" },
        caption: "// planned architecture · not yet implemented",
      },
    },
    {
      kind: "AI Security · Macquarie University major project · 2026",
      title: "AgentOne", badge: "Research prototype",
      meta: "Agentic AI Penetration Testing · collaborative academic research prototype",
      story: [
        ["Summary",     "An agentic AI security research prototype investigating indirect prompt injection and unauthorised tool execution in LLM-powered autonomous systems."],
        ["Contribution", "Collaborated on policy enforcement, tool authorisation and runtime security safeguards, separating task planning from policy enforcement."],
        ["Documented results", "Two demonstrations: a baseline run, and an adversarial run where the unauthorised action was blocked but the legitimate summary task failed."],
        ["Limitations", "A research prototype — not a comprehensive prompt-injection defence, production-ready or statistically validated."],
      ],
      flow: ["Untrusted input", "Agent planner", "Policy + tool gate", "Allow / deny"],
      tags: ["*Agentic AI Security", "*Prompt Injection", "*Tool Authorisation", "LLM Security", "Policy Enforcement", "Python"],
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
  ],

  /* ── Earlier and other software projects ── */
  earlierProjects: [
    { icon: "shield", title: "Password Strength Analyser", art: "meter", wide: true,
      text: "Client-side password security tool with real-time strength scoring, entropy calculation, pattern detection and estimated cracking times — nothing is sent to a server. Crack times are estimates based on stated assumptions, not guarantees.",
      tags: ["JavaScript", "HTML", "CSS", "Regex", "Jest"],
      link: [{ url: "https://github.com/bharathraju-sec/password-strength-analyser", text: "View source on GitHub ↗" },
             { url: "https://bharathraju-sec.github.io/password-strength-analyser/", text: "Live demo ↗" }] },
    { icon: "mic", title: "Speech Emotion Detection", art: "speech",
      text: "Machine learning project classifying emotion from speech audio using MFCC and spectral feature extraction, a deep-learning classifier and a Flask-based interface.",
      tags: ["Python", "Librosa", "Deep learning", "Flask"] },
    { icon: "pin", title: "Smart Campus Navigation", art: "campus",
      text: "GPS-based campus navigation app using Leaflet and OpenStreetMap, Firebase Realtime Database and shortest-path routing. The hybrid Cordova/PWA implementation includes campus search and offline-aware data handling.",
      tags: ["JavaScript", "Cordova", "Leaflet", "OpenStreetMap", "Firebase", "GPS", "Dijkstra"],
      link: [{ url: "https://github.com/bharathraju-sec/smart-campus-navigation", text: "View source on GitHub ↗" }] },
    { icon: "face", title: "Face Recognition with SVM", art: "faces",
      text: "B.Tech final-year academic project: webcam-based face enrolment, 128-dimensional face encodings and SVM training/evaluation, with known/unknown recognition from face encodings. Learning code without liveness detection; no face data or benchmark results published.",
      tags: ["Python", "OpenCV", "face_recognition", "scikit-learn", "SVM"],
      link: { url: "https://github.com/bharathraju-sec/face-recognition-svm", text: "View source on GitHub ↗" } },
  ],

  /* ── Skills ("*" = core) ──────────────────────── */
  skills: [
    { icon: "shield",   name: "Network security",    tags: ["*Firewall Administration", "*Secure Device Decommissioning", "Access Control", "Network Segmentation", "Security Patching"] },
    { icon: "terminal", name: "Enterprise technologies", tags: ["*Cisco Firewalls", "*Cisco ISR", "*HPE Aruba EdgeConnect", "*VMware VeloCloud", "Cisco Switches", "Windows Server"] },
    { icon: "network",  name: "Networking",          tags: ["*SD-WAN", "*Routing & Switching", "*Network Troubleshooting", "TCP/IP", "*LAN/WAN", "VLANs", "Subnetting", "DNS", "DHCP", "VPNs", "Load Balancing"] },
    { icon: "alert",    name: "Security engineering & testing", tags: ["*Security Architecture", "*Vulnerability Assessment", "Penetration Testing", "Threat Modelling", "Cryptography", "*Kali Linux", "*Wireshark", "Nessus", "Nmap", "Burp Suite", "Metasploit"] },
    { icon: "tool",     name: "Programming & platforms", tags: ["*Python", "SQL", "*Linux", "Git", "Docker", "VMware", "PostgreSQL", "REST APIs"] },
    { icon: "chip",     name: "AI security",         tags: ["*Agentic AI Security", "LLM Security", "*Prompt Injection", "*Tool Authorisation", "Security Guardrails"] },
    { icon: "search",   name: "Security operations & frameworks", tags: ["*Incident Response", "Threat Intelligence", "*Log Analysis", "Security Monitoring", "SIEM Fundamentals", "Risk Assessment", "*MITRE ATT&CK", "NIST CSF 2.0", "NIST SP 800-61"] },
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
    lede: "Hiring for network security, cybersecurity engineering or security infrastructure roles in Australia — or interested in technical AI security research? My inbox is open.",
    subject: "Hello Bharath — via your portfolio",   // pre-filled subject for Send email
  },
};
