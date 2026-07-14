/**
 * Single source of truth for all portfolio content.
 *
 * ─────────────────────────────────────────────────────────────────────
 * ⚠️  EDIT ME — the values below are realistic, production-shaped samples.
 * Swap in your real dates, metrics, links, and project details.
 * Nothing here is a verified claim; treat every number as a placeholder
 * until you replace it with your own.
 * ─────────────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Md Zeeshan Raza",
  firstName: "Zeeshan",
  role: "AI Engineer",
  roles: [
    "AI Engineer",
    "Machine Learning Engineer",
    "Generative AI Engineer",
    "LLM Engineer",
    "Agentic AI Engineer",
    "Data Scientist",
  ],
  tagline:
    "Building intelligent AI systems that solve real-world problems with LLMs, Agentic AI, and Production ML.",
  location: "India",
  availability: "Open to worldwide remote · relocation · visa sponsorship",
  email: "zshnreza@gmail.com",
  url: "https://zeeshanraza.dev",
  resumeUrl: "/resume.pdf", // drop a resume.pdf into /public
  socials: {
    github: "https://github.com/Zshnreza",
    linkedin: "https://linkedin.com/in/zeeshanraza", // ← replace
    x: "https://x.com/zeeshanraza", // ← replace
    calendly: "https://calendly.com/zeeshanraza/intro", // ← replace
  },
} as const;

/** Rotating keywords under the hero headline. */
export const heroKeywords = [
  "LLMs",
  "RAG",
  "LangChain",
  "LangGraph",
  "AWS Bedrock",
  "PyTorch",
  "TensorFlow",
  "Agentic AI",
  "Vector Databases",
  "Prompt Engineering",
  "Knowledge Graphs",
  "Docker",
] as const;

/** Headline metrics for the hero + achievements counters. */
export const stats = [
  { label: "Models shipped to production", value: 18, suffix: "+" },
  { label: "Inference latency reduced", value: 63, suffix: "%" },
  { label: "Documents indexed for RAG", value: 4.2, suffix: "M+" },
  { label: "GitHub stars across projects", value: 1200, suffix: "+" },
] as const;

export type Skill = { name: string; level: number };
export type SkillGroup = { title: string; accent: string; skills: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "AI & LLMs",
    accent: "#7c5cff",
    skills: [
      { name: "LLM Fine-tuning", level: 92 },
      { name: "RAG Pipelines", level: 95 },
      { name: "Agentic AI", level: 90 },
      { name: "LangChain / LangGraph", level: 93 },
      { name: "Prompt Engineering", level: 96 },
      { name: "AWS Bedrock", level: 85 },
    ],
  },
  {
    title: "Machine Learning",
    accent: "#3fb6ff",
    skills: [
      { name: "PyTorch", level: 90 },
      { name: "TensorFlow", level: 82 },
      { name: "scikit-learn", level: 88 },
      { name: "Transformers", level: 91 },
      { name: "MLOps", level: 84 },
    ],
  },
  {
    title: "Data & Backend",
    accent: "#00d3a7",
    skills: [
      { name: "Python", level: 96 },
      { name: "FastAPI", level: 90 },
      { name: "Vector DBs (pgvector / Pinecone)", level: 89 },
      { name: "PostgreSQL", level: 86 },
      { name: "Spark / Pandas", level: 83 },
    ],
  },
  {
    title: "Cloud & DevOps",
    accent: "#ff8a3d",
    skills: [
      { name: "AWS (SageMaker, Lambda)", level: 88 },
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 78 },
      { name: "CI/CD", level: 85 },
      { name: "Terraform", level: 74 },
    ],
  },
];

