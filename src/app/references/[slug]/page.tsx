import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { referenceSections } from "@/lib/site-config";
import { getCategoryArticles, type CategorySlug } from "@/lib/knowledge-base";

export function generateStaticParams() {
  return referenceSections.map((section) => ({ slug: section.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const section = referenceSections.find((item) => item.slug === slug);
  if (!section) return {};

  return {
    title: section.label,
    description: section.description,
  };
}

export default async function ReferenceSectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const section = referenceSections.find((item) => item.slug === slug);
  if (!section) notFound();

  const articles = getCategoryArticles(slug as CategorySlug);

  return (
    <section className="py-12 lg:py-20">
      <Container>
        <Link
          href="/references"
          className="mb-10 flex w-fit items-center gap-2 text-sm text-text-secondary transition-colors duration-150 hover:text-text-primary"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          All references
        </Link>

        <Eyebrow>References</Eyebrow>
        <h1 className="mt-4 max-w-2xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-text-primary sm:text-5xl">
          {section.label}
        </h1>
        <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-text-secondary">
          {section.description}
        </p>

        {articles.length > 0 ? (
          <ul className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {articles.map((article, index) => (
              <Reveal key={article.slug} as="li" delay={index * 60}>
                <Link
                  href={`/references/${slug}/${article.slug}`}
                  className="card-elevated flex items-center justify-between gap-3 rounded-md border border-border bg-surface px-5 py-4 text-sm font-medium text-text-primary"
                >
                  {article.title}
                  <ArrowRight
                    className="h-4 w-4 shrink-0 text-text-muted"
                    aria-hidden="true"
                  />
                </Link>
              </Reveal>
            ))}
          </ul>
        ) : (
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.1em] text-text-muted">
            Content in preparation
          </p>
        )}
      </Container>
    </section>
  );
}
