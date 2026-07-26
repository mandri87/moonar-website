import type { Metadata } from "next";
import { ProductHero } from "@/components/products/product-hero";
import { ProductProblem } from "@/components/products/product-problem";
import { ProductWorkflow } from "@/components/products/product-workflow";
import { ProductIo } from "@/components/products/product-io";
import { ProductModules } from "@/components/products/product-modules";
import { ProductDetails } from "@/components/products/product-details";
import { ProductCrossLinks } from "@/components/products/product-cross-links";
import { FinalCta } from "@/components/home/final-cta";
import { ImageHeroVisual } from "@/components/ui/image-hero-visual";
import { products } from "@/lib/site-config";
import { productContent } from "@/lib/product-content";

const product = products.find((item) => item.id === "taire-designer-suite")!;
const content = productContent["taire-designer-suite"];

export const metadata: Metadata = {
  title: product.name,
  description: content.heroSummary,
};

export default function TaireDesignerSuitePage() {
  return (
    <>
      <ProductHero
        eyebrow={content.eyebrow}
        name={product.name}
        summary={content.heroSummary}
        benefit={content.heroBenefit}
        visual={
          <ImageHeroVisual
            src="/products/taire-designer-suite.png"
            alt="Cutaway tyre illustration transitioning into a technical wireframe, representing tAIre Designer Suite"
          />
        }
      />
      <ProductProblem {...content.problem} />
      <ProductWorkflow steps={[...content.workflow]} />
      <ProductModules modules={product.modules} />
      <ProductIo inputs={[...content.inputs]} outputs={[...content.outputs]} />
      <ProductDetails
        configurability={content.configurability}
        integration={content.integration}
        deployment={content.deployment}
      />
      <ProductCrossLinks current="taire-designer-suite" />
      <FinalCta
        heading="Discuss tAIre Designer Suite with Moonar's engineering team"
        description="Talk to our engineering team about your mould and section design workflow, existing design rules and CAD or PLM environment."
      />
    </>
  );
}
