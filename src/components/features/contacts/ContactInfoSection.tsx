import { motion } from "framer-motion";
import { contactInfoItems } from "./contactInfoData";

export function ContactInfoSection() {
  return (
    <motion.section
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
      <div className="space-y-6">
        {contactInfoItems.map(({ Icon, iconClassName, label, value }) => (
          <div
            key={label}
            className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors"
          >
            <div
              className={`w-12 h-12 glass flex items-center justify-center rounded-full ${iconClassName}`}
            >
              <Icon size={24} />
            </div>
            <div>
              <p className="font-medium">{label}</p>
              <p className="text-gray-400">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
