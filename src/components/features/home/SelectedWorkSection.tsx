import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Infographic from "@/assets/_imgs/Infographic.png";
import UserInterface from "@/assets/_imgs/User's Interface.png";
import UserForm from "@/assets/_imgs/User Form.png";

type SelectedProject = {
  title: string;
  image: string;
  category: string;
  year: string;
  cardClassName: string;
  imageClassName: string;
  textClassName: string;
  titleClassName: string;
  metaClassName: string;
  overlay?: boolean;
  wrapperClassName?: string;
};

const selectedProjects: SelectedProject[] = [
  {
    title: "Infographic",
    image: Infographic,
    category: "Infographic Design",
    year: "2025",
    cardClassName: "bg-dark",
    imageClassName:
      "filter grayscale contrast-125 opacity-70 group-hover:opacity-100",
    textClassName: "text-white",
    titleClassName: "w-min",
    metaClassName: "text-gray-400",
  },
  {
    title: "e-Clinic",
    image: UserInterface,
    category: "UI/UX Design",
    year: "2024",
    cardClassName: "bg-gray-100",
    imageClassName: "filter grayscale",
    textClassName: "text-dark z-20",
    titleClassName: "w-min bg-white/80 p-2",
    metaClassName: "text-gray-500 bg-white/80 p-2",
  },
  {
    title: "e-Clinic Login Form",
    image: UserForm,
    category: "UI/UX Design",
    year: "2023",
    cardClassName: "bg-dark",
    imageClassName:
      "filter grayscale contrast-125 opacity-70 group-hover:opacity-100",
    textClassName: "text-white",
    titleClassName: "w-min self-end text-right",
    metaClassName: "text-gray-400",
  },
];

export function SelectedWorkSection() {
  return (
    <section className="py-24 border-b border-gray-200">
      <div className="flex justify-between items-end mb-16">
        <h2 className="text-5xl font-black tracking-tighter uppercase">
          Selected Work
        </h2>
        <Link
          to="/projects"
          className="hidden sm:flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase hover:text-dark transition-colors"
        >
          View All Projects <ArrowUpRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {selectedProjects.map((project) => (
          <div
            key={project.title}
            className={`group cursor-pointer ${project.wrapperClassName ?? ""}`}
          >
            <div
              className={`${project.cardClassName} aspect-[4/5] relative overflow-hidden mb-6`}
            >
              {project.overlay ? (
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10 group-hover:bg-transparent transition-all duration-500" />
              ) : null}
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ${project.imageClassName}`}
              />
              <div
                className={`absolute inset-0 p-8 flex flex-col justify-between ${project.textClassName}`}
              >
                <h3
                  className={`text-4xl font-black uppercase leading-none ${project.titleClassName}`}
                >
                  {project.title}
                </h3>
                <div
                  className={`text-[10px] font-bold tracking-widest uppercase flex justify-between ${project.metaClassName}`}
                >
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
