import { Factory, GraduationCap } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";

const universities = ["University of Milano-Bicocca", "University of Pavia"];

export function IndustrialApplication() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Track Record"
          title="Built through industrial application and applied research"
          description="Moonar combines real tyre engineering deployments with applied research in artificial intelligence, computer vision and engineering automation."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-md border border-border bg-surface p-7">
            <Factory className="h-5 w-5 text-accent" strokeWidth={1.5} aria-hidden="true" />
            <h3 className="text-base font-semibold text-text-primary">
              Enterprise Application
            </h3>
            <p className="text-sm leading-relaxed text-text-secondary">
              Moonar software is developed and deployed within real tyre
              engineering workflows, supporting design automation and
              performance prediction as part of ongoing industrial programs.
            </p>
          </div>

          <div className="flex flex-col gap-4 rounded-md border border-border bg-surface p-7">
            <GraduationCap className="h-5 w-5 text-accent-secondary" strokeWidth={1.5} aria-hidden="true" />
            <h3 className="text-base font-semibold text-text-primary">
              Research Collaboration
            </h3>
            <p className="text-sm leading-relaxed text-text-secondary">
              Moonar collaborates with Italian universities on applied AI,
              computer vision and tyre engineering methods.
            </p>
            <ul className="mt-1 flex flex-col gap-2 border-t border-border pt-4">
              {universities.map((name) => (
                <li
                  key={name}
                  className="text-sm font-medium text-text-primary"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
