import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Glow } from "@/components/ui/glow";
import { Reveal } from "@/components/ui/reveal";

export function FinalCta({
  id,
  heading = "Discuss your tyre engineering workflow with Moonar",
  description = "Every tyre manufacturer has different specifications and integration requirements. Talk to our engineering team about your development process.",
}: {
  id?: string;
  heading?: string;
  description?: string;
}) {
  return (
    <section id={id} className="relative overflow-hidden border-t border-border py-12 lg:py-20">
      <Glow className="left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2" />
      <Container>
        <div className="relative overflow-hidden rounded-md border border-border-strong bg-light-surface px-8 py-16 text-center sm:px-16">
          <Reveal className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
            <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-dark-text sm:text-4xl">
              {heading}
            </h2>
            <p className="text-balance text-base leading-relaxed text-dark-text/70 sm:text-lg">
              {description}
            </p>
            <Button href="/contact" size="lg">
              Request a Demo
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
