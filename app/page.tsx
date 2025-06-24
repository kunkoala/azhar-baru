import { Page } from "@/components/Page";

export default function Home() {
  return (
    <Page>
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="font-bold text-4xl mb-4 tracking-tighter">
          Azhar Rahadian
        </h1>
        <div className="text-muted-foreground space-y-1">
          <p>azharffrahadian@gmail.com</p>
        </div>
      </div>

      {/* Experience Section */}
      <section className="mb-8">
        <h2 className="font-semibold text-2xl mb-2 tracking-tighter">
          EXPERIENCE
        </h2>
        <div>
          <div className="flex justify-between items-start">
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
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="mb-8">
        <h2 className="font-semibold text-2xl mb-2 tracking-tighter">
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
    </Page>
  );
}
