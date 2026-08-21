import { ProjectCard } from "./ProjectCard";
import { projects } from "./projectsData";

export function ProjectsGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={project.title} index={index} project={project} />
      ))}
    </section>
  );
}
