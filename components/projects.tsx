import Link from "next/link";
import { getProjects } from "@/app/projects/utils";

const gradients = [
  "from-blue-500 to-purple-600",
  "from-pink-500 to-rose-600",
  "from-cyan-500 to-blue-600",
  "from-orange-500 to-red-600",
  "from-green-500 to-emerald-600",
  "from-indigo-500 to-purple-600",
];

export function ProjectGrid() {
  const projects = getProjects();

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => {
        const gradient = gradients[index % gradients.length];
        
        return (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group block"
          >
            <article className="flex flex-col h-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              {/* Gradient Image Placeholder */}
              <div className={`relative w-full h-48 bg-gradient-to-br ${gradient}`}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
              </div>

              {/* Project Content */}
              <div className="flex flex-col gap-3 p-5 flex-grow">
                <div className="flex items-start justify-between gap-2">
                  <h2 className="font-semibold text-lg tracking-tighter group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {project.title}
                  </h2>
                  <span className="text-muted-foreground text-xs whitespace-nowrap flex-shrink-0">
                    {project.date}
                  </span>
                </div>
                
                <p className="text-neutral-600 dark:text-neutral-400 text-sm line-clamp-3 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-xs rounded-full text-neutral-600 dark:text-neutral-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-xs rounded-full text-neutral-600 dark:text-neutral-400">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-500 mt-auto pt-2">
                  {project.github && (
                    <span className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      GitHub →
                    </span>
                  )}
                  {project.live && (
                    <span className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      Live Demo →
                    </span>
                  )}
                </div>
              </div>
            </article>
          </Link>
        );
      })}
    </main>
  );
}
