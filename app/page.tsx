import { Page } from "@/components/Page";
import Link from "next/link";

export default function Home() {
  return (
    <Page>
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="font-bold text-4xl mb-4 tracking-tighter">
          Azhar Rahadian
        </h1>
        <div className="text-muted-foreground space-y-1">
          <p>azharffrahadian@gmail.com | +49 1522 4496645</p>
        </div>
      </div>

      {/* Education Section */}
      <section className="mb-8">
        <h2 className="font-semibold text-2xl mb-4 tracking-tighter border-b pb-2">
          EDUCATION
        </h2>
        <div className="space-y-2">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium">TU Braunschweig</h3>
              <p className="text-muted-foreground">B.Sc, Informatik</p>
            </div>
            <span className="text-muted-foreground text-sm">
              April 2021 - Expected September 2025
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Relevant Coursework: Software Engineering (1.3), Programmieren 2
            (1.7), Algorithmen und Datenstruktur (2.0)
          </p>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="mb-8">
        <h2 className="font-semibold text-2xl mb-4 tracking-tighter border-b pb-2">
          TECHNICAL SKILLS
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-medium mb-2">Programming</h3>
            <p className="text-sm text-muted-foreground">
              JavaScript, TypeScript, HTML, CSS, Python, SQL, C++
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Libraries & Frameworks</h3>
            <p className="text-sm text-muted-foreground">
              React, Next.js, FastAPI, Tailwind CSS, Plotly, Prisma, Pandas,
              NumPy, Seaborn, CrewAI, MCP, Scikit-learn, Docker
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Tools & Platforms</h3>
            <p className="text-sm text-muted-foreground">
              Git, Notion, VS Code, Cursor, PyCharm, Canva, Miro, Linux,
              Windows, Excel, Microsoft Office, Microsoft Azure, Agentic AI,
              HuggingFace, Generative AI
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4 border-b pb-2">
          <h2 className="font-semibold text-2xl tracking-tighter">
            TECHNICAL PROJECTS
          </h2>
          <Link
            href="/projects"
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            View all projects →
          </Link>
        </div>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium">Solidify | Resume & Job Project</h3>
              <span className="text-muted-foreground text-sm">2025 - Now</span>
            </div>
            <ul className="text-sm text-muted-foreground space-y-1 ml-4">
              <li>
                • Engineered a full-stack web application using FastAPI,
                Next.js, and CrewAI that leverages multi-agent AI to provide
                comprehensive resume analysis and optimization using RAG, Prompt
                Engineering
              </li>
              <li>
                • Built a scalable backend architecture with Async Database
                Engine, Docker containerization, JWT authentication, and
                PostgreSQL, supporting real-time resume versioning and
                AI-powered analysis
              </li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium">
                Voice Bot for Canton of St. Gallen | Start HACK Hackathon
              </h3>
              <span className="text-muted-foreground text-sm">March 2024</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Collaborated with a team of engineers, leveraging Python, GPT-4,
              RAG, Microsoft Azure, and Twilio to create a functional voice bot
              prototype for Canton of St. Gallen, enabling phone call-based
              citizen support for basic inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-8">
        <h2 className="font-semibold text-2xl mb-4 tracking-tighter border-b pb-2">
          EXPERIENCE
        </h2>
        <div>
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-medium">
                Deutsches Zentrum für Luft- und Raumfahrt (DLR)
              </h3>
              <p className="text-muted-foreground">
                Working Student Software Engineer
              </p>
            </div>
            <div className="text-right">
              <span className="text-muted-foreground text-sm">
                Braunschweig
              </span>
              <p className="text-muted-foreground text-sm">
                September 2024 - Now
              </p>
            </div>
          </div>
          <ul className="text-sm text-muted-foreground space-y-1 ml-4">
            <li>
              • Addressed key usability issues in the Open-Source ESID Project
              and enhanced the interface by adding a dynamic horizontal line
              feature and generalizing the navigation menu, resulting in cleaner
              code, improved maintainability, and a more intuitive user
              experience
            </li>
            <li>
              • Established the project&apos;s Front-end foundation with VVAFER
              (Versatile Visual Analytics Framework for Exploration and
              Research) approach, AmCharts 5, and OpenLayers, enabling
              interactive harbor dashboard with map and real-time vector
              overlays
            </li>
          </ul>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="mb-8">
        <h2 className="font-semibold text-2xl mb-4 tracking-tighter border-b pb-2">
          LEADERSHIP & ACTIVITIES
        </h2>
        <div>
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-medium">
                PPI Jerman/Vereinigung Indonesischer Studenten e.V
              </h3>
              <p className="text-muted-foreground">
                Head of Information Technology Department
              </p>
            </div>
            <div className="text-right">
              <span className="text-muted-foreground text-sm">Germany</span>
              <p className="text-muted-foreground text-sm">
                September 2023 - Now
              </p>
            </div>
          </div>
          <ul className="text-sm text-muted-foreground space-y-1 ml-4">
            <li>
              • Lead a team of nine dedicated IT team members, managing and
              enhancing the organization&apos;s digital structure with strategic
              planning, team leadership, and technical acumen, ensuring
              effective collaboration with various departments as well as
              overseeing diverse technology initiatives
            </li>
            <li>
              • Developed a production-ready Full-Stack census web application
              that aimed at collecting data from Indonesian students across
              Germany, ensuring data privacy and security
            </li>
          </ul>
        </div>
      </section>
    </Page>
  );
}
