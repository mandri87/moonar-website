import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ExtrusionProfileVisual } from "@/components/products/extrusion-profile-visual";

export function ExtrusionCalibration() {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="From Theoretical to Real"
              title="AI-calibrated extrusion profiles"
              description="Section Designer + first develops flat, unrolled theoretical profiles of the tread and sidewall from the cured tyre section. An AI model then predicts the corresponding extrusion profiles, calibrated against real profile data measured from tyres in normal production."
            />
          </Reveal>

          <Reveal delay={100}>
            <ExtrusionProfileVisual />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
