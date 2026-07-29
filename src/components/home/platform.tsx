import Link from "next/link";
import { ArrowRight, CornerLeftUp } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

const flowSteps = [
  "Specification Data",
  "Engineering Automation",
  "Tyre Geometry",
  "Performance Prediction",
  "Manufacturing and Validation",
];

export function Platform() {
  return (
    <Section id="platform" className="bg-surface">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="tAIre Platform"
            title="One engineering platform. Multiple tyre development workflows."
          />
        </Reveal>

        <div className="mt-10 flex flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-0">
          {flowSteps.map((step, index) => (
            <div key={step} className="flex items-stretch">
              <Reveal delay={index * 80} className="flex-1">
                <div className="card-elevated flex h-full flex-1 items-center gap-3 rounded-sm border border-border bg-surface-raised px-5 py-4 lg:flex-col lg:items-start lg:justify-center lg:gap-2">
                  <span className="font-mono text-xs text-text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium text-text-primary">
                    {step}
                  </span>
                </div>
              </Reveal>
              {index < flowSteps.length - 1 ? (
                <div className="flex items-center justify-center px-2 lg:px-3">
                  <ArrowRight
                    className="h-4 w-4 shrink-0 text-text-muted lg:rotate-0"
                    aria-hidden="true"
                  />
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <Link
          href="/products/taire-section-scanner"
          className="mt-3 flex flex-col gap-2 rounded-sm border border-dashed border-border-strong px-5 py-4 transition-colors duration-150 hover:border-accent-secondary sm:flex-row sm:items-center sm:gap-4"
        >
          <span className="flex shrink-0 items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-accent-secondary">
            <CornerLeftUp className="h-4 w-4" aria-hidden="true" />
            tAIre Section Scanner
          </span>
          <span className="text-sm text-text-secondary">
            Physical Section to Digital Geometry — feeds back from Manufacturing
            and Validation into Tyre Geometry.
          </span>
        </Link>
      </Container>
    </Section>
  );
}
