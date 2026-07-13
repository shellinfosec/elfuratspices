import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export function BackToTop() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 400, damping: 40, mass: 0.1 });
  
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const R = 22;
  const C = 2 * Math.PI * R;
  const offset = useTransform(smoothProgress, [0, 1], [C, 0]);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`group cursor-pointer fixed bottom-24 right-5 sm:right-8 z-40 h-14 w-14 rounded-full glass shadow-deep flex items-center justify-center ease-elfurat transition-all duration-500 hover:scale-110 hover:shadow-float ${
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "pointer-events-none opacity-0 translate-y-4"
      }`}
    >
      <svg viewBox="0 0 50 50" className="absolute inset-0 -rotate-90 h-full w-full pointer-events-none">
        <circle cx="25" cy="25" r={R} stroke="rgba(62,39,35,0.1)" strokeWidth="2" fill="none" />
        <motion.circle
          cx="25" cy="25" r={R}
          stroke="#bf6040"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          strokeDasharray={C}
          style={{ strokeDashoffset: offset }}
        />
      </svg>
      <ArrowUp className="h-5 w-5 text-clove" />
    </button>
  );
}
