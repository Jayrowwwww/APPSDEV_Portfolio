import Jero from "@/assets/jero.jpg";
import { Download } from "lucide-react";

const skills = [
  { name: "Web Design", value: 95 },
  { name: "UI/UX Design", value: 90 },
  { name: "Branding", value: 85 },
  { name: "Development", value: 80 },
];

export function AboutSkillsSection() {
  return (
    <section className="py-24 border-b border-gray-200">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-4">
          <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase leading-tight mb-6">
            Design is solving problems with empathy and creativity.
          </h2>
          <p className="text-sm text-gray-500 font-medium mb-4">
            I'm a web designer with a passion for minimal design, bold typography
            and meaningful interactions.
          </p>
          <p className="text-sm text-gray-500 font-medium mb-8">
            I partner with brands and businesses to turn ideas into digital
            experiences that make an impact.
          </p>
          <div className="font-[cursive] text-4xl text-dark opacity-80">
            Jerreh Romer Salera
          </div>
        </div>

        <div className="lg:col-span-3 flex justify-center relative">
          <div className="w-4/5 aspect-[3/4] relative z-10">
            <img
              src={Jero}
              alt="Small Portrait"
              className="w-full h-full object-cover filter grayscale contrast-125"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[120%] bg-primary -z-10 w-2/3 ml-12" />
        </div>

        <div className="lg:col-span-5 lg:pl-12 flex flex-col gap-8">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between text-xs font-bold tracking-widest uppercase mb-2">
                <span>{skill.name}</span>
                <span>{skill.value}%</span>
              </div>
              <div className="h-1 bg-gray-200 w-full rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary"
                  style={{ width: `${skill.value}%` }}
                />
              </div>
            </div>
          ))}

          <button className="mt-8 border-2 border-dark text-xs font-bold tracking-widest uppercase py-4 px-8 flex items-center justify-center gap-4 hover:bg-dark hover:text-white transition-colors w-max">
            Download Resume <Download size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
