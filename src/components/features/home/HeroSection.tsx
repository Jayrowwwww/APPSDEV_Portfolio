import Jero from "@/assets/jero.jpg";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 pt-12 pb-20">
      <div className="lg:col-span-7 flex flex-col justify-center z-10 relative">
        <h1 className="text-7xl sm:text-[100px] md:text-[130px] font-black leading-[0.85] tracking-tighter uppercase text-dark mb-6">
          Web <span className="text-primary">*</span>
          <br />
          Designer
        </h1>

        <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-dark mb-4 max-w-md">
          I Design Digital Experiences That Inspire And Perform.
        </h2>

        <p className="text-gray-500 font-medium max-w-sm mb-12">
          I create modern, user-centered websites that combine strategy,
          aesthetics and performance.
        </p>

        <Link
          to="/projects"
          className="flex items-center gap-4 text-xs font-bold tracking-widest uppercase hover:text-primary transition-colors group"
        >
          <span className="bg-primary text-white rounded-full p-3 group-hover:scale-110 transition-transform">
            <ArrowRight size={16} />
          </span>
          View My Work
        </Link>

        <div className="absolute right-0 bottom-12 lg:right-[-60px] lg:bottom-20 w-32 h-32 rounded-full border border-gray-200 bg-white flex items-center justify-center animate-[spin_10s_linear_infinite] z-20 shadow-xl hidden sm:flex">
          <div className="text-[10px] font-bold text-center uppercase tracking-widest leading-tight">
            Available
            <br />
            For
            <br />
            Freelance
          </div>
        </div>
      </div>

      <div className="lg:col-span-5 relative">
        <div className="bg-primary w-full h-[500px] md:h-[700px] absolute right-0 top-0 lg:w-[120%] z-0" />
        <div className="absolute top-8 right-8 text-white text-xs font-bold tracking-widest uppercase text-right z-20">
          Based In
          <br />
          Cebu, Philippines
        </div>
        <img
          src={Jero}
          alt="Designer Portrait"
          className="relative z-10 w-full h-[500px] md:h-[700px] object-cover object-top filter grayscale contrast-125"
        />
      </div>
    </section>
  );
}
