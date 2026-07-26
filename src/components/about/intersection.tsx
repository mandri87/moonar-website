import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Logo } from "@/components/layout/logo";

const tyreEngineering = [
  "Tyre Design",
  "Mould Design",
  "Section Design",
  "Industrial Workflows",
  "Manufacturing",
];

const softwareEngineering = [
  "Cloud Architecture",
  "Enterprise Software",
  "Artificial Intelligence",
  "Computer Vision",
  "Data Engineering",
];

function Discipline({
  label,
  items,
  align = "left",
}: {
  label: string;
  items: string[];
  align?: "left" | "right";
}) {
  return (
    <div
      className={
        align === "right"
          ? "flex flex-col items-center gap-4 text-center sm:items-end sm:text-right"
          : "flex flex-col items-center gap-4 text-center sm:items-start sm:text-left"
      }
    >
      <span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-text-primary">
        {label}
      </span>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item} className="text-base text-text-secondary">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Intersection() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="The Intersection of Two Worlds"
          title="Two disciplines. One company."
          align="center"
        />

        <div className="mx-auto mt-14 flex max-w-4xl flex-col items-center gap-10 rounded-md border border-border bg-surface px-8 py-12 sm:gap-8">
          <div className="grid w-full grid-cols-1 items-center gap-10 sm:grid-cols-[1fr_auto_1fr] sm:gap-6">
            <Discipline label="Tyre Engineering" items={tyreEngineering} align="left" />
            <span className="font-mono text-3xl text-accent-secondary" aria-hidden="true">
              ×
            </span>
            <Discipline
              label="Software Engineering"
              items={softwareEngineering}
              align="right"
            />
          </div>

          <span className="font-mono text-3xl text-text-muted" aria-hidden="true">
            =
          </span>

          <Logo height={56} />
        </div>

        <p className="mx-auto mt-10 max-w-xl text-balance text-center text-lg leading-relaxed text-text-secondary">
          Moonar doesn&apos;t simply build software for tyre engineers. It
          builds software from tyre engineering expertise.
        </p>
      </Container>
    </Section>
  );
}
