import { Container } from "@/components/ui/container";
import { Section, Eyebrow } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

function IoList({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="card-elevated flex h-full flex-col gap-5 rounded-md border border-border bg-surface-raised p-7">
      <Eyebrow>{label}</Eyebrow>
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-sm leading-relaxed text-text-secondary"
          >
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProductIo({
  inputs,
  outputs,
}: {
  inputs: string[];
  outputs: string[];
}) {
  return (
    <Section className="bg-surface">
      <Container>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal className="h-full">
            <IoList label="Inputs" items={inputs} />
          </Reveal>
          <Reveal delay={100} className="h-full">
            <IoList label="Outputs" items={outputs} />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
