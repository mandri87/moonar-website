import type { Metadata } from "next";
import { ProductHero } from "@/components/products/product-hero";
import { ProductProblem } from "@/components/products/product-problem";
import { ProductWorkflow } from "@/components/products/product-workflow";
import { ProductIo } from "@/components/products/product-io";
import { ProductDetails } from "@/components/products/product-details";
import { ProductCrossLinks } from "@/components/products/product-cross-links";
import { FinalCta } from "@/components/home/final-cta";
import { ImageHeroVisual } from "@/components/ui/image-hero-visual";
import { products } from "@/lib/site-config";
import { productContent } from "@/lib/product-content";

const product = products.find((item) => item.id === "taire-forge")!;
const content = productContent["taire-forge"];

export const metadata: Metadata = {
  title: product.name,
  description: content.heroSummary,
};

export default function TaireForgePage() {
  return (
    <>
      <ProductHero
        eyebrow={content.eyebrow}
        name={product.name}
        summary={content.heroSummary}
        benefit={content.heroBenefit}
        visual={
          <ImageHeroVisual
            src="/products/taire-forge.png"
            alt="Tyre cross-section rendered as a data wireframe with performance terrain, representing tAIre Forge"
          />
        }
      />
      <ProductProblem {...content.problem} />
      <ProductWorkflow steps={[...content.workflow]} />
      <ProductIo inputs={[...content.inputs]} outputs={[...content.outputs]} />
      <ProductDetails
        configurability={content.configurability}
        integration={content.integration}
        deployment={content.deployment}
      />
      <ProductCrossLinks current="taire-forge" />
      <FinalCta
        heading="Discuss tAIre Forge with Moonar's engineering team"
        description="Talk to our engineering team about your specification format, target load and pressure conditions and how predictions should fit into your validation process."
      />
    </>
  );
}
