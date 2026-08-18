import { ArrowUpRight, Monitor, PenTool, Code, Star, ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import Jero from "@/assets/Jero.jpg";

export default function Home() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* HERO SECTION */}
        <section className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 pt-12 pb-20">
          <div className="lg:col-span-7 flex flex-col justify-center z-10 relative">
            <h1 className="text-7xl sm:text-[100px] md:text-[130px] font-black leading-[0.85] tracking-tighter uppercase text-dark mb-6">
              Web <span className="text-primary">*</span><br />Designer
            </h1>

            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-dark mb-4 max-w-md">
              I Design Digital Experiences That Inspire And Perform.
            </h2>

            <p className="text-gray-500 font-medium max-w-sm mb-12">
              I create modern, user-centered websites that combine strategy, aesthetics and performance.
            </p>

            <Link to="/projects" className="flex items-center gap-4 text-xs font-bold tracking-widest uppercase hover:text-primary transition-colors group">
              <span className="bg-primary text-white rounded-full p-3 group-hover:scale-110 transition-transform">
                <ArrowRight size={16} />
              </span>
              View My Work
            </Link>

            {/* Floating Badge */}
            <div className="absolute right-0 bottom-12 lg:right-[-60px] lg:bottom-20 w-32 h-32 rounded-full border border-gray-200 bg-white flex items-center justify-center animate-[spin_10s_linear_infinite] z-20 shadow-xl hidden sm:flex">
              <div className="text-[10px] font-bold text-center uppercase tracking-widest leading-tight">
                Available<br />For<br />Freelance
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="bg-primary w-full h-[500px] md:h-[700px] absolute right-0 top-0 lg:w-[120%] z-0"></div>
            <div className="absolute top-8 right-8 text-white text-xs font-bold tracking-widest uppercase text-right z-20">
              Based In<br />New York
            </div>
            <img
              src={Jero}
              alt="Designer Portrait"
              className="relative z-10 w-full h-[500px] md:h-[700px] object-cover object-top filter grayscale contrast-125"
            />
          </div>
        </section>

        {/* STATS BAR */}
        <section className="bg-dark text-white grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-800 border-t-4 border-primary">
          <div className="p-8 text-center flex flex-col justify-center items-center">
            <span className="text-primary text-4xl md:text-5xl font-black mb-2">6+</span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400">Years Of<br />Experience</span>
          </div>
          <div className="p-8 text-center flex flex-col justify-center items-center">
            <span className="text-primary text-4xl md:text-5xl font-black mb-2">80+</span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400">Projects<br />Completed</span>
          </div>
          <div className="p-8 text-center flex flex-col justify-center items-center">
            <span className="text-primary text-4xl md:text-5xl font-black mb-2">40+</span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400">Happy<br />Clients</span>
          </div>
          <div className="p-8 text-center flex flex-col justify-center items-center">
            <span className="text-primary text-4xl md:text-5xl font-black mb-2">12</span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400">Industry<br />Awards</span>
          </div>
        </section>

        {/* SELECTED WORK */}
        <section className="py-24 border-b border-gray-200">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-5xl font-black tracking-tighter uppercase">Selected Work</h2>
            <Link to="/projects" className="hidden sm:flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase hover:text-dark transition-colors">
              View All Projects <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="bg-dark aspect-[4/5] relative overflow-hidden mb-6">
                <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Luxe Studio" className="w-full h-full object-cover filter grayscale contrast-125 opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                  <h3 className="text-4xl font-black uppercase leading-none w-min">Luxe Studio</h3>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400 flex justify-between">
                    <span>Web Design</span>
                    <span>2024</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer md:mt-16">
              <div className="bg-gray-100 aspect-[4/5] relative overflow-hidden mb-6">
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10 group-hover:bg-transparent transition-all duration-500"></div>
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Ark House" className="w-full h-full object-cover filter grayscale group-hover:scale-105 transition-all duration-500" />
                <div className="absolute inset-0 p-8 flex flex-col justify-between text-dark z-20">
                  <h3 className="text-4xl font-black uppercase leading-none w-min bg-white/80 p-2">Ark House</h3>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-gray-500 flex justify-between bg-white/80 p-2">
                    <span>Web Design</span>
                    <span>2024</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-dark aspect-[4/5] relative overflow-hidden mb-6">
                <img src="https://images.unsplash.com/photo-1616423640778-28d1b53229bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Modern Living" className="w-full h-full object-cover filter grayscale contrast-125 opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                  <h3 className="text-4xl font-black uppercase leading-none w-min self-end text-right">Modern Living</h3>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400 flex justify-between">
                    <span>UI/UX Design</span>
                    <span>2023</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-24 border-b border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 bg-primary text-white p-12 flex flex-col justify-between aspect-square lg:aspect-auto h-full relative">
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter uppercase self-start mt-auto">Services</h2>
              <ArrowUpRight size={48} className="absolute top-12 right-12 opacity-50" />
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:pl-8">
              <div className="p-8 border border-gray-200 hover:border-dark transition-colors">
                <Monitor className="text-primary mb-6" size={32} />
                <h3 className="text-xl font-black uppercase mb-4">Web Design</h3>
                <p className="text-sm text-gray-500 font-medium">Custom websites that are beautiful, functional and conversion-focused.</p>
              </div>
              <div className="p-8 border border-gray-200 hover:border-dark transition-colors">
                <PenTool className="text-primary mb-6" size={32} />
                <h3 className="text-xl font-black uppercase mb-4">UI/UX Design</h3>
                <p className="text-sm text-gray-500 font-medium">Intuitive interfaces and seamless experiences that users love to interact with.</p>
              </div>
              <div className="p-8 border border-gray-200 hover:border-dark transition-colors">
                <Star className="text-primary mb-6" size={32} />
                <h3 className="text-xl font-black uppercase mb-4">Branding</h3>
                <p className="text-sm text-gray-500 font-medium">Strong visual identities that make your brand unforgettable.</p>
              </div>
              <div className="p-8 border border-gray-200 hover:border-dark transition-colors">
                <Code className="text-primary mb-6" size={32} />
                <h3 className="text-xl font-black uppercase mb-4">Development</h3>
                <p className="text-sm text-gray-500 font-medium">Clean, scalable and fast websites built with the latest technologies.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT & SKILLS */}
        <section className="py-24 border-b border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-4">
              <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">About Me</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase leading-tight mb-6">
                Design is solving problems with empathy and creativity.
              </h2>
              <p className="text-sm text-gray-500 font-medium mb-4">
                I'm a web designer with a passion for minimal design, bold typography and meaningful interactions.
              </p>
              <p className="text-sm text-gray-500 font-medium mb-8">
                I partner with brands and businesses to turn ideas into digital experiences that make an impact.
              </p>
              <div className="font-[cursive] text-4xl text-dark opacity-80">
                Mariana
              </div>
            </div>

            <div className="lg:col-span-3 flex justify-center relative">
              <div className="w-4/5 aspect-[3/4] relative z-10">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Small Portrait" className="w-full h-full object-cover filter grayscale contrast-125" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-primary -z-10 w-2/3 ml-12"></div>
            </div>

            <div className="lg:col-span-5 lg:pl-12 flex flex-col gap-8">
              {[
                { name: "Web Design", value: 95 },
                { name: "UI/UX Design", value: 90 },
                { name: "Branding", value: 85 },
                { name: "Development", value: 80 }
              ].map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-xs font-bold tracking-widest uppercase mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.value}%</span>
                  </div>
                  <div className="h-1 bg-gray-200 w-full rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${skill.value}%` }}></div>
                  </div>
                </div>
              ))}

              <button className="mt-8 border-2 border-dark text-xs font-bold tracking-widest uppercase py-4 px-8 flex items-center justify-center gap-4 hover:bg-dark hover:text-white transition-colors w-max">
                Download Resume <Download size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* TRUSTED BY */}
        <section className="py-12 flex flex-wrap items-center justify-between gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="text-primary text-xs font-bold tracking-widest uppercase">Trusted By</span>
          <div className="text-xl font-black uppercase tracking-widest">Loom</div>
          <div className="text-xl font-black uppercase tracking-widest">Northside</div>
          <div className="text-xl font-black lowercase tracking-tight">canon</div>
          <div className="text-xl font-black uppercase tracking-[0.3em]">H E X A</div>
          <div className="text-xl font-black uppercase tracking-tighter flex items-center gap-1"><span className="text-2xl">\</span>WARE</div>
          <div className="text-xl font-black uppercase tracking-wide">SISU</div>
        </section>

      </div>
    </div>
  );
}
