import { cn } from "@/lib/utils";

export function Glow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute rounded-full", className)}
      style={{
        background:
          "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
        opacity: 0.1,
        filter: "blur(90px)",
      }}
    />
  );
}
