export const COMPANY = {
  name: "ForgeDots",
  full: "ForgeDots Technologies",
  tagline: "Innovate · Insight · Impact",
  email: "contactus@forgedots.com",
  phone: "+971 585909382",
  india:
    "F-502, Radhe Tower, Sudama Chock, Mota Varachha, Surat, Gujarat – 394101",
  uae: "Office No 57, Insurance Building, Al Rega, Dubai, United Arab Emirates",
};

export const SERVICES_LIST = [
  "Enterprise BI",
  "Data Engineering",
  "Advanced Data Analytics",
  "Generative AI",
  "Support & Managed Services",
  "Corporate Training",
];

export type Accent = "violet" | "amber" | "emerald";

export const SERVICE_CARDS: {
  n: string;
  name: string;
  desc: string;
  icon: string;
  accent: Accent;
  tags: string;
}[] = [
  {
    n: "01",
    name: "Enterprise BI",
    desc: "Empower your team with actionable intelligence from our comprehensive enterprise BI solutions, enabling strategic decision-making, fostering innovation, and driving sustainable growth.",
    icon: "BarChart3",
    accent: "violet",
    tags: "Oracle · Microsoft",
  },
  {
    n: "02",
    name: "Data Engineering",
    desc: "Drive innovation and efficiency with our Data Engineering Service, building the foundation for informed decision-making and sustainable growth in the digital age.",
    icon: "Database",
    accent: "amber",
    tags: "Databricks · Informatica",
  },
  {
    n: "03",
    name: "Advanced Data Analytics",
    desc: "Uncover hidden opportunities and drive innovation with our Advanced Data Analytics Service, harnessing the power of cutting-edge algorithms to deliver actionable recommendations for your business.",
    icon: "TrendingUp",
    accent: "emerald",
    tags: "Dataiku · Azure ML",
  },
  {
    n: "04",
    name: "Generative AI",
    desc: "Elevate your enterprise data assistance applications with our cutting-edge Generative AI, Large Language Model, and RAG technology, empowering your business with innovative solutions that provide insightful and contextually relevant assistance.",
    icon: "Cpu",
    accent: "violet",
    tags: "OpenAI · Gemini · Mistral",
  },
  {
    n: "05",
    name: "Support & Managed Services",
    desc: "Streamline your operations and ensure continuous success with our Support & Managed Service, delivering reliable assistance and strategic oversight for your business.",
    icon: "Shield",
    accent: "amber",
    tags: "All platforms",
  },
  {
    n: "06",
    name: "Corporate Training",
    desc: "Invest in your team's development with our Corporate Training Service, offering comprehensive programs crafted to enhance capabilities and meet your organization's evolving needs.",
    icon: "GraduationCap",
    accent: "emerald",
    tags: "Custom curriculum",
  },
];

export const SERVICES = [
  {
    n: "01",
    name: "Enterprise BI",
    accent: "violet" as Accent,
    long: "We design enterprise-grade BI ecosystems that turn fragmented reporting into a single source of truth. From executive scorecards to operational dashboards, we build BI that drives decisions — not just displays them.",
    bullets: [
      "Executive dashboards & KPI scorecards",
      "Self-service analytics enablement",
      "Data modeling & semantic layer design",
      "Migration from legacy BI platforms",
    ],
    infographic: "bi",
  },
  {
    n: "02",
    name: "Data Engineering",
    accent: "amber" as Accent,
    long: "Reliable data is the prerequisite for everything else. Our engineering teams build resilient pipelines, modern data warehouses, and lakehouse architectures that scale with your business.",
    bullets: [
      "ETL/ELT pipeline architecture",
      "Cloud data warehouse implementation",
      "Real-time streaming & CDC",
      "Data quality, lineage & governance",
    ],
    infographic: "pipeline",
  },
  {
    n: "03",
    name: "Advanced Data Analytics",
    accent: "emerald" as Accent,
    long: "Beyond reporting, we build statistical and machine learning models that forecast demand, segment customers, detect anomalies, and surface patterns hiding in your data.",
    bullets: [
      "Predictive & prescriptive modeling",
      "Customer segmentation & churn analysis",
      "Anomaly & fraud detection",
      "Forecasting & optimization",
    ],
    infographic: "analytics",
  },
  {
    n: "04",
    name: "Generative AI",
    accent: "violet" as Accent,
    long: "We engineer production-grade generative AI applications — from internal copilots to customer-facing agents — grounded in your data via retrieval-augmented generation.",
    bullets: [
      "Enterprise RAG architectures",
      "Custom AI assistants & copilots",
      "Document intelligence & summarization",
      "LLM fine-tuning & evaluation",
    ],
    infographic: "genai",
  },
  {
    n: "05",
    name: "Support & Managed Services",
    accent: "amber" as Accent,
    long: "Your data platform deserves operational discipline. We provide proactive monitoring, performance tuning, and SLA-backed support so your teams can focus on the work that matters.",
    bullets: [
      "24/7 platform monitoring",
      "Performance & cost optimization",
      "Incident response with SLAs",
      "Continuous improvement roadmap",
    ],
    infographic: "monitoring",
  },
  {
    n: "06",
    name: "Corporate Training",
    accent: "emerald" as Accent,
    long: "From executive workshops to hands-on technical bootcamps, our training builds the in-house capability your organization needs to own its data future.",
    bullets: [
      "Executive data-literacy workshops",
      "Hands-on BI & analytics bootcamps",
      "GenAI & LLM engineering tracks",
      "Custom curricula by role & level",
    ],
    infographic: "training",
  },
];

