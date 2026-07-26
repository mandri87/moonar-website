import { Target, Cpu, Server, Webhook } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, Eyebrow } from "@/components/ui/section";

const points = [
  { icon: Target, text: "Built exclusively for tyre engineering" },
  { icon: Cpu, text: "AI-driven engineering automation" },
  { icon: Server, text: "Enterprise-ready deployment" },
  { icon: Webhook, text: "Seamless integration with existing workflows" },
];

export function WhyMoonar() {
  return (
    <Section id="solutions">
      <Container>
        <Eyebrow>Why Moonar</Eyebrow>

        <div className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point) => (
            <div
              key={point.text}
              className="flex items-center gap-3 bg-surface p-6"
            >
              <point.icon
                className="h-5 w-5 shrink-0 text-accent"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <span className="text-sm font-medium leading-snug text-text-primary">
                {point.text}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
