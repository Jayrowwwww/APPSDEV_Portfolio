import { NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "WORK", path: "/projects" },
    { name: "SERVICES", path: "/services" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contacts" },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white border-b border-gray-100 transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="text-4xl font-black tracking-tighter flex items-end">
              J<span className="text-primary text-5xl leading-[0.5] mb-2">.</span>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-xs font-bold tracking-widest transition-colors hover:text-primary ${isActive ? "text-primary" : "text-dark"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="mailto:hello@example.com"
              className="bg-primary text-white font-bold text-xs tracking-wider px-6 py-4 flex items-center gap-2 hover:bg-red-700 transition-colors"
            >
              LET'S TALK <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-3 text-sm font-bold tracking-widest border-b border-gray-100 ${isActive
                      ? "text-primary"
                      : "text-dark hover:text-primary"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <a
                href="mailto:hello@example.com"
                className="mt-4 bg-primary text-white font-bold text-xs tracking-wider px-6 py-4 flex justify-center items-center gap-2 hover:bg-red-700 transition-colors w-full"
              >
                LET'S TALK <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
