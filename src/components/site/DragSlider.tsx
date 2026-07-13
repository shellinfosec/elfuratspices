import { useCallback, useEffect, useState, type ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  items: ReactNode[];
  slideClass?: string;
};

export function DragSlider({ items, slideClass = "basis-[78%] sm:basis-[45%] md:basis-[32%] lg:basis-[24%]" }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
    loop: false,
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("scroll", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-5 -ml-2 pl-2 select-none cursor-grab active:cursor-grabbing">
          {items.map((child, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className={`shrink-0 ${slideClass}`}
            >
              {child}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-end gap-3 pr-6 lg:pr-[max(2.5rem,calc((100%-80rem)/2))]">
        <button
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canPrev}
          aria-label="Previous"
          className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-clove/15 bg-white text-clove transition-all duration-500 hover:bg-clove hover:text-white hover:-translate-x-0.5 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canNext}
          aria-label="Next"
          className="group inline-flex h-12 w-12 items-center justify-center rounded-full bg-terracotta text-white transition-all duration-500 hover:bg-clove hover:translate-x-0.5 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
