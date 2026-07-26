import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section";
import { HeroVisual } from "@/components/home/hero-visual";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border py-12 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          <div className="flex flex-col gap-8">
            <Eyebrow>Engineering Software for Tyre Development</Eyebrow>
            <h1 className="text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-text-primary sm:text-5xl lg:text-[3.4rem]">
              Engineering Intelligence for Tyre Development
            </h1>
            <p className="max-w-xl text-balance text-lg leading-relaxed text-text-secondary">
              Moonar develops AI-powered engineering software that helps tyre
              manufacturers automate design, predict performance and turn
              technical knowledge into repeatable engineering workflows.
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-text-muted">
              Built specifically for tyre R&amp;D, design and industrial
              engineering teams.
            </p>
          </div>

          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}
