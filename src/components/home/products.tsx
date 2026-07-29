import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { products } from "@/lib/site-config";

const images: Record<string, { src: string; alt: string }> = {
  "taire-designer-suite": {
    src: "/products/taire-designer-suite.png",
    alt: "Cutaway tyre illustration transitioning into a technical wireframe, representing tAIre Designer Suite",
  },
  "taire-section-scanner": {
    src: "/products/taire-section-scanner.png",
    alt: "Tyre cross-section with scan reticle markers, representing tAIre Section Scanner",
  },
  "taire-forge": {
    src: "/products/taire-forge.png",
    alt: "Tyre cross-section rendered as a data wireframe with performance terrain, representing tAIre Forge",
  },
};

export function Products() {
  return (
    <Section id="products">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Products"
            title="Purpose-built software for tyre engineers"
            description="Each product addresses a specific stage of tyre engineering: capturing physical geometry, designing mould and section geometry, and predicting performance."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {products.map((product, index) => {
            const image = images[product.id];
            return (
              <Reveal key={product.id} delay={index * 100} className="h-full">
                <article className="card-elevated flex h-full flex-col gap-6 rounded-md border border-border bg-surface p-6">
                  {image ? (
                    <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-border">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  ) : null}
                  <div className="flex flex-1 flex-col gap-2">
                    <h3 className="text-lg font-semibold text-text-primary">
                      {product.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-text-secondary">
                      {product.summary}
                    </p>
                    <p className="text-sm leading-relaxed text-text-muted">
                      {product.benefit}
                    </p>
                  </div>
                  <Link
                    href={product.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-secondary transition-colors duration-150 hover:text-accent"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
