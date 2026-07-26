import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section";

export function ProductHero({
  eyebrow,
  name,
  summary,
  benefit,
  visual,
}: {
  eyebrow: string;
  name: string;
  summary: string;
  benefit: string;
  visual: React.ReactNode;
}) {
  return (
    <section className="border-b border-border py-12 lg:py-20">
      <Container>
        <Link
          href="/#products"
          className="mb-10 inline-flex items-center gap-2 text-sm text-text-secondary transition-colors duration-150 hover:text-text-primary"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          All products
        </Link>

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          <div className="flex flex-col gap-6">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-text-primary sm:text-5xl">
              {name}
            </h1>
            <p className="max-w-xl text-balance text-lg leading-relaxed text-text-secondary">
              {summary}
            </p>
            <p className="max-w-xl text-balance text-sm leading-relaxed text-text-muted">
              {benefit}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href="/contact" size="lg">
                Request a Demo
              </Button>
              <Button href="/#products" variant="secondary" size="lg">
                All Products
              </Button>
            </div>
          </div>

          {visual}
        </div>
      </Container>
    </section>
  );
}
