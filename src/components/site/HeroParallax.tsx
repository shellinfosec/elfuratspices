import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

type Props = {
  image: string;
  alt: string;
  children: ReactNode;
  className?: string;
};

export function HeroParallax({ image, alt, children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Remove useSpring since Lenis provides the smooth scrolling. 
  // Stacking useSpring on top of Lenis causes extreme jitter and physics fighting.
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={ref}
      className={`relative isolate min-h-[100svh] w-full overflow-hidden ${className}`}
    >
      <motion.div
        style={{ y, scale, willChange: "transform" }}
        className="absolute inset-0"
      >
        <img
          src={image}
          alt={alt}
          className="h-[115%] w-full object-cover"
          loading="eager"
        />
      </motion.div>
      {/* Top overlay - improves header contrast */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-clove/80 via-clove/40 to-transparent z-[1]" />
      {/* Main hero filter - denser for text legibility everywhere */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-clove/60 via-clove/55 to-clove/95 z-[1]" />
      {/* Subtle vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(62,39,35,0.35)_100%)] z-[1]" />

      <motion.div
        style={{ opacity, y: contentY }}
        className="relative z-10 h-full"
      >
        {children}
      </motion.div>


    </section>
  );
}
