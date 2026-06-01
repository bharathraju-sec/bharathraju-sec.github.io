/**
 * ╔══════════════════════════════════════════════════════╗
 * ║  PORTFOLIO DATA — Single Source of Truth             ║
 * ║  File: js/data.js                                    ║
 * ║                                                      ║
 * ║  ✏️  TO UPDATE YOUR PORTFOLIO:                        ║
 * ║  Edit ONLY this file. Every page auto-updates.       ║
 * ╚══════════════════════════════════════════════════════╝
 */

const RESUME = {

  /* ─────────────────────────────────────
     PERSONAL INFO
  ───────────────────────────────────── */
  name: {
    first: "Bharath",
    last:  "Raju Subramani",
    display: "Bharath Raju Subramani",
    short: "Bharath Raju",
  },

  tagline: "Network Engineer turned cybersecurity specialist. 4+ years building and securing enterprise infrastructure across India and Australia — now probing its defences. Focused on security operations, threat analysis, and penetration testing.",

  /*availability: {
    open: false,                          // true = green badge shows
    label: "Available for Internship",
    location: "Sydney, AU",
    startDate: "Immediately",
    workType: "On-site / Hybrid / Remote",
    focusAreas: "Pen Test · SOC · Net Sec",
  },
*/
  contact: {
    email:    "bharathrarazu14396@gmail.com",
    phone:    "+61 0415 049 930",
    linkedin: "linkedin.com/in/rajubha",
    linkedinUrl: "https://linkedin.com/in/rajubha",
    github:   "github.com/bharathraju-sec",
    githubUrl: "https://github.com/bharathraju-sec",
    location: "Sydney, NSW",
    locationNote: "Available for on-site, hybrid, or remote roles",
   
  },

  /* ─────────────────────────────────────
     STATS (shown on hero)
  ───────────────────────────────────── */
  stats: [
    { num: "4",  sup: "+", label: "Yrs Industry Exp." },
    { num: "10", sup: "+", label: "Security Tools"    },
    { num: "3",  sup: "",  label: "Major Projects"    },
    { num: "5",  sup: "",  label: "Languages"         },
  ],

  /* ─────────────────────────────────────
     EDUCATION
     Add more objects to this array for
     additional degrees / certifications.
  ───────────────────────────────────── */
  education: [
    {
      degree:      "Master of Information Technology — Cyber Security",
      institution: "Macquarie University",
      location:    "Sydney, NSW, Australia",
      period:      "2025 – Present",
      status:      "Currently Enrolled",   // shown as green badge
      icon:        "🎓",
    },
    // Example — uncomment to add a certification:
    // {
    //   degree:      "CompTIA Security+",
    //   institution: "CompTIA",
    //   location:    "Online",
    //   period:      "2025",
    //   status:      "Certified",
    //   icon:        "🏅",
    // },
  ],

  /* ─────────────────────────────────────
     WORK EXPERIENCE
     Add new roles at the top of the array
     (most recent first).
  ───────────────────────────────────── */
  experience: [
    {
      role:     "Field Network Engineer",
      company:  "ENbridge IT Services",
      location: "Sydney, NSW, Australia",
      period:   "May 2026 – Present",
      duration: "",
      current:  true,                   // shows green "Current Role" badge
      bullets: [
        "Provided on-site network engineering and technical support for enterprise infrastructure deployments across client and vendor environments.",
        "Installed, configured, upgraded, tested, and decommissioned network devices including routers, switches, firewalls, and related hardware.",
        "Assisted with network migrations, ISP coordination, connectivity validation, and troubleshooting to ensure smooth service activations.",
        "Performed secure device wiping, patch management, structured cabling, and hardware replacement in branch and data centre environments.",
        "Worked with field technicians and remote engineering teams to support implementation, maintenance, and operational tasks across multiple sites.",
      ],
      tags: ["Network Deployment", "ISP Coordination", "Firewalls", "Patch Management", "Data Centre", "Structured Cabling"],
    },
    {
      role:     "Network Engineer",
      company:  "VNews24 Kannada",
      location: "Bengaluru, India",
      period:   "Sep 2021 – Jun 2024",
      duration: "2 yrs 10 mos",
      current:  false,
      bullets: [
        "Designed, implemented, and optimised network infrastructure to improve system efficiency, reliability, and performance.",
        "Installed, configured, and maintained routers, switches, firewalls, and load balancers.",
        "Monitored network performance, troubleshot issues, and performed preventive maintenance to minimise downtime.",
        "Implemented network security measures, applied firmware updates and security patches to network equipment.",
        "Documented network configurations, procedures, and troubleshooting processes for operational reference.",
        "Provided technical support to end users and internal teams for network-related issues.",
        "Collaborated with IT teams to optimise network architecture and improve system performance.",
      ],
      tags: ["Routers & Switches", "Firewall Management", "Load Balancers", "Network Monitoring", "Security Patching", "TCP/IP", "VLANs", "Documentation"],
    },
    {
      role:     "Sales Executive",
      company:  "TVS — Prakruthi Mobikes",
      location: "Bengaluru, India",
      period:   "Aug 2014 – Apr 2017",
      duration: "2 yrs 9 mos",
      current:  false,
      bullets: [
        "Delivered exceptional customer service through detailed product information, promotions, and consultative solutions.",
        "Assisted customers throughout the purchasing process including product selection, inquiries, and transaction handling.",
        "Managed showroom operations including inventory tracking, merchandising, and store presentation.",
        "Conducted product demonstrations to highlight features, address concerns, and support sales conversions.",
        "Collaborated with team members to maintain operational efficiency and a positive customer experience.",
      ],
      tags: ["Customer Service", "Team Collaboration", "Inventory Management", "Consultative Sales"],
    },
  ],

  /* ─────────────────────────────────────
     PROJECTS
     Add new projects at the top of the
     array (most recent first).
  ───────────────────────────────────── */
  projects: [
    {
      num:      "PROJECT 01",
      title:    "Speech Emotion Detection System",
      featured: true,                   // spans 2 columns on projects page
      icon:     "🎙",
      desc:     "A machine learning system that classifies emotions from speech using audio signal processing. Built end-to-end from feature extraction to a deployed web interface for real-time prediction.",
      bullets: [
        "Extracted MFCC and spectral features from audio using Librosa.",
        "Trained deep learning models for multi-class emotion classification.",
        "Developed a Flask web interface for real-time emotion prediction from uploaded voice samples.",
        "Evaluated model performance using accuracy metrics and confusion matrix visualisation.",
      ],
      tags: ["Python", "Deep Learning", "Librosa", "Flask", "MFCC", "Audio Processing"],
      link: "",                         // ← add GitHub URL when available
    },
    {
      num:      "PROJECT 02",
      title:    "Password Strength Analyzer",
      featured: false,
      icon:     "🔑",
      desc:     "A security-focused tool evaluating password strength using regex-based validation and scoring algorithms.",
      bullets: [
        "Implemented checks for length, character diversity, and common vulnerability patterns.",
        "Built real-time web interface with actionable security feedback.",
        "Suggestions engine helps users create stronger passwords.",
      ],
      tags: ["Python", "Regex", "Web App", "Security", "Scoring Algorithm"],
      link: "",
    },
    {
      num:      "PROJECT 03",
      title:    "Smart Campus Navigation App",
      featured: false,
      icon:     "🗺",
      desc:     "A mobile application for campus navigation using GPS and Google Maps API with Firebase backend.",
      bullets: [
        "Implemented location-based routing and search features.",
        "Integrated Firebase to store and manage real-time campus location data.",
        "Helped users find buildings and facilities across campus.",
      ],
      tags: ["Mobile Dev", "Google Maps API", "Firebase", "GPS", "Real-time Data"],
      link: "",
    },
  ],

  /* ─────────────────────────────────────
     SKILLS
     Adjust percentages as you grow.
     Add new items to any category freely.
  ───────────────────────────────────── */
  skills: {
    security: [
      { name: "Penetration Testing",    pct: 85 },
      { name: "Vulnerability Analysis", pct: 80 },
      { name: "Ethical Hacking",        pct: 78 },
      { name: "Cryptography",           pct: 72 },
      { name: "Security Risk Assessment", pct: 75 },
    ],
    networking: [
      { name: "TCP/IP & Subnetting",  pct: 95 },
      { name: "VLANs & Routing",      pct: 92 },
      { name: "Firewall Management",  pct: 90 },
      { name: "Network Configuration",pct: 93 },
      { name: "ISP Coordination",     pct: 88 },
    ],
    programming: [
      { name: "Python",      pct: 80 },
      { name: "SQL",         pct: 72 },
      { name: "JavaScript",  pct: 65 },
      { name: "Java",        pct: 60 },
      { name: "Bash / Shell",pct: 70 },
    ],
    professional: [
      { name: "Problem Solving",        pct: 95 },
      { name: "Team Collaboration",     pct: 90 },
      { name: "Technical Documentation",pct: 88 },
      { name: "Adaptability",           pct: 92 },
    ],
    frameworks: [
      { name: "NIST Framework",  pct: 70 },
      { name: "OWASP Top 10",    pct: 75 },
      { name: "Risk Management", pct: 72 },
      { name: "Incident Response",pct: 68 },
    ],
  },

  /* ─────────────────────────────────────
     TOOLS (shown as icon cards)
  ───────────────────────────────────── */
  tools: [
    { icon: "🐉", name: "Kali Linux",  category: "Pen Testing OS"   },
    { icon: "📡", name: "Wireshark",   category: "Packet Analysis"  },
    { icon: "🕷",  name: "Burp Suite",  category: "Web Security"     },
    { icon: "💣", name: "Metasploit",  category: "Exploitation"     },
    { icon: "🔍", name: "Nessus",      category: "Vuln Scanner"     },
    { icon: "🗺",  name: "Nmap",        category: "Network Scanner"  },
    { icon: "💻", name: "VMware",      category: "Virtualisation"   },
    { icon: "🐙", name: "Git",         category: "Version Control"  },
  ],
  /* ─────────────────────────────────────
     certifications (shown on the right panel of index.html)
  ───────────────────────────────────── */
  certificates: [
  { name: "CEH", full: "Certified Ethical Hacker" },
  { name: "CCNA", full: "Cisco Certified Network Associate" },
  { name: "Python Pro Bootcamp", full: "Python Pro Bootcamp" },
  { name: "Java", full: "Java Certificate" },
  { name: "Google Cybersecurity Certificate", full: "Google Cybersecurity Certificate" },
  { name: "C/C++", full: "C/C++ Certificate" },
  { name: "Full-Stack Web Development Bootcamp", full: "Full-Stack Web Development Bootcamp" },
],

  /* ─────────────────────────────────────
     EXTRA-CURRICULAR
  ───────────────────────────────────── */
  extracurricular: [
    {
      icon:  "🏁",
      title: "Capture The Flag (CTF)",
      bullets: [
        "Participated in hands-on cybersecurity challenges covering vulnerability assessment, network reconnaissance, and incident investigation.",
        "Applied security concepts to identify vulnerabilities, analyse attack techniques, and recommend mitigation strategies.",
        "Collaborated with peers to solve technical challenges and document findings in structured reports.",
      ],
      tags: ["Vulnerability Assessment", "Network Recon", "Incident Investigation"],
    },
    {
      icon:  "🔬",
      title: "Cybersecurity Research",
      bullets: [
        "Researched cybersecurity threats, risk management frameworks, and network security practices.",
        "Contributed to technical reports and presentations covering vulnerability management and security governance.",
        "Explored emerging security technologies through practical projects and academic coursework.",
      ],
      tags: ["Risk Management", "Threat Research", "Security Governance"],
    },
    {
      icon:  "📋",
      title: "Event Coordination",
      bullets: [
        "Planned and coordinated academic and technical events while managing schedules, logistics, and team activities.",
        "Demonstrated leadership, communication, and teamwork in collaborative environments.",
      ],
      tags: ["Leadership", "Event Management", "Teamwork"],
    },
  ],

  languages: [
  { lang: "English",  level: "Professional", pct: 95  },
  { lang: "Hindi",    level: "Fluent",       pct: 90  },
  { lang: "Kannada",  level: "Native",       pct: 100 },
  { lang: "Tamil",    level: "Fluent",       pct: 85  },
  { lang: "Telugu",   level: "Fluent",       pct: 85  },
], 


  /* ─────────────────────────────────────
     HERO PANEL SKILLS
     (shown on the right panel of index.html)
  ───────────────────────────────────── */
  heroPanelSkills: [
    { name: "Penetration Testing",    sub: "Kali · Metasploit · Burp Suite", pct: 85 },
    { name: "Network Security",       sub: "Wireshark · Firewalls · VLANs",  pct: 93 },
    { name: "Vulnerability Assessment",sub: "Nessus · Nmap · CVE Analysis",  pct: 80 },
    { name: "Security Operations",    sub: "SIEM · Threat Analysis · SOC",   pct: 72 },
    { name: "CTF & Research",         sub: "Recon · Exploitation · Reporting",pct: 75 },
  ],

};


// Make available globally
if (typeof module !== 'undefined') module.exports = RESUME;
