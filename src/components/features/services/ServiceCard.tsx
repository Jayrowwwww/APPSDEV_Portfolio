import { motion } from "framer-motion";
import type { Service } from "./servicesData";

type ServiceCardProps = {
  index: number;
  service: Service;
};

export function ServiceCard({ index, service }: ServiceCardProps) {
  const { description, iconClassName, Icon, title } = service;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-dark p-8 rounded-2xl hover:bg-white/5 transition-colors group"
    >
      <div className="group-hover:scale-110 transition-transform duration-300">
        <Icon size={32} className={`${iconClassName} mb-4`} />
      </div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.article>
  );
}
