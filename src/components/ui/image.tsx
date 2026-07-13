import { useState } from "react";
import { cn } from "@/lib/utils";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
  skeletonClassName?: string;
  priority?: boolean;
}

export function Image({ className, containerClassName, skeletonClassName, alt, priority = false, ...props }: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden w-full h-full", containerClassName, className)}>
      {!isLoaded && (
        <div 
          className={cn(
            "absolute inset-0 bg-muted animate-spice-pulse z-0", 
            skeletonClassName
          )} 
        />
      )}
      <img
        {...props}
        alt={alt || "Elfurat Spices Image"}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        className={cn(
          "h-full w-full object-cover transition-opacity duration-300 ease-elfurat z-10 relative",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