/** Flat tag list for the interactive skill sphere. */
export const skillTags = [
  "LLMs", "RAG", "LangGraph", "PyTorch", "Bedrock", "Agents", "Python",
  "FastAPI", "pgvector", "Pinecone", "Docker", "Kubernetes", "AWS",
  "SageMaker", "Transformers", "Fine-tuning", "Prompting", "MLOps",
  "TensorFlow", "Spark", "Terraform", "GraphRAG", "Embeddings", "vLLM",
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  accent: string;
  github?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "agentic-ai-platform",
    title: "Agentic AI Platform",
    category: "Agentic AI",
    summary:
      "A multi-agent orchestration layer that plans, delegates, and self-corrects across tools.",
    description:
      "A production framework where specialized agents reason over a shared memory, call tools through a typed registry, and recover from failures with reflection loops. Built on LangGraph with deterministic checkpoints for replayability.",
    tags: ["LangGraph", "Python", "Redis", "OpenAI", "Postgres"],
    metrics: [
      { label: "Task success", value: "94%" },
      { label: "Tools orchestrated", value: "40+" },
      { label: "p95 latency", value: "1.8s" },
    ],
    accent: "#7c5cff",
    github: "https://github.com/Zshnreza",
    featured: true,
  },
  {
    slug: "rag-pipeline",
    title: "Enterprise RAG Pipeline",
    category: "Retrieval",
    summary:
      "Hybrid retrieval over 4M+ documents with re-ranking, citations, and eval guardrails.",
    description:
      "A retrieval stack combining BM25 + dense embeddings, cross-encoder re-ranking, and streaming answers with inline citations. Ships with an offline eval harness measuring faithfulness and answer relevance on every deploy.",
    tags: ["pgvector", "Cohere Rerank", "FastAPI", "LangChain", "Ragas"],
    metrics: [
      { label: "Docs indexed", value: "4.2M" },
      { label: "Faithfulness", value: "0.93" },
      { label: "Recall@10", value: "0.88" },
    ],
    accent: "#3fb6ff",
    github: "https://github.com/Zshnreza",
    featured: true,
  },
  {
    slug: "multimodal-ai",
    title: "Multimodal AI Assistant",
    category: "Multimodal",
    summary:
      "Vision + language assistant that reasons over documents, charts, and screenshots.",
    description:
      "Combines a vision encoder with an LLM to answer questions grounded in images and PDFs. Handles OCR, layout parsing, and chart understanding with tool-augmented reasoning.",
    tags: ["CLIP", "Vision Transformers", "PyTorch", "Triton"],
    metrics: [
      { label: "VQA accuracy", value: "89%" },
      { label: "Modalities", value: "3" },
      { label: "Throughput", value: "120 rps" },
    ],
    accent: "#00d3a7",
    github: "https://github.com/Zshnreza",
    featured: true,
  },
  {
    slug: "llm-eval-framework",
    title: "LLM Evaluation Framework",
    category: "Evaluation",
    summary:
      "Automated, model-graded evals with regression gates wired into CI.",
    description:
      "A framework for defining datasets, rubrics, and LLM-as-judge scoring that blocks regressions before release. Tracks drift across model versions with dashboards.",
    tags: ["Python", "LLM-as-Judge", "GitHub Actions", "DuckDB"],
    metrics: [
      { label: "Test cases", value: "2,400" },
      { label: "CI gate", value: "< 3 min" },
      { label: "Regressions caught", value: "31" },
    ],
    accent: "#ff8a3d",
    github: "https://github.com/Zshnreza",
  },
  {
    slug: "market-intelligence",
    title: "Market Intelligence Platform",
    category: "Applied ML",
    summary:
      "Real-time signal extraction from news, filings, and market data.",
    description:
      "Streams unstructured financial text through NER, sentiment, and event-extraction models to surface tradable signals with explainability.",
    tags: ["Kafka", "spaCy", "Transformers", "Airflow"],
    metrics: [
      { label: "Sources", value: "60+" },
      { label: "Latency", value: "< 2s" },
      { label: "Precision", value: "0.87" },
    ],
    accent: "#ff5c7c",
    github: "https://github.com/Zshnreza",
  },
  {
    slug: "vector-search-engine",
    title: "Vector Search Engine",
    category: "Infrastructure",
    summary:
      "Low-latency semantic search with hybrid filtering at scale.",
    description:
      "A search service with HNSW indexing, metadata filtering, and quantization for cost-efficient recall over hundreds of millions of vectors.",
    tags: ["HNSW", "Quantization", "Rust", "gRPC"],
    metrics: [
      { label: "Vectors", value: "200M" },
      { label: "p99", value: "12ms" },
      { label: "Recall", value: "0.96" },
    ],
    accent: "#12c2e9",
    github: "https://github.com/Zshnreza",
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  tech: string[];
};

export const experiences: Experience[] = [
  {
    company: "Amazon",
    role: "Machine Learning Engineer",
    period: "2023 — Present",
    location: "Remote · India",
    summary:
      "Building and scaling ML systems that serve millions of requests with strict latency and reliability targets.",
    highlights: [
      "Cut model inference latency 63% by migrating serving to a batched, quantized runtime.",
      "Shipped a retrieval-augmented assistant adopted by 5 internal teams.",
      "Owned the eval and rollout pipeline that gates every production model release.",
    ],
    tech: ["Python", "PyTorch", "AWS SageMaker", "Bedrock", "Docker"],
  },
  {
    company: "Ayvole",
    role: "AI Engineer",
    period: "2022 — 2023",
    location: "India",
    summary:
      "Led development of LLM-powered product features from prototype to production.",
    highlights: [
      "Designed a RAG pipeline over 4M+ documents with citation-grounded answers.",
      "Reduced hallucination rate to under 4% with an eval-driven guardrail layer.",
      "Built the agent framework powering the platform's automation workflows.",
    ],
    tech: ["LangChain", "FastAPI", "pgvector", "OpenAI", "Postgres"],
  },
  {
    company: "BPCL",
    role: "Data Scientist",
    period: "2021 — 2022",
    location: "India",
    summary:
      "Applied ML to operational data to drive measurable business outcomes.",
    highlights: [
      "Built demand-forecasting models improving planning accuracy by 22%.",
      "Automated a reporting pipeline that saved 30+ analyst hours per week.",
      "Partnered with ops leaders to translate models into decisions.",
    ],
    tech: ["Python", "scikit-learn", "Spark", "SQL", "Airflow"],
  },
];

export type TimelineItem = {
  year: string;
  title: string;
  detail: string;
};

export const timeline: TimelineItem[] = [
  {
    year: "2020",
    title: "Foundations",
    detail: "Fell in love with ML — from linear models to my first neural nets.",
  },
  {
    year: "2021",
    title: "Data Science, in the real world",
    detail: "Turned messy operational data into forecasts that changed decisions.",
  },
  {
    year: "2022",
    title: "The LLM inflection point",
    detail: "Went all-in on generative AI, RAG, and agentic systems in production.",
  },
  {
    year: "2023",
    title: "Scaling AI at Amazon",
    detail: "Serving models at scale — latency, reliability, and eval discipline.",
  },
  {
    year: "Now",
    title: "Building the future of agents",
    detail: "Designing autonomous systems that reason, act, and self-correct.",
  },
];

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
