import type { LucideIcon } from "lucide-react";
import { Settings2, Webhook, Cloud } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import type { ProductDetailSection } from "@/lib/product-content";

const icons: Record<string, LucideIcon> = {
  configurability: Settings2,
  integration: Webhook,
  deployment: Cloud,
};

const labels: Record<string, string> = {
  configurability: "Configurability",
  integration: "Integration",
  deployment: "Deployment",
};

export function ProductDetails({
  configurability,
  integration,
  deployment,
}: {
  configurability: ProductDetailSection;
  integration: ProductDetailSection;
  deployment: ProductDetailSection;
}) {
  const blocks = [
    { key: "configurability", ...configurability },
    { key: "integration", ...integration },
    { key: "deployment", ...deployment },
  ];

  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Enterprise Fit"
            title="Configurability, integration and deployment"
          />
        </Reveal>

        <Reveal>
          <div className="card-elevated mt-12 flex flex-col divide-y divide-border rounded-md border border-border bg-surface">
            {blocks.map((block) => {
              const Icon = icons[block.key];
              return (
                <div key={block.key} className="flex flex-col gap-4 p-7 sm:flex-row sm:gap-6">
                  <div className="flex items-center gap-3 sm:w-48 sm:shrink-0">
                    <Icon className="h-5 w-5 text-accent-secondary" strokeWidth={1.5} aria-hidden="true" />
                    <span className="font-mono text-xs uppercase tracking-[0.1em] text-text-muted">
                      {labels[block.key]}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-sm font-semibold text-text-primary">
                      {block.heading}
                    </h3>
                    <p className="text-sm leading-relaxed text-text-secondary">
                      {block.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
