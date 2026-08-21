import { ProjectsGrid, ProjectsHeader } from "@/components/features/projects";

export default function Projects() {
  return (
    <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ProjectsHeader />
        <ProjectsGrid />
      </div>
    </div>
  );
}
