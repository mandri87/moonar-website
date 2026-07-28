import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function ProductWorkflow({ steps }: { steps: string[] }) {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Workflow" title="How it works" />
        </Reveal>

        <ol className="mt-12 flex max-w-2xl flex-col">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;
            return (
              <Reveal key={step} as="li" delay={index * 80} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-border-strong font-mono text-xs text-accent-secondary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {!isLast ? (
                    <span className="mt-1 w-px flex-1 bg-border" aria-hidden="true" />
                  ) : null}
                </div>
                <p className="pb-8 pt-1 text-sm leading-relaxed text-text-secondary">
                  {step}
                </p>
              </Reveal>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}
