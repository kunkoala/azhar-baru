import { ProjectGrid } from "@/components/projects";
import { Page } from "@/components/Page";

export const metadata = {
  title: "Projects",
  description: "My projects and work.",
};

export default function ProjectsPage() {
  return (
    <Page>
      <h1 className="font-semibold text-4xl mb-8 tracking-tighter">
        Projects & Work
      </h1>
      <ProjectGrid />
    </Page>
  );
}
