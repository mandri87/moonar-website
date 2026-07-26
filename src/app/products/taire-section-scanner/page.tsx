import type { Metadata } from "next";
import { ProductHero } from "@/components/products/product-hero";
import { ProductProblem } from "@/components/products/product-problem";
import { PlatformPositionNote } from "@/components/products/platform-position-note";
import { ProductWorkflow } from "@/components/products/product-workflow";
import { ProductIo } from "@/components/products/product-io";
import { ProductDetails } from "@/components/products/product-details";
import { ProductCrossLinks } from "@/components/products/product-cross-links";
import { FinalCta } from "@/components/home/final-cta";
import { ImageHeroVisual } from "@/components/ui/image-hero-visual";
import { products } from "@/lib/site-config";
import { productContent } from "@/lib/product-content";

const product = products.find((item) => item.id === "taire-section-scanner")!;
const content = productContent["taire-section-scanner"];

export const metadata: Metadata = {
  title: product.name,
  description: content.heroSummary,
};

export default function TaireSectionScannerPage() {
  return (
    <>
      <ProductHero
        eyebrow={content.eyebrow}
        name={product.name}
        summary={content.heroSummary}
        benefit={content.heroBenefit}
        visual={
          <ImageHeroVisual
            src="/products/taire-section-scanner.png"
            alt="Tyre cross-section with scan reticle markers, representing tAIre Section Scanner"
          />
        }
      />
      <ProductProblem {...content.problem} />
      {content.platformNote ? (
        <PlatformPositionNote {...content.platformNote} />
      ) : null}
      <ProductWorkflow steps={[...content.workflow]} />
      <ProductIo inputs={[...content.inputs]} outputs={[...content.outputs]} />
      <ProductDetails
        configurability={content.configurability}
        integration={content.integration}
        deployment={content.deployment}
      />
      <ProductCrossLinks current="taire-section-scanner" />
      <FinalCta
        heading="Discuss tAIre Section Scanner with Moonar's engineering team"
        description="Talk to our engineering team about your benchmarking process, available section imagery and how digitized geometry should feed into your design workflow."
      />
    </>
  );
}
