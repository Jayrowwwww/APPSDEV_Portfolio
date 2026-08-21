import GrandNancy from "@/assets/_imgs/grand-nancy.png";
import Headspace from "@/assets/_imgs/headspace.png";
import Portfolio from "@/assets/_imgs/portfolio.png";

export type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with React and Tailwind CSS.",
    image: Portfolio,
    tags: ["React", "Node.js", "Tailwind"],
    link: "https://siap-portfolio.vercel.app/",
  },
  {
    title: "Grand Nancy Hotel",
    description:
      "A luxurious hotel booking platform with real-time availability and payment integration.",
    image: GrandNancy,
    tags: ["TypeScript", "Next JS", "Tailwind CSS"],
    link: "https://grand-nancy-hotel.vercel.app/",
  },
  {
    title: "Headspace Login Clone",
    description:
      "A clone of the Headspace login page, demonstrating responsive design and animations.",
    image: Headspace,
    tags: ["Next.js", "Tailwind"],
    link: "https://headspace-login-prototype.vercel.app/",
  },
];
