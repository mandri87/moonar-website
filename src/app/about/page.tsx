import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { Intersection } from "@/components/about/intersection";
import { Culture } from "@/components/about/culture";
import { Research } from "@/components/about/research";
import { LookingAhead } from "@/components/about/looking-ahead";
import { FinalCta } from "@/components/home/final-cta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Moonar is built at the intersection of tyre engineering and enterprise software engineering — a combination of expertise that shapes how the platform is designed and built.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Intersection />
      <Culture />
      <Research />
      <LookingAhead />
      <FinalCta
        heading="Talk to Moonar's engineering team"
        description="If you want to understand how Moonar's tyre engineering and software teams work together, we're glad to talk through it in detail."
      />
    </>
  );
}
