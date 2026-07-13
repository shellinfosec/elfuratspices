import { waUrl, LOGOS } from "@/lib/brand";
import { motion } from "framer-motion";

const WA_ICON = LOGOS.whatsapp;

export function WhatsAppFloat() {
  return (
    <motion.a
      href={waUrl("Hello Elfurat Spices, I'd like to make an inquiry.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08, rotate: -4 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-5 sm:right-8 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full shadow-deep"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
      <img src={WA_ICON} alt="WhatsApp" className="relative h-14 w-14 drop-shadow-lg" loading="lazy" />
    </motion.a>
  );
}

export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return <img src={WA_ICON} alt="WhatsApp" className={className} loading="lazy" />;
}

