import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white pt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 border-t border-gray-200">
        <div className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
          <div className="bg-primary text-white p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none max-w-md uppercase">
              Let's Create Something Great Together.
            </h2>
            <button className="bg-white text-dark rounded-full p-6 hover:bg-gray-100 transition-transform hover:scale-105 shrink-0">
              <ArrowUpRight size={32} />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-20 lg:pl-12">
            <div>
              <h3 className="text-primary text-xs font-bold tracking-widest uppercase mb-6">Get In Touch</h3>
              <ul className="space-y-4 text-sm text-gray-500 font-medium">
                <li><a href="mailto:salerajerrehromer@gmail.com" className="hover:text-dark">salerajerrehromer@gmail.com</a></li>
                <li>+63 956 325 4090</li>
                <li>Cebu, Philippines</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-primary text-xs font-bold tracking-widest uppercase mb-6">Follow</h3>
              <ul className="space-y-4 text-sm text-gray-500 font-medium">
                <li><a href="#" className="hover:text-dark">Facebook</a></li>
                <li><a href="#" className="hover:text-dark">Dribbble</a></li>
                <li><a href="#" className="hover:text-dark">LinkedIn</a></li>
                <li><a href="#" className="hover:text-dark">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-medium">
          <p>&copy; {new Date().getFullYear()} JRS DESIGN</p>
          <p>ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </footer>
  );
}
