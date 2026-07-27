import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section";
import { ContactForm } from "@/components/contact/contact-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Request a Demo",
  description:
    "Talk to Moonar's engineering team about your tyre design, mould automation and performance prediction workflow.",
};

export default function ContactPage() {
  return (
    <section className="py-12 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-6">
            <Eyebrow>Request a Demo</Eyebrow>
            <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-text-primary sm:text-5xl">
              Talk to Moonar&apos;s engineering team
            </h1>
            <p className="max-w-md text-balance text-lg leading-relaxed text-text-secondary">
              Every tyre manufacturer has different specifications, internal
              procedures and integration requirements. Tell us about your
              workflow and we&apos;ll get back to you shortly.
            </p>

            <div className="mt-6 flex flex-col gap-1 border-t border-border pt-6 text-sm text-text-secondary">
              <p>{siteConfig.legalName}</p>
              <p>{siteConfig.address.line1}</p>
              <p>{siteConfig.address.line2}</p>
            </div>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
