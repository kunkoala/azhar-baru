import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProject, getProjects } from "../utils";

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-bold text-3xl mb-4 tracking-tighter">
          {project.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400 mb-4">
          <span>{project.date}</span>
          {project.github && (
            <Link
              href={project.github}
              className="hover:text-blue-600 dark:hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          )}
          {project.live && (
            <Link
              href={project.live}
              className="hover:text-blue-600 dark:hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </Link>
          )}
        </div>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
          {project.description}
        </p>
      </div>

      {/* Project Image */}
      {project.image && (
        <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Technologies */}
      <div className="mb-8">
        <h2 className="font-semibold text-xl mb-4 tracking-tighter">
          Technologies Used
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-sm text-neutral-700 dark:text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Project Content */}
      <div className="prose dark:prose-invert max-w-none">
        <div
          dangerouslySetInnerHTML={{ __html: project.content }}
          className="space-y-6"
        />
      </div>

      {/* Back to Projects */}
      <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
        <Link
          href="/projects"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          ← Back to Projects
        </Link>
      </div>
    </article>
  );
}
