import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { referenceSections } from "@/lib/site-config";
import {
  getAllArticleParams,
  getArticle,
  type CategorySlug,
} from "@/lib/knowledge-base";
import {
  BicycleModelVisual,
  SlipAngleForceVisual,
  LoadTransferVisual,
  UndersteerOversteerVisual,
  GgDiagramVisual,
} from "@/components/references/vehicle-dynamics-visuals";

const articleVisuals: Record<string, React.ComponentType> = {
  "bicycle-model-and-vehicle-handling": BicycleModelVisual,
  "slip-angle-and-lateral-force-generation": SlipAngleForceVisual,
  "lateral-load-transfer-and-axle-characteristics": LoadTransferVisual,
  "understeer-oversteer-gradient": UndersteerOversteerVisual,
  "combined-slip-and-gg-diagram": GgDiagramVisual,
};

export function generateStaticParams() {
  return getAllArticleParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; article: string }>;
}): Promise<Metadata> {
  const { slug, article } = await params;
  const content = await getArticle(slug as CategorySlug, article);
  if (!content) return {};

  return { title: content.title };
}

export default async function ReferenceArticlePage({
  params,
}: {
  params: Promise<{ slug: string; article: string }>;
}) {
  const { slug, article } = await params;
  const section = referenceSections.find((item) => item.slug === slug);
  if (!section) notFound();

  const content = await getArticle(slug as CategorySlug, article);
  if (!content) notFound();

  const Visual = articleVisuals[article];

  return (
    <section className="py-12 lg:py-20">
      <Container>
        <Link
          href={`/references/${slug}`}
          className="mb-10 flex w-fit items-center gap-2 text-sm text-text-secondary transition-colors duration-150 hover:text-text-primary"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {section.label}
        </Link>

        <Eyebrow>{section.label}</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-text-primary sm:text-5xl">
          {content.title}
        </h1>

        {Visual ? (
          <Reveal className="mt-12">
            <Visual />
          </Reveal>
        ) : null}

        <div
          className="prose prose-invert mt-12 max-w-3xl prose-headings:font-semibold prose-headings:tracking-tight prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: content.html }}
        />
      </Container>
    </section>
  );
}
