import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section";
import { Glow } from "@/components/ui/glow";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden border-b border-border py-12 lg:py-20">
      <Glow className="-right-40 -top-40 h-[560px] w-[560px]" />
      <Container>
        <div className="flex max-w-3xl flex-col gap-6">
          <Eyebrow>About Moonar</Eyebrow>
          <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-text-primary sm:text-5xl">
            Built at the intersection of tyre engineering and software
            engineering.
          </h1>
          <p className="text-balance text-lg leading-relaxed text-text-secondary">
            Moonar was founded to combine deep tyre engineering expertise
            with enterprise software engineering — not a software vendor
            learning tyre engineering, nor an engineering consultancy
            building software on the side.
          </p>
        </div>

        <div className="relative mt-12 aspect-[3/2] w-full overflow-hidden rounded-md">
          <Image
            src="/about-hero.png"
            alt="A tyre cross-section rendered in two halves: the left half as a detailed physical engineering model with tyre design, mould engineering, section design, materials and industrial process references; the right half transitioning into an abstract digital wireframe representing cloud architecture, enterprise software, AI and machine learning, data engineering and scalable platforms."
            fill
            priority
            sizes="(min-width: 1024px) 900px, 100vw"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{ boxShadow: "inset 0 0 120px 40px var(--color-background)" }}
          />
        </div>
      </Container>
    </section>
  );
}
