import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const FloatingCallButton = () => {
  return (
    <motion.a
      href="tel:+4915782208713"
      aria-label="Jetzt anrufen"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-2xl transition-shadow hover:shadow-blue-600/30 lg:h-12 lg:w-12 lg:opacity-70 lg:hover:opacity-100"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 animate-ping rounded-full bg-blue-600 opacity-20" />
      <Phone className="relative h-5 w-5" />
    </motion.a>
  );
};

export default FloatingCallButton;
