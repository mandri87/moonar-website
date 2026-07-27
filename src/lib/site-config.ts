export const siteConfig = {
  name: "Moonar",
  legalName: "Moonar Srl",
  domain: "www.moonar.ai",
  url: "https://www.moonar.ai",
  tagline: "Engineering intelligence for tyre development.",
  description:
    "Moonar develops AI-powered engineering software for tyre design, mould automation, tyre section development and tyre performance prediction.",
  address: {
    line1: "Via di Cervognano 11",
    line2: "53045 Montepulciano, Siena, Italy",
    vat: "IT01613020526",
  },
} as const;

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Products",
    children: [
      { label: "tAIre Designer Suite", href: "/products/taire-designer-suite" },
      { label: "tAIre Section Scanner", href: "/products/taire-section-scanner" },
      { label: "tAIre Forge", href: "/products/taire-forge" },
    ],
  },
  {
    label: "References",
    children: [
      { label: "Fundamentals", href: "/references/fundamentals" },
      { label: "Engineering Insights", href: "/references/engineering-insights" },
      { label: "White Papers", href: "/references/white-papers" },
      { label: "Case Studies", href: "/references/case-studies" },
      { label: "Publications", href: "/references/publications" },
      { label: "Academy", href: "/references/academy" },
      { label: "Glossary", href: "/references/glossary" },
      { label: "News", href: "/references/news" },
    ],
  },
] as const;

export const referenceSections = [
  {
    slug: "fundamentals",
    label: "Fundamentals",
    description:
      "Foundational engineering concepts behind tyre mould, section and performance development.",
  },
  {
    slug: "engineering-insights",
    label: "Engineering Insights",
    description: "Technical perspectives on tyre design, simulation and automation.",
  },
  {
    slug: "white-papers",
    label: "White Papers",
    description: "In-depth documentation of Moonar's engineering approaches.",
  },
  {
    slug: "case-studies",
    label: "Case Studies",
    description: "Applied examples of Moonar workflows in tyre development programs.",
  },
  {
    slug: "publications",
    label: "Publications",
    description: "Research and methodology behind Moonar's predictive models.",
  },
  {
    slug: "academy",
    label: "Academy",
    description: "Training resources for engineering teams working with Moonar.",
  },
  {
    slug: "glossary",
    label: "Glossary",
    description: "Definitions of technical terms used across tyre engineering and Moonar's platform.",
  },
  {
    slug: "news",
    label: "News",
    description: "Updates on Moonar's products, research and industrial partnerships.",
  },
] as const;

export const products = [
  {
    id: "taire-designer-suite",
    name: "tAIre Designer Suite",
    shortName: "tAIre Designer Suite",
    summary:
      "An integrated engineering suite that uses AI to translate component geometry between green and cured states.",
    benefit:
      "Connect extrusion profiles, cured component geometry and tyre specifications within one consistent, bidirectional workflow.",
    href: "/products/taire-designer-suite",
    modules: [
      {
        id: "mould-designer-plus",
        name: "Mould Designer +",
        summary:
          "Automatically generates tyre mould geometries from alignment data, engineering parameters and customer-specific design rules.",
        benefit:
          "Reduce repetitive CAD work, standardize mould development and generate consistent, dimensioned DXF outputs.",
        description:
          "Mould Designer + transforms tyre alignment data and engineering parameters into automatically generated mould geometries. Customer-specific rules and dimensional constraints can be incorporated into the workflow, producing consistent engineering outputs and dimensioned DXF files ready for downstream development.",
        outputs: ["Alignment data", "Engineering parameters"],
        result: "Dimensioned DXF output",
      },
      {
        id: "section-designer-plus",
        name: "Section Designer +",
        summary:
          "Calculates the specification matrix and develops flat, unrolled theoretical profiles of the tread and sidewall from the cured tyre section.",
        benefit:
          "Predict extrusion profiles from theoretical tread and sidewall geometry, calibrated against real profile data from tyres in normal production.",
        description:
          "Section Designer + calculates the specification matrix and develops flat, unrolled theoretical profiles of the tread and sidewall from the cured tyre section. An AI model then predicts the corresponding extrusion profiles, calibrated against real profile data measured from tyres in normal production, enabling bidirectional workflows between specification data, tyre geometry and extrusion profiles.",
        outputs: ["Specifications", "Alignment data"],
        result: "Tyre section geometry",
      },
    ],
  },
  {
    id: "taire-section-scanner",
    name: "tAIre Section Scanner",
    shortName: "tAIre Section Scanner",
    summary:
      "Convert tyre cut-section images into structured engineering geometries and design parameters.",
    benefit:
      "Turn physical tyre sections into reusable digital inputs for benchmarking, design and optimization.",
    href: "/products/taire-section-scanner",
    modules: [],
  },
  {
    id: "taire-forge",
    name: "tAIre Forge",
    shortName: "tAIre Forge",
    summary:
      "Predicts inflated tyre profile, footprint, rolling resistance and cornering stiffness from specification matrix data.",
    benefit:
      "Turn specification and experimental data into reusable predictive engineering intelligence.",
    outputs: ["Specification matrix", "Load cases"],
    result: "Performance predictions",
    href: "/products/taire-forge",
    modules: [],
  },
] as const;
