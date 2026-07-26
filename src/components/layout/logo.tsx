import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  imageClassName,
  height = 68,
}: {
  className?: string;
  imageClassName?: string;
  height?: number;
}) {
  const width = Math.round(height * (534 / 467));

  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src="/brand/logo.png"
        alt="Moonar"
        width={width}
        height={height}
        priority
        className={cn("h-auto w-auto object-contain", imageClassName)}
        style={{ height, width: "auto" }}
      />
    </span>
  );
}
