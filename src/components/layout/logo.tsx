import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  imageClassName,
  height = 52,
}: {
  className?: string;
  imageClassName?: string;
  height?: number;
}) {
  const width = Math.round(height * (271 / 262));

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src="/brand/icon.png"
        alt=""
        width={width}
        height={height}
        priority
        className={cn("h-auto w-auto object-contain", imageClassName)}
        style={{ height, width: "auto" }}
      />
      <span className="flex flex-col items-center gap-1 leading-none">
        <span
          className="font-semibold tracking-tight text-text-primary"
          style={{ fontSize: height * 0.36 }}
        >
          MOONAR
        </span>
        <span
          className="flex items-center gap-1.5 font-semibold uppercase text-text-muted"
          style={{ fontSize: height * 0.13, letterSpacing: "0.14em" }}
        >
          <span aria-hidden="true" className="h-px w-3 shrink-0 bg-text-muted" />
          Tyre Solution
          <span aria-hidden="true" className="h-px w-3 shrink-0 bg-text-muted" />
        </span>
      </span>
    </span>
  );
}
