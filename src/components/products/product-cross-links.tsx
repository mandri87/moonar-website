import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Section, Eyebrow } from "@/components/ui/section";

const platformSteps = [
  {
    id: "taire-section-scanner",
    stage: "Capture",
    name: "tAIre Section Scanner",
    description: "Physical tyre to digital geometry",
    href: "/products/taire-section-scanner",
  },
  {
    id: "taire-designer-suite",
    stage: "Design",
    name: "tAIre Designer Suite",
    description: "Specifications to engineered mould and section",
    href: "/products/taire-designer-suite",
  },
  {
    id: "taire-forge",
    stage: "Predict",
    name: "tAIre Forge",
    description: "Specifications and geometry to performance prediction",
    href: "/products/taire-forge",
  },
] as const;

export function ProductCrossLinks({ current }: { current: string }) {
  return (
    <Section>
      <Container>
        <Eyebrow>The tAIre Platform</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-balance text-2xl font-semibold leading-tight tracking-tight text-text-primary">
          Capture, design and predict within one connected platform
        </h2>

        <div className="mt-10 flex flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-0">
          {platformSteps.map((step, index) => {
            const isCurrent = step.id === current;
            return (
              <div key={step.id} className="flex items-stretch">
                {isCurrent ? (
                  <div className="flex flex-1 flex-col justify-center gap-1.5 rounded-sm border border-accent bg-accent/10 px-5 py-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-accent-secondary">
                      {step.stage} · Current
                    </span>
                    <span className="text-sm font-medium text-text-primary">
                      {step.name}
                    </span>
                    <span className="text-xs text-text-muted">{step.description}</span>
                  </div>
                ) : (
                  <Link
                    href={step.href}
                    className={cn(
                      "flex flex-1 flex-col justify-center gap-1.5 rounded-sm border border-border bg-surface px-5 py-4 transition-colors duration-150 hover:border-border-strong",
                    )}
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-text-muted">
                      {step.stage}
                    </span>
                    <span className="text-sm font-medium text-text-primary">
                      {step.name}
                    </span>
                    <span className="text-xs text-text-muted">{step.description}</span>
                  </Link>
                )}
                {index < platformSteps.length - 1 ? (
                  <div className="flex items-center justify-center px-2 lg:px-3">
                    <ArrowRight className="h-4 w-4 shrink-0 text-text-muted" aria-hidden="true" />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
