/**
 * Single source of truth for all portfolio content.
 *
 * Sourced from Md Zeeshan Raza's CV (Zeeshan cv.pdf) and github.com/Zshnreza.
 * Facts here — dates, roles, metrics, projects — reflect the real CV.
 * Skill "level" values are a subjective self-assessment: tune them freely.
 */

export const site = {
  name: "Md Zeeshan Raza",
  firstName: "Zeeshan",
  role: "ML & Agentic AI Engineer",
  roles: [
    "ML & Agentic AI Engineer",
    "Generative AI Engineer",
    "LLM Engineer",
    "Machine Learning Engineer",
    "Data Analyst",
  ],
  tagline:
    "ML and Agentic AI Engineer with 3 years of experience across LLMs, RAG, Agentic Systems, and Multimodal workflows — built in production on AWS Bedrock.",
  location: "Bangalore, India",
  availability: "Open to Bangalore & global opportunities",
  email: "zshnreza@gmail.com",
  // Phone from the CV is intentionally NOT published here to avoid scraping/spam.
  // Add it if you want it public: "+91-7449671033"
  url: "https://zeeshan-portfolio-chi.vercel.app",
  resumeUrl: "/resume.pdf", // drop your CV into /public as resume.pdf
  socials: {
    github: "https://github.com/Zshnreza",
    linkedin: "https://www.linkedin.com/in/zeeshan-ai-engineer/",
    calendly: "https://calendly.com/zshnreza",
  },
} as const;

/** Rotating keywords under the hero headline — all from the CV skill set. */
export const heroKeywords = [
  "LLMs",
  "RAG",
  "Agentic AI",
  "LangGraph",
  "LangChain",
  "AWS Bedrock",
  "PyTorch",
  "TensorFlow",
  "Knowledge Graphs",
  "Multimodal AI",
  "Vector Databases",
  "Prompt Engineering",
] as const;

/** Headline metrics — every number below is taken from the CV. */
export const stats = [
  { label: "Years building AI systems", value: 3, suffix: "+" },
  { label: "Faster data-driven decisions", value: 40, suffix: "%" },
  { label: "Concurrent enterprise projects", value: 5, suffix: "+" },
  { label: "Startups analysed, 8 sectors", value: 4000, suffix: "+" },
] as const;

export type Skill = { name: string; level: number };
export type SkillGroup = { title: string; accent: string; skills: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Generative & Agentic AI",
    accent: "#7c5cff",
    skills: [
      { name: "LLMs & LLM Fine-Tuning", level: 92 },
      { name: "RAG + Contextual Chunking", level: 94 },
      { name: "Agentic AI & Multi-Agent", level: 90 },
      { name: "LangChain / LangGraph", level: 92 },
      { name: "Prompt Engineering", level: 95 },
      { name: "Knowledge Graphs / SPARQL", level: 82 },
    ],
  },
  {
    title: "AI / ML Frameworks",
    accent: "#3fb6ff",
    skills: [
      { name: "PyTorch", level: 88 },
      { name: "TensorFlow", level: 82 },
      { name: "Hugging Face Transformers", level: 90 },
      { name: "scikit-learn", level: 86 },
      { name: "Keras", level: 80 },
    ],
  },
  {
    title: "Cloud & Engineering",
    accent: "#00d3a7",
    skills: [
      { name: "AWS Bedrock", level: 90 },
      { name: "AWS (S3, Lambda, SageMaker)", level: 84 },
      { name: "Docker", level: 88 },
      { name: "REST APIs (Flask)", level: 86 },
      { name: "CI/CD & Git", level: 85 },
    ],
  },
  {
    title: "Data, Analytics & BI",
    accent: "#ff8a3d",
    skills: [
      { name: "Python", level: 95 },
      { name: "SQL / PostgreSQL", level: 88 },
      { name: "ETL Pipelines", level: 90 },
      { name: "Streamlit", level: 87 },
      { name: "Power BI / Tableau", level: 80 },
    ],
  },
];

