import { motion } from "framer-motion";

export function AboutIntroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>
      <div className="glass-dark p-8 rounded-2xl">
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Hello! I'm a passionate developer with a strong focus on building
          scalable and beautiful web applications. I thrive on learning new
          technologies and creating intuitive user experiences.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          With a background in computer science and a deep love for design, I
          aim to bridge the gap between aesthetics and functionality. When I'm
          not coding, you can find me exploring new coffee shops, reading tech
          blogs, or contributing to open-source projects.
        </p>
      </div>
    </motion.section>
  );
}
