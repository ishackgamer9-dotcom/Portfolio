export const identity = {
  name: "ISHACK S",
  alias: "ISK",
  system: "ISK//OS",
  githubUrl: "https://github.com/ISHACK-S",
  linkedInUrl: "https://www.linkedin.com/in/ishack-s-45b423316/",
  contactUrl: "mailto:ishackgamer8@gmail.com",
};

export const profile = {
  eyebrow: "ISHACK S // ISK",
  intro:
    "I'm a computer science student exploring AI, software engineering, and game development. I build projects, experiment with emerging technologies, and work toward creating interactive worlds of my own.",
  supportingLine: "SOFTWARE ENGINEERING / AI & ML / GAME DEVELOPMENT",
  about:
    "I'm a computer science student who enjoys taking ambitious ideas and turning them into real software. My interests span AI-powered applications, developer tools, web engineering, and game development. I care about understanding how things work under the hood, experimenting with new technologies, and building projects that are genuinely useful or interesting to use.",
};

export const projects = [
  {
    name: "ScholarFlowAI",
    code: "SF / 001",
    visual: "scholarflow",
    category: "AI / EdTech",
    description:
      "An AI-powered study guide and career-planning platform designed to turn academic material into structured learning experiences and personalized learning paths.",
    showcase:
      "Learning workflows, AI/ML components, study planning, and career guidance.",
    status: "",
    technologyTags: [],
    repositoryUrl: "https://github.com/ISHACK-S/ScholarFlow",
    demoUrl: "",
  },
  {
    name: "LogSmite",
    code: "LS / 002",
    visual: "logsmite",
    category: "Developer Tools / Automation",
    description:
      "A GitHub App concept focused on automating changelog and release-note generation from repository changes and workflow activity.",
    showcase:
      "GitHub integration, developer productivity, automation, and generated Markdown.",
    status: "Concept",
    technologyTags: [],
    repositoryUrl: "https://github.com/ISHACK-S/Autolog",
    demoUrl: "",
  },
  {
    name: "Schel",
    code: "SC / 003",
    visual: "schel",
    category: "Productivity / Web Application",
    description:
      "A scheduling application associated with Supabase; specific implementation details have not been verified.",
    showcase:
      "Scheduling workflows and interface design; verify data persistence and architecture details before presenting them as implemented.",
    status: "",
    technologyTags: [],
    repositoryUrl: "https://github.com/ISHACK-S/Schel-A-Schedule-Managing-Tool",
    demoUrl: "",
  },
  {
    name: "Valsia AI",
    code: "VA / 004",
    visual: "valsia",
    category: "AI / Education",
    description:
      "An AI mentor and learning assistant concept for guiding users through learning roadmaps and ongoing mentoring.",
    showcase: "Personalized guidance, learning journeys, and AI-assisted education.",
    status: "Concept",
    technologyTags: [],
    repositoryUrl: "https://github.com/ISHACK-S/valsia-1",
    demoUrl: "",
  },
  {
    name: "Innovato",
    code: "IN / 005",
    visual: "innovato",
    category: "AI / Product Development",
    description:
      "A project conceived as an evolution of Valsia AI. Specific differentiators are intentionally left open.",
    showcase:
      "Product iteration and the evolution of an AI mentoring experience.",
    status: "",
    technologyTags: [],
    repositoryUrl: "",
    demoUrl: "https://innovato-alpha.vercel.app/",
  },
  {
    name: "TriageX",
    code: "TX / 006",
    visual: "triagex",
    category: "Healthcare Technology",
    description: "A healthcare management system project.",
    showcase: "Healthcare workflows, system design, and the problems it addresses.",
    status: "",
    technologyTags: [],
    repositoryUrl: "https://github.com/ISHACK-S/Kanini-X-Pragyan-Hackathon-0",
    demoUrl: "",
  },
  {
    name: "Acc-Det",
    code: "ACC / 007",
    visual: "prescription",
    category: "Machine Learning / Computer Vision / Safety",
    description:
      "An ML-based accident detection and SOS alert system designed to identify accidents at an early stage and trigger automated emergency alerts to help reduce response time.",
    showcase:
      "Accident detection, computer vision, and automated SOS alert workflows.",
    status: "Project",
    technologyTags: [],
    repositoryUrl: "https://github.com/ISHACK-S/Acc-Det",
    demoUrl: "",
  },
] as const;

export const technicalProfile = [
  {
    name: "Software engineering",
    code: "SE",
    details:
      "Languages: C, C++, Python, Java, JavaScript, TypeScript. Tools: Git and GitHub.",
  },
  {
    name: "Web development",
    code: "WEB",
    details:
      "HTML, CSS, Next.js, Node.js. Full-stack application development supported by existing projects.",
  },
  {
    name: "AI & machine learning",
    code: "AI/ML",
    details:
      "Machine Learning, Computer Vision, and AI-powered applications. Project references: ScholarFlowAI and Acc-Det.",
  },
  {
    name: "Game development & interactive experiences",
    code: "GAME",
    details: "Interests: Game Development and Competitive Programming.",
  },
] as const;

export const achievements = [
  {
    result: "Finalist",
    event: "India's 1st Computer Vision Hackathon, RV College, Bangalore.",
  },
  {
    result: "Top 20 Finalist",
    event: "ExploitX Into The Void 2.0 CTF.",
  },
  {
    result: "3rd Place",
    event: "MathXplore Hackathon, Saveetha Engineering College.",
  },
  {
    result: "3rd Place",
    event: "SDG Hackathon, Chennai Institute of Technology.",
  },
  {
    result: "Top 10 Finalist",
    event: "CyberStrike CTF, Sreenidhi Institute of Science and Technology, Hyderabad.",
  },
] as const;

export const education = {
  institution: "Chennai Institute of Technology",
  degree: "B.E. Computer Science and Engineering",
  cgpa: "8.61/10.0",
} as const;

export const certifications = [
  "Cisco Python Essentials 1",
  "AWS Essentials of Prompt Engineering",
  "AWS Fundamentals of Prompt Engineering",
  "MongoDB Skillathon — Completed certification courses",
] as const;

export const ctfShowcase = {
  eyebrow: "OFF THE MAIN QUEST // CYBERSECURITY",
  name: "THE FINAL STAND",
  category: "CAPTURE THE FLAG / CYBERSECURITY / PUZZLE DESIGN",
  description:
    "Think you can crack it? The Final Stand is a CTF challenge I built for curious minds who enjoy investigating clues, decoding secrets, and thinking beyond the obvious. Step into the challenge and see whether you can find the flag.",
  challengeUrl: "https://the-final-stand-ctf.vercel.app/",
  repositoryUrl: "https://github.com/ISHACK-S/The-Final-Stand-CTF-Challenge",
} as const;

export const featuredProjects = projects.slice(0, 3);
export const archivedProjects = projects.slice(3);