/** Flat tag list for the interactive skill sphere — CV tech only. */
export const skillTags = [
  "LLMs", "RAG", "LangGraph", "LangChain", "Agentic AI", "PyTorch",
  "TensorFlow", "Transformers", "Bedrock", "SageMaker", "Lambda", "S3",
  "Python", "SQL", "Flask", "Docker", "CI/CD", "SPARQL", "Knowledge Graphs",
  "Vector DBs", "Multimodal", "Fine-Tuning", "Streamlit", "Power BI",
  "Alteryx", "scikit-learn", "Keras", "ETL",
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
    slug: "agentic-ai-rag-pipeline",
    title: "Agentic AI & RAG Pipeline System",
    category: "Agentic AI · AWS Bedrock",
    summary:
      "Production-grade multi-agent system on LangGraph with contextual-chunking RAG and SPARQL knowledge graphs.",
    description:
      "Designed and deployed a production-grade multi-agent AI system using LangGraph, integrating contextual-chunking RAG pipelines and SPARQL-based knowledge graphs — fully Dockerized with CI/CD pipelines, monitoring, and observability on AWS.",
    tags: ["LangGraph", "LangChain", "RAG", "SPARQL", "Docker", "AWS Bedrock"],
    metrics: [
      { label: "Enterprise projects", value: "5+" },
      { label: "Knowledge graph", value: "SPARQL" },
      { label: "Delivery", value: "Docker + CI/CD" },
    ],
    accent: "#7c5cff",
    featured: true,
  },
  {
    slug: "llm-finetuning-eval-framework",
    title: "LLM Fine-Tuning & AI Evaluation Framework",
    category: "Evaluation · AWS Bedrock",
    summary:
      "End-to-end fine-tuning pipelines with offline and online evaluation for groundedness, safety, and hallucination.",
    description:
      "Developed end-to-end LLM fine-tuning pipelines leveraging PyTorch and TensorFlow, implementing robust offline and online evaluation frameworks (LLM-as-Judge, groundedness, safety, hallucination detection) supported by automated Python dashboards.",
    tags: ["PyTorch", "TensorFlow", "LLM-as-Judge", "BLEU", "ROUGE", "BERTScore"],
    metrics: [
      { label: "Frameworks", value: "PyTorch / TF" },
      { label: "Scoring", value: "LLM-as-Judge" },
      { label: "Signals", value: "BLEU · ROUGE" },
    ],
    accent: "#3fb6ff",
    featured: true,
  },
  {
    slug: "multimodal-ai-data-pipeline",
    title: "Multimodal AI Data Pipeline",
    category: "Multimodal · AWS Bedrock",
    summary:
      "Scalable ingestion across text, image, audio, and video to optimise foundation models, with live quality monitoring.",
    description:
      "Architected scalable multimodal data ingestion pipelines across text, image, audio, and video to optimize foundation models, complemented by real-time monitoring dashboards tracking pipeline health and model quality metrics.",
    tags: ["ETL", "Multimodal", "Streamlit", "AWS Bedrock", "Monitoring"],
    metrics: [
      { label: "Modalities", value: "4" },
      { label: "Faster decisions", value: "40%" },
      { label: "Monitoring", value: "Real-time" },
    ],
    accent: "#00d3a7",
    featured: true,
  },
  {
    slug: "zeeshan-pro-agent",
    title: "Zeeshan Pro Agent",
    category: "Open Source · Agents",
    summary:
      "A ChatGPT-style personal agent workspace for hosted LLM workflows — with human approval before external actions.",
    description:
      "An open-source personal agent workspace built on LangGraph and LangChain. Handles university/job discovery, CV and cover-letter drafting, and document checklists, with human approval gates before submissions and self-improvement from saved outcomes. Runs entirely on hosted inference (Groq / Hugging Face) plus managed Qdrant Cloud vector storage — no local GPU required.",
    tags: ["LangGraph", "LangChain", "Python", "Groq", "Qdrant"],
    metrics: [
      { label: "Orchestration", value: "LangGraph" },
      { label: "Vector store", value: "Qdrant" },
      { label: "Inference", value: "Groq / HF" },
    ],
    accent: "#ff8a3d",
    github: "https://github.com/Zshnreza/zeeshan-pro-agent",
  },
  {
    slug: "rag-telegram-bot",
    title: "RAG Telegram Bot",
    category: "Open Source · RAG",
    summary:
      "A fully local RAG chatbot with source attribution — no OpenAI API required. Live on Telegram.",
    description:
      "A Retrieval-Augmented Generation chatbot answering questions from custom documents with source attribution. Runs a local Mistral model via Ollama, Sentence Transformers for embeddings, and FAISS for vector search, served through the Telegram Bot API — fully local, zero inference cost.",
    tags: ["Ollama", "Mistral", "FAISS", "Sentence Transformers", "Python"],
    metrics: [
      { label: "Local LLM", value: "Mistral" },
      { label: "Vector search", value: "FAISS" },
      { label: "API cost", value: "$0" },
    ],
    accent: "#ff5c7c",
    github: "https://github.com/Zshnreza/rag-telegram-bot",
    demo: "https://t.me/zeeshan_rag_bot",
  },
  {
    slug: "nyc-taxi-data-processing",
    title: "NYC Taxi Data Processing",
    category: "Data Engineering",
    summary:
      "Large-scale trip-data processing and analysis — the data-engineering fundamentals behind reliable ML.",
    description:
      "A data-engineering project processing large-scale NYC taxi trip data: ingestion, cleaning, and analysis pipelines that turn raw records into query-ready datasets.",
    tags: ["Python", "ETL", "Data Engineering", "SQL"],
    metrics: [
      { label: "Domain", value: "Trip data" },
      { label: "Focus", value: "ETL" },
      { label: "Scale", value: "Large-scale" },
    ],
    accent: "#12c2e9",
    github: "https://github.com/Zshnreza/NYC-Taxi-Data-Processing",
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
    company: "Amazon Web Services (AWS)",
    role: "ML Data Associate II — ML & Agentic AI Engineer",
    period: "Nov 2024 — Mar 2026",
    location: "Bedrock · Bangalore, India",
    summary:
      "Built production Generative AI systems on AWS Bedrock — agentic workflows, multimodal pipelines, and the evaluation frameworks that keep them safe.",
    highlights: [
      "Engineered scalable ETL pipelines for multimodal LLM training across text, image, audio, and video on AWS Bedrock, supporting 5+ concurrent enterprise projects with improved reliability.",
      "Built Agentic AI systems using LangGraph and LangChain — multi-step reasoning agents, tool-calling pipelines, and RAG workflows with contextual chunking and SPARQL-based knowledge graph integration.",
      "Fine-tuned LLMs (SLMs, LRMs) with PyTorch and TensorFlow, and designed AI quality-assurance frameworks (LLM-as-judge, BLEU, ROUGE, BERTScore) to evaluate accuracy, hallucination, groundedness, and safety at production scale.",
      "Enabled 40% faster data-driven decisions through real-time Streamlit dashboards monitoring pipeline health and model performance for cross-functional teams.",
      "Productionized enterprise AI workflows with Docker, Flask-based REST APIs, CI/CD, observability, alerting, and runbooks for enterprise-grade reliability.",
    ],
    tech: [
      "AWS Bedrock",
      "LangGraph",
      "LangChain",
      "PyTorch",
      "TensorFlow",
      "Docker",
      "Flask",
      "Streamlit",
    ],
  },
  {
    company: "Ayvole",
    role: "Market Research Analyst & Data Analyst",
    period: "Jul 2023 — Nov 2024",
    location: "Dehradun, India",
    summary:
      "Turned large-scale, messy market data into research and recommendations that senior stakeholders acted on.",
    highlights: [
      "Designed end-to-end data collection and analytics pipelines aggregating structured datasets from 100+ sources.",
      "Supported large-scale research analysing 4,000+ startups across 8 sectors for Outlook Business — Start-Up Outperformers 2023.",
      "Conducted market research and gap analysis, translating statistical findings into written business recommendations and presentations for senior stakeholders.",
      "Drove three new media product launches, contributing to a 30% increase in market share across client engagements.",
    ],
    tech: ["Python", "SQL", "Alteryx", "Power BI", "Tableau", "Excel"],
  },
  {
    company: "Bharat Petroleum (BPCL)",
    role: "Technical Apprentice — Data & Operations",
    period: "May 2021 — May 2022",
    location: "Kolkata, India",
    summary:
      "First hands-on exposure to real operational data — and the compliance discipline that comes with it.",
    highlights: [
      "Collected, processed, and analysed operational data while ensuring 100% compliance with industry safety and documentation standards.",
      "Delivered data-driven recommendations supporting four or more operational departments.",
    ],
    tech: ["Python", "SQL", "Excel", "Statistical Analysis"],
  },
];

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
  detail: string;
};

