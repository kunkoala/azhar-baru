import Link from "next/link";
import Image from "next/image";
import { getProjects } from "@/app/projects/utils";

export function ProjectGrid() {
  const projects = getProjects();

  return (
    <main className="flex flex-col gap-8">
      {projects.map((project) => (
        <Link
          key={project.slug}
          href={`/projects/${project.slug}`}
          className="group block"
        >
          <article className="flex flex-col gap-10 rounded-lg">
            <div className="flex flex-col md:flex-row gap-2">
              {/* Project Image */}
              {project.image && (
                <div className="relative w-full md:w-64 h-48 md:h-40 flex-shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>

            {/* Project Content */}
            <div className="flex flex-col gap-2">
              <div className="flex items-start justify-between">
                <h2 className="font-semibold text-xl tracking-tighter hover:text-gray-500 dark:hover:text-gray-400 transition-colors">
                  {project.title}
                </h2>
                <span className="text-muted-foreground text-sm">
                  {project.date}
                </span>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 mb-3 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-xs rounded-full text-neutral-600 dark:text-neutral-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-500">
                {project.github && (
                  <span className="hover:text-blue-600 dark:hover:text-blue-400">
                    GitHub →
                  </span>
                )}
                {project.live && (
                  <span className="hover:text-blue-600 dark:hover:text-blue-400">
                    Live Demo →
                  </span>
                )}
              </div>
            </div>
          </article>
        </Link>
      ))}
    </main>
  );
}
