export type ProductDetailSection = {
  heading: string;
  description: string;
};

export type ProductDetail = {
  id: string;
  eyebrow: string;
  heroSummary: string;
  heroBenefit: string;
  problem: ProductDetailSection;
  workflow: string[];
  inputs: string[];
  outputs: string[];
  configurability: ProductDetailSection;
  integration: ProductDetailSection;
  deployment: ProductDetailSection;
  platformNote?: {
    label: string;
    description: string;
  };
};

export const productContent: Record<string, ProductDetail> = {
  "taire-designer-suite": {
    id: "taire-designer-suite",
    eyebrow: "tAIre Platform — Design",
    heroSummary:
      "An integrated engineering suite that automates mould and section design while using AI to translate component geometry between green and cured states.",
    heroBenefit:
      "Predict extrusion profiles for tread and sidewall from theoretical geometry, calibrated with real profile data from tyres in production — within one consistent, bidirectional engineering workflow.",
    problem: {
      heading: "Mould and section engineering are still built by hand",
      description:
        "Tyre mould and section geometry are typically developed manually, repeating similar engineering steps for each specification and depending on the experience of a small group of engineers. This slows down development and makes it difficult to maintain geometric consistency between mould and section design.",
    },
    workflow: [
      "Import specification data, alignment data and customer-specific design rules",
      "Calculate the specification matrix and generate tyre mould geometry with Mould Designer +",
      "Develop flat, unrolled theoretical profiles of tread and sidewall with Section Designer +",
      "Predict extrusion profiles using AI calibrated against real profile data from tyres in production",
      "Check geometric consistency between mould and section outputs",
      "Export dimensioned DXF files and structured geometry data",
    ],
    inputs: [
      "Alignment data",
      "Engineering parameters",
      "Customer-specific design rules",
      "Real production tyre profile data (calibration)",
    ],
    outputs: [
      "Dimensioned mould geometry (DXF)",
      "Tyre section geometry",
      "Tread and sidewall extrusion profiles",
      "Specification matrix",
      "Surface and rebar for FEA simulation (.step)",
      "Stress and stretch curves",
    ],
    configurability: {
      heading: "Configured to your engineering standards",
      description:
        "Each deployment is configured with a customer's specific design rules and dimensional constraints, so generated mould and section geometry reflects internal engineering standards from the first iteration.",
    },
    integration: {
      heading: "Fits existing CAD and PLM workflows",
      description:
        "Mould and section geometry is exported as dimensioned DXF files and structured data for use in existing CAD, PLM and mould manufacturing workflows.",
    },
    deployment: {
      heading: "Cloud or on-premise",
      description:
        "Runs in a customer-managed cloud environment or on-premise infrastructure, with role-based access and security requirements adapted to internal IT policy.",
    },
  },

  "taire-section-scanner": {
    id: "taire-section-scanner",
    eyebrow: "tAIre Platform — Capture",
    heroSummary:
      "An AI-powered section digitization tool that converts tyre cut-section images into structured engineering geometry and design parameters.",
    heroBenefit:
      "Accelerate tyre benchmarking and reverse-engineering activities by transforming physical section data into reusable digital inputs for design, comparison and optimization.",
    problem: {
      heading: "Physical sections are hard to bring back into engineering workflows",
      description:
        "Benchmarking and reverse-engineering activities rely on physical tyre cut-sections, which are difficult to measure, compare and reuse as structured inputs for engineering workflows without extensive manual digitization work.",
    },
    workflow: [
      "Acquisition of a tyre cut-section image",
      "Image calibration and scale definition",
      "Identification of external and internal contours",
      "Detection of relevant tyre components",
      "Geometric reconstruction and contour optimization",
      "Identification of key engineering points",
      "Extraction of design parameters",
      "Export to Moonar design workflows",
    ],
    inputs: [
      "High-resolution tyre cut-section image",
      "Photograph or scan of a physical section",
      "Scale or calibration reference",
      "Optional manually identified reference points",
      "Optional tyre size and basic specification data",
    ],
    outputs: [
      "Digitized tyre section contour",
      "Structured component geometries",
      "Optimized engineering curves",
      "Relevant geometric points",
      "Dimensional parameters",
      "Input parameters for tAIre Designer Suite",
      "Comparison-ready digital section",
      "DXF or other engineering file formats, where supported",
    ],
    configurability: {
      heading: "Calibrated to your section formats",
      description:
        "Calibration references and optional manually identified reference points allow the system to be adapted to different image sources, section formats and tyre size conventions.",
    },
    integration: {
      heading: "Feeds directly into tAIre Designer Suite",
      description:
        "Extracted geometry and design parameters are exported as input parameters for tAIre Designer Suite, or as DXF and other engineering file formats where supported, for use in existing CAD and PLM workflows.",
    },
    deployment: {
      heading: "Cloud or on-premise",
      description:
        "Runs in a customer-managed cloud environment or on-premise infrastructure, with role-based access and security requirements adapted to internal IT policy.",
    },
    platformNote: {
      label: "Physical Section to Digital Geometry",
      description:
        "tAIre Section Scanner sits alongside Tyre Geometry in the Moonar platform flow, with an inbound path from Manufacturing and Validation: it converts a physical, manufactured tyre section back into structured digital geometry for reuse in design and optimization workflows.",
    },
  },

  "taire-forge": {
    id: "taire-forge",
    eyebrow: "tAIre Platform — Predict",
    heroSummary:
      "An AI-based engineering platform that predicts key tyre behaviours directly from specification data.",
    heroBenefit:
      "Turn specification and experimental data into reusable predictive engineering intelligence, evaluated across different pressure and load conditions before physical testing.",
    problem: {
      heading: "Performance is often confirmed only after physical prototyping",
      description:
        "Tyre performance characteristics are typically evaluated only once physical prototypes are available, extending development timelines and limiting how many design variants can be compared early in the process.",
    },
    workflow: [
      "Import specification matrix and target load and pressure conditions",
      "Run predictive models for inflated profile, footprint, rolling resistance and cornering stiffness",
      "Compare predicted performance across pressure and load sweeps",
      "Export results for design review and validation planning",
    ],
    inputs: [
      "Specification matrix",
      "Inflation pressure range",
      "Vertical load range",
      "Load cases",
    ],
    outputs: [
      "Predicted inflated profile",
      "Footprint geometry",
      "Rolling resistance estimate",
      "Cornering stiffness estimate",
    ],
    configurability: {
      heading: "Matched to your specification format",
      description:
        "A dedicated connector translates a customer's specification matrix into Moonar's proprietary format, so predictions are generated directly from existing engineering data.",
    },
    integration: {
      heading: "Structured outputs for design review",
      description:
        "Performance predictions are exported in structured formats for use in design review, reporting and comparison against existing validation data.",
    },
    deployment: {
      heading: "Cloud or on-premise",
      description:
        "Runs in a customer-managed cloud environment or on-premise infrastructure, with role-based access and security requirements adapted to internal IT policy.",
    },
  },
};
