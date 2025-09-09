export const portfolioData = {
  personal: {
    name: "John Doe",
    title: "Backend Developer",
    location: "Earth, Solar System",
    email: "john.doe@example.com",
    phone: "+1-234-567-8900",
    website: "https://johndoe.dev",
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe"
  },

  about: {
    bio: [
      "Greetings, fellow human! I'm a backend developer with a passion for building robust systems.",
      "Currently exploring the mysteries of distributed systems and database optimization.",
      "When not coding, I enjoy debugging production issues at 3 AM (said no one ever)."
    ],
    interests: ["Node.js", "Databases", "System Architecture", "Coffee"],
    yearsOfExperience: 3
  },

  skills: {
    programming: ["JavaScript", "Python", "Java", "SQL"],
    frameworks: ["Node.js", "Express.js", "React", "Django"],
    databases: ["MongoDB", "PostgreSQL", "Redis"],
    tools: ["Docker", "Git", "AWS", "Linux"],
    soft: ["Problem Solving", "Team Collaboration", "System Design"]
  },

  projects: [
    {
      name: "API Gateway System",
      description: "Built a scalable API gateway handling 10k+ requests/minute",
      technologies: ["Node.js", "Redis", "MongoDB"],
      status: "Production",
      year: 2024
    },
    {
      name: "Real-time Chat Application",
      description: "WebSocket-based chat with message persistence and user authentication",
      technologies: ["Socket.io", "Express", "JWT"],
      status: "Completed",
      year: 2023
    },
    {
      name: "Database Migration Tool",
      description: "Automated tool for schema migrations across multiple environments",
      technologies: ["Python", "PostgreSQL", "Docker"],
      status: "Open Source",
      year: 2023
    }
  ],

  experience: [
    {
      company: "Tech Startup Inc.",
      position: "Backend Developer",
      duration: "2022 - Present",
      description: "Developing scalable backend services and APIs for a growing user base."
    },
    {
      company: "Code Academy",
      position: "Junior Developer",
      duration: "2021 - 2022",
      description: "Built educational platform features and maintained legacy systems."
    }
  ]
};

export const welcomeMessage = [
  "╔══════════════════════════════════════════════╗",
  "║          WELCOME TO THE MATRIX               ║",
  "║         Personal Portfolio Terminal          ║",
  "║                                              ║",
  "║  Type 'help' to see available commands       ║",
  "║  Type 'about' to learn more about me         ║",
  "╚══════════════════════════════════════════════╝"
];
