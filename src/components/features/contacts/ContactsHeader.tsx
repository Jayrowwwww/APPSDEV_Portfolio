import { motion } from "framer-motion";

export function ContactsHeader() {
  return (
    <motion.h2
      className="text-4xl md:text-5xl font-bold mb-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      Get In Touch
    </motion.h2>
  );
}
