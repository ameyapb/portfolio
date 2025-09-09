import { portfolioData, welcomeMessage } from '../data/portfolioData.js';

// Available commands - like your API endpoints
export const COMMANDS = {
  HELP: 'help',
  ABOUT: 'about',
  SKILLS: 'skills',
  PROJECTS: 'projects',
  CONTACT: 'contact',
  EXPERIENCE: 'experience',
  CLEAR: 'clear',
  WHOAMI: 'whoami',
  // Navigation commands
  CV: 'cv',
  RESUME: 'resume',
  // Easter eggs
  MATRIX: 'matrix',
  HACK: 'hack'
};

// Command processor - like your main router
export const processCommand = (input) => {
  const command = input.toLowerCase().trim();

  switch (command) {
    case COMMANDS.HELP:
      return getHelpOutput();

    case COMMANDS.ABOUT:
      return getAboutOutput();

    case COMMANDS.SKILLS:
      return getSkillsOutput();

    case COMMANDS.PROJECTS:
      return getProjectsOutput();

    case COMMANDS.CONTACT:
      return getContactOutput();

    case COMMANDS.EXPERIENCE:
      return getExperienceOutput();

    case COMMANDS.WHOAMI:
      return getWhoAmIOutput();

    case COMMANDS.CV:
    case COMMANDS.RESUME:
      return { type: 'navigate', target: 'about' };

    case COMMANDS.CLEAR:
      return { type: 'clear' };

    case COMMANDS.MATRIX:
      return getMatrixOutput();

    case COMMANDS.HACK:
      return getHackOutput();

    default:
      return getErrorOutput(command);
  }
};

// Command implementations - like your controller functions
const getHelpOutput = () => {
  return {
    type: 'text',
    content: [
      "Available Commands:",
      "─────────────────────",
      "help       - Show this help menu",
      "about      - Learn about me",
      "skills     - View my technical skills",
      "projects   - See my recent projects",
      "contact    - Get my contact information",
      "experience - View my work experience",
      "whoami     - Display current user info",
      "cv         - Open full CV/resume page",
      "resume     - Open full CV/resume page",
      "clear      - Clear the terminal",
      "",
      "Easter Eggs:",
      "matrix     - Enter the Matrix",
      "hack       - Initiate hacking sequence",
      "",
      "Tip: Commands are case-insensitive"
    ]
  };
};

const getAboutOutput = () => {
  return {
    type: 'text',
    content: [
      `About ${portfolioData.personal.name}`,
      "═".repeat(30),
      "",
      ...portfolioData.about.bio,
      "",
      `Years of Experience: ${portfolioData.about.yearsOfExperience}`,
      `Location: ${portfolioData.personal.location}`,
      "",
      "Interests:",
      ...portfolioData.about.interests.map(interest => `• ${interest}`)
    ]
  };
};

const getSkillsOutput = () => {
  const { skills } = portfolioData;
  return {
    type: 'text',
    content: [
      "Technical Skills",
      "═".repeat(20),
      "",
      "Programming Languages:",
      ...skills.programming.map(skill => `• ${skill}`),
      "",
      "Frameworks & Libraries:",
      ...skills.frameworks.map(skill => `• ${skill}`),
      "",
      "Databases:",
      ...skills.databases.map(skill => `• ${skill}`),
      "",
      "Tools & Technologies:",
      ...skills.tools.map(skill => `• ${skill}`),
      "",
      "Soft Skills:",
      ...skills.soft.map(skill => `• ${skill}`)
    ]
  };
};

const getProjectsOutput = () => {
  return {
    type: 'text',
    content: [
      "Recent Projects",
      "═".repeat(20),
      "",
      ...portfolioData.projects.flatMap((project, index) => [
        `${index + 1}. ${project.name} (${project.year})`,
        `   ${project.description}`,
        `   Technologies: ${project.technologies.join(', ')}`,
        `   Status: ${project.status}`,
        ""
      ])
    ]
  };
};

const getContactOutput = () => {
  const { personal } = portfolioData;
  return {
    type: 'text',
    content: [
      "Contact Information",
      "═".repeat(25),
      "",
      `Name: ${personal.name}`,
      `Email: ${personal.email}`,
      `Phone: ${personal.phone}`,
      `Website: ${personal.website}`,
      `GitHub: ${personal.github}`,
      `LinkedIn: ${personal.linkedin}`,
      "",
      "Feel free to reach out for collaboration or opportunities!"
    ]
  };
};

const getExperienceOutput = () => {
  return {
    type: 'text',
    content: [
      "Work Experience",
      "═".repeat(20),
      "",
      ...portfolioData.experience.flatMap((exp, index) => [
        `${index + 1}. ${exp.position} at ${exp.company}`,
        `   Duration: ${exp.duration}`,
        `   ${exp.description}`,
        ""
      ])
    ]
  };
};

const getWhoAmIOutput = () => {
  return {
    type: 'text',
    content: [
      `${portfolioData.personal.name}@portfolio:~$ whoami`,
      `${portfolioData.personal.name} - ${portfolioData.personal.title}`,
      `Currently logged into the Matrix...`
    ]
  };
};

// Easter egg commands
const getMatrixOutput = () => {
  return {
    type: 'text',
    content: [
      "Entering the Matrix...",
      "",
      "01001000 01100101 01101100 01101100 01101111",
      "01001000 01110101 01101101 01100001 01101110",
      "",
      "Welcome to the real world, Neo.",
      "There is no spoon.",
      "",
      "Type 'help' to return to reality."
    ]
  };
};

const getHackOutput = () => {
  return {
    type: 'text',
    content: [
      "Initiating hacking sequence...",
      "",
      "[████████████████████████████████] 100%",
      "",
      "ACCESS GRANTED",
      "Mainframe breached successfully!",
      "Just kidding - this is a portfolio, not a real hack 😄",
      "",
      "But I can hack together some pretty cool backend systems!"
    ]
  };
};

const getErrorOutput = (command) => {
  return {
    type: 'error',
    content: [
      `Command not found: ${command}`,
      "Type 'help' for available commands."
    ]
  };
};

// Welcome message getter
export const getWelcomeMessage = () => {
  return {
    type: 'text',
    content: welcomeMessage
  };
};
