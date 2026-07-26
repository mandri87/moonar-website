import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

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
    <section id={id} className="border-t border-border py-12 lg:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-md border border-border-strong bg-light-surface px-8 py-16 text-center sm:px-16">
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
            <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-dark-text sm:text-4xl">
              {heading}
            </h2>
            <p className="text-balance text-base leading-relaxed text-dark-text/70 sm:text-lg">
              {description}
            </p>
            <Button href="/contact" size="lg">
              Request a Demo
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
