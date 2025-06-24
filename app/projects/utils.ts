export interface Project {
  slug: string;
  title: string;
  description: string;
  date: string;
  image?: string;
  technologies: string[];
  github?: string;
  live?: string;
  content: string;
}

// Project data - you can expand this with your actual projects
export const projects: Project[] = [
  {
    slug: "solidify",
    title: "Solidify - Resume & Job Project",
    description:
      "A full-stack web application using FastAPI, Next.js, and CrewAI that leverages multi-agent AI to provide comprehensive resume analysis and optimization using RAG and Prompt Engineering.",
    date: "2025 - Now",
    image: "/projects/solidify.png", // Add your project images to public/projects/
    technologies: [
      "FastAPI",
      "Next.js",
      "CrewAI",
      "PostgreSQL",
      "Docker",
      "JWT",
    ],
    github: "https://github.com/yourusername/solidify",
    content: `
      <h2>Project Overview</h2>
      <p>Solidify is a comprehensive resume analysis and optimization platform that leverages artificial intelligence to help users improve their resumes and job applications.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Multi-agent AI system for comprehensive resume analysis</li>
        <li>Real-time resume versioning and AI-powered analysis</li>
        <li>Scalable backend architecture with async database engine</li>
        <li>Docker containerization for easy deployment</li>
        <li>JWT authentication for secure user management</li>
      </ul>
      
      <h3>Technical Stack</h3>
      <ul>
        <li><strong>Backend:</strong> FastAPI, PostgreSQL, Docker</li>
        <li><strong>Frontend:</strong> Next.js, Tailwind CSS</li>
        <li><strong>AI:</strong> CrewAI, RAG, Prompt Engineering</li>
        <li><strong>Authentication:</strong> JWT</li>
      </ul>
      
      <h3>Challenges & Solutions</h3>
      <p>The main challenge was implementing a scalable multi-agent AI system that could provide accurate and helpful resume feedback. This was solved by using CrewAI to orchestrate multiple specialized agents, each handling different aspects of resume analysis.</p>
    `,
  },
  {
    slug: "voice-bot-st-gallen",
    title: "Voice Bot for Canton of St. Gallen",
    description:
      "A functional voice bot prototype created during Start HACK Hackathon, enabling phone call-based citizen support for basic inquiries using GPT-4 and Microsoft Azure.",
    date: "March 2024",
    image: "/projects/voice-bot.png",
    technologies: ["Python", "GPT-4", "RAG", "Microsoft Azure", "Twilio"],
    github: "https://github.com/yourusername/voice-bot-st-gallen",
    content: `
      <h2>Project Overview</h2>
      <p>Developed during the Start HACK Hackathon, this voice bot prototype was designed to provide automated citizen support for the Canton of St. Gallen through phone calls.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Voice-based interaction using Twilio</li>
        <li>GPT-4 powered natural language processing</li>
        <li>RAG (Retrieval-Augmented Generation) for accurate responses</li>
        <li>Microsoft Azure integration for scalability</li>
        <li>Basic citizen inquiry handling</li>
      </ul>
      
      <h3>Technical Implementation</h3>
      <ul>
        <li><strong>Voice Processing:</strong> Twilio for call handling</li>
        <li><strong>AI:</strong> GPT-4 for natural language understanding</li>
        <li><strong>Knowledge Base:</strong> RAG for retrieving relevant information</li>
        <li><strong>Cloud:</strong> Microsoft Azure for hosting and services</li>
      </ul>
      
      <h3>Impact</h3>
      <p>This prototype demonstrated the potential for AI-powered citizen services, reducing wait times and providing 24/7 support for basic government inquiries.</p>
    `,
  },
  {
    slug: "esid-project",
    title: "ESID Project - DLR",
    description:
      "Enhanced the Open-Source ESID Project interface with dynamic features and established the front-end foundation using VVAFER approach, AmCharts 5, and OpenLayers.",
    date: "September 2024 - Now",
    image: "/projects/esid.png",
    technologies: [
      "JavaScript",
      "AmCharts 5",
      "OpenLayers",
      "VVAFER",
      "Frontend",
    ],
    content: `
      <h2>Project Overview</h2>
      <p>Working as a Software Engineer at DLR, I contributed to the Open-Source ESID Project, focusing on improving user experience and establishing a robust front-end foundation.</p>
      
      <h3>Key Contributions</h3>
      <ul>
        <li>Enhanced interface usability with dynamic horizontal line features</li>
        <li>Generalized navigation menu for improved maintainability</li>
        <li>Established VVAFER (Versatile Visual Analytics Framework for Exploration and Research) foundation</li>
        <li>Implemented interactive harbor dashboard with real-time vector overlays</li>
      </ul>
      
      <h3>Technical Stack</h3>
      <ul>
        <li><strong>Visualization:</strong> AmCharts 5 for data visualization</li>
        <li><strong>Mapping:</strong> OpenLayers for interactive maps</li>
        <li><strong>Framework:</strong> VVAFER approach for visual analytics</li>
        <li><strong>Frontend:</strong> Modern JavaScript and web technologies</li>
      </ul>
      
      <h3>Results</h3>
      <p>The improvements resulted in cleaner code, better maintainability, and a more intuitive user experience for the ESID Project interface.</p>
    `,
  },
];

export function getProjects(): Project[] {
  return projects;
}

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
