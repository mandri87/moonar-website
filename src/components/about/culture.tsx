import { Ruler, Cpu, Layers, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

const points = [
  {
    icon: Ruler,
    title: "Engineering First",
    description:
      "Workflows are designed around how tyre engineers actually work, not around generic automation patterns.",
  },
  {
    icon: Cpu,
    title: "AI That Supports Engineers",
    description:
      "Predictive and generative models are built to support engineering judgment, not to replace it.",
  },
  {
    icon: Layers,
    title: "Long-Term Platform Thinking",
    description:
      "The platform is built to be extended and maintained across years of engineering programs, not single projects.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Quality",
    description:
      "Software is held to the reliability, security and deployment standards expected by industrial engineering organizations.",
  },
];

export function Culture() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Engineering Culture" title="How we build" />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
          {points.map((point, index) => (
            <Reveal key={point.title} delay={index * 80}>
              <div className="flex gap-4">
                <point.icon
                  className="h-5 w-5 shrink-0 text-accent"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-semibold text-text-primary">
                    {point.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {point.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