export const education: EducationItem[] = [
  {
    degree: "B.Tech — Electrical & Electronics Engineering",
    school: "Swami Vivekananda Institute of Science and Technology, Kolkata",
    period: "Jun 2020 — May 2023",
    detail: "CGPA 8.4",
  },
];

export const certifications = [
  { name: "AWS Educate: Introduction to Cloud 101", issuer: "Amazon Web Services · Credly Verified" },
  { name: "Summarize & Simplify Information with Microsoft 365 Copilot", issuer: "Microsoft Learn" },
  { name: "Get Started Building with Power BI", issuer: "Microsoft Learn" },
  { name: "Data Analysis with Python", issuer: "freeCodeCamp" },
  { name: "Intermediate SQL", issuer: "DataCamp" },
  { name: "Introduction to SQL", issuer: "DataCamp" },
  { name: "Introduction to Relational Databases in SQL", issuer: "DataCamp" },
  { name: "Google Analytics for Beginners", issuer: "Google Analytics Academy" },
  { name: "AI For India", issuer: "HCL GUVI" },
  { name: "Google for Education", issuer: "HCL GUVI" },
  { name: "2 Years on Kaggle", issuer: "Kaggle" },
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
    detail:
      "Began a B.Tech in Electrical & Electronics Engineering in Kolkata — and found my way to data.",
  },
  {
    year: "2021",
    title: "First real operational data",
    detail:
      "Technical Apprentice at BPCL — analysing operations data across four departments, with zero compromise on compliance.",
  },
  {
    year: "2023",
    title: "Graduated, then went deep on research",
    detail:
      "Finished the B.Tech with a CGPA of 8.4 and joined Ayvole, analysing 4,000+ startups across 8 sectors.",
  },
  {
    year: "2024",
    title: "Generative AI at AWS Bedrock",
    detail:
      "Joined AWS to build agentic systems, multimodal pipelines, and evaluation frameworks at production scale.",
  },
  {
    year: "2026",
    title: "Building the future of agents",
    detail:
      "Open to Bangalore and global roles — designing autonomous systems that reason, act, and self-correct.",
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
