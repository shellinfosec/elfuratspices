import { cn } from "@/lib/utils";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
  skeletonClassName?: string;
  priority?: boolean;
}

export function Image({ className, containerClassName, skeletonClassName, alt, priority = false, ...props }: ImageProps) {
  return (
    <img
      {...props}
      alt={alt || "Elfurat Spices Image"}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      className={cn(
        "object-cover",
        className
      )}
    />
  );
}
