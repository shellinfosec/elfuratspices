import { type ReactNode } from "react";

export function Marquee({
  items,
  speed = "normal",
  className = "",
  separator,
}: {
  items: ReactNode[];
  speed?: "normal" | "slow";
  className?: string;
  separator?: ReactNode;
}) {
  const doubled = [...items, ...items];
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className={`flex w-max items-center ${
          speed === "slow" ? "animate-marquee-slow" : "animate-marquee"
        }`}
      >
        {doubled.map((it, i) => (
          <div key={i} className="flex items-center">
            <div className="px-6">{it}</div>
            {separator ?? (
              <span className="h-1.5 w-1.5 rounded-full bg-terracotta/70" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
