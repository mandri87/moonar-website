import { CornerLeftDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section";

export function PlatformPositionNote({
  label,
  description,
}: {
  label: string;
  description: string;
}) {
  return (
    <div className="pb-12 lg:pb-20">
      <Container>
        <div className="rounded-md border border-border-strong bg-surface p-7 lg:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex max-w-xl flex-col gap-3">
              <Eyebrow>Platform Position</Eyebrow>
              <h3 className="text-lg font-semibold text-text-primary">{label}</h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {description}
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-3 font-mono text-xs">
              <span className="rounded-sm border border-border-strong px-3 py-2 text-text-muted">
                Manufacturing and Validation
              </span>
              <CornerLeftDown className="h-4 w-4 shrink-0 text-accent-secondary" aria-hidden="true" />
              <span className="rounded-sm border border-accent bg-accent/10 px-3 py-2 text-text-primary">
                tAIre Section Scanner
              </span>
              <CornerLeftDown className="h-4 w-4 shrink-0 rotate-90 text-accent-secondary" aria-hidden="true" />
              <span className="rounded-sm border border-border-strong px-3 py-2 text-text-muted">
                Tyre Geometry
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
