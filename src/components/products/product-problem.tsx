import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";

export function ProductProblem({
  heading,
  description,
}: {
  heading: string;
  description: string;
}) {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Problem Solved"
          title={heading}
          description={description}
        />
      </Container>
    </Section>
  );
}
