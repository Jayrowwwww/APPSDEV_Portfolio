import { motion } from "framer-motion";

export function ServicesHeader() {
  return (
    <motion.h2
      className="text-4xl md:text-5xl font-bold mb-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      My Services
    </motion.h2>
  );
}
