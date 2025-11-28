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

export const projects: Project[] = [
  {
    slug: "bearcast",
    title: "BEARCAST – AI Ticketing Forecast Dashboard",
    description:
      "2nd Place at KI Sport Hackathon 2025. AI-powered dashboard for forecasting ticket sales for sports teams.",
    date: "November 2025",
    image: "/projects/bearcast.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Vercel AI SDK",
      "LLM Tools",
      "Charts",
    ],
    content: `
      <h2>Project Overview</h2>
      <p>Built during the KI Sport Hackathon 2025, BEARCAST is an AI executive dashboard that forecasts ticket sales and provides narrative insights for sports clubs.</p>

      <h3>Achievements</h3>
      <ul>
        <li><strong>Won 2nd place</strong> among all teams</li>
        <li>Live demo in front of club executives (Grizzlys Wolfsburg)</li>
        <li>Fully working MVP built in <strong>24 hours</strong></li>
      </ul>

      <h3>Key Features</h3>
      <ul>
        <li>AI chatbot that interprets user queries and chooses correct dataset</li>
        <li>Automatic chart generation based on intent</li>
        <li>Data-driven insights (e.g., effects of weather, opponent strength)</li>
      </ul>
    `,
  },
  {
    slug: "univy",
    title: "UNIVY – AI Study Helper",
    description:
      "A desktop and web platform that converts lecture PDFs into smart notes, flashcards, and question-answering using RAG and LightRAG.",
    date: "2024 – Present",
    image: "/projects/univy.png",
    technologies: [
      "Tauri",
      "Rust",
      "React",
      "FastAPI",
      "LightRAG",
      "Python",
      "Docling",
    ],
    content: `
      <h2>Project Overview</h2>
      <p>UNIVY is a study-assistant platform that helps students learn faster by processing lecture PDFs and transforming them into structured notes, flashcards, and interactive Q&A.</p>

      <h3>Core Features</h3>
      <ul>
        <li>PDF parsing using Docling & MinerU</li>
        <li>Automated note generation with text anchors</li>
        <li>Flashcard creation using LLM reasoning</li>
        <li>LightRAG knowledge graph for concept linking</li>
        <li>Desktop support via Tauri + Rust</li>
      </ul>

      <h3>Technical Implementation</h3>
      <ul>
        <li><strong>Backend:</strong> FastAPI, LightRAG, Python</li>
        <li><strong>Frontend:</strong> React, Tauri, Mantine UI</li>
        <li><strong>Document Processing:</strong> Docling, MinerU, EasyOCR</li>
      </ul>
    `,
  },

  {
    slug: "voice-bot-st-gallen",
    title: "Voice Bot for Canton of St. Gallen",
    description:
      "Phone-call-based GPT-4 citizen support system built during StartHack 2024.",
    date: "March 2024",
    image: "/projects/voice-bot.png",
    technologies: ["Python", "GPT-4", "Azure", "Twilio", "RAG"],
    github: "https://github.com/yourusername/voice-bot-st-gallen",
    content: `
      <h2>Project Overview</h2>
      <p>A functional voice bot prototype that answers citizen questions via phone using GPT-4 and RAG.</p>

      <h3>Key Features</h3>
      <ul>
        <li>Twilio voice call integration</li>
        <li>RAG pipeline for accurate government answers</li>
        <li>Deployed on Microsoft Azure</li>
      </ul>
    `,
  },

  {
    slug: "esid-project",
    title: "ESID Project – DLR",
    description:
      "Improved ESID's visual analytics interface using VVAFER, AmCharts, and OpenLayers as part of DLR Visualization team.",
    date: "2024 – Present",
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
      <p>At DLR, I work on the ESID project focusing on interactive data visualization for environmental and mobility data.</p>

      <h3>Key Contributions</h3>
      <ul>
        <li>Rebuilt horizontal threshold feature for line charts</li>
        <li>Created generalized navigation and UI components</li>
        <li>Improved OpenLayers map interactions and overlays</li>
        <li>Established new VVAFER visualization foundation</li>
      </ul>
    `,
  },
];

export function getProjects(): Project[] {
  return projects;
}

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
