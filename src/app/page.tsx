import { Hero } from "@/components/home/hero";
import { Platform } from "@/components/home/platform";
import { Products } from "@/components/home/products";
import { IndustrialApplication } from "@/components/home/industrial-application";
import { WhyMoonar } from "@/components/home/why-moonar";
import { FinalCta } from "@/components/home/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Platform />
      <Products />
      <IndustrialApplication />
      <WhyMoonar />
      <FinalCta id="company" />
    </>
  );
}
