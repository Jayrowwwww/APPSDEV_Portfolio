import { motion } from "framer-motion";
import { Code, Layout, Smartphone } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Building responsive, fast, and secure web applications using modern frameworks.",
      icon: <Code size={32} className="text-primary mb-4" />,
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces that provide an exceptional user experience.",
      icon: <Layout size={32} className="text-secondary mb-4" />,
    },
    {
      title: "Mobile Optimization",
      description: "Ensuring your applications look and perform flawlessly across all devices and screen sizes.",
      icon: <Smartphone size={32} className="text-primary mb-4" />,
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          My Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-dark p-8 rounded-2xl hover:bg-white/5 transition-colors group"
            >
              <div className="group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
