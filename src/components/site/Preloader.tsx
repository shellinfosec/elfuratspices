import { useEffect, useState } from "react";
import { LOGOS } from "@/lib/brand";

export function Preloader() {
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const start = Date.now();
    const finish = () => {
      const elapsed = Date.now() - start;
      const wait = Math.max(0, 900 - elapsed);
      setTimeout(() => {
        setDone(true);
        setTimeout(() => setHidden(true), 700);
      }, wait);
    };
    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });
    // Failsafe
    const t = setTimeout(finish, 2500);
    return () => clearTimeout(t);
  }, []);

  if (hidden) return null;
  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background ease-elfurat transition-all duration-700 ${
        done ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="pattern-dots absolute inset-0 opacity-40" />
      <div className="relative flex flex-col items-center gap-6">
        <div className="relative flex items-center gap-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className="h-2.5 w-2.5 rounded-full bg-terracotta animate-spice-pulse"
              style={{ animationDelay: `${i * 140}ms` }}
            />
          ))}
        </div>
        <img src={LOGOS.color3x1} alt="Elfurat Spices" className="h-9 w-auto opacity-90" />
        <span className="text-[11px] uppercase tracking-[0.35em] text-clove/60 font-medium">
          Premium Indian Spices
        </span>
      </div>
    </div>
  );
}
