import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function ProductProblem({
  heading,
  description,
}: {
  heading: string;
  description: string;
}) {
  return (
    <Section className="bg-surface">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Problem Solved"
            title={heading}
            description={description}
          />
        </Reveal>
      </Container>
    </Section>
  );
}
