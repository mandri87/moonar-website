import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section";
import { referenceSections } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "References",
  description: "Engineering reference material from Moonar.",
};

export default function ReferencesPage() {
  return (
    <section className="py-12 lg:py-20">
      <Container>
        <Eyebrow>References</Eyebrow>
        <h1 className="mt-4 max-w-2xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-text-primary sm:text-5xl">
          Engineering reference material
        </h1>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {referenceSections.map((section) => (
            <Link
              key={section.slug}
              href={`/references/${section.slug}`}
              className="flex flex-col gap-3 rounded-md border border-border bg-surface p-6 transition-colors duration-150 hover:border-border-strong"
            >
              <h2 className="text-base font-semibold text-text-primary">
                {section.label}
              </h2>
              <p className="text-sm leading-relaxed text-text-secondary">
                {section.description}
              </p>
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-accent-secondary">
                Explore
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
