import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";

export function LookingAhead() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Looking Ahead"
          title="A long-term platform for tyre engineering"
        />

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-text-secondary">
          Moonar&apos;s objective is to become the reference platform
          connecting tyre engineering knowledge through artificial
          intelligence — built with the same patience and rigor that tyre
          engineering itself has always demanded.
        </p>
      </Container>
    </Section>
  );
}
