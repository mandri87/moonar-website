import Image from "next/image";
import { cn } from "@/lib/utils";

export function ImageHeroVisual({
  src,
  alt,
  priority = true,
  imageClassName,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  imageClassName?: string;
}) {
  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className={cn("object-cover", imageClassName)}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ boxShadow: "inset 0 0 100px 30px var(--color-background)" }}
      />
    </div>
  );
}