export const TECH_ROW_1 = [
  "Oracle",
  "Microsoft",
  "Informatica",
  "Databricks",
  "Dataiku",
  "OpenAI",
];
export const TECH_ROW_2 = [
  "Gemini",
  "Mistral AI",
  "Falcon AI",
  "DBRX",
  "Azure ML",
  "Power BI",
];

export const INDUSTRIES: {
  name: string;
  icon: string;
  accent: Accent;
  desc: string;
}[] = [
  {
    name: "Energy",
    icon: "Zap",
    accent: "amber",
    desc: "Operational analytics for smarter resource management.",
  },
  {
    name: "Healthcare",
    icon: "Heart",
    accent: "emerald",
    desc: "Compliance-ready data solutions for patient and operational insights.",
  },
  {
    name: "Real Estate",
    icon: "Building2",
    accent: "violet",
    desc: "Market intelligence and portfolio analytics at scale.",
  },
  {
    name: "Construction",
    icon: "HardHat",
    accent: "amber",
    desc: "Project tracking and cost analytics for complex builds.",
  },
  {
    name: "Retail",
    icon: "ShoppingBag",
    accent: "violet",
    desc: "Customer analytics and demand forecasting for growth.",
  },
  {
    name: "Education",
    icon: "GraduationCap",
    accent: "emerald",
    desc: "Data-driven performance tracking for institutions.",
  },
];

export const STATS = [
  {
    num: 100,
    suffix: "+",
    label: "Successful Projects",
    desc: "Delivered across industries and geographies",
    color: "violet" as Accent,
  },
  {
    num: 30,
    suffix: "+",
    label: "Years Experience",
    desc: "In data engineering, analytics, and AI",
    color: "amber" as Accent,
  },
  {
    num: 20,
    suffix: "+",
    label: "Customers Served",
    desc: "From regional SMEs to global enterprises",
    color: "emerald" as Accent,
  },
  {
    num: 5,
    suffix: "+",
    label: "Countries",
    desc: "UAE, India, and international markets",
    color: "violet" as Accent,
  },
];

export const PROCESS = [
  { name: "Planning", desc: "Define objectives and scope" },
  { name: "Data Gathering", desc: "Collect, clean, and prepare" },
  { name: "Model Development", desc: "Build and integrate AI/BI models" },
  { name: "Bot & Integration", desc: "Connect to your systems" },
  { name: "Testing", desc: "Validate accuracy and performance" },
  { name: "Deployment", desc: "Launch, monitor, and maintain" },
];

export const ADVANTAGES = [
  {
    title: "Strategy First",
    desc: "We start with your business goal, not the technology.",
    bg: "violet",
  },
  {
    title: "Full Stack",
    desc: "From raw data to deployed AI — one partner.",
    bg: "amber",
  },
  {
    title: "Industry Deep",
    desc: "6+ verticals, real domain knowledge.",
    bg: "emerald",
  },
  {
    title: "Global Reach",
    desc: "UAE, India, and international clients.",
    bg: "dark",
  },
];

export const ACCENT_HEX: Record<Accent, { base: string; soft: string }> = {
  violet: { base: "#6d5adc", soft: "#f3f1ff" },
  amber: { base: "#f59e0b", soft: "#fff8eb" },
  emerald: { base: "#10b981", soft: "#edfaf5" },
};
