import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";

export function Research() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Research and Industrial Application"
          title="Grounded in real engineering practice"
        />

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-text-secondary">
          Moonar&apos;s software is developed within real tyre engineering
          workflows, and shaped by applied research with the University of
          Milano-Bicocca and the University of Pavia on artificial
          intelligence, computer vision and tyre engineering methods.
        </p>
      </Container>
    </Section>
  );
}
