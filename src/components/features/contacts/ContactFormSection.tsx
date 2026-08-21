import { motion } from "framer-motion";

const fields = [
  {
    id: "name",
    label: "Name",
    placeholder: "Your name",
    type: "text",
  },
  {
    id: "email",
    label: "Email",
    placeholder: "your@email.com",
    type: "email",
  },
];

export function ContactFormSection() {
  return (
    <motion.form
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-dark p-8 rounded-2xl flex flex-col gap-4"
    >
      {fields.map((field) => (
        <div key={field.id}>
          <label
            htmlFor={field.id}
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            {field.label}
          </label>
          <input
            type={field.type}
            id={field.id}
            className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder={field.placeholder}
          />
        </div>
      ))}

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-300 mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
          placeholder="How can I help you?"
        />
      </div>
      <button
        type="button"
        className="mt-2 w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-4 rounded-lg transition-all hover:scale-[1.02]"
      >
        Send Message
      </button>
    </motion.form>
  );
}
