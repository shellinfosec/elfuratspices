import { useRef, useState, type MouseEvent } from "react";

type Props = {
  src: string;
  alt: string;
  zoom?: number;
  className?: string;
};

export function ZoomImage({ src, alt, zoom = 2.2, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [active, setActive] = useState(false);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    setPos({ x, y });
  };

  return (
    <div
      ref={ref}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onMouseMove={onMove}
      className={`relative overflow-hidden rounded-3xl bg-[#f2ece4] cursor-zoom-in ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="eager"
        style={{
          transformOrigin: `${pos.x}% ${pos.y}%`,
          transform: active ? `scale(${zoom})` : "scale(1)",
        }}
        className="h-full w-full object-cover transition-transform duration-500 ease-out"
      />
      {active && (
        <div className="pointer-events-none absolute top-4 right-4 rounded-full bg-white/85 backdrop-blur px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-clove shadow-float">
          Move to zoom
        </div>
      )}
    </div>
  );
}
