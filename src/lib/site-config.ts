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
      { label: "Tyre Design", href: "/references/tyre-design" },
      { label: "Simulation", href: "/references/simulation" },
      { label: "Tyre & Vehicle Dynamics", href: "/references/tyre-vehicle-dynamics" },
      { label: "Testing", href: "/references/testing" },
      { label: "Process", href: "/references/process" },
      { label: "AI & Data Infrastructure", href: "/references/ai-data-infrastructure" },
      { label: "Publications", href: "/references/publications" },
      { label: "Case Studies", href: "/references/case-studies" },
      { label: "Academy", href: "/references/academy" },
      { label: "Glossary", href: "/references/glossary" },
    ],
  },
] as const;

export const referenceSections = [
  {
    slug: "tyre-design",
    label: "Tyre Design",
    description:
      "Mould, section and component design fundamentals for tyre engineering.",
  },
  {
    slug: "simulation",
    label: "Simulation",
    description:
      "FEA and vehicle dynamics simulation methods for tyre and vehicle behaviour.",
  },
  {
    slug: "tyre-vehicle-dynamics",
    label: "Tyre & Vehicle Dynamics",
    description:
      "How an individual tyre generates force, and how those forces combine at vehicle level to determine handling behaviour.",
  },
  {
    slug: "testing",
    label: "Testing",
    description:
      "Indoor and outdoor tyre testing, from performance evaluation to regulatory homologation.",
  },
  {
    slug: "process",
    label: "Process",
    description: "Industrial and manufacturing processes behind tyre production.",
  },
  {
    slug: "ai-data-infrastructure",
    label: "AI & Data Infrastructure",
    description:
      "Data architecture and machine learning foundations behind Moonar's predictive models.",
  },
  {
    slug: "publications",
    label: "Publications",
    description: "Academic and research publications related to Moonar's engineering work.",
  },
  {
    slug: "case-studies",
    label: "Case Studies",
    description: "Applied examples of Moonar workflows in tyre development programs.",
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
