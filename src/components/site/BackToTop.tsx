import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? h.scrollTop / max : 0;
      setProgress(p);
      setVisible(h.scrollTop > 400);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const R = 22;
  const C = 2 * Math.PI * R;

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
        <circle
          cx="25" cy="25" r={R}
          stroke="#bf6040"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          strokeDasharray={C}
          strokeDashoffset={C * (1 - progress)}
          style={{ transition: "stroke-dashoffset 500ms cubic-bezier(0.16,1,0.3,1)" }}
        />
      </svg>
      <ArrowUp className="h-5 w-5 text-clove" />
    </button>
  );
}
