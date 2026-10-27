// ============================================================
// SITE DATA — Centralized content for ISHACK S Portfolio
// Update this file to change content across the entire site.
// ============================================================

export const SITE_CONFIG = {
  name: "ISHACK S",
  title: "ISHACK S — Software Engineer & AI Explorer",
  description:
    "Computer Science and Engineering student exploring software engineering, artificial intelligence, and computer vision. Portfolio of projects, skills, and achievements.",
  url: "https://ishack-portfolio.vercel.app",
  github: "https://github.com/ISHACK",
  linkedin: "https://www.linkedin.com/in/ishack-s-45b423316/",
  email: "ishackgamer8@gmail.com",
  cvPath: "/ISHACK-S-CV.pdf",
};

export const FEATURED_PROJECTS = [
  {
    number: "01",
    name: "ScholarFlowAI",
    category: "AI / EdTech / Learning Technology",
    description:
      "An AI-powered study guide and career-planning platform designed to transform academic material into structured learning experiences and personalized learning paths.",
    tags: ["AI", "EdTech", "Next.js", "TypeScript"],
    repoUrl: "https://github.com/ISHACK-S/ScholarFlow",
    demoUrl: null,
    accent: "#32D7FF",
  },
  {
    number: "02",
    name: "LogSmite / Autolog",
    category: "Developer Tools / GitHub Automation",
    description:
      "A developer tooling project focused on automating changelog and release-note generation from repository changes and development workflows.",
    tags: ["Automation", "GitHub", "Developer Tools", "Markdown"],
    repoUrl: "https://github.com/ISHACK-S/Autolog",
    demoUrl: null,
    accent: "#C5FF4A",
  },
  {
    number: "03",
    name: "Schel",
    category: "Productivity / Scheduling Application",
    description:
      "A schedule management application designed to organize schedules and make planning workflows easier.",
    tags: ["Productivity", "Scheduling", "JavaScript"],
    repoUrl: "https://github.com/ISHACK-S/Schel-A-Schedule-Managing-Tool",
    demoUrl: null,
    accent: "#9B6DFF",
  },
];

export const ARCHIVE_PROJECTS = [
  {
    name: "Innovato",
    category: "AI / Product Development",
    description:
      "An evolution of an AI mentoring and learning experience, exploring ways to help users navigate learning and development.",
    tags: ["AI", "React", "Learning"],
    repoUrl: null,
    demoUrl: "https://innovato-alpha.vercel.app/",
    status: "concept",
  },
  {
    name: "Valsia AI",
    category: "AI / Education",
    description:
      "An AI mentor and learning assistant concept focused on learning roadmaps and ongoing guidance.",
    tags: ["AI", "Education", "Mentoring"],
    repoUrl: "https://github.com/ISHACK-S/valsia-1",
    demoUrl: null,
    status: "concept",
  },
  {
    name: "TriageX",
    category: "Healthcare Technology",
    description:
      "A healthcare management system project developed in a hackathon context.",
    tags: ["Healthcare", "Hackathon", "Web App"],
    repoUrl:
      "https://github.com/ISHACK-S/Kanini-X-Pragyan-Hackathon-0",
    demoUrl: null,
    status: "prototype",
  },
  {
    name: "Acc-Det",
    category: "Machine Learning / Computer Vision / Safety",
    description:
      "An accident detection and SOS alert system project focused on using machine learning to support accident identification and emergency notification workflows.",
    tags: ["Machine Learning", "Computer Vision", "Python", "Safety"],
    repoUrl: "https://github.com/ISHACK-S/Acc-Det",
    demoUrl: null,
    status: "prototype",
  },
  {
    name: "The Final Stand — CTF Challenge",
    category: "Cybersecurity / CTF / Puzzle Design",
    description:
      "A Capture The Flag challenge designed around investigation, clues, decoding, and problem-solving.",
    tags: ["CTF", "Cybersecurity", "Puzzle Design", "Web"],
    repoUrl: "https://github.com/ISHACK-S/The-Final-Stand-CTF-Challenge",
    demoUrl: "https://the-final-stand-ctf.vercel.app/",
    status: "published",
    isCTF: true,
  },
];

export const SKILLS = [
  {
    category: "Programming Languages",
    icon: "code",
    items: ["C", "C++", "Python", "Java", "JavaScript", "TypeScript"],
  },
  {
    category: "Web Development",
    icon: "globe",
    items: ["HTML", "CSS", "React", "Next.js", "Node.js", "TypeScript"],
  },
  {
    category: "Data & Backend",
    icon: "database",
    items: ["Supabase", "SQL", "Database Design", "REST APIs"],
  },
  {
    category: "AI & Machine Learning",
    icon: "brain",
    items: ["Machine Learning", "Computer Vision", "AI-powered Applications"],
  },
  {
    category: "Tools & Platforms",
    icon: "tool",
    items: ["Git", "GitHub", "Docker", "Vercel"],
  },
];

export const ACHIEVEMENTS = [
  {
    title: "India's 1st Computer Vision Hackathon",
    result: "Finalist",
    organizer: "RV College, Bangalore",
    year: null,
  },
  {
    title: "ExploitX Into The Void 2.0 CTF",
    result: "Top 20 Finalist",
    organizer: null,
    year: null,
  },
  {
    title: "MathXplore Hackathon",
    result: "3rd Place",
    organizer: "Saveetha Engineering College",
    year: null,
  },
  {
    title: "SDG Hackathon",
    result: "3rd Place",
    organizer: "Chennai Institute of Technology",
    year: null,
  },
  {
    title: "CyberStrike CTF",
    result: "Top 10 Finalist",
    organizer: "Sreenidhi Institute of Science and Technology, Hyderabad",
    year: null,
  },
];

export const CERTIFICATIONS = [
  {
    name: "Python Essentials 1",
    issuer: "Cisco",
    credentialId: null,
    date: null,
  },
  {
    name: "Essentials of Prompt Engineering",
    issuer: "Amazon Web Services",
    credentialId: null,
    date: null,
  },
  {
    name: "Fundamentals of Prompt Engineering",
    issuer: "Amazon Web Services",
    credentialId: null,
    date: null,
  },
  {
    name: "MongoDB Skillathon Certification Courses",
    issuer: "MongoDB",
    credentialId: null,
    date: null,
  },
];
